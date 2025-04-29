import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import * as React from "react";

const buttonVariants = cva(
	"flex items-center justify-center px-4 py-2 font-(--font-custom) text-black",
	{
		variants: {
			variant: {
				default:
					"border-2 border-black text-black opacity-100 hover:opacity-50",
				link: "cursor-pointer text-link-blue hover:underline",
			},
			size: {
				default: "h-[43px] w-fit",
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
			{icon && <span className="mr-2">{icon}</span>}
			{children}
		</Comp>
	);
}

export { Button, buttonVariants };
