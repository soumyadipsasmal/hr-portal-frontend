// //  const API_BASE = "/api";
// const API_BASE = "http://13.204.61.85:5000/api";
// const APP_TODAY = "2026-04-02";
// const DEMO_NOW = "2026-04-02T09:40:00";
// const STATUS_LABELS = {
//   todo: "To Do",
//   "in-progress": "In Progress",
//   review: "Review",
//   done: "Done",
// };
// const STATUS_ORDER = ["todo", "in-progress", "review", "done"];
// const ADMIN_ROLES = new Set(["Admin", "Manager", "HR"]);

// let flashTimerId = null;
// let state = getDefaultState();

// const elements = {
//   navLinks: Array.from(document.querySelectorAll(".nav-link")),
//   panels: Array.from(document.querySelectorAll(".view-panel")),
//   taskTools: byId("taskTools"),
//   flashBanner: byId("flashBanner"),
//   searchInput: byId("searchInput"),
//   projectFilter: byId("projectFilter"),
//   priorityFilter: byId("priorityFilter"),
//   assigneeFilter: byId("assigneeFilter"),
//   statusFilter: byId("statusFilter"),
//   resetDataButton: byId("resetDataButton"),
//   jumpAttendanceButton: byId("jumpAttendanceButton"),
//   jumpLeaveButton: byId("jumpLeaveButton"),
//   openComposerButton: byId("openComposerButton"),
//   logoutButton: byId("logoutButton"),
//   sessionGate: byId("sessionGate"),
//   sessionForm: byId("sessionForm"),
//   sessionUserSelect: byId("sessionUserSelect"),
//   sessionMessage: byId("sessionMessage"),
//   forgotPasswordButton: byId("forgotPasswordButton"),
//   changePasswordButton: byId("changePasswordButton"),
//   currentUserAvatar: byId("currentUserAvatar"),
//   currentUserName: byId("currentUserName"),
//   currentUserMeta: byId("currentUserMeta"),
//   sessionStatusPill: byId("sessionStatusPill"),
//   sidebarRoleLabel: byId("sidebarRoleLabel"),
//   sidebarSessionLabel: byId("sidebarSessionLabel"),
//   sidebarTimeoutLabel: byId("sidebarTimeoutLabel"),
//   sidebarSecurityBar: byId("sidebarSecurityBar"),
//   sidebarHolidayTitle: byId("sidebarHolidayTitle"),
//   sidebarHolidayDate: byId("sidebarHolidayDate"),
//   sidebarDepartments: byId("sidebarDepartments"),
//   heroProjectsCount: byId("heroProjectsCount"),
//   heroOpenCount: byId("heroOpenCount"),
//   heroDueCount: byId("heroDueCount"),
//   todayLoginTime: byId("todayLoginTime"),
//   todayWorkMode: byId("todayWorkMode"),
//   todayWorkHours: byId("todayWorkHours"),
//   todayBreakTime: byId("todayBreakTime"),
//   pendingTaskCount: byId("pendingTaskCount"),
//   blockedCaption: byId("blockedCaption"),
//   completedTaskCount: byId("completedTaskCount"),
//   completionCaption: byId("completionCaption"),
//   leaveBalanceCount: byId("leaveBalanceCount"),
//   leaveBalanceCaption: byId("leaveBalanceCaption"),
//   monthlyAttendanceCount: byId("monthlyAttendanceCount"),
//   lateLoginStatus: byId("lateLoginStatus"),
//   unreadNotificationCount: byId("unreadNotificationCount"),
//   announcementCaption: byId("announcementCaption"),
//   productivityScore: byId("productivityScore"),
//   overtimeStatus: byId("overtimeStatus"),
//   weeklyHoursTotal: byId("weeklyHoursTotal"),
//   weeklyHoursBars: byId("weeklyHoursBars"),
//   projectTimeTracking: byId("projectTimeTracking"),
//   workLogPreview: byId("workLogPreview"),
//   securityBadge: byId("securityBadge"),
//   securitySummary: byId("securitySummary"),
//   loginHistoryList: byId("loginHistoryList"),
//   attendanceWatchList: byId("attendanceWatchList"),
//   priorityInitiativesCount: byId("priorityInitiativesCount"),
//   priorityInitiatives: byId("priorityInitiatives"),
//   holidayBadge: byId("holidayBadge"),
//   notificationPreview: byId("notificationPreview"),
//   holidayPreview: byId("holidayPreview"),
//   todoColumn: byId("todoColumn"),
//   inProgressColumn: byId("inProgressColumn"),
//   reviewColumn: byId("reviewColumn"),
//   doneColumn: byId("doneColumn"),
//   todoCount: byId("todoCount"),
//   inProgressCount: byId("inProgressCount"),
//   reviewCount: byId("reviewCount"),
//   doneCount: byId("doneCount"),
//   taskOpsCount: byId("taskOpsCount"),
//   reminderQueue: byId("reminderQueue"),
//   taskCommentFeed: byId("taskCommentFeed"),
//   backlogCount: byId("backlogCount"),
//   backlogTableBody: byId("backlogTableBody"),
//   attendanceLoginMetric: byId("attendanceLoginMetric"),
//   attendanceDateMetric: byId("attendanceDateMetric"),
//   attendanceLogoutMetric: byId("attendanceLogoutMetric"),
//   attendanceBreakMetric: byId("attendanceBreakMetric"),
//   attendanceHoursMetric: byId("attendanceHoursMetric"),
//   attendanceOvertimeMetric: byId("attendanceOvertimeMetric"),
//   attendanceStatusMetric: byId("attendanceStatusMetric"),
//   attendanceLateMetric: byId("attendanceLateMetric"),
//   attendanceForm: byId("attendanceForm"),
//   attendanceEmployeeSelect: byId("attendanceEmployeeSelect"),
//   attendanceTableBody: byId("attendanceTableBody"),
//   workLogForm: byId("workLogForm"),
//   workLogEmployeeSelect: byId("workLogEmployeeSelect"),
//   workLogCount: byId("workLogCount"),
//   workLogList: byId("workLogList"),
//   sickLeaveBalance: byId("sickLeaveBalance"),
//   casualLeaveBalance: byId("casualLeaveBalance"),
//   paidLeaveBalance: byId("paidLeaveBalance"),
//   pendingLeaveCount: byId("pendingLeaveCount"),
//   leaveForm: byId("leaveForm"),
//   leaveEmployeeSelect: byId("leaveEmployeeSelect"),
//   pendingLeaveList: byId("pendingLeaveList"),
//   leaveHistoryCount: byId("leaveHistoryCount"),
//   leaveHistoryBody: byId("leaveHistoryBody"),
//   holidayList: byId("holidayList"),
//   dailyReportMetric: byId("dailyReportMetric"),
//   weeklyReportMetric: byId("weeklyReportMetric"),
//   attendanceRateMetric: byId("attendanceRateMetric"),
//   taskCompletionMetric: byId("taskCompletionMetric"),
//   exportPdfButton: byId("exportPdfButton"),
//   exportExcelButton: byId("exportExcelButton"),
//   statusReport: byId("statusReport"),
//   projectHealthCount: byId("projectHealthCount"),
//   projectHealth: byId("projectHealth"),
//   teamMemberCount: byId("teamMemberCount"),
//   teamPerformanceList: byId("teamPerformanceList"),
//   riskCount: byId("riskCount"),
//   riskList: byId("riskList"),
//   adminUserCount: byId("adminUserCount"),
//   adminDepartmentCount: byId("adminDepartmentCount"),
//   adminProjectCount: byId("adminProjectCount"),
//   adminTaskCount: byId("adminTaskCount"),
//   adminHolidayCount: byId("adminHolidayCount"),
//   adminLeaveCount: byId("adminLeaveCount"),
//   adminReportCount: byId("adminReportCount"),
//   adminAttendanceCount: byId("adminAttendanceCount"),
//   userTableBody: byId("userTableBody"),
//   securitySettingsForm: byId("securitySettingsForm"),
//   securityTimeoutInput: byId("securityTimeoutInput"),
//   securityJwtCheckbox: byId("securityJwtCheckbox"),
//   securityTwoFactorCheckbox: byId("securityTwoFactorCheckbox"),
//   securityForgotCheckbox: byId("securityForgotCheckbox"),
//   adminSecurityList: byId("adminSecurityList"),
//   announcementForm: byId("announcementForm"),
//   notificationsCount: byId("notificationsCount"),
//   markAllReadButton: byId("markAllReadButton"),
//   notificationsList: byId("notificationsList"),
//   composer: byId("composer"),
//   issueForm: byId("issueForm"),
//   issueAssigneeSelect: byId("issueAssigneeSelect"),
//   closeComposerButton: byId("closeComposerButton"),
//   cancelComposerButton: byId("cancelComposerButton"),
//   projectSuggestions: byId("projectSuggestions"),
// };

// initialize();

// async function initialize() {
//   attachEventListeners();
//   await refreshState();
//   render();
// }

// async function refreshState() {
//   try {
//     const response = await apiRequest("/state");
//     state = response.state;
//   } catch (error) {
//     showFlash("Backend not reachable. Showing the local fallback state.");
//   }
// }

// async function syncWithApi(path, options, fallbackMessage) {
//   try {
//     const response = await apiRequest(path, options);
//     state = response.state;
//     if (response.message) {
//       showFlash(response.message);
//     } else if (fallbackMessage) {
//       showFlash(fallbackMessage);
//     }
//     render();
//     return true;
//   } catch (error) {
//     showFlash(error.message || "Backend request failed.");
//     return false;
//   }
// }

// async function apiRequest(path, options = {}) {
//   const response = await fetch(`${API_BASE}${path}`, {
//     headers: {
//       "Content-Type": "application/json",
//       ...(options.headers || {}),
//     },
//     ...options,
//   });
//   const payload = await response.json();
//   if (!response.ok) {
//     throw new Error(payload.error || "Request failed.");
//   }
//   return payload;
// }

// function attachEventListeners() {
//   elements.navLinks.forEach((button) => {
//     button.addEventListener("click", () => {
//       if (button.classList.contains("disabled")) {
//         return;
//       }
//       state.activeView = button.dataset.view;
//       render();
//     });
//   });

//   elements.searchInput.addEventListener("input", (event) => {
//     state.filters.query = event.target.value.trim().toLowerCase();
//     render();
//   });

//   elements.projectFilter.addEventListener("change", (event) => {
//     state.filters.project = event.target.value;
//     render();
//   });

//   elements.priorityFilter.addEventListener("change", (event) => {
//     state.filters.priority = event.target.value;
//     render();
//   });

//   elements.assigneeFilter.addEventListener("change", (event) => {
//     state.filters.assignee = event.target.value;
//     render();
//   });

//   elements.statusFilter.addEventListener("change", (event) => {
//     state.filters.status = event.target.value;
//     render();
//   });

//   elements.resetDataButton.addEventListener("click", async () => {
//     await syncWithApi("/reset", { method: "POST", body: JSON.stringify({}) }, "Workspace reset.");
//   });

//   elements.jumpAttendanceButton.addEventListener("click", () => {
//     if (!requireLoggedIn()) {
//       return;
//     }
//     state.activeView = "attendance";
//     render();
//   });

//   elements.jumpLeaveButton.addEventListener("click", () => {
//     if (!requireLoggedIn()) {
//       return;
//     }
//     state.activeView = "leave";
//     render();
//   });

//   elements.openComposerButton.addEventListener("click", openComposer);
//   elements.closeComposerButton.addEventListener("click", closeComposer);
//   elements.cancelComposerButton.addEventListener("click", closeComposer);
//   elements.logoutButton.addEventListener("click", handleLogoutToggle);
//   elements.sessionForm.addEventListener("submit", handleLogin);
//   elements.forgotPasswordButton.addEventListener("click", handleForgotPassword);
//   elements.changePasswordButton.addEventListener("click", handleChangePassword);
//   elements.issueForm.addEventListener("submit", handleIssueSubmit);
//   elements.attendanceForm.addEventListener("submit", handleAttendanceSubmit);
//   elements.workLogForm.addEventListener("submit", handleWorkLogSubmit);
//   elements.leaveForm.addEventListener("submit", handleLeaveSubmit);
//   elements.securitySettingsForm.addEventListener("submit", handleSecuritySettingsSubmit);
//   elements.announcementForm.addEventListener("submit", handleAnnouncementSubmit);
//   elements.exportPdfButton.addEventListener("click", exportPdfReport);
//   elements.exportExcelButton.addEventListener("click", exportExcelReport);
//   elements.markAllReadButton.addEventListener("click", markAllNotificationsRead);

//   document.querySelectorAll(".board-column").forEach((column) => {
//     column.addEventListener("dragover", (event) => {
//       event.preventDefault();
//       column.classList.add("drag-target");
//     });

//     column.addEventListener("dragleave", () => {
//       column.classList.remove("drag-target");
//     });

//     column.addEventListener("drop", (event) => {
//       event.preventDefault();
//       column.classList.remove("drag-target");
//       const taskId = event.dataTransfer.getData("text/plain");
//       if (taskId) {
//         updateTaskStatus(taskId, column.dataset.status);
//       }
//     });
//   });
// }

// function render() {
//   enforcePermissions();
//   populateDynamicOptions();
//   syncNavigation();
//   syncTaskTools();
//   syncSessionState();
//   renderShell();
//   renderOverview();
//   renderBoard();
//   renderBacklog();
//   renderAttendance();
//   renderLeave();
//   renderReports();
//   renderAdmin();
//   renderNotifications();
//   attachDynamicListeners();
// }

// function renderShell() {
//   const currentUser = getCurrentUser();
//   const upcomingHoliday = getUpcomingHoliday();
//   const visibleNotifications = getVisibleNotifications();
//   const securityScore = getSecurityScore();
//   const departments = uniqueValues(state.users.map((user) => user.department)).slice(0, 5);
//   const openTasks = state.tasks.filter((task) => task.status !== "done").length;
//   const dueThisWeek = state.tasks.filter((task) => isDueWithinDays(task.dueDate, 7)).length;
//   const projects = uniqueValues(state.tasks.map((task) => task.project)).length;

//   elements.currentUserAvatar.textContent = getInitials(currentUser.name);
//   elements.currentUserName.textContent = currentUser.name;
//   elements.currentUserMeta.textContent = `${currentUser.role} · ${currentUser.department}`;
//   elements.sessionStatusPill.textContent = state.session.loggedIn ? "Session Active" : "Session Locked";
//   elements.sessionStatusPill.classList.toggle("is-locked", !state.session.loggedIn);
//   elements.logoutButton.textContent = state.session.loggedIn ? "Logout" : "Open Login";
//   elements.sidebarRoleLabel.textContent = `${currentUser.role} Access`;
//   elements.sidebarSessionLabel.textContent = `${state.security.jwtEnabled ? "JWT" : "Session"} authentication · ${
//     state.security.requireTwoFactor ? "2FA required" : "2FA optional"
//   } · ${state.security.loginHistory.length} login events`;
//   elements.sidebarTimeoutLabel.textContent = `${state.security.sessionTimeoutMinutes} min`;
//   elements.sidebarSecurityBar.style.width = `${securityScore}%`;
//   elements.sidebarHolidayTitle.textContent = upcomingHoliday ? upcomingHoliday.name : "No upcoming holiday";
//   elements.sidebarHolidayDate.textContent = upcomingHoliday ? formatDate(upcomingHoliday.date) : "Calendar clear";
//   elements.sidebarDepartments.innerHTML = departments.map((department) => `<li>${escapeHtml(department)}</li>`).join("");
//   elements.heroProjectsCount.textContent = String(projects);
//   elements.heroOpenCount.textContent = String(openTasks);
//   elements.heroDueCount.textContent = String(dueThisWeek);
//   elements.notificationsCount.textContent = `${visibleNotifications.length} items`;
// }

// function renderOverview() {
//   const currentUser = getCurrentUser();
//   const todayRecord = getAttendanceRecord(currentUser.id, APP_TODAY) || getLatestAttendanceRecord(currentUser.id);
//   const personalTasks = state.tasks.filter((task) => task.assigneeId === currentUser.id);
//   const pendingTasks = personalTasks.filter((task) => task.status !== "done");
//   const completedTasks = personalTasks.filter((task) => task.status === "done");
//   const attendanceRecords = getAttendanceRecordsForUser(currentUser.id);
//   const lateCount = attendanceRecords.filter(isLateLogin).length;
//   const unreadCount = getVisibleNotifications().filter((notification) => !notification.read).length;
//   const weeklyHours = getWeeklyHoursForUser(currentUser.id);
//   const weeklyTotal = weeklyHours.reduce((sum, row) => sum + row.hours, 0);
//   const performanceScore = calculatePerformanceScore(currentUser.id);
//   const leaveBalance = currentUser.leaveBalance;
//   const priorityTasks = state.tasks
//     .filter((task) => task.priority === "Critical" || task.priority === "High")
//     .sort(sortByDueDate)
//     .slice(0, 4);

//   elements.todayLoginTime.textContent = todayRecord ? todayRecord.loginTime : "--";
//   elements.todayWorkMode.textContent = todayRecord ? todayRecord.workMode : "No attendance";
//   elements.todayWorkHours.textContent = todayRecord ? `${calculateWorkHours(todayRecord).toFixed(1)}h` : "0h";
//   elements.todayBreakTime.textContent = todayRecord ? `Break ${todayRecord.breakMinutes}m` : "Break 0m";
//   elements.pendingTaskCount.textContent = String(pendingTasks.length);
//   elements.blockedCaption.textContent = `${pendingTasks.filter((task) => task.blocked).length} blocked items`;
//   elements.completedTaskCount.textContent = String(completedTasks.length);
//   elements.completionCaption.textContent = `${completedTasks.length} delivered this sprint`;
//   elements.leaveBalanceCount.textContent = String(leaveBalance.Paid);
//   elements.leaveBalanceCaption.textContent = `Sick ${leaveBalance.Sick} · Casual ${leaveBalance.Casual} · Paid ${leaveBalance.Paid}`;
//   elements.monthlyAttendanceCount.textContent = String(getMonthlyAttendanceCount(currentUser.id));
//   elements.lateLoginStatus.textContent = `${lateCount} late logins`;
//   elements.unreadNotificationCount.textContent = String(unreadCount);
//   elements.announcementCaption.textContent = `${getVisibleNotifications().filter((item) => item.type === "announcement").length} announcements`;
//   elements.productivityScore.textContent = `${performanceScore}%`;
//   elements.overtimeStatus.textContent = `${calculateOvertimeHours(currentUser.id).toFixed(1)}h overtime`;
//   elements.weeklyHoursTotal.textContent = `${weeklyTotal.toFixed(1)}h`;
//   elements.securityBadge.textContent = state.security.requireTwoFactor ? "2FA Enabled" : "2FA Optional";
//   elements.priorityInitiativesCount.textContent = `${priorityTasks.length} tracked`;
//   elements.holidayBadge.textContent = `${state.holidays.length} listed`;

//   renderBarRows(
//     elements.weeklyHoursBars,
//     weeklyHours.map((row) => ({
//       label: formatShortDate(row.date),
//       value: row.hours,
//       suffix: `${row.hours.toFixed(1)}h`,
//     }))
//   );

//   renderCardList(
//     elements.projectTimeTracking,
//     getProjectHoursForUser(currentUser.id),
//     (item) => `
//       <div class="metric-row">
//         <span>${escapeHtml(item.project)}</span>
//         <strong>${item.hours.toFixed(1)}h</strong>
//       </div>
//     `,
//     "No project hours logged yet."
//   );

//   renderCardList(
//     elements.workLogPreview,
//     state.workLogs.filter((log) => log.employeeId === currentUser.id).slice(0, 4),
//     (log) => `
//       <div class="log-row">
//         <div>
//           <strong>${escapeHtml(log.project)}</strong>
//           <p>${escapeHtml(log.note || "Logged work activity")}</p>
//         </div>
//         <span class="table-pill">${log.hours.toFixed(1)}h</span>
//       </div>
//     `,
//     "No work logs available."
//   );

//   const securityRows = [
//     { label: "Authentication", value: state.security.jwtEnabled ? "JWT Enabled" : "JWT Disabled" },
//     { label: "Current role", value: currentUser.role },
//     { label: "Session timeout", value: `${state.security.sessionTimeoutMinutes} min` },
//     { label: "Password changed", value: formatDateTime(state.security.passwordChangedAt) },
//   ];
//   elements.securitySummary.innerHTML = securityRows
//     .map(
//       (row) => `
//         <div class="metric-row">
//           <span>${escapeHtml(row.label)}</span>
//           <strong>${escapeHtml(row.value)}</strong>
//         </div>
//       `
//     )
//     .join("");

