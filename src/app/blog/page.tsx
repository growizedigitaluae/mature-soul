"use client";

import { useState } from "react";
import Link from "next/link";

const MOCK_ARTICLES = [
  {
    id: 1,
    slug: "scaling-enterprise-digital-marketing-dubai",
    title: "Architecting Enterprise Scalability for the High-End Dubai Market",
    category: "Market Strategy",
    date: "June 2026",
    excerpt: "Why high-performance, tailored frameworks eclipse traditional, bloated legacy software architectures when positioning digital brands for elite audiences.",
    readTime: "4 min read",
  },
  {
    id: 2,
    slug: "designing-cinematic-web-experiences-conversion",
    title: "The Art of Cinematic Motion Blur & Elegance in Modern Web Systems",
    category: "Design Architecture",
    date: "May 2026",
    excerpt: "Exploring micro-interactions, high-speed page loads, and elegant transitions to capture business attention without dropping structural performance metrics.",
    readTime: "6 min read",
  },
  {
    id: 3,
    slug: "low-friction-automation-agency-models",
    title: "Engineering Low-Friction Growth via Machine-Driven Automation",
    category: "Automation Systems",
    date: "May 2026",
    excerpt: "A direct look into deploying automated programmatic operational chains to run low-overhead, high-margin creative agencies globally.",
    readTime: "5 min read",
  }
];

export default function BlogPage() {
  const [articles] = useState(MOCK_ARTICLES);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Market Strategy", "Design Architecture", "Automation Systems"];

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAFAF9] py-12 px-6 lg:px-16">
      <div className="max-w-[70%] mx-auto space-y-8">
        
        {/* EDITORIAL HEADER */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[#801429] font-bold text-[11px] uppercase tracking-widest bg-[#801429]/5 px-3 py-1 rounded-full">
            Platform Authority Insights
          </span>
          <h1 className="font-serif text-[36px] text-stone-900 tracking-tight font-black leading-tight">
            The Insight Ledger
          </h1>
          <p className="text-stone-500 text-[14px] leading-relaxed">
            Strategic viewpoints on digital luxury aesthetics, performance code execution, and high-margin conversion engineering.
          </p>
        </div>

        {/* METADATA CATEGORY BAR */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-y border-stone-200/70 py-4 text-xs font-bold uppercase tracking-wider">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl border transition-all duration-150 ${
                selectedCategory === cat
                  ? "bg-[#801429] border-[#801429] text-white shadow-sm"
                  : "bg-white border-stone-200 text-stone-500 hover:text-stone-800 hover:border-stone-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ARTICLES INDEX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredArticles.map((article) => (
            <Link 
              key={article.id}
              href={`/blog/${article.slug}`}
              className="bg-white rounded-2xl border border-stone-200/80 p-6 flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow duration-300 group cursor-pointer block"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-bold text-stone-400 tracking-wide uppercase">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h2 className="font-serif text-[19px] text-stone-900 font-bold tracking-tight leading-snug group-hover:text-[#801429] transition-colors">
                  {article.title}
                </h2>
                <p className="text-stone-500 text-[13px] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-800">
                <span className="text-[#A8730A]">{article.readTime}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[#801429]">
                  Read Analysis <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}