import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import ArrowRightIcon from "./icons/arrow-right-icon";

const submitButtonVariants = cva(
	// Base styles for the button container
	"ts:inline-flex ts:items-center ts:justify-between ts:w-full ts:h-[47px] ts:border-2 ts:border-black ts:bg-white ts:text-black ts:font-medium ts:whitespace-nowrap ts:text-sm ts:transition-[color,box-shadow] ts:disabled:pointer-events-none ts:disabled:opacity-50 ts:outline-none ts:focus-visible:border-focus-blue ts:focus-visible:ring-ring/50 ts:focus-visible:ring-[3px] ts:rounded-none",
	{
		variants: {
			variant: {
				// Only one variant needed for this specific style
				default: "", // Base styles handle everything for this variant
			},
			// Size is fixed, so no size variants needed
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

function SubmitButton({
	className,
	variant,
	children,
	asChild = false,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & // Use ButtonHTMLAttributes
	VariantProps<typeof submitButtonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			className={cn(submitButtonVariants({ variant, className }))}
			{...props}
		>
			{/* Text part */}
			<span className="ts:pl-4">{children}</span>
			{/* Icon part (red square) */}
			<div className="ts:h-full ts:flex ts:items-center ts:justify-center ts:bg-[#D12121] ts:px-3">
				<div className="ts:text-white ts:size-4">
					<ArrowRightIcon color="white"></ArrowRightIcon>
				</div>
			</div>
		</Comp>
	);
}

export { SubmitButton, submitButtonVariants };
