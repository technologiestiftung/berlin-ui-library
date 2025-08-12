import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Drawer, DrawerContent } from "../Drawer/Drawer";
import { useLanguage, t } from "./LanguageProvider";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
export function MenuDrawer({ isOpen, close, menuItems }) {
    const { translations } = useLanguage();
    const [openItems, setOpenItems] = useState({});
    const toggleItem = (itemId) => {
        setOpenItems((prevOpenItems) => ({
            ...prevOpenItems,
            [itemId]: !prevOpenItems[itemId],
        }));
    };
    const getMenuItemClassName = (level) => {
        if (level % 2 === 0 && level > 0) {
            return "bg-menu-background-dark pl-4";
        }
        else if (level % 2 === 1) {
            return "bg-menu-background pl-4";
        }
        return "border-t border-border-light";
    };
    // Recursive function to render menu items and their children
    const renderMenuItems = (items, level = 0, parentPath = "") => {
        return items.map((item, index) => {
            const itemId = `${parentPath}${item.label}-${index}`; // Simple unique ID
            const isItemOpen = !!openItems[itemId];
            const baseOuterDivStyling = getMenuItemClassName(level);
            const parentInteractiveDivClasses = [
                "flex h-[55px] items-center",
                // Shadow class removed from here
            ]
                .join(" ")
                .trim();
            const outerDivClasses = [
                baseOuterDivStyling,
                isItemOpen
                    ? "shadow-[0_7px_7px_rgba(150,150,150,0.1)] relative z-10" // Shadow applied to the outer div, primarily at the bottom
                    : "",
            ]
                .join(" ")
                .trim();
            return (_jsxs("div", { className: outerDivClasses, children: [" ", _jsxs("div", { className: parentInteractiveDivClasses, children: [item.icon && _jsx("span", { className: "mr-2", children: item.icon }), _jsx("a", { href: item.href, className: "m-[3px] flex w-full items-center px-[24px] py-[0.1rem] text-lg transition-colors duration-200 hover:underline", onClick: (e) => {
                                    if (item.href === "#" || item.href === "") {
                                        e.preventDefault();
                                        if (item.children && item.children.length > 0) {
                                            toggleItem(itemId);
                                        }
                                    }
                                    else if (item.children && item.children.length > 0) {
                                        // If it's a link but also has children, allow toggle without navigation for now
                                        // or decide on specific UX. For now, let's make the chevron toggle it.
                                    }
                                }, children: item.label }), item.children && item.children.length > 0 && (_jsx("div", { className: "mx-[3px] my-[0.5rem] cursor-pointer border-l border-black px-[0.7rem] pt-[0.3rem] pb-[0.4rem]", onClick: () => toggleItem(itemId), children: _jsx(ChevronDown, { className: `transform transition-transform duration-200 ${isItemOpen ? "rotate-180" : ""}` }) }))] }), isItemOpen && item.children && item.children.length > 0 && (_jsxs("div", { className: "flex flex-col", children: [" ", renderMenuItems(item.children, level + 1, `${itemId}-`)] }))] }, itemId));
        });
    };
    return (_jsx(Drawer, { open: isOpen, onOpenChange: (open) => !open && close(), children: _jsx(DrawerContent, { className: "flex flex-col gap-2", children: _jsxs("div", { className: "text-base", children: [_jsx("div", { className: "mb-5 flex flex-row items-center justify-between", children: _jsx("p", { className: "px-6 text-2xl font-bold", children: t("menu.title", translations) || "Menu" }) }), _jsx("div", { className: "flex flex-col gap-2", children: menuItems.length > 0 ? (renderMenuItems(menuItems)) : (_jsx("p", { children: t("menu.noItems", translations) || "No menu items available." })) })] }) }) }));
}
