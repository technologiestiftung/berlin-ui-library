import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import ArrowLeftIcon from "./icons/arrow-left-icon";

const backButtonVariants = cva(
	"justify-centerts: inline-flex shrink-0 items-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				default:
					"font[var(--font-custom] flex items-center justify-center font-(--font-custom) text-link-blue hover:underline",
				destructive:
					"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
				outline:
					"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-[43px] w-fit",
				sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function BackButton({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof backButtonVariants> & {
		asChild?: boolean;
		title?: string;
		onClick?: () => void;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(backButtonVariants({ variant, size, className }))}
			onClick={props.onClick}
			{...props}
		>
			<div className="col-start-1 row-start-1 flex flex-row items-center gap-2">
				<div className="scale-75">
					<ArrowLeftIcon></ArrowLeftIcon>
				</div>
				<div className="">{props.title}</div>
			</div>
		</Comp>
	);
}

export { BackButton, backButtonVariants };
