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

interface NewsItem {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

const NEWS_ITEMS: NewsItem[] = [
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
    description: "We are pleased to welcome Sarah Chen, formerly of Citadel, to lead our independent risk management function and expand our analytical capabilities.",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=800&auto=format&fit=crop"
  }
];

const SERVICES_DATA = [
  { 
    id: "pe",
    title: "Private Equity", 
    description: "Growth Capital",
    teaser: "We identify companies at inflection points where our operational toolkit can unlock significant value.",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    content: (onNavigate: (p: string) => void) => (
      <>
        <article className="space-y-4 text-white/70">
          <p className="font-semibold text-white text-xl">The Pursuit of Operational Alpha</p>
          <p>Our Private Equity strategy is built on the principle of partnership.</p>
        </article>
        <Button onClick={() => onNavigate('contact')} className="mt-10 w-full rounded-full py-8 bg-white text-black font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
          Join Us ! <ArrowRight className="size-5" />
        </Button>
      </>
    )
  },
  { 
    id: "re",
    title: "Real Estate", 
    description: "Core-Plus Assets",
    teaser: "Active management of prime commercial, industrial, and logistics assets in major global gateway cities.",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    content: (onNavigate: (p: string) => void) => (
      <>
        <article className="space-y-4 text-white/70">
          <p>We specialize in the acquisition and active management of prime commercial assets.</p>
        </article>
        <Button onClick={() => onNavigate('contact')} className="mt-10 w-full rounded-full py-8 bg-white text-black font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
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
  }
];

// --- View Components ---

const HomeView = ({ onNavigate, onSelectReport }: { onNavigate: (page: string) => void, onSelectReport: (report: Report) => void }) => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}>
    <DemoHeroGeometric />
    <Logos3 />
    <section className="bg-[#030303] py-20 px-6">
      <div className="mx-auto max-w-5xl border-t border-white/10 px-6 relative mb-12">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-indigo-400 -ml-6 -mt-3.5 block w-max bg-[#030303] px-6">The Strategies</span>
        <div className="mt-16 mb-12 items-center grid sm:grid-cols-2">
          <h2 className="text-5xl font-bold text-white tracking-tighter">Our Services</h2>
          <p className="text-white/40 text-lg leading-relaxed">Diverse investment avenues tailored for resilient growth and risk-adjusted returns.</p>
        </div>
        <Carousel opts={{ align: 'start', loop: true }} className="w-full relative">
          <CarouselContent className="-ml-4">
            {SERVICES_DATA.map((service, idx) => (
              <CarouselItem key={idx} className="pl-4 basis-full sm:basis-1/2">
                <ExpandableCard title={service.title} description={service.description} teaser={service.teaser} src={service.src} className="h-full">
                  {service.content(onNavigate)}
                </ExpandableCard>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
    <TeamSection />
    <FinancialHero 
        title={<>Ready to Invest with <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Institutional Discipline?</span></>}
        description="Partner with a management team focused on structured processes, rigorous risk control, and consistent execution."
        buttonText="Join Us !"
        buttonLink="#"
        imageUrl1="https://images.unsplash.com/photo-1611974714024-4639454e4f8a?q=80&w=800&auto=format&fit=crop"
        imageUrl2="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop"
        bgImageUrl="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2000&auto=format&fit=crop"
    />
    {/* Corrected handleReportSelection to onSelectReport to match destructuring in HomeView */}
    <ShareholderReports reports={shareholderReportsData} onReportClick={onSelectReport} />
    <Feature1 />
  </motion.div>
);

const WhoWeAreView = () => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="pt-48 md:pt-64 pb-24 px-6">
    <div className="max-w-6xl mx-auto mb-16">
      <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">Our Firm.</h1>
      <p className="text-lg text-white/50 max-w-2xl">Institutional investment management built on a foundation of discipline.</p>
    </div>
    <TeamSection />
  </motion.div>
);

const PortfolioView = () => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="pt-48 md:pt-64 pb-24 px-6">
    <div className="max-w-6xl mx-auto mb-16">
      <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">Strategic Portfolio.</h1>
      <p className="text-lg text-white/50 max-w-2xl">High-impact investments across key institutional asset classes.</p>
    </div>
    <MasonryGrid columns={2} gap={8} className="max-w-7xl mx-auto">
      <div className="group relative overflow-hidden rounded-[2rem] bg-white/[0.03] border border-white/10 p-5">
        <img src="https://images.unsplash.com/photo-1549463590-721204899981?q=80&w=1000&auto=format&fit=crop" className="w-full rounded-2xl mb-5 grayscale group-hover:grayscale-0 transition-all duration-700" alt="Mayfair" />
        <h3 className="text-xl font-bold text-white mb-2">Prime Mayfair Commercial</h3>
        <p className="text-white/50 text-xs">Multi-tenant office and retail asset in London.</p>
      </div>
    </MasonryGrid>
  </motion.div>
);

const ServicesView = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="pt-48 md:pt-64 pb-24 px-6">
    <div className="max-w-6xl mx-auto mb-16">
      <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">Our Expertise.</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
      {SERVICES_DATA.map((service, idx) => (
        <ExpandableCard key={idx} title={service.title} description={service.description} teaser={service.teaser} src={service.src} className="h-[420px]">
          {service.content(onNavigate)}
        </ExpandableCard>
      ))}
    </div>
  </motion.div>
);

