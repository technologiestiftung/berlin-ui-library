import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Drawer, DrawerContent } from "../Drawer/Drawer";
import { useLanguage, t } from "./LanguageProvider";
export function MenuDrawer({ isOpen, close, menuItems }) {
    const { translations } = useLanguage();
    // Recursive function to render menu items and their children
    const renderMenuItems = (items, level = 0) => {
        return items.map((item, index) => (_jsxs("div", { className: `mb-3 ${level > 0 ? "ml-4" : ""}`, children: [_jsxs("div", { className: "flex items-center", children: [item.icon && _jsx("span", { className: "mr-2", children: item.icon }), _jsx("a", { href: item.href, className: "flex w-full items-center py-2 text-lg font-bold transition-colors duration-200 hover:underline", onClick: (e) => {
                                if (item.href === "#" || item.href === "") {
                                    e.preventDefault();
                                }
                            }, children: item.label })] }), item.children && item.children.length > 0 && (_jsx("div", { className: "mt-2", children: renderMenuItems(item.children, level + 1) }))] }, index)));
    };
    return (_jsx(Drawer, { open: isOpen, onOpenChange: (open) => !open && close(), children: _jsx(DrawerContent, { className: "flex flex-col gap-4", children: _jsxs("div", { className: "px-6 py-4 text-base", children: [_jsx("div", { className: "mt-4 mb-6 flex flex-row items-center justify-between", children: _jsx("p", { className: "text-2xl font-bold", children: t("menu.title", translations) || "Menu" }) }), _jsx("div", { className: "mt-4", children: menuItems.length > 0 ? (renderMenuItems(menuItems)) : (_jsx("p", { children: t("menu.noItems", translations) || "No menu items available." })) })] }) }) }));
}
