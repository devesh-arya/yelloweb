import Link from "next/link";
import { FadeUp, DrawLine } from "@/components/ui/Motion";

interface Props { title: string; em?: string; cta?: string; href?: string; variant?: "amber" | "teal"; }

export function CTABanner({ title, em, cta = "Start the Conversation", href = "/contact", variant = "amber" }: Props) {
  const isAmber = variant === "amber";
  return (
    <section className={`relative px-8 lg:px-16 py-24 overflow-hidden ${isAmber ? "bg-y-gradient" : "bg-teal-gradient"}`}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.10]"
        style={{ backgroundImage:"radial-gradient(rgba(0,0,0,0.4) 1px,transparent 1px)", backgroundSize:"22px 22px" }} />
      <div className={`absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-30 ${isAmber ? "bg-y-300" : "bg-teal-3"}`} />
      <FadeUp className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-[560px]">
          <h2 className={`font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-tight ${isAmber ? "text-teal" : "text-white"}`}>
            {title}{em && <em className="not-italic font-semibold"> {em}</em>}
          </h2>
          <DrawLine delay={0.2} className="mt-4 w-20" color={isAmber ? "bg-teal/30" : "bg-y-400"} />
        </div>
        <Link href={href} className={`btn-teal`}>{cta}</Link>
      </FadeUp>
    </section>
  );
}
