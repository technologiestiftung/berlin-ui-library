import { default as React } from '../../../node_modules/react';
interface LogoBarProps {
    /**
     * URL for the logo link
     */
    logoUrl?: string;
    /**
     * Custom logo component (will be used instead of default Berlin logo if provided)
     */
    logoComponent?: React.ReactNode;
    /**
     * Whether the LogoBar is in sticky state
     */
    isSticky?: boolean;
}
export declare function LogoBar({ logoUrl, logoComponent, isSticky, }: LogoBarProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LogoBar.d.ts.map