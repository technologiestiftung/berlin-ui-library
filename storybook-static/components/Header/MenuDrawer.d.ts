import { MenuItem } from './types';
export interface MenuDrawerProps {
    /**
     * Whether the menu drawer is open
     */
    isOpen: boolean;
    /**
     * Function to close the menu drawer
     */
    close: () => void;
    /**
     * Menu items to display
     */
    menuItems: MenuItem[];
}
export declare function MenuDrawer({ isOpen, close, menuItems }: MenuDrawerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=MenuDrawer.d.ts.map