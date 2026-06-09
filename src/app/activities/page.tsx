"use client";

import { useState } from "react";
import Link from "next/link";

// Mock dataset tracking platform actions and dynamic user events
const MOCK_ACTIVITIES = [
  {
    id: 1,
    type: "connection",
    title: "New Alignment Established",
    description: "Your professional profile was successfully linked with Sarah (Interior Designer, Dubai).",
    timestamp: "10 mins ago",
    status: "active",
  },
  {
    id: 2,
    type: "verification",
    title: "Security Token Validated",
    description: "Your identity verification status was re-indexed on the global network registry.",
    timestamp: "2 hours ago",
    status: "completed",
  },
  {
    id: 3,
    type: "system",
    title: "Framework Synchronization",
    description: "Your primary technology stack parameter was successfully migrated to Next.js & Tailwind CSS.",
    timestamp: "Yesterday",
    status: "system",
  },
  {
    id: 4,
    type: "visibility",
    title: "Profile Impression Peak",
    description: "Your portfolio profile experienced a 40% surge in visibility within the UAE regional market sector.",
    timestamp: "3 days ago",
    status: "neutral",
  }
];

export default function ActivitiesPage() {
  const [activities] = useState(MOCK_ACTIVITIES);

  // Helper mapping to render custom premium icons or indicators based on event class
  const getActivityStyles = (type: string) => {
    switch (type) {
      case "connection":
        return { bg: "bg-emerald-50 text-emerald-700 border-emerald-200/50", dot: "bg-emerald-500" };
      case "verification":
        return { bg: "bg-amber-50 text-amber-700 border-amber-200/40", dot: "bg-[#A8730A]" };
      case "system":
        return { bg: "bg-[#801429]/5 text-[#801429] border-[#801429]/10", dot: "bg-[#801429]" };
      default:
        return { bg: "bg-stone-50 text-stone-600 border-stone-200", dot: "bg-stone-400" };
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] py-12 px-6 lg:px-16">
      <div className="max-w-[60%] mx-auto space-y-8">
        
        {/* EDITORIAL HEADER */}
        <div className="border-b border-stone-200 pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-serif text-[32px] text-stone-900 tracking-tight font-bold">Activity Ledger</h1>
            <p className="text-stone-500 text-[14px] mt-1">
              A real-time operational stream tracking your system states, verified interactions, and network reach.
            </p>
          </div>
          <div className="text-xs font-bold text-stone-400 uppercase bg-white border border-stone-200 px-3 py-1.5 rounded-xl shadow-sm self-start sm:self-auto">
            Live Stream Connected
          </div>
        </div>

        {/* TIMELINE INTERFACE */}
        <div className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-sm divide-y divide-stone-100">
          {activities.map((activity) => {
            const styles = getActivityStyles(activity.type);
            
            return (
              <div key={activity.id} className="py-5 first:pt-2 last:pb-2 flex items-start space-x-4 group">
                {/* Visual Bullet Anchor */}
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 text-xs font-bold transition-transform group-hover:scale-105 ${styles.bg}`}>
                  <span className={`w-2 h-2 rounded-full ${styles.dot}`} />
                </div>

                {/* Content Stream Meta */}
                <div className="flex-grow min-w-0 space-y-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-[14.5px] font-bold text-stone-900 tracking-wide">
                      {activity.title}
                    </h2>
                    <span className="text-[11px] text-stone-400 font-medium flex-shrink-0">
                      {activity.timestamp}
                    </span>
                  </div>
                  <p className="text-stone-500 text-[13px] leading-relaxed max-w-[90%]">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* SYSTEM BOTTOM ACTIONS */}
        <div className="flex justify-center pt-2">
          <Link 
            href="/settings" 
            className="text-xs font-bold text-stone-400 hover:text-[#801429] uppercase tracking-wider transition-colors flex items-center gap-1"
          >
            Configure Logging Parameters <span>→</span>
          </Link>
        </div>

      </div>
    </div>
  );
}