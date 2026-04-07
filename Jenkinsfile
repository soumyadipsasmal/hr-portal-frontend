pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/soumyadipsasmal/hr-portal-frontend.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t hr-portal-frontend:latest .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop hr-portal-frontend || true'
                sh 'docker rm hr-portal-frontend || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name hr-portal-frontend hr-portal-frontend:latest'
            }
        }

    }
}
