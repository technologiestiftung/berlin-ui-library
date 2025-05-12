import { jsx as _jsx } from "react/jsx-runtime";
import { Breadcrumbs } from "./Breadcrumb";
const meta = {
    title: "Components/Breadcrumb",
    component: Breadcrumbs,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        items: [
            { label: "Home", href: "/" },
            { label: "Category", href: "/category" },
            { label: "Current Page", href: "/category/current" },
        ],
    },
};
export const SingleItem = {
    args: {
        items: [{ label: "Current Page", href: "/current" }],
    },
};
export const WithCustomLink = {
    render: () => {
        // Example of a custom link component
        const CustomLink = ({ href, children, }) => (_jsx("a", { href: href, style: { color: "#e40422" }, children: children }));
        return (_jsx(Breadcrumbs, { items: [
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Accessories", href: "/products/accessories" },
            ], LinkComponent: CustomLink }));
    },
};
export const WithCustomClass = {
    args: {
        items: [
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Web Development", href: "/services/web-development" },
        ],
        className: "bg-gray-100 p-4 rounded",
    },
};
