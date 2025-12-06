"use client"

import { use, useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const allProducts: Record<number, any> = {
  1: {
    id: 1,
    name: "BELGIAN LINEN",
    category: "Linen",
    price: 25.0,
    description:
      "Woven from the finest flax, this fabric offers unparalleled softness, durability, and a beautiful, natural drape that softens with every wash.",
    specifications: {
      width: "54 inches (137 cm)",
      weight: "5.3 oz/sq yd (180 GSM)",
      composition: "100% Belgian Flax Linen",
      origin: "Woven in Belgium",
    },
    care: "Machine wash cold with similar colors. Tumble dry low or line dry. Iron on medium heat if desired.",
    shipping: "Orders ship within 5-7 business days. Free shipping on orders over $100. Easy 30-day returns.",
    images: [
      "/belgian-linen-fabric.jpg",
      "/natural-fibers-linen-cotton.jpg",
      "/luxury-fabric-textile-close-up-neutral-beige-woven.jpg",
      "/fabric-weaving-texture.jpg",
    ],
  },
  2: {
    id: 2,
    name: "ORGANIC BRUSHED COTTON",
    category: "Cotton",
    price: 18.0,
    description: "Soft and breathable organic cotton with a brushed finish for ultimate comfort and sustainability.",
    specifications: {
      width: "60 inches (152 cm)",
      weight: "6.5 oz/sq yd (220 GSM)",
      composition: "100% Organic Cotton",
      origin: "Grown and woven in India",
    },
    care: "Wash in warm water with similar colors. Tumble dry medium. Can be ironed on medium heat.",
    shipping: "Orders ship within 5-7 business days. Free shipping on orders over $100. Easy 30-day returns.",
    images: [
      "/organic-brushed-cotton-fabric.jpg",
      "/natural-fibers-linen-cotton.jpg",
      "/luxury-fabric-textile-close-up-neutral-beige-woven.jpg",
      "/fabric-weaving-texture.jpg",
    ],
  },
  3: {
    id: 3,
    name: "SILK CHARMEUSE",
    category: "Silk",
    price: 45.0,
    description: "Luxurious silk charmeuse with a smooth satin finish, perfect for draping and elegant designs.",
    specifications: {
      width: "52 inches (132 cm)",
      weight: "12 oz/sq yd (400 GSM)",
      composition: "100% Pure Mulberry Silk",
      origin: "Woven in Lyon, France",
    },
    care: "Dry clean recommended. Hand wash cold if needed. Never tumble dry.",
    shipping: "Orders ship within 5-7 business days. Free shipping on orders over $100. Easy 30-day returns.",
    images: [
      "/silk-charmeuse-fabric.jpg",
      "/natural-fibers-linen-cotton.jpg",
      "/luxury-fabric-textile-close-up-neutral-beige-woven.jpg",
      "/fabric-weaving-texture.jpg",
    ],
  },
  4: {
    id: 4,
    name: "RAW DENIM",
    category: "Denim",
    price: 22.0,
    description: "Classic raw denim with rich indigo color that develops unique fading patterns with wear.",
    specifications: {
      width: "58 inches (147 cm)",
      weight: "13 oz/sq yd (440 GSM)",
      composition: "100% Cotton Denim",
      origin: "Woven in Japan",
    },
    care: "Wash rarely to maintain color. When washing, use cold water and turn inside out. Air dry preferred.",
    shipping: "Orders ship within 5-7 business days. Free shipping on orders over $100. Easy 30-day returns.",
    images: [
      "/raw-denim-fabric.jpg",
      "/natural-fibers-linen-cotton.jpg",
      "/luxury-fabric-textile-close-up-neutral-beige-woven.jpg",
      "/fabric-weaving-texture.jpg",
    ],
  },
  5: {
    id: 5,
    name: "MERINO WOOL JERSEY",
    category: "Wool",
    price: 30.0,
    description: "Fine merino wool jersey blend offering warmth, breathability, and natural temperature regulation.",
    specifications: {
      width: "56 inches (142 cm)",
      weight: "8.5 oz/sq yd (290 GSM)",
      composition: "85% Merino Wool, 15% Nylon",
      origin: "Spun in New Zealand",
    },
    care: "Wash in cold water with wool-specific detergent. Lay flat to dry. Do not tumble dry.",
    shipping: "Orders ship within 5-7 business days. Free shipping on orders over $100. Easy 30-day returns.",
    images: [
      "/merino-wool-jersey-fabric.jpg",
      "/natural-fibers-linen-cotton.jpg",
      "/luxury-fabric-textile-close-up-neutral-beige-woven.jpg",
      "/fabric-weaving-texture.jpg",
    ],
  },
  6: {
    id: 6,
    name: "TENCEL TWILL",
    category: "Tencel",
    price: 28.0,
    description: "Eco-friendly Tencel fabric with a twill weave, offering durability and a smooth drape.",
    specifications: {
      width: "60 inches (152 cm)",
      weight: "7 oz/sq yd (237 GSM)",
      composition: "100% Lyocell Tencel",
      origin: "Woven in Austria",
    },
    care: "Machine wash warm with similar colors. Tumble dry on low. Iron on low to medium heat if needed.",
    shipping: "Orders ship within 5-7 business days. Free shipping on orders over $100. Easy 30-day returns.",
    images: [
      "/tencel-twill-fabric.jpg",
      "/natural-fibers-linen-cotton.jpg",
      "/luxury-fabric-textile-close-up-neutral-beige-woven.jpg",
      "/fabric-weaving-texture.jpg",
    ],
  },
  7: {
    id: 7,
    name: "HEMP CANVAS",
    category: "Hemp",
    price: 20.0,
    description: "Sustainable hemp canvas with natural texture and durability. Perfect for heavy-duty applications.",
    specifications: {
      width: "54 inches (137 cm)",
      weight: "11 oz/sq yd (372 GSM)",
      composition: "100% Hemp",
      origin: "Woven in France",
    },
    care: "Machine wash cold. Tumble dry low or air dry. Canvas will soften with washing.",
    shipping: "Orders ship within 5-7 business days. Free shipping on orders over $100. Easy 30-day returns.",
    images: [
      "/hemp-canvas-fabric.jpg",
      "/natural-fibers-linen-cotton.jpg",
      "/luxury-fabric-textile-close-up-neutral-beige-woven.jpg",
      "/fabric-weaving-texture.jpg",
    ],
  },
  8: {
    id: 8,
    name: "BAMBOO VELOUR",
    category: "Bamboo",
    price: 26.0,
    description: "Luxurious bamboo velour with soft pile surface, incredibly smooth and gentle on skin.",
    specifications: {
      width: "58 inches (147 cm)",
      weight: "10 oz/sq yd (338 GSM)",
      composition: "85% Bamboo Viscose, 15% Spandex",
      origin: "Processed in China",
    },
    care: "Wash in cold water with gentle detergent. Lay flat to dry to maintain pile quality.",
    shipping: "Orders ship within 5-7 business days. Free shipping on orders over $100. Easy 30-day returns.",
    images: [
      "/bamboo-velour-fabric.jpg",
      "/natural-fibers-linen-cotton.jpg",
      "/luxury-fabric-textile-close-up-neutral-beige-woven.jpg",
      "/fabric-weaving-texture.jpg",
    ],
  },
  9: {
    id: 9,
    name: "LINEN BLEND - SAGE",
    category: "Linen",
    price: 24.0,
    description: "Sophisticated sage-colored linen blend with added durability and reduced wrinkle appearance.",
    specifications: {
      width: "55 inches (140 cm)",
      weight: "6 oz/sq yd (203 GSM)",
      composition: "70% Linen, 30% Cotton",
      origin: "Woven in Ireland",
    },
    care: "Machine wash cold. Tumble dry low or air dry. Light ironing recommended.",
    shipping: "Orders ship within 5-7 business days. Free shipping on orders over $100. Easy 30-day returns.",
    images: [
      "/sage-linen-blend-fabric.jpg",
      "/natural-fibers-linen-cotton.jpg",
      "/luxury-fabric-textile-close-up-neutral-beige-woven.jpg",
      "/fabric-weaving-texture.jpg",
    ],
  },
  10: {
    id: 10,
    name: "COTTON SATEEN - CREAM",
    category: "Cotton",
    price: 19.0,
    description: "Elegant cream cotton sateen with a lustrous finish, ideal for formal applications.",
    specifications: {
      width: "60 inches (152 cm)",
      weight: "7.5 oz/sq yd (254 GSM)",
      composition: "100% Cotton Sateen",
      origin: "Woven in Italy",
    },
    care: "Machine wash warm. Tumble dry medium. Press with medium heat while slightly damp for best finish.",
    shipping: "Orders ship within 5-7 business days. Free shipping on orders over $100. Easy 30-day returns.",
    images: [
      "/cream-cotton-sateen-fabric.jpg",
      "/natural-fibers-linen-cotton.jpg",
      "/luxury-fabric-textile-close-up-neutral-beige-woven.jpg",
      "/fabric-weaving-texture.jpg",
    ],
  },
  11: {
    id: 11,
    name: "SILK DUPIONI - ROSE",
    category: "Silk",
    price: 42.0,
    description: "Beautiful rose-hued silk dupioni with subtle texture and natural slubs for sophisticated elegance.",
    specifications: {
      width: "51 inches (130 cm)",
      weight: "14 oz/sq yd (475 GSM)",
      composition: "100% Pure Silk Dupioni",
      origin: "Hand-woven in India",
    },
    care: "Dry clean recommended. Protect from direct sunlight to prevent color fading.",
    shipping: "Orders ship within 5-7 business days. Free shipping on orders over $100. Easy 30-day returns.",
    images: [
      "/silk-dupioni-rose-fabric.jpg",
      "/natural-fibers-linen-cotton.jpg",
      "/luxury-fabric-textile-close-up-neutral-beige-woven.jpg",
      "/fabric-weaving-texture.jpg",
    ],
  },
  12: {
    id: 12,
    name: "WOOL FELT - CHARCOAL",
    category: "Wool",
    price: 32.0,
    description: "Dense charcoal wool felt with excellent structural integrity and natural water resistance.",
    specifications: {
      width: "54 inches (137 cm)",
      weight: "16 oz/sq yd (542 GSM)",
      composition: "100% Wool Felt",
      origin: "Milled in Germany",
    },
    care: "Spot clean recommended. Dry clean for full cleaning. Do not machine wash.",
    shipping: "Orders ship within 5-7 business days. Free shipping on orders over $100. Easy 30-day returns.",
    images: [
      "/charcoal-wool-felt-fabric.jpg",
      "/natural-fibers-linen-cotton.jpg",
      "/luxury-fabric-textile-close-up-neutral-beige-woven.jpg",
      "/fabric-weaving-texture.jpg",
    ],
  },
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const [quantity, setQuantity] = useState(1)
  const [expandedSections, setExpandedSections] = useState<string[]>(["specifications"])

  const productId = Number.parseInt(id)
  const product = allProducts[productId]

  if (!product) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/pages/user/fabrics" className="text-blue-600 hover:underline">
            Back to Fabrics
          </Link>
        </div>
      </main>
    )
  }

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} yard(s) of ${product.name} to cart`)
  }

  return (
    <main className="bg-white min-h-screen">
      <div className="px-6 md:px-16 py-6 border-b border-neutral-200">
        <nav className="text-sm text-neutral-600">
          <Link href="/" className="hover:text-neutral-900">
            Home
          </Link>
          {" / "}
          <Link href="/pages/user/fabrics" className="hover:text-neutral-900">
            Fabrics
          </Link>
          {" / "}
          <span className="text-neutral-900">{product.category}</span>
        </nav>
      </div>

      <section className="px-6 md:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-neutral-100 rounded-2xl p-8 mb-6 flex items-center justify-center min-h-96">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  className="border-2 border-neutral-300 rounded-lg overflow-hidden hover:border-neutral-900 transition"
                >
                  <img src={img || "/placeholder.svg"} alt={`View ${idx + 1}`} className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-6 text-neutral-900">${product.price.toFixed(2)} / yard</p>
            <p className="text-neutral-700 leading-relaxed mb-8">{product.description}</p>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-4">Quantity:</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-neutral-300 rounded hover:bg-neutral-100 transition"
                >
                  −
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-neutral-300 rounded hover:bg-neutral-100 transition"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-4 rounded-full font-semibold text-lg hover:bg-neutral-900 transition mb-8"
            >
              ADD TO CART
            </button>

            <div className="border-t border-neutral-200 pt-8 space-y-6">
              <div>
                <button
                  onClick={() => toggleSection("specifications")}
                  className="w-full flex items-center justify-between py-4 font-semibold text-lg hover:opacity-70 transition"
                >
                  Specifications
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${expandedSections.includes("specifications") ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedSections.includes("specifications") && (
                  <div className="pb-6 space-y-3 text-neutral-700">
                    <div className="flex justify-between">
                      <span>Width:</span>
                      <span>{product.specifications.width}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weight:</span>
                      <span>{product.specifications.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Composition:</span>
                      <span>{product.specifications.composition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Origin:</span>
                      <span>{product.specifications.origin}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-neutral-200">
                <button
                  onClick={() => toggleSection("care")}
                  className="w-full flex items-center justify-between py-4 font-semibold text-lg hover:opacity-70 transition"
                >
                  Care Instructions
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${expandedSections.includes("care") ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedSections.includes("care") && (
                  <div className="pb-6 text-neutral-700 leading-relaxed">{product.care}</div>
                )}
              </div>

              <div className="border-t border-neutral-200">
                <button
                  onClick={() => toggleSection("shipping")}
                  className="w-full flex items-center justify-between py-4 font-semibold text-lg hover:opacity-70 transition"
                >
                  Shipping & Returns
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${expandedSections.includes("shipping") ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedSections.includes("shipping") && (
                  <div className="pb-6 text-neutral-700 leading-relaxed">{product.shipping}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-neutral-100">
        <div className="px-6 md:px-16 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">FABRIC.</h3>
              <p className="text-sm text-neutral-700">The finest textiles, curated for the modern creator.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>
                  <Link href="/pages/user/fabrics" className="hover:text-neutral-900">
                    All Fabrics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-neutral-900">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-neutral-900">
                    Collections
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>
                  <Link href="/story" className="hover:text-neutral-900">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-neutral-900">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="faq" className="hover:text-neutral-900">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>
                  <Link href="#" className="hover:text-neutral-900">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-neutral-900">
                    Pinterest
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
            <p>© 2025 Textile Co. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-neutral-900">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-neutral-900">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
