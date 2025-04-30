import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef, useState } from "react";
import ChevronDown from "@/assets/icons/chevron_down.svg?react";
import ChevronUp from "@/assets/icons/chevron_up.svg?react";
import { useLanguage, t } from "./LanguageProvider";
/**
 * Hook for closing dropdown when clicking outside
 */
function useCloseOnClickOutside(ref, setIsOpen) {
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setIsOpen]);
}
export function LanguageSelect({ className = "" }) {
    const [isOpen, setIsOpen] = useState(false);
    const languageSelectRef = useRef(null);
    const { currentLanguage, languages, translations, setLanguage } = useLanguage();
    useCloseOnClickOutside(languageSelectRef, setIsOpen);
    return (_jsxs("div", { className: `relative z-[10] text-black ${className}`, ref: languageSelectRef, children: [_jsxs("button", { className: "flex items-center", onClick: () => setIsOpen(!isOpen), "aria-label": t(isOpen ? "collapse" : "expand", translations), "aria-expanded": isOpen, children: [_jsx("span", { className: "flex size-6 items-center justify-center bg-berlin-pink text-[11px] font-bold", children: currentLanguage.toLowerCase() }), _jsx("span", { className: "pointer-events-none flex size-8 items-center justify-center", children: isOpen ? (_jsx(ChevronUp, { className: "text-berlin-green" })) : (_jsx(ChevronDown, { className: "text-berlin-green" })) })] }), _jsx("div", { className: `${isOpen ? "block" : "hidden"} absolute top-8 right-0 bg-white shadow-lg`, children: _jsx("ul", { children: languages.map((language) => (_jsx("li", { children: _jsxs("button", { className: "block flex w-full gap-2 px-2 py-1 text-base hover:bg-gray-100", onClick: () => {
                                setLanguage(language.code);
                                setIsOpen(false);
                            }, children: [_jsx("span", { className: "flex size-6 items-center justify-center bg-berlin-pink text-[11px] font-bold", children: language.code.toLowerCase() }), language.label] }) }, language.code))) }) })] }));
}
