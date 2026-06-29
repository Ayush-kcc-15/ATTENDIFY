import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/teacher/classes")({
  head: () => ({ meta: [{ title: "Today's Classes — Attendify" }] }),
  component: ClassesPage,
});

const schedule = [
  { time: "09:00 AM", subject: "Cloud Computing", className: "BSc CS — Year 3 · A", room: "Lab 204" },
  { time: "11:00 AM", subject: "Operating Systems", className: "BSc CS — Year 3 · B", room: "Room 101" },
  { time: "02:00 PM", subject: "Cloud Computing", className: "BSc CS — Year 3 · B", room: "Lab 204" },
  { time: "04:00 PM", subject: "Operating Systems", className: "BSc CS — Year 2 · A", room: "Room 110" },
];

function ClassesPage() {
  return (
    <div>
      <PageHeader title="Today's Classes" description="Your schedule for today." />
      <div className="grid gap-4">
        {schedule.map((c, i) => (
          <Card key={i} className="flex flex-col gap-3 p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-secondary text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium">{c.subject}</p>
                <p className="text-sm text-muted-foreground">{c.className} · {c.room}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">{c.time}</span>
              <Button size="sm" className="rounded-xl" asChild>
                <Link to="/teacher/take-attendance">Take attendance</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
