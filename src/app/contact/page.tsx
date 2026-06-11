"use client";
import { useState } from "react";
import { FadeUp, SlideIn, StaggerContainer, StaggerItem, DrawLine } from "@/components/ui/Motion";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
  };
  return <>
    <section className="px-8 lg:px-16 pt-40 pb-16 bg-canvas-2 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-y-400/8 rounded-full blur-3xl pointer-events-none" />
      <FadeUp className="section-tag mb-4">Inquiry</FadeUp>
      <FadeUp delay={0.1}><h1 className="font-serif text-[clamp(3rem,6vw,5rem)] font-light text-teal max-w-[700px] leading-tight">Let's build something <em className="shimmer-text not-italic">together</em></h1></FadeUp>
      <DrawLine delay={0.3} className="mt-6 mb-4 max-w-xs" color="bg-y-gradient" />
      <FadeUp delay={0.2} className="max-w-[520px] text-lg text-ink-body leading-relaxed">Tell us about your project. We'll respond within one business day.</FadeUp>
    </section>
    <section className="px-8 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white">
      <SlideIn direction="left" delay={0.1}>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            {[
              { label:"Your Name",     type:"text",  ph:"First and last name" },
              { label:"Organization",  type:"text",  ph:"Company or institution" },
              { label:"Email Address", type:"email", ph:"you@example.com" },
            ].map(f => (
              <div key={f.label}>
                <label className="block text-xs tracking-[0.15em] uppercase text-teal mb-2 font-semibold">{f.label}</label>
                <input type={f.type} required placeholder={f.ph} className="form-field" />
              </div>
            ))}
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-teal mb-2 font-semibold">Project Type</label>
              <select required className="form-field appearance-none cursor-pointer">
                <option value="" disabled>Select a service area</option>
                {["Web Development","API Integration","Cloud Solutions","Security Audit","Analytics Setup","Full-Service Engagement"].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-teal mb-2 font-semibold">Tell us about your project</label>
              <textarea required rows={5} placeholder="Goals, timeline, budget range, constraints — the more context, the better." className="form-field resize-none" />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "Sending…" : "Send Inquiry →"}
            </button>
          </form>
        ) : (
          <div className="bg-teal-light border border-teal/20 p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-teal-gradient flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="font-serif text-3xl font-light text-teal mb-2">Thank you</div>
            <p className="text-ink-body leading-relaxed">We'll respond within one business day.</p>
          </div>
        )}
      </SlideIn>
      <SlideIn direction="right" delay={0.15}>
        <StaggerContainer stagger={0.08}>
          {[
            { label:"Email",  value:"hello@yelloweb.co" },
            { label:"Phone",  value:"+1 (800) 555-0194" },
            { label:"Office", value:"Toronto, ON · New York, NY" },
            { label:"Hours",  value:"Mon – Fri, 9am – 6pm ET" },
          ].map((item, i) => (
            <StaggerItem key={item.label} className={`py-6 ${i < 3 ? "border-b border-border" : ""}`}>
              <p className="text-xs tracking-[0.18em] uppercase text-ink/30 mb-2">{item.label}</p>
              <p className="font-serif text-2xl font-light text-teal">{item.value}</p>
            </StaggerItem>
          ))}
          <StaggerItem className="mt-8">
            <div className="bg-teal-gradient p-px shadow-teal-md">
              <div className="bg-white p-8">
                <p className="section-tag mb-2">Response Time</p>
                <p className="font-serif text-5xl font-light text-teal mb-2">&lt; 24 hrs</p>
                <p className="text-sm text-ink/45 leading-relaxed">We respond to every inquiry — no bots, no auto-replies.</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </SlideIn>
    </section>
    <Footer />
  </>;
}
