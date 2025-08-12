import { useLanguage, t } from "./LanguageProvider";
import AccessibilityIcon from "@/assets/icons/universal-access.svg?react";

export interface AccessibilityButtonProps {
	/**
	 * Function to handle accessibility button click
	 */
	onOpenAccessibility: () => void;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

export function AccessibilityButton({
	onOpenAccessibility,
	className = "",
}: AccessibilityButtonProps) {
	const { translations } = useLanguage();
	const label = t("accessibility", translations);

	return (
		<button
			className={`-mt-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] text-[11px] leading-normal ${className}`}
			onClick={onOpenAccessibility}
			aria-label={label}
		>
			<AccessibilityIcon className="size-8" />
			<span className="whitespace-nowrap">{label}</span>
		</button>
	);
}
