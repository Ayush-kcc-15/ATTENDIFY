import { Check, X } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { leaveRequests } from "@/data/sample";

export function LeaveView({
  canDecide = false,
  title = "Leave Requests",
  description = "Review and manage leave requests.",
}: {
  canDecide?: boolean;
  title?: string;
  description?: string;
}) {
  return (
    <div>
      <PageHeader title={title} description={description} />
      <div className="grid gap-4">
        {leaveRequests.map((l) => (
          <Card key={l.id} className="flex flex-col gap-3 p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium">{l.student}</p>
                <StatusBadge status={l.status} />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{l.reason}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {l.from} → {l.to}
              </p>
            </div>
            {canDecide && l.status === "pending" && (
              <div className="flex gap-2">
                <Button size="sm" className="rounded-xl" onClick={() => toast.success("Leave approved")}>
                  <Check className="mr-1.5 h-4 w-4" /> Approve
                </Button>
                <Button size="sm" variant="outline" className="rounded-xl text-destructive" onClick={() => toast.success("Leave rejected")}>
                  <X className="mr-1.5 h-4 w-4" /> Reject
                </Button>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}