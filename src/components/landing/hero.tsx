import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Cloud,
  PlayCircle,
  RefreshCw,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrendAreaChart, WeeklyAttendanceChart } from "@/components/charts/dashboard-charts";
import { GradientBackdrop, FloatingShapes } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-32 lg:pt-40">
      <GradientBackdrop />
      <FloatingShapes />
      <div className="absolute inset-0 hero-grid opacity-[0.18]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Smart Cloud Attendance Management System
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Attendance management,{" "}
            <span className="text-gradient">reimagined for the cloud.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Attendify helps schools, colleges, universities, and institutions
            manage attendance with powerful cloud technology, real-time
            analytics, and role-based dashboards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" asChild className="group rounded-xl shadow-lifted">
              <Link to="/register">
                Get Started
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl backdrop-blur">
              <PlayCircle className="mr-1.5 h-4 w-4" /> Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-10 flex items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {["AS", "PP", "RM", "IG"].map((n, i) => (
                <span
                  key={n}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-secondary text-[10px] font-semibold text-primary"
                  style={{ zIndex: 10 - i }}
                >
                  {n}
                </span>
              ))}
            </div>
            <span>Trusted by 250+ institutions worldwide</span>
          </motion.div>
        </div>

        {/* Right — dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/20 via-chart-5/10 to-chart-3/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/90 shadow-card backdrop-blur">
            <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/60" />
              <span className="h-3 w-3 rounded-full bg-warning/60" />
              <span className="h-3 w-3 rounded-full bg-success/60" />
              <span className="ml-3 text-xs text-muted-foreground">app.attendify.io/admin</span>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-medium text-success">
                <RefreshCw className="h-2.5 w-2.5 animate-spin" style={{ animationDuration: "3s" }} />
                Synced
              </span>
            </div>

            <div className="space-y-4 p-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-background/60 p-4">
                  <p className="text-xs text-muted-foreground">Attendance Rate</p>
                  <p className="mt-1 text-2xl font-bold">94.2%</p>
                  <p className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-medium text-success">
                    <TrendingUp className="h-3 w-3" /> +2.4% this week
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-background/60 p-4">
                  <p className="text-xs text-muted-foreground">Present Today</p>
                  <p className="mt-1 text-2xl font-bold">1,284</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">of 1,362 students</p>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-xs font-medium text-muted-foreground">Weekly attendance</p>
                <div className="mt-2 h-28"><WeeklyAttendanceChart /></div>
              </div>
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-xs font-medium text-muted-foreground">Monthly trend</p>
                <div className="mt-2 h-20"><TrendAreaChart /></div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            className="absolute -left-6 top-24 hidden w-44 rounded-2xl border border-border bg-card/95 p-3.5 shadow-card backdrop-blur sm:block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-success/15 text-success">
                <CalendarCheck className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold">+312</p>
                <p className="text-xs text-muted-foreground">Marked present</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-6 bottom-28 hidden w-48 rounded-2xl border border-border bg-card/95 p-3.5 shadow-card backdrop-blur sm:block"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary">
                <Users className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold">Aarav Sharma</p>
                <p className="text-xs text-muted-foreground">96% attendance</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-5 left-10 hidden items-center gap-2 rounded-full border border-border bg-card/95 px-3.5 py-2 shadow-card backdrop-blur lg:flex"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Cloud className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium">Cloud sync complete</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}