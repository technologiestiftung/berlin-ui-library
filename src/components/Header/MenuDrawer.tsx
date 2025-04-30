import { MenuItem } from "./types";
import { Drawer, DrawerContent } from "../Drawer/Drawer";
import { useLanguage, t } from "./LanguageProvider";

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

	// Recursive function to render menu items and their children
	const renderMenuItems = (items: MenuItem[], level = 0) => {
		return items.map((item, index) => (
			<div key={index} className={`mb-3 ${level > 0 ? "ml-4" : ""}`}>
				<div className="flex items-center">
					{item.icon && <span className="mr-2">{item.icon}</span>}
					<a
						href={item.href}
						className="flex w-full items-center py-2 text-lg font-bold transition-colors duration-200 hover:underline"
						onClick={(e) => {
							if (item.href === "#" || item.href === "") {
								e.preventDefault();
							}
						}}
					>
						{item.label}
					</a>
				</div>
				{item.children && item.children.length > 0 && (
					<div className="mt-2">
						{renderMenuItems(item.children, level + 1)}
					</div>
				)}
			</div>
		));
	};

	return (
		<Drawer open={isOpen} onOpenChange={(open) => !open && close()}>
			<DrawerContent className="flex flex-col gap-4">
				<div className="px-6 py-4 text-base">
					<div className="mt-4 mb-6 flex flex-row items-center justify-between">
						<p className="text-2xl font-bold">
							{t("menu.title", translations) || "Menu"}
						</p>
					</div>

					<div className="mt-4">
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
