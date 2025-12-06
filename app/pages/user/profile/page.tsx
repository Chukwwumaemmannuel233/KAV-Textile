"use client"
import Link from "next/link"
import { User, ShoppingBag, Heart, MapPin, CreditCard, ChevronRight } from "lucide-react"
import SiteHeader from "../../../components/site-header"

export default function AccountPage() {
  const userName = "Alexandra"

  const accountOptions = [
    {
      id: "details",
      title: "Account Details",
      description: "Manage your name, email, and password.",
      icon: User,
      href: "/pages/user/account-details",
    },
    {
      id: "orders",
      title: "Order History",
      description: "View and track your past orders.",
      icon: ShoppingBag,
      href: "/pages/user/order-history",
    },
    {
      id: "favorites",
      title: "My Favorites",
      description: "Access your saved items.",
      icon: Heart,
      href: "/pages/user/favorites",
    },
    {
      id: "addresses",
      title: "Saved Addresses",
      description: "Manage your shipping and billing addresses.",
      icon: MapPin,
      href: "/pages/user/addresses",
    },
    {
      id: "payment",
      title: "Payment Methods",
      description: "Manage your saved credit cards.",
      icon: CreditCard,
      href: "/pages/user/payment-method",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader variant="user" />

      {/* Hero Section */}
      <section className="px-6 md:px-8 py-12 md:py-16 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Account</h1>
        <p className="text-lg text-neutral-600">
          Welcome back, {userName}! Manage your details, orders, and favorites.
        </p>
      </section>

      {/* Account Options Grid */}
      <section className="px-6 md:px-8 pb-24 max-w-5xl mx-auto">
        <div className="space-y-4">
          {accountOptions.map((option) => {
            const IconComponent = option.icon
            return (
              <Link key={option.id} href={option.href}>
                <div className="flex items-center gap-4 p-6 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer">
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-neutral-700" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-neutral-900">{option.title}</h3>
                    <p className="text-neutral-600">{option.description}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <ChevronRight className="w-6 h-6 text-neutral-400" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Log Out */}
      <section className="px-6 md:px-8 pb-16 max-w-5xl mx-auto text-center border-t border-neutral-200 pt-8">
        <button className="text-neutral-700 hover:text-neutral-900 underline font-medium transition-colors">
          Log Out
        </button>
      </section>
    </main>
  )
}
