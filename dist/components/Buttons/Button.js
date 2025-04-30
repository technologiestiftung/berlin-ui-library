import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
const buttonVariants = cva("flex items-center justify-center px-4 py-2 font-(--font-custom) text-black", {
    variants: {
        variant: {
            default: "border-2 border-black text-black opacity-100 hover:opacity-50",
            link: "cursor-pointer text-link-blue hover:underline",
        },
        size: {
            default: "h-[43px] w-fit",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
function Button({ className, variant, size, icon, onClick, asChild = false, children, ...props }) {
    const Comp = asChild ? Slot : "button";
    return (_jsxs(Comp, { className: cn(buttonVariants({ variant, size, className })), ...props, onClick: onClick, children: [icon && _jsx("span", { className: "mr-2", children: icon }), children] }));
}
export { Button, buttonVariants };
