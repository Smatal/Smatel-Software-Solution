import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[linear-gradient(110deg,#4f46e5,45%,#818cf8,55%,#4f46e5)] bg-[length:200%_100%] animate-shine text-white shadow-[0_4px_15px_rgba(79,70,229,0.3)] hover:shadow-[0_6px_25px_rgba(79,70,229,0.5)] border border-indigo-400/30 hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border border-indigo-500/20 bg-indigo-50/50 backdrop-blur-sm text-indigo-700 hover:bg-indigo-500/10 hover:border-indigo-500/40 shadow-[0_0_10px_rgba(79,70,229,0.05)] hover:shadow-[0_0_20px_rgba(79,70,229,0.15)] hover:scale-[1.02] active:scale-[0.98] dark:border-indigo-500/30 dark:text-indigo-300 dark:bg-indigo-500/10",
        secondary:
          "border border-indigo-500/20 bg-white/80 backdrop-blur-md text-gray-900 hover:bg-white hover:border-indigo-500/40 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.15)] hover:scale-[1.02] active:scale-[0.98]",
        ghost:
          "hover:bg-indigo-500/10 hover:text-indigo-700 aria-expanded:bg-indigo-500/10 aria-expanded:text-indigo-700 dark:hover:bg-indigo-500/20 dark:hover:text-indigo-300",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-indigo-600 underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef<HTMLButtonElement, any>(
  ({ className, variant = "default", size = "default", asChild, children, ...props }, ref) => {
    const commonProps = {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    };

    if (asChild && React.isValidElement(children)) {
      const isNative = typeof children.type === 'string' 
        ? children.type === 'button' 
        : (children.type === Button || (children.type as any).displayName === "Button") && !(children.props as any).asChild;
      return <ButtonPrimitive ref={ref} render={children as React.ReactElement} nativeButton={isNative} {...commonProps} />
    }

    return <ButtonPrimitive ref={ref} {...commonProps}>{children}</ButtonPrimitive>
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
