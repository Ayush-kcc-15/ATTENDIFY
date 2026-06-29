import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Quote,
  Star,
  Twitter,
  Youtube,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Reveal } from "./primitives";
import { SectionHeading } from "./sections";

/* ---------------- Testimonials ------------------------------------ */

const testimonials = [
  {
    name: "Dr. Neha Bansal",
    role: "Dean, Northgate University",
    quote:
      "Attendify replaced three disconnected tools. Faculty adoption was instant and reporting now takes minutes, not days.",
    initials: "NB",
  },
  {
    name: "Rahul Chopra",
    role: "Lecturer, Riverside Institute",
    quote:
      "Taking attendance used to eat into class time. With Attendify it's a thirty-second task on my phone — every single session.",
    initials: "RC",
  },
  {
    name: "Priya Patel",
    role: "Student, Crestview College",
    quote:
      "I can finally see my attendance percentage and apply for leave without chasing anyone. The interface is genuinely beautiful.",
    initials: "PP",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  const t = testimonials[index];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by educators and students alike"
          subtitle="Institutions of every size trust Attendify to run attendance."
        />
        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card sm:p-12">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Quote className="h-9 w-9 text-primary/30" />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="mt-5 text-lg font-medium leading-relaxed sm:text-xl">
                  "{t.quote}"
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-chart-5 text-sm font-semibold text-primary-foreground">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      i === index ? "w-6 bg-primary" : "w-2 bg-border",
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-xl" onClick={() => go(-1)} aria-label="Previous">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-xl" onClick={() => go(1)} aria-label="Next">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Pricing ----------------------------------------- */

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    desc: "For small classes getting started.",
    features: ["Up to 100 students", "2 teacher accounts", "Basic reports", "Email support"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "/mo",
    desc: "For growing institutions.",
    features: [
      "Up to 2,000 students",
      "Unlimited teachers",
      "Advanced analytics",
      "CSV / Excel / PDF export",
      "Priority support",
    ],
    cta: "Start trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For universities and districts.",
    features: [
      "Unlimited students",
      "SSO & audit logs",
      "Dedicated success manager",
      "Custom integrations",
      "99.9% SLA",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-border bg-card/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          subtitle="Choose the plan that fits your institution. Upgrade anytime."
        />
        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className={cn(p.highlighted && "lg:-mt-4 lg:mb-4")}>
              <Card
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-7",
                  p.highlighted
                    ? "border-primary shadow-lifted ring-2 ring-primary"
                    : "shadow-soft",
                )}
              >
                {p.highlighted && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    <Star className="h-3 w-3 fill-current" /> Most popular
                  </span>
                )}
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.period}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={p.highlighted ? "default" : "outline"}
                  className="mt-7 rounded-xl"
                >
                  <Link to="/register">{p.cta}</Link>
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ --------------------------------------------- */

const faqs = [
  { q: "Do I need to install anything?", a: "No. Attendify is fully cloud-based and works in any modern browser on desktop, tablet, and mobile." },
  { q: "Can students see their own attendance?", a: "Yes. Every student gets a personal dashboard with attendance percentage, calendar, and subject breakdowns." },
  { q: "Is my data secure?", a: "Attendance data is stored on enterprise-grade cloud infrastructure with role-based access control and encryption." },
  { q: "Can I export reports?", a: "Absolutely. Reports can be exported to CSV, Excel, and PDF, and printed directly from the dashboard." },
  { q: "Does it support multiple roles?", a: "Yes — Attendify ships with dedicated admin, teacher, and student experiences out of the box." },
  { q: "Can I try it before committing?", a: "The Starter plan is free forever, and Professional comes with a no-card-required trial." },
];

export function FAQ() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know about Attendify."
        />
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CTA --------------------------------------------- */

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center shadow-lifted sm:px-12">
            <div className="absolute inset-0 gradient-mesh opacity-40" />
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to modernize attendance?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/85">
                Join 250+ institutions already running attendance on Attendify.
                Get started in minutes — no credit card required.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" variant="secondary" asChild className="group rounded-xl">
                  <Link to="/register">
                    Start Free
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="rounded-xl border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Link to="/login">Request Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contact ----------------------------------------- */

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@attendify.io" },
  { icon: Phone, label: "Phone", value: "+1 (555) 014-2200" },
  { icon: MapPin, label: "Office", value: "100 Cloud Avenue, Suite 420, San Francisco, CA" },
];

const socials = [Twitter, Linkedin, Github, Youtube];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Contact
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions or want a guided demo? Our team typically replies
              within one business day.
            </p>
            <div className="mt-8 space-y-4">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="text-sm font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-3xl border border-border">
              <div className="relative h-48 bg-muted">
                <div className="absolute inset-0 hero-grid opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-soft">
                    <MapPin className="h-4 w-4 text-primary" /> 100 Cloud Avenue, San Francisco
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <Card className="rounded-3xl p-6 shadow-card sm:p-8">
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Message sent! We'll be in touch shortly.");
                  (e.target as HTMLFormElement).reset();
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Name</label>
                    <Input required placeholder="Jane Doe" className="rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Email</label>
                    <Input required type="email" placeholder="jane@school.edu" className="rounded-xl" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Institution</label>
                  <Input placeholder="Northgate University" className="rounded-xl" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    required
                    placeholder="Tell us about your needs..."
                    className="min-h-32 rounded-xl"
                  />
                </div>
                <Button type="submit" className="w-full rounded-xl">
                  Send message
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ------------------------------------------ */

const footerCols = [
  { title: "Product", links: ["Features", "Pricing", "Modules", "Analytics"] },
  { title: "Resources", links: ["Documentation", "Guides", "API Status", "Changelog"] },
  { title: "Company", links: ["About", "Careers", "Contact", "Blog"] },
  { title: "Legal", links: ["Privacy Policy", "Terms", "Security", "Cookies"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Smart cloud attendance management for modern institutions — built
              for admins, teachers, and students.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {footerCols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Attendify. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <Cloud className="h-4 w-4 text-primary" /> Powered by cloud technology
          </p>
        </div>
      </div>
    </footer>
  );
}