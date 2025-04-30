import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const filterButtonVariants = cva("relative flex h-[43px] items-center justify-center border-2 border-black px-3 py-1 text-black opacity-100 hover:opacity-50", {
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
const FilterButton = ({ onClick, numActiveFilters, }) => {
    const Comp = "button";
    return (_jsx(_Fragment, { children: _jsxs(Comp, { className: cn(filterButtonVariants()), onClick: onClick, children: [_jsx("div", { className: "flex flex-row items-center gap-2", children: _jsx("div", { children: "Filter" }) }), numActiveFilters > 0 && (_jsx("div", { className: "absolute -top-3 -right-3 flex h-6 w-6 flex-row items-center justify-center rounded-full bg-berlin-green font-bold text-white", children: numActiveFilters }))] }) }));
};
export default FilterButton;
