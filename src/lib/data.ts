// src/lib/data.ts ← Edit this file to update all site copy
import type { NavItem, Service, Testimonial, PortfolioItem, Stat, Industry, WhyUsItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label:"Who We Are", href:"/about" },
  { label:"What We Do", href:"/services" },
  { label:"Why Us",     href:"/why-us" },
  { label:"Industries", href:"/industries" },
  { label:"Inquiry",    href:"/contact" },
];

export const HERO_WORDS = ["Purpose","Collaboration","Customization","High Performance","Real Impact"];

export const TRUSTED_PARTNERS = [
  { name:"Stanford",  sub:"University" },
  { name:"Vitana",    sub:"Health" },
  { name:"Crestline", sub:"Capital" },
  { name:"Orbis",     sub:"Tech" },
  { name:"Verdant",   sub:"Group" },
];

export const STATS: Stat[] = [
  { value:"120+", label:"Projects Delivered" },
  { value:"98%",  label:"Client Retention" },
  { value:"12",   label:"Years in Practice" },
  { value:"40+",  label:"Industries Served" },
];

export const SERVICES: Service[] = [
  { number:"01", title:"Web Development",  description:"Custom-built websites and web applications crafted for performance, scalability, and lasting impact. React, Next.js, Node, and bespoke stacks. Every site is responsive, accessible (WCAG 2.1), and SEO-optimized from day one." },
  { number:"02", title:"API Integration",  description:"Seamless connections between your systems, platforms, and third-party services. RESTful and GraphQL APIs, payment gateways, CRMs, ERPs, and any proprietary system you rely on." },
  { number:"03", title:"Cloud Solutions",  description:"Resilient cloud architecture and deployment strategies built to scale. AWS, GCP, and Azure — we architect, migrate, and manage cloud environments that are cost-efficient and robust." },
  { number:"04", title:"Security",         description:"Enterprise-grade protection woven into every layer. Penetration testing, OWASP compliance, HIPAA & SOC 2 readiness, and continuous vulnerability monitoring." },
  { number:"05", title:"Analytics & Data", description:"Data pipelines, dashboards, and insights that inform smarter decisions. From GA4 setup to custom BI dashboards and ML-powered recommendations." },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote:"They didn't just build our website — they took the time to understand what we were actually trying to communicate. The result was beyond what we envisioned.", author:"Dr. Sarah Chen",    role:"Director of Digital Health", company:"Vitana" },
  { quote:"The process was remarkably transparent. We knew exactly where things stood at every stage. That kind of communication is rare in this industry.",              author:"Marcus Okafor",  role:"CTO",                        company:"Crestline Capital" },
  { quote:"Performance, design, accessibility — they nailed all three without compromise. Our engagement metrics improved dramatically within the first month.",           author:"Prof. Linda Walsh", role:"Head of Online Learning",  company:"Stanford" },
];

export const PORTFOLIO: PortfolioItem[] = [
  { tag:"Healthcare · Web Application", title:"Vitana Patient Portal",     description:"A HIPAA-compliant patient management platform serving 40,000+ users monthly.", bg:"from-[#e6f2f6] to-[#f0f8fb]" },
  { tag:"Education · Full-Stack",        title:"Stanford Learning Hub",     description:"Custom LMS integration with real-time collaboration tools for 8,000+ students.", bg:"from-[#f8fbfc] to-[#f0f6f8]" },
  { tag:"Finance · Dashboard",           title:"Crestline Analytics Suite", description:"Real-time market data platform processing millions of data points daily.",        bg:"from-[#fff8e6] to-[#fef3c7]" },
  { tag:"Retail · E-Commerce",           title:"Orbis Commerce Platform",   description:"Headless commerce architecture driving $12M+ in annual transactions.",            bg:"from-[#e6f2f6] to-[#fff8e6]" },
];

export const INDUSTRIES: Industry[] = [
  { name:"Healthcare",                 description:"HIPAA-compliant platforms, patient portals, telemedicine infrastructure, and clinical data systems." },
  { name:"Education",                  description:"LMS integrations, student portals, interactive learning tools, and institutional web presence." },
  { name:"Finance",                    description:"Secure banking interfaces, investment dashboards, compliance-ready portals, and real-time analytics." },
  { name:"Retail & E-Commerce",        description:"Headless commerce, custom storefronts, inventory systems, and conversion-optimised checkout flows." },
  { name:"Non-Profit",                 description:"Mission-driven websites, donation platforms, volunteer management, and impact storytelling." },
  { name:"Technology",                 description:"SaaS platforms, developer tools, API portals, and product marketing sites for technical audiences." },
  { name:"Professional Services",      description:"Law firms, consultancies, agencies — credibility-first web presence with lead generation built in." },
  { name:"Government & Public Sector", description:"Accessible, WCAG-compliant public portals and digital service delivery platforms." },
];

export const WHY_US: WhyUsItem[] = [
  { icon:"◈", title:"We listen first",         description:"Every engagement starts with a discovery phase mapping your goals, audience behaviours, and competitive landscape. We don't begin designing until we understand what success looks like for you." },
  { icon:"◇", title:"Radical transparency",    description:"You'll always know where your project stands. We communicate proactively — not just when milestones are hit, but when plans need to shift. No surprises on delivery day." },
  { icon:"⬡", title:"Data-informed decisions", description:"Design choices aren't made on instinct alone. We back every major decision with user research, analytics, and testing. Your website is built on evidence, not aesthetics alone." },
  { icon:"△", title:"Built to last",           description:"We write clean, documented, maintainable code. Your site won't become a liability 18 months post-launch. Our systems are designed for longevity and adaptability." },
  { icon:"○", title:"End-to-end ownership",    description:"Strategy, design, development, cloud, security — one team, fully accountable. No handoffs, no finger-pointing. We own the outcome together." },
  { icon:"□", title:"Continuous improvement",  description:"Launch isn't the end — it's the beginning. Structured post-launch review cycles measure performance and drive iteration based on real-world data." },
];
