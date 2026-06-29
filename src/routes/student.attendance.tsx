import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { DataTable, type Column } from "@/components/tables/data-table";
import { attendanceRecords } from "@/data/sample";

export const Route = createFileRoute("/student/attendance")({
  head: () => ({ meta: [{ title: "My Attendance — Attendify" }] }),
  component: StudentAttendancePage,
});

type Record = (typeof attendanceRecords)[number];

function StudentAttendancePage() {
  const columns: Column<Record>[] = [
    { key: "subject", header: "Subject", sortable: true, render: (r) => <span className="font-medium">{r.subject}</span> },
    { key: "className", header: "Class" },
    { key: "teacher", header: "Teacher" },
    { key: "date", header: "Date", sortable: true },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
  ];
  return (
    <div>
      <PageHeader title="My Attendance" description="Your complete attendance record." />
      <DataTable columns={columns} data={attendanceRecords} searchKeys={["subject", "teacher"]} />
    </div>
  );
}
