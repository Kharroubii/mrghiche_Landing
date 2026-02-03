import type { Metadata } from 'next';

// Fix: Changed type to any to resolve "Cannot use namespace 'Metadata' as a type" error
export const metadata: any = {
  title: 'Our Expertise',
  description: 'Comprehensive investment strategies tailored for institutional growth, including Private Equity, Real Estate, and Quant-driven Alpha strategies.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}