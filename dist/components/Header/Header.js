import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx(LanguageProvider, { initialLanguage: language, languages: languages, translations: translations, onLanguageChange: onLanguageChange, children: _jsxs("header", { className: `sticky top-0 z-[20] bg-white text-xl leading-[122.2%] tracking-[0.3px] ${className}`, children: [_jsx(LogoBar, { logoUrl: logoUrl, logoComponent: logoComponent }), _jsx(MainHeaderContent, { header: header, caption: caption, url: url, showSearchButton: showSearchButton, onSearch: onSearch, showMenuButton: showMenuButton, menuItems: menuItems, onOpenMenu: onOpenMenu }), _jsx(SubHeaderBar, { showBreadcrumbs: showBreadcrumbs, breadcrumbs: breadcrumbs, showLanguageSelect: showLanguageSelect, LinkComponent: LinkComponent })] }) }));
}
