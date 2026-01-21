"use client";

import React, { useState, useEffect, useRef, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils.ts";

export function ExpandableCard({
  title,
  src,
  description,
  teaser,
  children,
  className,
  classNameExpanded,
  ...props
}) {
  const [active, setActive] = useState(false);
  const cardRef = useRef(null);
  const id = useId();

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    if (active) {
      window.addEventListener("keydown", onKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md h-full w-full z-[80]"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div
            className={cn(
              "fixed inset-0 grid place-items-center z-[100] sm:mt-16 before:pointer-events-none px-4 py-10"
            )}
          >
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              className={cn(
                "w-full max-w-[850px] h-fit max-h-[90vh] flex flex-col overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl relative",
                classNameExpanded
              )}
              {...props}
            >
              <motion.div layoutId={`image-${title}-${id}`}>
                <div className="relative before:absolute before:inset-x-0 before:bottom-[-1px] before:h-[100px] before:z-50 before:bg-gradient-to-t before:from-[#0a0a0a]">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-96 object-cover object-center"
                  />
                </div>
              </motion.div>
              <div className="relative h-full">
                <div className="flex justify-between items-start p-8 h-auto">
                  <div>
                    <motion.p
                      layoutId={`description-${description}-${id}`}
                      className="text-indigo-400 text-sm font-bold uppercase tracking-[0.2em] mb-2"
                    >
                      {description}
                    </motion.p>
                    <motion.h3
                      layoutId={`title-${title}-${id}`}
                      className="font-bold text-white text-4xl sm:text-5xl tracking-tight leading-tight"
                    >
                      {title}
                    </motion.h3>
                  </div>
                  <motion.button
                    aria-label="Close card"
                    layoutId={`button-${title}-${id}`}
                    className="h-12 w-12 shrink-0 flex items-center justify-center rounded-full bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 focus:outline-none"
                    onClick={() => setActive(false)}
                  >
                    <motion.div
                      animate={{ rotate: active ? 45 : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </div>
                <div className="relative px-8 sm:px-10 pb-16">
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-white/60 text-lg leading-relaxed flex flex-col items-start gap-6"
                  >
                    {children}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        role="dialog"
        aria-labelledby={`card-title-${id}`}
        aria-modal="true"
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className={cn(
          "group p-4 flex flex-col justify-between items-center bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-500 rounded-[2.5rem] cursor-pointer border border-white/10 h-full",
          className
        )}
      >
        <div className="flex gap-6 flex-col w-full h-full">
          <motion.div layoutId={`image-${title}-${id}`} className="w-full relative overflow-hidden rounded-[2rem]">
            <img
              src={src}
              alt={title}
              className="w-full h-64 object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
          
          <div className="flex flex-col flex-1 px-2 pb-2">
            <div className="flex justify-between items-start">
              <div className="flex flex-col flex-1">
                <motion.p
                  layoutId={`description-${description}-${id}`}
                  className="text-indigo-400/80 md:text-left text-xs font-bold uppercase tracking-widest mb-1"
                >
                  {description}
                </motion.p>
                <motion.h3
                  layoutId={`title-${title}-${id}`}
                  className="text-white md:text-left font-bold text-2xl tracking-tight group-hover:text-white transition-colors"
                >
                  {title}
                </motion.h3>
                {teaser && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white/40 text-sm mt-3 line-clamp-3 leading-relaxed md:text-left"
                  >
                    {teaser}
                  </motion.p>
                )}
              </div>
              <motion.button
                aria-label="Open card"
                layoutId={`button-${title}-${id}`}
                className={cn(
                  "h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-white/5 text-white/50 border border-white/10 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 transition-all duration-500 focus:outline-none"
                )}
              >
                <motion.div
                  animate={{ rotate: active ? 45 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}