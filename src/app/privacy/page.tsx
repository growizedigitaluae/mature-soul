"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] py-16 px-6 lg:px-16">
      <div className="max-w-[55%] mx-auto bg-white rounded-2xl border border-stone-200/80 p-8 lg:p-12 shadow-sm space-y-8">
        
        <div className="space-y-3">
          <span className="text-[#801429] font-bold text-[11px] uppercase tracking-widest bg-[#801429]/5 px-3 py-1 rounded-full">
            Legal Registry
          </span>
          <h1 className="font-serif text-[32px] text-stone-900 tracking-tight font-bold">Privacy Policy</h1>
          <p className="text-stone-400 text-xs font-semibold uppercase tracking-wider">Last Updated: June 2026</p>
        </div>

        <hr className="border-stone-100" />

        <div className="text-stone-600 text-[14px] leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-[18px] text-stone-900 font-bold tracking-tight">1. Data Ingestion & Collection</h2>
            <p>
              We collect information strictly necessary to compute elite professional and lifestyle synergy alignments. This includes verified identity data, regional parameter selections, business hub registration details, and technical profile configurations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-[18px] text-stone-900 font-bold tracking-tight">2. Algorithmic Data Processing</h2>
            <p>
              Your personal specifications are processed via secure webhooks and private cloud architecture layers. We do not sell or lease your identity indexes to third-party marketing networks. All computations serve entirely to run the profile discovery filter matrix.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-[18px] text-stone-900 font-bold tracking-tight">3. Security Infrastructures</h2>
            <p>
              Data transmission routes are fully protected using industry-standard TLS encryption protocols. Access tokens, secure wallet endpoints, and communication message history matrices are strictly isolated to prevent unauthenticated data leaks.
            </p>
          </section>
        </div>

        <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-xs">
          <Link href="/" className="font-bold text-stone-400 hover:text-[#801429] uppercase tracking-wider transition-colors">
            ← Return Home
          </Link>
          <span className="text-stone-400 font-medium">MatureSoul Infrastructure Framework</span>
        </div>

      </div>
    </div>
  );
}