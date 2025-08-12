import { IconName } from "./iconRegistry";
export type { IconName };
export interface IconProps {
    /**
     * The icon name
     */
    name: IconName;
    /**
     * Additional CSS classes for styling the icon (use size-* for dimensions, text-* for colors)
     */
    className?: string;
    /**
     * Accessible label for screen readers
     */
    "aria-label"?: string;
    /**
     * Whether to hide the icon from screen readers (default: true)
     */
    "aria-hidden"?: boolean;
}
export declare function Icon({ name, className, "aria-label": ariaLabel, "aria-hidden": ariaHidden, }: IconProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=Icon.d.ts.map