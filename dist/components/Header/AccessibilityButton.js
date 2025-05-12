import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AccessibilityIcon from "@/assets/icons/accessibility_icon.svg?react";
import { useLanguage, t } from "./LanguageProvider";
export function AccessibilityButton({ onOpenAccessibility, className = "", }) {
    const { translations } = useLanguage();
    const label = t("accessibility", translations);
    return (_jsxs("button", { className: `flex cursor-pointer flex-col items-center justify-between gap-1 text-[11px] leading-normal ${className}`, onClick: onOpenAccessibility, "aria-label": label, children: [_jsx(AccessibilityIcon, { className: "size-8" }), _jsx("span", { className: "whitespace-nowrap", children: label })] }));
}
