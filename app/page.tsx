"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { DemoHeroGeometric } from '@/components/DemoHero';
import { Logos3 } from '@/components/ui/logos3';
import { TestimonialCarousel } from '@/components/ui/testimonial-carousel';
import { FinancialHero } from '@/components/ui/financial-hero';
import { ShareholderReports, Report } from '@/components/ui/shareholder-reports';
import { Feature1 } from '@/components/ui/feature-1';
import TeamSection from '@/components/ui/team-section';
import { VideoPlayer } from '@/components/ui/video-player';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ExpandableCard } from '@/components/ui/expandable-card';
import { LocationCard } from '@/components/ui/location-card';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { SERVICES_DATA, shareholderReportsData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ShieldCheck, BarChart3, Globe } from 'lucide-react';

const MotionDiv = motion.div as any;

export default function Home() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    router.push(page === "home" ? "/" : `/${page}`);
  };

  const handleReportSelection = (report: Report) => {
    router.push(`/news/${report.slug}`);
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <DemoHeroGeometric />
      <Logos3 />

      <section className="bg-[#030303] py-12 md:py-20 px-6 relative z-10 overflow-hidden">
        <div className="mx-auto max-w-5xl border-t border-white/10 px-6 relative mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-indigo-400 -ml-6 -mt-3.5 block w-max bg-[#030303] px-6">
            The Strategies
          </span>
          
          <div className="mt-8 gap-8 sm:grid sm:grid-cols-2 md:mt-16 mb-12 items-center">
            <div className="sm:w-full">
              <h2 className="text-4xl font-bold sm:text-5xl text-white tracking-tighter">Our Services</h2>
            </div>
            <div className="mt-6 sm:mt-0 flex items-center justify-between">
              <p className="text-white/40 text-lg leading-relaxed flex-1">
                Diverse investment avenues tailored for resilient growth and risk-adjusted returns in global markets.
              </p>
            </div>
          </div>

          <Carousel 
            opts={{ align: 'start', loop: true }}
            className="w-full relative group/carousel"
          >
            <CarouselContent className="-ml-4">
              {SERVICES_DATA.map((service, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <ExpandableCard 
                    title={service.title}
                    description={service.description}
                    teaser={service.teaser}
                    src={service.src}
                    className="h-full"
                  >
                    {service.content(handleNavigate)}
                  </ExpandableCard>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <section className="bg-[#030303] py-12 md:py-20 px-6 relative z-10">
        <div className="mx-auto max-w-5xl border-t border-white/10 px-6 relative">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-indigo-400 -ml-6 -mt-3.5 block w-max bg-[#030303] px-6">
            The Journey
          </span>
          <VideoPlayer 
            title="The Mrghiche Legacy"
            thumbnailUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
            videoUrl="https://www.youtube.com/embed/fLeJJPxua3E" 
            aspectRatio="16/9"
          />
        </div>
      </section>

      <TeamSection />
      
      <section className="bg-[#030303] pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/10 via-white/[0.02] to-rose-500/10 border border-white/10 text-center shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/[0.01] pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight relative z-10">Established Excellence</h2>
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-start gap-y-10 gap-x-4 md:gap-x-8 relative z-10">
              <div className="flex flex-col items-center min-w-[100px] flex-1">
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-1 transition-colors">
                  <AnimatedCounter value={1} prefix="$" suffix="M+" />
                </div>
                <div className="text-white/30 text-[8px] font-bold uppercase tracking-[0.3em] text-center">AUM</div>
              </div>
              <div className="flex flex-col items-center min-w-[100px] flex-1">
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-1 transition-colors">
                  <AnimatedCounter value={35} suffix="%" />
                </div>
                <div className="text-white/30 text-[8px] font-bold uppercase tracking-[0.3em] text-center">Annual Target</div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <FinancialHero 
          title={<>Ready to Invest with <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Institutional Discipline?</span></>}
          description="Partner with a management team focused on structured processes, rigorous risk control, and consistent execution."
          buttonText="Join Us !"
          buttonLink="#"
          imageUrl1="https://images.unsplash.com/photo-1611974714024-4639454e4f8a?q=80&w=800&auto=format&fit=crop"
          imageUrl2="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop"
          className="border-y border-white/5"
      />

      <ShareholderReports 
        reports={shareholderReportsData} 
        subtitle="Strategic market performance and institutional results." 
        onReportClick={handleReportSelection}
      />

      <Feature1 
        title="Prioritizing talent and career growth"
        buttonPrimary={{ label: "Join Us !", href: "#", onClick: () => handleNavigate('contact') }}
        buttonSecondary={{ label: "Explore careers", href: "#", onClick: () => handleNavigate('careers') }}
        className="border-t border-white/5"
      />
    </MotionDiv>
  );
}