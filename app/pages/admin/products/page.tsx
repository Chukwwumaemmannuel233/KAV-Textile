"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, Plus, Pencil } from "lucide-react"
import AdminHeader from "../../../components/admin-header"

interface Product {
  id: string
  name: string
  price: number
  stock: number
  category: string
}

export default function ProductManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showAddModal, setShowAddModal] = useState(false)
  const [products, setProducts] = useState<Product[]>([
    { id: "1", name: "Premium Egyptian Cotton", price: 25.0, stock: 150, category: "cotton" },
    { id: "2", name: "Pure Mulberry Silk", price: 75.0, stock: 80, category: "silk" },
    { id: "3", name: "Belgian Linen Fabric", price: 45.0, stock: 120, category: "linen" },
  ])

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
      <AdminHeader />

      <div className="px-4 md:px-8 py-6 md:py-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/pages/admin/dashboard"
            className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center hover:bg-neutral-300 transition"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Product Management</h1>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input
              type="text"
              placeholder="Search by product name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 bg-white"
          >
            <option value="all">All Categories</option>
            <option value="cotton">Cotton</option>
            <option value="silk">Silk</option>
            <option value="linen">Linen</option>
            <option value="wool">Wool</option>
          </select>
        </div>

        {/* Product Table */}
        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
          {/* Table Header - Hidden on mobile */}
          <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-4 bg-neutral-100 border-b border-neutral-200 font-semibold">
            <div>Product Name</div>
            <div>Price</div>
            <div>Stock</div>
            <div>Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-neutral-200">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-4 md:px-6 py-4 hover:bg-neutral-50 transition"
              >
                <div className="font-medium">
                  <span className="md:hidden text-xs text-neutral-500 block mb-1">Product Name</span>
                  {product.name}
                </div>
                <div>
                  <span className="md:hidden text-xs text-neutral-500 block mb-1">Price</span>$
                  {product.price.toFixed(2)}/m
                </div>
                <div>
                  <span className="md:hidden text-xs text-neutral-500 block mb-1">Stock</span>
                  {product.stock} units
                </div>
                <div>
                  <span className="md:hidden text-xs text-neutral-500 block mb-1">Actions</span>
                  <button className="flex items-center gap-2 text-sm hover:text-neutral-600 transition">
                    <Pencil size={16} />
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No results message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-neutral-500">No products found matching your search.</div>
        )}
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setShowAddModal(true)}
        className="fixed bottom-24 md:bottom-8 right-8 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-800 transition z-40"
      >
        <Plus size={24} />
      </button>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setShowAddModal(false)
              }}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Product Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Price (per meter)</label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Stock (units)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400">
                    <option value="cotton">Cotton</option>
                    <option value="silk">Silk</option>
                    <option value="linen">Linen</option>
                    <option value="wool">Wool</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-neutral-800 transition"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
