import { Camera } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/dashboard/page-header";
import { SectionCard } from "@/components/dashboard/section-card";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function ProfileView({
  name,
  role,
  email,
}: {
  name: string;
  role: string;
  email: string;
}) {
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  return (
    <div>
      <PageHeader title="Profile" description="Manage your personal information." />
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="overflow-hidden shadow-soft">
          <div className="h-24 bg-primary" />
          <div className="-mt-10 flex flex-col items-center px-6 pb-6 text-center">
            <div className="relative">
              <Avatar className="h-20 w-20 border-4 border-card">
                <AvatarFallback className="bg-secondary text-lg font-semibold text-primary">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <button
                onClick={() => toast.info("Upload avatar")}
                className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft"
                aria-label="Change avatar"
              >
                <Camera className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="mt-3 font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
            <p className="mt-1 text-xs text-muted-foreground">{email}</p>
          </div>
        </Card>

        <div className="space-y-6 lg:col-span-2">
          <SectionCard title="Account information">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Full name</label>
                <Input defaultValue={name} className="rounded-xl" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Email</label>
                <Input defaultValue={email} className="rounded-xl" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Phone</label>
                <Input defaultValue="+1 (555) 010-2233" className="rounded-xl" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Address</label>
                <Input defaultValue="100 Cloud Avenue" className="rounded-xl" />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-sm font-medium">Bio</label>
                <Textarea defaultValue="Passionate about education and technology." className="rounded-xl" />
              </div>
            </div>
            <Button className="mt-4 rounded-xl" onClick={() => toast.success("Profile updated")}>
              Save changes
            </Button>
          </SectionCard>

          <SectionCard title="Security">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Current password</label>
                <Input type="password" placeholder="••••••••" className="rounded-xl" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">New password</label>
                <Input type="password" placeholder="••••••••" className="rounded-xl" />
              </div>
            </div>
            <Button variant="outline" className="mt-4 rounded-xl" onClick={() => toast.success("Password changed")}>
              Update password
            </Button>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}