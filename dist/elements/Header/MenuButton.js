import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BarsIcon from "@/assets/icons/bars.svg?react";
import { useLanguage, t } from "./LanguageProvider";
export function MenuButton({ onOpenMenu, className = "" }) {
    const { translations } = useLanguage();
    const label = t("menu", translations);
    return (_jsxs("button", { className: `-mt-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] text-[11px] leading-normal ${className}`, onClick: onOpenMenu, "aria-label": label, children: [_jsx(BarsIcon, { className: "h-8" }), _jsx("span", { className: "-mr-[0.05rem] whitespace-nowrap", children: label })] }));
}
