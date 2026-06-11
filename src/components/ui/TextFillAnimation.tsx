"use client";

import { useEffect, useRef, useState } from "react";

interface TextFillAnimationProps {
  children: React.ReactNode;
  className?: string;
}

export default function TextFillAnimation({
  children,
  className = "",
}: TextFillAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.8,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      data-text={typeof children === "string" ? children : ""}
      className={`text-fill-animation ${
        visible ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}