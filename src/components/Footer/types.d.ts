import { ReactNode } from "react";

/**
 * Represents a link in a footer column
 */
export interface FooterLink {
	/**
	 * Text or translation key for the link
	 */
	label: string;

	/**
	 * URL for the link
	 */
	href: string;

	/**
	 * Optional icon to display with the link
	 */
	icon?: ReactNode;
}

/**
 * Represents a column in the footer with a title and links
 */
export interface FooterColumn {
	/**
	 * Title or translation key for the column
	 */
	title: string;

	/**
	 * Array of links to display in the column
	 */
	links: FooterLink[];

	/**
	 * Whether the column accordion is open by default on mobile (default: false)
	 */
	isDefaultOpen?: boolean;
}
