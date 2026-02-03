"use client";

import React from 'react';
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

const members = [
    {
        name: 'Mohammed Kharroubi',
        role: 'Founder - CEO',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop', 
        link: '#',
    },
    {
        name: 'Elijah Jones',
        role: 'Co-Founder - CTO',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
    {
        name: 'Isabella Garcia',
        role: 'Sales Manager',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
    {
        name: 'Henry Lee',
        role: 'UX Engineer',
        avatar: 'https://images.unsplash.com/photo-1519085184909-b855b914a568?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
    {
        name: 'Ava Williams',
        role: 'Interaction Designer',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
    {
        name: 'Olivia Miller',
        role: 'Visual Designer',
        avatar: 'https://images.unsplash.com/photo-1598550874175-4d0fe4a2c906?q=80&w=800&auto=format&fit=crop',
        link: '#',
    },
]

export default function TeamSection() {
    return (
        <section className="bg-transparent py-16 md:py-32">
            <div className="mx-auto max-w-6xl border-t border-white/10 px-6 relative">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-indigo-400 -ml-6 -mt-3.5 block w-max bg-[#030303] px-6">
                    The Team
                </span>
                <div className="mt-12 gap-8 sm:grid sm:grid-cols-2 md:mt-24 mb-12">
                    <div className="sm:w-full">
                        <h2 className="text-4xl font-bold sm:text-5xl text-white tracking-tighter">Our dream team</h2>
                    </div>
                    <div className="mt-6 sm:mt-0 flex items-center">
                        <p className="text-white/40 text-lg leading-relaxed">During the working process, we perform regular fitting with the client because he is the only person who can feel whether a new suit fits or not.</p>
                    </div>
                </div>
                
                <div className="mt-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            AutoScroll({
                                playOnInit: true,
                                speed: 1,
                                stopOnInteraction: false,
                                stopOnMouseEnter: true,
                            })
                        ]}
                        className="w-full relative"
                    >
                        <CarouselContent className="-ml-4">
                            {members.map((member, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="group overflow-hidden h-full p-2">
                                        <div className="relative overflow-hidden rounded-[2rem] border border-white/5 transition-all duration-700 group-hover:rounded-[2.5rem] group-hover:border-white/20 shadow-2xl">
                                            <img 
                                                className="h-96 w-full object-cover object-top grayscale transition-all duration-700 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:scale-105" 
                                                src={member.avatar} 
                                                alt={member.name} 
                                                width="826" 
                                                height="1239" 
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        </div>
                                        <div className="px-2 pt-6 sm:pb-0">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-white text-xl font-bold transition-all duration-500 group-hover:tracking-wider group-hover:text-indigo-300">
                                                    {member.name}
                                                </h3>
                                                <span className="text-[10px] text-white/20 font-mono font-bold">_0{index + 1}</span>
                                            </div>
                                            <div className="mt-2 flex items-center justify-between overflow-hidden">
                                                <span className="text-white/40 inline-block translate-y-8 text-xs font-bold uppercase tracking-widest opacity-0 transition duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:opacity-100">
                                                    {member.role}
                                                </span>
                                                <a 
                                                    href={member.link} 
                                                    className="text-indigo-400 inline-block translate-y-8 text-xs font-bold tracking-widest uppercase opacity-0 transition-all duration-500 hover:text-indigo-300 group-hover:translate-y-0 group-hover:opacity-100 hover:underline underline-offset-4"
                                                >
                                                    Linktree
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:flex justify-end gap-2 mt-8 mr-4">
                            <CarouselPrevious className="static translate-y-0 translate-x-0 border-white/10 hover:bg-white/10 hover:text-white" />
                            <CarouselNext className="static translate-y-0 translate-x-0 border-white/10 hover:bg-white/10 hover:text-white" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}