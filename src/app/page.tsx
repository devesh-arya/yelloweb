import type { Metadata } from "next";
import { HeroSection, TrustedPartners, WhoWeAre, ServicesSection, PortfolioSection, TestimonialsSection } from "@/components/sections";
import { CTABanner } from "@/components/sections/CTABanner";
import { Footer }    from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Yelloweb — Full-Stack Web Development",
  description: "Purpose-driven digital experiences. Accessible, engaging, responsive, and SEO-optimized websites.",
};

export default function Home() {
  return <>
    <HeroSection />
    <TrustedPartners />
    <WhoWeAre />
    <ServicesSection />
    <PortfolioSection />
    <TestimonialsSection />
    <CTABanner title="Ready to build something" em="meaningful?" cta="Start the Conversation" variant="amber" />
    <Footer />
  </>;
}
