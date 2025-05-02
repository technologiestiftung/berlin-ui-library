"use client";

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
			className={`flex flex-col items-center gap-1 text-[11px] leading-3 ${className}`}
			onClick={onOpenMenu}
			aria-label={label}
		>
			<BarsIcon />
			{label}
		</button>
	);
}
