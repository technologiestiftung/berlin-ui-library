import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Header/SubHeaderBar.tsx
import { LanguageSelect } from "./LanguageSelect";
import { Breadcrumbs } from "../Breadcrumb/Breadcrumb";
export function SubHeaderBar({ showBreadcrumbs, breadcrumbs, showLanguageSelect, LinkComponent, }) {
    // Render only if at least one section is shown
    if (!showBreadcrumbs && !showLanguageSelect) {
        return null;
    }
    return (_jsx("div", { className: "bg-block-colored px-4 shadow-inner lg:px-0", children: _jsxs("div", { className: "mx-auto flex max-w-[980px] justify-between", children: [showBreadcrumbs && (_jsx(Breadcrumbs, { items: breadcrumbs, LinkComponent: LinkComponent })), showLanguageSelect && _jsx(LanguageSelect, {})] }) }));
}