//   renderCardList(
//     elements.loginHistoryList,
//     getLoginHistoryForUser(currentUser.id).slice(0, 4),
//     (entry) => `
//       <div class="info-row">
//         <div>
//           <strong>${escapeHtml(entry.action)}</strong>
//           <p>${escapeHtml(entry.device)} · ${escapeHtml(entry.location)}</p>
//         </div>
//         <span class="table-pill">${formatDateTime(entry.time)}</span>
//       </div>
//     `,
//     "No login history available."
//   );

//   const attendanceWatch = [
//     { label: "Late login detections", value: String(lateCount) },
//     { label: "Half-day detections", value: String(attendanceRecords.filter(isHalfDay).length) },
//     { label: "WFH days", value: String(attendanceRecords.filter((record) => record.workMode === "WFH").length) },
//     { label: "Biometric verified", value: String(attendanceRecords.filter((record) => record.biometricVerified).length) },
//   ];
//   elements.attendanceWatchList.innerHTML = attendanceWatch
//     .map(
//       (row) => `
//         <div class="metric-row">
//           <span>${escapeHtml(row.label)}</span>
//           <strong>${escapeHtml(row.value)}</strong>
//         </div>
//       `
//     )
//     .join("");

//   renderCardList(
//     elements.priorityInitiatives,
//     priorityTasks,
//     (task) => `
//       <div class="initiative-row">
//         <div>
//           <strong>${escapeHtml(task.title)}</strong>
//           <p>${escapeHtml(task.project)} · ${escapeHtml(getUserName(task.assigneeId))}</p>
//         </div>
//         <span class="tag priority-${task.priority.toLowerCase()}">${escapeHtml(task.priority)}</span>
//       </div>
//     `,
//     "No priority delivery items."
//   );

//   renderCardList(
//     elements.notificationPreview,
//     getVisibleNotifications().slice(0, 4),
//     (notification) => `
//       <div class="notification-item ${notification.read ? "" : "unread"}">
//         <div class="notification-header">
//           <strong>${escapeHtml(notification.title)}</strong>
//           <span class="table-pill">${escapeHtml(notification.type)}</span>
//         </div>
//         <p>${escapeHtml(notification.message)}</p>
//       </div>
//     `,
//     "No alerts for the current user."
//   );

//   renderCardList(
//     elements.holidayPreview,
//     state.holidays.slice(0, 4),
//     (holiday) => `
//       <div class="holiday-row">
//         <div>
//           <strong>${escapeHtml(holiday.name)}</strong>
//           <p>${escapeHtml(holiday.type)} holiday</p>
//         </div>
//         <span class="table-pill">${formatDate(holiday.date)}</span>
//       </div>
//     `,
//     "No holidays listed."
//   );
// }

// function renderBoard() {
//   const filteredTasks = getFilteredTasks();
//   const columns = {
//     todo: elements.todoColumn,
//     "in-progress": elements.inProgressColumn,
//     review: elements.reviewColumn,
//     done: elements.doneColumn,
//   };

//   Object.entries(columns).forEach(([status, container]) => {
//     const tasks = filteredTasks.filter((task) => task.status === status).sort(sortByDueDate);
//     renderTaskCards(container, tasks);
//     getStatusCountElement(status).textContent = String(tasks.length);
//   });

//   const reminders = filteredTasks
//     .filter((task) => task.reminderAt)
//     .sort((left, right) => new Date(left.reminderAt) - new Date(right.reminderAt))
//     .slice(0, 4);
//   const comments = filteredTasks
//     .flatMap((task) => task.comments.map((comment) => ({ ...comment, taskId: task.id, taskTitle: task.title })))
//     .sort((left, right) => new Date(right.time) - new Date(left.time))
//     .slice(0, 5);

//   elements.taskOpsCount.textContent = `${reminders.length + comments.length} actions`;
//   renderCardList(
//     elements.reminderQueue,
//     reminders,
//     (task) => `
//       <div class="summary-card">
//         <strong>${escapeHtml(task.id)} · ${escapeHtml(task.title)}</strong>
//         <p>${escapeHtml(getUserName(task.assigneeId))} · reminder ${formatDateTime(task.reminderAt)}</p>
//       </div>
//     `,
//     "No task reminders in queue."
//   );

//   renderCardList(
//     elements.taskCommentFeed,
//     comments,
//     (comment) => `
//       <div class="summary-card">
//         <strong>${escapeHtml(comment.taskId)} · ${escapeHtml(comment.author)}</strong>
//         <p>${escapeHtml(comment.text)}</p>
//       </div>
//     `,
//     "No recent task comments."
//   );
// }

// function renderTaskCards(container, tasks) {
//   container.innerHTML = "";
//   if (!tasks.length) {
//     container.innerHTML = `<div class="empty-state">No issues here for the current filters.</div>`;
//     return;
//   }

//   tasks.forEach((task) => {
//     const card = document.createElement("article");
//     card.className = "task-card";
//     card.draggable = true;
//     card.innerHTML = `
//       <div class="task-topline">
//         <span class="task-id">${escapeHtml(task.id)}</span>
//         <span class="tag priority-${task.priority.toLowerCase()}">${escapeHtml(task.priority)}</span>
//         <span class="tag type-${task.type.toLowerCase()}">${escapeHtml(task.type)}</span>
//       </div>
//       <div>
//         <strong>${escapeHtml(task.title)}</strong>
//         <p class="task-subcopy">${escapeHtml(task.description)}</p>
//       </div>
//       <div class="task-tags">
//         ${task.labels.map((label) => `<span class="tag">${escapeHtml(label)}</span>`).join("")}
//         ${task.recurring ? `<span class="tag">Recurring</span>` : ""}
//         ${task.reminderAt ? `<span class="tag">Reminder</span>` : ""}
//       </div>
//       <div class="task-footer">
//         <div class="task-meta">
//           <div class="task-avatar">${escapeHtml(getInitials(getUserName(task.assigneeId)))}</div>
//           <div>
//             <strong>${escapeHtml(getUserName(task.assigneeId))}</strong>
//             <p>${escapeHtml(task.project)}</p>
//           </div>
//         </div>
//         <div class="muted">${task.comments.length} comments · ${task.files.length} files</div>
//       </div>
//     `;
//     card.addEventListener("dragstart", (event) => {
//       event.dataTransfer.setData("text/plain", task.id);
//       card.classList.add("dragging");
//     });
//     card.addEventListener("dragend", () => {
//       card.classList.remove("dragging");
//     });
//     container.append(card);
//   });
// }

// function renderBacklog() {
//   const filteredTasks = getFilteredTasks().sort(sortByDueDate);
//   elements.backlogCount.textContent = `${filteredTasks.length} items`;
//   elements.backlogTableBody.innerHTML = "";

//   if (!filteredTasks.length) {
//     elements.backlogTableBody.innerHTML = `<tr><td colspan="10"><div class="empty-state">No backlog items match the current filters.</div></td></tr>`;
//     return;
//   }

//   filteredTasks.forEach((task) => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//       <td>
//         <span class="table-title">${escapeHtml(task.id)} · ${escapeHtml(task.title)}</span>
//         <span class="table-note">${escapeHtml(task.description)}</span>
//       </td>
//       <td>${escapeHtml(task.project)}</td>
//       <td>${escapeHtml(getUserName(task.assigneeId))}</td>
//       <td><span class="tag priority-${task.priority.toLowerCase()}">${escapeHtml(task.priority)}</span></td>
//       <td>${task.comments.length}</td>
//       <td>${task.files.length}</td>
//       <td>${task.reminderAt ? formatDateTime(task.reminderAt) : "--"}</td>
//       <td>${task.recurring ? "Yes" : "No"}</td>
//       <td>
//         <select class="status-select" data-task-id="${escapeHtml(task.id)}">
//           ${STATUS_ORDER.map(
//             (status) =>
//               `<option value="${status}" ${task.status === status ? "selected" : ""}>${escapeHtml(STATUS_LABELS[status])}</option>`
//           ).join("")}
//         </select>
//       </td>
//       <td>${formatDate(task.dueDate)}</td>
//     `;
//     elements.backlogTableBody.append(row);
//   });
// }

// function renderAttendance() {
//   const currentUser = getCurrentUser();
//   const currentRecord = getAttendanceRecord(currentUser.id, APP_TODAY) || getLatestAttendanceRecord(currentUser.id);
//   const attendanceRecords = [...state.attendance].sort((left, right) => {
//     return new Date(`${right.date}T${right.loginTime}`) - new Date(`${left.date}T${left.loginTime}`);
//   });
//   const workLogs = [...state.workLogs].sort((left, right) => new Date(right.time) - new Date(left.time));

//   elements.attendanceLoginMetric.textContent = currentRecord ? currentRecord.loginTime : "--";
//   elements.attendanceDateMetric.textContent = currentRecord ? formatDate(currentRecord.date) : formatDate(APP_TODAY);
//   elements.attendanceLogoutMetric.textContent = currentRecord ? currentRecord.logoutTime : "--";
//   elements.attendanceBreakMetric.textContent = currentRecord ? `Break ${currentRecord.breakMinutes}m` : "Break 0m";
//   elements.attendanceHoursMetric.textContent = currentRecord ? `${calculateWorkHours(currentRecord).toFixed(1)}h` : "0h";
//   elements.attendanceOvertimeMetric.textContent = currentRecord ? `${calculateOvertime(currentRecord).toFixed(1)}h overtime` : "0h overtime";
//   elements.attendanceStatusMetric.textContent = currentRecord ? getAttendanceStatus(currentRecord) : "No record";
//   elements.attendanceLateMetric.textContent = currentRecord && isLateLogin(currentRecord) ? "Late login" : "On time";

//   elements.attendanceTableBody.innerHTML = attendanceRecords
//     .map(
//       (record) => `
//         <tr>
//           <td>${formatDate(record.date)}</td>
//           <td>${escapeHtml(getUserName(record.employeeId))}</td>
//           <td>${escapeHtml(record.loginTime)}</td>
//           <td>${escapeHtml(record.logoutTime)}</td>
//           <td>${record.breakMinutes}m</td>
//           <td>${calculateWorkHours(record).toFixed(1)}h</td>
//           <td><span class="table-pill ${isLateLogin(record) ? "is-warning" : "is-positive"}">${isLateLogin(record) ? "Yes" : "No"}</span></td>
//           <td><span class="table-pill ${isHalfDay(record) ? "is-warning" : ""}">${isHalfDay(record) ? "Yes" : "No"}</span></td>
//           <td>${escapeHtml(record.workMode)}</td>
//         </tr>
//       `
//     )
//     .join("");

//   elements.workLogCount.textContent = `${workLogs.length} logs`;
//   renderCardList(
//     elements.workLogList,
//     workLogs.slice(0, 8),
//     (log) => `
//       <div class="summary-card">
//         <strong>${escapeHtml(getUserName(log.employeeId))} · ${escapeHtml(log.project)}</strong>
//         <p>${escapeHtml(log.note || "Logged work")} · ${formatDate(log.date)} · ${log.hours.toFixed(1)}h</p>
//       </div>
//     `,
//     "No work logs recorded."
//   );

//   setAttendanceFormDefaults();
//   setWorkLogFormDefaults();
// }

// function renderLeave() {
//   const currentUser = getCurrentUser();
//   const leaveBalance = currentUser.leaveBalance;
//   const leaves = [...state.leaves].sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
//   const pendingLeaves = leaves.filter((leave) => leave.status === "Pending");

//   elements.sickLeaveBalance.textContent = String(leaveBalance.Sick);
//   elements.casualLeaveBalance.textContent = String(leaveBalance.Casual);
//   elements.paidLeaveBalance.textContent = String(leaveBalance.Paid);
//   elements.pendingLeaveCount.textContent = String(pendingLeaves.length);
//   elements.leaveHistoryCount.textContent = `${leaves.length} requests`;

//   renderCardList(
//     elements.pendingLeaveList,
//     pendingLeaves,
//     (leave) => `
//       <div class="approval-card">
//         <strong>${escapeHtml(getUserName(leave.employeeId))} · ${escapeHtml(leave.type)} Leave</strong>
//         <p>${formatDate(leave.fromDate)} to ${formatDate(leave.toDate)} · ${leave.days} day(s)</p>
//         <div class="approval-actions">
//           <span class="table-pill">${escapeHtml(leave.reason || "No reason provided")}</span>
//           ${
//             hasAdminAccess(getCurrentUser())
//               ? `
//                 <div class="approval-actions">
//                   <button class="mini-button primary" type="button" data-leave-action="Approved" data-leave-id="${escapeHtml(leave.id)}">Approve</button>
//                   <button class="mini-button" type="button" data-leave-action="Rejected" data-leave-id="${escapeHtml(leave.id)}">Reject</button>
//                 </div>
//               `
//               : `<span class="table-pill is-warning">Awaiting review</span>`
//           }
//         </div>
//       </div>
//     `,
//     "No pending leave requests."
//   );

//   elements.leaveHistoryBody.innerHTML = leaves
//     .map(
//       (leave) => `
//         <tr>
//           <td>${escapeHtml(getUserName(leave.employeeId))}</td>
//           <td>${escapeHtml(leave.type)}</td>
//           <td>${formatDate(leave.fromDate)} - ${formatDate(leave.toDate)}</td>
//           <td>${leave.days}</td>
//           <td><span class="table-pill ${leave.status === "Approved" ? "is-positive" : leave.status === "Rejected" ? "is-danger" : "is-warning"}">${escapeHtml(leave.status)}</span></td>
//           <td>${escapeHtml(getUserName(leave.approverId))}</td>
//         </tr>
//       `
//     )
//     .join("");

//   renderCardList(
//     elements.holidayList,
//     state.holidays,
//     (holiday) => `
//       <div class="holiday-row">
//         <div>
//           <strong>${escapeHtml(holiday.name)}</strong>
//           <p>${escapeHtml(holiday.type)} holiday</p>
//         </div>
//         <span class="table-pill">${formatDate(holiday.date)}</span>
//       </div>
//     `,
//     "No holidays configured."
//   );

//   setLeaveFormDefaults();
// }

// function renderReports() {
//   const todayHours = state.workLogs.filter((log) => log.date === APP_TODAY).reduce((sum, log) => sum + log.hours, 0);
//   const weeklyHours = state.workLogs
//     .filter((log) => isDateWithinDays(log.date, APP_TODAY, 6))
//     .reduce((sum, log) => sum + log.hours, 0);
//   const completionRate = Math.round((state.tasks.filter((task) => task.status === "done").length / Math.max(state.tasks.length, 1)) * 100);
//   const attendanceRate = Math.round(calculateAttendanceRate());

//   elements.dailyReportMetric.textContent = `${todayHours.toFixed(1)}h`;
//   elements.weeklyReportMetric.textContent = `${weeklyHours.toFixed(1)}h`;
//   elements.attendanceRateMetric.textContent = `${attendanceRate}%`;
//   elements.taskCompletionMetric.textContent = `${completionRate}%`;
//   elements.teamMemberCount.textContent = `${state.users.length} members`;

//   renderBarRows(
//     elements.statusReport,
//     STATUS_ORDER.map((status) => ({
//       label: STATUS_LABELS[status],
//       value: state.tasks.filter((task) => task.status === status).length,
//       suffix: `${state.tasks.filter((task) => task.status === status).length}`,
//     }))
//   );

//   const projectRows = uniqueValues(state.tasks.map((task) => task.project)).map((project) => {
//     const tasks = state.tasks.filter((task) => task.project === project);
//     const done = tasks.filter((task) => task.status === "done").length;
//     return { project, tasks: tasks.length, done, progress: Math.round((done / Math.max(tasks.length, 1)) * 100) };
//   });
//   elements.projectHealthCount.textContent = `${projectRows.length} projects`;
//   renderCardList(
//     elements.projectHealth,
//     projectRows,
//     (row) => `
//       <div class="summary-card">
//         <strong>${escapeHtml(row.project)}</strong>
//         <p>${row.done}/${row.tasks} completed · ${row.progress}% delivery</p>
//       </div>
//     `,
//     "No project health data."
//   );

//   const teamPerformance = state.users.map((user) => ({
//     user,
//     completed: state.tasks.filter((task) => task.assigneeId === user.id && task.status === "done").length,
//     total: state.tasks.filter((task) => task.assigneeId === user.id).length,
//     attendance: getMonthlyAttendanceCount(user.id),
//     hours: getWeeklyHoursForUser(user.id).reduce((sum, row) => sum + row.hours, 0),
//   }));
//   renderCardList(
//     elements.teamPerformanceList,
//     teamPerformance,
//     (row) => `
//       <div class="summary-card">
//         <strong>${escapeHtml(row.user.name)} · ${escapeHtml(row.user.role)}</strong>
//         <p>${row.completed}/${Math.max(row.total, 1)} tasks done · ${row.attendance} attendance logs · ${row.hours.toFixed(1)}h this week</p>
//       </div>
//     `,
//     "No team performance data."
//   );

//   const risks = getRiskItems();
//   elements.riskCount.textContent = `${risks.length} issues`;
//   renderCardList(
//     elements.riskList,
//     risks,
//     (risk) => `
//       <div class="summary-card">
//         <strong>${escapeHtml(risk.title)}</strong>
//         <p>${escapeHtml(risk.detail)}</p>
//       </div>
//     `,
//     "No operational risks identified."
//   );
// }

// function renderAdmin() {
//   const departments = uniqueValues(state.users.map((user) => user.department));
//   elements.adminUserCount.textContent = String(state.users.length);
//   elements.adminDepartmentCount.textContent = String(departments.length);
//   elements.adminProjectCount.textContent = String(uniqueValues(state.tasks.map((task) => task.project)).length);
//   elements.adminTaskCount.textContent = String(state.tasks.length);
//   elements.adminHolidayCount.textContent = String(state.holidays.length);
//   elements.adminLeaveCount.textContent = String(state.leaves.length);
//   elements.adminReportCount.textContent = "8";
//   elements.adminAttendanceCount.textContent = String(state.attendance.length);

//   elements.userTableBody.innerHTML = state.users
//     .map(
//       (user) => `
//         <tr>
//           <td>${escapeHtml(user.name)}</td>
//           <td>${escapeHtml(user.role)}</td>
//           <td>${escapeHtml(user.department)}</td>
//           <td><span class="table-pill is-positive">${escapeHtml(user.status)}</span></td>
//           <td>${getMonthlyAttendanceCount(user.id)}</td>
//           <td>S ${user.leaveBalance.Sick} · C ${user.leaveBalance.Casual} · P ${user.leaveBalance.Paid}</td>
//         </tr>
//       `
//     )
//     .join("");

//   elements.securityTimeoutInput.value = state.security.sessionTimeoutMinutes;
//   elements.securityJwtCheckbox.checked = state.security.jwtEnabled;
//   elements.securityTwoFactorCheckbox.checked = state.security.requireTwoFactor;
//   elements.securityForgotCheckbox.checked = state.security.forgotPasswordEnabled;

//   const securityRows = [
//     { label: "Login history records", value: String(state.security.loginHistory.length) },
//     { label: "Password last changed", value: formatDateTime(state.security.passwordChangedAt) },
//     { label: "JWT authentication", value: state.security.jwtEnabled ? "Enabled" : "Disabled" },
//     { label: "Forgot password flow", value: state.security.forgotPasswordEnabled ? "Enabled" : "Disabled" },
//   ];
//   elements.adminSecurityList.innerHTML = securityRows
//     .map(
//       (row) => `
//         <div class="metric-row">
//           <span>${escapeHtml(row.label)}</span>
//           <strong>${escapeHtml(row.value)}</strong>
//         </div>
//       `
//     )
//     .join("");
// }

// function renderNotifications() {
//   const notifications = getVisibleNotifications();
//   const unread = notifications.filter((notification) => !notification.read).length;
//   elements.notificationsCount.textContent = `${notifications.length} items`;
//   elements.unreadNotificationCount.textContent = String(unread);

//   renderCardList(
//     elements.notificationsList,
//     notifications,
//     (notification) => `
//       <div class="notification-item ${notification.read ? "" : "unread"}">
//         <div class="notification-header">
//           <strong>${escapeHtml(notification.title)}</strong>
//           <span class="table-pill">${escapeHtml(notification.type)}</span>
//         </div>
//         <p>${escapeHtml(notification.message)}</p>
//         <div class="notification-footer">
//           <span class="table-note">${formatDateTime(notification.time)}</span>
//           ${
//             notification.read
//               ? `<span class="table-pill is-positive">Read</span>`
//               : `<button class="mini-button primary" type="button" data-notification-id="${escapeHtml(notification.id)}">Mark Read</button>`
//           }
//         </div>
//       </div>
//     `,
//     "No notifications available."
//   );
// }

