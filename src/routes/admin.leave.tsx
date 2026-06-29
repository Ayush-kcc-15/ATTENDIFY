import { createFileRoute } from "@tanstack/react-router";
import { LeaveView } from "@/components/dashboard/leave-view";

export const Route = createFileRoute("/admin/leave")({
  head: () => ({ meta: [{ title: "Leave Requests — Attendify" }] }),
  component: () => (
    <LeaveView canDecide title="Leave Requests" description="Approve or reject student leave requests." />
  ),
});
