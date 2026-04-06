# SoumyaFlow Frontend – DevOps & Deployment Guide

> Complete deployment reference for **Docker**, **Kubernetes**, **Heroku**, **AWS**, and **Jenkins CI/CD**.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Docker](#docker)
4. [Docker Compose](#docker-compose)
5. [Kubernetes](#kubernetes)
6. [Heroku](#heroku)
7. [AWS](#aws)
8. [Jenkins CI/CD](#jenkins-cicd)
9. [Deployment Checklist](#deployment-checklist)

---

## Project Overview

**SoumyaFlow** is a professional task manager workspace. The frontend is built with plain HTML, CSS, and JavaScript and served via nginx inside a Docker container. It communicates with a sibling backend over `/api`.

```
task-manager-frontend/
├── index.html
├── privacy.html
├── terms.html
├── styles.css
├── enterprise.css
├── suite.js
├── Dockerfile
├── nginx.conf
├── docker-compose.yml
├── heroku.yml
├── Procfile
├── Jenkinsfile
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
└── aws/
    ├── buildspec.yml
    ├── ecs-task-definition.json
    └── appspec.yml
```

---

## Architecture

```
┌──────────────┐     HTTP      ┌─────────────────────┐     /api      ┌──────────────────┐
│ User Browser │ ───────────▶ │  Frontend (nginx)    │ ───────────▶ │  Backend (Node)  │
└──────────────┘              │  index.html + suite  │              │  server.js       │
                              └─────────────────────┘              └────────┬─────────┘
                                                                            │
                                                                   ┌────────▼─────────┐
                                                                   │  data/store.json │
                                                                   └──────────────────┘
```

**CI/CD Flow:**

```
GitHub Push
    │
    ▼
Jenkins Pipeline
    ├── Lint & Validate
    ├── Docker Build
    ├── Smoke Test
    ├── Push to AWS ECR
    ├── Deploy → Staging (develop branch)
    ├── Manual Approval Gate
    └── Deploy → Production (main branch)
                │
                ▼
        Kubernetes Cluster (EKS)
```

---

## Docker

### Dockerfile

```dockerfile
# Stage 1 – builder (easy to upgrade to a bundler later)
FROM node:20-alpine AS builder
WORKDIR /app
COPY index.html privacy.html terms.html styles.css enterprise.css suite.js ./

# Stage 2 – production nginx image
FROM nginx:1.27-alpine AS production
LABEL app="soumyaflow-frontend"
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://localhost/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/javascript application/json;

    location ~* \.(css|js|png|jpg|ico|svg|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
        add_header X-Frame-Options "SAMEORIGIN";
        add_header X-Content-Type-Options "nosniff";
    }

    # Proxy API to backend container
    location /api/ {
        proxy_pass         http://backend:3000/api/;
        proxy_http_version 1.1;
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
    }

    # Health check for load balancers / Kubernetes
    location /health {
        access_log off;
        return 200 "OK\n";
        add_header Content-Type text/plain;
    }
}
```

### Build & Run Commands

```bash
# Build the image
docker build -t soumyaflow-frontend .

# Run standalone (frontend only)
docker run -p 8080:80 soumyaflow-frontend

# Visit: http://localhost:8080
```

---

## Docker Compose

Runs **frontend + backend** together in a shared Docker network.

### docker-compose.yml

```yaml
version: "3.9"

services:

  frontend:
    build:
      context: ./task-manager-frontend
      dockerfile: Dockerfile
    container_name: soumyaflow-frontend
    restart: unless-stopped
    ports:
      - "8080:80"
    depends_on:
      - backend
    networks:
      - soumyaflow-net

  backend:
    build:
      context: ./task-manager-backend
    container_name: soumyaflow-backend
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - backend-data:/app/data
    environment:
      - NODE_ENV=production
      - PORT=3000
    networks:
      - soumyaflow-net
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:3000/api/health"]
      interval: 30s
      timeout: 5s
      retries: 3

networks:
  soumyaflow-net:
    driver: bridge

volumes:
  backend-data:
```

### Commands

```bash
# Start everything
docker compose up --build

# Start in background
docker compose up -d --build

# View logs
docker compose logs -f frontend

# Stop and remove containers
docker compose down

# Stop and remove containers + volumes
docker compose down -v
```

---

## Kubernetes

Deploys the frontend to a Kubernetes cluster with zero-downtime rolling updates and auto-scaling.

### k8s/deployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: soumyaflow-frontend
  namespace: soumyaflow
  labels:
    app: soumyaflow-frontend
spec:
  replicas: 2
  selector:
    matchLabels:
      app: soumyaflow-frontend
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0        # zero-downtime deploy
  template:
    metadata:
      labels:
        app: soumyaflow-frontend
    spec:
      containers:
        - name: frontend
          image: YOUR_ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/soumyaflow-frontend:latest
          ports:
            - containerPort: 80
          resources:
            requests:
              cpu: "100m"
              memory: "128Mi"
            limits:
              cpu: "250m"
              memory: "256Mi"
          livenessProbe:
            httpGet:
              path: /health
              port: 80
            initialDelaySeconds: 10
            periodSeconds: 15
          readinessProbe:
            httpGet:
              path: /health
              port: 80
            initialDelaySeconds: 5
            periodSeconds: 10
```

### k8s/service.yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: soumyaflow-frontend-svc
  namespace: soumyaflow
spec:
  type: ClusterIP
  selector:
    app: soumyaflow-frontend
  ports:
    - port: 80
      targetPort: 80
```

### k8s/ingress.yaml

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: soumyaflow-ingress
  namespace: soumyaflow
  annotations:
    kubernetes.io/ingress.class: "nginx"
spec:
  rules:
    - host: soumyaflow.yourdomain.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: soumyaflow-frontend-svc
                port:
                  number: 80
          - path: /api
            pathType: Prefix
            backend:
              service:
                name: soumyaflow-backend-svc
                port:
                  number: 3000

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: soumyaflow-frontend-hpa
  namespace: soumyaflow
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: soumyaflow-frontend
  minReplicas: 2
  maxReplicas: 6
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```

### Deploy Commands

```bash
# Create namespace and deploy all
kubectl apply -f k8s/

# Check rollout status
kubectl rollout status deployment/soumyaflow-frontend -n soumyaflow

# View running pods
kubectl get pods -n soumyaflow

# View services
kubectl get svc -n soumyaflow

# Scale manually
kubectl scale deployment soumyaflow-frontend --replicas=4 -n soumyaflow

# Roll back to previous version
kubectl rollout undo deployment/soumyaflow-frontend -n soumyaflow
```

---

## Heroku

### Option A – Docker Deploy (Recommended)

#### heroku.yml

```yaml
build:
  docker:
    web: Dockerfile

run:
  web: nginx -g "daemon off;"
```

#### Commands

```bash
heroku login
heroku create soumyaflow-app
heroku stack:set container -a soumyaflow-app
git push heroku main
heroku open -a soumyaflow-app
```

### Option B – Classic Buildpack (uses Procfile)

#### Procfile

```
web: npx serve -s . -l $PORT
```

#### Commands

```bash
heroku buildpacks:set heroku/nodejs -a soumyaflow-app
npm install --save-dev serve
git add . && git commit -m "add Procfile"
git push heroku main
```

### Useful Heroku Commands

```bash
# View live logs
heroku logs --tail -a soumyaflow-app

# Open app in browser
heroku open -a soumyaflow-app

# Set environment variable
heroku config:set NODE_ENV=production -a soumyaflow-app

# Check dyno status
heroku ps -a soumyaflow-app
```

---

## AWS

Deployment pipeline: **CodeBuild → ECR → ECS Fargate** (optionally via CodePipeline).

### aws/buildspec.yml

Used by **AWS CodeBuild** to build and push the Docker image to ECR.

```yaml
version: 0.2

phases:
  pre_build:
    commands:
      - echo "Logging in to ECR..."
      - aws ecr get-login-password --region $AWS_DEFAULT_REGION |
          docker login --username AWS --password-stdin
          $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com
      - REPOSITORY_URI=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO_NAME
      - IMAGE_TAG=$(echo $CODEBUILD_RESOLVED_SOURCE_VERSION | cut -c 1-7)

  build:
    commands:
      - docker build -t $REPOSITORY_URI:latest .
      - docker tag $REPOSITORY_URI:latest $REPOSITORY_URI:$IMAGE_TAG

  post_build:
    commands:
      - docker push $REPOSITORY_URI:latest
      - docker push $REPOSITORY_URI:$IMAGE_TAG
      - printf '[{"name":"soumyaflow-frontend","imageUri":"%s"}]'
          $REPOSITORY_URI:$IMAGE_TAG > imagedefinitions.json

artifacts:
  files:
    - imagedefinitions.json
```

**CodeBuild environment variables to set:**

| Variable | Example Value |
|---|---|
| `AWS_DEFAULT_REGION` | `ap-south-1` |
| `AWS_ACCOUNT_ID` | `123456789012` |
| `IMAGE_REPO_NAME` | `soumyaflow-frontend` |

### aws/ecs-task-definition.json

Defines the **ECS Fargate** task for running the frontend container.

```json
{
  "family": "soumyaflow-frontend",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "executionRoleArn": "arn:aws:iam::YOUR_ACCOUNT_ID:role/ecsTaskExecutionRole",
  "containerDefinitions": [
    {
      "name": "soumyaflow-frontend",
      "image": "YOUR_ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/soumyaflow-frontend:latest",
      "portMappings": [{ "containerPort": 80, "protocol": "tcp" }],
      "environment": [{ "name": "NODE_ENV", "value": "production" }],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/soumyaflow-frontend",
          "awslogs-region": "ap-south-1",
          "awslogs-stream-prefix": "ecs"
        }
      },
      "healthCheck": {
        "command": ["CMD-SHELL", "wget -qO- http://localhost/health || exit 1"],
        "interval": 30,
        "timeout": 5,
        "retries": 3
      }
    }
  ]
}
```

### aws/appspec.yml

Used by **AWS CodeDeploy** for blue/green ECS deployment.

```yaml
version: 0.0
Resources:
  - TargetService:
      Type: AWS::ECS::Service
      Properties:
        TaskDefinition: <TASK_DEFINITION>
        LoadBalancerInfo:
          ContainerName: soumyaflow-frontend
          ContainerPort: 80
```

### AWS Setup Commands

```bash
# 1. Create ECR repository
aws ecr create-repository \
    --repository-name soumyaflow-frontend \
    --region ap-south-1

# 2. Create CloudWatch log group
aws logs create-log-group \
    --log-group-name /ecs/soumyaflow-frontend \
    --region ap-south-1

# 3. Register ECS task definition
aws ecs register-task-definition \
    --cli-input-json file://aws/ecs-task-definition.json

# 4. Push image manually (if not using CodeBuild)
aws ecr get-login-password --region ap-south-1 | \
    docker login --username AWS --password-stdin \
    YOUR_ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com

docker build -t soumyaflow-frontend .
docker tag soumyaflow-frontend:latest \
    YOUR_ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/soumyaflow-frontend:latest
docker push \
    YOUR_ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/soumyaflow-frontend:latest
```

---

## Jenkins CI/CD

Full pipeline defined in `Jenkinsfile` at the project root.

### Pipeline Stages

```
1. Checkout          → Pull source from Git
2. Lint & Validate   → Check all required files exist
3. Docker Build      → Build the nginx image
4. Docker Test       → Smoke-test the running container
5. Push to ECR       → Push image to AWS ECR (main/develop only)
6. Deploy Staging    → kubectl rolling update on staging (develop branch)
7. Approval Gate     → Manual approval required before production
8. Deploy Production → kubectl rolling update on prod (main branch)
9. Notify            → Slack notification on success or failure
```

### Jenkinsfile

```groovy
pipeline {
    agent any

    environment {
        APP_NAME       = "soumyaflow-frontend"
        AWS_REGION     = "ap-south-1"
        AWS_ACCOUNT_ID = credentials("AWS_ACCOUNT_ID")
        ECR_REPO       = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${APP_NAME}"
        IMAGE_TAG      = "${env.GIT_COMMIT?.take(7) ?: 'latest'}"
        FULL_IMAGE     = "${ECR_REPO}:${IMAGE_TAG}"
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: "10"))
        timeout(time: 30, unit: "MINUTES")
        timestamps()
    }

    stages {

        stage("Checkout") {
            steps { checkout scm }
        }

        stage("Lint & Validate") {
            steps {
                sh '''
                    for f in index.html styles.css enterprise.css suite.js nginx.conf Dockerfile; do
                        [ -f "$f" ] && echo "✓ $f" || { echo "✗ MISSING: $f"; exit 1; }
                    done
                '''
            }
        }

        stage("Docker Build") {
            steps {
                sh "docker build --tag ${FULL_IMAGE} --tag ${ECR_REPO}:latest ."
            }
        }

        stage("Docker Test") {
            steps {
                sh """
                    docker run -d --name sf-test -p 9090:80 ${FULL_IMAGE}
                    sleep 5
                    curl -sf http://localhost:9090/health || \
                        { docker logs sf-test; docker rm -f sf-test; exit 1; }
                    docker rm -f sf-test
                """
            }
        }

        stage("Push to ECR") {
            when { anyOf { branch "main"; branch "develop" } }
            steps {
                withCredentials([[
                    $class: "AmazonWebServicesCredentialsBinding",
                    credentialsId: "AWS_CREDENTIALS"
                ]]) {
                    sh """
                        aws ecr get-login-password --region ${AWS_REGION} | \
                            docker login --username AWS --password-stdin \
                            ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com
                        docker push ${FULL_IMAGE}
                        docker push ${ECR_REPO}:latest
                    """
                }
            }
        }

        stage("Deploy → Staging") {
            when { branch "develop" }
            steps {
                withCredentials([file(credentialsId: "KUBECONFIG_STAGING",
                                      variable: "KUBECONFIG")]) {
                    sh """
                        kubectl set image deployment/${APP_NAME} \
                            frontend=${FULL_IMAGE} --namespace=soumyaflow-staging
                        kubectl rollout status deployment/${APP_NAME} \
                            --namespace=soumyaflow-staging --timeout=120s
                    """
                }
            }
        }

        stage("Approve Production Deploy") {
            when { branch "main" }
            steps {
                timeout(time: 15, unit: "MINUTES") {
                    input message: "Deploy ${IMAGE_TAG} to PRODUCTION?",
                          ok: "Deploy Now",
                          submitter: "ops-team,devops-lead"
                }
            }
        }

        stage("Deploy → Production") {
            when { branch "main" }
            steps {
                withCredentials([file(credentialsId: "KUBECONFIG_PROD",
                                      variable: "KUBECONFIG")]) {
                    sh """
                        kubectl set image deployment/${APP_NAME} \
                            frontend=${FULL_IMAGE} --namespace=soumyaflow
                        kubectl rollout status deployment/${APP_NAME} \
                            --namespace=soumyaflow --timeout=180s
                    """
                }
            }
        }
    }

    post {
        success {
            sh """curl -s -X POST -H 'Content-type: application/json' \
                --data '{"text":"✅ soumyaflow-frontend deployed: ${IMAGE_TAG}"}' \
                $SLACK_WEBHOOK_URL"""
        }
        failure {
            sh """curl -s -X POST -H 'Content-type: application/json' \
                --data '{"text":"❌ soumyaflow-frontend pipeline FAILED on ${env.BRANCH_NAME}"}' \
                $SLACK_WEBHOOK_URL"""
        }
        always {
            sh "docker rm -f sf-test 2>/dev/null || true"
            cleanWs()
        }
    }
}
```

### Required Jenkins Credentials

Go to **Jenkins → Manage Jenkins → Credentials** and add:

| Credential ID | Type | Description |
|---|---|---|
| `AWS_ACCOUNT_ID` | Secret text | Your 12-digit AWS account ID |
| `AWS_CREDENTIALS` | AWS Credentials | Access key ID + Secret access key |
| `KUBECONFIG_STAGING` | Secret file | kubeconfig for staging cluster |
| `KUBECONFIG_PROD` | Secret file | kubeconfig for production cluster |
| `SLACK_WEBHOOK_URL` | Secret text | Slack incoming webhook URL |

### Create Jenkins Job

1. **New Item** → Enter name `soumyaflow-frontend` → select **Pipeline** → OK
2. Under **Pipeline** → Definition → `Pipeline script from SCM`
3. SCM → **Git** → enter your repository URL
4. Branch → `*/main`
5. Script Path → `Jenkinsfile`
6. **Save** → **Build Now**

---

## Deployment Checklist

Before going live, confirm each item:

### Docker
- [ ] `Dockerfile` is in the frontend root folder
- [ ] `nginx.conf` is in the same folder as `Dockerfile`
- [ ] `docker build -t soumyaflow-frontend .` runs without errors
- [ ] `docker run -p 8080:80 soumyaflow-frontend` serves the app at `http://localhost:8080`

### Kubernetes
- [ ] Replace `YOUR_ACCOUNT_ID` in `k8s/deployment.yaml` with your ECR account ID
- [ ] Replace `soumyaflow.yourdomain.com` in `k8s/ingress.yaml` with your real domain
- [ ] `kubectl apply -f k8s/` runs without errors
- [ ] Pods are `Running`: `kubectl get pods -n soumyaflow`

### Heroku
- [ ] `heroku stack:set container` is set before first push
- [ ] `heroku.yml` is committed to the repo root
- [ ] App opens with `heroku open -a soumyaflow-app`

### AWS
- [ ] EC2 repository `soumyaflow-frontend` is created
- [ ] CloudWatch log group `/ecs/soumyaflow-frontend` is created
- [ ] `YOUR_ACCOUNT_ID` replaced in `aws/ecs-task-definition.json`
- [ ] `ecsTaskExecutionRole` IAM role exists with ECR and CloudWatch permissions
- [ ] CodeBuild environment variables are set (`AWS_DEFAULT_REGION`, `AWS_ACCOUNT_ID`, `IMAGE_REPO_NAME`)

### Jenkins
- [ ] All 5 credentials added in Jenkins credential store
- [ ] Jenkins has Docker installed on the agent
- [ ] Jenkins agent has `kubectl` and `aws` CLI installed
- [ ] Pipeline job created pointing to `Jenkinsfile` in SCM
- [ ] First build runs successfully on `develop` branch
