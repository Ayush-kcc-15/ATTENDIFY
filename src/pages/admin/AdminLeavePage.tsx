import { LeaveView } from "@/components/dashboard/leave-view";

export default function AdminLeavePage() {
  return (
    <LeaveView
      canDecide
      title="Leave Requests"
      description="Approve or reject student leave requests."
    />
  );
}
