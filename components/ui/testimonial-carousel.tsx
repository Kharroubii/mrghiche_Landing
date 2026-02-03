"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Twitter,
  Youtube,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "../../lib/utils";

const Tiktok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 8V7l-1.41.41a6.93 6.93 0 0 1-5 2V3h-4v11a4 4 0 1 1-4-4V6.07a8 8 0 1 0 8 7.93V8.79A11 11 0 0 0 21 8z" />
  </svg>
);

interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  tiktokUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Michael Chen",
    title: "Senior Portfolio Strategist",
    description:
      "Working with Mrghiche Capital completely changed our perspective on risk management. Their expertise in institutional discipline helped us navigate volatile markets with confidence.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=600&auto=format&fit=crop",
    tiktokUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Jessica Roberts",
    title: "Chief Investment Officer, InsightX",
    description:
      "The precision and data-driven approach of this team is unparalleled. Their insights provided us with a competitive edge that significantly boosted our capital growth over the last quarter.",
    imageUrl:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80",
    tiktokUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "William Carter",
    title: "Private Equity Advisor",
    description:
      "Exceptional technical leadership and a deep understanding of global market trends. They exceed every milestone and maintain a standard of excellence that is rare in this industry.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    tiktokUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
];

export interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length
    );

  const currentTestimonial = testimonials[currentIndex];

  const socialIcons = [
    { icon: Tiktok, url: currentTestimonial.tiktokUrl, label: "TikTok" },
    { icon: Twitter, url: currentTestimonial.twitterUrl, label: "Twitter" },
    { icon: Youtube, url: currentTestimonial.youtubeUrl, label: "YouTube" },
    { icon: Linkedin, url: currentTestimonial.linkedinUrl, label: "LinkedIn" },
  ];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      <div className='hidden md:flex relative items-center'>
        <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-white/5 flex-shrink-0'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <img
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                className='w-full h-full object-cover'
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className='bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className='mb-6'>
                <h2 className='text-2xl font-bold text-white mb-2'>
                  {currentTestimonial.name}
                </h2>

                <p className='text-sm font-medium text-indigo-400'>
                  {currentTestimonial.title}
                </p>
              </div>

              <p className='text-white/70 text-base leading-relaxed mb-8 italic'>
                "{currentTestimonial.description}"
              </p>

              <div className='flex space-x-4'>
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  <a
                    key={label}
                    href={url || "#"}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all hover:bg-white hover:text-black hover:scale-110 cursor-pointer'
                    aria-label={label}
                  >
                    <IconComponent className='w-4 h-4' />
                  </a>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className='md:hidden max-sm mx-auto text-center'>
        <div className='w-full aspect-square bg-white/5 rounded-3xl overflow-hidden mb-6'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <img
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                className='w-full h-full object-cover'
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className='px-4'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className='text-xl font-bold text-white mb-2'>
                {currentTestimonial.name}
              </h2>
              
              <p className='text-sm font-medium text-indigo-400 mb-4'>
                {currentTestimonial.title}
              </p>
              
              <p className='text-white/60 text-sm leading-relaxed mb-6 italic'>
                "{currentTestimonial.description}"
              </p>
              
              <div className='flex justify-center space-x-4'>
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  <a
                    key={label}
                    href={url || "#"}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors hover:bg-white hover:text-black'
                    aria-label={label}
                  >
                    <IconComponent className='w-4 h-4' />
                  </a>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className='flex justify-center items-center gap-6 mt-12'>
        <button
          onClick={handlePrevious}
          aria-label='Previous testimonial'
          className='w-12 h-12 rounded-full bg-white/5 border border-white/10 shadow-md flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-white'
        >
          <ChevronLeft className='w-6 h-6' />
        </button>

        <div className='flex gap-2'>
          {testimonials.map((_, testimonialIndex) => (
            <button
              key={testimonialIndex}
              onClick={() => setCurrentIndex(testimonialIndex)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all cursor-pointer",
                testimonialIndex === currentIndex
                  ? "bg-white w-6"
                  : "bg-white/20"
              )}
              aria-label={`Go to testimonial ${testimonialIndex + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label='Next testimonial'
          className='w-12 h-12 rounded-full bg-white/5 border border-white/10 shadow-md flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-white'
        >
          <ChevronRight className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
}
