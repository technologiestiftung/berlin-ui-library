import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
const Breadcrumb = React.forwardRef(({ ...props }, ref) => _jsx("nav", { ref: ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = React.forwardRef(({ className, ...props }, ref) => (_jsx("ol", { ref: ref, className: cn("flex flex-wrap items-center gap-[0.3em] text-sm break-words text-muted-foreground sm:gap-[0.3em]", className), ...props })));
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = React.forwardRef(({ className, ...props }, ref) => (_jsx("li", { ref: ref, className: cn("inline-flex items-center gap-[0.3em]", className), ...props })));
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = React.forwardRef(({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (_jsx(Comp, { ref: ref, className: cn("transition-colors hover:text-foreground", className), ...props }));
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = React.forwardRef(({ className, ...props }, ref) => (_jsx("span", { ref: ref, role: "link", "aria-disabled": "true", "aria-current": "page", className: cn("font-normal text-foreground", className), ...props })));
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({ children, className, ...props }) => (_jsx("li", { role: "presentation", "aria-hidden": "true", className: cn("[&>svg]:h-3.5 [&>svg]:w-3.5", className), ...props, children: children ?? _jsx(ChevronRight, {}) }));
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
const BreadcrumbEllipsis = ({ className, ...props }) => (_jsxs("span", { role: "presentation", "aria-hidden": "true", className: cn("flex h-9 w-9 items-center justify-center", className), ...props, children: [_jsx(MoreHorizontal, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "More" })] }));
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
const Breadcrumbs = ({ items, LinkComponent, className = "", }) => {
    if (!items.length) {
        return null;
    }
    return (_jsx(Breadcrumb, { className: cn(`py-2 text-sm`, className), children: _jsx(BreadcrumbList, { className: "flex flex-wrap items-center", children: items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (_jsxs(React.Fragment, { children: [_jsx(BreadcrumbItem, { children: isLast ? (_jsx(BreadcrumbPage, { children: item.label })) : (_jsx(BreadcrumbLink, { href: item.href, asChild: !!LinkComponent, className: "hover:underline", children: LinkComponent ? (_jsx(LinkComponent, { href: item.href, children: item.label })) : (item.label) })) }), !isLast && (_jsx(BreadcrumbSeparator, { className: "text-gray-400", children: _jsx(ChevronRight, { className: isLast ? "text-black" : "text-berlin-grey-darker" }) }))] }, `${item.href}-${index}`));
            }) }) }));
};
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis, Breadcrumbs, };
