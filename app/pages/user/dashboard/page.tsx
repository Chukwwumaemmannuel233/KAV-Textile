"use client"

import { useState } from "react"
import Link from "next/link"
import SiteHeader from "../../../components/site-header"
import { Heart } from "lucide-react"

interface Product {
  id: number
  name: string
  color: string
  price: number
  image: string
}

interface RecommendedProduct {
  id: number
  title: string
  description: string
  image: string
}

interface JournalPost {
  id: number
  category: string
  title: string
  image: string
}

export default function Dashboard() {
  const newArrivals: Product[] = [
    {
      id: 1,
      name: "Breeze Linen Shirt",
      color: "Oat",
      price: 110,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCsYL-WL36HTht-0VXZfdTDhg-zHktQ6pgUMRxXO2M9_0iGcnvn-c9Rdnd7aYvgScbPkqW5AyHMWiqJgk_hiRBYBi45-IUXCgrFtLRXRNMnd-hLAPlm5VBi_e_VS1uy1O_7s5CF91sKgu4SRf-Ttjxcpn5IncFYY6uMKn_tnXqNsAQ1OtpqpKoiFFfdvaWhv3aHDL3WJSyF_-bjOoPt7ZmTPEoj9d50iTFXnh_mldAff9I56qihAYsCTZNQAiX7y2Eny_0swwzsLhZk",
    },
    {
      id: 2,
      name: "City Trousers",
      color: "Charcoal",
      price: 145,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDZdLTKpNdAIincDELVADNfTI5FmxqsbYAQnvBt0mb9fqqL9d4Eh98d65EX_J2HVuSYsqNR42Lcz5PFZLilKVVVCN-Fp-J_4VWKNphFh7svgpMvtMnmBoKpgHraqGpNJWMMyrHnwzRtxD8ucOJPGRFIxCijYluvnxe-Qpx0CuRRBbfbuQI5kF4rHKuRMYKw_cL5Os74lgGNfnnqu7egzxaUPmGwqUzSFvCne3diCLTw1aiBdlWaK-SWCkQOUW_lKGv8vyVXuIYj-HY3",
    },
    {
      id: 3,
      name: "Merino Crewneck",
      color: "Dusty Rose",
      price: 160,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAqLaQiZujbgcEcrjMNvUr8YIFMMKZ3-Pdu0KAGGIxzzPL-OVzCTwB-whZRGyE0_eCJTkqMuiHUdRQ5bsvQFXBPFXR4D41i7UzHop_xO2ZkjY9q_v0YobLav7DTGnSS8lI9rAVOcIDsLcouKIpBGVHvj9D2IpnumkjP3GTe1jSrthr4J8fp0zOEyUkeUGMUcaPtgmF_qAo98mE3APOptFwgP9yrJAsQ6M4G7Z3u264ZpoUtK73zg5jPXe9WLaCGS_6rMX_uzXy7ws90",
    },
    {
      id: 4,
      name: "Classic Trench",
      color: "Navy",
      price: 250,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB0WtMYyK6O6yFRCtHnG7ZCgftY4QeJw3_DNMmA-W6TZAcdtnwo4Cd6J2qhSPAA-v_WaaeDNAe6_-UhHtpxLgcr0BhKTbMuSLmU2-grx9nrsdtI3IC0tGJfFGqdnI4K46Ew_SpoP0sSqv1W_rN8eCSDFJTeXpJT1tK_wQBE_kh5JqBdAWOWNcL3kCIwYFzvbJ6iOojwPlr58jausx8oWg_LJajxQCmNjOs5BwwWPh2GpWMv2SJA3PBnnwgM3VCvtI4Vb26EvjYD7857",
    },
  ]

  const recommendedProducts: RecommendedProduct[] = [
    {
      id: 1,
      title: "The Classic Denim Jacket",
      description: "Because you loved our City Trousers",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB0WtMYyK6O6yFRCtHnG7ZCgftY4QeJw3_DNMmA-W6TZAcdtnwo4Cd6J2qhSPAA-v_WaaeDNAe6_-UhHtpxLgcr0BhKTbMuSLmU2-grx9nrsdtI3IC0tGJfFGqdnI4K46Ew_SpoP0sSqv1W_rN8eCSDFJTeXpJT1tK_wQBE_kh5JqBdAWOWNcL3kCIwYFzvbJ6iOojwPlr58jausx8oWg_LJajxQCmNjOs5BwwWPh2GpWMv2SJA3PBnnwgM3VCvtI4Vb26EvjYD7857",
    },
    {
      id: 2,
      title: "Washed Silk Blouse",
      description: "A perfect match for linen",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBFH29jb3fV2Uoql9tQZTeojyHoikzbS_StjvM-C38y5418j2AnJMrHqqyKvH5l3rzV-kctycdgCmlYDu-Xkbl5x-6jQw6AJnGvXsNLlEQUJwVYOQ-meWiEAB07xSR8J3doVq8czG2G9WLp_AyN0SOc01O39Jz2kOQnNWrdyNd5BOS86DESP8BycNKO5FQ-C6TUbKCcHc-QxLfBF7BfHOPQUAlSXdrLhdbNZUYcswWcjG2KaUlQ1SZGveGO01ha0P5PA6-o5HVkyblR",
    },
  ]

  const journalPosts: JournalPost[] = [
    {
      id: 1,
      category: "Style Guide",
      title: "The Art of Layering: A Guide to Transitional Weather",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDbXxUfuBw4DpFY0vGuflMCgYsNTy6wzjTv2r630c48fAeUpwfhi9TXBkY8xH8-_G2ZUd0SfnQswmncbFZu6yymOkk1uTwf0vrC4mHzR0gIrV5v9lFnzIIlVuoBxr3j3aYG-Fn9mEKjxVo9w46IQsNpMwtBa_Zpb32PjxxV1yAAHiPA4frW47ZvfVJ6G1WaJoCbIY2JdK8RWyYxGCHSepRl0ydt2cEFYP3Yu6wBJPl8q8MzRFfvfRxRcjw-FRAiV6ct31lczAORaybD",
    },
    {
      id: 2,
      category: "Fabric Care",
      title: "How to Care For Your Merino Wool Pieces",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCsYL-WL36HTht-0VXZfdTDhg-zHktQ6pgUMRxXO2M9_0iGcnvn-c9Rdnd7aYvgScbPkqW5AyHMWiqJgk_hiRBYBi45-IUXCgrFtLRXRNMnd-hLAPlm5VBi_e_VS1uy1O_7s5CF91sKgu4SRf-Ttjxcpn5IncFYY6uMKn_tnXqNsAQ1OtpqpKoiFFfdvaWhv3aHDL3WJSyF_-bjOoPt7ZmTPEoj9d50iTFXnh_mldAff9I56qihAYsCTZNQAiX7y2Eny_0swwzsLhZk",
    },
  ]

  const [wishlist, setWishlist] = useState<Set<number>>(new Set())

  const toggleWishlist = (id: number) => {
    const newWishlist = new Set(wishlist)
    if (newWishlist.has(id)) {
      newWishlist.delete(id)
    } else {
      newWishlist.add(id)
    }
    setWishlist(newWishlist)
  }

  return (
    <div className="bg-white min-h-screen">
      <SiteHeader variant="user" />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
              Welcome Back, Maria
            </h1>
            <p className="mt-3 text-base font-normal text-neutral-600 sm:text-lg">
              Your curated space for inspiration and new arrivals.
            </p>
          </div>

          <div className="space-y-16">
            {/* New Arrivals Section */}
            <section>
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl">New Arrivals</h2>
                <Link href="/pages/user/fabrics" className="text-sm font-medium text-black/80 hover:underline">
                  View All
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
                {newArrivals.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-neutral-200 relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-neutral-100"
                      >
                        <Heart
                          size={20}
                          className={wishlist.has(product.id) ? "fill-red-500 text-red-500" : "text-neutral-600"}
                        />
                      </button>
                    </div>
                    <div className="mt-2 text-sm">
                      <h3 className="font-medium text-black">{product.name}</h3>
                      <p className="text-neutral-600">{product.color}</p>
                      <p className="mt-1 font-medium text-black/90">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Lookbook Section */}
            <section>
              <Link href="#" className="group block">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoUIMnQ_WionhAFzO8tIVSUxu56Mmt-QeAgNfLnbOHzntpYfrnnb6gv1BCvdjkPCJ8lZFx0PRFAXtlfN9nR3DUxEuHC_7I9BUa9oljFxXxh-HAvO76q0RCxPcGPeRTKs1NoD7D4QG47cO24sSzWugAiIdn3kddg_I3GPOW-GRhOjRsShF7-3tos3S_1GPKv-FKX5HtYS6o23LvQi5HwAyRSgvJcD9i8x-6NLxBQWO1xDQTAgLL5xzn4hZe8xLzN8Bk6CZsd5STh84t"
                    alt="Featured Lookbook"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8">
                    <p className="text-sm font-medium uppercase tracking-widest">Featured Lookbook</p>
                    <h3 className="mt-1 text-3xl font-bold sm:text-4xl">Autumn Textures</h3>
                  </div>
                </div>
              </Link>
            </section>

            {/* Just For You Section */}
            <section>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                <div className="md:col-span-1">
                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl">
                    Just For You
                  </h2>
                  <p className="mt-2 text-neutral-600">Picks based on your recent activity.</p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-2">
                  {recommendedProducts.map((product) => (
                    <Link
                      key={product.id}
                      href="#"
                      className="group flex items-center gap-4 rounded-lg bg-neutral-100/50 p-4 hover:bg-neutral-100 transition"
                    >
                      <div className="aspect-square w-20 flex-shrink-0 overflow-hidden rounded-md bg-neutral-200">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-medium leading-tight text-black group-hover:underline">
                          {product.title}
                        </h3>
                        <p className="text-sm text-neutral-600">{product.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* From the Journal Section */}
            <section>
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl">
                  From the Journal
                </h2>
                <Link href="/pages/user/journal" className="text-sm font-medium text-black/80 hover:underline">
                  Read All
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {journalPosts.map((post) => (
                  <Link key={post.id} href="#" className="group">
                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-neutral-200">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="text-sm uppercase tracking-wider text-neutral-600">{post.category}</p>
                      <h3 className="mt-1 text-lg font-medium leading-tight text-black group-hover:underline">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
