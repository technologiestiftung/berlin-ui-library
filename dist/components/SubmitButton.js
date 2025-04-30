import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import ArrowRightIcon from "../assets/icons/arrow-right-icon";
const submitButtonVariants = cva(
// Base styles for the button container
"inline-flex h-[47px] w-full items-center justify-between rounded-none border-2 border-black bg-white text-sm font-medium whitespace-nowrap text-black transition-[color,box-shadow] outline-none focus-visible:border-focus-blue focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            // Only one variant needed for this specific style
            default: "", // Base styles handle everything for this variant
        },
        // Size is fixed, so no size variants needed
    },
    defaultVariants: {
        variant: "default",
    },
});
function SubmitButton({ className, variant, children, asChild = false, ...props }) {
    const Comp = asChild ? Slot : "button";
    return (_jsxs(Comp, { className: cn(submitButtonVariants({ variant, className })), ...props, children: [_jsx("span", { className: "pl-4", children: children }), _jsx("div", { className: "flex h-full items-center justify-center bg-[#D12121] px-3", children: _jsx("div", { className: "size-4 text-white", children: _jsx(ArrowRightIcon, { color: "white" }) }) })] }));
}
export { SubmitButton, submitButtonVariants };
