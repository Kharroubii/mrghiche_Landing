
"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function News() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl font-bold text-white tracking-tight">Firm Insights</h1>
            <p className="text-white/40 mt-1 italic text-sm">The latest from Mrghiche Capital</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { 
              date: "Jan 24, 2025", 
              tag: "Market Outlook", 
              title: "Navigating Volatility in the 2025 Global Economy",
              img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=800&q=80"
            },
            { 
              date: "Jan 12, 2025", 
              tag: "Announcement", 
              title: "Mrghiche Capital Expands Alternative Assets Division",
              img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
            }
          ].map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="h-64 w-full overflow-hidden rounded-2xl mb-5 bg-white/5">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
              </div>
              <div className="flex gap-4 items-center mb-3">
                <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white/60">{item.tag}</span>
                <span className="text-[10px] text-white/30">{item.date}</span>
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
