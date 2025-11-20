import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aquapeak.example.com"),
  title: {
    default: "AquaPeak | モバイル・Webプロダクトスタジオ",
    template: "%s | AquaPeak",
  },
  description:
    "AquaPeakは渋谷・宮益坂の拠点でモバイルアプリとWebサービスを自社開発するプロダクトスタジオです。SeedPocketやAsset Forecastなど日常を軽くする体験を生み出しています。",
  keywords: [
    "AquaPeak",
    "自社開発",
    "モバイルアプリ",
    "Webサービス",
    "プロダクトチーム",
    "デジタル体験",
    "渋谷",
  ],
  openGraph: {
    title: "AquaPeak | モバイル・Webプロダクトスタジオ",
    description:
      "SeedPocketやAsset Forecastを生み出したAquaPeakが、生活者の意思決定を軽くするデジタル体験を自社で磨き込み続けています。",
    type: "website",
    url: "https://aquapeak.example.com",
    siteName: "AquaPeak",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
