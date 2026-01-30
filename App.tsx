
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/ui/header-2';
import { DemoHeroGeometric } from './components/DemoHero';
import { Logos3 } from './components/ui/logos3';
import { TestimonialCarousel } from './components/ui/testimonial-carousel';
import { Button } from './components/ui/button';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Globe, 
  ArrowUpRight, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Coins, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  BarChart3, 
  Instagram,
  ArrowLeft,
  FileUp,
  CheckCircle2,
  FileDown
} from 'lucide-react';
import Footer4Col from './components/ui/footer-4-col';
import { VideoPlayer } from './components/ui/video-player';
import TeamSection from './components/ui/team-section';
import { MasonryGrid } from './components/ui/masonry-grid';
import { FinancialHero } from './components/ui/financial-hero';
import { ExpandableCard } from './components/ui/expandable-card';
import { LocationCard } from './components/ui/location-card';
import { ShareholderReports, Report } from './components/ui/shareholder-reports';
import { AnimatedCounter } from './components/ui/animated-counter';
import { Carousel, CarouselContent, CarouselItem } from './components/ui/carousel';
import { Feature1 } from './components/ui/feature-1';
import { cn } from './lib/utils';

// --- Shared Data ---

const SERVICES_DATA = [
  { 
    id: "pe",
    title: "Private Equity", 
    description: "Growth Capital",
    teaser: "We identify companies at inflection points where our operational toolkit can unlock significant value. Our strategy is built on principles of partnership and active management.",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    content: (onNavigate: (p: string) => void) => (
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
        <Button 
          onClick={() => onNavigate('contact')}
          className="mt-10 w-full rounded-full py-8 bg-white text-black font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
        >
          Join Us ! <ArrowRight className="size-5" />
        </Button>
      </>
    )
  },
  { 
    id: "re",
    title: "Real Estate", 
    description: "Core-Plus Assets",
    teaser: "Active management of prime commercial, industrial, and logistics assets in major global gateway cities. We focus on acquisition and value creation in high-barrier markets.",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    content: (onNavigate: (p: string) => void) => (
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
        <Button 
          onClick={() => onNavigate('contact')}
          className="mt-10 w-full rounded-full py-8 bg-white text-black font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
        >
          Join Us ! <ArrowRight className="size-5" />
        </Button>
      </>
    )
  },
  { 
    id: "lm",
    title: "Liquid Markets", 
    description: "Alpha Strategies",
    teaser: "Sophisticated quant-driven strategies across global equities, fixed income, and cross-asset liquidity pools. We leverage proprietary engines and alternative data for precision.",
    src: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    content: (onNavigate: (p: string) => void) => (
      <>
        <article className="space-y-4 text-white/70">
          <p className="font-semibold text-white text-xl">Precision in Performance</p>
          <p>Our Liquid Markets division employs sophisticated quant-driven strategies across global equities, fixed income, and cross-asset liquidity pools.</p>
        </article>
        <div className="mt-8 flex items-center gap-4 bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-2xl">
          <TrendingUp className="size-8 text-indigo-400 shrink-0" />
          <p className="text-sm italic text-white/80 leading-relaxed">"Our proprietary engines process over 2.5TB of alternative data daily."</p>
        </div>
        <Button 
          onClick={() => onNavigate('contact')}
          className="mt-10 w-full rounded-full py-8 bg-white text-black font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
        >
          Join Us ! <ArrowRight className="size-5" />
        </Button>
      </>
    )
  },
  { 
    id: "am",
    title: "Asset Management", 
    description: "Legacy Preservation",
    teaser: "Strategic portfolio construction for family offices and institutional endowments. We focus on multi-generational capital preservation through disciplined allocation models.",
    src: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
    content: (onNavigate: (p: string) => void) => (
      <>
        <article className="space-y-4 text-white/70">
          <p className="font-semibold text-white text-xl">Beyond Wealth Management</p>
          <p>Strategic portfolio construction for family offices and institutional endowments. We focus on multi-generational capital preservation.</p>
        </article>
        <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10"><Coins className="size-4 text-indigo-400" /> Strategic Allocation</div>
          <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10"><ShieldCheck className="size-4 text-indigo-400" /> Due Diligence</div>
        </div>
        <Button 
          onClick={() => onNavigate('contact')}
          className="mt-10 w-full rounded-full py-8 bg-white text-black font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
        >
          Join Us ! <ArrowRight className="size-5" />
        </Button>
      </>
    )
  },
  { 
    id: "da",
    title: "Digital Assets", 
    description: "Web3 Infrastructure",
    teaser: "Navigating the institutional frontier of the decentralized economy through strategic investments. We focus on foundational blockchain protocols and secure infrastructure.",
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    content: (onNavigate: (p: string) => void) => (
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
        <Button 
          onClick={() => onNavigate('contact')}
          className="mt-10 w-full rounded-full py-8 bg-white text-black font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
        >
          Join Us ! <ArrowRight className="size-5" />
        </Button>
      </>
    )
  },
  { 
    id: "adv",
    title: "Advisory Services", 
    description: "Global Strategy",
    teaser: "Independent, high-conviction advice on capital structure and international market expansion. We specialize in complex cross-border transactions and strategic advisory.",
    src: "https://images.unsplash.com/photo-1454165833767-13a6ad0a7a58?auto=format&fit=crop&w=800&q=80",
    content: (onNavigate: (p: string) => void) => (
      <>
        <article className="space-y-4 text-white/70">
          <p className="font-semibold text-white text-xl">Navigating Complexity</p>
          <p>Providing independent, high-conviction advice on capital structure, international market expansion, and complex cross-border transactions.</p>
        </article>
        <Button 
          onClick={() => onNavigate('contact')}
          className="mt-10 w-full rounded-full py-8 bg-white text-black font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
        >
          Join Us ! <ArrowRight className="size-5" />
        </Button>
      </>
    )
  }
];

