import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center bg-white">
      <p className="section-tag mb-4">404</p>
      <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-teal mb-4">
        Page not <em className="shimmer-text not-italic">found</em>
      </h1>
      <p className="text-ink/50 max-w-[400px] leading-relaxed mb-10">The page you're looking for doesn't exist or has been moved.</p>
      <Link href="/" className="btn-primary">Back to Home</Link>
    </div>
  );
}
