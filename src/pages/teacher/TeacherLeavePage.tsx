import { LeaveView } from "@/components/dashboard/leave-view";

export default function TeacherLeavePage() {
  return (
    <LeaveView
      canDecide
      title="Leave Requests"
      description="Approve or reject your students' leave requests."
    />
  );
}
