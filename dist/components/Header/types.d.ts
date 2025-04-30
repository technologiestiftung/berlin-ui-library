import { default as React } from 'react';
export interface MenuItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
    children?: MenuItem[];
}
export interface AccessibilityItem {
    question: string;
    label: string;
    href: string;
    external?: boolean;
}
export interface BreadcrumbItem {
    label: string;
    href: string;
}
/**
 * Interface for components that support custom link components
 */
export interface LinkComponentProps {
    /**
     * Optional custom Link component that accepts href and children props
     * Useful for integrating with framework-specific routing like Next.js Link or React Router Link
     */
    LinkComponent?: React.ComponentType<{
        href: string;
        children: React.ReactNode;
    }>;
}
//# sourceMappingURL=types.d.ts.map