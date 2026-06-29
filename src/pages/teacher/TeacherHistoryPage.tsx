import { toast } from "sonner";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { DataTable, type Column } from "@/components/tables/data-table";
import { attendanceRecords } from "@/data/sample";

type Record = (typeof attendanceRecords)[number];

export default function TeacherHistoryPage() {
  const columns: Column<Record>[] = [
    { key: "student", header: "Student", sortable: true, render: (r) => <span className="font-medium">{r.student}</span> },
    { key: "subject", header: "Subject", sortable: true },
    { key: "className", header: "Class" },
    { key: "date", header: "Date", sortable: true },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
  ];

  return (
    <div>
      <PageHeader title="Attendance History" description="Review and edit past attendance records." />
      <DataTable columns={columns} data={attendanceRecords} searchKeys={["student", "subject"]} onExport={() => toast.success("Exported")} />
    </div>
  );
}
