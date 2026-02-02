"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SignInClient() {
  return (
    <main className="min-h-screen pt-64 pb-24 px-6 flex flex-col items-center justify-center text-center bg-[#030303]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl"
      >
        <div className="size-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mx-auto mb-8 border border-indigo-500/20">
          <ShieldCheck size={32} />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2 tracking-tighter">Client Portal</h1>
        <p className="text-white/40 text-sm mb-8 leading-relaxed">Secure institutional access for authorized partners and shareholders.</p>
        
        <form className="space-y-4">
          <input type="email" placeholder="Institutional Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
          <input type="password" placeholder="Secure Token" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
          <Button className="w-full py-6 rounded-xl bg-white text-black font-bold text-base hover:scale-[1.02] transition-transform shadow-xl">Access Portal</Button>
        </form>
        
        <p className="mt-8 text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">Encrypted Institutional Channel</p>
      </motion.div>
    </main>
  );
}