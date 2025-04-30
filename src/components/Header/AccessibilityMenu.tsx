import { AccessibilityItem } from "./types";
import { Drawer, DrawerContent } from "../Drawer/Drawer";
import { useLanguage, t } from "./LanguageProvider";

export interface AccessibilityMenuProps {
	/**
	 * Whether the accessibility drawer is open
	 */
	isOpen: boolean;
	/**
	 * Function to close the accessibility drawer
	 */
	close: () => void;
	/**
	 * Accessibility items to display
	 */
	accessibilityItems?: AccessibilityItem[];
}

export function AccessibilityMenu({
	isOpen,
	close,
	accessibilityItems = [],
}: AccessibilityMenuProps) {
	const { translations } = useLanguage();

	// Default items if none are provided
	const defaultItems: AccessibilityItem[] = [
		{
			question: t("accessibilityMenu.barrierefreiheit.question", translations),
			label: t("accessibilityMenu.barrierefreiheit", translations),
			href: "/accessibility-statement/",
		},
		{
			question: t("accessibilityMenu.contact.question", translations),
			label: t("accessibilityMenu.contact", translations),
			href: "/accessibility-statement/#accessibility-contact",
		},
		{
			question: t("accessibilityMenu.additionalInfo.question", translations),
			label: t("accessibilityMenu.additionalInfo", translations),
			href: "https://www.berlin.de/moderne-verwaltung/barrierefreie-it/anlaufstellen/kompetenzstelle/artikel.988002.php",
			external: true,
		},
	];

	const items =
		accessibilityItems && accessibilityItems.length > 0
			? accessibilityItems
			: defaultItems;

	return (
		<Drawer open={isOpen} onOpenChange={(open) => !open && close()}>
			<DrawerContent className="flex flex-col gap-4 px-6 py-4 text-base">
				<div className="mt-4 mb-6 flex flex-row items-center justify-between">
					<p className="text-2xl font-bold">
						{t("accessibilityMenu.title", translations)}
					</p>
				</div>

				{items.map((item, index) => (
					<div key={index} className="mb-4">
						<p className="mb-1 font-bold">{item.question}</p>
						{item.external ? (
							<a
								className="text-link-blue transition-colors duration-200 hover:underline"
								href={item.href}
								target="_blank"
								rel="noreferrer"
							>
								{item.label}
							</a>
						) : (
							<a
								href={item.href}
								className="text-link-blue transition-colors duration-200 hover:underline"
							>
								{item.label}
							</a>
						)}
					</div>
				))}
			</DrawerContent>
		</Drawer>
	);
}
