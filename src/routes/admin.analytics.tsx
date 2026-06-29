import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/page-header";
import { SectionCard } from "@/components/dashboard/section-card";
import {
  WeeklyAttendanceChart,
  StatusPieChart,
  TrendAreaChart,
  StudentMonthlyChart,
} from "@/components/charts/dashboard-charts";

export const Route = createFileRoute("/admin/analytics")({
  head: () => ({ meta: [{ title: "Analytics — Attendify" }] }),
  component: AnalyticsPage,
});

function AnalyticsPage() {
  return (
    <div>
      <PageHeader title="Analytics" description="Attendance insights across your institution." />
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Attendance trend" description="Monthly rate">
          <TrendAreaChart />
        </SectionCard>
        <SectionCard title="Weekly attendance" description="Present vs absent">
          <WeeklyAttendanceChart />
        </SectionCard>
        <SectionCard title="Status breakdown" description="This month">
          <StatusPieChart />
        </SectionCard>
        <SectionCard title="Present vs absent" description="Monthly comparison">
          <StudentMonthlyChart />
        </SectionCard>
      </div>
    </div>
  );
}
