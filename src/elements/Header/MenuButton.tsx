import BarsIcon from "@/assets/icons/bars.svg?react";
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
			className={`-mt-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] text-[11px] leading-normal ${className}`}
			onClick={onOpenMenu}
			aria-label={label}
		>
			<BarsIcon className="h-8" />
			<span className="-mr-[0.05rem] whitespace-nowrap">{label}</span>
		</button>
	);
}
