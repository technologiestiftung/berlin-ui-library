// src/components/Header/LogoBar.tsx
import React from "react";
import { default as BerlinLogo } from "@/assets/logo_berlin_m_srgb.svg";

interface LogoBarProps {
	/**
	 * URL for the logo link
	 */
	logoUrl?: string;
	/**
	 * Custom logo component (will be used instead of default Berlin logo if provided)
	 */
	logoComponent?: React.ReactNode;
	/**
	 * Whether the LogoBar is in sticky state
	 */
	isSticky?: boolean;
}

export function LogoBar({
	logoUrl = "https://www.berlin.de",
	logoComponent,
	isSticky = false,
}: LogoBarProps) {
	return (
		<div
			className={`sticky top-0 z-10 flex items-center justify-start border-b bg-white transition-[height,background-color,opacity,padding] duration-200 ease-in-out ${
				isSticky
					? "h-[3px] border-none bg-gray-700 px-4 py-0 lg:px-6"
					: "h-11 border-gray-300 bg-white px-4 py-[0.25em] lg:px-6"
			}`}
		>
			<a
				href={logoUrl}
				aria-label="Homepage Berlin.de"
				className={`transition-opacity duration-200 ease-in-out ${
					isSticky ? "opacity-0" : "opacity-100"
				}`}
			>
				{logoComponent || (
					<img src={BerlinLogo} alt="Berlin.de Logo" className="object-fill" />
				)}
			</a>
		</div>
	);
}
