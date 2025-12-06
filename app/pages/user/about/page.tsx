"use client"
import SiteHeader from "../../../components/site-header"
import Link from "next/link"
import { Shield, Hammer, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <SiteHeader variant="user" />

      {/* Hero Section */}
      <section className="w-full flex items-center justify-center px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-5xl w-full bg-neutral-500 rounded-lg py-24 md:py-32 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Woven with Purpose</h1>
          <p className="text-lg text-neutral-100">
            Discover the story behind our threads, crafted with passion and integrity.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-neutral-700 mb-4 leading-relaxed">
              Founded on a passion for authentic materials, our journey began with a commitment to quality and
              traditional techniques. We traverse the globe to source the finest natural fibers, connecting the hands of
              our artisans with discerning creators like you.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Our story is woven with sustainability, ensuring timeless beauty of handcrafted fabrics.
            </p>
          </div>
          {/* Image */}
          <div className="w-full h-96 bg-neutral-300 rounded-lg overflow-hidden">
            <img
              src="/images/thread-and-yarn-shelves.jpg"
              alt="Thread and yarn shelves"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="px-6 md:px-16 py-16 md:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Value 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Shield size={48} className="text-neutral-800" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-neutral-600">
                We source natural, eco-friendly materials and fibers to protect our shared planet.
              </p>
            </div>
            {/* Value 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Hammer size={48} className="text-neutral-800" />
              </div>
              <h3 className="text-xl font-bold mb-3">Artisanal Craft</h3>
              <p className="text-neutral-600">We honor traditional techniques, preserving heritage in every thread.</p>
            </div>
            {/* Value 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Star size={48} className="text-neutral-800" />
              </div>
              <h3 className="text-xl font-bold mb-3">Uncompromising Quality</h3>
              <p className="text-neutral-600">
                Our commitment ensures the most durable, reliable, and exquisite fabrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Jane Doe */}
      <section className="px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="w-full h-96 bg-neutral-300 rounded-lg overflow-hidden">
            <img src="/images/jane-doe-ceo-portrait.jpg" alt="Jane Doe CEO" className="w-full h-full object-cover" />
          </div>
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold mb-2">Jane Doe</h3>
            <p className="text-neutral-600 font-medium mb-6">CEO & Founder</p>
            <p className="text-neutral-700 leading-relaxed">
              With a lifelong passion for textiles, Jane founded the company to bring sustainable, high-quality fabrics
              to the forefront of design. Her vision is to connect ethical sourcing with uncompromising beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section - John Smith */}
      <section className="px-6 md:px-16 py-16 md:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold mb-2">John Smith</h3>
            <p className="text-neutral-600 font-medium mb-6">COO & Head of Operations</p>
            <p className="text-neutral-700 leading-relaxed">
              John ensures that our operations align with our core values, from sourcing ethical materials to perfecting
              our supply chain. His dedication to transparency and quality drives excellence throughout our
              organization.
            </p>
          </div>
          {/* Image */}
          <div className="w-full h-96 bg-neutral-300 rounded-lg overflow-hidden">
            <img src="/images/john-smith-coo-portrait.jpg" alt="John Smith COO" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-neutral-700 leading-relaxed mb-10">
            Our mission is to create textiles that not only beautify spaces but also tell a story of conscious
            craftsmanship. We are dedicated to quality, heritage, and sustainability, while respecting the planet and
            the hands that craft our fabrics.
          </p>
          <Link href="/pages/user/fabrics">
            <button className="bg-black text-white px-8 py-3 font-medium hover:bg-neutral-900 transition">
              Explore Our Collection
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 px-6 md:px-16 py-8 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-6">
          <div className="flex gap-6 text-sm text-neutral-600">
            <a href="/terms" className="hover:text-black transition">
              Terms of Service
            </a>
            <a href="/privacy" className="hover:text-black transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition">
              Contact Us
            </a>
          </div>
          <p className="text-sm text-neutral-600">© 2025 TEXTILE. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
