import { Outlet } from "react-router-dom";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { studentNav } from "@/components/layout/nav-config";

export default function StudentLayout() {
  return (
    <DashboardShell nav={studentNav} roleLabel="Student" userName="Aarav Sharma">
      <Outlet />
    </DashboardShell>
  );
}
