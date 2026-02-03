import React from 'react';
import type { Metadata } from 'next';

// Fix: Changed type to any to resolve "Cannot use namespace 'Metadata' as a type" error
export const metadata: any = {
  title: 'Join the Elite | Careers',
  description: 'Explore career opportunities at Mrghiche Capital. We are looking for exceptional talent to join our institutional investment teams across the globe.',
};

// Added React import above to resolve namespace error
export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}