
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Instagram } from 'lucide-react';
import TeamSection from '../../components/ui/team-section';

export default function WhoWeAre() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
          Institutional Discipline. <br/><span className="text-white/40">Market Agility.</span>
        </h1>
        
        <div className="relative">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
            Mrghiche Capital is an independent investment management firm founded in 2019 by Mohammed Kharroubi, with a clear mission: to deliver disciplined, performance-driven asset management through innovation, expertise, and institutional standards.
          </p>

          <AnimatePresence>
            {!isExpanded && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none"
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-6 py-6 border-t border-white/10 mt-6">
                  <p className="text-white/60 leading-relaxed text-base">
                    Built on deep market experience and a strong foundation in perpetual futures trading, Mrghiche Capital has evolved from a founder-led trading operation into a fully structured investment firm. Today, the firm manages over USD 1 million in assets under management, serving investors who seek professional oversight, robust risk management, and consistent execution across market conditions.
                  </p>

                  <section>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Our Founder</h3>
                    <p className="text-white/60 leading-relaxed text-base">
                      Mohammed Kharroubi is a seasoned perpetual futures trading expert with years of hands-on experience navigating complex and volatile markets. His disciplined approach to risk, data-driven decision-making, and active market engagement form the core philosophy of Mrghiche Capital.
                      <br /><br />
                      What began as a proprietary trading journey grew into a broader vision: building an institution capable of managing capital at scale while maintaining agility, transparency, and performance accountability.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Our Firm</h3>
                    <p className="text-white/60 leading-relaxed mb-6 text-base">
                      Mrghiche Capital operates as a multi-location, professionally structured investment firm, supported by specialized teams across key functions, including:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                      {['Portfolio Management', 'Risk Management', 'Research & Strategy', 'Operations & Compliance', 'Investor Relations'].map(item => (
                        <div key={item} className="p-3 rounded-xl bg-white/5 border border-white/10 text-[9px] text-white/40 uppercase tracking-widest font-bold">
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="text-white/60 leading-relaxed text-base">
                      We currently operate across four strategic locations: <strong>Dubai, London, United States, and Morocco</strong>. This global footprint allows us to remain closely connected to international markets, talent, and capital flows while maintaining operational resilience.
                    </p>
                  </section>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-bold uppercase tracking-widest text-[10px] py-2.5 px-6 rounded-full bg-white/5 border border-white/10"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp className="size-3" /></>
            ) : (
              <>See More <ChevronDown className="size-3" /></>
            )}
          </button>
          
          <a 
            href="https://instagram.com/mrghiche" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px] py-2.5 px-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 cursor-pointer"
          >
            <Instagram className="size-3" /> Connect @mrghiche
          </a>
        </div>

        <div className="mt-16 mb-24 rounded-[2.5rem] overflow-hidden border border-white/10 h-[400px] shadow-2xl relative group">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" 
            alt="Institutional Office Presence"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold mb-1">Global Presence</p>
            <p className="text-white text-lg font-light">Dubai • London • USA • Morocco</p>
          </div>
        </div>
      </div>
      
      <TeamSection />
    </motion.div>
  );
}
