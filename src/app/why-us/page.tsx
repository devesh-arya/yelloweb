import type { Metadata } from "next";
import { STATS } from "@/lib/data";
import { FadeUp, SlideIn, StaggerContainer, StaggerItem, DrawLine } from "@/components/ui/Motion";
import { WhyUsGrid } from "@/components/sections";
import { CTABanner } from "@/components/sections/CTABanner";
import { Footer } from "@/components/layout/Footer";
export const metadata: Metadata = { title:"Why Us", description:"What sets Yelloweb apart." };
export default function WhyUsPage() {
  return <>
    <section className="px-8 lg:px-16 pt-40 pb-16 bg-canvas-2 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-y-400/6 rounded-full blur-3xl pointer-events-none" />
      <FadeUp className="section-tag mb-4">Why Us</FadeUp>
      <FadeUp delay={0.1}><h1 className="font-serif text-[clamp(3rem,6vw,5rem)] font-light text-teal max-w-[700px] leading-tight">We build differently — <em className="shimmer-text not-italic">on purpose</em></h1></FadeUp>
      <DrawLine delay={0.3} className="mt-6 mb-4 max-w-xs" color="bg-y-gradient" />
      <FadeUp delay={0.2} className="max-w-[520px] text-lg text-ink/55 leading-relaxed">The market is full of studios who can write code. What sets us apart is the depth with which we engage with your goals.</FadeUp>
    </section>
    <WhyUsGrid />
    <section className="px-8 lg:px-16 py-24 border-t border-border bg-white">
      <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map(s => (
          <StaggerItem key={s.label} className="text-center">
            <div className="font-serif text-5xl font-light text-teal leading-none mb-2">{s.value}</div>
            <div className="text-xs tracking-[0.15em] uppercase text-ink/40">{s.label}</div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
    <CTABanner title="We'd love to show you the" em="difference" cta="Start a Conversation" variant="teal" />
    <Footer />
  </>;
}
