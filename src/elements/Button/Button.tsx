/* eslint-disable no-nested-ternary */
/* eslint-disable complexity */
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg?react";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg?react";
import SearchIcon from "@/assets/icons/search.svg?react";
import CloseIcon from "@/assets/icons/close.svg?react";
import FilterIcon from "@/assets/icons/filter.svg?react";
import LinkIcon from "@/assets/icons/link.svg?react";
import DownloadIcon from "@/assets/icons/download.svg?react";
import PlayIcon from "@/assets/icons/play.svg?react";
import CartIcon from "@/assets/icons/cart.svg?react";

import { ButtonProps } from "./types";

// Additional icon imports can be added as needed
const renderIconAndBackground = (variant: string, isDisabled: boolean) => {
	if (
		variant === "light" ||
		variant === "white" ||
		variant === "clean" ||
		variant === "link" ||
		variant === "linkWithIcon" // Add new variant to skip default icon rendering
	) {
		return null;
	}

	// Special handling for close variant
	if (variant === "close") {
		return (
			<span className="flex h-full w-full items-center justify-center">
				<CloseIcon
					className={`size-6 ${isDisabled ? "text-gray-500" : "text-black"}`}
				/>
			</span>
		);
	}

	// Special handling for back variant
	if (variant === "back") {
		return (
			<span className="flex h-full w-full items-center justify-center">
				<ArrowLeftIcon
					className={`size-6 ${isDisabled ? "text-gray-500" : "text-black"}`}
				/>
			</span>
		);
	}

	// Special handling for back-link variant (arrow + text)
	if (variant === "back-link") {
		return (
			<ArrowLeftIcon
				className={`mr-1 size-4 ${isDisabled ? "text-gray-500" : "text-black"} flex-shrink-0`}
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
					<ArrowRightIcon className="size-5 text-white" />
				) : variant === "search" ? (
					<SearchIcon className="size-[18px] text-white" />
				) : variant === "filter" ? (
					<FilterIcon className="size-4 text-white" />
				) : variant === "extern" ? (
					<LinkIcon className="size-4 text-white" />
				) : variant === "download" ? (
					<DownloadIcon className="size-[18px] text-white" />
				) : variant === "addtocart" ? (
					<CartIcon className="size-[18px] text-white" />
				) : variant === "play" ? (
					<PlayIcon className="size-[18px] text-white" />
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
					"flex h-auto min-h-0 flex-row-reverse items-center justify-start border-0 border-transparent bg-transparent p-0 text-text-link hover:underline disabled:text-gray-500 disabled:no-underline leading-none",
				extern: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
				link: "m-0 h-auto cursor-pointer border-0 bg-transparent p-0 text-left text-text-link hover:underline disabled:text-gray-500 disabled:no-underline",
				// New variant definition
				linkWithIcon:
					"m-0 inline-flex h-auto cursor-pointer items-center border-0 bg-transparent p-0 text-left text-text-link hover:underline disabled:text-gray-500 disabled:no-underline",
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
			{/* Render icon for the new linkWithIcon variant */}
			{variant === "linkWithIcon" && (
				<LinkIcon
					className={`mb-2 ml-1 inline-block size-[16px] align-text-top leading-none ${disabled ? "text-gray-500" : "text-[#0047d3]"}`}
					aria-hidden="true"
				/>
			)}
			{renderIconAndBackground(variant as string, disabled)}
		</Comp>
	);
}

export { Button, buttonVariants };
