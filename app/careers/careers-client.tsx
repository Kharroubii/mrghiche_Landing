"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CareersClient() {
  const [selectedJob, setSelectedJob] = useState<null | {role: string, loc: string, type: string}>(null);
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    { role: "Senior Portfolio Manager", loc: "New York", type: "Equities" },
    { role: "Quantitative Analyst", loc: "London", type: "Fixed Income" },
    { role: "Investment Relations Associate", loc: "Dubai", type: "Client Services" },
  ];

  if (submitted) {
    return (
      <div className="pt-64 pb-24 px-6 flex flex-col items-center text-center">
        <CheckCircle2 className="size-20 text-indigo-400 mb-6" />
        <h1 className="text-4xl font-bold text-white mb-4">Application Received</h1>
        <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full px-8">Return</Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="pt-48 md:pt-64 pb-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">Join the Elite.</h1>
        <p className="text-lg text-white/50 mb-16 max-w-2xl">We are looking for exceptional talent to join our institutional investment teams.</p>
        
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.role} onClick={() => setSelectedJob(job)} className="flex justify-between items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] transition-all cursor-pointer">
              <div>
                <div className="text-xl font-bold text-white">{job.role}</div>
                <div className="flex gap-4 text-[10px] text-white/30 mt-1 uppercase tracking-widest">
                  <span>{job.loc}</span><span>•</span><span>{job.type}</span>
                </div>
              </div>
              <ArrowRight className="text-white/20" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}