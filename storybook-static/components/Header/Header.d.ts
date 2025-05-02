import { default as React } from '../../../node_modules/react';
import { BreadcrumbItem, LinkComponentProps, MenuItem } from './types';
import { Language } from './LanguageProvider';
export interface HeaderProps extends LinkComponentProps {
    /**
     * Header title text
     */
    header?: string;
    /**
     * Header subtitle text
     */
    caption?: string;
    /**
     * URL for the header link
     */
    url?: string;
    /**
     * URL for the logo link
     */
    logoUrl?: string;
    /**
     * Custom logo component (will be used instead of default Berlin logo if provided)
     */
    logoComponent?: React.ReactNode;
    /**
     * Breadcrumb items to display
     */
    breadcrumbs?: BreadcrumbItem[];
    /**
     * Whether to show the breadcrumbs section
     */
    showBreadcrumbs?: boolean;
    /**
     * Whether to show the language selector
     */
    showLanguageSelect?: boolean;
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
     * Whether to show the search button
     */
    showSearchButton?: boolean;
    /**
     * Callback when search button is clicked
     */
    onSearch?: () => void;
    /**
     * Whether to show the menu button
     */
    showMenuButton?: boolean;
    /**
     * Menu items for the main menu
     */
    menuItems?: MenuItem[];
    /**
     * Callback when menu button is clicked
     */
    onOpenMenu?: () => void;
    /**
     * Additional CSS classes
     */
    className?: string;
}
/**
 * Header component with integrated accessibility menu
 *
 * The Header component includes:
 * - Logo section
 * - Title and action buttons (search, menu, accessibility)
 * - Optional breadcrumbs and language selector
 * - Built-in accessibility menu drawer
 */
export declare function Header({ header, caption, url, logoUrl, logoComponent, LinkComponent, breadcrumbs, showBreadcrumbs, showLanguageSelect, language, languages, translations, onLanguageChange, showSearchButton, onSearch, showMenuButton, menuItems, onOpenMenu, className, }: HeaderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Header.d.ts.map