"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // State to manage FAQ toggle without external layout libraries
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden select-none bg-[#FAFAF9] text-stone-800 antialiased">
      
     {/* 2. CINEMATIC HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center pt-8 pb-20 lg:pt-2 lg:pb-20 bg-white">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.webp" 
            alt="Mature Couple"
            fill
            priority
            className="object-cover object-right lg:object-center"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
          {/* Overlay mask to ensure ambient background behind columns has premium contrast */}
          <div className="absolute inset-0 bg-black/10 z-10" />
        </div>

        {/* Main Content Wrapper restricted strictly to 80% Screen Width */}
        <div className="relative z-20 w-full max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headings & Registration Card */}
          <div className="lg:col-span-5 lg:col-start-2 flex flex-col space-y-4 lg:mt-2">
            
            {/* Tightened Text Line Stack */}
            <div className="space-y-1">
              <h1 className="font-serif text-[58px] lg:text-[60px] text-gray-900 leading-[1.05] tracking-tight">
                Find Your <br />
                <span className="text-[#691122] font-bold">Mature</span>{" "}
                <span className="text-[#D99B26] font-semibold italic">Soulmate</span>
              </h1>
              <div className="flex items-center space-x-2 py-0.5">
                <div className="h-[1px] w-14 bg-gray-300"></div>
                <span className="text-red-800 text-[13px]">❤️</span>
                <div className="h-[1px] w-14 bg-gray-300"></div>
              </div>
              <p className="text-gray-700 text-[16px] max-w-sm font-medium leading-snug">
                Meaningful connections for mature singles who are ready for real love.
              </p>
            </div>

            {/* Registration Glassmorphism Card */}
            <div className="bg-white/95 backdrop-blur-[4px] rounded-2xl p-5 shadow-2xl border border-white/60 max-w-[440px] w-full">
              <h3 className="text-[#801429] font-bold text-[17px] tracking-wide mb-3">Join for Free</h3>
              
              <form className="space-y-3.5 text-[13px]" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-500 font-medium mb-1">I am a</label>
                    <select className="w-full bg-gray-50/50 border border-gray-200 rounded-md p-2 text-gray-700 outline-none focus:border-red-800 cursor-pointer text-[14px]">
                      <option>Man</option>
                      <option>Woman</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-500 font-medium mb-1">Looking for a</label>
                    <select className="w-full bg-gray-50/50 border border-gray-200 rounded-md p-2 text-gray-700 outline-none focus:border-red-800 cursor-pointer text-[14px]">
                      <option>Woman</option>
                      <option>Man</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-500 font-medium mb-1">Age</label>
                    <div className="flex items-center space-x-2">
                      <select className="w-full bg-gray-50/50 border border-gray-200 rounded-md p-2 text-gray-700 outline-none focus:border-red-800 cursor-pointer text-[14px]">
                        <option>40</option>
                      </select>
                      <span className="text-gray-400 font-medium">to</span>
                      <select className="w-full bg-gray-50/50 border border-gray-200 rounded-md p-2 text-gray-700 outline-none focus:border-red-800 cursor-pointer text-[14px]">
                        <option>60+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-500 font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-md p-2 text-gray-700 outline-none focus:border-red-800 text-[14px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-500 font-medium mb-1">Password</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      placeholder="Create a password" 
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-md p-2 text-gray-700 outline-none focus:border-red-800 text-[14px]"
                    />
                    <span className="absolute right-3.5 top-2.5 cursor-pointer text-gray-400 text-[16px]">👁️</span>
                  </div>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-[#801429] to-[#630b1c] hover:opacity-95 text-white font-semibold py-2.5 rounded-md shadow transition-opacity duration-200 flex items-center justify-center space-x-2 text-[15px]">
                  <span>Join Now – It's Free!</span>
                  <span className="text-[12px]">➔</span>
                </button>

                <div className="relative flex py-1 items-center justify-center">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="flex-shrink mx-3 text-gray-400 text-[11px] uppercase tracking-wider font-medium">or continue with</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[13px]">
                  <button className="flex items-center justify-center py-2 px-2 border border-gray-200 rounded-md bg-white hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-600 gap-1.5">
                    <span className="text-red-500 font-bold text-[14px]">G</span> Google
                  </button>
                  <button className="flex items-center justify-center py-2 px-2 border border-gray-200 rounded-md bg-white hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-600 gap-1.5">
                    <span className="text-blue-600 font-bold text-[15px]">f</span> Facebook
                  </button>
                  <button className="flex items-center justify-center py-2 px-2 border border-gray-200 rounded-md bg-white hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-600 gap-1">
                    <span className="text-black font-bold text-[15px]"></span> Apple
                  </button>
                </div>

                <div className="text-center text-[12px] text-gray-500 pt-2 flex items-center justify-center gap-2 border-t border-gray-100">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  <span>100% Secure. Your privacy is our priority.</span>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Dynamic features right aligned */}
          <div className="lg:col-span-6 flex flex-col justify-between lg:h-[500px] lg:items-end space-y-8 lg:space-y-0 z-20 lg:mt-4">
            
            {/* Features Outline List */}
            <div className="space-y-5 max-w-[340px] w-full lg:ml-auto">
              
              {/* Item 1 */}
              <div className="flex items-start space-x-4">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 mt-0.5">
                  <svg className="w-6 h-6 text-[#801429]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div>
                  <h4 className="text-white drop-shadow-md font-bold text-[17px] tracking-wide">Safe & Secure</h4>
                  <p className="text-white drop-shadow font-medium text-[15px] mt-0.5 leading-tight opacity-95">
                    Your privacy and safety <br />
                    are our top priority.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start space-x-4">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 mt-0.5">
                  <svg className="w-6 h-6 text-[#801429]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div>
                  <h4 className="text-white drop-shadow-md font-bold text-[17px] tracking-wide">Serious Members</h4>
                  <p className="text-white drop-shadow font-medium text-[15px] mt-0.5 leading-tight opacity-95">
                    Connect with like-minded <br />
                    singles looking for real <br />
                    relationships.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start space-x-4">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 mt-0.5">
                  <svg className="w-6 h-6 text-[#801429]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <div>
                  <h4 className="text-white drop-shadow-md font-bold text-[17px] tracking-wide">Mature Connections</h4>
                  <p className="text-white drop-shadow font-medium text-[15px] mt-0.5 leading-tight opacity-95">
                    Designed for mature <br />
                    singles who value <br />
                    meaningful relationships.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start space-x-4">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 mt-0.5">
                  <svg className="w-6 h-6 text-[#801429]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <div>
                  <h4 className="text-white drop-shadow-md font-bold text-[17px] tracking-wide">Verified Profiles</h4>
                  <p className="text-white drop-shadow font-medium text-[15px] mt-0.5 leading-tight opacity-95">
                    Genuine profiles for <br />
                    authentic connections.
                  </p>
                </div>
              </div>

            </div>

            {/* 3-ITEM TRANSLUCENT GLASSMORPHISM BOX */}
            <div className="lg:mt-6 bg-black/45 backdrop-blur-xl rounded-2xl p-4.5 border border-white/15 w-full max-w-2xl lg:ml-auto grid grid-cols-3 gap-3 text-white shadow-2xl">
              
              {/* Item 1: Active Members */}
              <div className="flex flex-col items-center justify-center py-1">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-2 shadow-inner">
                  <svg className="w-5 h-5 text-[#D99B26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <p className="text-[#D99B26] font-bold text-[21px] tracking-tight leading-none">500,000+</p>
                <p className="text-gray-100 text-[11px] uppercase tracking-wider font-semibold mt-1.5 text-center">Active Members</p>
              </div>

              {/* Item 2: Matches Made */}
              <div className="flex flex-col items-center justify-center py-1 border-x border-white/10">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-2 shadow-inner">
                  <svg className="w-5 h-5 text-[#D99B26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <p className="text-[#D99B26] font-bold text-[21px] tracking-tight leading-none">120,000+</p>
                <p className="text-gray-200 text-[11px] uppercase tracking-wider font-semibold mt-1.5 text-center">Matches Made</p>
              </div>

              {/* Item 3: Success Stories */}
              <div className="flex flex-col items-center justify-center py-1">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-2 shadow-inner">
                  <svg className="w-5 h-5 text-[#D99B26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <p className="text-[#D99B26] font-bold text-[21px] tracking-tight leading-none">10,000+</p>
                <p className="text-gray-200 text-[11px] uppercase tracking-wider font-semibold mt-1.5 text-center">Success Stories</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. COMPACTED HOW IT WORKS ROW */}
      <section className="relative z-30 w-full bg-[#590D1C] text-white py-6 px-6 lg:px-16 border-t border-[#400712] shadow-2xl">
        <div className="max-w-[80%] mx-auto flex flex-col space-y-4">
          
          <h2 className="font-serif text-[22px] text-center text-white tracking-wide">
            How <span className="italic text-[#D99B26] font-semibold">MatureSoul</span> Works
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 items-center">
            
            {/* Step 1 */}
            <div className="flex items-center space-x-3.5">
              <div className="w-14 h-14 border-2 border-amber-400/30 rounded-full flex items-center justify-center bg-red-950/40 flex-shrink-0">
                <svg className="w-7 h-7 text-[#D99B26]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
              </div>
              <div className="flex flex-col">
                <h5 className="font-semibold text-[18px] text-white tracking-wide">1. Create Profile</h5>
                <p className="text-gray-300 text-[13px] leading-tight mt-0.5 max-w-[180px]">Sign up and build your profile setup.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center space-x-3.5">
              <div className="w-14 h-14 border-2 border-amber-400/30 rounded-full flex items-center justify-center bg-red-950/40 flex-shrink-0">
                <svg className="w-7 h-7 text-[#D99B26]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <div className="flex flex-col">
                <h5 className="font-semibold text-[18px] text-white tracking-wide">2. Find Matches</h5>
                <p className="text-gray-300 text-[13px] leading-tight mt-0.5 max-w-[180px]">Discover compatible partner matches.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center space-x-3.5">
              <div className="w-14 h-14 border-2 border-amber-400/30 rounded-full flex items-center justify-center bg-red-950/40 flex-shrink-0">
                <svg className="w-7 h-7 text-[#D99B26]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </div>
              <div className="flex flex-col">
                <h5 className="font-semibold text-[18px] text-white tracking-wide">3. Connect</h5>
                <p className="text-gray-300 text-[13px] leading-tight mt-0.5 max-w-[180px]">Send messages and chat securely.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center space-x-3.5">
              <div className="w-14 h-14 border-2 border-amber-400/30 rounded-full flex items-center justify-center bg-red-950/40 flex-shrink-0">
                <svg className="w-7 h-7 text-[#D99B26]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <div className="flex flex-col">
                <h5 className="font-semibold text-[18px] text-white tracking-wide">4. Relation</h5>
                <p className="text-gray-300 text-[13px] leading-tight mt-0.5 max-w-[180px]">Build meaningful connections.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. DISCOVER RECENT MEMBERS */}
      <section className="w-full bg-white py-20 px-6 lg:px-16 border-b border-stone-100">
        <div className="max-w-[80%] mx-auto text-center">
          <h2 className="font-serif text-[36px] text-stone-900 tracking-tight">
            Meet Our <span className="text-[#A8730A] italic font-semibold">Newest Members</span>
          </h2>
          <p className="text-stone-500 text-[15px] mt-2 max-w-md mx-auto">
            Genuine verified singles near you who recently joined looking for companionship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { name: "Sarah, 46", loc: "Dubai, UAE" },
              { name: "David, 52", loc: "Abu Dhabi, UAE" },
              { name: "Elena, 41", loc: "Sharjah, UAE" },
              { name: "Michael, 55", loc: "Dubai, UAE" }
            ].map((member, i) => (
              <div key={i} className="group bg-[#FAF9F7] rounded-2xl overflow-hidden border border-stone-200/60 transition-all duration-200 hover:border-[#801429]/30 shadow-sm hover:shadow-md flex flex-col">
                {/* Fixed structural aspect container to completely eliminate CLS layout shifts */}
                <div className="relative aspect-[4/5] w-full bg-stone-200/40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-medium text-[13px]">
                    Premium Profile Photo
                  </div>
                </div>
                <div className="p-5 text-left bg-white border-t border-stone-100">
                  <h4 className="text-stone-900 font-bold text-[18px] tracking-wide">{member.name}</h4>
                  <p className="text-stone-500 text-[13px] flex items-center gap-1 mt-1">
                    <svg className="w-3.5 h-3.5 text-[#A8730A]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                    {member.loc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="w-full bg-[#FAFAF9] py-20 px-6 lg:px-16">
        <div className="max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-[38px] text-stone-900 leading-tight">
              Why <span className="text-[#801429] font-bold">MatureSoul</span> is <br />
              Different From Other Sites
            </h2>
            <p className="text-stone-600 text-[16px] mt-4 leading-relaxed">
              Unlike generic dating apps built around fast swipes and shallow encounters, we tailor everything specifically for individuals who appreciate depth, shared experiences, and life achievements.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 text-stone-800 font-medium">
                <span className="text-[#A8730A] text-[18px]">✔</span>
                <span>Strict manual validation of every profile submitted</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-800 font-medium">
                <span className="text-[#A8730A] text-[18px]">✔</span>
                <span>Advanced alignment filters built for long-term values</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-800 font-medium">
                <span className="text-[#A8730A] text-[18px]">✔</span>
                <span>Clean, secure environment protected from unsolicited spam</span>
              </div>
            </div>
          </div>

          {/* Core Principle Quote Box in Elegant Light Warm Tint */}
          <div className="bg-[#F5F2EE] rounded-2xl p-8 border border-stone-200/60 relative overflow-hidden shadow-sm">
            <h3 className="text-[#A8730A] font-serif text-[24px] mb-4 italic">Our Core Principle</h3>
            <blockquote className="text-stone-700 font-medium text-[16px] leading-relaxed">
              "We believe meaningful intimacy in later stages of life shouldn't be complicated by confusing interfaces or mismatched expectations. You deserve a dedicated space built entirely upon mutual respect."
            </blockquote>
            <div className="mt-6 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-stone-300"></div>
              <div>
                <p className="text-stone-900 text-[14px] font-bold">The MatureSoul Team</p>
                <p className="text-stone-500 text-[12px]">Relationship Integrity Operators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLEAN PRODUCTION-READY FAQ SECTION */}
      <section className="w-full bg-white py-20 px-6 lg:px-16 border-t border-stone-100">
        <div className="max-w-[60%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-[36px] text-stone-900 tracking-tight">
              Frequently Asked <span className="text-[#A8730A] italic font-semibold">Questions</span>
            </h2>
            <p className="text-stone-500 text-[15px] mt-2">
              Everything you need to know about our privacy protocols and matching process.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is my personal identity visible to public search engines?",
                a: "Absolutely not. To preserve maximum discretion, all subscriber profiles remain safely sequestered behind our secure member firewall. Your data is strictly inaccessible to Google, Bing, or unauthenticated guests."
              },
              {
                q: "How exactly do you verify individual profiles?",
                a: "Every registration undergoes an obligatory screening lifecycle governed by our community guidelines. This verification process effectively minimizes automated bot accounts and ensures authentic communication."
              },
              {
                q: "Can I manage my privacy constraints accurately?",
                a: "Yes. Our dashboard grants you instant command over your operational perimeter. You can restrict photo visibility, limit inbound requests to exact age parameters, or toggle completely invisible browsing at any time."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="border border-stone-200 rounded-xl overflow-hidden bg-[#FAFAF9]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left font-bold text-[16px] text-stone-800 flex items-center justify-between hover:bg-stone-100/50 transition-colors duration-200 outline-none"
                >
                  <span>{faq.q}</span>
                  <span className={`text-[18px] text-[#801429] transform transition-transform duration-200 ${openFaq === index ? "rotate-45" : "rotate-0"}`}>
                    ＋
                  </span>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === index ? "max-h-[200px] border-t border-stone-200/60 bg-white" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-[14px] text-stone-600 leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EMOTIONAL FINAL CALL-TO-ACTION CARD */}
      <section className="w-full bg-white py-16 px-6 lg:px-16 text-center border-t border-stone-100">
        <div className="max-w-[60%] mx-auto bg-gradient-to-br from-[#F7F4F0] to-[#EFEAE4] rounded-3xl p-10 lg:p-14 border border-stone-200 shadow-sm flex flex-col items-center space-y-6">
          <h2 className="font-serif text-[32px] lg:text-[40px] text-stone-900 leading-tight">
            Ready to Begin Your <br />Next Beautiful Chapter?
          </h2>
          <p className="text-stone-600 text-[15px] max-w-md">
            Your special match could be browsing profiles right now. Don't leave your happiness to chance.
          </p>
          <button className="bg-[#801429] hover:bg-[#6b1022] text-white font-bold px-10 py-4 rounded-xl shadow-md transition-colors duration-200 text-[16px] tracking-wide mt-2">
            Create Your Free Account Now
          </button>
        </div>
      </section>
    </div>
  );
}