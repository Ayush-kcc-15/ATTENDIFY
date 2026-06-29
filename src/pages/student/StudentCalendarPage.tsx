import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const statusByDay: Record<number, "present" | "absent" | "late" | "leave" | "holiday"> = {
  1: "present", 2: "present", 3: "late", 4: "present", 5: "present",
  8: "present", 9: "absent", 10: "present", 11: "present", 12: "present",
  15: "present", 16: "leave", 17: "present", 18: "present", 19: "late",
  22: "present", 23: "present", 24: "present", 25: "present", 26: "present",
};

const legend = [
  { label: "Present", cls: "bg-success/15 text-success" },
  { label: "Absent", cls: "bg-destructive/15 text-destructive" },
  { label: "Late", cls: "bg-warning/15 text-warning" },
  { label: "Leave", cls: "bg-secondary text-primary" },
  { label: "Holiday", cls: "bg-muted text-muted-foreground" },
];

const dayClass: Record<string, string> = {
  present: "bg-success/15 text-success",
  absent: "bg-destructive/15 text-destructive",
  late: "bg-warning/15 text-warning",
  leave: "bg-secondary text-primary",
  holiday: "bg-muted text-muted-foreground",
};

export default function StudentCalendarPage() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const leadingBlanks = 1;
  const today = 28;

  return (
    <div>
      <PageHeader title="Attendance Calendar" description="June 2026" />
      <Card className="p-5 shadow-soft">
        <div className="mb-3 grid grid-cols-7 gap-2 text-center text-xs font-medium text-muted-foreground">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: leadingBlanks }).map((_, i) => (
            <span key={`b-${i}`} />
          ))}
          {days.map((d) => {
            const status = statusByDay[d];
            return (
              <div
                key={d}
                className={cn(
                  'flex aspect-square flex-col items-center justify-center rounded-xl text-sm transition-colors',
                  status ? dayClass[status] : 'bg-muted/40 text-muted-foreground',
                  d === today && 'ring-2 ring-primary',
                )}
              >
                <span className="font-medium">{d}</span>
                {status && <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-current" />}
              </div>
            );
          })}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {legend.map((l) => (
            <span key={l.label} className="inline-flex items-center gap-1.5 text-xs">
              <span className={cn('h-3 w-3 rounded-full', l.cls)} />
              {l.label}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}
