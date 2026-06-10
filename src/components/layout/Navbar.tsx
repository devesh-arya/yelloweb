"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 flex items-center justify-between ${
        scrolled ? "bg-white/96 backdrop-blur-md border-b border-border shadow-sm py-4 px-8 lg:px-16"
                 : "bg-transparent py-6 px-8 lg:px-16"
      }`}>
        <Link href="/" className="font-serif text-2xl font-semibold text-teal tracking-wide relative group">
          Yellow<span className="text-y-400 group-hover:text-y-500 transition-colors">eb</span>
          <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-y-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map(item => (
            <Link key={item.href} href={item.href}
              className={`nav-link ${pathname === item.href ? "text-teal after:scale-x-100" : ""}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden lg:inline-flex btn-primary text-[0.75rem] px-5 py-3">
          Request a Quote
        </Link>

        <button onClick={() => setOpen(v => !v)} className="lg:hidden flex flex-col gap-[5px] p-1" aria-label="Toggle menu">
          <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}   className="block w-6 h-0.5 bg-teal rounded-full" />
          <motion.span animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }} className="block w-6 h-0.5 bg-teal rounded-full" />
          <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-teal rounded-full" />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-teal flex flex-col justify-center px-10">
            <div className="absolute left-0 top-0 w-1.5 h-full bg-y-gradient" />
            {NAV_ITEMS.map((item, i) => (
              <motion.div key={item.href}
                initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 32 }}
                transition={{ delay: i * 0.07 }}>
                <Link href={item.href} className="block font-serif text-4xl font-light py-3 text-white hover:text-y-400 transition-colors">
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10">
              <Link href="/contact" className="btn-primary">Request a Quote</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
