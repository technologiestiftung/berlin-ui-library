import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SearchBar } from "./SearchBar";
import { useLanguage, t } from "./LanguageProvider";
import { Drawer, DrawerContent } from "../Drawer/Drawer";
export function SearchMenu({ isOpen, close, onSearch }) {
    const { translations } = useLanguage();
    const handleSearch = (searchTerm) => {
        if (onSearch) {
            onSearch(searchTerm);
        }
        close();
    };
    return (_jsx(Drawer, { open: isOpen, onOpenChange: (open) => !open && close(), children: _jsx(DrawerContent, { size: "large", className: "flex flex-col gap-4", children: _jsx("div", { className: "flex flex-row justify-center", children: _jsxs("div", { className: "mt-[10vh] flex w-full flex-col gap-2 px-4 md:mt-[30vh] md:w-[50%]", children: [_jsx("h1", { className: "font-bold", children: t("search.title", translations) || "Suche auf der Internetseite" }), _jsx(SearchBar, { onSearch: handleSearch })] }) }) }) }));
}
