import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const buttonVariants: (props?: ({
    variant?: "default" | "search" | "link" | "filter" | "light" | "white" | "fulltone" | "negative" | "colored" | "clean" | "play" | "download" | "addtocart" | "close" | "extern" | "light-fulltone" | "negative-light" | null | undefined;
    size?: "default" | "fullwidth" | "fullwidth-palm" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    booking?: boolean;
    price?: string;
}
declare function Button({ className, variant, size, asChild, booking, price, children, disabled, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants };
//# sourceMappingURL=Button.d.ts.map