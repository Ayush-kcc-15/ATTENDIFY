import { toast } from "sonner";
import { PageHeader } from "@/components/dashboard/page-header";
import { SectionCard } from "@/components/dashboard/section-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/lib/theme";

export default function AdminSettingsPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <PageHeader title="Settings" description="Manage your workspace preferences." />
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Institution" description="Update your organization details.">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Institution name</label>
              <Input defaultValue="Northgate University" className="rounded-xl" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Academic year</label>
              <Input defaultValue="2024-25" className="rounded-xl" />
            </div>
            <Button className="rounded-xl" onClick={() => toast.success("Settings saved")}>Save changes</Button>
          </div>
        </SectionCard>
        <SectionCard title="Preferences" description="Theme, notifications, and security.">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Dark mode</p>
                <p className="text-xs text-muted-foreground">Switch between light and dark.</p>
              </div>
              <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Email notifications</p>
                <p className="text-xs text-muted-foreground">Receive attendance summaries.</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Two-factor auth</p>
                <p className="text-xs text-muted-foreground">Add an extra layer of security.</p>
              </div>
              <Switch />
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
