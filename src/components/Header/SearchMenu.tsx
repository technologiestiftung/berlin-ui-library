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
}

export function SearchMenu({ isOpen, close, onSearch }: SearchMenuProps) {
	const { translations } = useLanguage();

	const handleSearch = (searchTerm: string) => {
		if (onSearch) {
			onSearch(searchTerm);
		}
		close();
	};

	return (
		<Drawer open={isOpen} onOpenChange={(open) => !open && close()}>
			<DrawerContent size="large" className="flex flex-col gap-4">
				<div className="flex flex-row justify-center">
					<div className="mt-[10vh] flex w-full flex-col gap-2 px-4 md:mt-[30vh] md:w-[50%]">
						<h1 className="font-bold">{t("search.title", translations)}</h1>
						<SearchForm
							placeholder={t("search.placeholder", translations)}
							onSubmit={handleSearch}
							className="w-full"
							label={t("search.ariaLabel", translations)}
							submitLabel={t("search.submit", translations)}
						/>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