// function attachDynamicListeners() {
//   document.querySelectorAll(".status-select").forEach((select) => {
//     select.addEventListener("change", (event) => {
//       updateTaskStatus(event.target.dataset.taskId, event.target.value);
//     });
//   });

//   document.querySelectorAll("[data-leave-id]").forEach((button) => {
//     button.addEventListener("click", () => {
//       updateLeaveStatus(button.dataset.leaveId, button.dataset.leaveAction);
//     });
//   });

//   document.querySelectorAll("[data-notification-id]").forEach((button) => {
//     button.addEventListener("click", () => {
//       markNotificationRead(button.dataset.notificationId);
//     });
//   });
// }

// async function handleLogin(event) {
//   event.preventDefault();
//   const formData = new FormData(elements.sessionForm);
//   const password = String(formData.get("password") || "").trim();
//   const otp = String(formData.get("otp") || "").trim();
//   const userId = String(formData.get("userId"));

//   if (!password) {
//     elements.sessionMessage.textContent = "Password is required for demo login.";
//     return;
//   }
//   if (state.security.requireTwoFactor && otp.length < 6) {
//     elements.sessionMessage.textContent = "Enter a 6-digit one-time code to satisfy 2FA.";
//     return;
//   }

//   await syncWithApi(
//     "/auth/login",
//     {
//       method: "POST",
//       body: JSON.stringify({ userId, password, otp }),
//     },
//     `${getUserName(userId)} logged in successfully.`
//   );
// }

// async function handleLogoutToggle() {
//   if (!state.session.loggedIn) {
//     state.activeView = "overview";
//     render();
//     return;
//   }
//   await syncWithApi("/auth/logout", { method: "POST", body: JSON.stringify({ userId: state.session.userId }) }, "Session locked.");
// }

// async function handleForgotPassword() {
//   if (!state.security.forgotPasswordEnabled) {
//     elements.sessionMessage.textContent = "Forgot password is currently disabled by admin policy.";
//     return;
//   }
//   const userId = elements.sessionUserSelect.value || state.session.userId;
//   const ok = await syncWithApi(
//     "/auth/forgot-password",
//     { method: "POST", body: JSON.stringify({ userId }) },
//     "Password reset request recorded."
//   );
//   if (ok) {
//     elements.sessionMessage.textContent = "Password reset request recorded.";
//   }
// }

// async function handleChangePassword() {
//   const ok = await syncWithApi(
//     "/auth/change-password",
//     { method: "POST", body: JSON.stringify({ userId: state.session.userId }) },
//     "Password change recorded."
//   );
//   if (ok) {
//     elements.sessionMessage.textContent = "Password change recorded in login history.";
//   }
// }

// async function handleIssueSubmit(event) {
//   event.preventDefault();
//   if (!requireLoggedIn()) {
//     return;
//   }
//   const formData = new FormData(elements.issueForm);
//   const files = Array.from(elements.issueForm.elements.attachments.files || []).map((file) => file.name);
//   const ok = await syncWithApi(
//     "/tasks",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         title: String(formData.get("title")).trim(),
//         project: String(formData.get("project")).trim(),
//         assigneeId: String(formData.get("assignee")),
//         priority: String(formData.get("priority")),
//         type: String(formData.get("type")),
//         status: String(formData.get("status")),
//         points: Number(formData.get("points")) || 0,
//         dueDate: String(formData.get("dueDate")),
//         reminderAt: String(formData.get("reminderAt") || ""),
//         recurring: formData.get("recurring") === "on",
//         description: String(formData.get("description")).trim() || "No description provided yet.",
//         labels: String(formData.get("labels") || "")
//           .split(",")
//           .map((label) => label.trim())
//           .filter(Boolean),
//         blocked: formData.get("blocked") === "on",
//         files,
//         comments: String(formData.get("initialComment") || "").trim()
//           ? [
//               {
//                 author: getCurrentUser().name,
//                 text: String(formData.get("initialComment")).trim(),
//                 time: new Date().toISOString(),
//               },
//             ]
//           : [],
//       }),
//     },
//     "Task created successfully."
//   );
//   if (ok) {
//     elements.issueForm.reset();
//     closeComposer();
//   }
// }

// async function handleAttendanceSubmit(event) {
//   event.preventDefault();
//   if (!requireLoggedIn()) {
//     return;
//   }
//   const formData = new FormData(elements.attendanceForm);
//   await syncWithApi(
//     "/attendance",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         employeeId: String(formData.get("employeeId")),
//         date: String(formData.get("date")),
//         loginTime: String(formData.get("loginTime")),
//         logoutTime: String(formData.get("logoutTime")),
//         breakMinutes: Number(formData.get("breakMinutes")) || 0,
//         workMode: String(formData.get("workMode")),
//         biometricVerified: formData.get("biometricVerified") === "on",
//       }),
//     },
//     "Attendance record saved."
//   );
// }

// async function handleWorkLogSubmit(event) {
//   event.preventDefault();
//   if (!requireLoggedIn()) {
//     return;
//   }
//   const formData = new FormData(elements.workLogForm);
//   await syncWithApi(
//     "/work-logs",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         employeeId: String(formData.get("employeeId")),
//         date: String(formData.get("date")),
//         project: String(formData.get("project")).trim(),
//         hours: Number(formData.get("hours")) || 0,
//         note: String(formData.get("note") || "").trim(),
//       }),
//     },
//     "Work log added successfully."
//   );
// }

// async function handleLeaveSubmit(event) {
//   event.preventDefault();
//   if (!requireLoggedIn()) {
//     return;
//   }
//   const formData = new FormData(elements.leaveForm);
//   await syncWithApi(
//     "/leaves",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         employeeId: String(formData.get("employeeId")),
//         type: String(formData.get("type")),
//         fromDate: String(formData.get("fromDate")),
//         toDate: String(formData.get("toDate")),
//         reason: String(formData.get("reason") || "").trim(),
//       }),
//     },
//     "Leave request submitted."
//   );
// }

// async function handleSecuritySettingsSubmit(event) {
//   event.preventDefault();
//   if (!requireLoggedIn()) {
//     return;
//   }
//   const formData = new FormData(elements.securitySettingsForm);
//   await syncWithApi(
//     "/security",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         sessionTimeoutMinutes: Number(formData.get("sessionTimeoutMinutes")) || 30,
//         jwtEnabled: formData.get("jwtEnabled") === "on",
//         requireTwoFactor: formData.get("requireTwoFactor") === "on",
//         forgotPasswordEnabled: formData.get("forgotPasswordEnabled") === "on",
//       }),
//     },
//     "Security settings updated."
//   );
// }

// async function handleAnnouncementSubmit(event) {
//   event.preventDefault();
//   if (!requireLoggedIn()) {
//     return;
//   }
//   const formData = new FormData(elements.announcementForm);
//   const ok = await syncWithApi(
//     "/announcements",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         audience: String(formData.get("audience")),
//         title: String(formData.get("title")).trim(),
//         message: String(formData.get("message") || "").trim() || "Company announcement posted.",
//       }),
//     },
//     "Announcement sent."
//   );
//   if (ok) {
//     elements.announcementForm.reset();
//   }
// }

// async function updateTaskStatus(taskId, status) {
//   await syncWithApi(
//     `/tasks/${encodeURIComponent(taskId)}/status`,
//     { method: "PATCH", body: JSON.stringify({ status }) },
//     "Task status updated."
//   );
// }

// async function updateLeaveStatus(leaveId, status) {
//   await syncWithApi(
//     `/leaves/${encodeURIComponent(leaveId)}/status`,
//     { method: "PATCH", body: JSON.stringify({ status }) },
//     `Leave request ${leaveId} updated.`
//   );
// }

// async function markNotificationRead(notificationId) {
//   await syncWithApi(
//     `/notifications/${encodeURIComponent(notificationId)}/read`,
//     { method: "PATCH", body: JSON.stringify({}) },
//     "Notification marked as read."
//   );
// }

// async function markAllNotificationsRead() {
//   await syncWithApi(
//     "/notifications/read-all",
//     { method: "POST", body: JSON.stringify({ userId: state.session.userId }) },
//     "All visible notifications marked as read."
//   );
// }

// async function exportPdfReport() {
//   if (!requireLoggedIn()) {
//     return;
//   }
//   await syncWithApi(
//     "/announcements",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         audience: "Managers",
//         title: "PDF export started",
//         message: "The leadership report was prepared for PDF export.",
//       }),
//     },
//     "Print dialog opened for PDF export."
//   );
//   if (typeof window.print === "function") {
//     window.print();
//   }
// }

// async function exportExcelReport() {
//   if (!requireLoggedIn()) {
//     return;
//   }
//   const rows = [
//     ["Section", "Metric", "Value"],
//     ["Tasks", "Open Issues", String(state.tasks.filter((task) => task.status !== "done").length)],
//     ["Tasks", "Completion Rate", `${Math.round((state.tasks.filter((task) => task.status === "done").length / Math.max(state.tasks.length, 1)) * 100)}%`],
//     ["Attendance", "Monthly Attendance Rate", `${Math.round(calculateAttendanceRate())}%`],
//     ["Leave", "Pending Requests", String(state.leaves.filter((leave) => leave.status === "Pending").length)],
//     ["Time", "Weekly Logged Hours", `${state.workLogs.filter((log) => isDateWithinDays(log.date, APP_TODAY, 6)).reduce((sum, log) => sum + log.hours, 0).toFixed(1)}h`],
//   ];
//   downloadCsv("soumyaflow-report.csv", rows.map((row) => row.join(",")).join("\n"));
//   await syncWithApi(
//     "/announcements",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         audience: "Managers",
//         title: "Excel export downloaded",
//         message: "A CSV export compatible with Excel was downloaded from Reports.",
//       }),
//     },
//     "Excel-compatible report downloaded."
//   );
// }

// function openComposer() {
//   if (!requireLoggedIn()) {
//     return;
//   }
//   setIssueFormDefaults();
//   elements.composer.showModal();
// }

// function closeComposer() {
//   if (elements.composer.open) {
//     elements.composer.close();
//   }
// }

// function syncNavigation() {
//   elements.navLinks.forEach((button) => {
//     button.classList.toggle("active", button.dataset.view === state.activeView);
//     button.classList.toggle("disabled", button.dataset.view === "admin" && !hasAdminAccess(getCurrentUser()));
//   });
//   elements.panels.forEach((panel) => {
//     panel.classList.toggle("active", panel.dataset.panel === state.activeView);
//   });
// }

// function syncTaskTools() {
//   const showTaskTools = ["overview", "board", "backlog", "reports"].includes(state.activeView);
//   elements.taskTools.classList.toggle("hidden", !showTaskTools);
// }

// function syncSessionState() {
//   document.body.classList.toggle("locked", !state.session.loggedIn);
//   elements.sessionGate.classList.toggle("active", !state.session.loggedIn);
//   elements.sessionMessage.textContent = state.session.loggedIn
//     ? "Session active."
//     : "Session locked. Login to continue.";
// }

// function enforcePermissions() {
//   if (state.activeView === "admin" && !hasAdminAccess(getCurrentUser())) {
//     state.activeView = "overview";
//     showFlash("Admin access is restricted to Admin, Manager, and HR roles.");
//   }
// }

// function populateDynamicOptions() {
//   const users = state.users;
//   const projects = uniqueValues([...state.tasks.map((task) => task.project), ...state.workLogs.map((log) => log.project)]);

//   fillSelect(elements.sessionUserSelect, users.map((user) => ({ value: user.id, label: `${user.name} · ${user.role}` })), state.session.userId);
//   fillSelect(elements.issueAssigneeSelect, users.map((user) => ({ value: user.id, label: `${user.name} · ${user.department}` })));
//   fillSelect(elements.attendanceEmployeeSelect, users.map((user) => ({ value: user.id, label: user.name })), getCurrentUser().id);
//   fillSelect(elements.workLogEmployeeSelect, users.map((user) => ({ value: user.id, label: user.name })), getCurrentUser().id);
//   fillSelect(elements.leaveEmployeeSelect, users.map((user) => ({ value: user.id, label: user.name })), getCurrentUser().id);
//   fillSelect(elements.assigneeFilter, [{ value: "all", label: "All assignees" }, ...users.map((user) => ({ value: user.id, label: user.name }))], state.filters.assignee);
//   fillSelect(elements.projectFilter, [{ value: "all", label: "All projects" }, ...projects.map((project) => ({ value: project, label: project }))], state.filters.project);
//   fillSelect(elements.priorityFilter, [
//     { value: "all", label: "All priorities" },
//     { value: "Critical", label: "Critical" },
//     { value: "High", label: "High" },
//     { value: "Medium", label: "Medium" },
//     { value: "Low", label: "Low" },
//   ], state.filters.priority);
//   fillSelect(elements.statusFilter, [{ value: "all", label: "All statuses" }, ...STATUS_ORDER.map((status) => ({ value: status, label: STATUS_LABELS[status] }))], state.filters.status);

//   elements.projectSuggestions.innerHTML = projects.map((project) => `<option value="${escapeHtml(project)}"></option>`).join("");
//   elements.searchInput.value = state.filters.query;
// }

// function setIssueFormDefaults() {
//   elements.issueForm.elements.assignee.value = getCurrentUser().id;
//   elements.issueForm.elements.dueDate.value = shiftDate(APP_TODAY, 5);
//   elements.issueForm.elements.reminderAt.value = `${shiftDate(APP_TODAY, 1)}T09:00`;
// }

// function setAttendanceFormDefaults() {
//   const currentUser = getCurrentUser();
//   const record = getAttendanceRecord(currentUser.id, APP_TODAY);
//   elements.attendanceForm.elements.employeeId.value = currentUser.id;
//   elements.attendanceForm.elements.date.value = APP_TODAY;
//   elements.attendanceForm.elements.loginTime.value = record ? record.loginTime : "09:15";
//   elements.attendanceForm.elements.logoutTime.value = record ? record.logoutTime : "18:30";
//   elements.attendanceForm.elements.breakMinutes.value = record ? record.breakMinutes : 45;
//   elements.attendanceForm.elements.workMode.value = record ? record.workMode : currentUser.workMode;
//   elements.attendanceForm.elements.biometricVerified.checked = Boolean(record && record.biometricVerified);
// }

// function setWorkLogFormDefaults() {
//   elements.workLogForm.elements.employeeId.value = getCurrentUser().id;
//   elements.workLogForm.elements.date.value = APP_TODAY;
// }

// function setLeaveFormDefaults() {
//   elements.leaveForm.elements.employeeId.value = getCurrentUser().id;
//   elements.leaveForm.elements.fromDate.value = shiftDate(APP_TODAY, 7);
//   elements.leaveForm.elements.toDate.value = shiftDate(APP_TODAY, 7);
// }

// function requireLoggedIn() {
//   if (state.session.loggedIn) {
//     return true;
//   }
//   state.activeView = "overview";
//   showFlash("Login to continue using workspace actions.");
//   render();
//   return false;
// }

// function getFilteredTasks() {
//   return state.tasks.filter((task) => {
//     const haystack = [
//       task.id,
//       task.title,
//       task.project,
//       task.description,
//       getUserName(task.assigneeId),
//       ...task.labels,
//       ...task.comments.map((comment) => comment.text),
//     ]
//       .join(" ")
//       .toLowerCase();
//     const queryMatch = !state.filters.query || haystack.includes(state.filters.query);
//     const projectMatch = state.filters.project === "all" || task.project === state.filters.project;
//     const assigneeMatch = state.filters.assignee === "all" || task.assigneeId === state.filters.assignee;
//     const priorityMatch = state.filters.priority === "all" || task.priority === state.filters.priority;
//     const statusMatch = state.filters.status === "all" || task.status === state.filters.status;
//     return queryMatch && projectMatch && assigneeMatch && priorityMatch && statusMatch;
//   });
// }

// function getCurrentUser() {
//   return getUserById(state.session.userId) || state.users[0];
// }

// function getUserById(userId) {
//   return state.users.find((user) => user.id === userId);
// }

// function getUserName(userId) {
//   const user = getUserById(userId);
//   return user ? user.name : "Unknown User";
// }

// function getVisibleNotifications() {
//   const currentUser = getCurrentUser();
//   return [...state.notifications]
//     .filter((notification) => notificationAppliesToUser(notification, currentUser))
//     .sort((left, right) => new Date(right.time) - new Date(left.time));
// }

// function notificationAppliesToUser(notification, user) {
//   if (notification.userId) {
//     return notification.userId === user.id;
//   }
//   if (notification.audience === "All") {
//     return true;
//   }
//   if (notification.audience === "Managers") {
//     return user.role === "Manager" || user.role === "Admin";
//   }
//   if (notification.audience === "Engineering") {
//     return user.department === "Technology";
//   }
//   if (notification.audience === "HR") {
//     return user.role === "HR" || user.department === "People Ops";
//   }
//   return true;
// }

// function getAttendanceRecordsForUser(userId) {
//   return state.attendance.filter((record) => record.employeeId === userId);
// }

// function getAttendanceRecord(userId, date) {
//   return state.attendance.find((record) => record.employeeId === userId && record.date === date);
// }

// function getLatestAttendanceRecord(userId) {
//   return getAttendanceRecordsForUser(userId).sort((left, right) => new Date(right.date) - new Date(left.date))[0];
// }

// function getWeeklyHoursForUser(userId) {
//   const dates = Array.from({ length: 5 }, (_, index) => shiftDate(APP_TODAY, index - 4));
//   return dates.map((date) => ({
//     date,
//     hours: state.workLogs.filter((log) => log.employeeId === userId && log.date === date).reduce((sum, log) => sum + log.hours, 0),
//   }));
// }

// function getProjectHoursForUser(userId) {
//   const grouped = {};
//   state.workLogs
//     .filter((log) => log.employeeId === userId)
//     .forEach((log) => {
//       grouped[log.project] ||= 0;
//       grouped[log.project] += log.hours;
//     });
//   return Object.entries(grouped)
//     .map(([project, hours]) => ({ project, hours }))
//     .sort((left, right) => right.hours - left.hours);
// }

// function calculatePerformanceScore(userId) {
//   const tasks = state.tasks.filter((task) => task.assigneeId === userId);
//   const completed = tasks.filter((task) => task.status === "done").length;
//   const weeklyHours = getWeeklyHoursForUser(userId).reduce((sum, row) => sum + row.hours, 0);
//   return Math.min(100, Math.round((completed / Math.max(tasks.length, 1)) * 70 + Math.min(weeklyHours, 30)));
// }

// function calculateOvertimeHours(userId) {
//   return getAttendanceRecordsForUser(userId).reduce((sum, record) => sum + calculateOvertime(record), 0);
// }

// function calculateAttendanceRate() {
//   const activeEmployees = state.users.length;
//   const workingDays = 5;
//   return (state.attendance.length / Math.max(activeEmployees * workingDays, 1)) * 100;
// }

// function getMonthlyAttendanceCount(userId) {
//   return getAttendanceRecordsForUser(userId).filter((record) => record.date.startsWith("2026-04")).length;
// }

// function getRiskItems() {
//   const blockedTasks = state.tasks
//     .filter((task) => task.blocked || (task.status !== "done" && new Date(task.dueDate) < new Date(APP_TODAY)))
//     .map((task) => ({
//       title: `${task.id} · ${task.title}`,
//       detail: `${getUserName(task.assigneeId)} · ${task.project} · ${task.blocked ? "Blocked" : "Overdue"}`,
//     }));
//   const leaveRisks = state.leaves
//     .filter((leave) => leave.status === "Pending")
//     .map((leave) => ({
//       title: `${leave.id} · ${getUserName(leave.employeeId)} leave pending`,
//       detail: `${leave.type} leave from ${formatDate(leave.fromDate)} to ${formatDate(leave.toDate)}`,
//     }));
//   return [...blockedTasks, ...leaveRisks].slice(0, 8);
// }

// function hasAdminAccess(user) {
//   return ADMIN_ROLES.has(user.role);
// }

// function calculateWorkHours(record) {
//   const login = parseTime(record.date, record.loginTime);
//   const logout = parseTime(record.date, record.logoutTime);
//   return Math.max(0, (logout - login) / 3600000 - record.breakMinutes / 60);
// }

// function calculateOvertime(record) {
//   return Math.max(0, calculateWorkHours(record) - 8.5);
// }

// function isLateLogin(record) {
//   return parseTime(record.date, record.loginTime) > parseTime(record.date, "09:30");
// }

// function isHalfDay(record) {
//   return calculateWorkHours(record) < 4.5;
// }

