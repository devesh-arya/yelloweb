"use client";
import { useEffect } from "react";
import Link from "next/link";
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center bg-white">
      <p className="section-tag mb-4">Something went wrong</p>
      <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light text-teal mb-4">
        Unexpected <em className="shimmer-text not-italic">error</em>
      </h1>
      <p className="text-ink/50 max-w-[400px] leading-relaxed mb-10">An error occurred loading this page.</p>
      <div className="flex gap-6">
        <button onClick={reset} className="btn-primary">Try Again</button>
        <Link href="/" className="btn-ghost">Back to Home</Link>
      </div>
    </div>
  );
}
