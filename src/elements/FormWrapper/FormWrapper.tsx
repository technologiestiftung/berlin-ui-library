import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FormWrapperProps {
	/**
	 * The form content
	 */
	children: ReactNode;
	/**
	 * Whether the form should have a background color (bg-block-colored)
	 */
	withBackground?: boolean;
	/**
	 * Padding for the form
	 */
	padding?: string;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

/**
 * FormWrapper component for applying consistent styling to forms
 */
export function FormWrapper({
	children,
	withBackground = true,
	padding = "p-6",
	className,
}: FormWrapperProps) {
	return (
		<div
			className={cn(
				withBackground && "bg-block-colored",
				padding,
				"w-full",
				className,
			)}
		>
			{children}
		</div>
	);
}
