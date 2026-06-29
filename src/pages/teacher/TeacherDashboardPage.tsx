import {
  CalendarClock,
  Users,
  ClipboardList,
  CheckCircle2,
  ClipboardCheck,
  FileBarChart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { SectionCard } from "@/components/dashboard/section-card";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { Button } from "@/components/ui/button";
import { WeeklyAttendanceChart } from "@/components/charts/dashboard-charts";
import { attendanceRecords } from "@/data/sample";

const todaysClasses = [
  { time: "09:00 AM", subject: "Cloud Computing", className: "BSc CS — Year 3 · A", status: "completed" },
  { time: "11:00 AM", subject: "Operating Systems", className: "BSc CS — Year 3 · B", status: "pending" },
  { time: "02:00 PM", subject: "Cloud Computing", className: "BSc CS — Year 3 · B", status: "pending" },
];

export default function TeacherDashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Good morning, Dr. Bansal. You have 3 classes today."
        action={
          <Button className="rounded-xl" asChild>
            <Link to="/teacher/take-attendance">
              <ClipboardCheck className="mr-1.5 h-4 w-4" /> Take Attendance
            </Link>
          </Button>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Today's Classes" value="3" icon={CalendarClock} hint="1 completed" />
        <StatCard label="Students" value="128" icon={Users} hint="across 5 classes" />
        <StatCard label="Attendance Pending" value="2" icon={ClipboardList} hint="classes" />
        <StatCard label="Attendance Completed" value="1" icon={CheckCircle2} hint="today" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <SectionCard title="Today's classes" description="Your schedule" className="lg:col-span-2">
          <ul className="divide-y divide-border">
            {todaysClasses.map((c, i) => (
              <li key={i} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-muted-foreground">{c.time}</span>
                  <div>
                    <p className="text-sm font-medium">{c.subject}</p>
                    <p className="text-xs text-muted-foreground">{c.className}</p>
                  </div>
                </div>
                {c.status === "completed" ? (
                  <StatusBadge status="approved" />
                ) : (
                  <Button size="sm" variant="outline" className="rounded-lg" asChild>
                    <Link to="/teacher/take-attendance">Take</Link>
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </SectionCard>
        <SectionCard title="Quick actions">
          <div className="grid gap-3">
            <Button variant="outline" className="justify-start rounded-xl" asChild>
              <Link to="/teacher/take-attendance"><ClipboardCheck className="mr-2 h-4 w-4" /> Take attendance</Link>
            </Button>
            <Button variant="outline" className="justify-start rounded-xl" asChild>
              <Link to="/teacher/history"><CalendarClock className="mr-2 h-4 w-4" /> View history</Link>
            </Button>
            <Button variant="outline" className="justify-start rounded-xl" asChild>
              <Link to="/teacher/reports"><FileBarChart className="mr-2 h-4 w-4" /> Generate report</Link>
            </Button>
          </div>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <SectionCard title="Weekly attendance" className="lg:col-span-2">
          <WeeklyAttendanceChart />
        </SectionCard>
        <SectionCard title="Recent attendance">
          <ul className="divide-y divide-border">
            {attendanceRecords.slice(0, 5).map((r) => (
              <li key={r.id} className="flex items-center justify-between py-2.5 text-sm">
                <div>
                  <p className="font-medium">{r.student}</p>
                  <p className="text-xs text-muted-foreground">{r.subject}</p>
                </div>
                <StatusBadge status={r.status} />
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </div>
  );
}
