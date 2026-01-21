"use client";

import React, { forwardRef, useState, useEffect } from "react";
import { cn } from "../../lib/utils.ts";
import { Play, X } from "lucide-react";

const VideoPlayer = forwardRef(
  (
    {
      className,
      thumbnailUrl,
      videoUrl,
      title,
      description,
      aspectRatio = "16/9",
      ...props
    },
    ref
  ) => {
    // State to manage the visibility of the video modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Effect to handle the 'Escape' key press for closing the modal
    useEffect(() => {
      const handleEsc = (event) => {
        if (event.key === "Escape") {
          setIsModalOpen(false);
        }
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);


    return (
      <>
        <div
          ref={ref}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-[2rem] shadow-2xl border border-white/10",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
            className
          )}
          style={{ aspectRatio: aspectRatio === "16/9" ? "16/9" : aspectRatio === "4/3" ? "4/3" : "1/1" }}
          onClick={() => setIsModalOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
          tabIndex={0}
          aria-label={`Play video: ${title}`}
          {...props}
        >
          <img
            src={thumbnailUrl}
            alt={`Thumbnail for ${title}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:border-white">
              <Play className="h-8 w-8 fill-white text-white transition-colors group-hover:fill-black group-hover:text-black" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 p-8 w-full">
            <h3 className="text-3xl font-bold text-white tracking-tight">{title}</h3>
            {description && (
              <p className="mt-2 text-base text-white/60 font-light max-w-md">{description}</p>
            )}
          </div>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-[100] flex animate-in fade-in-0 items-center justify-center bg-black/95 backdrop-blur-xl"
            aria-modal="true"
            role="dialog"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-8 top-8 z-[110] rounded-full bg-white/5 p-3 text-white transition-all hover:bg-white hover:text-black hover:scale-110"
              aria-label="Close video player"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="w-full max-w-6xl aspect-video p-4">
               <iframe
                    src={`${videoUrl}?autoplay=1`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full rounded-2xl shadow-2xl border border-white/10"
                ></iframe>
            </div>
          </div>
        )}
      </>
    );
  }
);
VideoPlayer.displayName = "VideoPlayer";

export { VideoPlayer };