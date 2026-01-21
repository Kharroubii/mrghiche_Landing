// Add React import to fix "Cannot find namespace 'React'" error for type definitions
import React from "react";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header-2";
import Footer4Col from "@/components/ui/footer-4-col";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Mrghiche Capital Investment",
  description: "We apply institutional discipline, active risk management, and data-driven decision-making to protect capital and generate sustainable long-term returns.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} font-sans antialiased bg-[#030303]`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer4Col />
      </body>
    </html>
  );
}
