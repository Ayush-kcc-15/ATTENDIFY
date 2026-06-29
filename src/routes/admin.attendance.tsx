import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { DataTable, type Column } from "@/components/tables/data-table";
import { attendanceRecords } from "@/data/sample";

export const Route = createFileRoute("/admin/attendance")({
  head: () => ({ meta: [{ title: "Attendance — Attendify" }] }),
  component: AttendancePage,
});

type Record = (typeof attendanceRecords)[number];

function AttendancePage() {
  const columns: Column<Record>[] = [
    { key: "student", header: "Student", sortable: true, render: (r) => <span className="font-medium">{r.student}</span> },
    { key: "subject", header: "Subject", sortable: true },
    { key: "className", header: "Class" },
    { key: "teacher", header: "Teacher" },
    { key: "date", header: "Date", sortable: true },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
  ];
  return (
    <div>
      <PageHeader title="Attendance" description="All attendance records across the institution." />
      <DataTable
        columns={columns}
        data={attendanceRecords}
        searchKeys={["student", "subject", "teacher"]}
        onExport={() => toast.success("Exported attendance")}
      />
    </div>
  );
}
