import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Zen_Kaku_Gothic_New } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const latin = Bricolage_Grotesque({
  variable: "--font-latin",
  subsets: ["latin"],
  display: "swap",
});

const jp = Zen_Kaku_Gothic_New({
  variable: "--font-jp",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const description =
  "AquaPeakは東京・渋谷のプロダクトスタジオです。学び・お金・暮らし・おでかけ・ゲームの領域で、毎日を少し軽くするアプリを自社で企画・開発・運営しています。";

export const metadata: Metadata = {
  metadataBase: new URL("https://aquapeak.example.com"),
  title: {
    default: "AquaPeak | 毎日を、少し軽くするアプリをつくる",
    template: "%s | AquaPeak",
  },
  description,
  keywords: ["AquaPeak", "アプリ開発", "自社開発", "iOSアプリ", "プロダクトスタジオ", "渋谷"],
  openGraph: {
    title: "AquaPeak | 毎日を、少し軽くするアプリをつくる",
    description,
    type: "website",
    url: "/",
    siteName: "AquaPeak",
    locale: "ja_JP",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f7fafb",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${latin.variable} ${jp.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
