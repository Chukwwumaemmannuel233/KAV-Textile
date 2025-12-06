"use client"

import { useState } from "react"
import SiteHeader from "../../../components/site-header"

const categories = ["All", "Interviews", "News", "Inspiration", "Material Guides"]

const articles = [
  {
    id: 1,
    category: "Inspiration",
    title: "The Beauty of Natural Fibers",
    description: "Explore the unique qualities of linen, cotton, and wool in modern design.",
    image: "/images/fabric-weaving-process-hands.jpg",
  },
  {
    id: 2,
    category: "Interviews",
    title: "An Interview with Designer Elara Vance",
    description: "We sit down with Elara to discuss her inspiration and creative journey.",
    image: "/images/designer-woman-working.jpg",
  },
  {
    id: 3,
    category: "News",
    title: "Behind the Weave: Our Process",
    description: "Discover the craftsmanship that goes into every yard of our signature fabrics.",
    image: "/images/fabric-weaving-process-hands.jpg",
  },
  {
    id: 4,
    category: "Inspiration",
    title: "Styling with Neutrals: A Guide",
    description: "Timeless tips for creating serene and elegant spaces with a neutral palette.",
    image: "/images/minimalist-interior-neutral-palette.jpg",
  },
  {
    id: 5,
    category: "News",
    title: "Announcing Our New Spring Collection",
    description: "Fresh textures and colors have arrived, perfect for your next creative project.",
    image: "/images/fabric-colors-spring-collection.jpg",
  },
  {
    id: 6,
    category: "Inspiration",
    title: "The Art of Draping and Form",
    description: "Learn how the right fabric can transform a silhouette and define a space.",
    image: "/images/fabric-draping-form-art.jpg",
  },
  {
    id: 7,
    category: "Interviews",
    title: "Designer Spotlight: Sustainable Practices",
    description: "A conversation with eco-conscious designers reshaping the industry.",
    image: "/images/designer-woman-working.jpg",
  },
  {
    id: 8,
    category: "Material Guides",
    title: "Fabric Care 101: Extending Your Wardrobe",
    description: "Essential tips for maintaining your favorite textile pieces.",
    image: "/images/natural-fibers-linen-cotton.jpg",
  },
  {
    id: 9,
    category: "News",
    title: "New Partnership Announcement",
    description: "Exciting collaboration bringing innovative fabrics to our collection.",
    image: "/images/fabric-colors-spring-collection.jpg",
  },
]

export default function Journal() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [displayCount, setDisplayCount] = useState(6)

  const filteredArticles =
    selectedCategory === "All" ? articles : articles.filter((article) => article.category === selectedCategory)

  const displayedArticles = filteredArticles.slice(0, displayCount)

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 3)
  }

  return (
    <main className="bg-white min-h-screen">
         <SiteHeader />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">The Journal</h1>
        <p className="text-lg text-neutral-600 mb-12">
          Stories, interviews, and inspiration from the world of textiles.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setDisplayCount(6)
              }}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === category ? "bg-black text-white" : "bg-neutral-200 text-black hover:bg-neutral-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article) => (
            <article key={article.id} className="cursor-pointer group">
              {/* Article Image */}
              <div className="mb-6 overflow-hidden rounded-2xl h-64 md:h-72">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Article Content */}
              <div className="space-y-3">
                <p className="text-sm font-bold text-neutral-600 tracking-wide">{article.category}</p>
                <h3 className="text-xl md:text-2xl font-bold leading-tight text-balance">{article.title}</h3>
                <p className="text-base text-neutral-600 leading-relaxed">{article.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {displayedArticles.length < filteredArticles.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-neutral-300 text-black font-medium rounded-full hover:bg-neutral-400 transition"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
