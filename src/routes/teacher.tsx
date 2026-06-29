import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { teacherNav } from "@/components/layout/nav-config";

export const Route = createFileRoute("/teacher")({
  component: TeacherLayout,
});

function TeacherLayout() {
  return (
    <DashboardShell nav={teacherNav} roleLabel="Teacher" userName="Dr. Neha Bansal">
      <Outlet />
    </DashboardShell>
  );
}
