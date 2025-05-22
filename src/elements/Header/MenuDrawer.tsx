import { MenuItem } from "./types";
import { Drawer, DrawerContent } from "../Drawer/Drawer";
import { useLanguage, t } from "./LanguageProvider";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export interface MenuDrawerProps {
	/**
	 * Whether the menu drawer is open
	 */
	isOpen: boolean;
	/**
	 * Function to close the menu drawer
	 */
	close: () => void;
	/**
	 * Menu items to display
	 */
	menuItems: MenuItem[];
}

export function MenuDrawer({ isOpen, close, menuItems }: MenuDrawerProps) {
	const { translations } = useLanguage();
	const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

	const toggleItem = (itemId: string) => {
		setOpenItems((prevOpenItems) => ({
			...prevOpenItems,
			[itemId]: !prevOpenItems[itemId],
		}));
	};

	const getMenuItemClassName = (level: number): string => {
		if (level % 2 === 0 && level > 0) {
			return "bg-menu-background-dark pl-4";
		} else if (level % 2 === 1) {
			return "bg-menu-background pl-4";
		}
		return "border-t border-border-light";
	};

	// Recursive function to render menu items and their children
	const renderMenuItems = (items: MenuItem[], level = 0, parentPath = "") => {
		return items.map((item, index) => {
			const itemId = `${parentPath}${item.label}-${index}`; // Simple unique ID
			const isItemOpen = !!openItems[itemId];

			const baseOuterDivStyling = getMenuItemClassName(level);
			const parentInteractiveDivClasses = [
				"flex h-[55px] items-center",
				// Shadow class removed from here
			]
				.join(" ")
				.trim();

			const outerDivClasses = [
				baseOuterDivStyling,
				isItemOpen
					? "shadow-[0_7px_7px_rgba(150,150,150,0.1)] relative z-10" // Shadow applied to the outer div, primarily at the bottom
					: "",
			]
				.join(" ")
				.trim();

			return (
				<div key={itemId} className={outerDivClasses}>
					{" "}
					{/* outerDiv now has conditional bottom shadow */}
					<div className={parentInteractiveDivClasses}>
						{item.icon && <span className="mr-2">{item.icon}</span>}
						<a
							href={item.href}
							className="m-[3px] flex w-full items-center px-[24px] py-[0.1rem] text-lg transition-colors duration-200 hover:underline"
							onClick={(e) => {
								if (item.href === "#" || item.href === "") {
									e.preventDefault();
									if (item.children && item.children.length > 0) {
										toggleItem(itemId);
									}
								} else if (item.children && item.children.length > 0) {
									// If it's a link but also has children, allow toggle without navigation for now
									// or decide on specific UX. For now, let's make the chevron toggle it.
								}
							}}
						>
							{item.label}
						</a>
						{item.children && item.children.length > 0 && (
							<div
								className="mx-[3px] my-[0.5rem] cursor-pointer border-l border-black px-[0.7rem] pt-[0.3rem] pb-[0.4rem]"
								onClick={() => toggleItem(itemId)}
							>
								<ChevronDown
									className={`transform transition-transform duration-200 ${
										isItemOpen ? "rotate-180" : ""
									}`}
								/>
							</div>
						)}
					</div>
					{isItemOpen && item.children && item.children.length > 0 && (
						<div className="flex flex-col">
							{" "}
							{renderMenuItems(item.children, level + 1, `${itemId}-`)}
						</div>
					)}
				</div>
			);
		});
	};

	return (
		<Drawer open={isOpen} onOpenChange={(open) => !open && close()}>
			<DrawerContent className="flex flex-col gap-2">
				<div className="text-base">
					<div className="mb-5 flex flex-row items-center justify-between">
						<p className="px-6 text-2xl font-bold">
							{t("menu.title", translations) || "Menu"}
						</p>
					</div>

					<div className="flex flex-col gap-2">
						{menuItems.length > 0 ? (
							renderMenuItems(menuItems)
						) : (
							<p>
								{t("menu.noItems", translations) || "No menu items available."}
							</p>
						)}
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
