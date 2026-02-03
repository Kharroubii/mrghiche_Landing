"use client";

import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface Feature1Props {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonPrimary?: {
    label: string;
    href: string;
    onClick?: () => void;
  };
  buttonSecondary?: {
    label: string;
    href: string;
    onClick?: () => void;
  };
  className?: string;
}

export const Feature1 = ({
  title = "Prioritizing talent and career growth",
  description = "A talent-driven company is, by definition, an inclusive one. We’re committed to creating a workplace where employees feel like they belong.",
  imageSrc = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  imageAlt = "Team collaboration and growth",
  buttonPrimary = {
    label: "Join Us !",
    href: "#",
  },
  buttonSecondary = {
    label: "Explore careers",
    href: "#",
  },
  className,
}: Feature1Props) => {
  return (
    <section className={cn("py-24 md:py-32 px-6 bg-[#030303] overflow-hidden", className)}>
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 leading-tight">
              {title}
            </h2>
            <p className="mb-10 max-w-xl text-white/40 text-lg md:text-xl font-light leading-relaxed">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button 
                onClick={buttonPrimary.onClick}
                className="rounded-full h-14 px-8 bg-white text-black font-bold text-base hover:scale-[1.03] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                {buttonPrimary.label}
              </Button>
              <Button 
                variant="outline" 
                onClick={buttonSecondary.onClick}
                className="rounded-full h-14 px-8 border-white/10 hover:bg-white/5 font-bold text-base transition-all duration-300"
              >
                {buttonSecondary.label}
              </Button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/10 via-rose-500/5 to-violet-500/10 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-[320px] md:h-[420px] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};