// function getAttendanceStatus(record) {
//   if (isHalfDay(record)) {
//     return "Half Day";
//   }
//   if (isLateLogin(record)) {
//     return "Late";
//   }
//   return "Present";
// }

// function getSecurityScore() {
//   let score = 40;
//   if (state.security.jwtEnabled) score += 20;
//   if (state.security.requireTwoFactor) score += 20;
//   if (state.security.forgotPasswordEnabled) score += 10;
//   if (state.security.sessionTimeoutMinutes <= 30) score += 10;
//   return Math.min(100, score);
// }

// function getLoginHistoryForUser(userId) {
//   return state.security.loginHistory.filter((entry) => entry.userId === userId);
// }

// function getUpcomingHoliday() {
//   return [...state.holidays].sort((left, right) => new Date(left.date) - new Date(right.date))[0];
// }

// function renderCardList(container, items, template, emptyMessage) {
//   if (!items.length) {
//     container.innerHTML = `<div class="empty-state">${escapeHtml(emptyMessage)}</div>`;
//     return;
//   }
//   container.innerHTML = items.map(template).join("");
// }

// function renderBarRows(container, items) {
//   const maxValue = Math.max(...items.map((item) => item.value), 1);
//   container.innerHTML = items
//     .map(
//       (item) => `
//         <div class="status-row">
//           <strong>${escapeHtml(item.label)}</strong>
//           <div class="bar-track"><span style="width:${(item.value / maxValue) * 100}%"></span></div>
//           <span class="badge">${escapeHtml(item.suffix)}</span>
//         </div>
//       `
//     )
//     .join("");
// }

// function fillSelect(select, options, selectedValue) {
//   const currentValue = selectedValue ?? select.value;
//   select.innerHTML = options.map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`).join("");
//   select.value = options.some((option) => option.value === currentValue) ? currentValue : options[0]?.value || "";
// }

// function addNotification({ title, message, type, userId = "", audience = "All" }) {
//   state.notifications.unshift({
//     id: createId("NTF"),
//     title,
//     message,
//     type,
//     userId,
//     audience,
//     time: nextEventTimestamp(),
//     read: false,
//   });
// }

// function createLoginHistoryEntry(userId, action) {
//   return {
//     id: createId("LGN"),
//     userId,
//     action,
//     time: nextEventTimestamp(),
//     device: "Desktop App",
//     location: "Hyderabad Office",
//     success: true,
//   };
// }

// function createIssueId(projectName) {
//   const prefix = projectName
//     .split(/\s+/)
//     .map((part) => part[0] || "")
//     .join("")
//     .toUpperCase()
//     .padEnd(3, "X")
//     .slice(0, 3);
//   const maxValue = state.tasks
//     .filter((task) => task.id.startsWith(prefix))
//     .map((task) => Number(task.id.split("-")[1]) || 0)
//     .reduce((max, value) => Math.max(max, value), 0);
//   return `${prefix}-${String(maxValue + 1).padStart(3, "0")}`;
// }

// function createId(prefix) {
//   const value = ++state.meta.sequence;
//   return `${prefix}-${String(value).padStart(3, "0")}`;
// }

// function nextEventTimestamp() {
//   const nextTime = new Date(new Date(DEMO_NOW).getTime() + state.meta.sequence * 600000);
//   return nextTime.toISOString();
// }

// function calculateLeaveDays(fromDate, toDate) {
//   const start = new Date(fromDate);
//   const end = new Date(toDate);
//   return Math.max(1, Math.round((end - start) / 86400000) + 1);
// }

// function shiftDate(dateString, offsetDays) {
//   const date = new Date(`${dateString}T00:00:00`);
//   date.setDate(date.getDate() + offsetDays);
//   return date.toISOString().slice(0, 10);
// }

// function parseTime(dateString, timeString) {
//   return new Date(`${dateString}T${timeString}:00`).getTime();
// }

// function isDateWithinDays(dateString, referenceDate, rangeDays) {
//   const left = new Date(`${dateString}T00:00:00`);
//   const right = new Date(`${referenceDate}T00:00:00`);
//   return Math.abs((left - right) / 86400000) <= rangeDays;
// }

// function isDueWithinDays(dateString, days) {
//   const due = new Date(`${dateString}T00:00:00`);
//   const today = new Date(`${APP_TODAY}T00:00:00`);
//   const diff = (due - today) / 86400000;
//   return diff >= 0 && diff <= days;
// }

// function sortByDueDate(left, right) {
//   return new Date(left.dueDate) - new Date(right.dueDate);
// }

// function uniqueValues(items) {
//   return [...new Set(items)].sort((left, right) => left.localeCompare(right));
// }

// function formatDate(dateString) {
//   return new Intl.DateTimeFormat("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   }).format(new Date(dateString));
// }

// function formatShortDate(dateString) {
//   return new Intl.DateTimeFormat("en-IN", {
//     day: "2-digit",
//     month: "short",
//   }).format(new Date(dateString));
// }

// function formatDateTime(dateString) {
//   return new Intl.DateTimeFormat("en-IN", {
//     day: "2-digit",
//     month: "short",
//     hour: "2-digit",
//     minute: "2-digit",
//   }).format(new Date(dateString));
// }

// function getInitials(value) {
//   return value
//     .split(/\s+/)
//     .slice(0, 2)
//     .map((part) => part[0] || "")
//     .join("")
//     .toUpperCase();
// }

// function showFlash(message) {
//   elements.flashBanner.textContent = message;
//   elements.flashBanner.classList.remove("hidden");
//   clearTimeout(flashTimerId);
//   flashTimerId = window.setTimeout(() => {
//     elements.flashBanner.classList.add("hidden");
//   }, 3500);
// }

// function downloadCsv(fileName, content) {
//   const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
//   const link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = fileName;
//   link.click();
//   URL.revokeObjectURL(link.href);
// }

// function persistState() {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
// }

// function loadState() {
//   const base = getDefaultState();
//   try {
//     const raw = localStorage.getItem(STORAGE_KEY);
//     if (raw) {
//       return mergeState(base, JSON.parse(raw));
//     }
//     const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
//     if (legacy) {
//       const parsed = JSON.parse(legacy);
//       if (Array.isArray(parsed)) {
//         base.tasks = parsed.map((task) => migrateLegacyTask(task, base.users));
//       }
//     }
//     return base;
//   } catch (error) {
//     return base;
//   }
// }

// function mergeState(base, parsed) {
//   return {
//     ...base,
//     ...parsed,
//     meta: { ...base.meta, ...parsed.meta },
//     filters: { ...base.filters, ...parsed.filters },
//     session: { ...base.session, ...parsed.session },
//     security: {
//       ...base.security,
//       ...parsed.security,
//       loginHistory: Array.isArray(parsed.security?.loginHistory) ? parsed.security.loginHistory : base.security.loginHistory,
//     },
//     users: Array.isArray(parsed.users) ? parsed.users : base.users,
//     tasks: Array.isArray(parsed.tasks) ? parsed.tasks.map((task) => normalizeTask(task, parsed.users || base.users)) : base.tasks,
//     attendance: Array.isArray(parsed.attendance) ? parsed.attendance : base.attendance,
//     workLogs: Array.isArray(parsed.workLogs) ? parsed.workLogs : base.workLogs,
//     leaves: Array.isArray(parsed.leaves) ? parsed.leaves : base.leaves,
//     holidays: Array.isArray(parsed.holidays) ? parsed.holidays : base.holidays,
//     notifications: Array.isArray(parsed.notifications) ? parsed.notifications : base.notifications,
//   };
// }

// function normalizeTask(task, users) {
//   if (task.assigneeId) {
//     return {
//       ...task,
//       labels: Array.isArray(task.labels) ? task.labels : [],
//       files: Array.isArray(task.files) ? task.files : [],
//       comments: Array.isArray(task.comments) ? task.comments : [],
//       recurring: Boolean(task.recurring),
//       reminderAt: task.reminderAt || "",
//     };
//   }
//   return migrateLegacyTask(task, users);
// }

// function migrateLegacyTask(task, users) {
//   const matchedUser = users.find((user) => user.name.toLowerCase() === String(task.assignee || "").toLowerCase()) || users[0];
//   return {
//     id: task.id,
//     title: task.title,
//     description: task.description || "Migrated from the earlier SoumyaFlow task board.",
//     type: task.type || "Task",
//     priority: task.priority || "Medium",
//     status: task.status || "todo",
//     project: task.project || "General",
//     assigneeId: matchedUser.id,
//     points: task.points || 3,
//     dueDate: task.dueDate || APP_TODAY,
//     labels: Array.isArray(task.labels) ? task.labels : [],
//     blocked: Boolean(task.blocked),
//     files: [],
//     comments: [],
//     recurring: false,
//     reminderAt: "",
//     createdAt: DEMO_NOW,
//   };
// }

// function byId(id) {
//   return document.getElementById(id);
// }

// function escapeHtml(value) {
//   return String(value)
//     .replaceAll("&", "&amp;")
//     .replaceAll("<", "&lt;")
//     .replaceAll(">", "&gt;")
//     .replaceAll('"', "&quot;")
//     .replaceAll("'", "&#39;");
// }

// function getStatusCountElement(status) {
//   if (status === "todo") return elements.todoCount;
//   if (status === "in-progress") return elements.inProgressCount;
//   if (status === "review") return elements.reviewCount;
//   return elements.doneCount;
// }

// function getDefaultState() {
//   return {
//     activeView: "overview",
//     meta: { sequence: 40 },
//     filters: { query: "", project: "all", priority: "all", assignee: "all", status: "all" },
//     session: { loggedIn: true, userId: "USR-001", lastActivity: DEMO_NOW },
//     security: {
//       jwtEnabled: true,
//       requireTwoFactor: true,
//       forgotPasswordEnabled: true,
//       sessionTimeoutMinutes: 30,
//       passwordChangedAt: "2026-03-28T19:10:00.000Z",
//       loginHistory: [
//         { id: "LGN-001", userId: "USR-001", action: "Login", time: "2026-04-02T03:42:00.000Z", device: "Desktop App", location: "Hyderabad Office", success: true },
//         { id: "LGN-002", userId: "USR-001", action: "Password Changed", time: "2026-03-28T13:40:00.000Z", device: "Desktop App", location: "Remote", success: true },
//         { id: "LGN-003", userId: "USR-002", action: "Login", time: "2026-04-02T03:20:00.000Z", device: "Web App", location: "Bengaluru", success: true },
//         { id: "LGN-004", userId: "USR-004", action: "Forgot Password", time: "2026-03-29T09:10:00.000Z", device: "Web App", location: "Chennai", success: true },
//       ],
//     },
//     users: [
//       { id: "USR-001", name: "Aisha Khan", role: "Manager", department: "Operations", email: "aisha@soumyaflow.example.com", status: "Active", workMode: "WFH", leaveBalance: { Sick: 5, Casual: 4, Paid: 12 } },
//       { id: "USR-002", name: "Rahul Verma", role: "Admin", department: "Technology", email: "rahul@soumyaflow.example.com", status: "Active", workMode: "Office", leaveBalance: { Sick: 6, Casual: 5, Paid: 14 } },
//       { id: "USR-003", name: "Maya Singh", role: "Employee", department: "Product", email: "maya@soumyaflow.example.com", status: "Active", workMode: "Hybrid", leaveBalance: { Sick: 4, Casual: 3, Paid: 10 } },
//       { id: "USR-004", name: "Nina Shah", role: "HR", department: "People Ops", email: "nina@soumyaflow.example.com", status: "Active", workMode: "Office", leaveBalance: { Sick: 7, Casual: 5, Paid: 13 } },
//       { id: "USR-005", name: "Dev Patel", role: "Employee", department: "Security", email: "dev@soumyaflow.example.com", status: "Active", workMode: "Office", leaveBalance: { Sick: 5, Casual: 4, Paid: 11 } },
//       { id: "USR-006", name: "Leena Joseph", role: "Employee", department: "Quality", email: "leena@soumyaflow.example.com", status: "Active", workMode: "Hybrid", leaveBalance: { Sick: 6, Casual: 4, Paid: 12 } },
//     ],
//     tasks: [
//       { id: "OPS-142", title: "Launch executive reporting dashboard", description: "Combine sprint status, overdue work, and team health into one leadership view.", type: "Epic", priority: "Critical", status: "in-progress", project: "Operations Excellence", assigneeId: "USR-001", points: 13, dueDate: "2026-04-05", labels: ["dashboard", "leadership"], blocked: false, files: ["q2-reporting-plan.pdf"], comments: [{ author: "Rahul Verma", text: "Leadership review needs this before Monday.", time: "2026-04-01T08:20:00.000Z" }], recurring: false, reminderAt: "2026-04-03T09:00", createdAt: "2026-03-26T10:00:00.000Z" },
//       { id: "APP-318", title: "Finish approval workflow for procurement requests", description: "Support multi-step review and approval with audit visibility for finance and ops.", type: "Story", priority: "High", status: "review", project: "Enterprise Platform", assigneeId: "USR-002", points: 8, dueDate: "2026-04-04", labels: ["workflow", "finance"], blocked: false, files: ["approval-schema.png"], comments: [{ author: "Aisha Khan", text: "Please validate the finance edge cases before release.", time: "2026-04-01T11:45:00.000Z" }], recurring: false, reminderAt: "2026-04-03T15:00", createdAt: "2026-03-27T09:00:00.000Z" },
//       { id: "WEB-072", title: "Fix delayed notifications on task mentions", description: "Mention alerts are arriving late for some users during peak usage windows.", type: "Bug", priority: "Critical", status: "todo", project: "Customer Portal", assigneeId: "USR-003", points: 5, dueDate: "2026-04-03", labels: ["notifications", "bugfix"], blocked: true, files: [], comments: [{ author: "Leena Joseph", text: "Issue reproduced in regression cycle.", time: "2026-04-02T04:10:00.000Z" }], recurring: false, reminderAt: "2026-04-02T17:00", createdAt: "2026-03-29T14:00:00.000Z" },
//       { id: "SEC-051", title: "Add permission matrix for admin roles", description: "Map workspace roles to fine-grained actions across boards, reports, and settings.", type: "Task", priority: "High", status: "in-progress", project: "Security Hardening", assigneeId: "USR-005", points: 8, dueDate: "2026-04-08", labels: ["roles", "security"], blocked: false, files: ["roles-matrix.xlsx"], comments: [{ author: "Nina Shah", text: "HR access needs leave-only permissions.", time: "2026-04-01T13:10:00.000Z" }], recurring: false, reminderAt: "", createdAt: "2026-03-28T12:00:00.000Z" },
//       { id: "MOB-204", title: "Polish mobile backlog experience", description: "Reduce friction in creating, sorting, and updating issues from smaller screens.", type: "Story", priority: "Medium", status: "todo", project: "Mobile Experience", assigneeId: "USR-003", points: 5, dueDate: "2026-04-09", labels: ["mobile", "ux"], blocked: false, files: [], comments: [], recurring: false, reminderAt: "", createdAt: "2026-03-30T09:00:00.000Z" },
//       { id: "QA-190", title: "Build regression checklist for sprint release", description: "Create a lightweight checklist so QA can verify the most sensitive workflows quickly.", type: "Task", priority: "Medium", status: "done", project: "Release Readiness", assigneeId: "USR-006", points: 3, dueDate: "2026-04-01", labels: ["qa", "release"], blocked: false, files: ["release-checklist.docx"], comments: [{ author: "Leena Joseph", text: "Checklist completed and shared with the release team.", time: "2026-04-01T16:30:00.000Z" }], recurring: true, reminderAt: "2026-04-08T09:30", createdAt: "2026-03-27T16:00:00.000Z" },
//       { id: "CRM-447", title: "Sync customer account owner changes from CRM", description: "Reflect CRM ownership updates in internal workspaces to keep handoffs accurate.", type: "Story", priority: "High", status: "review", project: "Revenue Systems", assigneeId: "USR-001", points: 8, dueDate: "2026-04-06", labels: ["crm", "integration"], blocked: true, files: ["crm-sync-mapping.csv"], comments: [{ author: "Rahul Verma", text: "API payload now includes ownership metadata.", time: "2026-04-02T02:20:00.000Z" }], recurring: false, reminderAt: "2026-04-04T10:00", createdAt: "2026-03-31T09:00:00.000Z" },
//       { id: "API-266", title: "Create SLA monitor for task processing APIs", description: "Track response thresholds and highlight production risks before they spread.", type: "Task", priority: "Medium", status: "in-progress", project: "Platform Reliability", assigneeId: "USR-002", points: 5, dueDate: "2026-04-10", labels: ["api", "monitoring"], blocked: false, files: ["sla-thresholds.json"], comments: [], recurring: true, reminderAt: "2026-04-03T11:00", createdAt: "2026-03-29T11:00:00.000Z" },
//     ],
//     attendance: [
//       { id: "ATT-001", employeeId: "USR-001", date: "2026-03-29", loginTime: "09:08", logoutTime: "18:22", breakMinutes: 40, workMode: "WFH", biometricVerified: false },
//       { id: "ATT-002", employeeId: "USR-001", date: "2026-03-30", loginTime: "09:18", logoutTime: "18:36", breakMinutes: 45, workMode: "WFH", biometricVerified: false },
//       { id: "ATT-003", employeeId: "USR-001", date: "2026-03-31", loginTime: "09:11", logoutTime: "18:32", breakMinutes: 45, workMode: "Office", biometricVerified: true },
//       { id: "ATT-004", employeeId: "USR-001", date: "2026-04-01", loginTime: "09:26", logoutTime: "18:18", breakMinutes: 35, workMode: "Office", biometricVerified: true },
//       { id: "ATT-005", employeeId: "USR-001", date: "2026-04-02", loginTime: "09:12", logoutTime: "18:42", breakMinutes: 45, workMode: "WFH", biometricVerified: false },
//       { id: "ATT-006", employeeId: "USR-002", date: "2026-04-02", loginTime: "08:58", logoutTime: "18:55", breakMinutes: 50, workMode: "Office", biometricVerified: true },
//       { id: "ATT-007", employeeId: "USR-003", date: "2026-04-02", loginTime: "09:42", logoutTime: "17:36", breakMinutes: 50, workMode: "Hybrid", biometricVerified: false },
//       { id: "ATT-008", employeeId: "USR-004", date: "2026-04-02", loginTime: "09:05", logoutTime: "18:21", breakMinutes: 40, workMode: "Office", biometricVerified: true },
//       { id: "ATT-009", employeeId: "USR-005", date: "2026-04-02", loginTime: "09:20", logoutTime: "18:47", breakMinutes: 35, workMode: "Office", biometricVerified: true },
//       { id: "ATT-010", employeeId: "USR-006", date: "2026-04-02", loginTime: "09:09", logoutTime: "18:14", breakMinutes: 45, workMode: "Hybrid", biometricVerified: false },
//     ],
//     workLogs: [
//       { id: "LOG-001", employeeId: "USR-001", date: "2026-03-30", project: "Operations Excellence", hours: 3.5, note: "Built sprint health widgets.", time: "2026-03-30T12:00:00.000Z" },
//       { id: "LOG-002", employeeId: "USR-001", date: "2026-03-31", project: "Revenue Systems", hours: 2.5, note: "Reviewed CRM sync edge cases.", time: "2026-03-31T13:00:00.000Z" },
//       { id: "LOG-003", employeeId: "USR-001", date: "2026-04-01", project: "Operations Excellence", hours: 4.0, note: "Prepared leadership dashboard metrics.", time: "2026-04-01T11:00:00.000Z" },
//       { id: "LOG-004", employeeId: "USR-001", date: "2026-04-02", project: "Revenue Systems", hours: 2.0, note: "Validated owner sync workflow.", time: "2026-04-02T05:30:00.000Z" },
//       { id: "LOG-005", employeeId: "USR-002", date: "2026-04-02", project: "Platform Reliability", hours: 4.5, note: "Configured SLA alert thresholds.", time: "2026-04-02T05:10:00.000Z" },
//       { id: "LOG-006", employeeId: "USR-003", date: "2026-04-02", project: "Customer Portal", hours: 5.0, note: "Investigated delayed mention notifications.", time: "2026-04-02T07:00:00.000Z" },
//       { id: "LOG-007", employeeId: "USR-005", date: "2026-04-02", project: "Security Hardening", hours: 4.0, note: "Drafted role permission matrix.", time: "2026-04-02T06:00:00.000Z" },
//       { id: "LOG-008", employeeId: "USR-006", date: "2026-04-01", project: "Release Readiness", hours: 3.0, note: "Closed regression checklist.", time: "2026-04-01T08:00:00.000Z" },
//     ],
//     leaves: [
//       { id: "LEV-301", employeeId: "USR-003", type: "Sick", fromDate: "2026-04-08", toDate: "2026-04-09", days: 2, status: "Pending", approverId: "USR-001", reason: "Fever and rest", createdAt: "2026-04-02T04:20:00.000Z" },
//       { id: "LEV-302", employeeId: "USR-006", type: "Paid", fromDate: "2026-04-15", toDate: "2026-04-16", days: 2, status: "Approved", approverId: "USR-004", reason: "Family event", createdAt: "2026-03-31T08:20:00.000Z" },
//       { id: "LEV-303", employeeId: "USR-005", type: "Casual", fromDate: "2026-04-04", toDate: "2026-04-04", days: 1, status: "Approved", approverId: "USR-001", reason: "Personal work", createdAt: "2026-03-30T07:10:00.000Z" },
//       { id: "LEV-304", employeeId: "USR-004", type: "Paid", fromDate: "2026-04-18", toDate: "2026-04-21", days: 4, status: "Pending", approverId: "USR-002", reason: "Travel leave", createdAt: "2026-04-01T09:30:00.000Z" },
//     ],
//     holidays: [
//       { id: "HOL-001", name: "Ambedkar Jayanti", date: "2026-04-14", type: "Company" },
//       { id: "HOL-002", name: "Good Friday", date: "2026-04-17", type: "Optional" },
//       { id: "HOL-003", name: "Labour Day", date: "2026-05-01", type: "Company" },
//       { id: "HOL-004", name: "Bakrid", date: "2026-05-27", type: "Optional" },
//     ],
//     notifications: [
//       { id: "NTF-001", title: "Task assigned", message: "WEB-072 has been assigned to Maya Singh.", type: "task", userId: "USR-003", audience: "", time: "2026-04-02T04:30:00.000Z", read: false },
//       { id: "NTF-002", title: "Deadline reminder", message: "OPS-142 is due on 05 Apr 2026.", type: "deadline", userId: "USR-001", audience: "", time: "2026-04-02T03:55:00.000Z", read: false },
//       { id: "NTF-003", title: "Leave approval required", message: "Maya Singh submitted a sick leave request.", type: "leave", audience: "Managers", userId: "", time: "2026-04-02T04:25:00.000Z", read: false },
//       { id: "NTF-004", title: "Admin announcement", message: "Quarterly town hall starts tomorrow at 4 PM.", type: "announcement", audience: "All", userId: "", time: "2026-04-01T10:30:00.000Z", read: true },
//       { id: "NTF-005", title: "Security alert", message: "Password rotation policy was updated this week.", type: "security", audience: "All", userId: "", time: "2026-03-31T12:10:00.000Z", read: true },
//       { id: "NTF-006", title: "Attendance reminder", message: "Please submit today’s work log before sign-off.", type: "attendance", userId: "USR-001", audience: "", time: "2026-04-02T05:00:00.000Z", read: false },
//     ],
//   };
// }
//  add clode code here---------------------------------------------------------------------------------------------------------
//  const API_BASE = "/api";
const API_BASE = "http://13.204.61.85:5000/api";
const APP_TODAY = "2026-04-02";
const DEMO_NOW = "2026-04-02T09:40:00";
const STORAGE_KEY = "soumyaflow_state";
const LEGACY_STORAGE_KEY = "soumyaflow_tasks";
const STATUS_LABELS = {
  todo: "To Do",
  "in-progress": "In Progress",
  review: "Review",
  done: "Done",
};
const STATUS_ORDER = ["todo", "in-progress", "review", "done"];
const ADMIN_ROLES = new Set(["Admin", "Manager", "HR"]);

