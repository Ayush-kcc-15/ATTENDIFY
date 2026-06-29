import { Outlet } from "react-router-dom";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { teacherNav } from "@/components/layout/nav-config";

export default function TeacherLayout() {
  return (
    <DashboardShell nav={teacherNav} roleLabel="Teacher" userName="Dr. Neha Bansal">
      <Outlet />
    </DashboardShell>
  );
}
