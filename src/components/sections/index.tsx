"use client";
// src/components/sections/index.tsx

import Link from "next/link";
import {
  FadeUp, SlideIn, ScaleIn,
  StaggerContainer, StaggerItem,
  DrawLine, CountUp, HoverCard,
} from "@/components/ui/Motion";
import {
  TRUSTED_PARTNERS, STATS, SERVICES,
  PORTFOLIO, TESTIMONIALS, INDUSTRIES, WHY_US,
} from "@/lib/data";

// ── Hero ──────────────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center px-8 lg:px-16 pt-32 pb-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >

      <FadeUp>
        <span className="badge-teal mb-6 inline-flex">
          Full-Stack Web Development Studio
        </span>
      </FadeUp>

      <FadeUp delay={0.12}>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,90px)] font-medium leading-[1.04] max-w-[860px] mb-8 text-teal">          Building Websites
          <br />
          with <em className="shimmer-text not-italic">Purpose</em>
        </h1>
      </FadeUp>

      <FadeUp delay={0.22}>
        <DrawLine delay={0.5} className="w-24 mb-8" color="bg-y-gradient" />
      </FadeUp>

      <FadeUp
        delay={0.28}
        className="max-w-[500px] text-[1.06rem] text-ink/55 leading-[1.82] mb-12"
      >
        Creating purpose-driven digital experiences — accessible, engaging,
        responsive, and SEO-optimized.
      </FadeUp>

      <FadeUp delay={0.4} className="flex flex-wrap items-center gap-6">
        <Link href="/contact" className="btn-primary">
          Request a Quote
        </Link>
        <Link href="/about" className="btn-ghost">
          Who We Are
        </Link>
      </FadeUp>
    </section>
  );
}

