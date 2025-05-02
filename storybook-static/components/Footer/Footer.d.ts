import { default as React } from '../../../node_modules/react';
import { FooterColumn } from './types';
import { Language } from '../Header/LanguageProvider';
export interface FooterProps {
    /**
     * Footer columns data for links and navigation
     */
    footerColumns?: FooterColumn[];
    /**
     * HTML content for the Berlin official footer (will be rendered with dangerouslySetInnerHTML)
     */
    berlinFooter?: string;
    /**
     * Component to use for links in the footer
     */
    LinkComponent?: React.ComponentType<React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    }>;
    /**
     * Current language code
     */
    language?: string;
    /**
     * Available languages
     */
    languages?: Language[];
    /**
     * JSON translation files keyed by language code
     */
    translations?: Record<string, Record<string, string>>;
    /**
     * Callback when language changes
     */
    onLanguageChange?: (code: string) => void;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Texts for i18n (if not using translations system)
     */
    i18nTexts?: Record<string, string>;
    /**
     * Whether to show the scroll-to-top button
     */
    showScrollToTop?: boolean;
}
/**
 * Footer component for Berlin design system
 *
 * The Footer component includes:
 * - Navigation links organized in columns
 * - Responsive design for mobile (accordion) and md views
 * - Optional Berlin footer content section
 * - Scroll to top button
 */
export declare function Footer({ language, languages, translations, onLanguageChange, ...props }: FooterProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Footer.d.ts.map