import { MenuItem } from "./types";
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
export declare function MainHeaderContent({ header, caption, url, showSearchButton, onSearch, showMenuButton, menuItems, onOpenMenu, }: MainHeaderContentProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MainHeaderContent.d.ts.map