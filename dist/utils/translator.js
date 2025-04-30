export class Translator {
    constructor(translations = {}, options = {}) {
        Object.defineProperty(this, "translations", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fallbackLanguage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.translations = translations;
        this.fallbackLanguage = options.fallbackLanguage || "de";
    }
    /**
     * Add or update translations
     */
    addTranslations(newTranslations) {
        this.translations = {
            ...this.translations,
            ...newTranslations,
        };
    }
    /**
     * Get a translation for a key in the specified language
     */
    translate(key, language) {
        // Check if translation exists for the requested language
        if (this.translations[language] && this.translations[language][key]) {
            return this.translations[language][key];
        }
        // Fall back to default language
        if (this.translations[this.fallbackLanguage] &&
            this.translations[this.fallbackLanguage][key]) {
            return this.translations[this.fallbackLanguage][key];
        }
        // Return the key as a last resort
        return key;
    }
    /**
     * Create a translation function for a specific language
     */
    createTranslationFunction(language) {
        return (key) => this.translate(key, language);
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
