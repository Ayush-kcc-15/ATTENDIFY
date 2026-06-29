import { cn } from "@/lib/utils";
import type { AttendanceStatus } from "@/data/sample";

const styles: Record<string, string> = {
  present: "bg-success/15 text-success",
  absent: "bg-destructive/15 text-destructive",
  late: "bg-warning/15 text-warning",
  leave: "bg-secondary text-secondary-foreground",
  pending: "bg-warning/15 text-warning",
  approved: "bg-success/15 text-success",
  rejected: "bg-destructive/15 text-destructive",
  cancelled: "bg-muted text-muted-foreground",
  active: "bg-success/15 text-success",
  inactive: "bg-muted text-muted-foreground",
};

export function StatusBadge({
  status,
}: {
  status: AttendanceStatus | string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
        styles[status] ?? "bg-muted text-muted-foreground",
      )}
    >
      {status}
    </span>
  );
}