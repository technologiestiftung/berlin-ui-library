import { SearchIconLarge } from "@/assets/icons/search-icon-large";
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
			className={`flex flex-col items-center gap-1 text-[11px] leading-3 ${className}`}
			onClick={onOpenSearch}
			aria-label={label}
		>
			<SearchIconLarge />
			{label}
		</button>
	);
}
