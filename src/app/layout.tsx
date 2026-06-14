import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yelloweb.co"),
  title: { default: "Yelloweb — Full-Stack Web Development", template: "%s | Yelloweb" },
  description: "Purpose-driven digital experiences. Accessible, engaging, responsive, and SEO-optimized websites for organizations that want more than a template.",
  keywords: ["web development","full-stack","Next.js","React","API integration","cloud solutions"],
  authors: [{ name: "Yelloweb" }],
    icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png" },
    ],
  },
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    type: "website", locale: "en_US", url: "https://yelloweb.co",
    siteName: "Yelloweb",
    title: "Yelloweb — Full-Stack Web Development",
    description: "Purpose-driven digital experiences.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Yelloweb" }],
  },
  twitter: { card: "summary_large_image", title: "Yelloweb", description: "Purpose-driven digital experiences.", images: ["/og-image.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#003e51", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-white text-ink font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}