"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function NavigationProgress() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return 90
        return prev + 10
      })
    }, 100)

    const timer = setTimeout(() => {
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
      }, 200)
    }, 500)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[9998] h-1 bg-transparent">
      <div className="h-full bg-primary transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
    </div>
  )
}
