"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const shareholderReportsData = [
  {
    id: "q3-2024",
    quarter: "Q3 2024 Results",
    period: "Oct - Dec 2024",
  },
  {
    id: "q2-2024",
    quarter: "Q2 2024 Results",
    period: "Jul - Sep 2024",
  },
  {
    id: "q1-2024",
    quarter: "Q1 2024 Results",
    period: "Apr - Jun 2024",
  }
];

export default function ReportDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const report = shareholderReportsData.find(r => r.id === id);

  if (!report) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-32 pb-24 px-6"
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
              {report.period}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
              {report.quarter}
            </h1>
            <p className="text-white/40 font-medium italic text-lg md:text-xl">
              Institutional performance analysis and strategic market outcomes.
            </p>
          </div>
        </header>

        <article className="prose prose-invert max-w-none space-y-10">
          <div className="space-y-6 text-white/70 leading-[1.7] font-light text-lg">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Letter to Shareholders</h2>
            <p className="italic font-medium text-white/90">Dear Institutional Partners and Shareholders,</p>
            <p>
              In the performance period ending {report.period}, Mrghiche Capital has demonstrated continued resilience and strategic clarity amidst shifting global macro-economic cycles.
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
      </div>
    </motion.div>
  );
}