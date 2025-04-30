import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const backButtonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function BackButton({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof backButtonVariants> & {
    asChild?: boolean;
    title?: string;
    onClick?: () => void;
}): import("react/jsx-runtime").JSX.Element;
export { BackButton, backButtonVariants };
//# sourceMappingURL=BackButton.d.ts.map