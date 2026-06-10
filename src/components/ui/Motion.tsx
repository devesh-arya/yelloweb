"use client";
// src/components/ui/Motion.tsx — 10 scroll-triggered animation primitives

import { useRef, useState, useEffect, type ReactNode, type ElementType } from "react";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";

const EASE_OUT  = [0.16, 1, 0.3, 1] as const;
const EASE_SOFT = [0.25, 0.46, 0.45, 0.94] as const;

function useReveal(margin = "-80px") {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: margin as any });
  return { ref, inView };
}

// 1. FadeUp
const fadeUpV: Variants = {
  hidden:  { opacity: 0, y: 36 },
  visible: (d: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE_OUT, delay: d } }),
};
export function FadeUp({ children, className, delay = 0, as = "div" }: { children: ReactNode; className?: string; delay?: number; as?: ElementType }) {
  const { ref, inView } = useReveal();
  const Tag = motion[as as keyof typeof motion] as typeof motion.div;
  return <Tag ref={ref as any} className={className} variants={fadeUpV} initial="hidden" animate={inView ? "visible" : "hidden"} custom={delay}>{children}</Tag>;
}

// 2. FadeIn
export function FadeIn({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useReveal("-40px");
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8, ease: EASE_SOFT, delay }}>
      {children}
    </motion.div>
  );
}

// 3. SlideIn
export function SlideIn({ children, className, direction = "left", delay = 0 }: { children: ReactNode; className?: string; direction?: "left"|"right"; delay?: number }) {
  const { ref, inView } = useReveal("-60px");
  const x = direction === "left" ? -48 : 48;
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, x }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x }} transition={{ duration: 0.7, ease: EASE_OUT, delay }}>
      {children}
    </motion.div>
  );
}

// 4. ScaleIn
export function ScaleIn({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useReveal("-40px");
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} transition={{ duration: 0.6, ease: EASE_OUT, delay }}>
      {children}
    </motion.div>
  );
}

// 5. StaggerContainer + StaggerItem
const staggerV: Variants = { hidden: {}, visible: (s: number = 0.1) => ({ transition: { staggerChildren: s } }) };
const childV:   Variants = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } } };
export function StaggerContainer({ children, className, stagger = 0.1 }: { children: ReactNode; className?: string; stagger?: number }) {
  const { ref, inView } = useReveal("-60px");
  return <motion.div ref={ref} className={className} variants={staggerV} initial="hidden" animate={inView ? "visible" : "hidden"} custom={stagger}>{children}</motion.div>;
}
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={childV}>{children}</motion.div>;
}

// 6. DrawLine
export function DrawLine({ className, delay = 0, color = "bg-y-gradient" }: { className?: string; delay?: number; color?: string }) {
  const { ref, inView } = useReveal();
  return (
    <motion.div ref={ref} className={`h-0.5 ${color} ${className ?? ""}`}
      initial={{ scaleX: 0, transformOrigin: "left" }}
      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay }} />
  );
}

// 7. CountUp
export function CountUp({ end, suffix = "", duration = 1.8, className }: { end: number; suffix?: string; duration?: number; className?: string }) {
  const { ref, inView } = useReveal();
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - t0) / (duration * 1000), 1);
        setCount(Math.round((1 - Math.pow(1 - p, 3)) * end));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [inView, started, end, duration]);
  return <span ref={ref as any} className={className}>{count}{suffix}</span>;
}

// 8. ParallaxSection
export function ParallaxSection({ children, className, speed = 0.12 }: { children: ReactNode; className?: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -100}%`, `${speed * 100}%`]);
  return <div ref={ref} className={`overflow-hidden ${className ?? ""}`}><motion.div style={{ y }}>{children}</motion.div></div>;
}

// 9. HoverCard — lift + teal glow on hover
export function HoverCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className}
      whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,62,81,0.14)" }}
      whileTap={{ y: -2 }}
      transition={{ duration: 0.25, ease: EASE_SOFT }}>
      {children}
    </motion.div>
  );
}
