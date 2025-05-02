import React, { createContext, useContext, useState, ReactNode } from "react";

// Language interface
export interface Language {
	code: string;
	label: string;
}

// Translations interface - simple key-value pairs
export type Translations = Record<string, string>;

// Context interface
interface LanguageContextType {
	currentLanguage: string;
	languages: Language[];
	translations: Translations;
	setLanguage: (code: string) => void;
}

// Default languages
const defaultLanguages: Language[] = [
	{ code: "de", label: "Deutsch" },
	{ code: "en", label: "English" },
];

// Default German translations
const defaultTranslations: Record<string, Translations> = {
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
		"accessibilityMenu.barrierefreiheit.question":
			"Informationen zur Barrierefreiheit:",
		"accessibilityMenu.barrierefreiheit": "Barrierefreiheitserklärung",
		"accessibilityMenu.contact.question":
			"Problem mit der Barrierefreiheit melden:",
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
const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

// Hook for using the language context
export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};

// Props for the provider
export interface LanguageProviderProps {
	children: ReactNode;
	initialLanguage?: string;
	languages?: Language[];
	translations?: Record<string, Translations>;
	onLanguageChange?: (code: string) => void;
}

// The provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
	children,
	initialLanguage = "de",
	languages = defaultLanguages,
	translations = defaultTranslations,
	onLanguageChange,
}) => {
	const [currentLanguage, setCurrentLang] = useState(initialLanguage);

	// Get the translations for the current language
	const getCurrentTranslations = (): Translations => {
		return translations[currentLanguage] || translations["de"] || {};
	};

	// Set language function
	const setLanguage = (code: string) => {
		setCurrentLang(code);
		if (onLanguageChange) {
			onLanguageChange(code);
		}
	};

	return (
		<LanguageContext.Provider
			value={{
				currentLanguage,
				languages,
				translations: getCurrentTranslations(),
				setLanguage,
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
};

// Translation helper function
export const t = (key: string, translations: Translations): string => {
	return translations[key] || key;
};
