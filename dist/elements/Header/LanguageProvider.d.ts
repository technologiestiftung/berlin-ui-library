import { default as React, ReactNode } from 'react';
export interface Language {
    code: string;
    label: string;
}
export type Translations = Record<string, string>;
interface LanguageContextType {
    currentLanguage: string;
    languages: Language[];
    translations: Translations;
    setLanguage: (code: string) => void;
}
export declare const useLanguage: () => LanguageContextType;
export interface LanguageProviderProps {
    children: ReactNode;
    initialLanguage?: string;
    languages?: Language[];
    translations?: Record<string, Translations>;
    onLanguageChange?: (code: string) => void;
}
export declare const LanguageProvider: React.FC<LanguageProviderProps>;
export declare const t: (key: string, translations: Translations) => string;
export {};
//# sourceMappingURL=LanguageProvider.d.ts.map