"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function NewsClient() {
  const newsItems = [
    {
      category: "MARKET COMMENTARY",
      date: "OCTOBER 12, 2023",
      title: "Q3 2023 Global Market Outlook: Navigating the Pivot",
      description: "As central banks near the end of their tightening cycles, we analyze the implications for asset allocation and the potential for a soft landing.",
      image: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80&w=800&auto=format&fit=crop"
    },
    {
      category: "FIRM NEWS",
      date: "SEPTEMBER 05, 2023",
      title: "Mrghiche Capital Appoints Sarah Chen as Chief Risk Officer",
      description: "We are pleased to welcome Sarah Chen, formerly of Citadel, to lead our independent risk management function.",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-48 md:pt-64 pb-24 px-6"
    >
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">Firm Insights.</h1>
        <p className="text-lg text-white/50 max-w-2xl">Latest market analysis and strategic institutional reports.</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="space-y-10">
          {newsItems.map((item, idx) => (
            <div key={idx} className="group cursor-pointer border-b border-white/10 pb-10 last:border-0">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-[320px] aspect-[16/10] shrink-0 rounded-lg overflow-hidden bg-white/5 relative">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex-1 space-y-3">
                   <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-amber-500">
                      <span>{item.category}</span>
                      <span className="text-white/20">|</span>
                      <span className="text-white/50">{item.date}</span>
                   </div>
                   <h2 className="text-2xl font-bold text-white leading-tight group-hover:text-indigo-400 transition-colors">{item.title}</h2>
                   <p className="text-white/60 leading-relaxed text-sm max-w-2xl">{item.description}</p>
                   <div className="pt-2 flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
                      Read Article <ArrowRight size={14} />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}