const shareholderReportsData: Report[] = [
  {
    id: "q3-2024",
    quarter: "Q3 2024 Results",
    period: "Oct - Dec 2024",
    imageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    isNew: true
  },
  {
    id: "q2-2024",
    quarter: "Q2 2024 Results",
    period: "Jul - Sep 2024",
    imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "q1-2024",
    quarter: "Q1 2024 Results",
    period: "Apr - Jun 2024",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "fy-2023",
    quarter: "FY 2023 Annual Report",
    period: "Full Year 2023",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "q3-2023",
    quarter: "Q3 2023 Growth Letter",
    period: "Oct - Dec 2023",
    imageSrc: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop",
  }
];

// --- View Components ---

const HomeView = ({ onNavigate, onSelectReport }: { onNavigate: (page: string) => void, onSelectReport: (report: Report) => void }) => (
  <motion.div
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
                  {service.content(onNavigate)}
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
        <motion.div 
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
        </motion.div>
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
      onReportClick={onSelectReport}
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
      buttonPrimary={{ label: "Join Us !", href: "#", onClick: () => onNavigate('contact') }}
      buttonSecondary={{ label: "Explore careers", href: "#", onClick: () => onNavigate('careers') }}
      className="border-t border-white/5"
    />
  </motion.div>
);

const ReportDetailView = ({ report, onBack }: { report: Report | null, onBack: () => void }) => {
  if (!report) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-24 pb-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white/40 hover:text-white mb-12 transition-colors uppercase tracking-widest text-[10px] font-bold group"
        >
          <ArrowLeft className="size-3 group-hover:-translate-x-1 transition-transform" /> Back
        </button>

        <header className="mb-12 border-b border-white/10 pb-10">
          <div className="space-y-4">
            <p className="text-indigo-400 font-bold uppercase tracking-[0.25em] text-xs">
              {report.period}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
              {report.quarter}
            </h1>
            <p className="text-white/40 font-medium italic text-lg md:text-xl">
              Institutional performance analysis and strategic market outcomes.
            </p>
          </div>
        </header>

        <article className="prose prose-invert max-w-none space-y-10">
          <div className="space-y-6 text-white/70 leading-[1.7] font-light text-lg">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Letter to Shareholders</h2>
            <p className="italic font-medium text-white/90">Dear Institutional Partners and Shareholders,</p>
            <p>
              In the performance period ending {report.period}, Mrghiche Capital has demonstrated continued resilience and strategic clarity amidst shifting global macro-economic cycles. Our focus remains steadfast on the institutionalization of our processes and the consistent generation of alpha through data-driven precision.
            </p>
            <p>
              During {report.quarter}, we achieved significant milestones in our alternative investment pods, particularly within our Liquid Markets and Digital Asset infrastructure strategies. Our risk management frameworks successfully navigated periods of heightened volatility, maintaining capital preservation as our primary directive.
            </p>
            <p>
              We have also expanded our footprint in London and Dubai, attracting top-tier talent from global bulge-bracket firms to lead our new Strategic Advisory division. This expansion is not merely geographical but operational, strengthening our internal due diligence capabilities across cross-border private equity opportunities.
            </p>
            <p>
              As we move into the next phase of our growth, we remain committed to transparency, discipline, and the pursuit of non-correlated returns for our stakeholders.
            </p>

            <div className="pt-10 border-t border-white/5 mt-10">
              <p className="text-white font-bold text-base md:text-lg">Mohammed Kharroubi</p>
              <p className="text-white/40 text-sm">Founder & CEO, Mrghiche Capital</p>
            </div>
          </div>

          <div className="mt-20 p-10 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 relative z-10">Institutional Disclosure Packet</h3>
            <p className="text-white/40 mb-8 max-w-sm mx-auto relative z-10 text-sm md:text-base">
              Download the complete financial disclosure, including full audit reports and regulatory statements.
            </p>
            <Button 
              className="rounded-full px-8 py-6 bg-white text-black font-bold text-base hover:scale-[1.05] transition-transform flex items-center gap-3 mx-auto relative z-10"
            >
              <FileDown className="size-5" /> Download PDF Version
            </Button>
          </div>
        </article>

        <div className="mt-24 pt-8 border-t border-white/10 text-center">
          <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] mb-3">Confidential Disclosure</p>
          <p className="text-white/30 text-xs max-w-xl mx-auto leading-relaxed italic">
            This letter is provided for institutional informational purposes only. Past performance is not indicative of future results. Detailed financial data available in the secure portal.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const WhoWeAreView = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-24 pb-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
          Institutional Discipline. <br/><span className="text-white/40">Market Agility.</span>
        </h1>
        
        <div className="relative">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
            Mrghiche Capital is an independent investment management firm founded in 2019 by Mohammed Kharroubi, with a clear mission: to deliver disciplined, performance-driven asset management through innovation, expertise, and institutional standards.
          </p>

          <AnimatePresence>
            {!isExpanded && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none"
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-6 py-6 border-t border-white/10 mt-6">
                  <p className="text-white/60 leading-relaxed text-base">
                    Built on deep market experience and a strong foundation in perpetual futures trading, Mrghiche Capital has evolved from a founder-led trading operation into a fully structured investment firm. Today, the firm manages over USD 1 million in assets under management, serving investors who seek professional oversight, robust risk management, and consistent execution across market conditions.
                  </p>

                  <section>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Our Founder</h3>
                    <p className="text-white/60 leading-relaxed text-base">
                      Mohammed Kharroubi is a seasoned perpetual futures trading expert with years of hands-on experience navigating complex and volatile markets. His disciplined approach to risk, data-driven decision-making, and active market engagement form the core philosophy of Mrghiche Capital.
                      <br /><br />
                      What began as a proprietary trading journey grew into a broader vision: building an institution capable of managing capital at scale while maintaining agility, transparency, and performance accountability.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Our Firm</h3>
                    <p className="text-white/60 leading-relaxed mb-6 text-base">
                      Mrghiche Capital operates as a multi-location, professionally structured investment firm, supported by specialized teams across key functions, including:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                      {['Portfolio Management', 'Risk Management', 'Research & Strategy', 'Operations & Compliance', 'Investor Relations'].map(item => (
                        <div key={item} className="p-3 rounded-xl bg-white/5 border border-white/10 text-[9px] text-white/40 uppercase tracking-widest font-bold">
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="text-white/60 leading-relaxed text-base">
                      We currently operate across four strategic locations: <strong>Dubai, London, United States, and Morocco</strong>. This global footprint allows us to remain closely connected to international markets, talent, and capital flows while maintaining operational resilience.
                    </p>
                  </section>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-bold uppercase tracking-widest text-[10px] py-2.5 px-6 rounded-full bg-white/5 border border-white/10"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp className="size-3" /></>
            ) : (
              <>See More <ChevronDown className="size-3" /></>
            )}
          </button>
          
          <a 
            onClick={(e) => { e.preventDefault(); window.open('https://instagram.com/mrghiche', '_blank'); }}
            href="https://instagram.com/mrghiche" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px] py-2.5 px-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 cursor-pointer"
          >
            <Instagram className="size-3" /> Connect @mrghiche
          </a>
        </div>

        <div className="mt-16 mb-24 rounded-[2.5rem] overflow-hidden border border-white/10 h-[400px] shadow-2xl relative group">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" 
            alt="Institutional Office Presence"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold mb-1">Global Presence</p>
            <p className="text-white text-lg font-light">Dubai • London • USA • Morocco</p>
          </div>
        </div>
      </div>
      
      <TeamSection />
    </motion.div>
  );
};

