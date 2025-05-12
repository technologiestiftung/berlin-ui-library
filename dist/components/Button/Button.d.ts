import { ButtonProps } from "./types";
declare const buttonVariants: (props?: ({
    variant?: "default" | "search" | "link" | "filter" | "close" | "play" | "download" | "light" | "white" | "fulltone" | "negative" | "colored" | "clean" | "addtocart" | "back" | "back-link" | "extern" | "light-fulltone" | "negative-light" | null | undefined;
    size?: "default" | "fullwidth" | "fullwidth-palm" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, booking, price, children, disabled, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants };
//# sourceMappingURL=Button.d.ts.map