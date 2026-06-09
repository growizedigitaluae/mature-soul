"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Navigation config array for highly readable rendering code
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Search", href: "/search" },
    { name: "Matches", href: "/matches" },
    { name: "Messages", href: "/messages" },
    { name: "Activities", href: "/activities" },
    { name: "Success Stories", href: "/stories" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-stone-100 sticky top-0 z-50 px-6 lg:px-16 py-4 flex items-center justify-between">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center cursor-pointer">
        <Image 
          src="/logo.png" 
          alt="MatureSoul Logo" 
          width={185} 
          height={46} 
          priority
          className="object-contain"
        />
      </Link>

      {/* Dynamic Mid Navigation links */}
      <nav className="hidden md:flex items-center space-x-9 text-[16px] font-medium text-stone-600">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`pb-1 tracking-wide transition-all duration-200 border-b-2 ${
                isActive 
                  ? "text-[#801429] border-[#801429] font-semibold" 
                  : "border-transparent hover:text-[#801429] hover:border-[#801429]/20"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4 text-[15px]">
        <button className="px-6 py-2.5 font-medium text-[#801429] border border-[#801429]/30 rounded-md hover:bg-stone-50 transition-colors duration-200">
          Login
        </button>
        <button className="px-6 py-2.5 font-medium text-white bg-[#801429] rounded-md hover:bg-[#6b1022] transition-colors duration-200 shadow-sm">
          Join Now
        </button>
      </div>
    </header>
  );
}