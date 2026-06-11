const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        y: {
          50: "#fff8e6", 100: "#feefc4", 200: "#fde08a", 300: "#fdcf55",
          400: "#fdb930", 500: "#f0a800", 600: "#c98d00", 700: "#a07000",
          800: "#7a5400", 900: "#523800",
        },
        teal: {
          DEFAULT: "#003e51", 2: "#004d65", 3: "#005f7d",
          light: "#e6f2f6", muted: "#4a7a8a",
        },
        canvas: { DEFAULT: "#ffffff", 2: "#f8fbfc", 3: "#f0f6f8" },
        ink: { DEFAULT: "#001f29", 2: "#002d3d", 3: "#003347", muted: "#4a6a75", body: "#005677" },
        border: { DEFAULT: "#dde8ec", strong: "#c0d4db" },
      },
      fontFamily: {
        serif: ["var(--font-poppins)", "sans-serif"],
        sans:  ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "y-gradient":    "linear-gradient(135deg,#fdb930 0%,#f0a800 60%,#c98d00 100%)",
        "teal-gradient": "linear-gradient(135deg,#003e51 0%,#004d65 60%,#005f7d 100%)",
        "y-glow":        "radial-gradient(ellipse 80% 60% at 50% -10%,rgba(253,185,48,0.20) 0%,transparent 60%)",
        "y-stripe":      "repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(253,185,48,0.06) 10px,rgba(253,185,48,0.06) 20px)",
        "hero-bg":       "radial-gradient(ellipse 100% 80% at 60% 0%,rgba(253,185,48,0.10) 0%,transparent 55%),radial-gradient(ellipse 60% 40% at 10% 80%,rgba(0,62,81,0.06) 0%,transparent 50%)",
        "dark-bg":       "linear-gradient(160deg,#001f29 0%,#003e51 60%,#001f29 100%)",
      },
      boxShadow: {
        "y-sm":       "0 2px 8px rgba(253,185,48,0.28)",
        "y-md":       "0 6px 24px rgba(253,185,48,0.32)",
        "y-lg":       "0 12px 48px rgba(253,185,48,0.28)",
        "teal-sm":    "0 2px 8px rgba(0,62,81,0.20)",
        "teal-md":    "0 6px 24px rgba(0,62,81,0.25)",
        "teal-lg":    "0 12px 48px rgba(0,62,81,0.20)",
        "card":       "0 1px 4px rgba(0,31,41,0.06),0 4px 20px rgba(0,31,41,0.04)",
        "card-hover": "0 4px 24px rgba(0,62,81,0.12),0 1px 4px rgba(0,31,41,0.06)",
      },
      keyframes: {
        shimmer:      { "0%": { backgroundPosition: "-200% center" }, "100%": { backgroundPosition: "200% center" } },
        float:        { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-8px)" } },
        "pulse-ring": { "0%": { transform: "scale(1)", opacity: "1" }, "100%": { transform: "scale(1.6)", opacity: "0" } },
        marquee:      { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        shimmer:      "shimmer 3s linear infinite",
        float:        "float 4s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        marquee:      "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
module.exports = config;