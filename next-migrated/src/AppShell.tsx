"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from './components/ui/header-2';
import Footer4Col from './components/ui/footer-4-col';

/**
 * AppShell handles the root layout structure and stable UI elements.
 * It manages the global Header/Footer and route-based active states.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Ensure scroll to top on navigation for better transition feel
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Map pathnames to IDs for the Header's active state
  const pageMap: Record<string, string> = {
    "/": "home",
    "/who-we-are": "who-we-are",
    "/portfolio": "portfolio",
    "/services": "services",
    "/news": "news",
    "/careers": "careers",
    "/contact": "contact",
  };

  // Determine if we are on a news detail page to keep "News" highlighted in the header
  const activePage = pathname.startsWith('/news') ? "news" : (pageMap[pathname] || "home");

  return (
    <main className="min-h-screen bg-[#030303] overflow-x-hidden">
      <Header activePage={activePage} />
      
      {/* Content wrapper - page-level transitions are handled in PageTransition.tsx */}
      {children}

      <Footer4Col />
    </main>
  );
}
