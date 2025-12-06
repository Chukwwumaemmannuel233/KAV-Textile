"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart } from "lucide-react"
import SiteHeader from "../../../components/site-header"

interface FavoriteItem {
  id: string
  name: string
  description: string
  image: string
  isFavorited: boolean
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([
    {
      id: "1",
      name: "Heavyweight Linen - Natural",
      description: "",
      image: "/heavyweight-linen-natural.jpg",
      isFavorited: true,
    },
    {
      id: "2",
      name: "Silk Charmeuse - Blush",
      description: "",
      image: "/silk-charmeuse-blush.jpg",
      isFavorited: true,
    },
    {
      id: "3",
      name: "Organic Cotton Jersey - White",
      description: "",
      image: "/organic-cotton-jersey-white.jpg",
      isFavorited: true,
    },
    {
      id: "4",
      name: "Wool Tweed - Charcoal",
      description: "",
      image: "/wool-tweed-charcoal.jpg",
      isFavorited: true,
    },
  ])

  const toggleFavorite = (id: string) => {
    setFavorites(favorites.map((item) => (item.id === id ? { ...item, isFavorited: !item.isFavorited } : item)))
  }

  return (
    <main className="bg-white min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="px-6 md:px-16 py-16 md:py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">My Favorites</h1>
      </section>

      {/* Favorites Grid */}
      <section className="px-6 md:px-16 py-12 pb-24">
        <div className="max-w-7xl mx-auto">
          {favorites.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {favorites.map((item) => (
                <div key={item.id} className="group">
                  {/* Product Image Container */}
                  <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Heart Button */}
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-neutral-100 transition-colors"
                      aria-label="Toggle favorite"
                    >
                      <Heart size={24} className={item.isFavorited ? "fill-black text-black" : "text-black"} />
                    </button>
                  </div>

                  {/* Product Info */}
                  <h3 className="font-semibold text-base md:text-lg mb-2 line-clamp-2">{item.name}</h3>

                  {/* View Details Link */}
                  <Link
                    href={`/fabrics/${item.id}`}
                    className="text-neutral-600 text-sm hover:text-black transition-colors mb-4 inline-block"
                  >
                    View Details
                  </Link>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-neutral-900 transition-colors">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg mb-6">No favorite items yet</p>
              <Link href="/shop">
                <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-neutral-900 transition-colors">
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-200 px-6 md:px-16 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-8">
            <Link href="/contact" className="text-neutral-700 hover:text-black transition-colors">
              Contact
            </Link>
            <Link href="/faq" className="text-neutral-700 hover:text-black transition-colors">
              FAQ
            </Link>
            <Link href="/pages/user/shipping-info" className="text-neutral-700 hover:text-black transition-colors">
              Shipping
            </Link>
          </div>
          <div className="text-center text-neutral-600 text-sm">© 2023 Fabric.co Inc. All Rights Reserved.</div>
        </div>
      </footer>
    </main>
  )
}
