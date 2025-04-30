import React from "react";
export interface BreadcrumbItem {
    label: string;
    href: string;
}
export interface BreadcrumbsProps {
    /**
     * The items to display in the breadcrumbs
     */
    items: BreadcrumbItem[];
    /**
     * Optional custom link component that accepts href and children props
     * Useful for integrating with framework-specific routing like Next.js Link or React Router Link
     */
    LinkComponent?: React.ComponentType<{
        href: string;
        children: React.ReactNode;
    }>;
    /**
     * Additional CSS classes
     */
    className?: string;
}
export declare function Breadcrumbs({ items, LinkComponent, className, }: BreadcrumbsProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=Breadcrumbs.d.ts.map