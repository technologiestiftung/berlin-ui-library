import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Header/SubHeaderBar.tsx
import { LanguageSelect } from "./LanguageSelect";
import { Breadcrumbs } from "../Breadcrumb/Breadcrumb";
export function SubHeaderBar({ showBreadcrumbs, breadcrumbs, showLanguageSelect, LinkComponent, isSticky = false, }) {
    // Render only if at least one section is shown
    if (!showBreadcrumbs && !showLanguageSelect) {
        return null;
    }
    return (_jsx("div", { className: `relative z-10 bg-block-colored px-4 lg:px-0 ${isSticky ? "-translate-y-64 opacity-0" : "translate-y-0 opacity-100"} motion-safe:transition-all motion-safe:duration-100 motion-safe:ease-in-out`, children: _jsxs("div", { className: "mx-auto flex max-w-[61.25rem] justify-between", children: [showBreadcrumbs && (_jsx(Breadcrumbs, { items: breadcrumbs, LinkComponent: LinkComponent })), showLanguageSelect && _jsx(LanguageSelect, {})] }) }));
}
