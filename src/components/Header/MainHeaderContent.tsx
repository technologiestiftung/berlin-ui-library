// src/components/Header/MainHeaderContent.tsx
import { MenuItem } from "./types";
import { MainHeaderContentClient } from "./MainHeaderContent.client";

interface MainHeaderContentProps {
	header: string;
	caption: string;
	url: string;
	showSearchButton: boolean;
	onSearch: () => void;
	showMenuButton: boolean;
	menuItems: MenuItem[];
	onOpenMenu: () => void;
}

/**
 * Server component wrapper for MainHeaderContent
 * This delegates interactive elements to the client component
 */
export function MainHeaderContent(props: MainHeaderContentProps) {
	return <MainHeaderContentClient {...props} />;
}
