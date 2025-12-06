"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import SiteHeader from "../../../components/site-header"

interface Fabric {
  id: number
  name: string
  price: number
  material: string
  color: string
  image: string
}

const allFabrics: Fabric[] = [
  {
    id: 1,
    name: "Belgian Linen",
    price: 25,
    material: "Linen",
    color: "Natural",
    image: "/images/belgian-linen-fabric.jpg",
  },
  {
    id: 2,
    name: "Organic Brushed Cotton",
    price: 18,
    material: "Cotton",
    color: "Natural",
    image: "/images/organic-brushed-cotton-fabric.jpg",
  },
  {
    id: 3,
    name: "Silk Charmeuse",
    price: 45,
    material: "Silk",
    color: "Pink",
    image: "/images/silk-charmeuse-fabric.jpg",
  },
  {
    id: 4,
    name: "Raw Denim",
    price: 22,
    material: "Denim",
    color: "Navy",
    image: "/images/raw-denim-fabric.jpg",
  },
  {
    id: 5,
    name: "Merino Wool Jersey",
    price: 30,
    material: "Wool",
    color: "Olive",
    image: "/images/merino-wool-jersey-fabric.jpg",
  },
  {
    id: 6,
    name: "Tencel Twill",
    price: 28,
    material: "Tencel",
    color: "Olive",
    image: "/images/tencel-twill-fabric.jpg",
  },
  {
    id: 7,
    name: "Hemp Canvas",
    price: 20,
    material: "Hemp",
    color: "Natural",
    image: "/images/hemp-canvas-fabric.jpg",
  },
  {
    id: 8,
    name: "Bamboo Velour",
    price: 26,
    material: "Bamboo",
    color: "Green",
    image: "/images/bamboo-velour-fabric.jpg",
  },
  {
    id: 9,
    name: "Linen Blend - Sage",
    price: 24,
    material: "Linen",
    color: "Sage",
    image: "/images/sage-linen-blend-fabric.jpg",
  },
  {
    id: 10,
    name: "Cotton Sateen - Cream",
    price: 19,
    material: "Cotton",
    color: "Cream",
    image: "/images/cream-cotton-sateen-fabric.jpg",
  },
  {
    id: 11,
    name: "Silk Dupioni - Rose",
    price: 42,
    material: "Silk",
    color: "Rose",
    image: "/images/silk-dupioni-rose-fabric.jpg",
  },
  {
    id: 12,
    name: "Wool Felt - Charcoal",
    price: 32,
    material: "Wool",
    color: "Charcoal",
    image: "/images/charcoal-wool-felt-fabric.jpg",
  },
]

export default function Fabrics() {
  const [sortBy, setSortBy] = useState("newest")
  const [filterMaterial, setFilterMaterial] = useState("all")
  const [filterColor, setFilterColor] = useState("all")
  const [itemsToShow, setItemsToShow] = useState(8)

  const filteredFabrics = allFabrics
    .filter((fabric) => filterMaterial === "all" || fabric.material.toLowerCase() === filterMaterial.toLowerCase())
    .filter((fabric) => filterColor === "all" || fabric.color.toLowerCase().includes(filterColor.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "newest") return b.id - a.id
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      return 0
    })

  const displayedFabrics = filteredFabrics.slice(0, itemsToShow)
  const hasMoreFabrics = itemsToShow < filteredFabrics.length

  const materials = ["Linen", "Cotton", "Silk", "Wool", "Bamboo", "Hemp", "Denim", "Tencel"]
  const colors = ["Natural", "Pink", "Navy", "Olive", "Green", "Sage", "Cream", "Rose", "Charcoal"]

  return (
    <main className="bg-white min-h-screen">
      <SiteHeader variant="user" />

      <section className="px-6 md:px-16 py-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">All Fabrics</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          <div className="relative">
            <select
              value={filterMaterial}
              onChange={(e) => setFilterMaterial(e.target.value)}
              className="appearance-none bg-neutral-100 px-6 py-3 rounded-full text-sm font-medium cursor-pointer pr-10"
            >
              <option value="all">Material</option>
              {materials.map((material) => (
                <option key={material} value={material.toLowerCase()}>
                  {material}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={filterColor}
              onChange={(e) => setFilterColor(e.target.value)}
              className="appearance-none bg-neutral-100 px-6 py-3 rounded-full text-sm font-medium cursor-pointer pr-10"
            >
              <option value="all">Color</option>
              {colors.map((color) => (
                <option key={color} value={color.toLowerCase()}>
                  {color}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-neutral-100 px-6 py-3 rounded-full text-sm font-medium cursor-pointer pr-10"
            >
              <option value="newest">Sort By: Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedFabrics.map((fabric) => (
            <Link key={fabric.id} href={`/pages/user/fabrics/${fabric.id}`} className="group cursor-pointer">
              <div className="bg-neutral-100 rounded-lg overflow-hidden mb-3 aspect-square">
                <img
                  src={fabric.image || "/placeholder.svg"}
                  alt={fabric.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-semibold text-base mb-1">{fabric.name}</h3>
              <p className="text-neutral-600 text-sm">${fabric.price} / yard</p>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreFabrics && (
          <div className="flex justify-center mb-12">
            <button
              onClick={() => setItemsToShow(itemsToShow + 4)}
              className="bg-white border border-neutral-900 hover:bg-neutral-900 hover:text-white transition px-8 py-3 rounded-full font-medium uppercase text-sm"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 px-6 md:px-16 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">FABRIC.</h3>
            <p className="text-sm text-neutral-600">The finest textiles, curated for the modern creator.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link href="/fabrics/new" className="hover:text-neutral-900">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/fabrics/bestsellers" className="hover:text-neutral-900">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-neutral-900">
                  Collections
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link href="/story" className="hover:text-neutral-900">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-neutral-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-neutral-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-600">
          © 2025 Fabric Co. All Rights Reserved.
        </div>
      </footer>
    </main>
  )
}
