"use client";

import React from 'react';
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by global financial leaders",
  logos = [
    {
      id: "logo-1",
      description: "Astro",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto invert opacity-50",
    },
    {
      id: "logo-2",
      description: "Figma",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
      className: "h-7 w-auto invert opacity-50",
    },
    {
      id: "logo-3",
      description: "Next.js",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
      className: "h-7 w-auto invert opacity-50",
    },
    {
      id: "logo-4",
      description: "React",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
      className: "h-7 w-auto invert opacity-50",
    },
    {
      id: "logo-5",
      description: "shadcn/ui",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
      className: "h-7 w-auto invert opacity-50",
    },
    {
      id: "logo-6",
      description: "Supabase",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
      className: "h-7 w-auto invert opacity-50",
    },
    {
      id: "logo-7",
      description: "Tailwind CSS",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
      className: "h-4 w-auto invert opacity-50",
    },
    {
      id: "logo-8",
      description: "Vercel",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
      className: "h-7 w-auto invert opacity-50",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-24 border-t border-white/5 bg-[#030303]">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="my-6 text-sm font-semibold uppercase tracking-widest text-white/40">
          {heading}
        </h2>
      </div>
      <div className="pt-8">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.5 })]}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };