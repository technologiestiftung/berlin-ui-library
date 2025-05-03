import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
// Default languages
const defaultLanguages = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" },
];
// Default German translations
const defaultTranslations = {
    de: {
        accessibility: "Barrierefreiheit",
        menu: "Menü",
        search: "Suche",
        expand: "Erweitern",
        collapse: "Einklappen",
        closeMenu: "Menü schließen",
        accessibilityMenu: "Barrierefreiheit-Menü",
        "search.title": "Suche",
        "search.placeholder": "Suchbegriff",
        "search.ariaLabel": "Suche",
        "search.button": "Suchen",
        "search.submit": "Suchen",
        "search.results": "Suchergebnisse",
        "search.noResults": "Keine Ergebnisse gefunden",
        "accessibilityMenu.title": "Barrierefreiheit",
        "button.name.close": "Schließen",
        "accessibilityMenu.barrierefreiheit.question": "Informationen zur Barrierefreiheit:",
        "accessibilityMenu.barrierefreiheit": "Barrierefreiheitserklärung",
        "accessibilityMenu.contact.question": "Problem mit der Barrierefreiheit melden:",
        "accessibilityMenu.contact": "Kontakt",
        "accessibilityMenu.additionalInfo.question": "Weitere Informationen:",
        "accessibilityMenu.additionalInfo": "Kompetenzstelle für Barrierefreiheit",
    },
    en: {
        accessibility: "Accessibility",
        menu: "Menu",
        search: "Search",
        expand: "Expand",
        collapse: "Collapse",
        closeMenu: "Close menu",
        accessibilityMenu: "Accessibility menu",
        "search.title": "Search",
        "search.placeholder": "Search term",
        "search.ariaLabel": "Search",
        "search.button": "Search",
        "search.submit": "Search",
        "search.results": "Search results",
        "search.noResults": "No results found",
        "accessibilityMenu.title": "Accessibility",
        "button.name.close": "Close",
        "accessibilityMenu.barrierefreiheit.question": "Accessibility information:",
        "accessibilityMenu.barrierefreiheit": "Accessibility statement",
        "accessibilityMenu.contact.question": "Report an accessibility issue:",
        "accessibilityMenu.contact": "Contact",
        "accessibilityMenu.additionalInfo.question": "Additional information:",
        "accessibilityMenu.additionalInfo": "Competence center for accessibility",
    },
};
// Create the context
const LanguageContext = createContext(undefined);
// Hook for using the language context
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
// The provider component
export const LanguageProvider = ({ children, initialLanguage = "de", languages = defaultLanguages, translations = defaultTranslations, onLanguageChange, }) => {
    const [currentLanguage, setCurrentLang] = useState(initialLanguage);
    // Get the translations for the current language
    const getCurrentTranslations = () => {
        return translations[currentLanguage] || translations["de"] || {};
    };
    // Set language function
    const setLanguage = (code) => {
        setCurrentLang(code);
        if (onLanguageChange) {
            onLanguageChange(code);
        }
    };
    return (_jsx(LanguageContext.Provider, { value: {
            currentLanguage,
            languages,
            translations: getCurrentTranslations(),
            setLanguage,
        }, children: children }));
};
// Translation helper function
export const t = (key, translations) => {
    return translations[key] || key;
};
