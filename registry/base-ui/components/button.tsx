"use client"

import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"

import { cn } from "@/lib/utils"

type ButtonVariant = "default" | "outline" | "secondary" | "ghost" | "destructive" | "link"
type ButtonSize = "default" | "sm" | "lg" | "icon"

const variants: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
  outline: "border bg-background shadow-xs hover:bg-muted hover:text-foreground",
  secondary: "bg-muted text-foreground shadow-xs hover:bg-muted/80",
  ghost: "hover:bg-muted hover:text-foreground",
  destructive: "bg-red-600 text-white shadow-xs hover:bg-red-600/90 focus-visible:ring-red-500/30",
  link: "text-primary underline-offset-4 hover:underline",
}

const sizes: Record<ButtonSize, string> = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-10 rounded-md px-8",
  icon: "size-9",
}

function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
} = {}) {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors outline-none focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    variants[variant],
    sizes[size],
    className
  )
}

function Button({
  className,
  variant,
  size,
  ...props
}: Omit<React.ComponentProps<typeof ButtonPrimitive>, "className"> & {
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
}) {
  return <ButtonPrimitive className={buttonVariants({ variant, size, className })} {...props} />
}

export { Button, buttonVariants }
