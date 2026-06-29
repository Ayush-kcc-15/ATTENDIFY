import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  CalendarCheck,
  CalendarDays,
  Check,
  Cloud,
  Download,
  FileBarChart,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  Layers,
  Plane,
  RefreshCw,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  StatusPieChart,
  StudentMonthlyChart,
  TrendAreaChart,
  WeeklyAttendanceChart,
} from "@/components/charts/dashboard-charts";
import { cn } from "@/lib/utils";
import {
  AnimatedCounter,
  Reveal,
  StaggerGroup,
  staggerItem,
} from "./primitives";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        <Sparkles className="h-3 w-3" /> {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}

/* ---------------- Trusted by --------------------------------------- */

const institutions = [
  { name: "Northgate University", tag: "University" },
  { name: "Crestview College", tag: "College" },
  { name: "Meridian School", tag: "School" },
  { name: "Riverside Institute", tag: "Institute" },
  { name: "Summit Academy", tag: "Academy" },
  { name: "Vanguard University", tag: "University" },
];

export function TrustedBy() {
  const row = [...institutions, ...institutions];
  return (
    <section className="border-y border-border bg-card/40 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium text-muted-foreground">
            Trusted by educational institutions worldwide.
          </p>
        </Reveal>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {row.map((inst, i) => (
              <div
                key={`${inst.name}-${i}`}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-soft"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div className="text-left">
                  <p className="whitespace-nowrap text-sm font-semibold">{inst.name}</p>
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                    {inst.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ------------------------------------------- */

const stats = [
  { value: 10000, suffix: "+", label: "Students" },
  { value: 500, suffix: "+", label: "Teachers" },
  { value: 98, suffix: "%", label: "Attendance Accuracy" },
  { value: 250, suffix: "+", label: "Institutions" },
];

export function Stats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerGroup className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={staggerItem}
              className="rounded-3xl border border-border bg-card p-7 text-center shadow-soft"
            >
              <p className="text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- Features ---------------------------------------- */

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Cloud, title: "Cloud Based", desc: "Always-available records backed by enterprise-grade cloud infrastructure." },
  { icon: CalendarCheck, title: "Real-Time Attendance", desc: "Mark present, absent, late, or leave in seconds across every class." },
  { icon: ShieldCheck, title: "Secure Authentication", desc: "Encrypted, role-based access with least-privilege defaults." },
  { icon: LayoutDashboard, title: "Role-Based Dashboards", desc: "Dedicated experiences for admins, teachers, and students." },
  { icon: BarChart3, title: "Detailed Analytics", desc: "Real-time dashboards revealing trends, gaps, and performance." },
  { icon: Download, title: "Export Reports", desc: "Export to CSV, Excel, or PDF for audits and compliance." },
  { icon: Plane, title: "Leave Management", desc: "Submit, review, and approve leave requests in one flow." },
  { icon: Bell, title: "Notifications", desc: "Instant alerts for attendance, leave decisions, and announcements." },
  { icon: CalendarDays, title: "Attendance Calendar", desc: "Visual monthly calendar of presence at a glance." },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to run attendance"
          subtitle="A complete toolkit designed for institutions that care about detail."
        />
        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div key={f.title} variants={staggerItem}>
              <Card className="group h-full rounded-3xl p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-chart-5 text-primary-foreground shadow-lifted">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </Card>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- How it works ------------------------------------ */

const steps = [
  { icon: Layers, title: "Create Organization", desc: "Set up your institution workspace in minutes." },
  { icon: Users, title: "Add Teachers & Students", desc: "Invite faculty and enroll students with ease." },
  { icon: CalendarCheck, title: "Take Attendance", desc: "Teachers mark attendance from any device, instantly." },
  { icon: FileBarChart, title: "Generate Reports", desc: "Produce shareable insights with a single click." },
];

export function HowItWorks() {
  return (
    <section id="solutions" className="border-y border-border bg-card/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From setup to insight in four steps"
          subtitle="Attendify is designed to get your institution running fast."
        />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          <StaggerGroup className="grid gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div key={s.title} variants={staggerItem} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-chart-5 text-primary-foreground shadow-lifted">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="mt-4 inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-primary">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Product showcase -------------------------------- */

const showcases = {
  Admin: {
    url: "app.attendify.io/admin",
    render: () => (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { l: "Students", v: "1,362" },
            { l: "Teachers", v: "84" },
            { l: "Avg. Rate", v: "94%" },
          ].map((c) => (
            <div key={c.l} className="rounded-2xl border border-border bg-background/60 p-4">
              <p className="text-xs text-muted-foreground">{c.l}</p>
              <p className="mt-1 text-xl font-bold">{c.v}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border bg-background/60 p-4">
          <p className="text-xs font-medium text-muted-foreground">Weekly attendance</p>
          <div className="mt-2 h-44"><WeeklyAttendanceChart /></div>
        </div>
      </div>
    ),
  },
  Teacher: {
    url: "app.attendify.io/teacher",
    render: () => (
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-background/60 p-4 sm:col-span-2">
          <p className="text-xs font-medium text-muted-foreground">Monthly trend</p>
          <div className="mt-2 h-40"><TrendAreaChart /></div>
        </div>
        <div className="rounded-2xl border border-border bg-background/60 p-4">
          <p className="text-xs text-muted-foreground">Classes today</p>
          <p className="mt-1 text-2xl font-bold">5</p>
        </div>
        <div className="rounded-2xl border border-border bg-background/60 p-4">
          <p className="text-xs text-muted-foreground">Pending leaves</p>
          <p className="mt-1 text-2xl font-bold">3</p>
        </div>
      </div>
    ),
  },
  Student: {
    url: "app.attendify.io/student",
    render: () => (
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-background/60 p-4">
          <p className="text-xs text-muted-foreground">My attendance</p>
          <p className="mt-1 text-2xl font-bold text-gradient">96%</p>
        </div>
        <div className="rounded-2xl border border-border bg-background/60 p-4">
          <p className="text-xs text-muted-foreground">Classes attended</p>
          <p className="mt-1 text-2xl font-bold">112 / 117</p>
        </div>
        <div className="rounded-2xl border border-border bg-background/60 p-4 sm:col-span-2">
          <p className="text-xs font-medium text-muted-foreground">Monthly breakdown</p>
          <div className="mt-2 h-40"><StudentMonthlyChart /></div>
        </div>
      </div>
    ),
  },
};

type ShowcaseKey = keyof typeof showcases;

export function ProductShowcase() {
  const [active, setActive] = useState<ShowcaseKey>("Admin");
  const current = showcases[active];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product"
          title="One platform, three tailored experiences"
          subtitle="Switch between dashboards built for every role in your institution."
        />
        <Reveal className="mt-10 flex justify-center">
          <div className="inline-flex rounded-2xl border border-border bg-card p-1 shadow-soft">
            {(Object.keys(showcases) as ShowcaseKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={cn(
                  "relative rounded-xl px-5 py-2 text-sm font-medium transition-colors",
                  active === key
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === key && (
                  <motion.span
                    layoutId="showcase-pill"
                    className="absolute inset-0 rounded-xl bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{key}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-4xl">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary/15 via-chart-5/10 to-chart-3/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-destructive/60" />
                <span className="h-3 w-3 rounded-full bg-warning/60" />
                <span className="h-3 w-3 rounded-full bg-success/60" />
                <span className="ml-3 text-xs text-muted-foreground">{current.url}</span>
              </div>
              <div className="p-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {current.render()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Why Attendify ----------------------------------- */

const benefits = [
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Reliable, redundant, and always available." },
  { icon: Gauge, title: "Scalable & Fast", desc: "From a single class to an entire district." },
  { icon: Shield, title: "Secure", desc: "Encryption and role-based access by default." },
  { icon: Sparkles, title: "Modern UI", desc: "A polished, intuitive interface people love." },
  { icon: Zap, title: "Easy to Use", desc: "Take attendance in seconds, no training needed." },
  { icon: LayoutDashboard, title: "Enterprise Ready", desc: "SSO, audit logs, and a 99.9% uptime SLA." },
];

export function WhyAttendify() {
  return (
    <section id="about" className="border-y border-border bg-card/40 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal direction="right">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Why Attendify
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Built for institutions that demand more
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Attendify combines enterprise reliability with a delightfully simple
            experience — so every role gets exactly what they need.
          </p>
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-background p-6">
            <div className="absolute inset-0 gradient-mesh opacity-50" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card/80 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-gradient">99.9%</p>
                <p className="text-xs text-muted-foreground">Uptime SLA</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/80 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-gradient">&lt; 30s</p>
                <p className="text-xs text-muted-foreground">To mark a class</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/80 p-4 backdrop-blur">
                <p className="inline-flex items-center gap-1 text-sm font-semibold text-success">
                  <RefreshCw className="h-3.5 w-3.5" /> Real-time
                </p>
                <p className="text-xs text-muted-foreground">Cloud sync</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/80 p-4 backdrop-blur">
                <p className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" /> SOC-ready
                </p>
                <p className="text-xs text-muted-foreground">Security posture</p>
              </div>
            </div>
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <motion.div key={b.title} variants={staggerItem}>
              <Card className="group h-full rounded-3xl p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{b.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.desc}</p>
              </Card>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- Analytics --------------------------------------- */

export function AnalyticsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Analytics"
          title="Insights that move with your institution"
          subtitle="Beautiful, responsive charts updated in real time across every metric."
        />
        <StaggerGroup className="mt-16 grid gap-5 lg:grid-cols-3">
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <Card className="h-full rounded-3xl p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Attendance trend</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
                  <Check className="h-3 w-3" /> +6% YoY
                </span>
              </div>
              <div className="mt-2 h-64"><TrendAreaChart /></div>
            </Card>
          </motion.div>
          <motion.div variants={staggerItem}>
            <Card className="h-full rounded-3xl p-5 shadow-soft">
              <p className="text-sm font-medium">Status breakdown</p>
              <div className="mt-2 h-64"><StatusPieChart /></div>
            </Card>
          </motion.div>
          <motion.div variants={staggerItem}>
            <Card className="h-full rounded-3xl p-5 shadow-soft">
              <p className="text-sm font-medium">Class performance</p>
              <div className="mt-2 h-56"><WeeklyAttendanceChart /></div>
            </Card>
          </motion.div>
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <Card className="h-full rounded-3xl p-5 shadow-soft">
              <p className="text-sm font-medium">Monthly growth</p>
              <div className="mt-2 h-56"><StudentMonthlyChart /></div>
            </Card>
          </motion.div>
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- Modules ----------------------------------------- */

const modules: { icon: LucideIcon; title: string }[] = [
  { icon: Users, title: "Student Management" },
  { icon: GraduationCap, title: "Teacher Management" },
  { icon: CalendarCheck, title: "Attendance" },
  { icon: FileBarChart, title: "Reports" },
  { icon: Bell, title: "Notifications" },
  { icon: Plane, title: "Leave Management" },
  { icon: BarChart3, title: "Analytics" },
  { icon: Settings, title: "Settings" },
];

export function Modules() {
  return (
    <section className="border-y border-border bg-card/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Modules"
          title="A module for every part of your workflow"
          subtitle="Everything is included — no add-ons, no surprises."
        />
        <StaggerGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <motion.div key={m.title} variants={staggerItem}>
              <Card className="group flex h-full items-center gap-3 rounded-2xl p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-chart-5 text-primary-foreground">
                  <m.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold">{m.title}</span>
              </Card>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
