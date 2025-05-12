import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox } from "./Checkbox";
const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "terms" }), _jsx("label", { htmlFor: "terms", className: "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled", children: "Accept terms and conditions" })] })),
};
export const Checked = {
    render: () => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "checked", defaultChecked: true }), _jsx("label", { htmlFor: "checked", className: "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled", children: "This option is checked by default" })] })),
};
export const Disabled = {
    render: () => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "disabled", disabled: true }), _jsx("label", { htmlFor: "disabled", className: "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled", children: "This option is disabled" })] })),
};
export const DisabledChecked = {
    render: () => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "disabled-checked", disabled: true, defaultChecked: true }), _jsx("label", { htmlFor: "disabled-checked", className: "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled", children: "This option is disabled and checked" })] })),
};
export const WithDescription = {
    render: () => (_jsxs("div", { className: "items-top flex space-x-2", children: [_jsx(Checkbox, { id: "terms-with-description" }), _jsxs("div", { className: "grid gap-1.5 leading-none", children: [_jsx("label", { htmlFor: "terms-with-description", className: "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled", children: "Accept terms and conditions" }), _jsx("p", { className: "text-muted-foreground text-sm", children: "You agree to our Terms of Service and Privacy Policy." })] })] })),
};
// Styled variant examples
export const StyledVariant = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "styled-unchecked", variant: "styled" }), _jsx("label", { htmlFor: "styled-unchecked", className: "text-sm leading-none font-medium", children: "Styled variant (unchecked)" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "styled-checked", variant: "styled", defaultChecked: true }), _jsx("label", { htmlFor: "styled-checked", className: "text-sm leading-none font-medium", children: "Styled variant (checked)" })] })] })),
};
// Styled  box example similar to the image
export const StyledBoxes = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("div", { className: "flex w-[240px] border-2 border-black", children: [_jsx("div", { className: "flex h-12 w-12 items-center justify-center border-r-2 border-black bg-white", children: _jsx(Checkbox, { id: "starkregen", variant: "styled", className: "h-5 w-5", defaultChecked: true }) }), _jsx("div", { className: "flex h-12 flex-1 items-center bg-red px-4 font-bold text-white", children: "Starkregen" })] }), _jsxs("div", { className: "flex w-[240px] border-2 border-black", children: [_jsx("div", { className: "flex h-12 w-12 items-center justify-center border-r-2 border-black bg-white", children: _jsx(Checkbox, { id: "flusshochwasser", variant: "styled", className: "h-5 w-5" }) }), _jsx("div", { className: "flex h-12 flex-1 items-center bg-red px-4 font-bold text-white", children: "Flusshochwasser" })] })] })),
};
