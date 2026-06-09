"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "Muditha Dayasena Liyanage",
    title: "Founder & Web Developer",
    agency: "Growize Digital",
    location: "Sharjah Publishing City Free Zone, UAE",
    techStack: "Next.js & Tailwind CSS",
    isPremium: true,
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailLeads: true,
    matchingAlerts: true,
    marketingTips: false,
  });

  const handleTogglePremium = () => {
    setProfile(prev => ({ ...prev, isPremium: !prev.isPremium }));
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] py-12 px-6 lg:px-16">
      <div className="max-w-[65%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* SIDE NAV / PROFILE METRICS CARD */}
        <aside className="lg:col-span-4 bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm text-center">
          <div className="w-20 h-20 bg-[#801429]/5 border-2 border-[#801429]/20 text-[#801429] rounded-full mx-auto flex items-center justify-center text-2xl font-serif font-black shadow-inner">
            {profile.name.charAt(0)}
          </div>
          <h2 className="font-serif text-[20px] text-stone-900 font-bold mt-4 tracking-tight">{profile.name}</h2>
          <p className="text-stone-400 text-xs font-medium mt-0.5">{profile.title}</p>
          <p className="text-[#A8730A] text-[11px] font-bold tracking-wider uppercase mt-1 bg-amber-50 border border-amber-200/40 px-2 py-0.5 rounded-md inline-block">
            {profile.agency}
          </p>

          <div className="mt-6 pt-6 border-t border-stone-100 space-y-2">
            <button 
              onClick={handleTogglePremium}
              className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm ${
                profile.isPremium 
                  ? "bg-[#801429] text-white hover:bg-[#6b1022]" 
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {profile.isPremium ? "✓ Verified Premium Account" : "Upgrade to Premium Tier"}
            </button>
          </div>
        </aside>

        {/* CORE CONFIGURATION PANEL */}
        <main className="lg:col-span-8 bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-stone-200">
            <h1 className="font-serif text-[24px] text-stone-900 font-bold tracking-tight">Profile & Agency Parameters</h1>
            <p className="text-stone-400 text-xs mt-0.5">Configure live environment alignment vectors and data models.</p>
          </div>

          <div className="p-6 space-y-6 text-[13.5px]">
            {/* Identity Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-stone-500 font-bold tracking-wide uppercase text-[10px] mb-1.5">Legal Identity Name</label>
                <input 
                  type="text" 
                  value={profile.name} 
                  disabled 
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-400 cursor-not-allowed outline-none" 
                />
              </div>
              <div>
                <label className="block text-stone-700 font-bold tracking-wide uppercase text-[10px] mb-1.5">Business Location Hub</label>
                <input 
                  type="text" 
                  value={profile.location} 
                  disabled 
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-400 cursor-not-allowed outline-none" 
                />
              </div>
            </div>

            {/* Architecture / Infrastructure Selection */}
            <div>
              <label className="block text-stone-700 font-bold tracking-wide uppercase text-[10px] mb-1.5">Primary Architecture Framework Stack</label>
              <select 
                value={profile.techStack} 
                onChange={(e) => setProfile({ ...profile, techStack: e.target.value })}
                className="w-full bg-white border border-stone-200 rounded-xl p-3 text-stone-800 font-semibold outline-none focus:border-[#801429] focus:ring-1 focus:ring-[#801429] cursor-pointer shadow-sm"
              >
                <option value="Next.js & Tailwind CSS">Next.js & Tailwind CSS (Enterprise Scale Model)</option>
                <option value="Astro Standard Stack">Astro Static Compilation Framework</option>
                <option value="Legacy Stack System">Alternative Legacy Blueprint</option>
              </select>
            </div>

            <hr className="border-stone-100" />

            {/* Interactive Functional Switch Toggles */}
            <div>
              <h3 className="text-[14px] font-bold text-stone-900 mb-3 tracking-tight">Automated Notification Ecosystem</h3>
              <div className="space-y-3.5">
                <label className="flex items-center justify-between cursor-pointer select-none">
                  <div>
                    <p className="font-semibold text-stone-800">Inbound High-Intent Lead Alerts</p>
                    <p className="text-xs text-stone-400">Instantly forward validation webhooks to custom API email hooks.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={notificationSettings.emailLeads}
                    onChange={(e) => setNotificationSettings({ ...notificationSettings, emailLeads: e.target.checked })}
                    className="w-4 h-4 text-[#801429] rounded border-stone-300 focus:ring-[#801429] accent-[#801429]"
                  />
                </label>

                <label className="flex items-center justify-between cursor-pointer select-none">
                  <div>
                    <p className="font-semibold text-stone-800">Synergy Matrix Matching Reports</p>
                    <p className="text-xs text-stone-400">Notify upon real-time calculation of profile alignment thresholds.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={notificationSettings.matchingAlerts}
                    onChange={(e) => setNotificationSettings({ ...notificationSettings, matchingAlerts: e.target.checked })}
                    className="w-4 h-4 text-[#801429] rounded border-stone-300 focus:ring-[#801429] accent-[#801429]"
                  />
                </label>
              </div>
            </div>

          </div>

          <div className="p-4 bg-stone-50 border-t border-stone-100 flex justify-end">
            <button className="bg-stone-900 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-stone-800 shadow-sm transition-all">
              Save Infrastructure Changes
            </button>
          </div>
        </main>

      </div>
    </div>
  );
}