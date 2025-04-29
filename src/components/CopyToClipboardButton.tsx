import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as React from "react";

const copyToClipboardButtonVariants = cva(
	"flex h-[43px] w-fit items-center justify-center border-2 border-black px-4 py-2 text-black opacity-100 hover:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-white",
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

function CopyToClipboardButton({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof copyToClipboardButtonVariants> & {
		asChild?: boolean;
		onClick: () => void;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			className={cn(
				copyToClipboardButtonVariants({ variant, size, className }),
			)}
			{...props}
			onClick={props.onClick}
		>
			<span className="flex flex-row items-center gap-1">Copy Address</span>
		</Comp>
	);
}

export { CopyToClipboardButton, copyToClipboardButtonVariants };
