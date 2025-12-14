"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ ADD THIS
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter(); // ✅ INITIALIZE ROUTER

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogginIn, setIsLogginIn] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogginIn(true);

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("Login attempt:", { email, password });

    // Redirect after login
    router.push("/pages/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md p-8 md:p-10 bg-white shadow-md rounded-2xl">
        <h1 className="text-2xl font-bold text-center mb-6 tracking-tight">
          Admin Log In
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg placeholder-neutral-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg placeholder-neutral-400 focus:outline-none"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              href="#"
              className="text-sm text-neutral-400 hover:text-neutral-600 transition"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            isLoading={isLogginIn}
            loadingText="Logging in..."
            className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-black/80 transition"
          >
            Login
          </Button>
        </form>

        {/* <div className="text-center mt-8">
          <span className="text-neutral-400 text-sm">
            New to our site?{" "}
            <Link
              href="/pages/auth/signup"
              className="text-neutral-900 font-semibold hover:underline transition"
            >
              Sign Up
            </Link>
          </span>
        </div> */}
      </div>
    </div>
  );
}
