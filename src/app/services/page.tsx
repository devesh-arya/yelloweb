import type { Metadata } from "next";
import { SERVICES } from "@/lib/data";
import { FadeUp, StaggerContainer, HoverCard, StaggerItem, DrawLine } from "@/components/ui/Motion";
import { CTABanner } from "@/components/sections/CTABanner";
import { Footer } from "@/components/layout/Footer";
import TextFillAnimation from "@/components/ui/TextFillAnimation";
export const metadata: Metadata = { title:"Services", description:"Full-stack web development services." };
export default function ServicesPage() {
  return <>
    <section className="px-8 lg:px-16 pt-40 pb-16 bg-canvas-2 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
      <FadeUp className="section-tag mb-4">What We Do</FadeUp>
      <FadeUp delay={0.1}><h1 className="font-serif text-[clamp(3rem,6vw,5rem)] font-semibold text-teal max-w-[700px] leading-tight">Full-stack capability, <TextFillAnimation>end to end</TextFillAnimation> </h1></FadeUp>
      <DrawLine delay={0.3} className="mt-6 mb-4 max-w-xs" color="bg-y-gradient" />
      <FadeUp delay={0.2} className="max-w-[520px] text-lg text-ink-body leading-relaxed">Five core disciplines. One integrated studio.</FadeUp>
    </section>
    <section className="px-8 lg:px-16 py-32 bg-white">
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map(s => (
          <StaggerItem key={s.title}>
            <HoverCard className="h-full bg-white border border-border p-10 group">
              <div className="font-serif text-5xl font-light text-tealmb-6 group-hover:text-teal/40 transition-colors">{s.number}</div>
              <div className="w-8 h-0.5 bg-y-gradient mb-4 group-hover:w-14 transition-all duration-500 rounded-full" />
              <h3 className="font-serif text-2xl font-normal mb-4 text-teal">{s.title}</h3>
              <p className="text-sm text-ink-body leading-relaxed">{s.description}</p>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
    <CTABanner title="Ready to talk about" em="your project?" cta="Request a Quote" variant="amber" />
    <Footer />
  </>;
}
