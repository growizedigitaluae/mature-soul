"use client";

import { useState } from "react";

// Mock template dataset mapped to specific country and age parameters
const MOCK_PROFILES = [
  { id: 1, name: "Sarah", age: 46, country: "United Arab Emirates", city: "Dubai", lat: 25.2048, lng: 55.2708, genderIntent: "man_seeking_woman", title: "Interior Designer", verified: true },
  { id: 2, name: "David", age: 52, country: "United Kingdom", city: "London", lat: 51.5074, lng: -0.1278, genderIntent: "woman_seeking_man", title: "Corporate Counsel", verified: true },
  { id: 3, name: "Elena", age: 19, country: "United States", city: "New York", lat: 40.7128, lng: -74.0060, genderIntent: "man_seeking_woman", title: "Gallery Curator", verified: true },
  { id: 4, name: "Michael", age: 55, country: "United Arab Emirates", city: "Dubai", lat: 25.2048, lng: 55.2708, genderIntent: "woman_seeking_man", title: "Architectural Engineer", verified: false },
  { id: 5, name: "Clara", age: 48, country: "Canada", city: "Toronto", lat: 43.6532, lng: -79.3832, genderIntent: "man_seeking_woman", title: "Executive Director", verified: true },
  { id: 6, name: "Robert", age: 63, country: "Australia", city: "Sydney", lat: 24.4539, lng: 54.3773, genderIntent: "woman_seeking_man", title: "Financial Analyst", verified: true },
];

const GLOBAL_COUNTRIES = [
  "Australia", "Bahrain", "Canada", "China", "Egypt", "France", "Germany", 
  "Hong Kong", "India", "Italy", "Japan", "Kuwait", "Malaysia", "Oman", 
  "Qatar", "Saudi Arabia", "Singapore", "South Africa", "Spain", "Sri Lanka", 
  "Switzerland", "United Arab Emirates", "United Kingdom", "United States"
];

// Generate automated array of integers from 18 to 65 for clean rendering
const AGE_OPTIONS = Array.from({ length: 65 - 18 + 1 }, (_, i) => 18 + i);

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; 
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; 
}

