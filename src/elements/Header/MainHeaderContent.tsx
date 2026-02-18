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
	doBerlinSearch?: boolean | undefined;
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
	doBerlinSearch,
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
		<div className="relative z-11 flex items-center justify-between bg-white px-4 py-[0rem] shadow-md lg:px-6 lg:py-[0.7rem]">
			{/* Site Title */}
			<a
				href={url}
				className="flex flex-col justify-center p-0 text-[15px] leading-[1.2] break-words md:text-base lg:p-[3px] lg:text-xl"
			>
				<span>{header}</span>
				<span className="block font-bold">{caption}</span>
			</a>

			{/* Action Buttons */}
			<div className="mx-[0.65rem] flex h-full flex-0 items-end space-x-[0.65rem] pt-[0.59rem] pb-[0.20rem] md:space-x-[1.05rem] md:pt-[0.69rem] md:pb-[0.22rem]">
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
							doBerlinSearch={doBerlinSearch}
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
