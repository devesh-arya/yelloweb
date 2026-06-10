import type { Metadata } from "next";
import { FadeUp, DrawLine } from "@/components/ui/Motion";
import { IndustriesList } from "@/components/sections";
import { CTABanner } from "@/components/sections/CTABanner";
import { Footer } from "@/components/layout/Footer";
export const metadata: Metadata = { title:"Industries", description:"Deep sector expertise across 40+ industries." };
export default function IndustriesPage() {
  return <>
    <section className="px-8 lg:px-16 pt-40 pb-16 bg-canvas-2 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
      <FadeUp className="section-tag mb-4">Industries</FadeUp>
      <FadeUp delay={0.1}><h1 className="font-serif text-[clamp(3rem,6vw,5rem)] font-light text-teal max-w-[700px] leading-tight">Deep sector <em className="shimmer-text not-italic">expertise</em></h1></FadeUp>
      <DrawLine delay={0.3} className="mt-6 mb-4 max-w-xs" color="bg-y-gradient" />
      <FadeUp delay={0.2} className="max-w-[520px] text-lg text-ink/55 leading-relaxed">We've built for organizations across more than 40 industries.</FadeUp>
    </section>
    <IndustriesList />
    <CTABanner title="Your industry, our" em="expertise" cta="Let's Talk" variant="amber" />
    <Footer />
  </>;
}
