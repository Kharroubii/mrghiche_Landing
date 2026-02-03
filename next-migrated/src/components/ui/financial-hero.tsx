"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from './button';

// Local casted components
const MotionSection = motion.section as any;
const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;
const MotionImg = motion.img as any;

interface FinancialHeroProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl1: string;
  imageUrl2: string;
  bgImageUrl?: string;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cardsVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const FinancialHero = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl1,
  imageUrl2,
  bgImageUrl,
  className,
}: FinancialHeroProps) => {
  const gridBackgroundStyle = {
    backgroundImage:
      'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)',
    backgroundSize: '3rem 3rem',
  };

  return (
    <MotionSection
      className={cn(
        'relative w-full overflow-hidden bg-[#030303] text-white',
        className
      )}
    >
      {/* Background Image Layer */}
      {bgImageUrl && (
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImageUrl} 
            alt="" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent" />
        </div>
      )}

      <div
        className="absolute inset-0 opacity-20 z-0"
        style={gridBackgroundStyle}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-0" />

      <MotionDiv
        className="relative max-w-6xl mx-auto flex min-h-[70vh] items-center justify-between px-6 py-20 lg:flex-row flex-col gap-16 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Left: Text Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2">
          <MotionH2
            className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl max-w-lg leading-tight"
            variants={itemVariants}
          >
            {title}
          </MotionH2>
          <MotionP
            className="mt-6 max-w-xl text-lg text-white/50 leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </MotionP>
          <MotionDiv variants={itemVariants} className="mt-8">
            <Button 
              size="lg" 
              className="h-14 px-10 text-base rounded-full bg-white text-black hover:scale-105 transition-transform font-bold"
              onClick={() => {
                if (buttonLink.startsWith('#')) {
                    // Logic for internal navigation if needed
                } else {
                    window.open(buttonLink, '_blank');
                }
              }}
            >
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </MotionDiv>
        </div>

        {/* Right: Card Images */}
        <MotionDiv
          className="relative lg:w-1/2 h-80 md:h-[450px] w-full flex items-center justify-center lg:justify-end"
          variants={cardsVariants}
        >
          {/* Back Card */}
          <MotionImg
            src={imageUrl2}
            alt="Investment Card Back"
            variants={cardItemVariants}
            whileHover={{ y: -15, rotate: -8, transition: { duration: 0.4, ease: "easeOut" } }}
            className="absolute h-48 md:h-72 lg:h-80 w-auto rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 object-cover transform -rotate-12 translate-x-12 z-0"
          />
          {/* Front Card */}
          <MotionImg
            src={imageUrl1}
            alt="Investment Card Front"
            variants={cardItemVariants}
            whileHover={{ y: -15, rotate: 12, transition: { duration: 0.4, ease: "easeOut" } }}
            className="absolute h-48 md:h-72 lg:h-80 w-auto rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 object-cover transform rotate-12 -translate-x-12 z-10"
          />
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  );
};