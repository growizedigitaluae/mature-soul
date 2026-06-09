"use client";

import { useState } from "react";

const MOCK_MATCHES = [
  {
    id: 1,
    name: "Sarah",
    age: 46,
    location: "Dubai, UAE",
    title: "Interior Designer",
    compatibility: 94,
    sharedInterests: ["Architecture", "Fine Arts", "Travel"],
    bio: "Creating cinematic spaces and modern classical design. Seeking global adventures.",
    verified: true,
  },
  {
    id: 2,
    name: "Elena",
    age: 41,
    location: "New York, USA",
    title: "Gallery Curator",
    compatibility: 89,
    sharedInterests: ["Contemporary Art", "Gastronomy", "Philanthropy"],
    bio: "Curating life with intention. Aligned with high-performance cultural depth.",
    verified: true,
  },
  {
    id: 3,
    name: "Clara",
    age: 48,
    location: "Toronto, Canada",
    title: "Executive Director",
    compatibility: 87,
    sharedInterests: ["Business Strategy", "Golf", "Winery Tours"],
    bio: "Balancing enterprise leadership with a deeply grounded personal life.",
    verified: true,
  },
];

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState("active"); // Options: "active" | "received" | "sent"
  const [matches, setMatches] = useState(MOCK_MATCHES);
  const [selectedPortfolio, setSelectedPortfolio] = useState<typeof MOCK_MATCHES[0] | null>(null);

  const handleDisconnect = (id: number) => {
    setMatches(matches.filter((match) => match.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] py-12 px-6 lg:px-16">
      <div className="max-w-[85%] mx-auto space-y-8">
        
        {/* HEADER SECTION */}
        <div className="border-b border-stone-200 pb-5">
          <h1 className="font-serif text-[32px] text-stone-900 tracking-tight">Connections Hub</h1>
          <p className="text-stone-500 text-[14px] mt-1">
            Review your dynamic high-intent networking ecosystem and portfolio compatibility benchmarks.
          </p>
        </div>

        {/* INTENT TAB BAR SWITCHER */}
        <div className="flex border-b border-stone-200 text-[13px] font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab("active")}
            className={`pb-3 px-6 transition-all duration-200 border-b-2 -mb-px ${
              activeTab === "active"
                ? "border-[#801429] text-[#801429]"
                : "border-transparent text-stone-400 hover:text-stone-600"
            }`}
          >
            Active Matches ({matches.length})
          </button>
          <button
            onClick={() => setActiveTab("received")}
            className={`pb-3 px-6 transition-all duration-200 border-b-2 -mb-px ${
              activeTab === "received"
                ? "border-[#801429] text-[#801429]"
                : "border-transparent text-stone-400 hover:text-stone-600"
            }`}
          >
            Received Requests (2)
          </button>
          <button
            onClick={() => setActiveTab("sent")}
            className={`pb-3 px-6 transition-all duration-200 border-b-2 -mb-px ${
              activeTab === "sent"
                ? "border-[#801429] text-[#801429]"
                : "border-transparent text-stone-400 hover:text-stone-600"
            }`}
          >
            Sent Requests (0)
          </button>
        </div>

        {/* CONDITIONALLY RENDER MATCH CARDS OR Fallbacks */}
        {activeTab === "active" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {matches.map((match) => (
              <div 
                key={match.id} 
                className="bg-white rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* LARGER PROMINENT IMAGE AREA */}
                <div className="relative aspect-[4/3] w-full bg-stone-100 overflow-hidden">
                  {match.verified && (
                    <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center space-x-1 border border-stone-200 text-[9px] font-bold text-stone-800 tracking-wide uppercase shadow-sm">
                      <span className="text-emerald-600 text-[10px]">✔</span>
                      <span>Verified</span>
                    </div>
                  )}
                  {/* High-Intent Compatibility Badge overlay onto expanded image view */}
                  <div className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-xl flex items-center space-x-1 border border-[#801429]/20 text-[11px] font-black text-[#801429] shadow-sm">
                    <span>{match.compatibility}% Match</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center text-stone-300 text-xs font-semibold tracking-wider uppercase">
                    Secure Media View
                  </div>
                </div>

                {/* SLIM DATA SPECIFICATIONS PANEL */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-stone-900 font-bold text-[19px] tracking-wide">
                        {match.name}, {match.age}
                      </h3>
                      <p className="text-stone-400 text-xs font-medium flex items-center gap-0.5 truncate max-w-[45%]">
                        {match.location.split(",")[0]}
                      </p>
                    </div>
                    <p className="text-[#A8730A] text-[13px] font-semibold mt-0.5">{match.title}</p>
                    
                    {/* CONDENSED HIGH IMPACT BIO */}
                    <p className="text-stone-500 text-[12.5px] leading-relaxed mt-2.5 border-l-2 border-stone-200 pl-2.5 italic">
                      "{match.bio}"
                    </p>

                    {/* INTERSECTING TAGS MODULE */}
                    <div className="flex flex-wrap gap-1 mt-3.5">
                      {match.sharedInterests.map((interest, idx) => (
                        <span 
                          key={idx} 
                          className="bg-stone-50 text-stone-600 text-[10.5px] font-medium px-2 py-0.5 rounded border border-stone-200/60"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM BUTTON SUITE */}
                  <div className="space-y-2 pt-3.5 border-t border-stone-100">
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={() => setSelectedPortfolio(match)}
                        className="py-2 text-[12.5px] font-bold text-stone-700 border border-stone-200 rounded-xl hover:bg-stone-50 transition-colors text-center"
                      >
                        Portfolio
                      </button>
                      <button className="py-2 text-[12.5px] font-bold text-white bg-[#801429] rounded-xl hover:bg-[#6b1022] transition-colors shadow-sm text-center">
                        Message
                      </button>
                    </div>
                    <button 
                      onClick={() => handleDisconnect(match.id)}
                      className="w-full text-center py-1 text-[11px] font-medium text-stone-400 hover:text-rose-700 transition-colors"
                    >
                      Remove Connection
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-stone-200">
            <p className="text-stone-400 font-medium">No standard network requests pending inside this index.</p>
          </div>
        )}

        {/* MODAL PORTFOLIO WINDOW OVERLAY */}
        {selectedPortfolio && (
          <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-stone-200 flex flex-col transform transition-all animate-in fade-in zoom-in-95 duration-200">
              <div className="p-6 border-b border-stone-100 flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-[22px] text-stone-900 font-bold">{selectedPortfolio.name}'s Deep Insights</h2>
                  <p className="text-xs text-stone-400 mt-0.5">Comprehensive matching diagnostics</p>
                </div>
                <button 
                  onClick={() => setSelectedPortfolio(null)}
                  className="w-8 h-8 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-500 font-bold hover:bg-stone-100"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 space-y-4 text-stone-600 text-[13.5px]">
                <p><strong>Professional Alignment:</strong> Elite status confirmed via matching framework parameters.</p>
                <p><strong>Core Synergy Archetype:</strong> High-intent matching configuration matching verified geographic criteria.</p>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/60 text-xs text-stone-500">
                  Secure identity metrics are hosted locally. Click connect to sync live validation tokens.
                </div>
              </div>
              <div className="p-4 bg-stone-50 border-t border-stone-100 flex justify-end">
                <button 
                  onClick={() => setSelectedPortfolio(null)}
                  className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-stone-800 transition-colors"
                >
                  Close Portfolio
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}