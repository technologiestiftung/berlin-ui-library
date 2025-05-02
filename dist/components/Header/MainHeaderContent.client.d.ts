import { MenuItem } from './types';
export interface MainHeaderContentClientProps {
    header: string;
    caption: string;
    url: string;
    showSearchButton: boolean;
    onSearch: () => void;
    showMenuButton: boolean;
    menuItems: MenuItem[];
    onOpenMenu: () => void;
}
export declare function MainHeaderContentClient({ header, caption, url, showSearchButton, onSearch, showMenuButton, menuItems, onOpenMenu, }: MainHeaderContentClientProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=MainHeaderContent.client.d.ts.map