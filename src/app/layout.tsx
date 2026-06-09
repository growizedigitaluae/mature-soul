import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "MatureSoul - Find Meaningful Connections",
  description: "Meaningful connections for mature singles ready for real love.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAF9] text-stone-800 antialiased selection:bg-[#801429]/10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}