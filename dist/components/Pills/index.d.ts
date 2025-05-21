import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const pillVariants: (props?: ({
    variant?: "default" | "filter" | "error" | "message" | "success" | "info" | null | undefined;
    inverted?: boolean | null | undefined;
    size?: "default" | "big" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
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
    size?: "default" | "big";
}
declare const FilterPillGroup: React.ForwardRefExoticComponent<FilterPillGroupProps & React.RefAttributes<HTMLDivElement>>;
export { Pill, pillVariants, FilterPillGroup };
//# sourceMappingURL=index.d.ts.map