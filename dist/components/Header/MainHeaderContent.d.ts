import { MenuItem } from './types';
interface MainHeaderContentProps {
    header: string;
    caption: string;
    url: string;
    showSearchButton: boolean;
    onSearch: () => void;
    showMenuButton: boolean;
    menuItems: MenuItem[];
    onOpenMenu: () => void;
}
/**
 * Server component wrapper for MainHeaderContent
 * This delegates interactive elements to the client component
 */
export declare function MainHeaderContent(props: MainHeaderContentProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MainHeaderContent.d.ts.map