import { default as React } from 'react';
import { BreadcrumbItem, LinkComponentProps, MenuItem } from './types';
import { Language } from './LanguageProvider';
export interface HeaderClientProps extends LinkComponentProps {
    header?: string;
    caption?: string;
    url?: string;
    logoUrl?: string;
    logoComponent?: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    showBreadcrumbs?: boolean;
    showLanguageSelect?: boolean;
    language?: string;
    languages?: Language[];
    translations?: Record<string, Record<string, string>>;
    onLanguageChange?: (code: string) => void;
    showSearchButton?: boolean;
    onSearch?: () => void;
    showMenuButton?: boolean;
    menuItems?: MenuItem[];
    onOpenMenu?: () => void;
    className?: string;
}
/**
 * Client version of Header component with integrated accessibility menu
 * Use this version when you need client-side interactivity throughout the header
 */
export declare function HeaderClient({ header, caption, url, logoUrl, logoComponent, LinkComponent, breadcrumbs, showBreadcrumbs, showLanguageSelect, language, languages, translations, onLanguageChange, showSearchButton, onSearch, showMenuButton, menuItems, onOpenMenu, className, }: HeaderClientProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Header.client.d.ts.map