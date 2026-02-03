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

// Fix: Changed type to any to resolve "Cannot use namespace 'Metadata' as a type" error in this environment
export const metadata: any = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: "Mrghiche Capital Investment | Institutional Grade Management",
    template: "%s | Mrghiche Capital"
  },
  description: "We apply institutional discipline, active risk management, and data-driven decision-making to protect capital and generate sustainable long-term returns.",
  keywords: ["Investment Management", "Private Equity", "Real Estate", "Liquid Markets", "Digital Assets", "Institutional Trading"],
  authors: [{ name: "Mohammed Kharroubi" }],
  creator: "Mrghiche Capital",
  openGraph: {
    title: "Mrghiche Capital Investment",
    description: "Institutional discipline and data-driven decision-making for sustainable long-term returns.",
    url: 'https://example.com',
    siteName: 'Mrghiche Capital',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mrghiche Capital Investment',
    description: 'Institutional grade investment management and strategic capital growth.',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} font-sans antialiased bg-[#030303]`}>
        <AppShell>
          <PageTransition>
            {children}
          </PageTransition>
        </AppShell>
      </body>
    </html>
  );
}