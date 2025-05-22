import { ReactNode } from 'react';
interface FormWrapperProps {
    /**
     * The form content
     */
    children: ReactNode;
    /**
     * Whether the form should have a background color (bg-block-colored)
     */
    withBackground?: boolean;
    /**
     * Padding for the form
     */
    padding?: string;
    /**
     * Additional CSS classes
     */
    className?: string;
}
/**
 * FormWrapper component for applying consistent styling to forms
 */
export declare function FormWrapper({ children, withBackground, padding, className, }: FormWrapperProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FormWrapper.d.ts.map