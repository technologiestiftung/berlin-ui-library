import React, { ReactNode, forwardRef } from "react";
import { cn } from "../../lib/utils";
import RightIcon from "../../assets/icons/right_icon.svg";

export type PanelVariant =
	| "heavy"
	| "dark"
	| "light"
	| "clean"
	| "bordered"
	| "colored"
	| "boxed"
	| "white"
	| "hint";

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	variant?: PanelVariant;
	removeInnerPanels?: boolean;
	footer?: ReactNode;
	className?: string;
}

const variantStyles: Record<PanelVariant, string> = {
	heavy: "p-[18px] bg-[#f5f5f5] border border-[#f5f5f5]",
	dark: "p-[18px] bg-black border-0 text-white",
	light: "p-[1.125em] bg-white border border-[#ddd]",
	clean: "p-[1.125em] px-0 bg-transparent border border-transparent",
	bordered: "py-[1.125em] px-0 border border-[#ddd] border-x-0 bg-transparent",
	colored: "p-[18px] bg-[#f5f5f5] border border-[#f5f5f5] text-black",
	boxed: "p-[1.125em] bg-white border border-black",
	white: "p-[1.125em] bg-white border border-white",
	hint: "mt-4 mb-4 ml-[18px] pl-3 relative font-bold",
};

const Panel = forwardRef<HTMLDivElement, PanelProps>(
	(
		{
			children,
			variant = "light",
			removeInnerPanels = false,
			footer,
			className,
			...props
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={cn(
					"panel",
					variantStyles[variant],
					removeInnerPanels && variant === "heavy"
						? "panel--remove-inner-panels"
						: "",
					variant === "heavy" && "has-inner-panels",
					className,
				)}
				data-variant={variant}
				{...props}
			>
				{variant === "hint" && (
					<img
						src={RightIcon}
						alt="Hint icon"
						className="absolute top-0 left-[-18px] h-[22px] w-[22px] text-black"
					/>
				)}
				{children}
				{footer && (
					<div
						className={cn(
							"panel__footer relative bottom-[-18px] -mx-[18px] mt-0 border-x-0 border-t border-b-0 p-[18px]",
							variant === "dark" && "text-white",
						)}
					>
						{footer}
					</div>
				)}
			</div>
		);
	},
);

Panel.displayName = "Panel";

export { Panel };
