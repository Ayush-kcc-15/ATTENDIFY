import { createFileRoute } from "@tanstack/react-router";
import { NotificationsView } from "@/components/dashboard/notifications-view";

export const Route = createFileRoute("/student/notifications")({
  head: () => ({ meta: [{ title: "Notifications — Attendify" }] }),
  component: () => <NotificationsView />,
});
