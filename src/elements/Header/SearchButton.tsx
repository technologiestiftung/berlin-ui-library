import SearchIcon from "@/assets/icons/search.svg?react";
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
			className={`-mt-[0.05rem] -ml-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] pr-[0.05rem] text-[11px] leading-normal ${className}`}
			onClick={onOpenSearch}
			aria-label={label}
		>
			<SearchIcon className="size-8" />
			<span className="text-[11px] whitespace-nowrap">{label}</span>
		</button>
	);
}
