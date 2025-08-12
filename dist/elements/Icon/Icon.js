import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { iconRegistry } from "./iconRegistry";
export function Icon({ name, className, "aria-label": ariaLabel, "aria-hidden": ariaHidden = true, }) {
    const IconComponent = iconRegistry[name];
    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }
    return (_jsx(IconComponent, { className: cn("inline-block", className), "aria-label": ariaLabel, "aria-hidden": ariaHidden }));
}
