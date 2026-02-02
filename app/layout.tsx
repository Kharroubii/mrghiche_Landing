import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Header } from "@/components/ui/header-2";
import Footer4Col from "@/components/ui/footer-4-col";

const baseUrl = "https://mrghiche.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Mrghiche Capital Investment",
    template: "%s | Mrghiche Capital",
  },
  description: "Strategic investment management and institutional discipline.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Mrghiche Capital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mrghiche Capital Investment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mrghiche Capital Investment",
    description: "Strategic investment management and institutional discipline.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#030303]">
        <Header />
        {children}
        <Footer4Col />
      </body>
    </html>
  );
}