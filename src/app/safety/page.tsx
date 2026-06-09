"use client";

import Link from "next/link";

export default function SafetyGuidelinesPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] py-16 px-6 lg:px-16">
      <div className="max-w-[55%] mx-auto bg-white rounded-2xl border border-stone-200/80 p-8 lg:p-12 shadow-sm space-y-8">
        
        <div className="space-y-3">
          <span className="text-[#801429] font-bold text-[11px] uppercase tracking-widest bg-[#801429]/5 px-3 py-1 rounded-full">
            Network Protection
          </span>
          <h1 className="font-serif text-[32px] text-stone-900 tracking-tight font-bold">Safety Guidelines</h1>
          <p className="text-stone-400 text-xs font-semibold uppercase tracking-wider">Operational Directive</p>
        </div>

        <hr className="border-stone-100" />

        <div className="text-stone-600 text-[14px] leading-relaxed space-y-6">
          <p className="font-medium text-stone-800">
            We prioritize zero-friction, elite professionalism across our ecosystem. Follow these strict core safety parameters to maintain a secure networking environment:
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 bg-stone-50 border border-stone-200/60 rounded-xl space-y-1">
              <h3 className="font-bold text-stone-900 text-[14.5px]">Verify Synergy Credentials</h3>
              <p className="text-xs text-stone-500">Always seek matching profiles that carry the system-verified security badge. Exercise proper corporate due diligence before transferring structural project variables.</p>
            </div>

            <div className="p-4 bg-stone-50 border border-stone-200/60 rounded-xl space-y-1">
              <h3 className="font-bold text-stone-900 text-[14.5px]">Protect Financial Infrastructure</h3>
              <p className="text-xs text-stone-500">Never transmit sensitive banking, corporate access tokens, or personal wallet keys via live inbox direct messaging streams. Keep transaction hooks confined to verified payment models.</p>
            </div>

            <div className="p-4 bg-stone-50 border border-stone-200/60 rounded-xl space-y-1">
              <h3 className="font-bold text-stone-900 text-[14.5px]">Report Low-Intent Interference</h3>
              <p className="text-xs text-stone-500">If an aligned entity exhibits solicitation tactics, abusive friction, or attempts unauthorized data collection, immediately log an escalation warning vector with our engineering desk.</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-xs">
          <Link href="/" className="font-bold text-stone-400 hover:text-[#801429] uppercase tracking-wider transition-colors">
            ← Return Home
          </Link>
          <span className="text-stone-400 font-medium">Network Trust Operations</span>
        </div>

      </div>
    </div>
  );
}