"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import SiteHeader from "../../../components/site-header"

interface Order {
  id: string
  date: string
  total: number
  status: "delivered" | "shipped" | "processing" | "canceled"
  action: string
  actionLabel: string
}

const orders: Order[] = [
  {
    id: "#123456789",
    date: "October 26, 2023",
    total: 124.5,
    status: "delivered",
    actionLabel: "View Details",
    action: "view",
  },
  {
    id: "#123456788",
    date: "October 22, 2023",
    total: 88.0,
    status: "shipped",
    actionLabel: "Track Order",
    action: "track",
  },
  {
    id: "#123456787",
    date: "October 15, 2023",
    total: 215.75,
    status: "processing",
    actionLabel: "View Details",
    action: "view",
  },
  {
    id: "#123456786",
    date: "September 30, 2023",
    total: 55.2,
    status: "canceled",
    actionLabel: "View Details",
    action: "view",
  },
]

const statusConfig = {
  delivered: { label: "Delivered", color: "bg-green-100 text-green-700" },
  shipped: { label: "Shipped", color: "bg-blue-100 text-blue-700" },
  processing: { label: "Processing", color: "bg-yellow-100 text-yellow-700" },
  canceled: { label: "Canceled", color: "bg-red-100 text-red-700" },
}

export default function OrderHistory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState<"all" | "shipped" | "delivered" | "canceled">("all")

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFilter = filter === "all" || order.status === filter
      return matchesSearch && matchesFilter
    })
  }, [searchTerm, filter])

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="user" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 pb-24">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8">ORDER HISTORY</h1>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-3 text-neutral-500" size={20} />
            <input
              type="text"
              placeholder="Search by Order ID or Product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 flex-wrap md:flex-nowrap">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === "all" ? "bg-neutral-400 text-white" : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("shipped")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === "shipped"
                  ? "bg-neutral-400 text-white"
                  : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
              }`}
            >
              Shipped
            </button>
            <button
              onClick={() => setFilter("delivered")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === "delivered"
                  ? "bg-neutral-400 text-white"
                  : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
              }`}
            >
              Delivered
            </button>
            <button
              onClick={() => setFilter("canceled")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === "canceled"
                  ? "bg-neutral-400 text-white"
                  : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
              }`}
            >
              Canceled
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-neutral-100 rounded-lg overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 font-semibold text-neutral-600 text-sm uppercase tracking-wide">
            <div className="col-span-3">Order ID</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Total</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-3">Action</div>
          </div>

          <div className="space-y-0 md:space-y-0">
            {filteredOrders.map((order, index) => (
              <div
                key={order.id}
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 md:py-6 items-center ${
                  index !== filteredOrders.length - 1 ? "border-b-2 border-neutral-300" : ""
                }`}
              >
                {/* Mobile View */}
                <div className="md:hidden space-y-2">
                  <div className="font-semibold">{order.id}</div>
                  <div className="text-sm text-neutral-600">{order.date}</div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">${order.total.toFixed(2)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig[order.status].color}`}>
                      {statusConfig[order.status].label}
                    </span>
                  </div>
                  <button className="text-neutral-900 font-semibold hover:underline text-sm">
                    {order.actionLabel}
                  </button>
                </div>

                {/* Desktop View */}
                <div className="hidden md:block col-span-3 font-semibold">{order.id}</div>
                <div className="hidden md:block col-span-2 text-neutral-700">{order.date}</div>
                <div className="hidden md:block col-span-2 font-semibold">${order.total.toFixed(2)}</div>
                <div className="hidden md:block col-span-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusConfig[order.status].color}`}>
                    {statusConfig[order.status].label}
                  </span>
                </div>
                <div className="hidden md:block col-span-3">
                  <button className="text-neutral-900 font-semibold hover:underline">{order.actionLabel}</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600">No orders found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
