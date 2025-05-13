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
}

export function LogoBar({
	logoUrl = "https://www.berlin.de",
	logoComponent,
}: LogoBarProps) {
	return (
		<div className="h-11 border-b border-gray-300 bg-white px-4 py-[0.25em] md:px-6">
			<a href={logoUrl} aria-label="Homepage Berlin.de">
				{logoComponent || (
					<img src={BerlinLogo} alt="Berlin.de Logo" className="object-fill" />
				)}
			</a>
		</div>
	);
}
