import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import ArrowLeftIcon from "./icons/arrow-left-icon"

const backButtonVariants = cva(
  "ts:inline-flex ts:items-center ts:justify-centerts: ts:gap-2 ts:whitespace-nowrap ts:rounded-md ts:text-sm ts:font-medium ts:transition-[color,box-shadow] ts:disabled:pointer-events-none ts:disabled:opacity-50 ts:[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 ts:shrink-0 [&_svg]:ts:shrink-0 ts:outline-none ts:focus-visible:ts:border-ring ts:focus-visible:ts:ring-ring/50 ts:focus-visible:ts:ring-[3px] aria-invalid:ts:ring-destructive/20 dark:aria-invalid:ts:ring-destructive/40 aria-invalid:ts:border-destructive",
  {
    variants: {
      variant: {
        default:
          "ts:font-(--font-custom) ts:font[var(--font-custom] ts:text-link-blue ts:flex ts:justify-center ts:items-center ts:hover:underline",
        destructive:
          "ts:bg-destructive ts:text-white ts:shadow-xs ts:hover:bg-destructive/90 ts:focus-visible:ring-destructive/20 dark:ts:focus-visible:ts:ring-destructive/40",
        outline:
          "ts:border ts:border-input ts:bg-background ts:shadow-xs ts:hover:bg-accent ts:hover:text-accent-foreground",
        secondary:
          "ts:bg-secondary ts:text-secondary-foreground ts:shadow-xs ts:hover:bg-secondary/80",
        ghost: "ts:hover:bg-accent ts:hover:text-accent-foreground",
        link: "ts:text-primary ts:underline-offset-4 ts:hover:underline",
      },
      size: {
        default: "ts:h-[43px] ts:w-fit",
        sm: "ts:h-8 ts:rounded-md ts:gap-1.5 ts:px-3 ts:has-[>svg]:px-2.5",
        lg: "ts:h-10 ts:rounded-md ts:px-6 ts:has-[>svg]:px-4",
        icon: "ts:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function BackButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof backButtonVariants> & {
    asChild?: boolean
    title?: string
    onClick?: () => void
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(backButtonVariants({ variant, size, className }))}
      onClick={props.onClick}
      {...props}
      >
    <div className="ts:col-start-1 ts:row-start-1 ts:flex ts:flex-row ts:gap-2 ts:items-center">
      <div className="ts:scale-75">
        <ArrowLeftIcon></ArrowLeftIcon>
      </div>
    <div className="">{props.title}</div>
  </div>
    </Comp>
  )
}

export { BackButton, backButtonVariants}
