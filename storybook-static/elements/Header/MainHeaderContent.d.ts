import { AccessibilityItem, MenuItem } from './types';
interface MainHeaderContentProps {
    header: string;
    caption: string;
    url: string;
    showSearchButton: boolean;
    onSearch: () => void;
    doBerlinSearch?: boolean | undefined;
    showMenuButton: boolean;
    menuItems: MenuItem[];
    onOpenMenu: () => void;
    accessibilityItems?: AccessibilityItem[];
}
export declare function MainHeaderContent({ header, caption, url, showSearchButton, onSearch, showMenuButton, menuItems, onOpenMenu, doBerlinSearch, accessibilityItems, }: MainHeaderContentProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MainHeaderContent.d.ts.map