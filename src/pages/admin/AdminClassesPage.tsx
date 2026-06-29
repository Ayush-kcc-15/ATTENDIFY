import { Plus, Users, Layers } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { classes } from "@/data/sample";

export default function AdminClassesPage() {
  return (
    <div>
      <PageHeader
        title="Classes"
        description="Manage classes, sections, and assigned faculty."
        action={
          <Button className="rounded-xl" onClick={() => toast.success("Create class")}>
            <Plus className="mr-1.5 h-4 w-4" /> Create Class
          </Button>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((c) => (
          <Card key={c.id} className="p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <Layers className="h-5 w-5" />
              </span>
              <span className="text-xs text-muted-foreground">{c.year}</span>
            </div>
            <h3 className="mt-4 font-semibold">{c.name}</h3>
            <p className="text-sm text-muted-foreground">Class teacher: {c.teacher}</p>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Users className="h-4 w-4" /> {c.students} students
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Layers className="h-4 w-4" /> {c.sections} sections
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
