"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import SiteHeader from "./components/site-header";

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row pt-12 pb-20 overflow-hidden">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-6 md:px-16 py-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
            Woven with
            <br />
            Intention
          </h1>

          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-lg text-neutral-700">
            Experience the finest fabrics, sustainably sourced and crafted with
            artisanal quality for modern living. The fabric of your life starts
            here.
          </p>

          <Link href="/pages/auth/login">
            <button className="bg-black text-white px-8 py-3 font-medium hover:bg-neutral-900 transition">
              Discover the Collection
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 md:px-12">
          <div className="w-full max-w-[620px] h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://media.istockphoto.com/id/1033994080/photo/pallet-of-vivid-and-colorful-indian-fabric.jpg?s=612x612&w=0&k=20&c=1yjCct4pAViEVSWtUaYFRtLFPFVBPp4iLWOOwJoCtew="
              alt="Luxury fabric texture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={36} className="text-neutral-500" />
        </div>
      </section>
    </main>
  );
}
