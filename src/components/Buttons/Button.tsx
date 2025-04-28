import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import * as React from "react";

const buttonVariants = cva(
	"ts:font-(--font-custom) ts:px-4 ts:py-2  ts:flex ts:justify-center ts:items-center ts:text-black",
	{
		variants: {
			variant: {
				default:
					"ts:border-black ts:border-2 ts:opacity-100 ts:hover:opacity-50 ts:text-black",
				link: "ts:text-link-blue  ts:hover:underline ts:cursor-pointer",
			},
			size: {
				default: "ts:h-[43px] ts:w-fit",
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
	icon,
	onClick,
	asChild = false,
	children,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
		onClick: () => void;
		icon?: React.ReactNode;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
			onClick={onClick}
		>
			{icon && <span className="ts:mr-2">{icon}</span>}
			{children}
		</Comp>
	);
}

export { Button, buttonVariants };
