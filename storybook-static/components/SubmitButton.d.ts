import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const submitButtonVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function SubmitButton({ className, variant, children, asChild, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & // Use ButtonHTMLAttributes
VariantProps<typeof submitButtonVariants> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { SubmitButton, submitButtonVariants };
//# sourceMappingURL=SubmitButton.d.ts.map