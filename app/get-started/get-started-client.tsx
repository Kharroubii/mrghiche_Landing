"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GetStartedClient() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-48 md:pt-64 pb-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-indigo-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Onboarding</span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Initialize Relationship.</h1>
        <p className="text-xl text-white/50 mb-16 max-w-2xl mx-auto leading-relaxed">Select your primary area of institutional interest to begin our verification and onboarding process.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: ShieldCheck, title: "Capital Allocator", desc: "For institutional LPs and family offices." },
            { icon: BarChart3, title: "Strategic Partner", desc: "For operational and advisory collaboration." },
            { icon: Globe, title: "Portfolio Entity", desc: "For companies seeking institutional growth capital." }
          ].map((item, idx) => (
            <Link 
              key={idx} 
              href="/contact" 
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/20 transition-all group"
            >
              <item.icon className="size-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>

        <Link href="/contact">
          <Button className="rounded-full px-10 py-8 bg-white text-black font-bold text-lg hover:scale-[1.05] transition-transform">
            General Relationship Inquiry <ArrowRight className="ml-3" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}