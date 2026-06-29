import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import AdminLayout from "./layouts/AdminLayout";
import TeacherLayout from "./layouts/TeacherLayout";
import StudentLayout from "./layouts/StudentLayout";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminTeachersPage from "./pages/admin/AdminTeachersPage";
import AdminStudentsPage from "./pages/admin/AdminStudentsPage";
import AdminClassesPage from "./pages/admin/AdminClassesPage";
import AdminSubjectsPage from "./pages/admin/AdminSubjectsPage";
import AdminAttendancePage from "./pages/admin/AdminAttendancePage";
import AdminReportsPage from "./pages/admin/AdminReportsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminLeavePage from "./pages/admin/AdminLeavePage";
import AdminNotificationsPage from "./pages/admin/AdminNotificationsPage";
import AdminSettingsPage from "./pages/admin/AdminSettingsPage";
import TeacherDashboardPage from "./pages/teacher/TeacherDashboardPage";
import TeacherClassesPage from "./pages/teacher/TeacherClassesPage";
import TeacherTakeAttendancePage from "./pages/teacher/TeacherTakeAttendancePage";
import TeacherHistoryPage from "./pages/teacher/TeacherHistoryPage";
import TeacherStudentsPage from "./pages/teacher/TeacherStudentsPage";
import TeacherSubjectsPage from "./pages/teacher/TeacherSubjectsPage";
import TeacherReportsPage from "./pages/teacher/TeacherReportsPage";
import TeacherLeavePage from "./pages/teacher/TeacherLeavePage";
import TeacherNotificationsPage from "./pages/teacher/TeacherNotificationsPage";
import TeacherProfilePage from "./pages/teacher/TeacherProfilePage";
import StudentDashboardPage from "./pages/student/StudentDashboardPage";
import StudentAttendancePage from "./pages/student/StudentAttendancePage";
import StudentSubjectsPage from "./pages/student/StudentSubjectsPage";
import StudentCalendarPage from "./pages/student/StudentCalendarPage";
import StudentLeavePage from "./pages/student/StudentLeavePage";
import StudentNotificationsPage from "./pages/student/StudentNotificationsPage";
import StudentProfilePage from "./pages/student/StudentProfilePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboardPage />} />
        <Route path="analytics" element={<AdminAnalyticsPage />} />
        <Route path="students" element={<AdminStudentsPage />} />
        <Route path="teachers" element={<AdminTeachersPage />} />
        <Route path="classes" element={<AdminClassesPage />} />
        <Route path="subjects" element={<AdminSubjectsPage />} />
        <Route path="attendance" element={<AdminAttendancePage />} />
        <Route path="reports" element={<AdminReportsPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
        <Route path="notifications" element={<AdminNotificationsPage />} />
        <Route path="leave" element={<AdminLeavePage />} />
      </Route>

      <Route path="/teacher" element={<TeacherLayout />}>
        <Route index element={<TeacherDashboardPage />} />
        <Route path="classes" element={<TeacherClassesPage />} />
        <Route path="students" element={<TeacherStudentsPage />} />
        <Route path="take-attendance" element={<TeacherTakeAttendancePage />} />
        <Route path="history" element={<TeacherHistoryPage />} />
        <Route path="profile" element={<TeacherProfilePage />} />
        <Route path="reports" element={<TeacherReportsPage />} />
        <Route path="subjects" element={<TeacherSubjectsPage />} />
        <Route path="notifications" element={<TeacherNotificationsPage />} />
        <Route path="leave" element={<TeacherLeavePage />} />
      </Route>

      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<StudentDashboardPage />} />
        <Route path="profile" element={<StudentProfilePage />} />
        <Route path="attendance" element={<StudentAttendancePage />} />
        <Route path="calendar" element={<StudentCalendarPage />} />
        <Route path="subjects" element={<StudentSubjectsPage />} />
        <Route path="notifications" element={<StudentNotificationsPage />} />
        <Route path="leave" element={<StudentLeavePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
