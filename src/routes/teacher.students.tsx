import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { DataTable, type Column } from "@/components/tables/data-table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { students, type Student } from "@/data/sample";

export const Route = createFileRoute("/teacher/students")({
  head: () => ({ meta: [{ title: "Students — Attendify" }] }),
  component: TeacherStudentsPage,
});

function TeacherStudentsPage() {
  const columns: Column<Student>[] = [
    {
      key: "name", header: "Student", sortable: true,
      render: (s) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9"><AvatarFallback className="bg-secondary text-xs font-semibold text-primary">{s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}</AvatarFallback></Avatar>
          <div><p className="font-medium">{s.name}</p><p className="text-xs text-muted-foreground">{s.roll}</p></div>
        </div>
      ),
    },
    { key: "className", header: "Class" },
    { key: "section", header: "Section" },
    { key: "attendance", header: "Attendance", sortable: true, render: (s) => (<div className="flex items-center gap-2"><Progress value={s.attendance} className="h-1.5 w-20" /><span className="text-xs font-medium">{s.attendance}%</span></div>) },
    { key: "status", header: "Status", render: (s) => <StatusBadge status={s.status} /> },
  ];
  return (
    <div>
      <PageHeader title="My Students" description="Students across your assigned classes." />
      <DataTable columns={columns} data={students} searchKeys={["name", "roll"]} />
    </div>
  );
}
