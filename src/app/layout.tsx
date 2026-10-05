import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Licensed Plumbers in Indianapolis`,
    template: `%s | ${site.name}`,
  },
  description:
    "Licensed, bonded, and insured plumbers serving Indianapolis and the surrounding area: pipe repair, gas lines, water quality, and more.",
  openGraph: { siteName: site.name, type: "website", locale: "en_US" },
  appleWebApp: { statusBarStyle: "black" },
};

// Browser + status bars dark on phones: theme-color (Chrome/Android, older Safari), a dark root
// background (Safari 26 samples it for its bars and overscroll), and the home-screen status bar.
export const viewport: Viewport = { themeColor: "#01150f" }; // header background (--color-primary)

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <JsonLd />
      </body>
    </html>
  );
}
