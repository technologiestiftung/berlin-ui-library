import { cn } from "@/lib/utils";
import { ComponentType, SVGProps } from "react";
import { iconRegistry, IconName } from "./iconRegistry";

export type { IconName };

export interface IconProps {
	/**
	 * The icon name
	 */
	name: IconName;
	/**
	 * Additional CSS classes for styling the icon (use size-* for dimensions, text-* for colors)
	 */
	className?: string;
	/**
	 * Accessible label for screen readers
	 */
	"aria-label"?: string;
	/**
	 * Whether to hide the icon from screen readers (default: true)
	 */
	"aria-hidden"?: boolean;
}

export function Icon({
	name,
	className,
	"aria-label": ariaLabel,
	"aria-hidden": ariaHidden = true,
}: IconProps) {
	const IconComponent = iconRegistry[
		name as keyof typeof iconRegistry
	] as ComponentType<SVGProps<SVGSVGElement>>;

	if (!IconComponent) {
		console.warn(`Icon "${name}" not found`);
		return null;
	}

	return (
		<IconComponent
			className={cn("inline-block", className)}
			aria-label={ariaLabel}
			aria-hidden={ariaHidden}
		/>
	);
}
