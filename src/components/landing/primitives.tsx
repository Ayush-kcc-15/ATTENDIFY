import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Stagger container + item ----------------------------------------- */

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Animated counter                                                    */
/* ------------------------------------------------------------------ */

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Animated gradient mesh background                                   */
/* ------------------------------------------------------------------ */

export function GradientBackdrop({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 gradient-mesh opacity-70" />
      <motion.div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-32 h-80 w-80 rounded-full bg-chart-5/25 blur-3xl"
        animate={{ y: [0, 28, 0], x: [0, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-chart-3/20 blur-3xl"
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* Floating decorative geometric shapes ----------------------------- */

export function FloatingShapes() {
  const shapes = [
    { className: "left-[8%] top-[18%] h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20", dur: 9 },
    { className: "right-[12%] top-[28%] h-10 w-10 rounded-full bg-chart-3/15 border border-chart-3/25", dur: 11 },
    { className: "left-[18%] bottom-[14%] h-12 w-12 rounded-xl bg-chart-5/12 border border-chart-5/20", dur: 13 },
    { className: "right-[20%] bottom-[22%] h-8 w-8 rounded-lg bg-warning/15 border border-warning/25", dur: 10 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className={cn("absolute backdrop-blur-sm", s.className)}
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
        />
      ))}
    </div>
  );
}