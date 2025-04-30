type TranslationLookup = {
	[key: string]: {
		[key: string]: string;
	};
};

export interface TranslatorOptions {
	fallbackLanguage?: string;
}

export class Translator {
	private translations: TranslationLookup;
	private fallbackLanguage: string;

	constructor(
		translations: TranslationLookup = {},
		options: TranslatorOptions = {},
	) {
		this.translations = translations;
		this.fallbackLanguage = options.fallbackLanguage || "de";
	}

	/**
	 * Add or update translations
	 */
	addTranslations(newTranslations: TranslationLookup): void {
		this.translations = {
			...this.translations,
			...newTranslations,
		};
	}

	/**
	 * Get a translation for a key in the specified language
	 */
	translate(key: string, language: string): string {
		// Check if translation exists for the requested language
		if (this.translations[language] && this.translations[language][key]) {
			return this.translations[language][key];
		}

		// Fall back to default language
		if (
			this.translations[this.fallbackLanguage] &&
			this.translations[this.fallbackLanguage][key]
		) {
			return this.translations[this.fallbackLanguage][key];
		}

		// Return the key as a last resort
		return key;
	}

	/**
	 * Create a translation function for a specific language
	 */
	createTranslationFunction(language: string) {
		return (key: string): string => this.translate(key, language);
	}
}

// Default translation instance
const defaultTranslator = new Translator({
	de: {
		"header.accessibility": "Barrierefreiheit",
		"header.menu": "Menü",
		"header.search": "Suche",
		"header.expand": "Erweitern",
		"header.collapse": "Einklappen",
		"header.closeMenu": "Menü schließen",
		"header.accessibilityMenu": "Barrierefreiheit-Menü",
	},
	en: {
		"header.accessibility": "Accessibility",
		"header.menu": "Menu",
		"header.search": "Search",
		"header.expand": "Expand",
		"header.collapse": "Collapse",
		"header.closeMenu": "Close menu",
		"header.accessibilityMenu": "Accessibility menu",
	},
});

export { defaultTranslator };