let flashTimerId = null;
let state = getDefaultState();

const elements = {
  navLinks: Array.from(document.querySelectorAll(".nav-link")),
  panels: Array.from(document.querySelectorAll(".view-panel")),
  taskTools: byId("taskTools"),
  flashBanner: byId("flashBanner"),
  searchInput: byId("searchInput"),
  projectFilter: byId("projectFilter"),
  priorityFilter: byId("priorityFilter"),
  assigneeFilter: byId("assigneeFilter"),
  statusFilter: byId("statusFilter"),
  resetDataButton: byId("resetDataButton"),
  jumpAttendanceButton: byId("jumpAttendanceButton"),
  jumpLeaveButton: byId("jumpLeaveButton"),
  openComposerButton: byId("openComposerButton"),
  logoutButton: byId("logoutButton"),
  sessionGate: byId("sessionGate"),
  sessionForm: byId("sessionForm"),
  sessionUserSelect: byId("sessionUserSelect"),
  sessionMessage: byId("sessionMessage"),
  forgotPasswordButton: byId("forgotPasswordButton"),
  changePasswordButton: byId("changePasswordButton"),
  currentUserAvatar: byId("currentUserAvatar"),
  currentUserName: byId("currentUserName"),
  currentUserMeta: byId("currentUserMeta"),
  sessionStatusPill: byId("sessionStatusPill"),
  sidebarRoleLabel: byId("sidebarRoleLabel"),
  sidebarSessionLabel: byId("sidebarSessionLabel"),
  sidebarTimeoutLabel: byId("sidebarTimeoutLabel"),
  sidebarSecurityBar: byId("sidebarSecurityBar"),
  sidebarHolidayTitle: byId("sidebarHolidayTitle"),
  sidebarHolidayDate: byId("sidebarHolidayDate"),
  sidebarDepartments: byId("sidebarDepartments"),
  heroProjectsCount: byId("heroProjectsCount"),
  heroOpenCount: byId("heroOpenCount"),
  heroDueCount: byId("heroDueCount"),
  todayLoginTime: byId("todayLoginTime"),
  todayWorkMode: byId("todayWorkMode"),
  todayWorkHours: byId("todayWorkHours"),
  todayBreakTime: byId("todayBreakTime"),
  pendingTaskCount: byId("pendingTaskCount"),
  blockedCaption: byId("blockedCaption"),
  completedTaskCount: byId("completedTaskCount"),
  completionCaption: byId("completionCaption"),
  leaveBalanceCount: byId("leaveBalanceCount"),
  leaveBalanceCaption: byId("leaveBalanceCaption"),
  monthlyAttendanceCount: byId("monthlyAttendanceCount"),
  lateLoginStatus: byId("lateLoginStatus"),
  unreadNotificationCount: byId("unreadNotificationCount"),
  announcementCaption: byId("announcementCaption"),
  productivityScore: byId("productivityScore"),
  overtimeStatus: byId("overtimeStatus"),
  weeklyHoursTotal: byId("weeklyHoursTotal"),
  weeklyHoursBars: byId("weeklyHoursBars"),
  projectTimeTracking: byId("projectTimeTracking"),
  workLogPreview: byId("workLogPreview"),
  securityBadge: byId("securityBadge"),
  securitySummary: byId("securitySummary"),
  loginHistoryList: byId("loginHistoryList"),
  attendanceWatchList: byId("attendanceWatchList"),
  priorityInitiativesCount: byId("priorityInitiativesCount"),
  priorityInitiatives: byId("priorityInitiatives"),
  holidayBadge: byId("holidayBadge"),
  notificationPreview: byId("notificationPreview"),
  holidayPreview: byId("holidayPreview"),
  todoColumn: byId("todoColumn"),
  inProgressColumn: byId("inProgressColumn"),
  reviewColumn: byId("reviewColumn"),
  doneColumn: byId("doneColumn"),
  todoCount: byId("todoCount"),
  inProgressCount: byId("inProgressCount"),
  reviewCount: byId("reviewCount"),
  doneCount: byId("doneCount"),
  taskOpsCount: byId("taskOpsCount"),
  reminderQueue: byId("reminderQueue"),
  taskCommentFeed: byId("taskCommentFeed"),
  backlogCount: byId("backlogCount"),
  backlogTableBody: byId("backlogTableBody"),
  attendanceLoginMetric: byId("attendanceLoginMetric"),
  attendanceDateMetric: byId("attendanceDateMetric"),
  attendanceLogoutMetric: byId("attendanceLogoutMetric"),
  attendanceBreakMetric: byId("attendanceBreakMetric"),
  attendanceHoursMetric: byId("attendanceHoursMetric"),
  attendanceOvertimeMetric: byId("attendanceOvertimeMetric"),
  attendanceStatusMetric: byId("attendanceStatusMetric"),
  attendanceLateMetric: byId("attendanceLateMetric"),
  attendanceForm: byId("attendanceForm"),
  attendanceEmployeeSelect: byId("attendanceEmployeeSelect"),
  attendanceTableBody: byId("attendanceTableBody"),
  workLogForm: byId("workLogForm"),
  workLogEmployeeSelect: byId("workLogEmployeeSelect"),
  workLogCount: byId("workLogCount"),
  workLogList: byId("workLogList"),
  sickLeaveBalance: byId("sickLeaveBalance"),
  casualLeaveBalance: byId("casualLeaveBalance"),
  paidLeaveBalance: byId("paidLeaveBalance"),
  pendingLeaveCount: byId("pendingLeaveCount"),
  leaveForm: byId("leaveForm"),
  leaveEmployeeSelect: byId("leaveEmployeeSelect"),
  pendingLeaveList: byId("pendingLeaveList"),
  leaveHistoryCount: byId("leaveHistoryCount"),
  leaveHistoryBody: byId("leaveHistoryBody"),
  holidayList: byId("holidayList"),
  dailyReportMetric: byId("dailyReportMetric"),
  weeklyReportMetric: byId("weeklyReportMetric"),
  attendanceRateMetric: byId("attendanceRateMetric"),
  taskCompletionMetric: byId("taskCompletionMetric"),
  exportPdfButton: byId("exportPdfButton"),
  exportExcelButton: byId("exportExcelButton"),
  statusReport: byId("statusReport"),
  projectHealthCount: byId("projectHealthCount"),
  projectHealth: byId("projectHealth"),
  teamMemberCount: byId("teamMemberCount"),
  teamPerformanceList: byId("teamPerformanceList"),
  riskCount: byId("riskCount"),
  riskList: byId("riskList"),
  adminUserCount: byId("adminUserCount"),
  adminDepartmentCount: byId("adminDepartmentCount"),
  adminProjectCount: byId("adminProjectCount"),
  adminTaskCount: byId("adminTaskCount"),
  adminHolidayCount: byId("adminHolidayCount"),
  adminLeaveCount: byId("adminLeaveCount"),
  adminReportCount: byId("adminReportCount"),
  adminAttendanceCount: byId("adminAttendanceCount"),
  userTableBody: byId("userTableBody"),
  securitySettingsForm: byId("securitySettingsForm"),
  securityTimeoutInput: byId("securityTimeoutInput"),
  securityJwtCheckbox: byId("securityJwtCheckbox"),
  securityTwoFactorCheckbox: byId("securityTwoFactorCheckbox"),
  securityForgotCheckbox: byId("securityForgotCheckbox"),
  adminSecurityList: byId("adminSecurityList"),
  announcementForm: byId("announcementForm"),
  notificationsCount: byId("notificationsCount"),
  markAllReadButton: byId("markAllReadButton"),
  notificationsList: byId("notificationsList"),
  composer: byId("composer"),
  issueForm: byId("issueForm"),
  issueAssigneeSelect: byId("issueAssigneeSelect"),
  closeComposerButton: byId("closeComposerButton"),
  cancelComposerButton: byId("cancelComposerButton"),
  projectSuggestions: byId("projectSuggestions"),
};

initialize();

async function initialize() {
  attachEventListeners();
  await refreshState();
  render();
}

async function refreshState() {
  try {
    const response = await apiRequest("/state");
    state = response.state;
  } catch (error) {
    showFlash("Backend not reachable. Showing the local fallback state.");
  }
}

async function syncWithApi(path, options, fallbackMessage) {
  try {
    const response = await apiRequest(path, options);
    state = response.state;
    if (response.message) {
      showFlash(response.message);
    } else if (fallbackMessage) {
      showFlash(fallbackMessage);
    }
    render();
    return true;
  } catch (error) {
    showFlash(error.message || "Backend request failed.");
    return false;
  }
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.error || "Request failed.");
  }
  return payload;
}

function attachEventListeners() {
  elements.navLinks.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("disabled")) {
        return;
      }
      state.activeView = button.dataset.view;
      render();
    });
  });

  elements.searchInput.addEventListener("input", (event) => {
    state.filters.query = event.target.value.trim().toLowerCase();
    render();
  });

  elements.projectFilter.addEventListener("change", (event) => {
    state.filters.project = event.target.value;
    render();
  });

  elements.priorityFilter.addEventListener("change", (event) => {
    state.filters.priority = event.target.value;
    render();
  });

  elements.assigneeFilter.addEventListener("change", (event) => {
    state.filters.assignee = event.target.value;
    render();
  });

  elements.statusFilter.addEventListener("change", (event) => {
    state.filters.status = event.target.value;
    render();
  });

  elements.resetDataButton.addEventListener("click", async () => {
    await syncWithApi("/reset", { method: "POST", body: JSON.stringify({}) }, "Workspace reset.");
  });

  elements.jumpAttendanceButton.addEventListener("click", () => {
    if (!requireLoggedIn()) {
      return;
    }
    state.activeView = "attendance";
    render();
  });

  elements.jumpLeaveButton.addEventListener("click", () => {
    if (!requireLoggedIn()) {
      return;
    }
    state.activeView = "leave";
    render();
  });

  elements.openComposerButton.addEventListener("click", openComposer);
  elements.closeComposerButton.addEventListener("click", closeComposer);
  elements.cancelComposerButton.addEventListener("click", closeComposer);
  elements.logoutButton.addEventListener("click", handleLogoutToggle);
  elements.sessionForm.addEventListener("submit", handleLogin);
  elements.forgotPasswordButton.addEventListener("click", handleForgotPassword);
  elements.changePasswordButton.addEventListener("click", handleChangePassword);
  elements.issueForm.addEventListener("submit", handleIssueSubmit);
  elements.attendanceForm.addEventListener("submit", handleAttendanceSubmit);
  elements.workLogForm.addEventListener("submit", handleWorkLogSubmit);
  elements.leaveForm.addEventListener("submit", handleLeaveSubmit);
  elements.securitySettingsForm.addEventListener("submit", handleSecuritySettingsSubmit);
  elements.announcementForm.addEventListener("submit", handleAnnouncementSubmit);
  elements.exportPdfButton.addEventListener("click", exportPdfReport);
  elements.exportExcelButton.addEventListener("click", exportExcelReport);
  elements.markAllReadButton.addEventListener("click", markAllNotificationsRead);

  document.querySelectorAll(".board-column").forEach((column) => {
    column.addEventListener("dragover", (event) => {
      event.preventDefault();
      column.classList.add("drag-target");
    });

    column.addEventListener("dragleave", () => {
      column.classList.remove("drag-target");
    });

    column.addEventListener("drop", (event) => {
      event.preventDefault();
      column.classList.remove("drag-target");
      const taskId = event.dataTransfer.getData("text/plain");
      if (taskId) {
        updateTaskStatus(taskId, column.dataset.status);
      }
    });
  });
}

function render() {
  enforcePermissions();
  populateDynamicOptions();
  syncNavigation();
  syncTaskTools();
  syncSessionState();
  renderShell();
  renderOverview();
  renderBoard();
  renderBacklog();
  renderAttendance();
  renderLeave();
  renderReports();
  renderAdmin();
  renderNotifications();
  attachDynamicListeners();
}

function renderShell() {
  const currentUser = getCurrentUser();
  const upcomingHoliday = getUpcomingHoliday();
  const visibleNotifications = getVisibleNotifications();
  const securityScore = getSecurityScore();
  const departments = uniqueValues(state.users.map((user) => user.department)).slice(0, 5);
  const openTasks = state.tasks.filter((task) => task.status !== "done").length;
  const dueThisWeek = state.tasks.filter((task) => isDueWithinDays(task.dueDate, 7)).length;
  const projects = uniqueValues(state.tasks.map((task) => task.project)).length;

  elements.currentUserAvatar.textContent = getInitials(currentUser.name);
  elements.currentUserName.textContent = currentUser.name;
  elements.currentUserMeta.textContent = `${currentUser.role} · ${currentUser.department}`;
  elements.sessionStatusPill.textContent = state.session.loggedIn ? "Session Active" : "Session Locked";
  elements.sessionStatusPill.classList.toggle("is-locked", !state.session.loggedIn);
  elements.logoutButton.textContent = state.session.loggedIn ? "Logout" : "Open Login";
  elements.sidebarRoleLabel.textContent = `${currentUser.role} Access`;
  elements.sidebarSessionLabel.textContent = `${state.security.jwtEnabled ? "JWT" : "Session"} authentication · ${
    state.security.requireTwoFactor ? "2FA required" : "2FA optional"
  } · ${state.security.loginHistory.length} login events`;
  elements.sidebarTimeoutLabel.textContent = `${state.security.sessionTimeoutMinutes} min`;
  elements.sidebarSecurityBar.style.width = `${securityScore}%`;
  elements.sidebarHolidayTitle.textContent = upcomingHoliday ? upcomingHoliday.name : "No upcoming holiday";
  elements.sidebarHolidayDate.textContent = upcomingHoliday ? formatDate(upcomingHoliday.date) : "Calendar clear";
  elements.sidebarDepartments.innerHTML = departments.map((department) => `<li>${escapeHtml(department)}</li>`).join("");
  elements.heroProjectsCount.textContent = String(projects);
  elements.heroOpenCount.textContent = String(openTasks);
  elements.heroDueCount.textContent = String(dueThisWeek);
  elements.notificationsCount.textContent = `${visibleNotifications.length} items`;
}

