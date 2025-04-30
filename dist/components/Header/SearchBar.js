import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Input } from "../Input";
import { useLanguage, t } from "./LanguageProvider";
export function SearchBar({ onSearch, className = "" }) {
    const [searchTerm, setSearchTerm] = useState("");
    const { translations } = useLanguage();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch && searchTerm.trim()) {
            onSearch(searchTerm);
        }
    };
    return (_jsx("form", { onSubmit: handleSubmit, className: `w-full ${className}`, children: _jsxs("div", { className: "relative", children: [_jsx(Input, { type: "search", placeholder: t("search.placeholder", translations) || "Suche...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full", "aria-label": t("search.ariaLabel", translations) || "Search" }), _jsx("button", { type: "submit", className: "absolute top-1/2 right-4 -translate-y-1/2 bg-black px-4 py-1 text-sm text-white", disabled: !searchTerm.trim(), children: t("search.button", translations) || "Suchen" })] }) }));
}
