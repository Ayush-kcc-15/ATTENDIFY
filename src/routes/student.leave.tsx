import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/dashboard/page-header";
import { SectionCard } from "@/components/dashboard/section-card";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { leaveRequests } from "@/data/sample";

export const Route = createFileRoute("/student/leave")({
  head: () => ({ meta: [{ title: "Leave Requests — Attendify" }] }),
  component: StudentLeavePage,
});

function StudentLeavePage() {
  return (
    <div>
      <PageHeader title="Leave Requests" description="Apply for leave and track your requests." />
      <div className="grid gap-6 lg:grid-cols-3">
        <SectionCard title="Apply for leave" className="lg:col-span-1">
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Leave request submitted"); }}>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">From</label>
                <Input type="date" className="rounded-xl" required />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">To</label>
                <Input type="date" className="rounded-xl" required />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Reason</label>
              <Textarea placeholder="Describe your reason..." className="rounded-xl" required />
            </div>
            <Button type="submit" className="w-full rounded-xl">
              <Plus className="mr-1.5 h-4 w-4" /> Submit request
            </Button>
          </form>
        </SectionCard>

        <div className="space-y-4 lg:col-span-2">
          {leaveRequests.map((l) => (
            <Card key={l.id} className="flex items-center justify-between p-5 shadow-soft">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium">{l.reason}</p>
                  <StatusBadge status={l.status} />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{l.from} → {l.to}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
