import React from "react";
import { cn } from "@/lib/utils";

export interface ListProps extends React.HTMLAttributes<HTMLElement> {
	variant?: "unordered" | "ordered";
	children: React.ReactNode;
}

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
	children: React.ReactNode;
}

export function ListItem({ children, className, ...props }: ListItemProps) {
	return (
		<li
			className={cn("mb-2 break-words", className)}
			{...props}
		>
			{children}
		</li>
	);
}

export function List({ variant = "unordered", children, className, ...props }: ListProps) {
	if (variant === "ordered") {
		return (
			<ol
				className={cn(
					"mb-[25px] mt-0 list-outside pl-[10px]",
					"[&>li]:ml-[0.7em] [&>li]:mb-2 [&>li]:break-words",
					"[&>li>ol]:mt-2 [&>li>ol]:mb-2 [&>li>ul]:mt-2 [&>li>ul]:mb-2",
					className
				)}
				{...props}
			>
				{children}
			</ol>
		);
	}

	return (
		<ul
			className={cn(
				"mb-[25px] mt-0 list-disc pl-[1.1em]",
				"[&>li]:mb-2 [&>li]:break-words",
				"[&>li::marker]:text-red [&>li::marker]:text-[17px] [&>li::marker]:leading-none",
				"[&>li>ul]:mt-2 [&>li>ul]:mb-2 [&>li>ol]:mt-2 [&>li>ol]:mb-2",
				className
			)}
			{...props}
		>
			{children}
		</ul>
	);
}