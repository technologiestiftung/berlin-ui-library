import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import TimesIcon from "@/assets/icons/times_icon.svg?react";
import InfoIcon from "@/assets/icons/info_icon.svg?react";
import ErrorIcon from "@/assets/icons/error_icon.svg?react";
import SuccessIcon from "@/assets/icons/success_icon.svg?react";

import { cn } from "@/lib/utils";

const pillVariants = cva(
	"pill text-3.5 inline-flex w-auto min-w-[unset] items-center gap-[0.4em] rounded-full border border-transparent px-1.75 py-0.25 leading-[1.2] transition-colors",
	{
		variants: {
			variant: {
				default: "bg-black text-white",
				error: "bg-message-error text-text-error",
				success: "bg-message-success text-text-success",
				info: "bg-message-info text-blue",
				message: "bg-message-default text-text-base",
				filter:
					"bg-grey-dark text-black hover:bg-border-light data-[state=active]:bg-red data-[state=active]:text-white data-[state=active]:hover:bg-red",
			},
			inverted: {
				true: "",
			},
			size: {
				default: "",
				md: "text-3.5 rounded-full px-3.5 py-1.5 font-normal",
				lg: "text-4 rounded-full px-4 py-2 font-medium",
				xl: "text-4.5 rounded-full px-5 py-2.5 font-medium",
			},
		},
		compoundVariants: [
			{
				variant: "default",
				inverted: true,
				className: "bg-black text-white",
			},
			{
				variant: "error",
				inverted: true,
				className: "bg-text-error text-white",
			},
			{
				variant: "success",
				inverted: true,
				className: "bg-text-success text-white",
			},
			{
				variant: "info",
				inverted: true,
				className: "bg-blue text-white",
			},
			{
				variant: "message",
				inverted: true,
				className: "bg-text-base text-white",
			},
		],
		defaultVariants: {
			variant: "default",
			size: "default",
			inverted: false,
		},
	},
);

export interface PillProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof pillVariants> {
	/**
	 * Whether the pill is active (primarily used with filter variant)
	 */
	active?: boolean;
	/**
	 * Function called when the pill is toggled (for filter variant)
	 */
	onToggle?: () => void;
	/**
	 * Value of the pill (used for filter variant in FilterPillGroup)
	 */
	value?: string;
	/**
	 * Whether to show the icon (applies to all variants that have icons)
	 */
	showIcon?: boolean;
}

const Pill = React.forwardRef<HTMLDivElement, PillProps>(
	// eslint-disable-next-line complexity
	(
		{
			className,
			variant,
			inverted,
			size,
			active,
			onToggle,
			showIcon = true,
			children,
			...props
		},
		ref,
	) => {
		const isToggleable = variant === "filter" && onToggle !== undefined;

		const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
			if (isToggleable) {
				onToggle?.();
			}
			props.onClick?.(e);
		};

		return (
			<div
				ref={ref}
				className={cn(
					pillVariants({ variant, inverted, size, className }),
					active && "data-[state=active]",
					isToggleable && "cursor-pointer",
				)}
				data-state={active ? "active" : "inactive"}
				onClick={handleClick}
				{...props}
			>
				{showIcon && variant === "info" && (
					<InfoIcon
						className={cn(
							inverted ? "fill-white" : "fill-blue",
							size === "md" || size === "lg" || size === "xl" ? "size-4" : "size-3",
						)}
					/>
				)}
				{showIcon && variant === "message" && (
					<InfoIcon
						className={cn(
							inverted ? "fill-white" : "fill-text-base",
							size === "md" || size === "lg" || size === "xl" ? "size-4" : "size-3",
						)}
					/>
				)}
				{showIcon && variant === "error" && (
					<ErrorIcon
						className={cn(
							inverted ? "fill-white" : "fill-text-error",
							size === "md" || size === "lg" || size === "xl" ? "size-4" : "size-3",
						)}
					/>
				)}
				{showIcon && variant === "success" && (
					<SuccessIcon
						className={cn(
							inverted ? "fill-white" : "fill-text-success",
							size === "md" || size === "lg" || size === "xl" ? "size-4" : "size-3",
						)}
					/>
				)}
				{children}
				{showIcon && variant === "filter" && active && (
					<TimesIcon
						className={cn("fill-white", size === "md" || size === "lg" || size === "xl" ? "size-4" : "size-3")}
					/>
				)}
			</div>
		);
	},
);

Pill.displayName = "Pill";

export interface FilterPillGroupProps
	extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The currently active filter values
	 */
	activeValues: string[];
	/**
	 * Callback when a filter value is toggled
	 */
	onValueToggle: (value: string) => void;
	/**
	 * Size variant for all pills in the group
	 */
	size?: "default" | "md" | "lg" | "xl";
}

const FilterPillGroup = React.forwardRef<HTMLDivElement, FilterPillGroupProps>(
	(
		{
			className,
			activeValues,
			onValueToggle,
			size = "default",
			children,
			...props
		},
		ref,
	) => {
		// Create a map of children with toggle props
		const enhancedChildren = React.Children.map(children, (child) => {
			if (
				React.isValidElement<PillProps>(child) &&
				child.type === Pill &&
				child.props.variant === "filter"
			) {
				// Get the value from the child's value prop or use the child's text content
				const value =
					child.props.value ||
					(typeof child.props.children === "string"
						? child.props.children
						: "");

				const isActive = activeValues.includes(value);

				return React.cloneElement(child as React.ReactElement<PillProps>, {
					active: isActive,
					size,
					onToggle: () => onValueToggle(value),
					value,
				});
			}
			return child;
		});

		return (
			<div
				ref={ref}
				className={cn("flex flex-wrap gap-2", className)}
				{...props}
			>
				{enhancedChildren}
			</div>
		);
	},
);

FilterPillGroup.displayName = "FilterPillGroup";

export { Pill, pillVariants, FilterPillGroup };
