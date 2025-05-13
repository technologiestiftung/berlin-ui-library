import BarsIcon from "@/assets/icons/bars_icon.svg?react";
import { useLanguage, t } from "./LanguageProvider";

export interface MenuButtonProps {
	/**
	 * Function to open the menu
	 */
	onOpenMenu: () => void;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

export function MenuButton({ onOpenMenu, className = "" }: MenuButtonProps) {
	const { translations } = useLanguage();
	const label = t("menu", translations);

	return (
		<button
			className={`mb-[0.1rem] flex cursor-pointer flex-col items-center justify-between text-[11px] leading-normal ${className}`}
			onClick={onOpenMenu}
			aria-label={label}
		>
			<BarsIcon className="h-8" />
			<span className="whitespace-nowrap">{label}</span>
		</button>
	);
}
