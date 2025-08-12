"use server";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable complexity */
import { useEffect, useRef, useState } from "react";
import { LogoBar } from "./LogoBar";
import { MainHeaderContent } from "./MainHeaderContent";
import { SubHeaderBar } from "./SubHeaderBar";
import { LanguageProvider } from "./LanguageProvider";
/**
 * Header component with integrated accessibility menu
 *
 * The Header component includes:
 * - Logo section
 * - Title and action buttons (search, menu, accessibility)
 * - Optional breadcrumbs and language selector
 * - Built-in accessibility menu drawer
 */
export function Header({ header = "Design System", caption = "Berlin.de", url = "/", logoUrl = "https://www.berlin.de", logoComponent, LinkComponent, breadcrumbs = [], showBreadcrumbs = true, showLanguageSelect = true, language = "de", languages = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" },
], translations, onLanguageChange = () => { }, showSearchButton = true, onSearch = () => { }, showMenuButton = true, menuItems = [], onOpenMenu = () => { }, className = "", }) {
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);
    useEffect(() => {
        const headerElement = headerRef.current;
        if (headerElement) {
            // Add a small buffer to prevent flickering
            let timeoutId = null;
            const DEBOUNCE_TIME = 50; // Short debounce to avoid flickering
            let currentIsSticky = false; // Track current state to prevent unnecessary updates
            const handleScroll = () => {
                const scrollY = window.scrollY || window.pageYOffset;
                // Use a small positive threshold when scrolling down, and a zero threshold when scrolling up
                // This hysteresis prevents flickering at the boundary
                const scrollThreshold = currentIsSticky ? 0 : 2;
                const newIsSticky = scrollY > scrollThreshold;
                // Only update if state actually changed
                if (newIsSticky !== currentIsSticky) {
                    currentIsSticky = newIsSticky;
                    // Clear any pending timeout
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                    }
                    // Set timeout to debounce rapid changes
                    timeoutId = setTimeout(() => {
                        setIsSticky(newIsSticky);
                    }, DEBOUNCE_TIME);
                }
            };
            // Initial check
            handleScroll();
            // Add scroll event listener
            window.addEventListener("scroll", handleScroll, { passive: true });
            // Cleanup function
            return () => {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                window.removeEventListener("scroll", handleScroll);
            };
        }
        return undefined;
    }, []);
    return (_jsx(LanguageProvider, { initialLanguage: language, languages: languages, translations: translations, onLanguageChange: onLanguageChange, children: _jsxs("header", { ref: headerRef, className: `sticky top-0 z-20 box-border leading-[1.22rem] ${className}`, children: [_jsx(LogoBar, { logoUrl: logoUrl, logoComponent: logoComponent, isSticky: isSticky }), _jsx(MainHeaderContent, { header: header, caption: caption, url: url, showSearchButton: showSearchButton, onSearch: onSearch, showMenuButton: showMenuButton, menuItems: menuItems, onOpenMenu: onOpenMenu }), _jsx(SubHeaderBar, { showBreadcrumbs: showBreadcrumbs, breadcrumbs: breadcrumbs, showLanguageSelect: showLanguageSelect, LinkComponent: LinkComponent, isSticky: isSticky })] }) }));
}
