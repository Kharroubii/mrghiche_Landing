"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { HeaderShell } from '@/components/HeaderShell';
import { FooterShell } from '@/components/FooterShell';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="min-h-screen bg-[#030303] overflow-x-hidden">
      <HeaderShell />
      {children}
      <FooterShell />
    </main>
  );
}