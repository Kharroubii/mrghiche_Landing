"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactClient() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="pt-48 md:pt-64 pb-24 px-6"
    >
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">Connect with Us.</h1>
        <p className="text-lg text-white/50 max-w-2xl">Speak with our institutional relationship managers to discuss your investment objectives.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-indigo-400" />
              <div><p className="text-white font-bold text-sm">Email us</p><p className="text-white/40 text-xs">inquiries@mrghichecapital.com</p></div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-rose-400" />
              <div><p className="text-white font-bold text-sm">Phone</p><p className="text-white/40 text-xs">+44 (0) 20 7946 0000</p></div>
            </div>
          </div>
        </div>
        
        <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10">
          <form className="space-y-5">
            <input placeholder="Work Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm" />
            <textarea rows={4} placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm" />
            <Button className="w-full py-5 rounded-xl bg-white text-black font-bold">Send Inquiry</Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}