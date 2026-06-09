"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactSupportPage() {
  const [form, setForm] = useState({ name: "", email: "", topic: "General Support", details: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, dispatch payload webhook directly to system service
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] py-16 px-6 lg:px-16">
      <div className="max-w-[45%] mx-auto bg-white rounded-2xl border border-stone-200/80 p-8 lg:p-10 shadow-sm space-y-6">
        
        <div className="space-y-2">
          <h1 className="font-serif text-[30px] text-stone-900 tracking-tight font-bold">Contact Support Desk</h1>
          <p className="text-stone-500 text-[13.5px]">
            Have a technical configuration issue or an escalation warning vector? File a precise ticket below.
          </p>
        </div>

        <hr className="border-stone-100" />

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200/50 rounded-xl p-6 text-center space-y-2">
            <span className="text-emerald-600 text-2xl">✔</span>
            <h3 className="font-bold text-stone-900 text-[16px]">Ticket Successfully Registered</h3>
            <p className="text-stone-500 text-xs max-w-xs mx-auto">
              Our core engineering team has safely captured your payload metadata. We aim to respond within 12 standard business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-[13.5px]">
            <div>
              <label className="block text-stone-700 font-bold tracking-wide uppercase text-[10px] mb-1.5">Your Name</label>
              <input 
                type="text" 
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white border border-stone-200 rounded-xl p-3 text-stone-800 outline-none focus:border-[#801429] transition-all" 
                placeholder="Muditha Dayasena Liyanage"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-bold tracking-wide uppercase text-[10px] mb-1.5">Email Destination Endpoint</label>
              <input 
                type="email" 
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white border border-stone-200 rounded-xl p-3 text-stone-800 outline-none focus:border-[#801429] transition-all" 
                placeholder="developer@domain.online"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-bold tracking-wide uppercase text-[10px] mb-1.5">Ticket Classification Topic</label>
              <select 
                value={form.topic}
                onChange={(e) => setForm({ ...form, topic: e.target.value })}
                className="w-full bg-white border border-stone-200 rounded-xl p-3 text-stone-800 font-semibold outline-none focus:border-[#801429] cursor-pointer"
              >
                <option>General Platform Support</option>
                <option>Premium Infrastructure Billing</option>
                <option>Identity Verification Escalation</option>
                <option>Security & Operational Reporting</option>
              </select>
            </div>

            <div>
              <label className="block text-stone-700 font-bold tracking-wide uppercase text-[10px] mb-1.5">Analytical Event Details</label>
              <textarea 
                rows={4}
                required
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className="w-full bg-white border border-stone-200 rounded-xl p-3 text-stone-800 outline-none focus:border-[#801429] transition-all resize-none" 
                placeholder="Provide a comprehensive operational analysis of the issue..."
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#801429] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#6b1022] transition-colors shadow-sm"
            >
              Transmit Support Payload
            </button>
          </form>
        )}

        <div className="pt-2 text-center">
          <Link href="/" className="text-xs font-bold text-stone-400 hover:text-[#801429] uppercase tracking-wider transition-colors">
            ← Cancel and Return Home
          </Link>
        </div>

      </div>
    </div>
  );
}