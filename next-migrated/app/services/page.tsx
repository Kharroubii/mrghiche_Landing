"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ExpandableCard } from '@/components/ui/expandable-card';
import { SERVICES_DATA } from '@/lib/data';

const MotionDiv = motion.div as any;

export default function Services() {
  const router = useRouter();
  const handleNavigate = (page: string) => {
    router.push(page === "home" ? "/" : `/${page}`);
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-48 md:pt-64 pb-24 px-6 w-full"
    >
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">Our Expertise.</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Comprehensive investment strategies tailored for institutional growth and capital preservation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {SERVICES_DATA.map((service, idx) => (
          <div key={idx} className="h-[420px]">
            <ExpandableCard 
              title={service.title}
              description={service.description}
              teaser={service.teaser}
              src={service.src}
              className="h-full"
            >
              {service.content(handleNavigate)}
            </ExpandableCard>
          </div>
        ))}
      </div>
    </MotionDiv>
  );
}