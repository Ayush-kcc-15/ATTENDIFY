import { createFileRoute } from "@tanstack/react-router";
import { ProfileView } from "@/components/dashboard/profile-view";

export const Route = createFileRoute("/student/profile")({
  head: () => ({ meta: [{ title: "Profile — Attendify" }] }),
  component: () => <ProfileView name="Aarav Sharma" role="Student · BSc CS — Year 3" email="aarav.sharma@uni.edu" />,
});
