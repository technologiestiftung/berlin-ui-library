import { jsx as _jsx } from "react/jsx-runtime";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const copyToClipboardButtonVariants = cva("flex h-[43px] w-fit items-center justify-center border-2 border-black px-4 py-2 text-black opacity-100 hover:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-white",
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
function CopyToClipboardButton({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? Slot : "button";
    return (_jsx(Comp, { className: cn(copyToClipboardButtonVariants({ variant, size, className })), ...props, onClick: props.onClick, children: _jsx("span", { className: "flex flex-row items-center gap-1", children: "Copy Address" }) }));
}
export { CopyToClipboardButton, copyToClipboardButtonVariants };
