import { createFileRoute } from "@tanstack/react-router";
import { LeaveView } from "@/components/dashboard/leave-view";

export const Route = createFileRoute("/teacher/leave")({
  head: () => ({ meta: [{ title: "Leave Requests — Attendify" }] }),
  component: () => <LeaveView canDecide title="Leave Requests" description="Approve or reject your students' leave requests." />,
});
