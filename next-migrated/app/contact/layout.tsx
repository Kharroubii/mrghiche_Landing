import React from 'react';
import type { Metadata } from 'next';

// Fix: Changed type to any to resolve "Cannot use namespace 'Metadata' as a type" error
export const metadata: any = {
  title: 'Connect with Us',
  description: 'Get in touch with Mrghiche Capital headquarters in London or our strategic hubs in Dubai and New York for institutional inquiries.',
};

// Added React import above to resolve namespace error
export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}