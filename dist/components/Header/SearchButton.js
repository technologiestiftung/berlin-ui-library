import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SearchIcon from "@/assets/icons/search_icon.svg?react";
import { useLanguage, t } from "./LanguageProvider";
export function SearchButton({ onOpenSearch, className = "", }) {
    const { translations } = useLanguage();
    const label = t("search", translations);
    return (_jsxs("button", { className: `flex cursor-pointer flex-col items-center justify-between gap-1 text-[11px] leading-normal ${className}`, onClick: onOpenSearch, "aria-label": label, children: [_jsx(SearchIcon, { className: "size-8" }), _jsx("span", { className: "whitespace-nowrap", children: label })] }));
}
