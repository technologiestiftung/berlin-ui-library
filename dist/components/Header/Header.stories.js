import { jsx as _jsx } from "react/jsx-runtime";
import { Header } from "./Header";
const meta = {
    title: "Components/Header",
    component: Header,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};
export default meta;
// Example translations as JSON objects
const deTranslations = {
    accessibility: "Barrierefreiheit",
    menu: "Menü",
    search: "Suche",
    expand: "Erweitern",
    collapse: "Einklappen",
    "accessibilityMenu.title": "Barrierefreiheit",
    "button.name.close": "Schließen",
    "accessibilityMenu.barrierefreiheit.question": "Informationen zur Barrierefreiheit:",
    "accessibilityMenu.barrierefreiheit": "Barrierefreiheitserklärung",
    "accessibilityMenu.contact.question": "Problem mit der Barrierefreiheit melden:",
    "accessibilityMenu.contact": "Kontakt",
    "accessibilityMenu.additionalInfo.question": "Weitere Informationen:",
    "accessibilityMenu.additionalInfo": "Kompetenzstelle für Barrierefreiheit",
};
const enTranslations = {
    accessibility: "Accessibility",
    menu: "Menu",
    search: "Search",
    expand: "Expand",
    collapse: "Collapse",
    "accessibilityMenu.title": "Accessibility",
    "button.name.close": "Close",
    "accessibilityMenu.barrierefreiheit.question": "Accessibility information:",
    "accessibilityMenu.barrierefreiheit": "Accessibility statement",
    "accessibilityMenu.contact.question": "Report accessibility issue:",
    "accessibilityMenu.contact": "Contact",
    "accessibilityMenu.additionalInfo.question": "Additional information:",
    "accessibilityMenu.additionalInfo": "Competence center for accessibility",
};
export const Default = {
    args: {
        header: "Design System",
        caption: "Berlin.de",
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Components", href: "/components" },
            { label: "Header", href: "/components/header" },
        ],
        languages: [
            { code: "de", label: "Deutsch" },
            { code: "en", label: "English" },
        ],
        language: "de",
        translations: {
            de: deTranslations,
            en: enTranslations,
        },
        onOpenMenu: () => {
            console.warn("Menu opened");
        },
        onSearch: () => {
            console.warn("Search opened");
        },
        onLanguageChange: (code) => {
            console.warn(`Language changed to: ${code}`);
        },
    },
};
export const EnglishLanguage = {
    args: {
        ...Default.args,
        language: "en",
    },
};
export const TurkishLanguage = {
    args: {
        ...Default.args,
        language: "tr",
    },
};
export const CustomLogoAndLinks = {
    args: {
        ...Default.args,
        header: "With Custom Logo",
        logoComponent: (_jsx("div", { className: "flex h-8 items-center font-bold text-red-500", children: "CUSTOM LOGO" })),
        LinkComponent: ({ href, children }) => (_jsx("a", { href: href, className: "text-blue-500 hover:underline", children: children })),
    },
};
export const WithoutLanguageSelector = {
    args: {
        ...Default.args,
        showLanguageSelect: false,
    },
};
export const WithoutBreadcrumbs = {
    args: {
        ...Default.args,
        showBreadcrumbs: false,
    },
};
export const WithoutSearch = {
    args: {
        ...Default.args,
        showSearchButton: false,
    },
};
export const WithoutMenu = {
    args: {
        ...Default.args,
        showMenuButton: false,
    },
};
export const MinimalHeader = {
    args: {
        header: "Minimal Header",
        caption: "Berlin.de",
        showBreadcrumbs: false,
        showLanguageSelect: false,
        showSearchButton: false,
        showMenuButton: false,
    },
};
export const WithCustomAccessibilityItems = {
    args: {
        ...Default.args,
    },
    parameters: {
        docs: {
            description: {
                story: "This example shows how to customize the accessibility menu items. The menu opens when clicking the accessibility button in the header.",
            },
        },
    },
};
