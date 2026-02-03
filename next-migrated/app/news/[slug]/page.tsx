import type { Metadata } from 'next';
import { allNewsAndReports } from '@/lib/data';
import NewsDetailClient from './NewsDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

// Fix: Changed return type to Promise<any> to resolve "Cannot use namespace 'Metadata' as a type" error
export async function generateMetadata({ params }: Props): Promise<any> {
  const { slug } = await params;
  const item = allNewsAndReports.find(i => i.slug === slug);
  
  if (!item) {
    return {
      title: 'Content Not Found',
    };
  }

  const title = item.quarter || item.title;
  const description = item.description || "Institutional analysis and strategic market outcomes from Mrghiche Capital.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: [item.image || item.imageSrc],
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  return <NewsDetailClient slug={slug} />;
}