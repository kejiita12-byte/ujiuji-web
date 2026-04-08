import type { Metadata } from "next";
import { Caveat_Brush, Yomogi, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";

const zenKakuGothic = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-zen-kaku"
});

const caveatBrush = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat-brush"
});

const yomogi = Yomogi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yomogi"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${zenKakuGothic.variable} ${caveatBrush.variable} ${yomogi.variable}`}>
        <div className="page-frame">
          <SiteHeader />
          <main className="shell main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
