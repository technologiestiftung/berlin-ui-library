import { Slot} from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"
import * as React from "react"


const copyToClipboardButtonVariants = cva(
  "ts:px-4 ts:py-2 ts:border-black ts:w-fit ts:border-2 ts:opacity-100 ts:hover:opacity-50 ts:flex ts:justify-center ts:items-center ts:text-black ts:h-[43px]",
  {
    variants: {
      variant: {
        default: "ts:bg-primary ts:text-white",
      },
      size: {
        default: "ts:h-[43px] ts:w-fit",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function CopyToClipboardButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof copyToClipboardButtonVariants> & {
    asChild?: boolean
    onClick: () => void
  }) {
  const Comp = asChild ? Slot : "button"

  return (
      <Comp
        className={cn(copyToClipboardButtonVariants({variant, size, className}))}
        {...props}
        onClick={props.onClick}
      >
        <span className="ts:flex ts:flex-row ts:gap-1 ts:items-center">
          Copy Address
        </span>
      </Comp>
  )
}

export { CopyToClipboardButton, copyToClipboardButtonVariants } 
