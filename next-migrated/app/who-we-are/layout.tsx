import React from 'react';
import type { Metadata } from 'next';

// Fix: Changed type to any to resolve "Cannot use namespace 'Metadata' as a type" error
export const metadata: any = {
  title: 'Who We Are',
  description: 'Learn about the foundations of Mrghiche Capital, our history, and our team of institutional investment experts dedicated to excellence.',
};

// Added React import above to resolve namespace error
export default function WhoWeAreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}