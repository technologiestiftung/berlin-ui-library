import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Drawer, DrawerContent } from "../Drawer/Drawer";
import { useLanguage, t } from "./LanguageProvider";
export function AccessibilityMenu({ isOpen, close, accessibilityItems = [], }) {
    const { translations } = useLanguage();
    // Default items if none are provided
    const defaultItems = [
        {
            question: t("accessibilityMenu.barrierefreiheit.question", translations),
            label: t("accessibilityMenu.barrierefreiheit", translations),
            href: "/accessibility-statement/",
        },
        {
            question: t("accessibilityMenu.contact.question", translations),
            label: t("accessibilityMenu.contact", translations),
            href: "/accessibility-statement/#accessibility-contact",
        },
        {
            question: t("accessibilityMenu.additionalInfo.question", translations),
            label: t("accessibilityMenu.additionalInfo", translations),
            href: "https://www.berlin.de/moderne-verwaltung/barrierefreie-it/anlaufstellen/kompetenzstelle/artikel.988002.php",
            external: true,
        },
    ];
    const items = accessibilityItems && accessibilityItems.length > 0
        ? accessibilityItems
        : defaultItems;
    return (_jsx(Drawer, { open: isOpen, onOpenChange: (open) => !open && close(), children: _jsxs(DrawerContent, { className: "flex flex-col gap-4 px-6 py-4 text-base", children: [_jsx("div", { className: "mt-4 mb-6 flex flex-row items-center justify-between", children: _jsx("p", { className: "text-2xl font-bold", children: t("accessibilityMenu.title", translations) }) }), items.map((item, index) => (_jsxs("div", { className: "mb-4", children: [_jsx("p", { className: "mb-1 font-bold", children: item.question }), item.external ? (_jsx("a", { className: "text-text-link transition-colors duration-200 hover:underline", href: item.href, target: "_blank", rel: "noreferrer", children: item.label })) : (_jsx("a", { href: item.href, className: "text-text-link transition-colors duration-200 hover:underline", children: item.label }))] }, index)))] }) }));
}
