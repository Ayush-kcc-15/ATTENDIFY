import { createFileRoute } from "@tanstack/react-router";
import {
  Users,
  GraduationCap,
  Layers,
  CalendarCheck,
  TrendingUp,
  Percent,
  Plus,
  Download,
} from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { SectionCard } from "@/components/dashboard/section-card";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { Button } from "@/components/ui/button";
import {
  WeeklyAttendanceChart,
  StatusPieChart,
  TrendAreaChart,
} from "@/components/charts/dashboard-charts";
import { attendanceRecords, recentActivity, announcements } from "@/data/sample";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin Dashboard — Attendify" }] }),
  component: AdminDashboard,
});

function AdminDashboard() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Welcome back, Alex. Here's what's happening today."
        action={
          <>
            <Button variant="outline" className="rounded-xl">
              <Download className="mr-1.5 h-4 w-4" /> Export
            </Button>
            <Button className="rounded-xl">
              <Plus className="mr-1.5 h-4 w-4" /> Add
            </Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard label="Total Students" value="1,284" icon={Users} trend={4.2} hint="vs last month" />
        <StatCard label="Total Teachers" value="86" icon={GraduationCap} trend={1.1} hint="vs last month" />
        <StatCard label="Total Classes" value="42" icon={Layers} trend={0} hint="stable" />
        <StatCard label="Attendance Today" value="1,142" icon={CalendarCheck} trend={2.8} hint="present" />
        <StatCard label="Monthly Attendance" value="94.2%" icon={TrendingUp} trend={1.4} hint="vs last month" />
        <StatCard label="Attendance Rate" value="91.7%" icon={Percent} trend={-0.6} hint="this week" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <SectionCard
          title="Weekly attendance"
          description="Present vs absent this week"
          className="lg:col-span-2"
        >
          <WeeklyAttendanceChart />
        </SectionCard>
        <SectionCard title="Status breakdown" description="This month">
          <StatusPieChart />
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <SectionCard title="Attendance trend" description="Monthly rate" className="lg:col-span-2">
          <TrendAreaChart />
        </SectionCard>
        <SectionCard title="Recent activity">
          <ul className="space-y-4">
            {recentActivity.map((a) => (
              <li key={a.id} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div className="text-sm">
                  <p>
                    <span className="font-medium">{a.actor}</span>{" "}
                    <span className="text-muted-foreground">{a.action}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <SectionCard title="Recent attendance" description="Latest records">
          <ul className="divide-y divide-border">
            {attendanceRecords.slice(0, 5).map((r) => (
              <li key={r.id} className="flex items-center justify-between py-2.5 text-sm">
                <div>
                  <p className="font-medium">{r.student}</p>
                  <p className="text-xs text-muted-foreground">{r.subject} · {r.date}</p>
                </div>
                <StatusBadge status={r.status} />
              </li>
            ))}
          </ul>
        </SectionCard>
        <SectionCard title="Announcements">
          <ul className="space-y-4">
            {announcements.map((a) => (
              <li key={a.id} className="rounded-xl border border-border p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{a.title}</p>
                  {a.pinned && (
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-primary">
                      Pinned
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{a.body}</p>
                <p className="mt-2 text-[11px] text-muted-foreground">{a.author} · {a.date}</p>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </div>
  );
}