const PortfolioView = () => {
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
    },
    {
      tag: "AI & Data",
      title: "Neural Infrastructure Fund",
      location: "Toronto, CA",
      flag: "🇨🇦",
      desc: "Powering the next generation of generative AI models through specialized data center infrastructure and high-performance computing clusters.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
    },
    {
      tag: "Sustainable Dev",
      title: "Eco-Industrial Park",
      location: "Singapore",
      flag: "🇸🇬",
      desc: "A flagship circular economy project integrating sustainable manufacturing with green energy and waste-to-resource technologies.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      tag: "Advisory",
      title: "Strategic M&A Partners",
      location: "Frankfurt, DE",
      flag: "🇩🇪",
      desc: "Cross-border advisory for mid-market European enterprises seeking strategic exits or institutional growth capital.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop"
    },
    {
      tag: "Liquid Markets",
      title: "Alpha Quant Portfolio",
      location: "New York, US",
      flag: "🇺🇸",
      desc: "High-frequency quantitative strategy leveraging alternative data sources for non-correlated market returns.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop"
    },
    {
      tag: "Transport",
      title: "Smart Mobility Venture",
      location: "Berlin, DE",
      flag: "🇩🇪",
      desc: "Investing in the electrification and automation of public and private transit systems within urban centers.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop"
    },
    {
      tag: "Retail Growth",
      title: "Direct-to-Consumer Fund",
      location: "Los Angeles, US",
      flag: "🇺🇸",
      desc: "Supporting market-leading lifestyle brands through global distribution expansion and omnichannel optimization.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-24 pb-24 px-6"
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
};

