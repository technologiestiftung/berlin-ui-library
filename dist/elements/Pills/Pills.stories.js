import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Pill, FilterPillGroup } from "./index";
import { useState } from "react";
const meta = {
    title: "Elements/Pill",
    component: Pill,
    tags: ["autodocs"],
    args: {
        children: "Pill",
    },
    parameters: {
        layout: "centered",
    },
};
export default meta;
export const Default = {
    args: {
        children: "Default Pill",
        variant: "default",
    },
};
export const Error = {
    args: {
        children: "Error Pill",
        variant: "error",
    },
};
export const Success = {
    args: {
        children: "Success Pill",
        variant: "success",
    },
};
export const Info = {
    args: {
        children: "Info Pill",
        variant: "info",
    },
};
export const Message = {
    args: {
        children: "Message Pill",
        variant: "message",
    },
};
export const Filter = {
    args: {
        children: "Filter Pill",
        variant: "filter",
    },
};
export const FilterActive = {
    args: {
        children: "Active Filter Pill",
        variant: "filter",
        active: true,
    },
};
export const FilterToggle = {
    render: () => {
        // Using React hooks in Storybook render function
        const [active, setActive] = React.useState(false);
        return (_jsx(Pill, { variant: "filter", active: active, onToggle: () => setActive(!active), children: active ? "Active Filter" : "Inactive Filter" }));
    },
};
export const Inverted = {
    args: {
        children: "Inverted Pill",
        variant: "default",
        inverted: true,
    },
};
export const ErrorInverted = {
    args: {
        children: "Error Inverted Pill",
        variant: "error",
        inverted: true,
    },
};
export const BigPill = {
    args: {
        children: "Big Pill",
        variant: "default",
        size: "big",
    },
};
export const WithIcon = {
    render: () => (_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsxs(Pill, { variant: "default", children: [_jsx("span", { children: "With Icon" }), _jsx("i", { className: "fa fa-check", "aria-hidden": "true", children: "\u2713" })] }), _jsxs(Pill, { variant: "error", children: [_jsx("i", { className: "fa fa-exclamation-circle", "aria-hidden": "true", children: "!" }), _jsx("span", { children: "Error with Icon" })] }), _jsxs(Pill, { variant: "success", children: [_jsx("span", { children: "Success" }), _jsx("i", { className: "fa fa-check", "aria-hidden": "true", children: "\u2713" })] })] })),
};
export const BuiltInIcons = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx("h3", { className: "text-lg font-bold", children: "Default Size" }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Pill, { variant: "info", children: "Info with Icon" }), _jsx(Pill, { variant: "message", children: "Message with Icon" }), _jsx(Pill, { variant: "error", children: "Error with Icon" }), _jsx(Pill, { variant: "success", children: "Success with Icon" })] }), _jsx("h3", { className: "text-lg font-bold", children: "Inverted Variants" }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Pill, { variant: "info", inverted: true, children: "Info Inverted" }), _jsx(Pill, { variant: "message", inverted: true, children: "Message Inverted" }), _jsx(Pill, { variant: "error", inverted: true, children: "Error Inverted" }), _jsx(Pill, { variant: "success", inverted: true, children: "Success Inverted" })] }), _jsx("h3", { className: "text-lg font-bold", children: "Big Size" }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Pill, { variant: "info", size: "big", children: "Big Info" }), _jsx(Pill, { variant: "message", size: "big", children: "Big Message" }), _jsx(Pill, { variant: "error", size: "big", children: "Big Error" }), _jsx(Pill, { variant: "success", size: "big", children: "Big Success" })] })] })),
};
export const WithButton = {
    render: () => (_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsxs(Pill, { variant: "default", children: [_jsx("span", { children: "Closable" }), _jsx("button", { onClick: () => alert("Close clicked"), children: "\u00D7" })] }), _jsxs(Pill, { variant: "info", className: "!gap-1", children: [_jsx("span", { children: "Custom Info Button" }), _jsx("button", { onClick: () => alert("Info action clicked"), children: "\u24D8" })] })] })),
};
export const AllVariants = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Pill, { variant: "default", children: "Default" }), _jsx(Pill, { variant: "error", children: "Error" }), _jsx(Pill, { variant: "success", children: "Success" }), _jsx(Pill, { variant: "info", children: "Info" }), _jsx(Pill, { variant: "message", children: "Message" }), _jsx(Pill, { variant: "filter", children: "Filter" }), _jsx(Pill, { variant: "filter", active: true, children: "Active Filter" })] }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Pill, { variant: "default", inverted: true, children: "Default Inverted" }), _jsx(Pill, { variant: "error", inverted: true, children: "Error Inverted" }), _jsx(Pill, { variant: "success", inverted: true, children: "Success Inverted" }), _jsx(Pill, { variant: "info", inverted: true, children: "Info Inverted" }), _jsx(Pill, { variant: "message", inverted: true, children: "Message Inverted" })] }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Pill, { variant: "default", size: "big", children: "Big Default" }), _jsx(Pill, { variant: "error", size: "big", children: "Big Error" }), _jsx(Pill, { variant: "success", size: "big", children: "Big Success" })] })] })),
};
export const FilterPillGroupExample = {
    render: () => {
        const [activeFilters, setActiveFilters] = useState([]);
        const handleFilterToggle = (value) => {
            setActiveFilters((prev) => prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]);
        };
        return (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("div", { children: [_jsxs("h3", { className: "mb-2 text-lg font-bold", children: ["Active filters: ", activeFilters.join(", ") || "None"] }), _jsxs(FilterPillGroup, { activeValues: activeFilters, onValueToggle: handleFilterToggle, children: [_jsx(Pill, { variant: "filter", value: "Red", children: "Red" }), _jsx(Pill, { variant: "filter", value: "Green", children: "Green" }), _jsx(Pill, { variant: "filter", value: "Blue", children: "Blue" }), _jsx(Pill, { variant: "filter", value: "Yellow", children: "Yellow" }), _jsx(Pill, { variant: "filter", value: "Purple", children: "Purple" })] })] }), _jsxs("div", { className: "mt-4", children: [_jsx("h3", { className: "mb-2 text-lg font-bold", children: "Big Filter Pills" }), _jsxs(FilterPillGroup, { activeValues: activeFilters, onValueToggle: handleFilterToggle, size: "big", children: [_jsx(Pill, { variant: "filter", value: "Category 1", children: "Category 1" }), _jsx(Pill, { variant: "filter", value: "Category 2", children: "Category 2" }), _jsx(Pill, { variant: "filter", value: "Category 3", children: "Category 3" })] })] })] }));
    },
};