function renderOverview() {
  const currentUser = getCurrentUser();
  const todayRecord = getAttendanceRecord(currentUser.id, APP_TODAY) || getLatestAttendanceRecord(currentUser.id);
  const personalTasks = state.tasks.filter((task) => task.assigneeId === currentUser.id);
  const pendingTasks = personalTasks.filter((task) => task.status !== "done");
  const completedTasks = personalTasks.filter((task) => task.status === "done");
  const attendanceRecords = getAttendanceRecordsForUser(currentUser.id);
  const lateCount = attendanceRecords.filter(isLateLogin).length;
  const unreadCount = getVisibleNotifications().filter((notification) => !notification.read).length;
  const weeklyHours = getWeeklyHoursForUser(currentUser.id);
  const weeklyTotal = weeklyHours.reduce((sum, row) => sum + row.hours, 0);
  const performanceScore = calculatePerformanceScore(currentUser.id);
  const leaveBalance = currentUser.leaveBalance;
  const priorityTasks = state.tasks
    .filter((task) => task.priority === "Critical" || task.priority === "High")
    .sort(sortByDueDate)
    .slice(0, 4);

  elements.todayLoginTime.textContent = todayRecord ? todayRecord.loginTime : "--";
  elements.todayWorkMode.textContent = todayRecord ? todayRecord.workMode : "No attendance";
  elements.todayWorkHours.textContent = todayRecord ? `${calculateWorkHours(todayRecord).toFixed(1)}h` : "0h";
  elements.todayBreakTime.textContent = todayRecord ? `Break ${todayRecord.breakMinutes}m` : "Break 0m";
  elements.pendingTaskCount.textContent = String(pendingTasks.length);
  elements.blockedCaption.textContent = `${pendingTasks.filter((task) => task.blocked).length} blocked items`;
  elements.completedTaskCount.textContent = String(completedTasks.length);
  elements.completionCaption.textContent = `${completedTasks.length} delivered this sprint`;
  elements.leaveBalanceCount.textContent = String(leaveBalance.Paid);
  elements.leaveBalanceCaption.textContent = `Sick ${leaveBalance.Sick} · Casual ${leaveBalance.Casual} · Paid ${leaveBalance.Paid}`;
  elements.monthlyAttendanceCount.textContent = String(getMonthlyAttendanceCount(currentUser.id));
  elements.lateLoginStatus.textContent = `${lateCount} late logins`;
  elements.unreadNotificationCount.textContent = String(unreadCount);
  elements.announcementCaption.textContent = `${getVisibleNotifications().filter((item) => item.type === "announcement").length} announcements`;
  elements.productivityScore.textContent = `${performanceScore}%`;
  elements.overtimeStatus.textContent = `${calculateOvertimeHours(currentUser.id).toFixed(1)}h overtime`;
  elements.weeklyHoursTotal.textContent = `${weeklyTotal.toFixed(1)}h`;
  elements.securityBadge.textContent = state.security.requireTwoFactor ? "2FA Enabled" : "2FA Optional";
  elements.priorityInitiativesCount.textContent = `${priorityTasks.length} tracked`;
  elements.holidayBadge.textContent = `${state.holidays.length} listed`;

  renderBarRows(
    elements.weeklyHoursBars,
    weeklyHours.map((row) => ({
      label: formatShortDate(row.date),
      value: row.hours,
      suffix: `${row.hours.toFixed(1)}h`,
    }))
  );

  renderCardList(
    elements.projectTimeTracking,
    getProjectHoursForUser(currentUser.id),
    (item) => `
      <div class="metric-row">
        <span>${escapeHtml(item.project)}</span>
        <strong>${item.hours.toFixed(1)}h</strong>
      </div>
    `,
    "No project hours logged yet."
  );

  renderCardList(
    elements.workLogPreview,
    state.workLogs.filter((log) => log.employeeId === currentUser.id).slice(0, 4),
    (log) => `
      <div class="log-row">
        <div>
          <strong>${escapeHtml(log.project)}</strong>
          <p>${escapeHtml(log.note || "Logged work activity")}</p>
        </div>
        <span class="table-pill">${log.hours.toFixed(1)}h</span>
      </div>
    `,
    "No work logs available."
  );

  const securityRows = [
    { label: "Authentication", value: state.security.jwtEnabled ? "JWT Enabled" : "JWT Disabled" },
    { label: "Current role", value: currentUser.role },
    { label: "Session timeout", value: `${state.security.sessionTimeoutMinutes} min` },
    { label: "Password changed", value: formatDateTime(state.security.passwordChangedAt) },
  ];
  elements.securitySummary.innerHTML = securityRows
    .map(
      (row) => `
        <div class="metric-row">
          <span>${escapeHtml(row.label)}</span>
          <strong>${escapeHtml(row.value)}</strong>
        </div>
      `
    )
    .join("");

  renderCardList(
    elements.loginHistoryList,
    getLoginHistoryForUser(currentUser.id).slice(0, 4),
    (entry) => `
      <div class="info-row">
        <div>
          <strong>${escapeHtml(entry.action)}</strong>
          <p>${escapeHtml(entry.device)} · ${escapeHtml(entry.location)}</p>
        </div>
        <span class="table-pill">${formatDateTime(entry.time)}</span>
      </div>
    `,
    "No login history available."
  );

  const attendanceWatch = [
    { label: "Late login detections", value: String(lateCount) },
    { label: "Half-day detections", value: String(attendanceRecords.filter(isHalfDay).length) },
    { label: "WFH days", value: String(attendanceRecords.filter((record) => record.workMode === "WFH").length) },
    { label: "Biometric verified", value: String(attendanceRecords.filter((record) => record.biometricVerified).length) },
  ];
  elements.attendanceWatchList.innerHTML = attendanceWatch
    .map(
      (row) => `
        <div class="metric-row">
          <span>${escapeHtml(row.label)}</span>
          <strong>${escapeHtml(row.value)}</strong>
        </div>
      `
    )
    .join("");

  renderCardList(
    elements.priorityInitiatives,
    priorityTasks,
    (task) => `
      <div class="initiative-row">
        <div>
          <strong>${escapeHtml(task.title)}</strong>
          <p>${escapeHtml(task.project)} · ${escapeHtml(getUserName(task.assigneeId))}</p>
        </div>
        <span class="tag priority-${task.priority.toLowerCase()}">${escapeHtml(task.priority)}</span>
      </div>
    `,
    "No priority delivery items."
  );

  renderCardList(
    elements.notificationPreview,
    getVisibleNotifications().slice(0, 4),
    (notification) => `
      <div class="notification-item ${notification.read ? "" : "unread"}">
        <div class="notification-header">
          <strong>${escapeHtml(notification.title)}</strong>
          <span class="table-pill">${escapeHtml(notification.type)}</span>
        </div>
        <p>${escapeHtml(notification.message)}</p>
      </div>
    `,
    "No alerts for the current user."
  );

  renderCardList(
    elements.holidayPreview,
    state.holidays.slice(0, 4),
    (holiday) => `
      <div class="holiday-row">
        <div>
          <strong>${escapeHtml(holiday.name)}</strong>
          <p>${escapeHtml(holiday.type)} holiday</p>
        </div>
        <span class="table-pill">${formatDate(holiday.date)}</span>
      </div>
    `,
    "No holidays listed."
  );
}

function renderBoard() {
  const filteredTasks = getFilteredTasks();
  const columns = {
    todo: elements.todoColumn,
    "in-progress": elements.inProgressColumn,
    review: elements.reviewColumn,
    done: elements.doneColumn,
  };

  Object.entries(columns).forEach(([status, container]) => {
    const tasks = filteredTasks.filter((task) => task.status === status).sort(sortByDueDate);
    renderTaskCards(container, tasks);
    getStatusCountElement(status).textContent = String(tasks.length);
  });

  const reminders = filteredTasks
    .filter((task) => task.reminderAt)
    .sort((left, right) => new Date(left.reminderAt) - new Date(right.reminderAt))
    .slice(0, 4);
  const comments = filteredTasks
    .flatMap((task) => task.comments.map((comment) => ({ ...comment, taskId: task.id, taskTitle: task.title })))
    .sort((left, right) => new Date(right.time) - new Date(left.time))
    .slice(0, 5);

  elements.taskOpsCount.textContent = `${reminders.length + comments.length} actions`;
  renderCardList(
    elements.reminderQueue,
    reminders,
    (task) => `
      <div class="summary-card">
        <strong>${escapeHtml(task.id)} · ${escapeHtml(task.title)}</strong>
        <p>${escapeHtml(getUserName(task.assigneeId))} · reminder ${formatDateTime(task.reminderAt)}</p>
      </div>
    `,
    "No task reminders in queue."
  );

  renderCardList(
    elements.taskCommentFeed,
    comments,
    (comment) => `
      <div class="summary-card">
        <strong>${escapeHtml(comment.taskId)} · ${escapeHtml(comment.author)}</strong>
        <p>${escapeHtml(comment.text)}</p>
      </div>
    `,
    "No recent task comments."
  );
}

function renderTaskCards(container, tasks) {
  container.innerHTML = "";
  if (!tasks.length) {
    container.innerHTML = `<div class="empty-state">No issues here for the current filters.</div>`;
    return;
  }

  tasks.forEach((task) => {
    const card = document.createElement("article");
    card.className = "task-card";
    card.draggable = true;
    card.innerHTML = `
      <div class="task-topline">
        <span class="task-id">${escapeHtml(task.id)}</span>
        <span class="tag priority-${task.priority.toLowerCase()}">${escapeHtml(task.priority)}</span>
        <span class="tag type-${task.type.toLowerCase()}">${escapeHtml(task.type)}</span>
      </div>
      <div>
        <strong>${escapeHtml(task.title)}</strong>
        <p class="task-subcopy">${escapeHtml(task.description)}</p>
      </div>
      <div class="task-tags">
        ${task.labels.map((label) => `<span class="tag">${escapeHtml(label)}</span>`).join("")}
        ${task.recurring ? `<span class="tag">Recurring</span>` : ""}
        ${task.reminderAt ? `<span class="tag">Reminder</span>` : ""}
      </div>
      <div class="task-footer">
        <div class="task-meta">
          <div class="task-avatar">${escapeHtml(getInitials(getUserName(task.assigneeId)))}</div>
          <div>
            <strong>${escapeHtml(getUserName(task.assigneeId))}</strong>
            <p>${escapeHtml(task.project)}</p>
          </div>
        </div>
        <div class="muted">${task.comments.length} comments · ${task.files.length} files</div>
      </div>
    `;
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", task.id);
      card.classList.add("dragging");
    });
    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
    });
    container.append(card);
  });
}

