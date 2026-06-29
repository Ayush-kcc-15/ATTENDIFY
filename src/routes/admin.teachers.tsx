import { createFileRoute } from "@tanstack/react-router";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { DataTable, type Column } from "@/components/tables/data-table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { teachers, type Teacher } from "@/data/sample";

export const Route = createFileRoute("/admin/teachers")({
  head: () => ({ meta: [{ title: "Teachers — Attendify" }] }),
  component: TeachersPage,
});

function TeachersPage() {
  const columns: Column<Teacher>[] = [
    {
      key: "name",
      header: "Teacher",
      sortable: true,
      render: (t) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-secondary text-xs font-semibold text-primary">
              {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.email}</p>
          </div>
        </div>
      ),
    },
    { key: "employeeId", header: "Employee ID", sortable: true },
    { key: "department", header: "Department", sortable: true },
    { key: "designation", header: "Designation" },
    { key: "classes", header: "Classes", sortable: true },
    { key: "status", header: "Status", render: (t) => <StatusBadge status={t.status} /> },
    {
      key: "actions",
      header: "",
      className: "text-right",
      render: () => (
        <div className="flex justify-end gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info("Edit teacher")}>
            <Pencil className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => toast.success("Teacher removed")}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Teachers"
        description="Manage faculty members and assignments."
        action={
          <Button className="rounded-xl" onClick={() => toast.success("Add teacher")}>
            <Plus className="mr-1.5 h-4 w-4" /> Add Teacher
          </Button>
        }
      />
      <DataTable
        columns={columns}
        data={teachers}
        searchKeys={["name", "employeeId", "department"]}
        onExport={() => toast.success("Exported to CSV")}
      />
    </div>
  );
}
