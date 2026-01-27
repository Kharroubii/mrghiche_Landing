
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, ShieldCheck, TrendingUp, Coins } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { ExpandableCard } from '../../components/ui/expandable-card';

const SERVICES_DATA = [
  { 
    id: "pe",
    title: "Private Equity", 
    description: "Growth Capital",
    teaser: "We identify companies at inflection points where our operational toolkit can unlock significant value. Our strategy is built on principles of partnership and active management.",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    content: () => (
      <>
        <article className="space-y-4 text-white/70">
          <p className="font-semibold text-white text-xl">The Pursuit of Operational Alpha</p>
          <p>Our Private Equity strategy is built on the principle of partnership. We identify companies at inflection points where our operational toolkit can unlock significant value.</p>
        </article>
        <div className="mt-8 grid grid-cols-2 gap-4 w-full">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-indigo-400">22%</div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Target IRR</div>
          </div>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-indigo-400">$250M+</div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Avg. Deal Size</div>
          </div>
        </div>
      </>
    )
  },
  { 
    id: "re",
    title: "Real Estate", 
    description: "Core-Plus Assets",
    teaser: "Active management of prime commercial, industrial, and logistics assets in major global gateway cities. We focus on acquisition and value creation in high-barrier markets.",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    content: () => (
      <>
        <article className="space-y-4 text-white/70">
          <p className="font-semibold text-white text-xl">Redefining Urban Value</p>
          <p>We specialize in the acquisition and active management of prime commercial, industrial, and logistics assets in major global gateway cities.</p>
        </article>
        <div className="grid grid-cols-1 gap-3 w-full mt-6">
          {['Logistics & Fulfillment Hubs', 'Sustainable Grade-A Offices', 'Institutional Residential Portfolios'].map(t => (
            <div key={t} className="flex items-center gap-3 text-sm text-white/70 bg-white/5 p-3 rounded-xl border border-white/10">
              <ShieldCheck className="size-4 text-indigo-400" /> {t}
            </div>
          ))}
        </div>
      </>
    )
  },
  { 
    id: "lm",
    title: "Liquid Markets", 
    description: "Alpha Strategies",
    teaser: "Sophisticated quant-driven strategies across global equities, fixed income, and cross-asset liquidity pools. We leverage proprietary engines and alternative data for precision.",
    src: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    content: () => (
      <>
        <article className="space-y-4 text-white/70">
          <p className="font-semibold text-white text-xl">Precision in Performance</p>
          <p>Our Liquid Markets division employs sophisticated quant-driven strategies across global equities, fixed income, and cross-asset liquidity pools.</p>
        </article>
        <div className="mt-8 flex items-center gap-4 bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-2xl">
          <TrendingUp className="size-8 text-indigo-400 shrink-0" />
          <p className="text-sm italic text-white/80 leading-relaxed">"Our proprietary engines process over 2.5TB of alternative data daily."</p>
        </div>
      </>
    )
  },
  { 
    id: "am",
    title: "Asset Management", 
    description: "Legacy Preservation",
    teaser: "Strategic portfolio construction for family offices and institutional endowments. We focus on multi-generational capital preservation through disciplined allocation models.",
    src: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
    content: () => (
      <>
        <article className="space-y-4 text-white/70">
          <p className="font-semibold text-white text-xl">Beyond Wealth Management</p>
          <p>Strategic portfolio construction for family offices and institutional endowments. We focus on multi-generational capital preservation.</p>
        </article>
        <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10"><Coins className="size-4 text-indigo-400" /> Strategic Allocation</div>
          <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10"><ShieldCheck className="size-4 text-indigo-400" /> Due Diligence</div>
        </div>
      </>
    )
  },
  { 
    id: "da",
    title: "Digital Assets", 
    description: "Web3 Infrastructure",
    teaser: "Navigating the institutional frontier of the decentralized economy through strategic investments. We focus on foundational blockchain protocols and secure infrastructure.",
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    content: () => (
      <>
        <article className="space-y-4 text-white/70">
          <p className="font-semibold text-white text-xl">The Institutional Frontier</p>
          <p>Navigating the transition to a decentralized economy through strategic investments in foundational blockchain protocols.</p>
        </article>
        <div className="mt-8 flex flex-wrap gap-2">
          {['Security', 'Scalability', 'Compliance'].map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] uppercase tracking-[0.15em] font-bold text-indigo-400">{tag}</span>
          ))}
        </div>
      </>
    )
  },
  { 
    id: "adv",
    title: "Advisory Services", 
    description: "Global Strategy",
    teaser: "Independent, high-conviction advice on capital structure and international market expansion. We specialize in complex cross-border transactions and strategic advisory.",
    src: "https://images.unsplash.com/photo-1454165833767-13a6ad0a7a58?auto=format&fit=crop&w=800&q=80",
    content: () => (
      <>
        <article className="space-y-4 text-white/70">
          <p className="font-semibold text-white text-xl">Navigating Complexity</p>
          <p>Providing independent, high-conviction advice on capital structure, international market expansion, and complex cross-border transactions.</p>
        </article>
      </>
    )
  }
];

export default function Services() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Our Services</h1>
        <p className="text-lg text-white/50 max-w-2xl mx-auto">Diverse investment avenues tailored for resilient growth and risk-adjusted returns.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, idx) => (
          <ExpandableCard 
            key={idx}
            title={service.title}
            description={service.description}
            teaser={service.teaser}
            src={service.src}
          >
            {service.content()}
            <Button 
              onClick={() => router.push('/contact')}
              className="mt-10 w-full rounded-full py-8 bg-white text-black font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              Join Us ! <ArrowRight className="size-5" />
            </Button>
          </ExpandableCard>
        ))}
      </div>
    </motion.div>
  );
}
