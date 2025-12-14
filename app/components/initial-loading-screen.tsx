"use client"

import { useLoading } from "@/lib/loading-context"
import { Loader2 } from "lucide-react"

export function InitialLoadingScreen() {
  const { isInitialLoading } = useLoading()

  if (!isInitialLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        {/* Logo/Brand */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">FABRIC.</h1>

        {/* Animated Loader */}
        <div className="flex justify-center">
          <Loader2 className="size-8 animate-spin text-primary" />
        </div>

        {/* Welcome Text */}
        <p className="text-muted-foreground text-sm md:text-base">Woven with Intention</p>
      </div>
    </div>
  )
}
