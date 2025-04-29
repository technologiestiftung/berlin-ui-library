import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const copyToClipboardButtonVariants: (props?: ({
    variant?: "default" | null | undefined;
    size?: "default" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function CopyToClipboardButton({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof copyToClipboardButtonVariants> & {
    asChild?: boolean;
    onClick: () => void;
}): import("react/jsx-runtime").JSX.Element;
export { CopyToClipboardButton, copyToClipboardButtonVariants };
//# sourceMappingURL=CopyToClipboardButton.d.ts.map