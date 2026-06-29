import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { adminNav } from "@/components/layout/nav-config";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <DashboardShell nav={adminNav} roleLabel="Admin" userName="Alex Morgan">
      <Outlet />
    </DashboardShell>
  );
}
