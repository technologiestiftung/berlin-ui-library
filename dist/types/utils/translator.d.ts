type TranslationLookup = {
    [key: string]: {
        [key: string]: string;
    };
};
export interface TranslatorOptions {
    fallbackLanguage?: string;
}
export declare class Translator {
    private translations;
    private fallbackLanguage;
    constructor(translations?: TranslationLookup, options?: TranslatorOptions);
    /**
     * Add or update translations
     */
    addTranslations(newTranslations: TranslationLookup): void;
    /**
     * Get a translation for a key in the specified language
     */
    translate(key: string, language: string): string;
    /**
     * Create a translation function for a specific language
     */
    createTranslationFunction(language: string): (key: string) => string;
}
declare const defaultTranslator: Translator;
export { defaultTranslator };
//# sourceMappingURL=translator.d.ts.map