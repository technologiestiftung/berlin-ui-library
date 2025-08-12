import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
export function ListItem({ children, className, ...props }) {
    return (_jsx("li", { className: cn("mb-2 break-words", className), ...props, children: children }));
}
export function List({ variant = "unordered", children, className, ...props }) {
    if (variant === "ordered") {
        return (_jsx("ol", { className: cn("mb-[25px] mt-0 list-outside pl-[10px]", "[&>li]:ml-[0.7em] [&>li]:mb-2 [&>li]:break-words", "[&>li>ol]:mt-2 [&>li>ol]:mb-2 [&>li>ul]:mt-2 [&>li>ul]:mb-2", className), ...props, children: children }));
    }
    return (_jsx("ul", { className: cn("mb-[25px] mt-0 list-disc pl-[1.1em]", "[&>li]:mb-2 [&>li]:break-words", "[&>li::marker]:text-red [&>li::marker]:text-[17px] [&>li::marker]:leading-none", "[&>li>ul]:mt-2 [&>li>ul]:mb-2 [&>li>ol]:mt-2 [&>li>ol]:mb-2", className), ...props, children: children }));
}
