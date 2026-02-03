"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MotionDiv = motion.div as any;

export default function Contact() {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-48 md:pt-64 pb-24 px-6 w-full"
    >
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">Connect with Us.</h1>
        <p className="text-lg text-white/50 max-w-2xl">Speak with our institutional relationship managers to discuss how we can support your investment objectives and explore strategic partnerships.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 tracking-tighter">Get in Touch</h2>
          <p className="text-base md:text-lg text-white/50 mb-10">We are dedicated to providing clear, institutional-grade communication for our global partners.</p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 shrink-0"><Mail size={18} /></div>
              <div>
                <div className="text-white font-bold text-sm">Email us</div>
                <div className="text-white/40 text-xs">inquiries@mrghichecapital.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-rose-400 shrink-0"><Phone size={18} /></div>
              <div>
                <div className="text-white font-bold text-sm">Phone</div>
                <div className="text-white/40 text-xs">+44 (0) 20 7946 0000</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-violet-400 shrink-0"><MapPin size={18} /></div>
              <div>
                <div className="text-white font-bold text-sm">Headquarters</div>
                <div className="text-white/40 text-xs">15 Berkeley Square, Mayfair, London W1J 6BQ</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md">
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="First Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
              <input placeholder="Last Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
            <input placeholder="Work Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
            <textarea rows={4} placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
            <Button className="w-full py-5 rounded-xl bg-white text-black font-bold text-base hover:scale-[1.02] transition-transform">Send Inquiry</Button>
          </form>
        </div>
      </div>
    </MotionDiv>
  );
}