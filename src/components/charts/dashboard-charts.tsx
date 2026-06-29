import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  monthlyTrend,
  statusBreakdown,
  weeklyAttendance,
  studentMonthly,
} from "@/data/sample";

const axisStyle = { fontSize: 12, fill: "var(--color-muted-foreground)" };
const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid var(--color-border)",
  background: "var(--color-popover)",
  color: "var(--color-popover-foreground)",
  fontSize: 12,
  boxShadow: "var(--shadow-card)",
};

export function WeeklyAttendanceChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={weeklyAttendance} barGap={6}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
        <XAxis dataKey="day" tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} width={32} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "var(--color-muted)" }} />
        <Bar dataKey="present" fill="var(--color-chart-1)" radius={[6, 6, 0, 0]} />
        <Bar dataKey="absent" fill="var(--color-chart-5)" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function StatusPieChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={statusBreakdown}
          dataKey="value"
          nameKey="name"
          innerRadius={64}
          outerRadius={100}
          paddingAngle={3}
          stroke="none"
        >
          {statusBreakdown.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} />
        <Legend
          iconType="circle"
          wrapperStyle={{ fontSize: 12, color: "var(--color-muted-foreground)" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function TrendAreaChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={monthlyTrend}>
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.35} />
            <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
        <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} width={32} domain={[60, 100]} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area
          type="monotone"
          dataKey="rate"
          stroke="var(--color-chart-1)"
          strokeWidth={2.5}
          fill="url(#trendFill)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function StudentMonthlyChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={studentMonthly}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
        <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} width={32} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line type="monotone" dataKey="present" stroke="var(--color-chart-3)" strokeWidth={2.5} dot={false} />
        <Line type="monotone" dataKey="absent" stroke="var(--color-chart-5)" strokeWidth={2.5} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}