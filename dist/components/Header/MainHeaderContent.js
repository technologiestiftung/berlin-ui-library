import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// src/components/Header/MainHeaderContent.tsx
import { useState } from "react";
import { MenuButton } from "./MenuButton";
import { SearchButton } from "./SearchButton";
import { AccessibilityButton } from "./AccessibilityButton";
import { SearchMenu } from "./SearchMenu";
import { MenuDrawer } from "./MenuDrawer";
import { AccessibilityMenu } from "./AccessibilityMenu";
export function MainHeaderContent({ header, caption, url, showSearchButton, onSearch, showMenuButton, menuItems, onOpenMenu, }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
    const handleOpenSearch = () => {
        setIsSearchOpen(true);
        onSearch();
    };
    const handleCloseSearch = () => {
        setIsSearchOpen(false);
    };
    const handleSearch = (searchTerm) => {
        console.warn("Search term:", searchTerm);
        // Client can implement additional search logic through onSearch prop
    };
    const handleOpenMenu = () => {
        setIsMenuOpen(true);
        onOpenMenu();
    };
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };
    const handleOpenAccessibility = () => {
        setIsAccessibilityOpen(true);
    };
    const handleCloseAccessibility = () => {
        setIsAccessibilityOpen(false);
    };
    return (_jsxs("div", { className: "flex items-center justify-between px-4 py-1 md:px-6", children: [_jsxs("a", { href: url, className: "flex h-[86px] flex-col justify-center text-base md:text-[20px]", children: [_jsx("span", { children: header }), _jsx("span", { className: "font-bold", children: caption })] }), _jsxs("div", { className: "mx-4 flex items-center space-x-3", children: [_jsxs(_Fragment, { children: [_jsx(AccessibilityButton, { onOpenAccessibility: handleOpenAccessibility }), _jsx(AccessibilityMenu, { isOpen: isAccessibilityOpen, close: handleCloseAccessibility, accessibilityItems: [] })] }), showSearchButton && (_jsxs(_Fragment, { children: [_jsx(SearchButton, { onOpenSearch: handleOpenSearch }), _jsx(SearchMenu, { isOpen: isSearchOpen, close: handleCloseSearch, onSearch: handleSearch })] })), showMenuButton && (_jsxs(_Fragment, { children: [_jsx(MenuButton, { onOpenMenu: handleOpenMenu }), _jsx(MenuDrawer, { isOpen: isMenuOpen, close: handleCloseMenu, menuItems: menuItems })] }))] })] }));
}
