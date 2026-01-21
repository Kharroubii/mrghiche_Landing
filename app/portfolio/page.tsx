"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { MasonryGrid } from '@/components/ui/masonry-grid';

const items = [
    {
      tag: "Real Estate",
      title: "Prime Mayfair Commercial",
      location: "London, UK",
      flag: "🇬🇧",
      desc: "Multi-tenant office and retail asset in London's premier business district, delivering consistent core-plus yields through active management and modernization.",
      image: "https://images.unsplash.com/photo-1549463590-721204899981?q=80&w=1000&auto=format&fit=crop"
    },
    {
      tag: "Tech Growth",
      title: "Global SaaS Fund II",
      location: "Palo Alto, US",
      flag: "🇺🇸",
      desc: "Concentrated portfolio of B2B SaaS leaders with prevun recurring revenue models and exceptional market capture strategies.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      tag: "Renewables",
      title: "Nordic Energy Portfolio",
      location: "Stockholm, SE",
      flag: "🇸🇪",
      desc: "A portfolio of wind and hydro-electric assets supporting the transition to a carbon-neutral industrial base. This strategic play focuses on long-dated energy security.",
      image: "https://images.unsplash.com/photo-1466611653911-954ff21b6748?q=80&w=1000&auto=format&fit=crop"
    },
    {
      tag: "Digital Assets",
      title: "Institutional Web3 Fund",
      location: "Global Digital",
      flag: "🌐",
      desc: "Strategic long-term positions in foundational protocols and infrastructure powering the decentralized economy, focusing on scalability and security.",
      image: "https://images.unsplash.com/photo-1621416848446-991125d75b06?q=80&w=1000&auto=format&fit=crop"
    },
    {
      tag: "Biotech",
      title: "Life Sciences Venture",
      location: "Basel, CH",
      flag: "🇨🇭",
      desc: "Investment in late-stage drug discovery and precision medicine platforms with transformative potential for global healthcare systems.",
      image: "https://images.unsplash.com/photo-1532187875605-2fe35952016a?q=80&w=1000&auto=format&fit=crop"
    },
    {
      tag: "Logistics",
      title: "GBA Logistics Hub",
      location: "Shenzhen, CN",
      flag: "🇨🇳",
      desc: "Automated logistics and distribution center serving the Greater Bay Area's high-tech manufacturing sector.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
    }
  ];

export default function PortfolioPage() {
  const [cols, setCols] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCols(1);
      else if (window.innerWidth < 1024) setCols(2);
      else setCols(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Strategic Portfolio</h1>
        <p className="text-lg text-white/50 max-w-2xl mx-auto">A selection of high-impact investments across key institutional asset classes, meticulously managed for long-term growth.</p>
      </div>

      <MasonryGrid columns={cols} gap={8} className="max-w-7xl mx-auto">
        {items.map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-[2rem] bg-white/[0.03] border border-white/10 p-5 hover:bg-white/[0.05] transition-all duration-500">
            <div className="h-auto w-full rounded-2xl overflow-hidden mb-5 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700">
              <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[9px] uppercase tracking-widest text-indigo-400 font-bold border border-indigo-500/30 px-2 py-1 rounded-md">{item.tag}</span>
              
              <div className="flex items-center gap-1.5">
                <MapPin size={10} className="text-white/40" />
                <span className="text-base inline-block normal-case tracking-normal leading-none select-none">
                   {item.flag}
                </span>
                <span className="text-[9px] text-white/30 uppercase tracking-widest">
                  {item.location}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors tracking-tight flex items-center justify-between">
              {item.title} <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-all" />
            </h3>
            <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </MasonryGrid>
    </motion.div>
  );
}