import AccessibilityIcon from "@/assets/icons/accessibility_icon.svg?react";
import { useLanguage, t } from "./LanguageProvider";

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
			className={`flex cursor-pointer flex-col items-center justify-between gap-[0.2rem] font-sans text-[11px] leading-normal ${className}`}
			onClick={onOpenAccessibility}
			aria-label={label}
		>
			<AccessibilityIcon className="size-8" />
			<span className="whitespace-nowrap">{label}</span>
		</button>
	);
}
