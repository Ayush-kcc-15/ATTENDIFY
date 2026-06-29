import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { studentNav } from "@/components/layout/nav-config";

export const Route = createFileRoute("/student")({
  component: StudentLayout,
});

function StudentLayout() {
  return (
    <DashboardShell nav={studentNav} roleLabel="Student" userName="Aarav Sharma">
      <Outlet />
    </DashboardShell>
  );
}