export default function SearchPage() {
  const [globalCountry, setGlobalCountry] = useState("All");
  const [genderFilter, setGenderFilter] = useState("All");
  const [onlyVerified, setOnlyVerified] = useState(false);
  
  // Dynamic User-Controlled Age State Tracking Parameters
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(65);

  const [isNearMeActive, setIsNearMeActive] = useState(false);
  const [radius, setRadius] = useState(100); 
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);

  const handleNearMeToggle = (checked: boolean) => {
    setIsNearMeActive(checked);
    if (checked && !userLocation) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            setGeoError(null);
          },
          () => {
            setGeoError("Location access denied. Using country filter.");
            setIsNearMeActive(false);
          }
        );
      } else {
        setGeoError("Geolocation not supported by browser.");
        setIsNearMeActive(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] py-12 px-6 lg:px-16">
      <div className="max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: FILTER PANEL */}
        <aside className="lg:col-span-3 bg-[#fdfcfb] rounded-2xl p-6 border-2 border-stone-200/60 shadow-md sticky top-24 ring-4 ring-[#801429]/5">
          <div className="border-b border-stone-200/80 pb-4 mb-5">
            <h2 className="font-serif text-[22px] text-stone-900 tracking-wide">Refine Search</h2>
            <p className="text-xs text-stone-400 mt-1">Adjust parameters for high-intent alignment</p>
          </div>
          
          <div className="space-y-6 text-[14px]">
            
            {/* Radio Button Gender Selector */}
            <div>
              <label className="block text-stone-700 font-bold tracking-wide uppercase text-[11px] mb-3">Seeking Alignment</label>
              <div className="space-y-3 bg-white p-3.5 rounded-xl border border-stone-200/60 shadow-sm">
                <label className="flex items-center space-x-3 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="genderIntent"
                    value="All"
                    checked={genderFilter === "All"}
                    onChange={(e) => setGenderFilter(e.target.value)}
                    className="w-4 h-4 text-[#801429] border-stone-300 focus:ring-[#801429] accent-[#801429] cursor-pointer"
                  />
                  <span className={`font-medium ${genderFilter === "All" ? "text-stone-900 font-semibold" : "text-stone-600"}`}>All Preferences</span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="genderIntent"
                    value="man_seeking_woman"
                    checked={genderFilter === "man_seeking_woman"}
                    onChange={(e) => setGenderFilter(e.target.value)}
                    className="w-4 h-4 text-[#801429] border-stone-300 focus:ring-[#801429] accent-[#801429] cursor-pointer"
                  />
                  <span className={`font-medium ${genderFilter === "man_seeking_woman" ? "text-stone-900 font-semibold" : "text-stone-600"}`}>Man looking for a Woman</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="genderIntent"
                    value="woman_seeking_man"
                    checked={genderFilter === "woman_seeking_man"}
                    onChange={(e) => setGenderFilter(e.target.value)}
                    className="w-4 h-4 text-[#801429] border-stone-300 focus:ring-[#801429] accent-[#801429] cursor-pointer"
                  />
                  <span className={`font-medium ${genderFilter === "woman_seeking_man" ? "text-stone-900 font-semibold" : "text-stone-600"}`}>Woman looking for a Man</span>
                </label>
              </div>
            </div>

            {/* "Near Me" Target Module */}
            <div className="pt-2">
              <label className="flex items-center space-x-3 cursor-pointer select-none mb-3 bg-white p-3 rounded-xl border border-stone-200/60 shadow-sm">
                <input 
                  type="checkbox"
                  checked={isNearMeActive}
                  onChange={(e) => handleNearMeToggle(e.target.checked)}
                  className="w-4 h-4 rounded text-[#801429] border-stone-300 focus:ring-[#801429] cursor-pointer accent-[#801429]"
                />
                <span className="text-stone-800 font-semibold text-[13px]">Enable "Near Me"</span>
              </label>

              {isNearMeActive && userLocation && (
                <div className="bg-white p-3.5 rounded-xl border-2 border-[#801429]/10 shadow-sm transition-all duration-200">
                  <div className="flex justify-between items-center mb-2 text-xs font-semibold text-stone-500">
                    <span>Search Radius:</span>
                    <span className="text-[#801429] font-bold bg-[#801429]/5 px-2 py-0.5 rounded-md">{radius} km</span>
                  </div>
                  <input 
                    type="range" 
                    min="25" 
                    max="500" 
                    step="25"
                    value={radius} 
                    onChange={(e) => setRadius(Number(e.target.value))}
                    className="w-full h-1.5 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-[#801429]"
                  />
                </div>
              )}

              {geoError && (
                <p className="text-xs text-amber-800 bg-amber-50 p-2 rounded-lg mt-1.5 font-medium border border-amber-200/60">{geoError}</p>
              )}
            </div>

            {/* Full Global Country Selector Field */}
            <div className={isNearMeActive && userLocation ? "opacity-30 pointer-events-none transition-opacity duration-200" : "transition-opacity duration-200"}>
              <label className="block text-stone-700 font-bold tracking-wide uppercase text-[11px] mb-1.5">Country Location</label>
              <select 
                value={globalCountry}
                onChange={(e) => setGlobalCountry(e.target.value)}
                disabled={isNearMeActive && !!userLocation}
                className="w-full bg-white border border-stone-200 rounded-xl p-3 text-stone-800 font-medium outline-none focus:border-[#801429] focus:ring-2 focus:ring-[#801429]/5 shadow-sm cursor-pointer"
              >
                <option value="All">All Countries (Global)</option>
                {GLOBAL_COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* FULLY FUNCTIONAL SCALABLE AGE SELECTOR BLOCK */}
            <div>
              <label className="block text-stone-700 font-bold tracking-wide uppercase text-[11px] mb-1.5">Age Threshold</label>
              <div className="flex items-center space-x-2 bg-white p-2 rounded-xl border border-stone-200/60 shadow-sm">
                <select 
                  value={minAge}
                  onChange={(e) => setMinAge(Number(e.target.value))}
                  className="w-full bg-transparent p-1.5 text-stone-800 font-semibold outline-none cursor-pointer text-center"
                >
                  {AGE_OPTIONS.map((age) => (
                    <option key={`min-${age}`} value={age} disabled={age > maxAge}>
                      {age}
                    </option>
                  ))}
                </select>
                <span className="text-stone-400 font-semibold text-xs">to</span>
                <select 
                  value={maxAge}
                  onChange={(e) => setMaxAge(Number(e.target.value))}
                  className="w-full bg-transparent p-1.5 text-stone-800 font-semibold outline-none cursor-pointer text-center"
                >
                  {AGE_OPTIONS.map((age) => (
                    <option key={`max-${age}`} value={age} disabled={age < minAge}>
                      {age === 65 ? "65+" : age}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* THEME-COLORED VERIFIED RADIO BUTTON FILTER */}
            <div>
              <label className="block text-stone-700 font-bold tracking-wide uppercase text-[11px] mb-3">Verification Tier</label>
              <div className="space-y-2 text-[13px]">
                <label 
                  onClick={() => setOnlyVerified(false)}
                  className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer select-none transition-all duration-200 font-semibold shadow-sm ${
                    !onlyVerified 
                      ? "bg-[#801429] border-[#801429] text-white ring-4 ring-[#801429]/10 shadow-md" 
                      : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="verificationTier"
                    checked={!onlyVerified}
                    readOnly
                    className="w-4 h-4 text-[#801429] border-stone-300 focus:ring-transparent accent-white cursor-pointer"
                  />
                  <span>All Portfolios</span>
                </label>

                <label 
                  onClick={() => setOnlyVerified(true)}
                  className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer select-none transition-all duration-200 font-semibold shadow-sm ${
                    onlyVerified 
                      ? "bg-[#801429] border-[#801429] text-white ring-4 ring-[#801429]/10 shadow-md" 
                      : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="verificationTier"
                    checked={onlyVerified}
                    readOnly
                    className="w-4 h-4 text-[#801429] border-stone-300 focus:ring-transparent accent-white cursor-pointer"
                  />
                  <span>Verified Only</span>
                </label>
              </div>
            </div>

          </div>
        </aside>

        {/* RIGHT COLUMN: SEARCH RESULTS */}
        <main className="lg:col-span-9 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
            <div>
              <h1 className="font-serif text-[28px] text-stone-900 tracking-tight">Discover Matches</h1>
              <p className="text-stone-500 text-[14px]">
                {isNearMeActive && userLocation 
                  ? `Showing profiles within a ${radius}km radius of your current position.` 
                  : "Displaying verified elite portfolios tailored to your global criteria."}
              </p>
            </div>
          </div>

          {/* Results Array Filtering Process updated with explicit age boundaries */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {MOCK_PROFILES
              .filter(p => genderFilter === "All" || p.genderIntent === genderFilter)
              .filter(p => !onlyVerified || p.verified)
              .filter(p => p.age >= minAge && (maxAge === 65 ? p.age >= 65 || p.age <= 65 : p.age <= maxAge))
              .filter(p => {
                if (isNearMeActive && userLocation) {
                  const distance = calculateDistance(userLocation.lat, userLocation.lng, p.lat, p.lng);
                  return distance <= radius;
                }
                return globalCountry === "All" || p.country === globalCountry;
              })
              .map((profile) => (
                <div key={profile.id} className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm transition-all duration-200 hover:border-[#801429]/30 hover:shadow-md flex flex-col">
                  <div className="relative aspect-[4/5] w-full bg-stone-50 overflow-hidden">
                    {profile.verified && (
                      <div className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center space-x-1 border border-stone-200 text-[11px] font-bold text-stone-800 shadow-sm">
                        <span className="text-emerald-600 text-[12px]">✔</span>
                        <span className="tracking-wide uppercase text-[10px]">Verified</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent z-10 opacity-70" />
                    <div className="absolute inset-0 flex items-center justify-center text-stone-300 text-[13px] font-medium tracking-wide">
                      Secure Portfolio View
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow bg-white">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-stone-900 font-bold text-[19px] tracking-wide">{profile.name}, {profile.age}</h3>
                      <span className="text-stone-500 text-[12px] font-medium truncate max-w-[50%] flex items-center gap-1">
                        <svg className="w-3 h-3 text-[#A8730A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                        <span className="truncate">{profile.city}</span>
                      </span>
                    </div>
                    <p className="text-stone-400 text-[13px] font-medium mt-0.5">{profile.title}</p>
                    
                    {isNearMeActive && userLocation && (
                      <span className="text-[11px] text-[#A8730A] font-semibold mt-2.5 bg-amber-50/70 border border-amber-200/40 px-2 py-0.5 rounded w-max">
                        ≈ {Math.round(calculateDistance(userLocation.lat, userLocation.lng, profile.lat, profile.lng))} km away
                      </span>
                    )}

                    <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-stone-100">
                      <button className="py-2 text-[13px] font-bold text-stone-600 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors text-center">
                        View Profile
                      </button>
                      <button className="py-2 text-[13px] font-bold text-white bg-[#801429] rounded-lg hover:bg-[#6b1022] transition-colors shadow-sm text-center">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}