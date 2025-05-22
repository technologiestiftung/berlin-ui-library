import * as React from "react";
declare const Breadcrumb: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    separator?: React.ReactNode;
} & React.RefAttributes<HTMLElement>>;
declare const BreadcrumbList: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
declare const BreadcrumbLink: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    asChild?: boolean;
} & React.RefAttributes<HTMLAnchorElement>>;
declare const BreadcrumbPage: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React.ComponentProps<"span">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const BreadcrumbEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export interface BreadcrumbItemProps {
    label: string;
    href: string;
}
export interface BreadcrumbsProps {
    /**
     * The items to display in the breadcrumbs
     */
    items: BreadcrumbItemProps[];
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
declare const Breadcrumbs: ({ items, LinkComponent, className, }: BreadcrumbsProps) => import("react/jsx-runtime").JSX.Element | null;
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis, Breadcrumbs, };
//# sourceMappingURL=Breadcrumb.d.ts.map