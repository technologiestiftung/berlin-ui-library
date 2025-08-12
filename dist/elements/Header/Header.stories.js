import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from "./Header";
const meta = {
    title: "Elements/Header",
    component: Header,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};
export default meta;
// Example translations as JSON objects
const deTranslations = {
    accessibility: "Barrierefrei",
    menu: "Menü",
    search: "Suche",
    expand: "Erweitern",
    collapse: "Einklappen",
    "search.title": "Suche",
    "search.placeholder": "Suchbegriff",
    "search.ariaLabel": "Suche",
    "search.button": "Suchen",
    "search.submit": "Suchen",
    "accessibilityMenu.title": "Barrierefreiheit",
    "button.name.close": "Schließen",
    "accessibilityMenu.barrierefreiheit.question": "Wie barrierefrei ist diese Webseite?",
    "accessibilityMenu.barrierefreiheit": "Erklärung zur Barrierefreiheit",
    "accessibilityMenu.contact.question": "Haben Sie Anmerkungen oder Fragen zur Barrierefreiheit dieser Webseite?",
    "accessibilityMenu.contact": "Kontakt zur Ansprechperson",
    "accessibilityMenu.additionalInfo.question": "Wo gibt es zusätzliche Informationen zur Barrierefreiheit im Land Berlin?",
    "accessibilityMenu.additionalInfo": "Barrierefreie Informations- und Kommunikationstechnik (IKT)",
};
const enTranslations = {
    accessibility: "Accessibility",
    menu: "Menu",
    search: "Search",
    expand: "Expand",
    collapse: "Collapse",
    "search.title": "Search",
    "search.placeholder": "Search term",
    "search.ariaLabel": "Search",
    "search.button": "Search",
    "search.submit": "Search",
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
        header: "Senatsverwaltung für",
        caption: "Mobilität, Verkehr, Klimaschutz und Umwelt",
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Components", href: "/components" },
            { label: "Header", href: "/components/header" },
        ],
        languages: [
            { code: "de", label: "Deutsch" },
            { code: "en", label: "English" },
        ],
        menuItems: [
            { label: "Item 1", href: "/item1" },
            { label: "Item 2", href: "/item2" },
            {
                label: "Item 3",
                href: "/item3",
                children: [
                    { label: "Subitem 1", href: "/item3/subitem1" },
                    { label: "Subitem 2", href: "/item3/subitem2" },
                    {
                        label: "Subitem 3",
                        href: "/item3/subitem3",
                        children: [
                            { label: "Subitem 1", href: "/item3/subitem1" },
                            { label: "Subitem 2", href: "/item3/subitem2" },
                            { label: "Subitem 1", href: "/item3/subitem1" },
                            { label: "Subitem 2", href: "/item3/subitem2" },
                        ],
                    },
                    { label: "Item 4", href: "/item4" },
                ],
            },
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
export const ScrollableContent = {
    args: {
        ...Default.args,
    },
    render: (args) => (_jsxs("div", { className: "h-full", children: [_jsx(Header, { ...args }), _jsxs("div", { className: "p-4", children: [_jsx("h2", { className: "mb-4 text-2xl font-bold", children: "Scroll Test for Sticky LogoBar" }), _jsx("p", { className: "mb-4", children: "Scroll down to see the LogoBar collapse to a thin line (3px height) with a dark gray background. The logo will fade out as you scroll." }), _jsxs("div", { className: "mb-4 bg-gray-100 p-4", children: [_jsx("p", { children: _jsx("strong", { children: "Expected Behavior:" }) }), _jsxs("ul", { className: "list-disc pl-8", children: [_jsx("li", { children: "Initial state: LogoBar is 44px tall with white background" }), _jsx("li", { children: "When scrolling: LogoBar collapses to 3px height" }), _jsx("li", { children: "Background color changes to dark gray" }), _jsx("li", { children: "Logo fades out with a smooth transition" })] })] }), Array.from({ length: 30 }, (_, i) => (_jsxs("p", { className: `mb-4 p-2 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`, children: ["This is scrollable content (row ", i + 1, "). Continue scrolling to test the sticky behavior of the LogoBar."] }, i)))] })] })),
    parameters: {
        docs: {
            description: {
                story: "This story provides scrollable content to test the sticky behavior of the LogoBar component. As you scroll down, the LogoBar will collapse to a thin line and change its background color. The logo will fade out during this transition.",
            },
        },
    },
};
