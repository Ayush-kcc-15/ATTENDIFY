import { createFileRoute } from "@tanstack/react-router";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/dashboard/page-header";
import { DataTable, type Column } from "@/components/tables/data-table";
import { Button } from "@/components/ui/button";
import { subjects } from "@/data/sample";

export const Route = createFileRoute("/admin/subjects")({
  head: () => ({ meta: [{ title: "Subjects — Attendify" }] }),
  component: SubjectsPage,
});

type Subject = (typeof subjects)[number];

function SubjectsPage() {
  const columns: Column<Subject>[] = [
    { key: "name", header: "Subject", sortable: true, render: (s) => <span className="font-medium">{s.name}</span> },
    { key: "code", header: "Code", sortable: true },
    { key: "teacher", header: "Teacher" },
    { key: "credits", header: "Credits", sortable: true },
    { key: "classes", header: "Classes" },
    {
      key: "actions",
      header: "",
      className: "text-right",
      render: () => (
        <div className="flex justify-end gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info("Edit subject")}>
            <Pencil className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => toast.success("Subject removed")}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Subjects"
        description="Manage subjects, codes, and credits."
        action={
          <Button className="rounded-xl" onClick={() => toast.success("Create subject")}>
            <Plus className="mr-1.5 h-4 w-4" /> Create Subject
          </Button>
        }
      />
      <DataTable columns={columns} data={subjects} searchKeys={["name", "code", "teacher"]} />
    </div>
  );
}
