"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { newsItems } from '@/lib/data';

const MotionDiv = motion.div as any;

export default function News() {
  const router = useRouter();

  return (
    <MotionDiv
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-48 md:pt-64 pb-24 px-6 w-full"
    >
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">Firm Insights.</h1>
        <p className="text-lg text-white/50 max-w-2xl">Latest market analysis, corporate updates, and strategic institutional reports.</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="space-y-10">
          {newsItems.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => router.push(`/news/${item.slug}`)}
              className="group cursor-pointer border-b border-white/10 pb-10 last:border-0"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-[320px] aspect-[16/10] shrink-0 rounded-lg overflow-hidden bg-white/5 relative">
                   <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-500" />
                   <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                </div>
                
                <div className="flex-1 space-y-3">
                   <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-amber-500">
                      <span>{item.category}</span>
                      <span className="text-white/20">|</span>
                      <span className="text-white/50">{item.date}</span>
                   </div>
                   
                   <h2 className="text-2xl font-bold text-white leading-tight group-hover:text-indigo-400 transition-colors">
                      {item.title}
                   </h2>
                   
                   <p className="text-white/60 leading-relaxed text-sm md:text-base max-w-2xl">
                      {item.description}
                   </p>
                   
                   <div className="pt-2 flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn">
                      Read Article 
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
}