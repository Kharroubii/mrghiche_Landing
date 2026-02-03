import type { Metadata } from 'next';

// Fix: Changed type to any to resolve "Cannot use namespace 'Metadata' as a type" error
export const metadata: any = {
  title: 'Strategic Portfolio',
  description: 'Explore our diverse portfolio of high-impact investments across prime commercial real estate, global tech growth, and digital asset infrastructure.',
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}