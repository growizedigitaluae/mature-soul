"use client";

import { useState } from "react";
import Link from "next/link";

const MOCK_STORIES = [
  {
    id: 1,
    partnership: "Sarah & Marcus",
    industries: "Interior Design × Premium Real Estate",
    location: "Dubai, UAE",
    compatibility: 96,
    quote: "We connected through the platform's high-intent alignment metric. Within three months, our shared vision for cinematic architectural spaces turned into a joint venture scaling regional luxury developments in the Dubai market.",
    timeline: "Established March 2026",
  },
  {
    id: 2,
    partnership: "Elena & Julian",
    industries: "Fine Arts Gallery × Private Philanthropy",
    location: "New York, USA",
    compatibility: 92,
    quote: "Finding a partner who understands cultural depth alongside structural business ethics is incredibly rare. The platform eliminated the standard digital noise and introduced us based on true value synergy.",
    timeline: "Established January 2026",
  },
  {
    id: 3,
    partnership: "Clara & David",
    industries: "Enterprise Strategy × Corporate Law",
    location: "Toronto, Canada",
    compatibility: 94,
    quote: "Balancing high-performance executive leadership with a grounded personal life requires complete alignment. This network acts as a strict filter for individuals moving with genuine purpose.",
    timeline: "Established May 2026",
  }
];

export default function SuccessStoriesPage() {
  const [stories] = useState(MOCK_STORIES);

  return (
    <div className="min-h-screen bg-[#FAFAF9] py-12 px-6 lg:px-16">
      <div className="max-w-[70%] mx-auto space-y-10">
        
        {/* EDITORIAL HEADER */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[#801429] font-bold text-[11px] uppercase tracking-widest bg-[#801429]/5 px-3 py-1 rounded-full">
            Verified Synergies
          </span>
          <h1 className="font-serif text-[36px] text-stone-900 tracking-tight font-black leading-tight">
            Alignment Chronicles
          </h1>
          <p className="text-stone-500 text-[14px] leading-relaxed">
            A curated ledger highlighting high-intent connections, elite professional mergers, and shared global achievements.
          </p>
        </div>

        <hr className="border-stone-200/60" />

        {/* SUCCESS STORIES CASE-STUDY GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="bg-white rounded-2xl border border-stone-200/80 p-6 lg:p-8 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Top Row: Core Metadata & Score */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-stone-400 font-bold text-[10px] uppercase tracking-wider block">
                    {story.location} • {story.timeline}
                  </span>
                  <h2 className="font-serif text-[22px] text-stone-900 font-bold tracking-tight">
                    {story.partnership}
                  </h2>
                  <p className="text-[#A8730A] text-[12.5px] font-semibold">
                    {story.industries}
                  </p>
                </div>

                {/* Compatibility Metric Badge */}
                <div className="bg-[#801429]/5 border border-[#801429]/10 rounded-xl px-3 py-1.5 text-center flex flex-col items-center justify-center min-w-[65px]">
                  <span className="text-[#801429] font-serif text-[16px] font-black">{story.compatibility}%</span>
                  <span className="text-stone-400 text-[8px] font-bold uppercase tracking-widest">Synergy</span>
                </div>
              </div>

              {/* Core Case Study Quote Block */}
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-stone-100 font-serif text-6xl pointer-events-none select-none">“</span>
                <p className="text-stone-600 text-[13.5px] leading-relaxed italic relative z-10 pl-4 border-l border-stone-200">
                  {story.quote}
                </p>
              </div>

              {/* Bottom Verification Status Indicator */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-stone-400 tracking-wide uppercase">
                <div className="flex items-center gap-1">
                  <span className="text-emerald-600 text-[12px]">✔</span>
                  <span>System Authenticated Record</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="bg-white rounded-2xl border border-stone-200/80 p-8 text-center max-w-xl mx-auto space-y-4 shadow-sm ring-4 ring-[#801429]/5">
          <h3 className="font-serif text-[20px] text-stone-900 font-bold tracking-tight">Begin Your Alignment Journey</h3>
          <p className="text-stone-500 text-[13px] leading-relaxed max-w-sm mx-auto">
            Ready to find verified regional partners, close scalable deals, and eliminate high-overhead friction?
          </p>
          <div className="pt-2">
            <Link 
              href="/search" 
              className="inline-block bg-[#801429] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#6b1022] transition-colors shadow-sm"
            >
              Explore Active Profiles
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}