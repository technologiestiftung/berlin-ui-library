// src/components/Header/MainHeaderContent.tsx
import { useState } from "react";
import { MenuButton } from "./MenuButton";
import { SearchButton } from "./SearchButton";
import { AccessibilityButton } from "./AccessibilityButton";
import { MenuItem } from "./types";
import { SearchMenu } from "./SearchMenu";
import { MenuDrawer } from "./MenuDrawer";
import { AccessibilityMenu } from "./AccessibilityMenu";

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

export function MainHeaderContent({
	header,
	caption,
	url,
	showSearchButton,
	onSearch,
	showMenuButton,
	menuItems,
	onOpenMenu,
}: MainHeaderContentProps) {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);

	const handleOpenSearch = () => {
		setIsSearchOpen(true);
		onSearch();
	};

	const handleCloseSearch = () => {
		setIsSearchOpen(false);
	};

	const handleSearch = (searchTerm: string) => {
		console.warn("Search term:", searchTerm);
		// Client can implement additional search logic through onSearch prop
	};

	const handleOpenMenu = () => {
		setIsMenuOpen(true);
		onOpenMenu();
	};

	const handleCloseMenu = () => {
		setIsMenuOpen(false);
	};

	const handleOpenAccessibility = () => {
		setIsAccessibilityOpen(true);
	};

	const handleCloseAccessibility = () => {
		setIsAccessibilityOpen(false);
	};

	return (
		<div className="flex items-center justify-between px-4 py-2 md:px-6">
			{/* Site Title */}
			<a
				href={url}
				className="flex h-[86px] flex-col justify-center px-4 text-base sm:text-[20px]"
			>
				<span>{header}</span>
				<span className="font-bold">{caption}</span>
			</a>

			{/* Action Buttons */}
			<div className="flex items-center gap-x-[30px]">
				<>
					<AccessibilityButton onOpenAccessibility={handleOpenAccessibility} />
					<AccessibilityMenu
						isOpen={isAccessibilityOpen}
						close={handleCloseAccessibility}
						accessibilityItems={[]}
					/>
				</>

				{showSearchButton && (
					<>
						<SearchButton onOpenSearch={handleOpenSearch} />
						<SearchMenu
							isOpen={isSearchOpen}
							close={handleCloseSearch}
							onSearch={handleSearch}
						/>
					</>
				)}

				{showMenuButton && (
					<>
						<MenuButton onOpenMenu={handleOpenMenu} />
						<MenuDrawer
							isOpen={isMenuOpen}
							close={handleCloseMenu}
							menuItems={menuItems}
						/>
					</>
				)}
			</div>
		</div>
	);
}
