import SearchIcon from "@/assets/icons/search_icon.svg?react";
import { useLanguage, t } from "./LanguageProvider";

export interface SearchButtonProps {
	/**
	 * Function to handle search button click
	 */
	onOpenSearch: () => void;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

export function SearchButton({
	onOpenSearch,
	className = "",
}: SearchButtonProps) {
	const { translations } = useLanguage();
	const label = t("search", translations);

	return (
		<button
			className={`mb-[0.1rem] flex cursor-pointer flex-col items-center justify-between text-[11px] leading-normal ${className}`}
			onClick={onOpenSearch}
			aria-label={label}
		>
			<SearchIcon className="size-8" />
			<span className="text-[11px] whitespace-nowrap">{label}</span>
		</button>
	);
}
