import { createFileRoute } from "@tanstack/react-router";
import { LandingNavbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import {
  TrustedBy,
  Stats,
  Features,
  HowItWorks,
  ProductShowcase,
  WhyAttendify,
  AnalyticsSection,
  Modules,
} from "@/components/landing/sections";
import {
  Testimonials,
  Pricing,
  FAQ,
  CTA,
  Contact,
  Footer,
} from "@/components/landing/closing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Attendify — Smart Cloud Attendance Management System" },
      {
        name: "description",
        content:
          "Attendify is a premium cloud attendance platform for schools, colleges, and universities. Track attendance, manage classes, and generate reports in real time.",
      },
      { property: "og:title", content: "Attendify — Smart Cloud Attendance Management" },
      {
        property: "og:description",
        content:
          "Premium cloud attendance management with real-time analytics and role-based dashboards.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="bg-background">
      <LandingNavbar />
      <main>
        <Hero />
        <TrustedBy />
        <Stats />
        <Features />
        <HowItWorks />
        <ProductShowcase />
        <WhyAttendify />
        <AnalyticsSection />
        <Modules />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
