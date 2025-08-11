import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const inputVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const Input: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & {
    invalid?: boolean;
}, "ref"> & React.RefAttributes<HTMLInputElement>>;
export { Input, inputVariants };
//# sourceMappingURL=Input.d.ts.map