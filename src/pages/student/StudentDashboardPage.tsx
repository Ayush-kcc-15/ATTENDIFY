import { Percent, CalendarCheck, CalendarX, CalendarClock } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { SectionCard } from "@/components/dashboard/section-card";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { StudentMonthlyChart } from "@/components/charts/dashboard-charts";
import { attendanceRecords, notifications } from "@/data/sample";

const upcoming = [
  { time: "11:00 AM", subject: "Operating Systems", room: "Room 101" },
  { time: "02:00 PM", subject: "Cloud Computing", room: "Lab 204" },
];

export default function StudentDashboardPage() {
  return (
    <div>
      <PageHeader title="Dashboard" description="Welcome back, Aarav. Here's your attendance overview." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Attendance %" value="96%" icon={Percent} trend={1.2} hint="this semester" />
        <StatCard label="Present Days" value="112" icon={CalendarCheck} hint="this semester" />
        <StatCard label="Absent Days" value="5" icon={CalendarX} hint="this semester" />
        <StatCard label="Upcoming Classes" value="2" icon={CalendarClock} hint="today" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <SectionCard title="Monthly attendance" description="Present vs absent" className="lg:col-span-2">
          <StudentMonthlyChart />
        </SectionCard>
        <SectionCard title="Upcoming classes">
          <ul className="divide-y divide-border">
            {upcoming.map((u, i) => (
              <li key={i} className="flex items-center justify-between py-3 text-sm">
                <div>
                  <p className="font-medium">{u.subject}</p>
                  <p className="text-xs text-muted-foreground">{u.room}</p>
                </div>
                <span className="text-xs font-medium text-muted-foreground">{u.time}</span>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <SectionCard title="Recent attendance">
          <ul className="divide-y divide-border">
            {attendanceRecords.slice(0, 5).map((r) => (
              <li key={r.id} className="flex items-center justify-between py-2.5 text-sm">
                <div>
                  <p className="font-medium">{r.subject}</p>
                  <p className="text-xs text-muted-foreground">{r.date}</p>
                </div>
                <StatusBadge status={r.status} />
              </li>
            ))}
          </ul>
        </SectionCard>
        <SectionCard title="Recent notifications">
          <ul className="space-y-3">
            {notifications.slice(0, 4).map((n) => (
              <li key={n.id} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div className="text-sm">
                  <p className="font-medium">{n.title}</p>
                  <p className="text-xs text-muted-foreground">{n.message}</p>
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </div>
  );
}