// ── Trusted Partners ──────────────────────────────────────────────────────
export function TrustedPartners() {
  const items = [...TRUSTED_PARTNERS, ...TRUSTED_PARTNERS, ...TRUSTED_PARTNERS, ...TRUSTED_PARTNERS];
  return (
    <section className="py-10 border-t border-b border-border bg-canvas-2 overflow-hidden">
      <FadeUp className="section-tag text-center mb-6">Trusted Partners & Clients</FadeUp>
      <div className="relative flex overflow-hidden">
        {/* left fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-canvas-2 to-transparent z-10 pointer-events-none" />
        {/* right fade */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-canvas-2 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-16 animate-marquee shrink-0 pr-16">
          {items.map((p, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0 group cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-y-400/50 group-hover:bg-y-500 transition-colors" />
              <div>
                <div className="font-semibold text-teal/50 group-hover:text-teal/80 transition-colors whitespace-nowrap text-sm">{p.name}</div>
                <div className="text-[0.6rem] tracking-[0.14em] uppercase text-ink/25 group-hover:text-ink/45 transition-colors">{p.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Who We Are ────────────────────────────────────────────────────────────
export function WhoWeAre() {
  return (
    <section className="px-8 lg:px-16 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 bg-white items-start">
      <div>
        <FadeUp className="section-tag mb-5">Who We Are</FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="section-title font-medium  text-[clamp(2.2rem,4vw,3.5rem)]">
            "Every project begins with{" "}
            <em className="shimmer-text not-italic">listening</em>"
          </h2>
        </FadeUp>
        <FadeUp delay={0.2} className="section-body mb-6">
          We take the time to understand your goals, your audience, and the values that shape your organization. From there, we collaborate closely to design and develop a website that authentically reflects who you are.
        </FadeUp>
        <FadeUp delay={0.25} className="section-body mb-8">Our teams and processes are built on:</FadeUp>
        <StaggerContainer stagger={0.08}>
          {["Collaboration","Transparency","Data-informed design decisions","Continuous improvement"].map(p => (
            <StaggerItem key={p} className="py-3.5 border-b border-border last:border-b-0">
              <p className="text-sm text-ink/70 flex items-center gap-3">
                <span className="w-6 h-0.5 bg-y-gradient shrink-0 block rounded-full" />
                {p}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeUp delay={0.55} className="mt-10">
          <Link href="/contact" className="btn-primary">Request a Quote</Link>
        </FadeUp>
      </div>

      {/* Stats — teal bordered card */}
      <SlideIn direction="right" delay={0.15}>
        <div className="bg-teal-gradient p-1 shadow-teal-lg">
          <div className="bg-white p-8 lg:p-10">
            <StaggerContainer stagger={0.1} className="divide-y divide-border">
              {STATS.map(s => (
                <StaggerItem key={s.label} className="py-7 first:pt-0 last:pb-0">
                  <div className="font-serif text-5xl font-light text-teal leading-none mb-1">
                    <CountUp end={parseInt(s.value.replace(/\D/g,""))} suffix={s.value.replace(/[0-9]/g,"")} />
                  </div>
                  <div className="text-[0.75rem] tracking-[0.15em] uppercase text-ink/40">{s.label}</div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </SlideIn>
    </section>
  );
}

// ── Services ──────────────────────────────────────────────────────────────
export function ServicesSection() {
  return (
    <section className="px-8 lg:px-16 py-32 bg-canvas-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-y-stripe pointer-events-none opacity-50" />
      <div className="relative max-w-[640px] mx-auto text-center mb-16">
        <FadeUp className="section-tag mb-4">What We Do</FadeUp>
        <FadeUp delay={0.1} as="h2" className="section-title font-medium text-[clamp(2.2rem,4vw,3.5rem)]">
          Full-stack capability,{" "}
          <em className="shimmer-text not-italic">end to end</em>
        </FadeUp>
        <FadeUp delay={0.2} className="section-body mt-4">
          From initial discovery to launch — every layer of the digital stack, covered.
        </FadeUp>
      </div>
      <StaggerContainer stagger={0.07} className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map(s => (
          <StaggerItem key={s.title}>
            <HoverCard className="h-full bg-white border border-border p-8 group">
              <div className="font-serif text-5xl font-light text-teal/20 leading-none mb-5 group-hover:text-teal/40 transition-colors duration-300">{s.number}</div>
              <div className="w-8 h-0.5 bg-y-gradient mb-4 group-hover:w-16 transition-all duration-500 rounded-full" />
              <h3 className="font-serif text-xl font-normal mb-3 text-teal">{s.title}</h3>
              <p className="text-sm text-ink/50 leading-relaxed">{s.description}</p>
            </HoverCard>
          </StaggerItem>
        ))}
        <StaggerItem>
          <HoverCard className="h-full bg-teal-gradient p-8 flex items-center justify-center cursor-pointer min-h-[200px]">
            <Link href="/services" className="text-center">
              <div className="font-serif text-xl font-light text-white mb-2">View All Services</div>
              <div className="w-10 h-0.5 bg-y-400 mx-auto mb-2 rounded-full" />
              <div className="text-xs text-white/60 tracking-wider">Let's find the right solution</div>
            </Link>
          </HoverCard>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}

// ── Portfolio ─────────────────────────────────────────────────────────────
export function PortfolioSection() {
  return (
    <section className="px-8 lg:px-16 py-32 bg-canvas-2">
      <FadeUp className="section-tag mb-4">Case Studies</FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="section-title font-medium text-[clamp(2.2rem,4vw,3.5rem)] max-w-[640px]">
          Work that <em className="shimmer-text not-italic">speaks</em>
        </h2>
      </FadeUp>
      <DrawLine delay={0.3} className="mt-4 mb-12 max-w-xl" color="bg-y-gradient" />
      <StaggerContainer stagger={0.1} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {PORTFOLIO.map(item => (
          <StaggerItem key={item.title}>
            <HoverCard className={`bg-gradient-to-br ${item.bg} border border-border p-8 lg:p-12 flex flex-col justify-end aspect-video cursor-pointer group overflow-hidden relative`}>
              <div className="absolute inset-0 bg-teal opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-16 h-16 bg-y-400/15 group-hover:bg-y-400/30 transition-colors duration-300" />
              <p className="text-xs tracking-[0.16em] uppercase text-y-600 mb-2 font-semibold">{item.tag}</p>
              <h3 className="font-serif text-2xl lg:text-3xl font-light text-teal mb-2 group-hover:text-y-700 transition-colors duration-300">{item.title}</h3>
              <p className="text-sm text-ink/50 leading-relaxed">{item.description}</p>
              <div className="mt-4 flex items-center gap-2 text-y-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Case Study <span>→</span>
              </div>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────
export function TestimonialsSection() {
  return (
    <section className="py-32 overflow-hidden relative bg-canvas-3">
      <div className="absolute top-0 inset-x-0 h-px bg-y-gradient" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-y-gradient" />
      <div className="px-8 lg:px-16 relative">
        <div className="max-w-[640px] mx-auto text-center mb-16">
          <FadeUp className="section-tag mb-4">Client Voices</FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="section-title font-medium text-[clamp(2.2rem,4vw,3.5rem)]">
              What our partners <em className="shimmer-text not-italic">say</em>
            </h2>
          </FadeUp>
        </div>
        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(t => (
            <StaggerItem key={t.author}>
              <HoverCard className="relative bg-white border border-border shadow-card p-8 h-full flex flex-col">
                <div className="absolute top-4 right-6 font-serif text-7xl font-light text-y-400/20 leading-none select-none">"</div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_,si) => (
                    <svg key={si} className="w-3.5 h-3.5 fill-y-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-base text-ink/65 leading-relaxed italic mb-6 flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-8 h-8 rounded-full bg-teal-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-xs">{t.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-teal">{t.author}</p>
                    <p className="text-xs text-y-600">{t.role}, {t.company}</p>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── Industries ────────────────────────────────────────────────────────────
export function IndustriesList() {
  return (
    <section className="px-8 lg:px-16 py-32 max-w-[900px] mx-auto">
      {INDUSTRIES.map((ind, i) => (
        <FadeUp key={ind.name} delay={Math.min(i * 0.05, 0.4)}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 py-6 lg:py-7 border-b border-border last:border-b-0 group hover:pl-3 transition-all duration-300 cursor-default">
            <div className="flex items-start gap-4">
              <span className="font-serif text-2xl font-light text-y-400/50 group-hover:text-y-500 transition-colors shrink-0 w-8 leading-tight">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-xl lg:text-2xl font-light text-teal group-hover:text-y-700 transition-colors">{ind.name}</h3>
                <p className="text-sm text-ink/45 leading-relaxed mt-1 max-w-[480px]">{ind.description}</p>
              </div>
            </div>
            <div className="text-y-500 text-xl group-hover:translate-x-2 transition-transform ml-12 lg:ml-0">→</div>
          </div>
        </FadeUp>
      ))}
    </section>
  );
}

// ── Why Us ────────────────────────────────────────────────────────────────
export function WhyUsGrid() {
  return (
    <section className="px-8 lg:px-16 py-32 grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
      {WHY_US.map((item, i) => (
        <ScaleIn key={item.title} delay={Math.min(Math.floor(i / 2) * 0.1, 0.3)}>
          <HoverCard className="h-full bg-white p-10 lg:p-12 group">
            <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center text-xl text-teal mb-5">{item.icon}</div>
            <h3 className="font-serif text-xl font-normal mb-3 text-teal">{item.title}</h3>
            <p className="text-sm text-ink/50 leading-relaxed">{item.description}</p>
            <div className="mt-5 w-6 h-0.5 bg-y-gradient rounded-full group-hover:w-12 transition-all duration-500" />
          </HoverCard>
        </ScaleIn>
      ))}
    </section>
  );
}
