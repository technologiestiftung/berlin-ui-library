/* eslint-disable no-nested-ternary */
/* eslint-disable complexity */
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import ArrowRightIcon from "@/assets/icons/arrow_right_icon.svg?react";
import ArrowLeftIcon from "@/assets/icons/arrow_left_icon.svg?react";
import SearchIcon from "@/assets/icons/search_icon.svg?react";
import CloseIcon from "@/assets/icons/close_icon.svg?react";
import FilterIcon from "@/assets/icons/filter_icon.svg?react";
import LinkIcon from "@/assets/icons/link_icon.svg?react";
import { ButtonProps } from "./types";

// Additional icon imports can be added as needed
const renderIconAndBackground = (variant: string, isDisabled: boolean) => {
	if (
		variant === "light" ||
		variant === "white" ||
		variant === "clean" ||
		variant === "link"
	) {
		return null;
	}

	// Special handling for close variant
	if (variant === "close") {
		return (
			<span className="flex h-full w-full items-center justify-center">
				<CloseIcon
					className={`${isDisabled ? "text-gray-500" : "text-black"}`}
				/>
			</span>
		);
	}

	// Special handling for back variant
	if (variant === "back") {
		return (
			<span className="flex h-full w-full items-center justify-center">
				<ArrowLeftIcon
					className={`${isDisabled ? "text-gray-500" : "text-black"}`}
					width="24"
					height="24"
				/>
			</span>
		);
	}

	// Special handling for back-link variant (arrow + text)
	if (variant === "back-link") {
		return (
			<ArrowLeftIcon
				className={`mr-1 ${isDisabled ? "text-gray-500" : "text-[#0047d3]"}`}
				width="16"
				height="16"
			/>
		);
	}

	const iconBackgroundColor = isDisabled ? "bg-gray-400" : "bg-red";

	return (
		<>
			<span
				className={`absolute top-0 right-0 flex h-full w-[39px] items-center justify-center ${variant.includes("fulltone") ? "" : "border-l-2"} ${isDisabled ? "border-gray-400" : "border-black"} ${iconBackgroundColor}`}
			></span>
			<span className="pointer-events-none absolute top-0 right-0 flex h-full w-[39px] items-center justify-center">
				{variant === "default" ||
				variant === "colored" ||
				variant === "fulltone" ||
				variant === "light-fulltone" ? (
					<ArrowRightIcon className="text-white" />
				) : variant === "search" ? (
					<SearchIcon className="fill-white" />
				) : variant === "filter" ? (
					<FilterIcon className="fill-white" />
				) : variant === "extern" ? (
					<LinkIcon className="text-white" />
				) : null}
			</span>
		</>
	);
};

const buttonVariants = cva(
	// base styles for all buttons
	"relative inline-block min-h-[43px] w-auto cursor-pointer justify-center overflow-visible rounded-none border-2 border-black bg-white px-4 py-[10px] text-center font-sans text-base leading-[1.2] text-black no-underline transition-colors duration-200 ease-out disabled:cursor-not-allowed",
	{
		variants: {
			variant: {
				default:
					"hover:bg-hover focus:bg-hover pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
				light:
					"hover:bg-hover focus:bg-hover px-4 disabled:border-gray-400 disabled:text-gray-500",
				white:
					"disabled:bg-gray-200focus:bg-hover hover:bg-hover border-0 border-white bg-white px-4 text-black disabled:text-gray-500",
				fulltone:
					"border-0 bg-red px-4 text-white hover:bg-[#fb203d] focus:bg-[#fb203d] disabled:bg-gray-400 disabled:text-white",
				negative:
					"border-2 border-white bg-transparent text-white hover:bg-transparent focus:bg-transparent disabled:border-gray-500 disabled:bg-transparent disabled:text-gray-500",
				colored:
					"hover:bg-hover focus:bg-hover border-red pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
				clean: "border border-transparent px-4 disabled:text-gray-500",
				play: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
				download: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
				search: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
				filter: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
				addtocart:
					"flex pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
				close:
					"h-[39px] min-h-0 w-[39px] border-0 border-transparent bg-transparent p-0 disabled:opacity-50",
				back: "flex h-[39px] min-h-0 w-[39px] items-center justify-center border-0 border-transparent bg-transparent p-0 disabled:opacity-50",
				"back-link":
					"flex h-auto min-h-0 flex-row-reverse items-center justify-start border-0 border-transparent bg-transparent p-0 text-[#0047d3] hover:underline disabled:text-gray-500 disabled:no-underline",
				extern: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
				link: "m-0 h-auto cursor-pointer border-0 bg-transparent p-0 text-left text-[#0047d3] hover:underline disabled:text-gray-500 disabled:no-underline",
				"light-fulltone":
					"border-0 bg-red px-4 text-white hover:bg-[#fb203d] focus:bg-[#fb203d] disabled:bg-gray-400 disabled:text-white",
				"negative-light":
					"border-2 border-white bg-transparent text-white hover:bg-transparent focus:bg-transparent disabled:border-gray-500 disabled:bg-transparent disabled:text-gray-500",
			},
			size: {
				default: "",
				fullwidth: "w-full",
				"fullwidth-palm": "lg:w-full",
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
	variant = "default",
	size,
	asChild = false,
	booking = false,
	price,
	children,
	disabled = false,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";

	const bookingContent =
		booking && price ? (
			<>
				<span className="price mr-[0.7em] border-r border-black/60 pr-[0.7em]">
					{price}
				</span>
				<span>{children}</span>
			</>
		) : (
			children
		);

	return (
		<Comp
			data-slot="button"
			className={cn(
				buttonVariants({ variant, size, className }),
				booking ? "button--booking flex" : "",
			)}
			disabled={disabled}
			{...props}
		>
			{bookingContent}
			{renderIconAndBackground(variant as string, disabled)}
		</Comp>
	);
}

export { Button, buttonVariants };
