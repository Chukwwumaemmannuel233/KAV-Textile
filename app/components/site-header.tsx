"use client"

import Link from "next/link"
import { Search, User, ShoppingBag, Home, Store, Info, Mail } from "lucide-react"

interface SiteHeaderProps {
  variant?: "guest" | "user"
}

export default function SiteHeader({ variant = "guest" }: SiteHeaderProps) {
  if (variant === "user") {
    return (
      <>
        <header className="border-b border-neutral-200 sticky top-0 z-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-70 transition">
              FABRIC.
            </Link>
            <nav className="hidden md:flex gap-8 items-center">
              <Link href="/pages/user/fabrics" className="text-sm font-medium hover:opacity-70 transition">
                Shop
              </Link>
              <Link href="/collections" className="text-sm font-medium hover:opacity-70 transition">
                About
              </Link>
              <Link href="/pages/user/about" className="text-sm font-medium hover:opacity-70 transition">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="hover:opacity-70 transition">
                <Search size={20} />
              </button>
              <Link href="/pages/user/profile" className="hover:opacity-70 transition">
                <User size={20} />
              </Link>
              <Link href="/cart" className="hover:opacity-70 transition relative">
                <ShoppingBag size={20} />
              </Link>
            </div>
          </div>
        </header>
        <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t border-neutral-200 bg-white z-40">
          <div className="flex items-center justify-around">
            <Link
              href="/"
              className="flex-1 py-3 flex flex-col items-center gap-1 text-xs font-medium hover:opacity-70 transition"
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link
              href="/pages/user/fabrics"
              className="flex-1 py-3 flex flex-col items-center gap-1 text-xs font-medium hover:opacity-70 transition"
            >
              <Store size={20} />
              <span>Shop</span>
            </Link>
            <Link
              href="/pages/user/about"
              className="flex-1 py-3 flex flex-col items-center gap-1 text-xs font-medium hover:opacity-70 transition"
            >
              <Info size={20} />
              <span>About</span>
            </Link>
            <Link
              href="/pages/user/contact"
              className="flex-1 py-3 flex flex-col items-center gap-1 text-xs font-medium hover:opacity-70 transition"
            >
              <Mail size={20} />
              <span>Contact</span>
            </Link>
          </div>
        </nav>
      </>
    )
  }

  return (
    <>
      <header className="border-b border-neutral-200 sticky top-0 z-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-70 transition">
            FABRIC.
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/shop" className="text-sm font-medium hover:opacity-70 transition">
              Shop
            </Link>
            <Link href="/story" className="text-sm font-medium hover:opacity-70 transition">
              Our Story
            </Link>
            <Link href="/journal" className="text-sm font-medium hover:opacity-70 transition">
              Journal
            </Link>
          </nav>
        </div>
      </header>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t border-neutral-200 bg-white z-40">
        <div className="flex items-center justify-around">
          <Link
            href="/"
            className="flex-1 py-3 flex flex-col items-center gap-1 text-xs font-medium hover:opacity-70 transition"
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link
            href="/shop"
            className="flex-1 py-3 flex flex-col items-center gap-1 text-xs font-medium hover:opacity-70 transition"
          >
            <Store size={20} />
            <span>Shop</span>
          </Link>
          <Link
            href="/story"
            className="flex-1 py-3 flex flex-col items-center gap-1 text-xs font-medium hover:opacity-70 transition"
          >
            <Info size={20} />
            <span>About</span>
          </Link>
          <Link
            href="/journal"
            className="flex-1 py-3 flex flex-col items-center gap-1 text-xs font-medium hover:opacity-70 transition"
          >
            <Mail size={20} />
            <span>Contact</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