const NewsView = ({ onSelectArticle }: { onSelectArticle: (article: NewsItem) => void }) => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="pt-48 md:pt-64 pb-24 px-6">
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">Firm Insights.</h1>
        <p className="text-lg text-white/50 max-w-2xl">Latest market analysis and institutional reports.</p>
      </div>
      <div className="max-w-6xl mx-auto space-y-16">
        {NEWS_ITEMS.map((item, idx) => (
          <div 
            key={idx} 
            onClick={() => onSelectArticle(item)}
            className="group cursor-pointer border-b border-white/10 pb-16 last:border-0"
          >
            <div className="flex flex-col md:flex-row gap-10 items-stretch">
              <div className="w-full md:w-[400px] shrink-0 rounded-[1.5rem] overflow-hidden bg-white/5 relative">
                 <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-500 z-10" />
                 <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex-1 flex flex-col justify-center space-y-4">
                 <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-amber-500">
                    <span>{item.category}</span>
                    <span className="text-white/20">|</span>
                    <span className="text-white/50">{item.date}</span>
                 </div>
                 <h2 className="text-3xl font-bold text-white leading-tight group-hover:text-indigo-400 transition-colors tracking-tight">
                    {item.title}
                 </h2>
                 <p className="text-white/50 leading-relaxed text-base md:text-lg max-w-2xl font-light">
                    {item.description}
                 </p>
                 <div className="pt-4 flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn">
                    Read Article <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const NewsArticleDetailView = ({ article, onBack }: { article: NewsItem | null, onBack: () => void }) => {
  if (!article) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="pt-48 md:pt-64 pb-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-24 md:mb-32">
          <div className="flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase mb-10">
            <span className="text-amber-500">{article.category}</span>
            <span className="text-white/20">|</span>
            <span className="text-white/40">{article.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.1] max-w-4xl mx-auto">
            {article.title}
          </h1>
        </header>

        <div className="prose prose-invert max-w-3xl mx-auto space-y-12">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
            {article.description}
          </p>

          <p className="text-white/60 leading-relaxed">
            Mrghiche Capital is proud to announce... (Full article content simulated)
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h3 className="text-xl font-bold text-white mt-12 mb-4 tracking-tight uppercase text-[10px] tracking-[0.2em]">Strategic Implications</h3>
          <p className="text-white/60 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="my-12 p-8 border-l-4 border-amber-500 bg-white/[0.03] rounded-r-2xl">
            <p className="text-xl md:text-2xl text-white/80 italic leading-relaxed font-light">
              "Markets are currently pricing in a perfection scenario that leaves little room for error in policy execution."
            </p>
          </div>

          <p className="text-white/60 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          <div className="pt-16 border-t border-white/10 mt-24">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold group"
            >
              <ArrowLeft className="size-3 group-hover:-translate-x-1 transition-transform" /> Back to Insights
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CareersView = () => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="pt-48 md:pt-64 pb-24 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">Join the Elite.</h1>
      <p className="text-lg text-white/50 max-w-2xl mx-auto">We are always looking for exceptional talent to join our institutional investment teams.</p>
    </div>
  </motion.div>
);

const ContactView = () => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="pt-48 md:pt-64 pb-24 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">Connect with Us.</h1>
        <p className="text-lg text-white/50">Speak with our relationship managers about strategic partnerships.</p>
      </div>
      <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10">
        <form className="space-y-5">
          <input placeholder="Work Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm" />
          <Button className="w-full py-5 rounded-xl bg-white text-black font-bold">Send Inquiry</Button>
        </form>
      </div>
    </div>
  </motion.div>
);

const ReportDetailView = ({ report, onBack }: { report: Report | null, onBack: () => void }) => {
  if (!report) return null;
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="pt-48 md:pt-64 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-white/40 hover:text-white mb-12 uppercase tracking-widest text-[10px] font-bold">
          <ArrowLeft className="size-3" /> Back
        </button>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">{report.quarter}</h1>
        <p className="text-white/70 text-lg leading-relaxed">Institutional performance analysis for the period of {report.period}.</p>
      </div>
    </motion.div>
  );
};

// --- Main App ---

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null);

  const handleReportSelection = (report: Report) => {
    setSelectedReport(report);
    setCurrentPage('report-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsSelection = (item: NewsItem) => {
    setSelectedNewsItem(item);
    setCurrentPage('news-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch(currentPage) {
      case 'who-we-are': return <WhoWeAreView />;
      case 'portfolio': return <PortfolioView />;
      case 'services': return <ServicesView onNavigate={setCurrentPage} />;
      case 'news': return <NewsView onSelectArticle={handleNewsSelection} />;
      case 'news-detail': return <NewsArticleDetailView article={selectedNewsItem} onBack={() => setCurrentPage('news')} />;
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