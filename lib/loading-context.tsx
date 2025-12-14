"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useTransition } from "react"
import { usePathname } from "next/navigation"

interface LoadingContextType {
  isInitialLoading: boolean
  isNavigating: boolean
  isPending: boolean
  startTransition: (callback: () => void) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [isNavigating, setIsNavigating] = useState(false)
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setIsNavigating(false)
  }, [pathname])

  return (
    <LoadingContext.Provider
      value={{
        isInitialLoading,
        isNavigating,
        isPending,
        startTransition,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error("useLoading must be used within LoadingProvider")
  }
  return context
}
