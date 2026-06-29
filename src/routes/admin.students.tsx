import { createFileRoute } from "@tanstack/react-router";
import { Plus, Pencil, Trash2, Upload } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { DataTable, type Column } from "@/components/tables/data-table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { students, type Student } from "@/data/sample";

export const Route = createFileRoute("/admin/students")({
  head: () => ({ meta: [{ title: "Students — Attendify" }] }),
  component: StudentsPage,
});

function StudentsPage() {
  const columns: Column<Student>[] = [
    {
      key: "name",
      header: "Student",
      sortable: true,
      render: (s) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-secondary text-xs font-semibold text-primary">
              {s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{s.name}</p>
            <p className="text-xs text-muted-foreground">{s.email}</p>
          </div>
        </div>
      ),
    },
    { key: "roll", header: "Roll No.", sortable: true },
    { key: "className", header: "Class" },
    { key: "section", header: "Section" },
    {
      key: "attendance",
      header: "Attendance",
      sortable: true,
      render: (s) => (
        <div className="flex items-center gap-2">
          <Progress value={s.attendance} className="h-1.5 w-20" />
          <span className="text-xs font-medium">{s.attendance}%</span>
        </div>
      ),
    },
    { key: "status", header: "Status", render: (s) => <StatusBadge status={s.status} /> },
    {
      key: "actions",
      header: "",
      className: "text-right",
      render: () => (
        <div className="flex justify-end gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info("Edit student")}>
            <Pencil className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => toast.success("Student removed")}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Students"
        description="Manage all enrolled students."
        action={
          <>
            <Button variant="outline" className="rounded-xl" onClick={() => toast.info("CSV import")}>
              <Upload className="mr-1.5 h-4 w-4" /> Import
            </Button>
            <Button className="rounded-xl" onClick={() => toast.success("Add student")}>
              <Plus className="mr-1.5 h-4 w-4" /> Add Student
            </Button>
          </>
        }
      />
      <DataTable
        columns={columns}
        data={students}
        searchKeys={["name", "roll", "email"]}
        onExport={() => toast.success("Exported to CSV")}
      />
    </div>
  );
}
