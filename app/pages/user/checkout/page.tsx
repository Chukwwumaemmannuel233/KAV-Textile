"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";
import { Lock, CreditCard, HelpCircle } from "lucide-react";

export default function CheckoutPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const router = useRouter();

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    const formatted = value.match(/.{1,4}/g)?.join(" ") || value;
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.slice(0, 2) + " / " + value.slice(2, 4);
    }
    setExpiryDate(value);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvv(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSignUp(true);

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 800));
    router.push("/pages/user/checkout/processing");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-200 px-6 py-4">
        <div className="flex items-center gap-2">
          <Lock size={20} />
          <h1 className="text-xl font-semibold">FabricFlow Secure Checkout</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 lg:py-12">
        {/* Progress Steps */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link
            href="/pages/checkout/shipping"
            className="text-neutral-500 hover:text-neutral-900"
          >
            Shipping
          </Link>
          <span className="text-neutral-400">/</span>
          <span className="font-semibold text-neutral-900">Payment</span>
          <span className="text-neutral-400">/</span>
          <span className="text-neutral-500">Confirmation</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left: Payment Form */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Payment Details</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Payment Method Tabs */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition ${
                    paymentMethod === "card"
                      ? "border-neutral-900 bg-white"
                      : "border-neutral-200 bg-neutral-100 text-neutral-600"
                  }`}
                >
                  Credit / Debit Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("paypal")}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition ${
                    paymentMethod === "paypal"
                      ? "border-neutral-900 bg-white"
                      : "border-neutral-200 bg-neutral-100 text-neutral-600"
                  }`}
                >
                  PayPal
                </button>
              </div>

              {paymentMethod === "card" && (
                <>
                  {/* Card Number */}
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="block text-sm font-medium mb-2"
                    >
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      />
                      <CreditCard
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
                        size={20}
                      />
                    </div>
                  </div>

                  {/* Expiry and CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="expiryDate"
                        className="block text-sm font-medium mb-2"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={handleExpiryChange}
                        placeholder="MM / YY"
                        className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cvv"
                        className="flex items-center gap-1 text-sm font-medium mb-2"
                      >
                        CVV
                        <HelpCircle size={14} className="text-neutral-400" />
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={handleCvvChange}
                        placeholder="123"
                        className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      />
                    </div>
                  </div>

                  {/* Cardholder Name */}
                  <div>
                    <label
                      htmlFor="cardholderName"
                      className="block text-sm font-medium mb-2"
                    >
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      id="cardholderName"
                      value={cardholderName}
                      onChange={(e) => setCardholderName(e.target.value)}
                      placeholder="Name as it appears on card"
                      className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                </>
              )}

              {paymentMethod === "paypal" && (
                <div className="py-12 text-center bg-neutral-50 rounded-lg">
                  <p className="text-neutral-600">
                    You will be redirected to PayPal to complete your payment.
                  </p>
                </div>
              )}

              {/* Billing Address */}
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4">Billing Address</h3>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sameAsShipping}
                    onChange={(e) => setSameAsShipping(e.target.checked)}
                    className="w-5 h-5 rounded border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-neutral-900"
                  />
                  <span className="text-sm">
                    Billing address is same as shipping
                  </span>
                </label>
              </div>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-neutral-200 rounded-lg p-6 sticky top-8">
              <h3 className="text-2xl font-bold mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="font-medium">$120.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Shipping</span>
                  <span className="font-medium">$10.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Taxes</span>
                  <span className="font-medium">$9.60</span>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold">$139.60</span>
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                isLoading={isSignUp}
                loadingText="Pay $139.60..."
                className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-neutral-900 transition mb-4"
              >
                Pay $139.60
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
                <Lock size={14} />
                <span>SSL Encrypted Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
