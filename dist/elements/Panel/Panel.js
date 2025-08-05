import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import RightIcon from "../../assets/icons/right_icon.svg";
const variantStyles = {
    heavy: "p-[18px] bg-grey border border-grey",
    dark: "p-[18px] bg-black border-0 text-white",
    light: "p-[1.125em] bg-white border border-grey-dark",
    clean: "p-[1.125em] px-0 bg-transparent border border-transparent",
    bordered: "py-[1.125em] px-0 border border-grey-dark border-x-0 bg-transparent",
    colored: "p-[18px] bg-grey border border-grey text-black",
    boxed: "p-[1.125em] bg-white border border-black",
    white: "p-[1.125em] bg-white border border-white",
    hint: "mt-4 mb-4 ml-[18px] pl-3 relative font-bold",
};
const Panel = forwardRef(({ children, variant = "light", removeInnerPanels = false, footer, className, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn("panel", variantStyles[variant], removeInnerPanels && variant === "heavy"
            ? "panel--remove-inner-panels"
            : "", variant === "heavy" && "has-inner-panels", className), "data-variant": variant, ...props, children: [variant === "hint" && (_jsx("img", { src: RightIcon, alt: "Hint icon", className: "absolute top-0 left-[-18px] h-[22px] w-[22px] text-black" })), children, footer && (_jsx("div", { className: cn("panel__footer relative bottom-[-18px] -mx-[18px] mt-0 border-x-0 border-t border-b-0 p-[18px]", variant === "dark" && "text-white"), children: footer }))] }));
});
Panel.displayName = "Panel";
export { Panel };
