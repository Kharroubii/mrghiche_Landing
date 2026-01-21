"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, FileUp, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<null | {role: string, loc: string, type: string}>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    { role: "Senior Portfolio Manager", loc: "New York", type: "Equities" },
    { role: "Quantitative Analyst", loc: "London", type: "Fixed Income" },
    { role: "Investment Relations Associate", loc: "Dubai", type: "Client Services" },
    { role: "Alternative Data Scientist", loc: "London", type: "Tech" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="pt-32 pb-24 px-6 flex flex-col items-center justify-center text-center min-h-[60vh]"
      >
        <div className="size-20 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6 border border-indigo-500/30">
          <CheckCircle2 className="size-10 text-indigo-400" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 tracking-tighter">Application Received</h1>
        <p className="text-lg text-white/40 max-w-md mx-auto mb-10 leading-relaxed">
          Thank you for applying for the <strong>{selectedJob?.role}</strong> position. Our talent acquisition team will review your credentials and contact you shortly.
        </p>
        <Button 
          onClick={() => {
            setSubmitted(false);
            setSelectedJob(null);
          }}
          variant="outline"
          className="rounded-full px-8 py-5"
        >
          Return to Careers
        </Button>
      </motion.div>
    );
  }

  if (selectedJob) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="pt-32 pb-24 px-6"
      >
        <div className="max-w-2xl mx-auto">
          <button 
            onClick={() => setSelectedJob(null)}
            className="flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors uppercase tracking-widest text-[9px] font-bold"
          >
            <ArrowLeft className="size-3" /> Back to listings
          </button>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">{selectedJob.role}</h1>
          <div className="flex gap-4 text-xs text-indigo-400/80 mb-10 uppercase tracking-widest font-bold">
            <span>{selectedJob.loc}</span>
            <span>•</span>
            <span>{selectedJob.type}</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/[0.02] border border-white/5 p-6 md:p-10 rounded-[2rem]">
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/40 font-bold ml-1">Full Name</label>
                  <input required placeholder="E.g. Alexander Sterling" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/40 font-bold ml-1">Email Address</label>
                  <input required type="email" placeholder="E.g. alex@institutional.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-white/40 font-bold ml-1">LinkedIn Profile</label>
                <input required placeholder="https://linkedin.com/in/yourprofile" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-white/40 font-bold ml-1">CV Attachment</label>
                <div className="relative group/file">
                  <input required type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  <div className="w-full bg-white/5 border border-dashed border-white/20 rounded-xl px-5 py-6 text-center group-hover/file:border-indigo-500/50 group-hover/file:bg-indigo-500/5 transition-all">
                    <FileUp className="size-6 text-white/20 mx-auto mb-2 group-hover/file:text-indigo-400 group-hover/file:scale-110 transition-all" />
                    <p className="text-white/40 text-xs">Click or drag your CV here</p>
                    <p className="text-[9px] text-white/20 mt-1 uppercase tracking-wider">PDF, DOCX up to 5MB</p>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              disabled={isSubmitting}
              className="w-full py-6 rounded-xl bg-white text-black font-bold text-base hover:scale-[1.01] transition-transform shadow-xl flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="size-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>Apply for Position <ArrowRight className="size-4" /></>
              )}
            </Button>
          </form>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">Join the Elite.</h1>
        <p className="text-lg text-white/50 mb-16 max-w-2xl">We are always looking for exceptional talent to join our institutional investment teams across London, Dubai, and New York.</p>
        
        <div className="space-y-4">
          {jobs.map((job) => (
            <div 
              key={job.role} 
              onClick={() => setSelectedJob(job)}
              className="group flex justify-between items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all cursor-pointer"
            >
              <div>
                <div className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{job.role}</div>
                <div className="flex gap-4 text-[10px] text-white/30 mt-1 uppercase tracking-widest">
                  <span>{job.loc}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <Button variant="ghost" className="size-10 rounded-full border border-white/10 flex items-center justify-center p-0 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 transition-all">
                <ArrowUpRight className="size-5" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}