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
          
          <div className="mt-8 gap-8 sm:grid sm:grid-cols-2 md:mt-16 mb-12">
            <div className="sm:w-full">
              <h2 className="text-4xl font-bold sm:text-5xl text-white tracking-tighter">Our Story</h2>
            </div>
            <div className="mt-6 sm:mt-0 flex items-center">
              <p className="text-white/40 text-lg leading-relaxed">
                A journey defined by a relentless commitment to excellence and the pursuit of strategic advantages in complex global markets.
              </p>
            </div>
          </div>

          <VideoPlayer 
            title="The Mrghiche Legacy"
            description="A visual narrative exploring our roots, our team, and our commitment to institutional excellence."
            thumbnailUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
            videoUrl="https://www.youtube.com/embed/fLeJJPxua3E" 
            aspectRatio="16/9"
          />
        </div>
      </section>

      <TeamSection />
      
      <section className="bg-[#030303] py-12 md:py-20 px-6 relative z-10">
        <div className="mx-auto max-w-5xl border-t border-white/10 px-6 relative">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-indigo-400 -ml-6 -mt-3.5 block w-max bg-[#030303] px-6">
            The Insights
          </span>

          <div className="mt-8 gap-8 sm:grid sm:grid-cols-2 md:mt-16 mb-12 text-left">
            <div className="sm:w-full">
              <h2 className="text-4xl font-bold sm:text-5xl text-white tracking-tighter">Expert Insights</h2>
            </div>
            <div className="mt-6 sm:mt-0 flex items-center">
              <p className="text-white/40 text-lg leading-relaxed">
                Institutional feedback and performance validation from our strategic partners and institutional collaborators.
              </p>
            </div>
          </div>

          <TestimonialCarousel className="mt-12" />
        </div>
      </section>

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
            <p className="text-white/50 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed text-base md:text-lg">
              Since our founding in 2019, Mrghiche Capital has maintained a steadfast commitment to institutional-grade execution and rigorous performance standards.
            </p>
            
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

              <div className="flex flex-col items-center min-w-[100px] flex-1">
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-1 transition-colors">
                  <AnimatedCounter value={20} suffix="+" />
                </div>
                <div className="text-white/30 text-[8px] font-bold uppercase tracking-[0.3em] text-center">Investors</div>
              </div>

              <div className="flex flex-col items-center min-w-[100px] flex-1">
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-1 transition-colors">
                  <AnimatedCounter value={30} suffix="+" />
                </div>
                <div className="text-white/30 text-[8px] font-bold uppercase tracking-[0.3em] text-center">Employees</div>
              </div>

              <div className="flex flex-col items-center min-w-[100px] flex-1">
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-1 transition-colors">
                  <AnimatedCounter value={4} />
                </div>
                <div className="text-white/30 text-[8px] font-bold uppercase tracking-[0.3em] text-center">Strategic Hubs</div>
              </div>

              <div className="flex flex-col items-center min-w-[100px] flex-1">
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-1 transition-colors">
                  <AnimatedCounter value={2019} duration={1} />
                </div>
                <div className="text-white/30 text-[8px] font-bold uppercase tracking-[0.3em] text-center">Founded</div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <section className="bg-[#030303] py-16 md:py-24 px-6 relative z-10 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-center text-center hover:bg-white/[0.04] transition-all">
              <div className="text-white/30 mb-4 flex justify-center"><ShieldCheck className="size-6" /></div>
              <div className="text-2xl md:text-3xl font-bold text-white tracking-tighter uppercase mb-2">Institutional Grade</div>
              <div className="text-white/40 text-sm leading-relaxed">Built on a framework of rigorous compliance, risk control, and operational excellence.</div>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-center text-center hover:bg-white/[0.04] transition-all">
              <div className="text-white/30 mb-4 flex justify-center"><BarChart3 className="size-6" /></div>
              <div className="text-2xl md:text-3xl font-bold text-white tracking-tighter uppercase mb-2">Alpha Generation</div>
              <div className="text-white/40 text-sm leading-relaxed">Proprietary strategies designed to deliver consistent, non-correlated market returns.</div>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col justify-center text-center hover:bg-white/[0.04] transition-all">
              <div className="text-white/30 mb-4 flex justify-center"><Globe className="size-6" /></div>
              <div className="text-2xl md:text-3xl font-bold text-white tracking-tighter uppercase mb-2">Global Network</div>
              <div className="text-white/40 text-sm leading-relaxed">Strategically positioned in Dubai, London, USA, and Morocco to capture global alpha.</div>
            </div>
          </div>
        </div>
      </section>

      <FinancialHero 
          title={
              <>
                  Ready to Invest with <br/>
                  <span className={cn(
                      "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                  )}>
                      Institutional Discipline?
                  </span>
              </>
          }
          description="Partner with a management team focused on structured processes, rigorous risk control, and consistent execution across market conditions."
          buttonText="Join Us !"
          buttonLink="#"
          imageUrl1="https://images.unsplash.com/photo-1611974714024-4639454e4f8a?q=80&w=800&auto=format&fit=crop"
          imageUrl2="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop"
          bgImageUrl="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2000&auto=format&fit=crop"
          className="border-y border-white/5"
      />

      <ShareholderReports 
        reports={shareholderReportsData} 
        subtitle="Deep insights into our strategic market performance and institutional results." 
        onReportClick={handleReportSelection}
      />

      <section className="bg-[#030303] py-12 md:py-20 px-6 relative z-10">
        <div className="mx-auto max-w-5xl border-t border-white/10 px-6 relative">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-indigo-400 -ml-6 -mt-3.5 block w-max bg-[#030303] px-6">
            The Locations
          </span>

          <div className="mt-8 gap-8 sm:grid sm:grid-cols-2 md:mt-16 mb-12 text-left">
            <div className="sm:w-full">
              <h2 className="text-4xl font-bold sm:text-5xl text-white tracking-tighter">Our Strategic Hubs</h2>
            </div>
            <div className="mt-6 sm:mt-0 flex items-center">
              <p className="text-white/40 text-lg leading-relaxed">
                Global operations strategically positioned in major gateway cities to maintain market connectivity and capture international alpha opportunities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto text-left">
              <LocationCard 
                city="Dubai" 
                address="Business Bay, UAE" 
                imageUrl="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop" 
                directionsUrl="#" 
              />
              <LocationCard 
                city="London" 
                address="15 Berkeley Square, Mayfair" 
                imageUrl="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop" 
                directionsUrl="#" 
              />
              <LocationCard 
                city="New York" 
                address="Wall Street, Manhattan" 
                imageUrl="https://images.unsplash.com/photo-1496871455396-14e56815f1f4?q=80&w=800&auto=format&fit=crop" 
                directionsUrl="#" 
              />
              <LocationCard 
                city="Casablanca" 
                address="Anfa, Morocco" 
                imageUrl="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop" 
                directionsUrl="#" 
              />
          </div>
        </div>
      </section>

      <Feature1 
        title="Prioritizing talent and career growth"
        buttonPrimary={{ label: "Join Us !", href: "#", onClick: () => handleNavigate('contact') }}
        buttonSecondary={{ label: "Explore careers", href: "#", onClick: () => handleNavigate('careers') }}
        className="border-t border-white/5"
      />
    </MotionDiv>
  );
}