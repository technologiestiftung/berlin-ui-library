import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const pillVariants: (props?: ({
    variant?: "default" | "filter" | "error" | "message" | "success" | "info" | "filter-outline" | null | undefined;
    inverted?: boolean | null | undefined;
    size?: "default" | "md" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface PillProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof pillVariants> {
    /**
     * Whether the pill is active (primarily used with filter variant)
     */
    active?: boolean;
    /**
     * Function called when the pill is toggled (for filter variant)
     */
    onToggle?: () => void;
    /**
     * Value of the pill (used for filter variant in FilterPillGroup)
     */
    value?: string;
    /**
     * Whether to show the icon (applies to all variants that have icons)
     */
    showIcon?: boolean;
}
declare const Pill: React.ForwardRefExoticComponent<PillProps & React.RefAttributes<HTMLDivElement>>;
export interface FilterPillGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The currently active filter values
     */
    activeValues: string[];
    /**
     * Callback when a filter value is toggled
     */
    onValueToggle: (value: string) => void;
    /**
     * Size variant for all pills in the group
     */
    size?: "default" | "md" | "lg" | "xl";
    /**
     * Whether to show icons for all pills in the group
     */
    showIcon?: boolean;
}
declare const FilterPillGroup: React.ForwardRefExoticComponent<FilterPillGroupProps & React.RefAttributes<HTMLDivElement>>;
export { Pill, pillVariants, FilterPillGroup };
//# sourceMappingURL=Pills.d.ts.map