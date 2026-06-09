"use client";

import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] py-16 px-6 lg:px-16">
      <div className="max-w-[55%] mx-auto bg-white rounded-2xl border border-stone-200/80 p-8 lg:p-12 shadow-sm space-y-8">
        
        <div className="space-y-3">
          <span className="text-[#801429] font-bold text-[11px] uppercase tracking-widest bg-[#801429]/5 px-3 py-1 rounded-full">
            Platform Blueprint
          </span>
          <h1 className="font-serif text-[32px] text-stone-900 tracking-tight font-bold">Terms of Service</h1>
          <p className="text-stone-400 text-xs font-semibold uppercase tracking-wider">Effective Date: June 2026</p>
        </div>

        <hr className="border-stone-100" />

        <div className="text-stone-600 text-[14px] leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-[18px] text-stone-900 font-bold tracking-tight">1. Membership & Alignment Matrix Use</h2>
            <p>
              By establishing an active profile, you confirm that you are executing interactions with genuine corporate or personal intent. Users must be at least 18 years of age to access our premium matchmaking, filtering tools, and verification indices.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-[18px] text-stone-900 font-bold tracking-tight">2. Account Responsibility & Premium Tiers</h2>
            <p>
              Account credentials, access configurations, and tier privileges are strictly non-transferable. We reserve the absolute right to suspend or deprecate unverified accounts displaying fraudulent activity, low-intent actions, or behavioral noise.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-[18px] text-stone-900 font-bold tracking-tight">3. Regional Legal Compliance</h2>
            <p>
              Platform services are hosted and structured under global compliance paradigms. Any commercial, digital, or networking disputes fall strictly under local regulatory frameworks governing our core enterprise operation zones.
            </p>
          </section>
        </div>

        <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-xs">
          <Link href="/" className="font-bold text-stone-400 hover:text-[#801429] uppercase tracking-wider transition-colors">
            ← Return Home
          </Link>
          <span className="text-stone-400 font-medium">MatureSoul Legal Registry</span>
        </div>

      </div>
    </div>
  );
}