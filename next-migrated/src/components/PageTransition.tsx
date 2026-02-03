"use client";

import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Use casted component to bypass potential type inference issues in this environment
const MotionDiv = motion.div as any;

/**
 * PageTransition provides the Framer Motion lifecycle for App Router pages.
 * By keying the wrapper with the pathname, we allow internal page animations
 * (defined in the individual page.tsx files) to play their entry and exit states.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <MotionDiv
        key={pathname}
        className="w-full"
      >
        {children}
      </MotionDiv>
    </AnimatePresence>
  );
}
