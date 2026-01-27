
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';

export default function SignIn() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-40 pb-24 px-6 flex items-center justify-center"
    >
      <div className="max-w-md w-full bg-white/[0.03] border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl">
        <h1 className="text-3xl font-bold text-white mb-2 tracking-tighter text-center">Institutional Access</h1>
        <p className="text-white/40 text-center mb-8 text-sm">Please enter your credentials to access the investor portal.</p>
        
        <form className="space-y-4">
          <input 
            type="email" 
            placeholder="Institutional Email" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" 
          />
          <Button className="w-full py-6 rounded-xl bg-white text-black font-bold text-base hover:scale-[1.02] transition-transform mt-2">
            Sign In
          </Button>
        </form>
        
        <p className="mt-6 text-center text-xs text-white/20">
          Trouble signing in? Contact your relationship manager.
        </p>
      </div>
    </motion.div>
  );
}
