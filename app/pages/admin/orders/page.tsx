"use client"

import { useState } from "react"
import AdminHeader from "../../../components/admin-header"
import { Plus, X } from "lucide-react"
import Link from "next/link"

export default function OrdersManagement() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [showNotification, setShowNotification] = useState(true)

  const orders = [
    { id: "#ORD1001", customer: "Eleanor Vance", amount: "$145.50", status: "Delivered" },
    { id: "#ORD1002", customer: "Marcus Holloway", amount: "$210.00", status: "Processing" },
    { id: "#ORD1003", customer: "Clara Oswald", amount: "$88.75", status: "Pending" },
    { id: "#ORD1004", customer: "Jonas Khanwald", amount: "$320.10", status: "Delivered" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-500 text-white"
      case "Processing":
        return "bg-blue-500 text-white"
      case "Pending":
        return "bg-orange-500 text-white"
      default:
        return "bg-neutral-500 text-white"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <AdminHeader />

      <main className="px-6 md:px-12 lg:px-16 py-8 pb-24 md:pb-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Orders Management</h1>
            <p className="text-neutral-600">View, filter, and update customer orders.</p>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 transition flex items-center gap-2 w-full md:w-auto justify-center">
            <Plus size={20} />
            New Order
          </button>
        </div>

        {/* Success Notification */}
        {showNotification && (
          <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-800">
                Order <span className="font-semibold">#ORD1001</span> status successfully updated to 'Delivered'.
              </p>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-green-800 hover:text-green-900 transition"
            >
              <X size={20} />
            </button>
          </div>
        )}

        {/* Filters */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-full font-medium transition whitespace-nowrap ${
              activeFilter === "all" ? "bg-black text-white" : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
            }`}
          >
            All Orders
          </button>
          <button
            onClick={() => setActiveFilter("pending")}
            className={`px-6 py-2 rounded-full font-medium transition whitespace-nowrap ${
              activeFilter === "pending"
                ? "bg-black text-white"
                : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveFilter("processing")}
            className={`px-6 py-2 rounded-full font-medium transition whitespace-nowrap ${
              activeFilter === "processing"
                ? "bg-black text-white"
                : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
            }`}
          >
            Processing
          </button>
          <button
            onClick={() => setActiveFilter("delivered")}
            className={`px-6 py-2 rounded-full font-medium transition whitespace-nowrap ${
              activeFilter === "delivered"
                ? "bg-black text-white"
                : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
            }`}
          >
            Delivered
          </button>
        </div>

        {/* Orders Table */}
        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
          {/* Table Header - Desktop */}
          <div className="hidden md:grid md:grid-cols-5 bg-neutral-100 px-6 py-4 font-semibold text-sm">
            <div>Order ID</div>
            <div>Customer</div>
            <div>Amount</div>
            <div>Status</div>
            <div>Action</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-neutral-200">
            {orders.map((order, index) => (
              <div key={index} className="px-6 py-4 grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 md:items-center">
                {/* Mobile Labels */}
                <div className="md:hidden">
                  <div className="text-sm font-semibold text-neutral-500 mb-1">Order ID</div>
                  <div className="font-semibold">{order.id}</div>
                </div>
                <div className="hidden md:block font-semibold">{order.id}</div>

                <div className="md:hidden">
                  <div className="text-sm font-semibold text-neutral-500 mb-1">Customer</div>
                  <div>{order.customer}</div>
                </div>
                <div className="hidden md:block">{order.customer}</div>

                <div className="md:hidden">
                  <div className="text-sm font-semibold text-neutral-500 mb-1">Amount</div>
                  <div className="font-semibold">{order.amount}</div>
                </div>
                <div className="hidden md:block font-semibold">{order.amount}</div>

                <div className="md:hidden">
                  <div className="text-sm font-semibold text-neutral-500 mb-1">Status</div>
                  <div>
                    <span
                      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}
                    >
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      {order.status}
                    </span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}
                  >
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {order.status}
                  </span>
                </div>

                <div className="md:hidden">
                  <div className="text-sm font-semibold text-neutral-500 mb-1">Action</div>
                  <Link href="#" className="text-black font-medium hover:underline">
                    View Details
                  </Link>
                </div>
                <div className="hidden md:block">
                  <Link href="#" className="text-black font-medium hover:underline">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-300 hover:bg-neutral-100 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-black text-white font-medium">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-300 hover:bg-neutral-100 transition">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-300 hover:bg-neutral-100 transition">
            3
          </button>
          <div className="px-2 text-neutral-500">...</div>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-300 hover:bg-neutral-100 transition">
            10
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-300 hover:bg-neutral-100 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  )
}
