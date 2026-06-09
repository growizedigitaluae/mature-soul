"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF9F7] text-stone-500 py-12 px-6 lg:px-16 border-t border-stone-200 text-[14px]">
      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col space-y-1 text-center md:text-left">
          <span className="text-[#801429] font-bold text-[16px] tracking-wide">MatureSoul</span>
          <p className="text-stone-400 text-[13px]">© 2026 MatureSoul Ltd. All premium privacy parameters strictly reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-medium text-stone-600">
          <Link href="/privacy" className="hover:text-[#801429] transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#801429] transition-colors duration-200">
            Terms of Service
          </Link>
          <Link href="/safety" className="hover:text-[#801429] transition-colors duration-200">
            Safety Guidelines
          </Link>
          <Link href="/contact" className="hover:text-[#801429] transition-colors duration-200">
            Contact Support
          </Link>
        </div>
      </div>
    </footer>
  );
}