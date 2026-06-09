"use client";

import { use } from "react";
import Link from "next/link";

// Shared content index map for simple client lookup matching the blog index
const ARTICLE_DATABASE: Record<string, { title: string; category: string; date: string; readTime: string; content: string }> = {
  "scaling-enterprise-digital-marketing-dubai": {
    title: "Architecting Enterprise Scalability for the High-End Dubai Market",
    category: "Market Strategy",
    date: "June 2026",
    readTime: "4 min read",
    content: "When deploying digital solutions for enterprise operations within competitive modern hubs like Dubai, traditional legacy platforms often fail under heavy structural constraints. Choosing optimized, high-performance, and lightweight frameworks like Next.js allows agencies to bypass unnecessary software bloat entirely. This ensures rapid loading speeds, flawless search optimization, and seamless page transitions that align perfectly with the pristine standards expected by elite global brands."
  },
  "designing-cinematic-web-experiences-conversion": {
    title: "The Art of Cinematic Motion Blur & Elegance in Modern Web Systems",
    category: "Design Architecture",
    date: "May 2026",
    readTime: "6 min read",
    content: "Capturing absolute attention instantly requires shifting away from basic static layouts toward cinematic digital environments. By utilizing smooth micro-interactions, deliberate motion blur effects, and fluid transitions, user interfaces can feel both premium and incredibly responsive. The trick is implementing these design choices carefully, ensuring visual elegance never degrades performance or compromises perfect optimization benchmarks."
  },
  "low-friction-automation-agency-models": {
    title: "Engineering Low-Friction Growth via Machine-Driven Automation",
    category: "Automation Systems",
    date: "May 2026",
    readTime: "5 min read",
    content: "The modern creative agency model is undergoing a massive shift away from heavy internal overhead toward lean, highly automated frameworks. By building connected, low-friction technical operations, startups can automate complex workflows—from direct data ingestion to automated delivery structures. This intentional setup allows founders to focus entirely on closing high-value deals and maintaining market authority while algorithms handle operational friction behind the scenes."
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: PageProps) {
  // Unwrap the asynchronous params object natively in the App Router environment
  const unwrappedParams = use(params);
  const article = ARTICLE_DATABASE[unwrappedParams.slug];

  // Graceful visual state if someone inputs an unregistered slug parameter
  if (!article) {
    return (
      <div className="min-h-screen bg-[#FAFAF9] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif text-[24px] text-stone-900 font-bold">Analysis Ledger Not Found</h1>
        <p className="text-stone-500 text-xs mt-1.5 mb-6">The requested architectural data specification index does not exist.</p>
        <Link href="/blog" className="text-xs font-bold text-[#801429] uppercase tracking-wider border-b border-[#801429] pb-0.5">
          ← Back to Ledger Index
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF9] py-16 px-6 lg:px-16">
      <div className="max-w-[50%] mx-auto bg-white rounded-2xl border border-stone-200/80 p-8 lg:p-12 shadow-sm space-y-6">
        
        {/* BACK NAVIGATION ACTION BUTTON */}
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-400 hover:text-stone-700 uppercase tracking-wider transition-colors">
          <span>←</span> Back to Insights Ledger
        </Link>

        {/* POST HEADER META SPECIFICATIONS */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3 text-xs font-bold text-[#A8730A] uppercase tracking-wider">
            <span>{article.category}</span>
            <span className="text-stone-300">•</span>
            <span className="text-stone-400 font-medium">{article.date}</span>
          </div>
          <h1 className="font-serif text-[28px] lg:text-[34px] text-stone-900 font-black tracking-tight leading-tight">
            {article.title}
          </h1>
          <p className="text-stone-400 text-xs font-semibold uppercase tracking-wide bg-stone-50 border border-stone-200/60 rounded-md px-2.5 py-1 inline-block">
            {article.readTime} Analysis
          </p>
        </div>

        <hr className="border-stone-100" />

        {/* CORE ANALYTICAL MARKUP CONTENT CONTAINER */}
        <div className="text-stone-600 text-[14.5px] leading-relaxed space-y-6 font-normal">
          <p className="first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:text-[#801429] first-letter:mr-2 first-letter:float-left">
            {article.content}
          </p>
        </div>

      </div>
    </div>
  );
}