import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BarsIcon from "@/assets/icons/bars_icon.svg?react";
import { useLanguage, t } from "./LanguageProvider";
export function MenuButton({ onOpenMenu, className = "" }) {
    const { translations } = useLanguage();
    const label = t("menu", translations);
    return (_jsxs("button", { className: `flex flex-col items-center gap-1 text-[11px] leading-3 ${className}`, onClick: onOpenMenu, "aria-label": label, children: [_jsx(BarsIcon, {}), label] }));
}
