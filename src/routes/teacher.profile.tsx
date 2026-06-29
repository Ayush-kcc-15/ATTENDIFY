import { createFileRoute } from "@tanstack/react-router";
import { ProfileView } from "@/components/dashboard/profile-view";

export const Route = createFileRoute("/teacher/profile")({
  head: () => ({ meta: [{ title: "Profile — Attendify" }] }),
  component: () => <ProfileView name="Dr. Neha Bansal" role="Teacher · Computer Science" email="neha.bansal@uni.edu" />,
});
