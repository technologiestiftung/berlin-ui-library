"use server";
/* eslint-disable complexity */
import React, { useEffect, useRef, useState } from "react";
import { LogoBar } from "./LogoBar";
import { MainHeaderContent } from "./MainHeaderContent";
import { SubHeaderBar } from "./SubHeaderBar";
import { BreadcrumbItem, LinkComponentProps, MenuItem } from "./types";
import { Language } from "./LanguageProvider";
import { LanguageProvider } from "./LanguageProvider";

export interface HeaderProps extends LinkComponentProps {
	/**
	 * Header title text
	 */
	header?: string;
	/**
	 * Header subtitle text
	 */
	caption?: string;
	/**
	 * URL for the header link
	 */
	url?: string;
	/**
	 * URL for the logo link
	 */
	logoUrl?: string;
	/**
	 * Custom logo component (will be used instead of default Berlin logo if provided)
	 */
	logoComponent?: React.ReactNode;
	/**
	 * Breadcrumb items to display
	 */
	breadcrumbs?: BreadcrumbItem[];
	/**
	 * Whether to show the breadcrumbs section
	 */
	showBreadcrumbs?: boolean;
	/**
	 * Whether to show the language selector
	 */
	showLanguageSelect?: boolean;
	/**
	 * Current language code
	 */
	language?: string;
	/**
	 * Available languages
	 */
	languages?: Language[];
	/**
	 * JSON translation files keyed by language code
	 */
	translations?: Record<string, Record<string, string>>;
	/**
	 * Callback when language changes
	 */
	onLanguageChange?: (code: string) => void;
	/**
	 * Whether to show the search button
	 */
	showSearchButton?: boolean;
	/**
	 * Callback when search button is clicked
	 */
	onSearch?: () => void;
	/**
	 * Whether to show the menu button
	 */
	showMenuButton?: boolean;
	/**
	 * Menu items for the main menu
	 */
	menuItems?: MenuItem[];
	/**
	 * Callback when menu button is clicked
	 */
	onOpenMenu?: () => void;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

/**
 * Header component with integrated accessibility menu
 *
 * The Header component includes:
 * - Logo section
 * - Title and action buttons (search, menu, accessibility)
 * - Optional breadcrumbs and language selector
 * - Built-in accessibility menu drawer
 */
export function Header({
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
}: HeaderProps) {
	const [isSticky, setIsSticky] = useState(false);
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const headerElement = headerRef.current;

		if (headerElement) {
			// Add a small buffer to prevent flickering
			let timeoutId: ReturnType<typeof setTimeout> | null = null;
			const DEBOUNCE_TIME = 50; // Short debounce to avoid flickering
			let currentIsSticky = false; // Track current state to prevent unnecessary updates

			const handleScroll = () => {
				const scrollY = window.scrollY || window.pageYOffset;
				// Use a small positive threshold when scrolling down, and a zero threshold when scrolling up
				// This hysteresis prevents flickering at the boundary
				const scrollThreshold = currentIsSticky ? 0 : 2;

				const newIsSticky = scrollY > scrollThreshold;

				// Only update if state actually changed
				if (newIsSticky !== currentIsSticky) {
					currentIsSticky = newIsSticky;

					// Clear any pending timeout
					if (timeoutId) {
						clearTimeout(timeoutId);
					}

					// Set timeout to debounce rapid changes
					timeoutId = setTimeout(() => {
						setIsSticky(newIsSticky);
					}, DEBOUNCE_TIME);
				}
			};

			// Initial check
			handleScroll();

			// Add scroll event listener
			window.addEventListener("scroll", handleScroll, { passive: true });

			// Cleanup function
			return () => {
				if (timeoutId) {
					clearTimeout(timeoutId);
				}
				window.removeEventListener("scroll", handleScroll);
			};
		}

		return undefined;
	}, []);

	return (
		<LanguageProvider
			initialLanguage={language}
			languages={languages}
			translations={translations}
			onLanguageChange={onLanguageChange}
		>
			<header
				ref={headerRef}
				className={`sticky top-0 z-20 box-border leading-[1.22rem] ${className}`}
			>
				{/* Logo Bar */}
				<LogoBar
					logoUrl={logoUrl}
					logoComponent={logoComponent}
					isSticky={isSticky}
				/>

				{/* Main Header Content */}
				<MainHeaderContent
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
					isSticky={isSticky}
				/>
			</header>
		</LanguageProvider>
	);
}
