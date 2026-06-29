import { Bell, Check, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { notifications } from "@/data/sample";
import { cn } from "@/lib/utils";

export function NotificationsView() {
  return (
    <div>
      <PageHeader
        title="Notifications"
        description="Stay up to date with everything that matters."
        action={
          <Button variant="outline" className="rounded-xl" onClick={() => toast.success("All marked as read")}>
            <Check className="mr-1.5 h-4 w-4" /> Mark all read
          </Button>
        }
      />
      <Card className="divide-y divide-border shadow-soft">
        {notifications.map((n) => (
          <div key={n.id} className="flex items-start gap-4 p-4 transition-colors hover:bg-muted/40">
            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                n.read ? "bg-muted text-muted-foreground" : "bg-secondary text-primary",
              )}
            >
              <Bell className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-medium">{n.title}</p>
                {!n.read && <span className="h-2 w-2 rounded-full bg-primary" />}
              </div>
              <p className="text-sm text-muted-foreground">{n.message}</p>
              <p className="mt-1 text-xs text-muted-foreground">{n.time}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground"
              onClick={() => toast.success("Notification deleted")}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </Card>
    </div>
  );
}