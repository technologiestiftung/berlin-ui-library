"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { cn } from "@/lib/utils";
import SearchIcon from "@/assets/icons/search.svg?react";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg?react";
/**
 * SearchForm component for Berlin UI Library
 *
 * A search form with an input field and submit button styled according to Berlin design.
 */
export function SearchForm({ placeholder = "Suchbegriff", onSubmit, defaultValue = "", label = "Suchbegriff", submitLabel = "Suchen", className = "", value, onChange, }) {
    const [searchTerm, setSearchTerm] = useState(defaultValue);
    // Determine if component is controlled or uncontrolled
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : searchTerm;
    const handleInputChange = (e) => {
        if (isControlled) {
            onChange?.(e.target.value);
        }
        else {
            setSearchTerm(e.target.value);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(currentValue || "");
    };
    return (_jsx("form", { onSubmit: handleSubmit, className: cn("text-left", className), children: _jsx("div", { className: "searchform-slot", children: _jsxs("div", { className: "form-group", children: [_jsx("label", { className: "sr-only", htmlFor: "searchInput", children: label }), _jsxs("div", { className: "relative inline-flex w-full bg-white", children: [_jsxs("div", { className: "relative flex w-full items-center border border-black", children: [_jsx(SearchIcon, { className: "absolute left-3 h-5 w-5 fill-text-lightest", "aria-hidden": "true" }), _jsx("input", { type: "search", id: "searchInput", className: "h-[47px] w-full border-0 bg-transparent py-2 pr-14 pl-10 outline-none focus-visible:border-tabfocus focus-visible:ring-0 focus-visible:ring-offset-0", placeholder: placeholder, value: currentValue, onChange: handleInputChange })] }), _jsx("button", { className: "absolute top-0 right-0 flex h-full w-[47px] cursor-pointer items-center justify-center text-red", type: "submit", "aria-label": submitLabel, children: _jsx(ArrowRightIcon, { className: "h-7 w-7", "aria-hidden": "true" }) })] })] }) }) }));
}