function renderBacklog() {
  const filteredTasks = getFilteredTasks().sort(sortByDueDate);
  elements.backlogCount.textContent = `${filteredTasks.length} items`;
  elements.backlogTableBody.innerHTML = "";

  if (!filteredTasks.length) {
    elements.backlogTableBody.innerHTML = `<tr><td colspan="10"><div class="empty-state">No backlog items match the current filters.</div></td></tr>`;
    return;
  }

  filteredTasks.forEach((task) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <span class="table-title">${escapeHtml(task.id)} · ${escapeHtml(task.title)}</span>
        <span class="table-note">${escapeHtml(task.description)}</span>
      </td>
      <td>${escapeHtml(task.project)}</td>
      <td>${escapeHtml(getUserName(task.assigneeId))}</td>
      <td><span class="tag priority-${task.priority.toLowerCase()}">${escapeHtml(task.priority)}</span></td>
      <td>${task.comments.length}</td>
      <td>${task.files.length}</td>
      <td>${task.reminderAt ? formatDateTime(task.reminderAt) : "--"}</td>
      <td>${task.recurring ? "Yes" : "No"}</td>
      <td>
        <select class="status-select" data-task-id="${escapeHtml(task.id)}">
          ${STATUS_ORDER.map(
            (status) =>
              `<option value="${status}" ${task.status === status ? "selected" : ""}>${escapeHtml(STATUS_LABELS[status])}</option>`
          ).join("")}
        </select>
      </td>
      <td>${formatDate(task.dueDate)}</td>
    `;
    elements.backlogTableBody.append(row);
  });
}

function renderAttendance() {
  const currentUser = getCurrentUser();
  const currentRecord = getAttendanceRecord(currentUser.id, APP_TODAY) || getLatestAttendanceRecord(currentUser.id);
  const attendanceRecords = [...state.attendance].sort((left, right) => {
    return new Date(`${right.date}T${right.loginTime}`) - new Date(`${left.date}T${left.loginTime}`);
  });
  const workLogs = [...state.workLogs].sort((left, right) => new Date(right.time) - new Date(left.time));

  elements.attendanceLoginMetric.textContent = currentRecord ? currentRecord.loginTime : "--";
  elements.attendanceDateMetric.textContent = currentRecord ? formatDate(currentRecord.date) : formatDate(APP_TODAY);
  elements.attendanceLogoutMetric.textContent = currentRecord ? currentRecord.logoutTime : "--";
  elements.attendanceBreakMetric.textContent = currentRecord ? `Break ${currentRecord.breakMinutes}m` : "Break 0m";
  elements.attendanceHoursMetric.textContent = currentRecord ? `${calculateWorkHours(currentRecord).toFixed(1)}h` : "0h";
  elements.attendanceOvertimeMetric.textContent = currentRecord ? `${calculateOvertime(currentRecord).toFixed(1)}h overtime` : "0h overtime";
  elements.attendanceStatusMetric.textContent = currentRecord ? getAttendanceStatus(currentRecord) : "No record";
  elements.attendanceLateMetric.textContent = currentRecord && isLateLogin(currentRecord) ? "Late login" : "On time";

  elements.attendanceTableBody.innerHTML = attendanceRecords
    .map(
      (record) => `
        <tr>
          <td>${formatDate(record.date)}</td>
          <td>${escapeHtml(getUserName(record.employeeId))}</td>
          <td>${escapeHtml(record.loginTime)}</td>
          <td>${escapeHtml(record.logoutTime)}</td>
          <td>${record.breakMinutes}m</td>
          <td>${calculateWorkHours(record).toFixed(1)}h</td>
          <td><span class="table-pill ${isLateLogin(record) ? "is-warning" : "is-positive"}">${isLateLogin(record) ? "Yes" : "No"}</span></td>
          <td><span class="table-pill ${isHalfDay(record) ? "is-warning" : ""}">${isHalfDay(record) ? "Yes" : "No"}</span></td>
          <td>${escapeHtml(record.workMode)}</td>
        </tr>
      `
    )
    .join("");

  elements.workLogCount.textContent = `${workLogs.length} logs`;
  renderCardList(
    elements.workLogList,
    workLogs.slice(0, 8),
    (log) => `
      <div class="summary-card">
        <strong>${escapeHtml(getUserName(log.employeeId))} · ${escapeHtml(log.project)}</strong>
        <p>${escapeHtml(log.note || "Logged work")} · ${formatDate(log.date)} · ${log.hours.toFixed(1)}h</p>
      </div>
    `,
    "No work logs recorded."
  );

  setAttendanceFormDefaults();
  setWorkLogFormDefaults();
}

function renderLeave() {
  const currentUser = getCurrentUser();
  const leaveBalance = currentUser.leaveBalance;
  const leaves = [...state.leaves].sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
  const pendingLeaves = leaves.filter((leave) => leave.status === "Pending");

  elements.sickLeaveBalance.textContent = String(leaveBalance.Sick);
  elements.casualLeaveBalance.textContent = String(leaveBalance.Casual);
  elements.paidLeaveBalance.textContent = String(leaveBalance.Paid);
  elements.pendingLeaveCount.textContent = String(pendingLeaves.length);
  elements.leaveHistoryCount.textContent = `${leaves.length} requests`;

  renderCardList(
    elements.pendingLeaveList,
    pendingLeaves,
    (leave) => `
      <div class="approval-card">
        <strong>${escapeHtml(getUserName(leave.employeeId))} · ${escapeHtml(leave.type)} Leave</strong>
        <p>${formatDate(leave.fromDate)} to ${formatDate(leave.toDate)} · ${leave.days} day(s)</p>
        <div class="approval-actions">
          <span class="table-pill">${escapeHtml(leave.reason || "No reason provided")}</span>
          ${
            hasAdminAccess(getCurrentUser())
              ? `
                <div class="approval-actions">
                  <button class="mini-button primary" type="button" data-leave-action="Approved" data-leave-id="${escapeHtml(leave.id)}">Approve</button>
                  <button class="mini-button" type="button" data-leave-action="Rejected" data-leave-id="${escapeHtml(leave.id)}">Reject</button>
                </div>
              `
              : `<span class="table-pill is-warning">Awaiting review</span>`
          }
        </div>
      </div>
    `,
    "No pending leave requests."
  );

  elements.leaveHistoryBody.innerHTML = leaves
    .map(
      (leave) => `
        <tr>
          <td>${escapeHtml(getUserName(leave.employeeId))}</td>
          <td>${escapeHtml(leave.type)}</td>
          <td>${formatDate(leave.fromDate)} - ${formatDate(leave.toDate)}</td>
          <td>${leave.days}</td>
          <td><span class="table-pill ${leave.status === "Approved" ? "is-positive" : leave.status === "Rejected" ? "is-danger" : "is-warning"}">${escapeHtml(leave.status)}</span></td>
          <td>${escapeHtml(getUserName(leave.approverId))}</td>
        </tr>
      `
    )
    .join("");

  renderCardList(
    elements.holidayList,
    state.holidays,
    (holiday) => `
      <div class="holiday-row">
        <div>
          <strong>${escapeHtml(holiday.name)}</strong>
          <p>${escapeHtml(holiday.type)} holiday</p>
        </div>
        <span class="table-pill">${formatDate(holiday.date)}</span>
      </div>
    `,
    "No holidays configured."
  );

  setLeaveFormDefaults();
}

function renderReports() {
  const todayHours = state.workLogs.filter((log) => log.date === APP_TODAY).reduce((sum, log) => sum + log.hours, 0);
  const weeklyHours = state.workLogs
    .filter((log) => isDateWithinDays(log.date, APP_TODAY, 6))
    .reduce((sum, log) => sum + log.hours, 0);
  const completionRate = Math.round((state.tasks.filter((task) => task.status === "done").length / Math.max(state.tasks.length, 1)) * 100);
  const attendanceRate = Math.round(calculateAttendanceRate());

  elements.dailyReportMetric.textContent = `${todayHours.toFixed(1)}h`;
  elements.weeklyReportMetric.textContent = `${weeklyHours.toFixed(1)}h`;
  elements.attendanceRateMetric.textContent = `${attendanceRate}%`;
  elements.taskCompletionMetric.textContent = `${completionRate}%`;
  elements.teamMemberCount.textContent = `${state.users.length} members`;

  renderBarRows(
    elements.statusReport,
    STATUS_ORDER.map((status) => ({
      label: STATUS_LABELS[status],
      value: state.tasks.filter((task) => task.status === status).length,
      suffix: `${state.tasks.filter((task) => task.status === status).length}`,
    }))
  );

  const projectRows = uniqueValues(state.tasks.map((task) => task.project)).map((project) => {
    const tasks = state.tasks.filter((task) => task.project === project);
    const done = tasks.filter((task) => task.status === "done").length;
    return { project, tasks: tasks.length, done, progress: Math.round((done / Math.max(tasks.length, 1)) * 100) };
  });
  elements.projectHealthCount.textContent = `${projectRows.length} projects`;
  renderCardList(
    elements.projectHealth,
    projectRows,
    (row) => `
      <div class="summary-card">
        <strong>${escapeHtml(row.project)}</strong>
        <p>${row.done}/${row.tasks} completed · ${row.progress}% delivery</p>
      </div>
    `,
    "No project health data."
  );

  const teamPerformance = state.users.map((user) => ({
    user,
    completed: state.tasks.filter((task) => task.assigneeId === user.id && task.status === "done").length,
    total: state.tasks.filter((task) => task.assigneeId === user.id).length,
    attendance: getMonthlyAttendanceCount(user.id),
    hours: getWeeklyHoursForUser(user.id).reduce((sum, row) => sum + row.hours, 0),
  }));
  renderCardList(
    elements.teamPerformanceList,
    teamPerformance,
    (row) => `
      <div class="summary-card">
        <strong>${escapeHtml(row.user.name)} · ${escapeHtml(row.user.role)}</strong>
        <p>${row.completed}/${Math.max(row.total, 1)} tasks done · ${row.attendance} attendance logs · ${row.hours.toFixed(1)}h this week</p>
      </div>
    `,
    "No team performance data."
  );

  const risks = getRiskItems();
  elements.riskCount.textContent = `${risks.length} issues`;
  renderCardList(
    elements.riskList,
    risks,
    (risk) => `
      <div class="summary-card">
        <strong>${escapeHtml(risk.title)}</strong>
        <p>${escapeHtml(risk.detail)}</p>
      </div>
    `,
    "No operational risks identified."
  );
}

function renderAdmin() {
  const departments = uniqueValues(state.users.map((user) => user.department));
  elements.adminUserCount.textContent = String(state.users.length);
  elements.adminDepartmentCount.textContent = String(departments.length);
  elements.adminProjectCount.textContent = String(uniqueValues(state.tasks.map((task) => task.project)).length);
  elements.adminTaskCount.textContent = String(state.tasks.length);
  elements.adminHolidayCount.textContent = String(state.holidays.length);
  elements.adminLeaveCount.textContent = String(state.leaves.length);
  elements.adminReportCount.textContent = "8";
  elements.adminAttendanceCount.textContent = String(state.attendance.length);

  elements.userTableBody.innerHTML = state.users
    .map(
      (user) => `
        <tr>
          <td>${escapeHtml(user.name)}</td>
          <td>${escapeHtml(user.role)}</td>
          <td>${escapeHtml(user.department)}</td>
          <td><span class="table-pill is-positive">${escapeHtml(user.status)}</span></td>
          <td>${getMonthlyAttendanceCount(user.id)}</td>
          <td>S ${user.leaveBalance.Sick} · C ${user.leaveBalance.Casual} · P ${user.leaveBalance.Paid}</td>
        </tr>
      `
    )
    .join("");

  elements.securityTimeoutInput.value = state.security.sessionTimeoutMinutes;
  elements.securityJwtCheckbox.checked = state.security.jwtEnabled;
  elements.securityTwoFactorCheckbox.checked = state.security.requireTwoFactor;
  elements.securityForgotCheckbox.checked = state.security.forgotPasswordEnabled;

  const securityRows = [
    { label: "Login history records", value: String(state.security.loginHistory.length) },
    { label: "Password last changed", value: formatDateTime(state.security.passwordChangedAt) },
    { label: "JWT authentication", value: state.security.jwtEnabled ? "Enabled" : "Disabled" },
    { label: "Forgot password flow", value: state.security.forgotPasswordEnabled ? "Enabled" : "Disabled" },
  ];
  elements.adminSecurityList.innerHTML = securityRows
    .map(
      (row) => `
        <div class="metric-row">
          <span>${escapeHtml(row.label)}</span>
          <strong>${escapeHtml(row.value)}</strong>
        </div>
      `
    )
    .join("");
}

function renderNotifications() {
  const notifications = getVisibleNotifications();
  const unread = notifications.filter((notification) => !notification.read).length;
  elements.notificationsCount.textContent = `${notifications.length} items`;
  elements.unreadNotificationCount.textContent = String(unread);

  renderCardList(
    elements.notificationsList,
    notifications,
    (notification) => `
      <div class="notification-item ${notification.read ? "" : "unread"}">
        <div class="notification-header">
          <strong>${escapeHtml(notification.title)}</strong>
          <span class="table-pill">${escapeHtml(notification.type)}</span>
        </div>
        <p>${escapeHtml(notification.message)}</p>
        <div class="notification-footer">
          <span class="table-note">${formatDateTime(notification.time)}</span>
          ${
            notification.read
              ? `<span class="table-pill is-positive">Read</span>`
              : `<button class="mini-button primary" type="button" data-notification-id="${escapeHtml(notification.id)}">Mark Read</button>`
          }
        </div>
      </div>
    `,
    "No notifications available."
  );
}

function attachDynamicListeners() {
  document.querySelectorAll(".status-select").forEach((select) => {
    select.addEventListener("change", (event) => {
      updateTaskStatus(event.target.dataset.taskId, event.target.value);
    });
  });

  document.querySelectorAll("[data-leave-id]").forEach((button) => {
    button.addEventListener("click", () => {
      updateLeaveStatus(button.dataset.leaveId, button.dataset.leaveAction);
    });
  });

  document.querySelectorAll("[data-notification-id]").forEach((button) => {
    button.addEventListener("click", () => {
      markNotificationRead(button.dataset.notificationId);
    });
  });
}

async function handleLogin(event) {
  event.preventDefault();
  const formData = new FormData(elements.sessionForm);
  const password = String(formData.get("password") || "").trim();
  const otp = String(formData.get("otp") || "").trim();
  const userId = String(formData.get("userId"));

  if (!password) {
    elements.sessionMessage.textContent = "Password is required for demo login.";
    return;
  }
  if (state.security.requireTwoFactor && otp.length < 6) {
    elements.sessionMessage.textContent = "Enter a 6-digit one-time code to satisfy 2FA.";
    return;
  }

  await syncWithApi(
    "/auth/login",
    {
      method: "POST",
      body: JSON.stringify({ userId, password, otp }),
    },
    `${getUserName(userId)} logged in successfully.`
  );
}

async function handleLogoutToggle() {
  if (!state.session.loggedIn) {
    state.activeView = "overview";
    render();
    return;
  }
  await syncWithApi("/auth/logout", { method: "POST", body: JSON.stringify({ userId: state.session.userId }) }, "Session locked.");
}

async function handleForgotPassword() {
  if (!state.security.forgotPasswordEnabled) {
    elements.sessionMessage.textContent = "Forgot password is currently disabled by admin policy.";
    return;
  }
  const userId = elements.sessionUserSelect.value || state.session.userId;
  const ok = await syncWithApi(
    "/auth/forgot-password",
    { method: "POST", body: JSON.stringify({ userId }) },
    "Password reset request recorded."
  );
  if (ok) {
    elements.sessionMessage.textContent = "Password reset request recorded.";
  }
}

async function handleChangePassword() {
  const ok = await syncWithApi(
    "/auth/change-password",
    { method: "POST", body: JSON.stringify({ userId: state.session.userId }) },
    "Password change recorded."
  );
  if (ok) {
    elements.sessionMessage.textContent = "Password change recorded in login history.";
  }
}

async function handleIssueSubmit(event) {
  event.preventDefault();
  if (!requireLoggedIn()) {
    return;
  }
  const formData = new FormData(elements.issueForm);
  const files = Array.from(elements.issueForm.elements.attachments.files || []).map((file) => file.name);
  const ok = await syncWithApi(
    "/tasks",
    {
      method: "POST",
      body: JSON.stringify({
        title: String(formData.get("title")).trim(),
        project: String(formData.get("project")).trim(),
        assigneeId: String(formData.get("assignee")),
        priority: String(formData.get("priority")),
        type: String(formData.get("type")),
        status: String(formData.get("status")),
        points: Number(formData.get("points")) || 0,
        dueDate: String(formData.get("dueDate")),
        reminderAt: String(formData.get("reminderAt") || ""),
        recurring: formData.get("recurring") === "on",
        description: String(formData.get("description")).trim() || "No description provided yet.",
        labels: String(formData.get("labels") || "")
          .split(",")
          .map((label) => label.trim())
          .filter(Boolean),
        blocked: formData.get("blocked") === "on",
        files,
        comments: String(formData.get("initialComment") || "").trim()
          ? [
              {
                author: getCurrentUser().name,
                text: String(formData.get("initialComment")).trim(),
                time: new Date().toISOString(),
              },
            ]
          : [],
      }),
    },
    "Task created successfully."
  );
  if (ok) {
    elements.issueForm.reset();
    closeComposer();
  }
}

async function handleAttendanceSubmit(event) {
  event.preventDefault();
  if (!requireLoggedIn()) {
    return;
  }
  const formData = new FormData(elements.attendanceForm);
  await syncWithApi(
    "/attendance",
    {
      method: "POST",
      body: JSON.stringify({
        employeeId: String(formData.get("employeeId")),
        date: String(formData.get("date")),
        loginTime: String(formData.get("loginTime")),
        logoutTime: String(formData.get("logoutTime")),
        breakMinutes: Number(formData.get("breakMinutes")) || 0,
        workMode: String(formData.get("workMode")),
        biometricVerified: formData.get("biometricVerified") === "on",
      }),
    },
    "Attendance record saved."
  );
}

async function handleWorkLogSubmit(event) {
  event.preventDefault();
  if (!requireLoggedIn()) {
    return;
  }
  const formData = new FormData(elements.workLogForm);
  await syncWithApi(
    "/work-logs",
    {
      method: "POST",
      body: JSON.stringify({
        employeeId: String(formData.get("employeeId")),
        date: String(formData.get("date")),
        project: String(formData.get("project")).trim(),
        hours: Number(formData.get("hours")) || 0,
        note: String(formData.get("note") || "").trim(),
      }),
    },
    "Work log added successfully."
  );
}

async function handleLeaveSubmit(event) {
  event.preventDefault();
  if (!requireLoggedIn()) {
    return;
  }
  const formData = new FormData(elements.leaveForm);
  await syncWithApi(
    "/leaves",
    {
      method: "POST",
      body: JSON.stringify({
        employeeId: String(formData.get("employeeId")),
        type: String(formData.get("type")),
        fromDate: String(formData.get("fromDate")),
        toDate: String(formData.get("toDate")),
        reason: String(formData.get("reason") || "").trim(),
      }),
    },
    "Leave request submitted."
  );
}

async function handleSecuritySettingsSubmit(event) {
  event.preventDefault();
  if (!requireLoggedIn()) {
    return;
  }
  const formData = new FormData(elements.securitySettingsForm);
  await syncWithApi(
    "/security",
    {
      method: "POST",
      body: JSON.stringify({
        sessionTimeoutMinutes: Number(formData.get("sessionTimeoutMinutes")) || 30,
        jwtEnabled: formData.get("jwtEnabled") === "on",
        requireTwoFactor: formData.get("requireTwoFactor") === "on",
        forgotPasswordEnabled: formData.get("forgotPasswordEnabled") === "on",
      }),
    },
    "Security settings updated."
  );
}

async function handleAnnouncementSubmit(event) {
  event.preventDefault();
  if (!requireLoggedIn()) {
    return;
  }
  const formData = new FormData(elements.announcementForm);
  const ok = await syncWithApi(
    "/announcements",
    {
      method: "POST",
      body: JSON.stringify({
        audience: String(formData.get("audience")),
        title: String(formData.get("title")).trim(),
        message: String(formData.get("message") || "").trim() || "Company announcement posted.",
      }),
    },
    "Announcement sent."
  );
  if (ok) {
    elements.announcementForm.reset();
  }
}

async function updateTaskStatus(taskId, status) {
  await syncWithApi(
    `/tasks/${encodeURIComponent(taskId)}/status`,
    { method: "PATCH", body: JSON.stringify({ status }) },
    "Task status updated."
  );
}

async function updateLeaveStatus(leaveId, status) {
  await syncWithApi(
    `/leaves/${encodeURIComponent(leaveId)}/status`,
    { method: "PATCH", body: JSON.stringify({ status }) },
    `Leave request ${leaveId} updated.`
  );
}

async function markNotificationRead(notificationId) {
  await syncWithApi(
    `/notifications/${encodeURIComponent(notificationId)}/read`,
    { method: "PATCH", body: JSON.stringify({}) },
    "Notification marked as read."
  );
}

async function markAllNotificationsRead() {
  await syncWithApi(
    "/notifications/read-all",
    { method: "POST", body: JSON.stringify({ userId: state.session.userId }) },
    "All visible notifications marked as read."
  );
}

async function exportPdfReport() {
  if (!requireLoggedIn()) {
    return;
  }
  if (typeof window.print === "function") {
    window.print();
  }
}

async function exportExcelReport() {
  if (!requireLoggedIn()) {
    return;
  }
  const rows = [
    ["Section", "Metric", "Value"],
    ["Tasks", "Open Issues", String(state.tasks.filter((task) => task.status !== "done").length)],
    ["Tasks", "Completion Rate", `${Math.round((state.tasks.filter((task) => task.status === "done").length / Math.max(state.tasks.length, 1)) * 100)}%`],
    ["Attendance", "Monthly Attendance Rate", `${Math.round(calculateAttendanceRate())}%`],
    ["Leave", "Pending Requests", String(state.leaves.filter((leave) => leave.status === "Pending").length)],
    ["Time", "Weekly Logged Hours", `${state.workLogs.filter((log) => isDateWithinDays(log.date, APP_TODAY, 6)).reduce((sum, log) => sum + log.hours, 0).toFixed(1)}h`],
  ];
  downloadCsv("soumyaflow-report.csv", rows.map((row) => row.join(",")).join("\n"));
  await syncWithApi(
    "/announcements",
    {
      method: "POST",
      body: JSON.stringify({
        audience: "Managers",
        title: "Excel export downloaded",
        message: "A CSV export compatible with Excel was downloaded from Reports.",
      }),
    },
    "Excel-compatible report downloaded."
  );
}

function openComposer() {
  if (!requireLoggedIn()) {
    return;
  }
  setIssueFormDefaults();
  elements.composer.showModal();
}

function closeComposer() {
  if (elements.composer.open) {
    elements.composer.close();
  }
}

function syncNavigation() {
  elements.navLinks.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.activeView);
    button.classList.toggle("disabled", button.dataset.view === "admin" && !hasAdminAccess(getCurrentUser()));
  });
  elements.panels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === state.activeView);
  });
}

function syncTaskTools() {
  const showTaskTools = ["overview", "board", "backlog", "reports"].includes(state.activeView);
  elements.taskTools.classList.toggle("hidden", !showTaskTools);
}

function syncSessionState() {
  document.body.classList.toggle("locked", !state.session.loggedIn);
  elements.sessionGate.classList.toggle("active", !state.session.loggedIn);
  elements.sessionMessage.textContent = state.session.loggedIn
    ? "Session active."
    : "Session locked. Login to continue.";
}

function enforcePermissions() {
  if (state.activeView === "admin" && !hasAdminAccess(getCurrentUser())) {
    state.activeView = "overview";
    showFlash("Admin access is restricted to Admin, Manager, and HR roles.");
  }
}

function populateDynamicOptions() {
  const users = state.users;
  const projects = uniqueValues([...state.tasks.map((task) => task.project), ...state.workLogs.map((log) => log.project)]);

  fillSelect(elements.sessionUserSelect, users.map((user) => ({ value: user.id, label: `${user.name} · ${user.role}` })), state.session.userId);
  fillSelect(elements.issueAssigneeSelect, users.map((user) => ({ value: user.id, label: `${user.name} · ${user.department}` })));
  fillSelect(elements.attendanceEmployeeSelect, users.map((user) => ({ value: user.id, label: user.name })), getCurrentUser().id);
  fillSelect(elements.workLogEmployeeSelect, users.map((user) => ({ value: user.id, label: user.name })), getCurrentUser().id);
  fillSelect(elements.leaveEmployeeSelect, users.map((user) => ({ value: user.id, label: user.name })), getCurrentUser().id);
  fillSelect(elements.assigneeFilter, [{ value: "all", label: "All assignees" }, ...users.map((user) => ({ value: user.id, label: user.name }))], state.filters.assignee);
  fillSelect(elements.projectFilter, [{ value: "all", label: "All projects" }, ...projects.map((project) => ({ value: project, label: project }))], state.filters.project);
  fillSelect(elements.priorityFilter, [
    { value: "all", label: "All priorities" },
    { value: "Critical", label: "Critical" },
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ], state.filters.priority);
  fillSelect(elements.statusFilter, [{ value: "all", label: "All statuses" }, ...STATUS_ORDER.map((status) => ({ value: status, label: STATUS_LABELS[status] }))], state.filters.status);

  elements.projectSuggestions.innerHTML = projects.map((project) => `<option value="${escapeHtml(project)}"></option>`).join("");
  elements.searchInput.value = state.filters.query;
}

function setIssueFormDefaults() {
  elements.issueForm.elements.assignee.value = getCurrentUser().id;
  elements.issueForm.elements.dueDate.value = shiftDate(APP_TODAY, 5);
  elements.issueForm.elements.reminderAt.value = `${shiftDate(APP_TODAY, 1)}T09:00`;
}

function setAttendanceFormDefaults() {
  const currentUser = getCurrentUser();
  const record = getAttendanceRecord(currentUser.id, APP_TODAY);
  elements.attendanceForm.elements.employeeId.value = currentUser.id;
  elements.attendanceForm.elements.date.value = APP_TODAY;
  elements.attendanceForm.elements.loginTime.value = record ? record.loginTime : "09:15";
  elements.attendanceForm.elements.logoutTime.value = record ? record.logoutTime : "18:30";
  elements.attendanceForm.elements.breakMinutes.value = record ? record.breakMinutes : 45;
  elements.attendanceForm.elements.workMode.value = record ? record.workMode : currentUser.workMode;
  elements.attendanceForm.elements.biometricVerified.checked = Boolean(record && record.biometricVerified);
}

function setWorkLogFormDefaults() {
  elements.workLogForm.elements.employeeId.value = getCurrentUser().id;
  elements.workLogForm.elements.date.value = APP_TODAY;
}

function setLeaveFormDefaults() {
  elements.leaveForm.elements.employeeId.value = getCurrentUser().id;
  elements.leaveForm.elements.fromDate.value = shiftDate(APP_TODAY, 7);
  elements.leaveForm.elements.toDate.value = shiftDate(APP_TODAY, 7);
}

function requireLoggedIn() {
  if (state.session.loggedIn) {
    return true;
  }
  state.activeView = "overview";
  showFlash("Login to continue using workspace actions.");
  render();
  return false;
}

function getFilteredTasks() {
  return state.tasks.filter((task) => {
    const haystack = [
      task.id,
      task.title,
      task.project,
      task.description,
      getUserName(task.assigneeId),
      ...task.labels,
      ...task.comments.map((comment) => comment.text),
    ]
      .join(" ")
      .toLowerCase();
    const queryMatch = !state.filters.query || haystack.includes(state.filters.query);
    const projectMatch = state.filters.project === "all" || task.project === state.filters.project;
    const assigneeMatch = state.filters.assignee === "all" || task.assigneeId === state.filters.assignee;
    const priorityMatch = state.filters.priority === "all" || task.priority === state.filters.priority;
    const statusMatch = state.filters.status === "all" || task.status === state.filters.status;
    return queryMatch && projectMatch && assigneeMatch && priorityMatch && statusMatch;
  });
}

function getCurrentUser() {
  return getUserById(state.session.userId) || state.users[0];
}

function getUserById(userId) {
  return state.users.find((user) => user.id === userId);
}

function getUserName(userId) {
  const user = getUserById(userId);
  return user ? user.name : "Unknown User";
}

function getVisibleNotifications() {
  const currentUser = getCurrentUser();
  return [...state.notifications]
    .filter((notification) => notificationAppliesToUser(notification, currentUser))
    .sort((left, right) => new Date(right.time) - new Date(left.time));
}

function notificationAppliesToUser(notification, user) {
  if (notification.userId) {
    return notification.userId === user.id;
  }
  if (notification.audience === "All") {
    return true;
  }
  if (notification.audience === "Managers") {
    return user.role === "Manager" || user.role === "Admin";
  }
  if (notification.audience === "Engineering") {
    return user.department === "Technology";
  }
  if (notification.audience === "HR") {
    return user.role === "HR" || user.department === "People Ops";
  }
  return false;
}

function getAttendanceRecordsForUser(userId) {
  return state.attendance.filter((record) => record.employeeId === userId);
}

function getAttendanceRecord(userId, date) {
  return state.attendance.find((record) => record.employeeId === userId && record.date === date);
}

function getLatestAttendanceRecord(userId) {
  return getAttendanceRecordsForUser(userId).sort((left, right) => new Date(right.date) - new Date(left.date))[0];
}

function getWeeklyHoursForUser(userId) {
  const dates = Array.from({ length: 5 }, (_, index) => shiftDate(APP_TODAY, index - 4));
  return dates.map((date) => ({
    date,
    hours: state.workLogs.filter((log) => log.employeeId === userId && log.date === date).reduce((sum, log) => sum + log.hours, 0),
  }));
}

function getProjectHoursForUser(userId) {
  const grouped = {};
  state.workLogs
    .filter((log) => log.employeeId === userId)
    .forEach((log) => {
      grouped[log.project] ||= 0;
      grouped[log.project] += log.hours;
    });
  return Object.entries(grouped)
    .map(([project, hours]) => ({ project, hours }))
    .sort((left, right) => right.hours - left.hours);
}

function calculatePerformanceScore(userId) {
  const tasks = state.tasks.filter((task) => task.assigneeId === userId);
  const completed = tasks.filter((task) => task.status === "done").length;
  const weeklyHours = getWeeklyHoursForUser(userId).reduce((sum, row) => sum + row.hours, 0);
  return Math.min(100, Math.round((completed / Math.max(tasks.length, 1)) * 70 + Math.min(weeklyHours, 30)));
}

function calculateOvertimeHours(userId) {
  return getAttendanceRecordsForUser(userId).reduce((sum, record) => sum + calculateOvertime(record), 0);
}

function calculateAttendanceRate() {
  const activeEmployees = state.users.length;
  const workingDays = 5;
  return (state.attendance.length / Math.max(activeEmployees * workingDays, 1)) * 100;
}

function getMonthlyAttendanceCount(userId) {
  return getAttendanceRecordsForUser(userId).filter((record) => record.date.startsWith("2026-04")).length;
}

function getRiskItems() {
  const blockedTasks = state.tasks
    .filter((task) => task.blocked || (task.status !== "done" && new Date(task.dueDate) < new Date(APP_TODAY)))
    .map((task) => ({
      title: `${task.id} · ${task.title}`,
      detail: `${getUserName(task.assigneeId)} · ${task.project} · ${task.blocked ? "Blocked" : "Overdue"}`,
    }));
  const leaveRisks = state.leaves
    .filter((leave) => leave.status === "Pending")
    .map((leave) => ({
      title: `${leave.id} · ${getUserName(leave.employeeId)} leave pending`,
      detail: `${leave.type} leave from ${formatDate(leave.fromDate)} to ${formatDate(leave.toDate)}`,
    }));
  return [...blockedTasks, ...leaveRisks].slice(0, 8);
}

function hasAdminAccess(user) {
  return ADMIN_ROLES.has(user.role);
}

function calculateWorkHours(record) {
  const login = parseTime(record.date, record.loginTime);
  const logout = parseTime(record.date, record.logoutTime);
  if (isNaN(login) || isNaN(logout)) return 0;
  return Math.max(0, (logout - login) / 3600000 - record.breakMinutes / 60);
}

function calculateOvertime(record) {
  return Math.max(0, calculateWorkHours(record) - 8.5);
}

function isLateLogin(record) {
  return parseTime(record.date, record.loginTime) > parseTime(record.date, "09:30");
}

function isHalfDay(record) {
  return calculateWorkHours(record) < 4.5;
}

function getAttendanceStatus(record) {
  if (isHalfDay(record)) {
    return "Half Day";
  }
  if (isLateLogin(record)) {
    return "Late";
  }
  return "Present";
}

function getSecurityScore() {
  let score = 40;
  if (state.security.jwtEnabled) score += 20;
  if (state.security.requireTwoFactor) score += 20;
  if (state.security.forgotPasswordEnabled) score += 10;
  if (state.security.sessionTimeoutMinutes <= 30) score += 10;
  return Math.min(100, score);
}

function getLoginHistoryForUser(userId) {
  return state.security.loginHistory.filter((entry) => entry.userId === userId);
}

function getUpcomingHoliday() {
  return [...state.holidays]
    .filter((holiday) => holiday.date >= APP_TODAY)
    .sort((left, right) => new Date(left.date) - new Date(right.date))[0];
}

function renderCardList(container, items, template, emptyMessage) {
  if (!items.length) {
    container.innerHTML = `<div class="empty-state">${escapeHtml(emptyMessage)}</div>`;
    return;
  }
  container.innerHTML = items.map(template).join("");
}

function renderBarRows(container, items) {
  const maxValue = Math.max(...items.map((item) => item.value), 1);
  container.innerHTML = items
    .map(
      (item) => `
        <div class="status-row">
          <strong>${escapeHtml(item.label)}</strong>
          <div class="bar-track"><span style="width:${(item.value / maxValue) * 100}%"></span></div>
          <span class="badge">${escapeHtml(item.suffix)}</span>
        </div>
      `
    )
    .join("");
}

function fillSelect(select, options, selectedValue) {
  const currentValue = selectedValue ?? select.value;
  select.innerHTML = options.map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`).join("");
  select.value = options.some((option) => option.value === currentValue) ? currentValue : options[0]?.value || "";
}

