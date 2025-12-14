"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../components/ui/button"
import type { ButtonProps } from "../components/ui/button"

interface LoadingButtonProps extends Omit<ButtonProps, "onClick"> {
  onClick?: () => Promise<void> | void
}

export function LoadingButton({ onClick, children, ...props }: LoadingButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return

    try {
      setIsLoading(true)
      await onClick()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button {...props} isLoading={isLoading} onClick={handleClick}>
      {children}
    </Button>
  )
}
