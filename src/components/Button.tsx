import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	// base: replace global .button styles with Tailwind
	"ts:focus-visible:ring-ring/50 ts:focus-visible:border-ring ts:dark:focus-visible:ring-destructive/40 ts:relative ts:inline-flex ts:cursor-pointer ts:items-center ts:justify-center ts:gap-2 ts:overflow-visible ts:text-base ts:leading-[1.2] ts:font-medium ts:whitespace-nowrap ts:transition-colors ts:duration-200 ts:ease-out ts:outline-none ts:focus-visible:ring-3 ts:disabled:pointer-events-none ts:disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"ts:text-link-blue ts:text-white ts:border-2 ts:border-black ts:flex ts:justify-center ts:items-center ts:w-fit ts:h-[43px] ts:hover:underline",
				destructive:
					"ts:bg-destructive ts:text-white ts:shadow-xs ts:hover:bg-destructive/90 ts:focus-visible:ring-destructive/20 dark:ts:focus-visible:ts:ring-destructive/40",
				outline:
					"ts:border ts:border-input ts:bg-background ts:shadow-xs ts:hover:bg-accent ts:hover:text-accent-foreground",
				secondary:
					"ts:bg-secondary ts:text-secondary-foreground ts:shadow-xs ts:hover:bg-secondary/80",
				ghost: "ts:hover:bg-accent ts:hover:text-accent-foreground",
				link: "ts:text-primary ts:underline-offset-4 ts:hover:underline",
				"vertical-shop":
					// convert .button + .button--vertical-shop CSS to Tailwind
					"ts:flex ts:min-h-[43px] ts:w-auto ts:items-center ts:justify-center ts:rounded-none ts:border-2 ts:border-black ts:bg-white ts:px-[10px] ts:py-[10px] ts:pr-[59px] ts:text-black ts:no-underline ts:hover:bg-gray-200 ts:focus:bg-gray-200",
			},
			size: {
				default: "ts:h-9 ts:px-4 ts:py-2 ts:has-[>svg]:px-3",
				sm: "ts:h-8 ts:rounded-md ts:gap-1.5 ts:px-3 ts:has-[>svg]:px-2.5",
				lg: "ts:h-10 ts:rounded-md ts:px-6 ts:has-[>svg]:px-4",
				icon: "ts:size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
