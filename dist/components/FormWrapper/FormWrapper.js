import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
/**
 * FormWrapper component for applying consistent styling to forms
 */
export function FormWrapper({ children, withBackground = true, padding = "p-6", className, }) {
    return (_jsx("div", { className: cn(withBackground && "bg-block-colored", padding, "w-full", className), children: children }));
}
