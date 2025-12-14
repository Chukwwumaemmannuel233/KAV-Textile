"use client"

import Link from "next/link"
import { Search, User, ShoppingBag, Home, Store, Info, Mail, X } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"

interface SiteHeaderProps {
  variant?: "guest" | "user"
}

export default function SiteHeader({ variant = "guest" }: SiteHeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { getTotalItems } = useCart()
  const cartItemCount = getTotalItems()

  if (variant === "user") {
    return (
      <>
        <header className="border-b border-neutral-200 sticky top-0 z-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link href="/pages/user/dashboard" className="text-2xl font-bold tracking-tight hover:opacity-70 transition">
              FABRIC.
            </Link>
            <nav className="hidden md:flex gap-8 items-center">
              <Link href="/pages/user/fabrics" className="text-sm font-medium hover:opacity-70 transition">
                Fabrics
              </Link>
              <Link href="/pages/user/about" className="text-sm font-medium hover:opacity-70 transition">
                About
              </Link>
              <Link href="/pages/user/contact" className="text-sm font-medium hover:opacity-70 transition">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="hover:opacity-70 transition" onClick={() => setIsSearchOpen(true)} aria-label="Search">
                <Search size={20} />
              </button>
              <Link href="/pages/user/profile" className="hover:opacity-70 transition">
                <User size={20} />
              </Link>
              <Link href="/pages/user/cart" className="hover:opacity-70 transition relative">
                <ShoppingBag size={20} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </header>

        {isSearchOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 md:pt-32"
            onClick={() => setIsSearchOpen(false)}
          >
            <div
              className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Search Fabrics</h2>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="hover:opacity-70 transition"
                  aria-label="Close search"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for fabrics, patterns, colors..."
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  autoFocus
                />
              </div>
              <div className="mt-6">
                <p className="text-sm text-neutral-500 mb-3">Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1.5 bg-neutral-100 rounded-full text-sm hover:bg-neutral-200 transition">
                    Linen
                  </button>
                  <button className="px-3 py-1.5 bg-neutral-100 rounded-full text-sm hover:bg-neutral-200 transition">
                    Cotton
                  </button>
                  <button className="px-3 py-1.5 bg-neutral-100 rounded-full text-sm hover:bg-neutral-200 transition">
                    Silk
                  </button>
                  <button className="px-3 py-1.5 bg-neutral-100 rounded-full text-sm hover:bg-neutral-200 transition">
                    Floral Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t border-neutral-200 bg-white z-40">
          <div className="flex items-center justify-around">
            <Link
              href="/pages/user/dashboard"
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
