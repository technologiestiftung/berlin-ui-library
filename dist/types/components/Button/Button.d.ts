import { ButtonProps } from './types';
declare const buttonVariants: (props?: ({
    variant?: "default" | "search" | "link" | "filter" | "light" | "white" | "fulltone" | "negative" | "colored" | "clean" | "play" | "download" | "addtocart" | "close" | "back" | "back-link" | "extern" | "light-fulltone" | "negative-light" | null | undefined;
    size?: "default" | "fullwidth" | "fullwidth-palm" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, booking, price, children, disabled, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants };
//# sourceMappingURL=Button.d.ts.map