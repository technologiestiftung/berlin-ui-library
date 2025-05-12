import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Toggle } from "./Toggle";
import { Check, Menu, BellRing, Italic, Bold, Underline } from "lucide-react";
const meta = {
    title: "Components/Toggle",
    component: Toggle,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;
export const Default = {
    args: {
        "aria-label": "Toggle bold",
        children: _jsx(Bold, {}),
    },
};
export const WithText = {
    args: {
        "aria-label": "Toggle menu",
        children: (_jsxs(_Fragment, { children: [_jsx(Menu, {}), _jsx("span", { children: "Menu" })] })),
    },
};
export const Outline = {
    args: {
        variant: "outline",
        "aria-label": "Toggle italic",
        children: _jsx("span", { children: "Italic" }),
    },
};
export const Small = {
    args: {
        size: "md",
        "aria-label": "Toggle underline",
        children: _jsx(Underline, {}),
    },
};
export const Large = {
    args: {
        size: "lg",
        "aria-label": "Toggle notifications",
        children: (_jsxs(_Fragment, { children: [_jsx(BellRing, {}), _jsx("span", { children: "Notifications" })] })),
    },
};
// Pressed state example
export const Pressed = {
    args: {
        pressed: true,
        "aria-label": "Toggle checked",
        children: (_jsxs(_Fragment, { children: [_jsx(Check, {}), _jsx("span", { children: "Checked" })] })),
    },
};
// Disabled state example
export const Disabled = {
    args: {
        disabled: true,
        "aria-label": "Toggle disabled",
        children: (_jsxs(_Fragment, { children: [_jsx(Menu, {}), _jsx("span", { children: "Disabled" })] })),
    },
};
// Various toggle button examples in a group
export const ToggleGroup = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-5", children: [_jsx("p", { className: "text-muted-foreground text-sm", children: "Text formatting example:" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Toggle, { "aria-label": "Toggle bold", children: _jsx(Bold, {}) }), _jsx(Toggle, { "aria-label": "Toggle italic", children: _jsx(Italic, {}) }), _jsx(Toggle, { "aria-label": "Toggle underline", children: _jsx(Underline, {}) })] }), _jsx("p", { className: "text-muted-foreground text-sm", children: "Outline variant:" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Toggle, { variant: "outline", "aria-label": "Toggle bold", children: _jsx(Bold, {}) }), _jsx(Toggle, { variant: "outline", "aria-label": "Toggle italic", children: _jsx(Italic, {}) }), _jsx(Toggle, { variant: "outline", "aria-label": "Toggle underline", children: _jsx(Underline, {}) })] }), _jsx("p", { className: "text-muted-foreground text-sm", children: "With different sizes:" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Toggle, { size: "md", "aria-label": "Small toggle", children: _jsx("span", { children: "S" }) }), _jsx(Toggle, { "aria-label": "Default toggle", children: _jsx("span", { children: "M" }) }), _jsx(Toggle, { size: "lg", "aria-label": "Large toggle", children: _jsx("span", { children: "L" }) })] })] })),
};
