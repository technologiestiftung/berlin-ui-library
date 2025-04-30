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
			className={`flex flex-col items-center gap-1 text-[11px] leading-3 ${className}`}
			onClick={onOpenAccessibility}
			aria-label={label}
		>
			<AccessibilityIcon />
			{label}
		</button>
	);
}
