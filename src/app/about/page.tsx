import type { Metadata } from "next";
import { FadeUp, StaggerContainer, StaggerItem, DrawLine } from "@/components/ui/Motion";
import { CTABanner } from "@/components/sections/CTABanner";
import { Footer } from "@/components/layout/Footer";
export const metadata: Metadata = { title:"Who We Are", description:"Learn about Yelloweb — our philosophy, team, and approach." };
export default function AboutPage() {
  return <>
    <section className="px-8 lg:px-16 pt-40 pb-16 bg-canvas-2 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-y-400/6 rounded-full blur-3xl pointer-events-none" />
      <FadeUp className="section-tag mb-4">Who We Are</FadeUp>
      <FadeUp delay={0.1}><h1 className="font-serif text-[clamp(3rem,6vw,5rem)] font-light text-teal max-w-[700px] leading-tight">Built on <em className="shimmer-text not-italic">listening</em>, driven by craft</h1></FadeUp>
      <DrawLine delay={0.3} className="mt-6 mb-4 max-w-xs" color="bg-y-gradient" />
      <FadeUp delay={0.2} className="max-w-[520px] text-lg text-ink/55 leading-relaxed">We're a full-stack web development studio that believes the best digital experiences begin long before a line of code is written.</FadeUp>
    </section>
    <section className="px-8 lg:px-16 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 bg-white">
      <div>
        <FadeUp className="section-tag mb-4">Our Philosophy</FadeUp>
        <FadeUp delay={0.1} as="h2" className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light text-teal mb-6">"Every project begins with <em className="shimmer-text not-italic">listening</em>"</FadeUp>
        <FadeUp delay={0.2} className="section-body mb-6">We take the time to understand your goals, your audience, and the values that shape your organization. From there, we collaborate closely to design and develop a website that authentically reflects who you are.</FadeUp>
        <FadeUp delay={0.25} className="section-body">We don't believe in templates. Every project is built from first principles.</FadeUp>
      </div>
      <div>
        <FadeUp className="section-tag mb-4">Our Foundations</FadeUp>
        <FadeUp delay={0.1} as="h2" className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light text-teal mb-6">What we're <em className="shimmer-text not-italic">built</em> on</FadeUp>
        <StaggerContainer>
          {["Collaboration — your voice shapes every decision","Transparency — no surprises, ever","Data-informed design decisions","Continuous improvement post-launch"].map(p => (
            <StaggerItem key={p} className="py-3 border-b border-border last:border-b-0">
              <p className="text-sm text-ink/70 flex items-center gap-3 before:block before:w-6 before:h-0.5 before:bg-y-gradient before:shrink-0">{p}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
    <CTABanner title="Want to see how we'd approach" em="your project?" cta="Request a Quote" href="/contact" variant="teal" />
    <Footer />
  </>;
}
