import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { subjects } from "@/data/sample";

export const Route = createFileRoute("/student/subjects")({
  head: () => ({ meta: [{ title: "My Subjects — Attendify" }] }),
  component: StudentSubjectsPage,
});

const attendanceBySubject = [96, 88, 92, 79, 94, 85];

function StudentSubjectsPage() {
  return (
    <div>
      <PageHeader title="My Subjects" description="Your enrolled subjects and attendance." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((s, i) => (
          <Card key={s.id} className="p-5 shadow-soft">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary"><BookOpen className="h-5 w-5" /></span>
            <h3 className="mt-4 font-semibold">{s.name}</h3>
            <p className="text-sm text-muted-foreground">{s.code} · {s.teacher}</p>
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Attendance</span>
                <span className="font-medium">{attendanceBySubject[i]}%</span>
              </div>
              <Progress value={attendanceBySubject[i]} className="mt-1.5 h-1.5" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
