/* eslint-disable complexity */
"use client";

import React from "react";
import { LogoBar } from "./LogoBar";
import { MainHeaderContentClient } from "./MainHeaderContent.client";
import { SubHeaderBar } from "./SubHeaderBar";
import { BreadcrumbItem, LinkComponentProps, MenuItem } from "./types";
import { Language } from "./LanguageProvider";
import { LanguageProvider } from "./LanguageProvider";

export interface HeaderClientProps extends LinkComponentProps {
	header?: string;
	caption?: string;
	url?: string;
	logoUrl?: string;
	logoComponent?: React.ReactNode;
	breadcrumbs?: BreadcrumbItem[];
	showBreadcrumbs?: boolean;
	showLanguageSelect?: boolean;
	language?: string;
	languages?: Language[];
	translations?: Record<string, Record<string, string>>;
	onLanguageChange?: (code: string) => void;
	showSearchButton?: boolean;
	onSearch?: () => void;
	showMenuButton?: boolean;
	menuItems?: MenuItem[];
	onOpenMenu?: () => void;
	className?: string;
}

/**
 * Client version of Header component with integrated accessibility menu
 * Use this version when you need client-side interactivity throughout the header
 */
export function HeaderClient({
	header = "Design System",
	caption = "Berlin.de",
	url = "/",
	logoUrl = "https://www.berlin.de",
	logoComponent,
	LinkComponent,
	breadcrumbs = [],
	showBreadcrumbs = true,
	showLanguageSelect = true,
	language = "de",
	languages = [
		{ code: "de", label: "Deutsch" },
		{ code: "en", label: "English" },
	],
	translations,
	onLanguageChange = () => {},
	showSearchButton = true,
	onSearch = () => {},
	showMenuButton = true,
	menuItems = [],
	onOpenMenu = () => {},
	className = "",
}: HeaderClientProps) {
	return (
		<LanguageProvider
			initialLanguage={language}
			languages={languages}
			translations={translations}
			onLanguageChange={onLanguageChange}
		>
			<header
				className={`sticky top-0 z-[20] bg-white text-xl leading-[122.2%] tracking-[0.3px] ${className}`}
			>
				{/* Logo Bar */}
				<LogoBar logoUrl={logoUrl} logoComponent={logoComponent} />

				{/* Main Header Content */}
				<MainHeaderContentClient
					header={header}
					caption={caption}
					url={url}
					showSearchButton={showSearchButton}
					onSearch={onSearch}
					showMenuButton={showMenuButton}
					menuItems={menuItems}
					onOpenMenu={onOpenMenu}
				/>

				{/* Sub Header Bar */}
				<SubHeaderBar
					showBreadcrumbs={showBreadcrumbs}
					breadcrumbs={breadcrumbs}
					showLanguageSelect={showLanguageSelect}
					LinkComponent={LinkComponent}
				/>
			</header>
		</LanguageProvider>
	);
}
