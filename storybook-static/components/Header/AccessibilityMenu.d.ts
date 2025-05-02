import { AccessibilityItem } from './types';
export interface AccessibilityMenuProps {
    /**
     * Whether the accessibility drawer is open
     */
    isOpen: boolean;
    /**
     * Function to close the accessibility drawer
     */
    close: () => void;
    /**
     * Accessibility items to display
     */
    accessibilityItems?: AccessibilityItem[];
}
export declare function AccessibilityMenu({ isOpen, close, accessibilityItems, }: AccessibilityMenuProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AccessibilityMenu.d.ts.map