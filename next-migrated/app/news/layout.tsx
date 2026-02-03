import type { Metadata } from 'next';

// Fix: Changed type to any to resolve "Cannot use namespace 'Metadata' as a type" error
export const metadata: any = {
  title: 'Firm Insights',
  description: 'Stay updated with the latest market commentary, corporate updates, and strategic research from the Mrghiche Capital team.',
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}