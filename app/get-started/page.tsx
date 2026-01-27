
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '../../components/ui/button';

export default function GetStarted() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-40 pb-24 px-6 max-w-4xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Become a Partner</h1>
        <p className="text-xl text-white/40 max-w-2xl mx-auto">Join a global network of institutional and private investors dedicated to long-term capital preservation and growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: ShieldCheck, title: "Onboarding", desc: "Rigorous due diligence and compliance standards." },
          { icon: BarChart3, title: "Allocation", desc: "Strategic positioning across our core investment pods." },
          { icon: TrendingUp, title: "Reporting", desc: "Real-time performance metrics and transparency." }
        ].map((item, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
            <item.icon className="size-8 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-white font-bold mb-2">{item.title}</h3>
            <p className="text-white/40 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-indigo-500/10 to-transparent p-12 rounded-[2.5rem] border border-indigo-500/20 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Request Investor Prospectus</h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto">Our team will reach out to schedule an initial strategic consultation and provide detailed documentation.</p>
        <Button className="rounded-full px-12 py-7 bg-white text-black font-bold text-lg hover:scale-105 transition-transform">
          Contact Relations Team
        </Button>
      </div>
    </motion.div>
  );
}
