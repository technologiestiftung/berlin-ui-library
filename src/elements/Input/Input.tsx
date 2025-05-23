import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
	"placeholder-berlin-grey focus:border-focus-blue relative col-start-1 row-start-1 h-[47px] w-full rounded-none border border-black px-4 pr-20 pl-10 focus:shadow-default focus:outline-none",
	{
		variants: {
			variant: {
				default: "text-foreground bg-white",
				outline: "bg-transparent",
			},
			size: {
				md: "h-8 px-2 text-sm",
				default: "h-9 px-3 text-base",
				lg: "h-10 px-4 text-lg",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

const Input = React.forwardRef<
	HTMLInputElement,
	React.ComponentProps<"input"> & VariantProps<typeof inputVariants>
>(({ className, type, variant, size, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(inputVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export { Input, inputVariants };
