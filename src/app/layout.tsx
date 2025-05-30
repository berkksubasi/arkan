import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arkan Marka Patent - Fikri Mülkiyet ve Kalite Yönetim Danışmanlığı",
  description: "Marka tescil, patent başvuruları, ISO belgelendirme ve kalite yönetim sistemleri konularında profesyonel danışmanlık hizmetleri.",
  keywords: "marka tescil, patent, ISO belgelendirme, kalite yönetim, danışmanlık, fikri mülkiyet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 