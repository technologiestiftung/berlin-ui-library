import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SearchIcon from "@/assets/icons/search.svg?react";
import { useLanguage, t } from "./LanguageProvider";
export function SearchButton({ onOpenSearch, className = "", }) {
    const { translations } = useLanguage();
    const label = t("search", translations);
    return (_jsxs("button", { className: `-mt-[0.05rem] -ml-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] pr-[0.05rem] text-[11px] leading-normal ${className}`, onClick: onOpenSearch, "aria-label": label, children: [_jsx(SearchIcon, { className: "size-8" }), _jsx("span", { className: "text-[11px] whitespace-nowrap", children: label })] }));
}
