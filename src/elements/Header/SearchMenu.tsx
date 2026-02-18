import { useLanguage, t } from "./LanguageProvider";
import { Drawer, DrawerContent } from "../Drawer/Drawer";
import { SearchForm } from "../SearchForm";

export interface SearchMenuProps {
	/**
	 * Whether the search drawer is open
	 */
	isOpen: boolean;
	/**
	 * Function to close the search drawer
	 */
	close: () => void;
	/**
	 * Function called when search is submitted
	 */
	onSearch?: (searchTerm: string) => void;
	/**
	 * Whether to perform a search on berlin.de instead of using the onSearch callback
	 */
	doBerlinSearch: boolean | undefined;
}

export function SearchMenu({
	isOpen,
	close,
	onSearch,
	doBerlinSearch,
}: SearchMenuProps) {
	const { translations } = useLanguage();

	const handleSearch = (searchTerm: string) => {
		if (doBerlinSearch) {
			close();
			return window.open(
				`https://www.berlin.de/suche/?q=${encodeURIComponent(searchTerm)}`,
				"_blank",
			);
		}
		if (onSearch) {
			onSearch(searchTerm);
		}
		close();
	};

	return (
		<Drawer open={isOpen} onOpenChange={(open) => !open && close()}>
			<DrawerContent size="large" className="flex flex-col gap-4">
				<div className="flex flex-row justify-center">
					<div className="mt-[10vh] flex w-full flex-col gap-2 px-4 lg:mt-[30vh] lg:w-[50%]">
						<h1 className="font-bold">{t("search.title", translations)}</h1>
						<SearchForm
							placeholder={t("search.placeholder", translations)}
							onSubmit={handleSearch}
							className="w-full"
							label={t("search.ariaLabel", translations)}
							submitLabel={t("search.submit", translations)}
						/>
						{doBerlinSearch && (
							<p className="mt-1 text-sm text-gray-500">
								{t("search.berlinSearchInfo", translations)}
							</p>
						)}
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
