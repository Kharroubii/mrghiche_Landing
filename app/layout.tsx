import React from "react";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/AppShell";
import PageTransition from "@/components/PageTransition";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: any = {
  title: "Mrghiche Capital Investment",
  description: "Institutional discipline and data-driven decision-making.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} font-sans antialiased bg-[#030303]`}>
        <AppShell>
          <PageTransition>{children}</PageTransition>
        </AppShell>
      </body>
    </html>
  );
}