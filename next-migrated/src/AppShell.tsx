"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { HeaderShell } from '@/components/HeaderShell';
import { FooterShell } from '@/components/FooterShell';

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

  return (
    <main className="min-h-screen bg-[#030303] overflow-x-hidden">
      <HeaderShell />
      
      {/* Content wrapper - page-level transitions are handled in PageTransition.tsx */}
      {children}

      <FooterShell />
    </main>
  );
}