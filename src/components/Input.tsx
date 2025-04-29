import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
	"relative pl-10 pr-20 placeholder-berlin-grey row-start-1 col-start-1 w-full h-[47px] border-2 border-black px-4 focus:outline-none focus:border-focus-blue focus:shadow-default rounded-none",
	{
		variants: {
			variant: {
				default: "ts:bg-background text-foreground",
				outline: "bg-transparent",
			},
			size: {
				sm: "h-8 text-sm px-2",
				default: "h-9 text-base px-3",
				lg: "h-10 text-lg px-4",
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