const ServicesView = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-24 pb-24 px-6"
    >
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Our Expertise</h1>
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
              {service.content(onNavigate)}
            </ExpandableCard>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const NewsView = () => {
  const newsItems = [
    {
      category: "MARKET COMMENTARY",
      date: "OCTOBER 12, 2023",
      title: "Q3 2023 Global Market Outlook: Navigating the Pivot",
      description: "As central banks near the end of their tightening cycles, we analyze the implications for asset allocation and the potential for a soft landing.",
      image: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80&w=800&auto=format&fit=crop"
    },
    {
      category: "FIRM NEWS",
      date: "SEPTEMBER 05, 2023",
      title: "Mrghiche Capital Appoints Sarah Chen as Chief Risk Officer",
      description: "We are pleased to welcome Sarah Chen, formerly of Citadel, to lead our independent risk management function.",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=800&auto=format&fit=crop"
    },
    {
      category: "RESEARCH",
      date: "AUGUST 22, 2023",
      title: "The Impact of Generative AI on Algorithmic Trading",
      description: "A deep dive into how Large Language Models are transforming sentiment analysis and high-frequency strategies.",
      image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=800&auto=format&fit=crop"
    },
    {
      category: "REPORTS",
      date: "JULY 15, 2023",
      title: "2023 ESG Integration Report",
      description: "Our annual review of environmental, social, and governance factor integration across our investment process.",
      image: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-24 pb-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 border-b border-white/10 pb-8">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">Firm Insights</h1>
           <p className="text-white/40 italic">Latest updates, market analysis, and reports.</p>
        </div>

        <div className="space-y-10">
          {newsItems.map((item, idx) => (
            <div key={idx} className="group cursor-pointer border-b border-white/10 pb-10 last:border-0">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-[320px] aspect-[16/10] shrink-0 rounded-lg overflow-hidden bg-white/5 relative">
                   <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-500" />
                   <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                </div>
                
                <div className="flex-1 space-y-3">
                   <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-amber-500">
                      <span>{item.category}</span>
                      <span className="text-white/20">|</span>
                      <span className="text-white/50">{item.date}</span>
                   </div>
                   
                   <h2 className="text-2xl font-bold text-white leading-tight group-hover:text-indigo-400 transition-colors">
                      {item.title}
                   </h2>
                   
                   <p className="text-white/60 leading-relaxed text-sm md:text-base max-w-2xl">
                      {item.description}
                   </p>
                   
                   <div className="pt-2 flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn">
                      Read Article 
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CareersView = () => {
  const [selectedJob, setSelectedJob] = useState<null | {role: string, loc: string, type: string}>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    { role: "Senior Portfolio Manager", loc: "New York", type: "Equities" },
    { role: "Quantitative Analyst", loc: "London", type: "Fixed Income" },
    { role: "Investment Relations Associate", loc: "Dubai", type: "Client Services" },
    { role: "Alternative Data Scientist", loc: "London", type: "Tech" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="pt-24 pb-24 px-6 flex flex-col items-center justify-center text-center min-h-[60vh]"
      >
        <div className="size-20 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6 border border-indigo-500/30">
          <CheckCircle2 className="size-10 text-indigo-400" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 tracking-tighter">Application Received</h1>
        <p className="text-lg text-white/40 max-w-md mx-auto mb-10 leading-relaxed">
          Thank you for applying for the <strong>{selectedJob?.role}</strong> position. Our talent acquisition team will review your credentials and contact you shortly.
        </p>
        <Button 
          onClick={() => {
            setSubmitted(false);
            setSelectedJob(null);
          }}
          variant="outline"
          className="rounded-full px-8 py-5"
        >
          Return to Careers
        </Button>
      </motion.div>
    );
  }

  if (selectedJob) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="pt-24 pb-24 px-6"
      >
        <div className="max-w-2xl mx-auto">
          <button 
            onClick={() => setSelectedJob(null)}
            className="flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors uppercase tracking-widest text-[9px] font-bold"
          >
            <ArrowLeft className="size-3" /> Back to listings
          </button>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">{selectedJob.role}</h1>
          <div className="flex gap-4 text-xs text-indigo-400/80 mb-10 uppercase tracking-widest font-bold">
            <span>{selectedJob.loc}</span>
            <span>•</span>
            <span>{selectedJob.type}</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/[0.02] border border-white/5 p-6 md:p-10 rounded-[2rem]">
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/40 font-bold ml-1">Full Name</label>
                  <input required placeholder="E.g. Alexander Sterling" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/40 font-bold ml-1">Email Address</label>
                  <input required type="email" placeholder="E.g. alex@institutional.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-white/40 font-bold ml-1">LinkedIn Profile</label>
                <input required placeholder="https://linkedin.com/in/yourprofile" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-white/40 font-bold ml-1">CV Attachment</label>
                <div className="relative group/file">
                  <input required type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  <div className="w-full bg-white/5 border border-dashed border-white/20 rounded-xl px-5 py-6 text-center group-hover/file:border-indigo-500/50 group-hover/file:bg-indigo-500/5 transition-all">
                    <FileUp className="size-6 text-white/20 mx-auto mb-2 group-hover/file:text-indigo-400 group-hover/file:scale-110 transition-all" />
                    <p className="text-white/40 text-xs">Click or drag your CV here</p>
                    <p className="text-[9px] text-white/20 mt-1 uppercase tracking-wider">PDF, DOCX up to 5MB</p>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              disabled={isSubmitting}
              className="w-full py-6 rounded-xl bg-white text-black font-bold text-base hover:scale-[1.01] transition-transform shadow-xl flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="size-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>Apply for Position <ArrowRight className="size-4" /></>
              )}
            </Button>
            <p className="text-center text-[8px] text-white/20 uppercase tracking-widest">
              By submitting, you agree to our data handling and recruitment policy.
            </p>
          </form>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pt-24 pb-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">Join the Elite.</h1>
        <p className="text-lg text-white/50 mb-16 max-w-2xl">We are always looking for exceptional talent to join our institutional investment teams across London, Dubai, and New York.</p>
        
        <div className="space-y-4">
          {jobs.map((job) => (
            <div 
              key={job.role} 
              onClick={() => setSelectedJob(job)}
              className="group flex justify-between items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all cursor-pointer"
            >
              <div>
                <div className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{job.role}</div>
                <div className="flex gap-4 text-[10px] text-white/30 mt-1 uppercase tracking-widest">
                  <span>{job.loc}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <Button variant="ghost" className="size-10 rounded-full border border-white/10 flex items-center justify-center p-0 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 transition-all">
                <ArrowUpRight className="size-5" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[2.5rem] bg-indigo-500/5 border border-indigo-500/10 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Can't find a fit?</h2>
          <p className="text-white/40 mb-8 max-w-lg mx-auto leading-relaxed italic text-sm">
            "If your profile doesn't match current openings but you possess exceptional market insight or technical skill, we still want to hear from you."
          </p>
          <Button variant="outline" className="rounded-full px-6 py-4 text-xs font-bold uppercase tracking-widest">General Application</Button>
        </div>
      </div>
    </motion.div>
  );
};

const ContactView = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    className="pt-24 pb-24 px-6"
  >
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">Get in Touch</h1>
        <p className="text-base md:text-lg text-white/50 mb-10">Speak with our institutional relationship managers to discuss how we can support your investment objectives.</p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 shrink-0"><Mail size={18} /></div>
            <div>
              <div className="text-white font-bold text-sm">Email us</div>
              <div className="text-white/40 text-xs">inquiries@mrghichecapital.com</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-rose-400 shrink-0"><Phone size={18} /></div>
            <div>
              <div className="text-white font-bold text-sm">Phone</div>
              <div className="text-white/40 text-xs">+44 (0) 20 7946 0000</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-violet-400 shrink-0"><MapPin size={18} /></div>
            <div>
              <div className="text-white font-bold text-sm">Headquarters</div>
              <div className="text-white/40 text-xs">15 Berkeley Square, Mayfair, London W1J 6BQ</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md">
        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <input placeholder="First Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
            <input placeholder="Last Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
          </div>
          <input placeholder="Work Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
          <textarea rows={4} placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
          <Button className="w-full py-5 rounded-xl bg-white text-black font-bold text-base hover:scale-[1.02] transition-transform">Send Inquiry</Button>
        </form>
      </div>
    </div>
  </motion.div>
);

// --- Main App ---

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const handleReportSelection = (report: Report) => {
    setSelectedReport(report);
    setCurrentPage('report-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch(currentPage) {
      case 'who-we-are': return <WhoWeAreView />;
      case 'portfolio': return <PortfolioView />;
      case 'services': return <ServicesView onNavigate={setCurrentPage} />;
      case 'news': return <NewsView />;
      case 'careers': return <CareersView />;
      case 'contact': return <ContactView />;
      case 'report-detail': return <ReportDetailView report={selectedReport} onBack={() => setCurrentPage('home')} />;
      default: return <HomeView onNavigate={setCurrentPage} onSelectReport={handleReportSelection} />;
    }
  };

  return (
    <main className="min-h-screen bg-[#030303] overflow-x-hidden">
      <Header activePage={currentPage} onNavigate={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        <motion.div key={currentPage} className="w-full">
          {renderView()}
        </motion.div>
      </AnimatePresence>

      <Footer4Col onNavigate={setCurrentPage} />
    </main>
  );
}

export default App;
