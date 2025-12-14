"use client";

import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";
import SiteHeader from "../../../components/site-header";
import { useCart } from "@/lib/cart-context";
import { Button } from "../../../components/ui/button";
import { useState } from "react";

export default function CartPage() {
  const { items: cartItems, updateQuantity, removeFromCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isBack, setIsBack] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10.0;
  const total = subtotal + shipping;

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 800));
    window.location.href = "/pages/user/checkout";
  };

  const shop = async () => {
    setIsBack(true);

    await new Promise((resolve) => setTimeout(resolve, 800));
    window.location.href = "/pages/user/fabrics";
  };

  return (
    <main className="bg-white min-h-screen pb-20 md:pb-0">
      <SiteHeader />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Header with Back to Shop */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Shopping Cart
            </h1>
            <p className="text-neutral-600">{cartItems.length} items</p>
          </div>
          <Link
            href="/pages/user/fabrics"
            className="text-neutral-600 hover:text-black transition"
          >
            Back to Shop
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag size={48} className="mx-auto text-neutral-300 mb-4" />
            <p className="text-xl text-neutral-600 mb-6">Your cart is empty</p>
            <Button
              onClick={shop}
              isLoading={isBack}
              loadingText="Loading..."
              className="bg-black text-white px-8 py-3 font-medium hover:bg-neutral-900 transition"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 pb-6 border-b border-neutral-200"
                >
                  <img
                    src={item.image || "/placeholder.svg?height=128&width=128"}
                    alt={item.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover bg-neutral-100"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold mb-1">
                          {item.name}
                        </h3>
                        {item.color && (
                          <p className="text-neutral-600 text-sm mb-1">
                            Color: {item.color}
                          </p>
                        )}
                        {item.sku && (
                          <p className="text-neutral-600 text-sm">
                            SKU: {item.sku}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-neutral-400 hover:text-black transition"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3 bg-neutral-100 w-fit px-3 py-2 rounded">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="font-bold hover:opacity-70 transition"
                        >
                          −
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="font-bold hover:opacity-70 transition"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-lg font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-50 rounded-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-neutral-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Estimated Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Taxes</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="mb-6 flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 px-3 py-2 border border-neutral-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <Button className="px-6 py-2 bg-neutral-200 hover:bg-neutral-300 transition rounded font-medium text-sm">
                    Apply
                  </Button>
                </div>

                <div className="border-t border-neutral-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleCheckout}
                  isLoading={isCheckingOut}
                  loadingText="Processing..."
                  className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-neutral-900 transition mb-4"
                >
                  Proceed to Checkout
                </Button>

                <Link
                  href="/pages/user/fabrics"
                  className="block text-center text-neutral-600 hover:text-black transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
