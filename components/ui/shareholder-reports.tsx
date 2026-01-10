import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

// Define the type for a single report item
export interface Report {
  id: string;
  quarter: string;
  period: string;
  imageSrc: string;
  isNew?: boolean;
}

// Define the props for the main component
interface ShareholderReportsProps {
  reports: Report[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const ShareholderReports = React.forwardRef<
  HTMLDivElement,
  ShareholderReportsProps
>(({ reports, title = "Shareholders' Letter and Results", subtitle = "Insights into our strategic growth", className, ...props }, ref) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  // Function to handle scrolling and update arrow visibility
  const checkScrollability = React.useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for precision
    }
  }, []);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollability();
      container.addEventListener("scroll", checkScrollability);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollability);
      }
    };
  }, [reports, checkScrollability]);

  // Scroll handler for navigation buttons
  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8; // Scroll by 80% of the visible width
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={ref}
      className={cn("w-full max-w-7xl mx-auto py-16", className)}
      aria-labelledby="reports-heading"
      {...props}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 mb-8">
        <div>
          <h2 id="reports-heading" className="text-3xl font-bold tracking-tight text-white mb-2">
            {title}
          </h2>
          <p className="text-white/40 text-sm">{subtitle}</p>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={cn(
              "p-3 rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10"
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={cn(
              "p-3 rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10"
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide space-x-6 px-4 sm:px-6 pb-4"
      >
        {reports.map((report) => (
          <div
            key={report.id}
            className="flex-shrink-0 w-[260px] sm:w-[320px] snap-start"
          >
            {/* Report Card */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 mb-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-2xl group-hover:border-white/20 group-hover:-translate-y-2">
                <img
                  src={report.imageSrc}
                  alt={`Report for ${report.quarter}`}
                  className="w-full h-[360px] sm:h-[440px] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-between text-white">
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-1">Financial Report</h3>
                    <p className="text-xs text-indigo-400 font-medium">{report.period}</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold tracking-tight mb-2 group-hover:text-indigo-300 transition-colors">{report.quarter}</p>
                    <p className="text-xs text-white/50 leading-relaxed line-clamp-2">Detailed analysis of market performance and institutional strategy updates.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-2">
                <h4 className="font-bold text-white text-base">{report.quarter}</h4>
                {report.isNew && (
                  <span className="text-[10px] font-bold bg-indigo-500 text-white px-2.5 py-1 rounded-full animate-pulse shadow-lg shadow-indigo-500/20">
                    NEW
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

ShareholderReports.displayName = "ShareholderReports";