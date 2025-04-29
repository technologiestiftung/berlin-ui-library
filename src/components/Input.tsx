import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
	"relative col-start-1 row-start-1 h-[47px] w-full rounded-none border-2 border-black px-4 pr-20 pl-10 placeholder-berlin-grey focus:border-focus-blue focus:shadow-default focus:outline-none",
	{
		variants: {
			variant: {
				default: "bg-background text-foreground",
				outline: "bg-transparent",
			},
			size: {
				sm: "h-8 px-2 text-sm",
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
