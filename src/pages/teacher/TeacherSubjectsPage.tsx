import { BookOpen } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { subjects } from "@/data/sample";

export default function TeacherSubjectsPage() {
  const mine = subjects.filter((s) => s.teacher === "Dr. Neha Bansal");

  return (
    <div>
      <PageHeader title="My Subjects" description="Subjects you teach." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {(mine.length ? mine : subjects).map((s) => (
          <Card key={s.id} className="p-5 shadow-soft">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary"><BookOpen className="h-5 w-5" /></span>
            <h3 className="mt-4 font-semibold">{s.name}</h3>
            <p className="text-sm text-muted-foreground">{s.code} · {s.credits} credits</p>
            <p className="mt-2 text-xs text-muted-foreground">{s.classes} classes assigned</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
