import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Breadcrumbs({ items, LinkComponent, className = "", }) {
    if (!items.length) {
        return null;
    }
    // Default link component is a regular anchor
    const Link = LinkComponent || (({ href, children }) => _jsx("a", { href: href, children: children }));
    return (_jsx("nav", { "aria-label": "Breadcrumb", className: `py-2 ${className} text-sm`, children: _jsx("ol", { className: "flex flex-wrap items-center", children: items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (_jsxs("li", { className: "flex items-center", children: [index > 0 && (_jsx("span", { className: "mx-2 text-gray-400", "aria-hidden": "true", children: "/" })), isLast ? (_jsx("span", { "aria-current": "page", className: "font-semibold", children: item.label })) : (_jsx(Link, { href: item.href, children: _jsx("span", { className: "hover:underline", children: item.label }) }))] }, `${item.href}-${index}`));
            }) }) }));
}