function addNotification({ title, message, type, userId = "", audience = "All" }) {
  state.notifications.unshift({
    id: createId("NTF"),
    title,
    message,
    type,
    userId,
    audience,
    time: nextEventTimestamp(),
    read: false,
  });
}

function createLoginHistoryEntry(userId, action) {
  return {
    id: createId("LGN"),
    userId,
    action,
    time: nextEventTimestamp(),
    device: "Desktop App",
    location: "Hyderabad Office",
    success: true,
  };
}

function createIssueId(projectName) {
  const prefix = projectName
    .split(/\s+/)
    .map((part) => part[0] || "")
    .join("")
    .toUpperCase()
    .padEnd(3, "X")
    .slice(0, 3);
  const maxValue = state.tasks
    .filter((task) => task.id.startsWith(prefix))
    .map((task) => Number(task.id.split("-")[1]) || 0)
    .reduce((max, value) => Math.max(max, value), 0);
  return `${prefix}-${String(maxValue + 1).padStart(3, "0")}`;
}

function createId(prefix) {
  const value = ++state.meta.sequence;
  return `${prefix}-${String(value).padStart(3, "0")}`;
}

function nextEventTimestamp() {
  const nextTime = new Date(new Date(DEMO_NOW).getTime() + state.meta.sequence * 600000);
  return nextTime.toISOString();
}

function calculateLeaveDays(fromDate, toDate) {
  const start = new Date(fromDate);
  const end = new Date(toDate);
  return Math.max(1, Math.round((end - start) / 86400000) + 1);
}

function shiftDate(dateString, offsetDays) {
  const date = new Date(`${dateString}T00:00:00`);
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().slice(0, 10);
}

function parseTime(dateString, timeString) {
  return new Date(`${dateString}T${timeString}:00`).getTime();
}

function isDateWithinDays(dateString, referenceDate, rangeDays) {
  const left = new Date(`${dateString}T00:00:00`);
  const right = new Date(`${referenceDate}T00:00:00`);
  return Math.abs((left - right) / 86400000) <= rangeDays;
}

function isDueWithinDays(dateString, days) {
  const due = new Date(`${dateString}T00:00:00`);
  const today = new Date(`${APP_TODAY}T00:00:00`);
  const diff = (due - today) / 86400000;
  return diff >= 0 && diff <= days;
}

function sortByDueDate(left, right) {
  return new Date(left.dueDate) - new Date(right.dueDate);
}

function uniqueValues(items) {
  return [...new Set(items)].sort((left, right) => left.localeCompare(right));
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

function formatShortDate(dateString) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
  }).format(new Date(dateString));
}

function formatDateTime(dateString) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateString));
}

function getInitials(value) {
  return value
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] || "")
    .join("")
    .toUpperCase();
}

function showFlash(message) {
  elements.flashBanner.textContent = message;
  elements.flashBanner.classList.remove("hidden");
  clearTimeout(flashTimerId);
  flashTimerId = window.setTimeout(() => {
    elements.flashBanner.classList.add("hidden");
  }, 3500);
}

function downloadCsv(fileName, content) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const base = getDefaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return mergeState(base, JSON.parse(raw));
    }
    const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacy) {
      const parsed = JSON.parse(legacy);
      if (Array.isArray(parsed)) {
        base.tasks = parsed.map((task) => migrateLegacyTask(task, base.users));
      }
    }
    return base;
  } catch (error) {
    return base;
  }
}

function mergeState(base, parsed) {
  return {
    ...base,
    ...parsed,
    meta: { ...base.meta, ...parsed.meta },
    filters: { ...base.filters, ...parsed.filters },
    session: { ...base.session, ...parsed.session },
    security: {
      ...base.security,
      ...parsed.security,
      loginHistory: Array.isArray(parsed.security?.loginHistory) ? parsed.security.loginHistory : base.security.loginHistory,
    },
    users: Array.isArray(parsed.users) ? parsed.users : base.users,
    tasks: Array.isArray(parsed.tasks) ? parsed.tasks.map((task) => normalizeTask(task, parsed.users || base.users)) : base.tasks,
    attendance: Array.isArray(parsed.attendance) ? parsed.attendance : base.attendance,
    workLogs: Array.isArray(parsed.workLogs) ? parsed.workLogs : base.workLogs,
    leaves: Array.isArray(parsed.leaves) ? parsed.leaves : base.leaves,
    holidays: Array.isArray(parsed.holidays) ? parsed.holidays : base.holidays,
    notifications: Array.isArray(parsed.notifications) ? parsed.notifications : base.notifications,
  };
}

function normalizeTask(task, users) {
  if (task.assigneeId) {
    return {
      ...task,
      labels: Array.isArray(task.labels) ? task.labels : [],
      files: Array.isArray(task.files) ? task.files : [],
      comments: Array.isArray(task.comments) ? task.comments : [],
      recurring: Boolean(task.recurring),
      reminderAt: task.reminderAt || "",
    };
  }
  return migrateLegacyTask(task, users);
}

function migrateLegacyTask(task, users) {
  const matchedUser = users.find((user) => user.name.toLowerCase() === String(task.assignee || "").toLowerCase()) || users[0];
  return {
    id: task.id,
    title: task.title,
    description: task.description || "Migrated from the earlier SoumyaFlow task board.",
    type: task.type || "Task",
    priority: task.priority || "Medium",
    status: task.status || "todo",
    project: task.project || "General",
    assigneeId: matchedUser.id,
    points: task.points || 3,
    dueDate: task.dueDate || APP_TODAY,
    labels: Array.isArray(task.labels) ? task.labels : [],
    blocked: Boolean(task.blocked),
    files: [],
    comments: [],
    recurring: false,
    reminderAt: "",
    createdAt: DEMO_NOW,
  };
}

function byId(id) {
  return document.getElementById(id);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getStatusCountElement(status) {
  if (status === "todo") return elements.todoCount;
  if (status === "in-progress") return elements.inProgressCount;
  if (status === "review") return elements.reviewCount;
  return elements.doneCount;
}

function getDefaultState() {
  return {
    activeView: "overview",
    meta: { sequence: 40 },
    filters: { query: "", project: "all", priority: "all", assignee: "all", status: "all" },
    session: { loggedIn: true, userId: "USR-001", lastActivity: DEMO_NOW },
    security: {
      jwtEnabled: true,
      requireTwoFactor: true,
      forgotPasswordEnabled: true,
      sessionTimeoutMinutes: 30,
      passwordChangedAt: "2026-03-28T19:10:00.000Z",
      loginHistory: [
        { id: "LGN-001", userId: "USR-001", action: "Login", time: "2026-04-02T03:42:00.000Z", device: "Desktop App", location: "Hyderabad Office", success: true },
        { id: "LGN-002", userId: "USR-001", action: "Password Changed", time: "2026-03-28T13:40:00.000Z", device: "Desktop App", location: "Remote", success: true },
        { id: "LGN-003", userId: "USR-002", action: "Login", time: "2026-04-02T03:20:00.000Z", device: "Web App", location: "Bengaluru", success: true },
        { id: "LGN-004", userId: "USR-004", action: "Forgot Password", time: "2026-03-29T09:10:00.000Z", device: "Web App", location: "Chennai", success: true },
      ],
    },
    users: [
      { id: "USR-001", name: "Aisha Khan", role: "Manager", department: "Operations", email: "aisha@soumyaflow.example.com", status: "Active", workMode: "WFH", leaveBalance: { Sick: 5, Casual: 4, Paid: 12 } },
      { id: "USR-002", name: "Rahul Verma", role: "Admin", department: "Technology", email: "rahul@soumyaflow.example.com", status: "Active", workMode: "Office", leaveBalance: { Sick: 6, Casual: 5, Paid: 14 } },
      { id: "USR-003", name: "Maya Singh", role: "Employee", department: "Product", email: "maya@soumyaflow.example.com", status: "Active", workMode: "Hybrid", leaveBalance: { Sick: 4, Casual: 3, Paid: 10 } },
      { id: "USR-004", name: "Nina Shah", role: "HR", department: "People Ops", email: "nina@soumyaflow.example.com", status: "Active", workMode: "Office", leaveBalance: { Sick: 7, Casual: 5, Paid: 13 } },
      { id: "USR-005", name: "Dev Patel", role: "Employee", department: "Security", email: "dev@soumyaflow.example.com", status: "Active", workMode: "Office", leaveBalance: { Sick: 5, Casual: 4, Paid: 11 } },
      { id: "USR-006", name: "Leena Joseph", role: "Employee", department: "Quality", email: "leena@soumyaflow.example.com", status: "Active", workMode: "Hybrid", leaveBalance: { Sick: 6, Casual: 4, Paid: 12 } },
    ],
    tasks: [
      { id: "OPS-142", title: "Launch executive reporting dashboard", description: "Combine sprint status, overdue work, and team health into one leadership view.", type: "Epic", priority: "Critical", status: "in-progress", project: "Operations Excellence", assigneeId: "USR-001", points: 13, dueDate: "2026-04-05", labels: ["dashboard", "leadership"], blocked: false, files: ["q2-reporting-plan.pdf"], comments: [{ author: "Rahul Verma", text: "Leadership review needs this before Monday.", time: "2026-04-01T08:20:00.000Z" }], recurring: false, reminderAt: "2026-04-03T09:00", createdAt: "2026-03-26T10:00:00.000Z" },
      { id: "APP-318", title: "Finish approval workflow for procurement requests", description: "Support multi-step review and approval with audit visibility for finance and ops.", type: "Story", priority: "High", status: "review", project: "Enterprise Platform", assigneeId: "USR-002", points: 8, dueDate: "2026-04-04", labels: ["workflow", "finance"], blocked: false, files: ["approval-schema.png"], comments: [{ author: "Aisha Khan", text: "Please validate the finance edge cases before release.", time: "2026-04-01T11:45:00.000Z" }], recurring: false, reminderAt: "2026-04-03T15:00", createdAt: "2026-03-27T09:00:00.000Z" },
      { id: "WEB-072", title: "Fix delayed notifications on task mentions", description: "Mention alerts are arriving late for some users during peak usage windows.", type: "Bug", priority: "Critical", status: "todo", project: "Customer Portal", assigneeId: "USR-003", points: 5, dueDate: "2026-04-03", labels: ["notifications", "bugfix"], blocked: true, files: [], comments: [{ author: "Leena Joseph", text: "Issue reproduced in regression cycle.", time: "2026-04-02T04:10:00.000Z" }], recurring: false, reminderAt: "2026-04-02T17:00", createdAt: "2026-03-29T14:00:00.000Z" },
      { id: "SEC-051", title: "Add permission matrix for admin roles", description: "Map workspace roles to fine-grained actions across boards, reports, and settings.", type: "Task", priority: "High", status: "in-progress", project: "Security Hardening", assigneeId: "USR-005", points: 8, dueDate: "2026-04-08", labels: ["roles", "security"], blocked: false, files: ["roles-matrix.xlsx"], comments: [{ author: "Nina Shah", text: "HR access needs leave-only permissions.", time: "2026-04-01T13:10:00.000Z" }], recurring: false, reminderAt: "", createdAt: "2026-03-28T12:00:00.000Z" },
      { id: "MOB-204", title: "Polish mobile backlog experience", description: "Reduce friction in creating, sorting, and updating issues from smaller screens.", type: "Story", priority: "Medium", status: "todo", project: "Mobile Experience", assigneeId: "USR-003", points: 5, dueDate: "2026-04-09", labels: ["mobile", "ux"], blocked: false, files: [], comments: [], recurring: false, reminderAt: "", createdAt: "2026-03-30T09:00:00.000Z" },
      { id: "QA-190", title: "Build regression checklist for sprint release", description: "Create a lightweight checklist so QA can verify the most sensitive workflows quickly.", type: "Task", priority: "Medium", status: "done", project: "Release Readiness", assigneeId: "USR-006", points: 3, dueDate: "2026-04-01", labels: ["qa", "release"], blocked: false, files: ["release-checklist.docx"], comments: [{ author: "Leena Joseph", text: "Checklist completed and shared with the release team.", time: "2026-04-01T16:30:00.000Z" }], recurring: true, reminderAt: "2026-04-08T09:30", createdAt: "2026-03-27T16:00:00.000Z" },
      { id: "CRM-447", title: "Sync customer account owner changes from CRM", description: "Reflect CRM ownership updates in internal workspaces to keep handoffs accurate.", type: "Story", priority: "High", status: "review", project: "Revenue Systems", assigneeId: "USR-001", points: 8, dueDate: "2026-04-06", labels: ["crm", "integration"], blocked: true, files: ["crm-sync-mapping.csv"], comments: [{ author: "Rahul Verma", text: "API payload now includes ownership metadata.", time: "2026-04-02T02:20:00.000Z" }], recurring: false, reminderAt: "2026-04-04T10:00", createdAt: "2026-03-31T09:00:00.000Z" },
      { id: "API-266", title: "Create SLA monitor for task processing APIs", description: "Track response thresholds and highlight production risks before they spread.", type: "Task", priority: "Medium", status: "in-progress", project: "Platform Reliability", assigneeId: "USR-002", points: 5, dueDate: "2026-04-10", labels: ["api", "monitoring"], blocked: false, files: ["sla-thresholds.json"], comments: [], recurring: true, reminderAt: "2026-04-03T11:00", createdAt: "2026-03-29T11:00:00.000Z" },
    ],
    attendance: [
      { id: "ATT-001", employeeId: "USR-001", date: "2026-03-29", loginTime: "09:08", logoutTime: "18:22", breakMinutes: 40, workMode: "WFH", biometricVerified: false },
      { id: "ATT-002", employeeId: "USR-001", date: "2026-03-30", loginTime: "09:18", logoutTime: "18:36", breakMinutes: 45, workMode: "WFH", biometricVerified: false },
      { id: "ATT-003", employeeId: "USR-001", date: "2026-03-31", loginTime: "09:11", logoutTime: "18:32", breakMinutes: 45, workMode: "Office", biometricVerified: true },
      { id: "ATT-004", employeeId: "USR-001", date: "2026-04-01", loginTime: "09:26", logoutTime: "18:18", breakMinutes: 35, workMode: "Office", biometricVerified: true },
      { id: "ATT-005", employeeId: "USR-001", date: "2026-04-02", loginTime: "09:12", logoutTime: "18:42", breakMinutes: 45, workMode: "WFH", biometricVerified: false },
      { id: "ATT-006", employeeId: "USR-002", date: "2026-04-02", loginTime: "08:58", logoutTime: "18:55", breakMinutes: 50, workMode: "Office", biometricVerified: true },
      { id: "ATT-007", employeeId: "USR-003", date: "2026-04-02", loginTime: "09:42", logoutTime: "17:36", breakMinutes: 50, workMode: "Hybrid", biometricVerified: false },
      { id: "ATT-008", employeeId: "USR-004", date: "2026-04-02", loginTime: "09:05", logoutTime: "18:21", breakMinutes: 40, workMode: "Office", biometricVerified: true },
      { id: "ATT-009", employeeId: "USR-005", date: "2026-04-02", loginTime: "09:20", logoutTime: "18:47", breakMinutes: 35, workMode: "Office", biometricVerified: true },
      { id: "ATT-010", employeeId: "USR-006", date: "2026-04-02", loginTime: "09:09", logoutTime: "18:14", breakMinutes: 45, workMode: "Hybrid", biometricVerified: false },
    ],
    workLogs: [
      { id: "LOG-001", employeeId: "USR-001", date: "2026-03-30", project: "Operations Excellence", hours: 3.5, note: "Built sprint health widgets.", time: "2026-03-30T12:00:00.000Z" },
      { id: "LOG-002", employeeId: "USR-001", date: "2026-03-31", project: "Revenue Systems", hours: 2.5, note: "Reviewed CRM sync edge cases.", time: "2026-03-31T13:00:00.000Z" },
      { id: "LOG-003", employeeId: "USR-001", date: "2026-04-01", project: "Operations Excellence", hours: 4.0, note: "Prepared leadership dashboard metrics.", time: "2026-04-01T11:00:00.000Z" },
      { id: "LOG-004", employeeId: "USR-001", date: "2026-04-02", project: "Revenue Systems", hours: 2.0, note: "Validated owner sync workflow.", time: "2026-04-02T05:30:00.000Z" },
      { id: "LOG-005", employeeId: "USR-002", date: "2026-04-02", project: "Platform Reliability", hours: 4.5, note: "Configured SLA alert thresholds.", time: "2026-04-02T05:10:00.000Z" },
      { id: "LOG-006", employeeId: "USR-003", date: "2026-04-02", project: "Customer Portal", hours: 5.0, note: "Investigated delayed mention notifications.", time: "2026-04-02T07:00:00.000Z" },
      { id: "LOG-007", employeeId: "USR-005", date: "2026-04-02", project: "Security Hardening", hours: 4.0, note: "Drafted role permission matrix.", time: "2026-04-02T06:00:00.000Z" },
      { id: "LOG-008", employeeId: "USR-006", date: "2026-04-01", project: "Release Readiness", hours: 3.0, note: "Closed regression checklist.", time: "2026-04-01T08:00:00.000Z" },
    ],
    leaves: [
      { id: "LEV-301", employeeId: "USR-003", type: "Sick", fromDate: "2026-04-08", toDate: "2026-04-09", days: 2, status: "Pending", approverId: "USR-001", reason: "Fever and rest", createdAt: "2026-04-02T04:20:00.000Z" },
      { id: "LEV-302", employeeId: "USR-006", type: "Paid", fromDate: "2026-04-15", toDate: "2026-04-16", days: 2, status: "Approved", approverId: "USR-004", reason: "Family event", createdAt: "2026-03-31T08:20:00.000Z" },
      { id: "LEV-303", employeeId: "USR-005", type: "Casual", fromDate: "2026-04-04", toDate: "2026-04-04", days: 1, status: "Approved", approverId: "USR-001", reason: "Personal work", createdAt: "2026-03-30T07:10:00.000Z" },
      { id: "LEV-304", employeeId: "USR-004", type: "Paid", fromDate: "2026-04-18", toDate: "2026-04-21", days: 4, status: "Pending", approverId: "USR-002", reason: "Travel leave", createdAt: "2026-04-01T09:30:00.000Z" },
    ],
    holidays: [
      { id: "HOL-001", name: "Ambedkar Jayanti", date: "2026-04-14", type: "Company" },
      { id: "HOL-002", name: "Good Friday", date: "2026-04-17", type: "Optional" },
      { id: "HOL-003", name: "Labour Day", date: "2026-05-01", type: "Company" },
      { id: "HOL-004", name: "Bakrid", date: "2026-05-27", type: "Optional" },
    ],
    notifications: [
      { id: "NTF-001", title: "Task assigned", message: "WEB-072 has been assigned to Maya Singh.", type: "task", userId: "USR-003", audience: "", time: "2026-04-02T04:30:00.000Z", read: false },
      { id: "NTF-002", title: "Deadline reminder", message: "OPS-142 is due on 05 Apr 2026.", type: "deadline", userId: "USR-001", audience: "", time: "2026-04-02T03:55:00.000Z", read: false },
      { id: "NTF-003", title: "Leave approval required", message: "Maya Singh submitted a sick leave request.", type: "leave", audience: "Managers", userId: "", time: "2026-04-02T04:25:00.000Z", read: false },
      { id: "NTF-004", title: "Admin announcement", message: "Quarterly town hall starts tomorrow at 4 PM.", type: "announcement", audience: "All", userId: "", time: "2026-04-01T10:30:00.000Z", read: true },
      { id: "NTF-005", title: "Security alert", message: "Password rotation policy was updated this week.", type: "security", audience: "All", userId: "", time: "2026-03-31T12:10:00.000Z", read: true },
      { id: "NTF-006", title: "Attendance reminder", message: "Please submit today’s work log before sign-off.", type: "attendance", userId: "USR-001", audience: "", time: "2026-04-02T05:00:00.000Z", read: false },
    ],
  };
}