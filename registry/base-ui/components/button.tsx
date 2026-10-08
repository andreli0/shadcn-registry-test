"use client"

import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"

import { buttonVariants, type ButtonSize, type ButtonVariant } from "./button-variants"

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

export { Button }
// eslint-disable-next-line react-refresh/only-export-components
export { buttonVariants, type ButtonSize, type ButtonVariant }
