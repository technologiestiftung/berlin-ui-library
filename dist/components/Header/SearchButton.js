import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SearchIconLarge } from "@/assets/icons/search-icon-large";
import { useLanguage, t } from "./LanguageProvider";
export function SearchButton({ onOpenSearch, className = "", }) {
    const { translations } = useLanguage();
    const label = t("search", translations);
    return (_jsxs("button", { className: `flex flex-col items-center gap-1 text-[11px] leading-3 ${className}`, onClick: onOpenSearch, "aria-label": label, children: [_jsx(SearchIconLarge, {}), label] }));
}
