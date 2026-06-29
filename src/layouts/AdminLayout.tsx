import { Outlet } from "react-router-dom";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { adminNav } from "@/components/layout/nav-config";

export default function AdminLayout() {
  return (
    <DashboardShell nav={adminNav} roleLabel="Admin" userName="Alex Morgan">
      <Outlet />
    </DashboardShell>
  );
}
