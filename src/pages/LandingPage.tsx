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

export default function LandingPage() {
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
