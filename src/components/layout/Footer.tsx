import Link from "next/link";
import { NAV_ITEMS } from "@/lib/data";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-teal text-white">
      <div className="h-1 bg-y-gradient" />
      <div className="px-8 lg:px-16 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link href="/" className="relative group flex items-center">
            <Image
              src="/images/logo-white.png"
              alt="Yelloweb"
              width={180}
              height={50}
              priority
              className="h-auto w-auto"
            />
          </Link>
          <p className="text-sm text-white leading-relaxed max-w-[240px]">
            Purpose-driven digital experiences for organizations that want more
            than a website.
          </p>
          <div className="flex gap-3 mt-6">
            {["Li", "Tw", "Gh"].map((s) => (
              <div
                key={s}
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-[0.6rem] text-white hover:border-y-400 hover:text-y-400 transition-colors cursor-pointer"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[0.68rem] tracking-[0.2em] uppercase text-white mb-5 font-semibold">
            Navigate
          </h4>
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white hover:text-y-300 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[0.68rem] tracking-[0.2em] uppercase text-white mb-5 font-semibold">
            Services
          </h4>
          <ul className="space-y-3">
            {[
              "Web Development",
              "API Integration",
              "Cloud Solutions",
              "Security",
              "Analytics",
            ].map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-sm text-white hover:text-y-300 transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[0.68rem] tracking-[0.2em] uppercase text-white mb-5 font-semibold">
            Contact
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/contact"
                className="text-sm text-white hover:text-y-300 transition-colors"
              >
                Request a Quote
              </Link>
            </li>
            <li>
              <a
                href="mailto:hello@yelloweb.co"
                className="text-sm text-white hover:text-y-300 transition-colors"
              >
                hello@yelloweb.co
              </a>
            </li>
            <li>
              <a
                href="tel:+18005550194"
                className="text-sm text-white hover:text-y-300 transition-colors"
              >
                +1 (800) 555-0194
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-8 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.76rem] text-white">
        <span>© {new Date().getFullYear()} Yelloweb. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
