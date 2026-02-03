"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { allNewsAndReports } from '@/lib/data';

const MotionDiv = motion.div as any;

export default function NewsDetailClient({ slug }: { slug: string }) {
  const router = useRouter();
  const item = allNewsAndReports.find(i => i.slug === slug);

  if (!item) {
    return (
      <div className="pt-64 pb-24 text-center min-h-screen bg-[#030303]">
        <h1 className="text-white text-3xl font-bold tracking-tight mb-4">Content not found.</h1>
        <p className="text-white/40 mb-8">The news article or report you are looking for does not exist.</p>
        <Button onClick={() => router.push('/news')} className="rounded-full px-8">Return to News</Button>
      </div>
    );
  }

  // Type-safe property extraction based on whether the item is a Report or NewsItem
  const title = 'quarter' in item ? item.quarter : item.title;
  const dateLabel = 'period' in item ? item.period : item.date;
  const category = 'category' in item ? item.category : "Financial Report";

  return (
    <MotionDiv
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-48 md:pt-64 pb-24 px-6 w-full min-h-screen bg-[#030303]"
    >
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-white/40 hover:text-white mb-12 transition-colors uppercase tracking-widest text-[10px] font-bold group"
        >
          <ArrowLeft className="size-3 group-hover:-translate-x-1 transition-transform" /> Back
        </button>

        <header className="mb-12 border-b border-white/10 pb-10">
          <div className="space-y-4">
            <p className="text-indigo-400 font-bold uppercase tracking-[0.25em] text-xs">
              {category} • {dateLabel}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
              {title}
            </h1>
            <p className="text-white/40 font-medium italic text-lg md:text-xl">
              Institutional analysis and strategic market outcomes.
            </p>
          </div>
        </header>

        <article className="prose prose-invert max-w-none space-y-10">
          <div className="space-y-6 text-white/70 leading-[1.7] font-light text-lg">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Executive Brief</h2>
            <p className="italic font-medium text-white/90">Institutional Partners and Stakeholders,</p>
            <p>
              In the period defined by {dateLabel}, Mrghiche Capital has demonstrated continued resilience and strategic clarity amidst shifting global macro-economic cycles. Our focus remains steadfast on the institutionalization of our processes and the consistent generation of alpha through data-driven precision.
            </p>
            <p>
              During this timeframe, we achieved significant milestones in our alternative investment pods, particularly within our Liquid Markets and Digital Asset infrastructure strategies. Our risk management frameworks successfully navigated periods of heightened volatility, maintaining capital preservation as our primary directive.
            </p>
            <p>
              We have also expanded our footprint in London and Dubai, attracting top-tier talent from global bulge-bracket firms to lead our new Strategic Advisory division. This expansion is not merely geographical but operational, strengthening our internal due diligence capabilities across cross-border private equity opportunities.
            </p>
            <p>
              As we move into the next phase of our growth, we remain committed to transparency, discipline, and the pursuit of non-correlated returns for our stakeholders.
            </p>

            <div className="pt-10 border-t border-white/5 mt-10">
              <p className="text-white font-bold text-base md:text-lg">Mohammed Kharroubi</p>
              <p className="text-white/40 text-sm">Founder & CEO, Mrghiche Capital</p>
            </div>
          </div>

          <div className="mt-20 p-10 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 relative z-10">Institutional Disclosure Packet</h3>
            <p className="text-white/40 mb-8 max-w-sm mx-auto relative z-10 text-sm md:text-base">
              Download the complete financial disclosure, including full audit reports and regulatory statements.
            </p>
            <Button 
              className="rounded-full px-8 py-6 bg-white text-black font-bold text-base hover:scale-[1.05] transition-transform flex items-center gap-3 mx-auto relative z-10"
            >
              <FileDown className="size-5" /> Download PDF Version
            </Button>
          </div>
        </article>

        <div className="mt-24 pt-8 border-t border-white/10 text-center">
          <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] mb-3">Confidential Disclosure</p>
          <p className="text-white/30 text-xs max-w-xl mx-auto leading-relaxed italic">
            This article is provided for institutional informational purposes only. Past performance is not indicative of future results. Detailed financial data available in the secure portal.
          </p>
        </div>
      </div>
    </MotionDiv>
  );
}