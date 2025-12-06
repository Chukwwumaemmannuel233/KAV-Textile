"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, User, LayoutDashboard, Package, ShoppingCart, Users, MessageSquare, Settings } from "lucide-react"

export default function AdminHeader() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="border-b border-neutral-200 sticky top-0 z-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/pages/admin/dashboard" className="text-2xl font-bold tracking-tight hover:opacity-70 transition">
            FABRIC
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link
              href="/pages/admin/dashboard"
              className={`text-sm font-medium hover:opacity-70 transition ${
                isActive("/pages/admin/dashboard") ? "text-black border-b-2 border-black pb-1" : "text-neutral-600"
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/pages/admin/orders"
              className={`text-sm font-medium hover:opacity-70 transition ${
                isActive("/pages/admin/orders") ? "text-black border-b-2 border-black pb-1" : "text-neutral-600"
              }`}
            >
              Orders
            </Link>
            <Link
              href="/pages/admin/products"
              className={`text-sm font-medium hover:opacity-70 transition ${
                isActive("/pages/admin/products") ? "text-black border-b-2 border-black pb-1" : "text-neutral-600"
              }`}
            >
              Products
            </Link>
            <Link
              href="/pages/admin/customers"
              className={`text-sm font-medium hover:opacity-70 transition ${
                isActive("/pages/admin/customers") ? "text-black border-b-2 border-black pb-1" : "text-neutral-600"
              }`}
            >
              Customers
            </Link>
            <Link
              href="/pages/admin/messages"
              className={`text-sm font-medium hover:opacity-70 transition ${
                isActive("/pages/admin/messages") ? "text-black border-b-2 border-black pb-1" : "text-neutral-600"
              }`}
            >
              Messages
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <Link href="/pages/admin/settings" className="hover:opacity-70 transition">
              <Settings size={20} />
            </Link>
            <button className="hover:opacity-70 transition relative">
              <Bell size={20} />
              {/* Notification badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <Link href="/pages/admin/profile" className="hover:opacity-70 transition">
              <div className="w-8 h-8 rounded-full bg-neutral-300 flex items-center justify-center">
                <User size={16} />
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Tabs */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t border-neutral-200 bg-white z-40">
        <div className="flex items-center justify-around">
          <Link
            href="/pages/admin/dashboard"
            className={`flex-1 py-3 flex flex-col items-center gap-1 text-xs font-medium hover:opacity-70 transition ${
              isActive("/pages/admin/dashboard") ? "text-black" : "text-neutral-600"
            }`}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/pages/admin/orders"
            className={`flex-1 py-3 flex flex-col items-center gap-1 text-xs font-medium hover:opacity-70 transition ${
              isActive("/pages/admin/orders") ? "text-black" : "text-neutral-600"
            }`}
          >
            <ShoppingCart size={20} />
            <span>Orders</span>
          </Link>
          <Link
            href="/pages/admin/products"
            className={`flex-1 py-3 flex flex-col items-center gap-1 text-xs font-medium hover:opacity-70 transition ${
              isActive("/pages/admin/products") ? "text-black" : "text-neutral-600"
            }`}
          >
            <Package size={20} />
            <span>Products</span>
          </Link>
          <Link
            href="/pages/admin/customers"
            className={`flex-1 py-3 flex flex-col items-center gap-1 text-xs font-medium hover:opacity-70 transition ${
              isActive("/pages/admin/customers") ? "text-black" : "text-neutral-600"
            }`}
          >
            <Users size={20} />
            <span>Customers</span>
          </Link>
          <Link
            href="/pages/admin/messages"
            className={`flex-1 py-3 flex flex-col items-center gap-1 text-xs font-medium hover:opacity-70 transition ${
              isActive("/pages/admin/messages") ? "text-black" : "text-neutral-600"
            }`}
          >
            <MessageSquare size={20} />
            <span>Messages</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
