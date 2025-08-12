import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
const meta = {
    title: "Elements/RadioGroup",
    component: RadioGroup,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsxs(RadioGroup, { defaultValue: "option-one", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "option-one", id: "option-one" }), _jsx("label", { htmlFor: "option-one", className: "text-sm font-medium", children: "Option One" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "option-two", id: "option-two" }), _jsx("label", { htmlFor: "option-two", className: "text-sm font-medium", children: "Option Two" })] })] })),
};
export const WithDescriptions = {
    render: () => (_jsxs(RadioGroup, { defaultValue: "default", children: [_jsxs("div", { className: "flex items-start space-x-2", children: [_jsx(RadioGroupItem, { value: "default", id: "r1" }), _jsxs("div", { className: "grid gap-1.5 leading-none", children: [_jsx("label", { htmlFor: "r1", className: "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled", children: "Default" }), _jsx("p", { className: "text-muted-foreground text-sm", children: "Use the system default theme." })] })] }), _jsxs("div", { className: "flex items-start space-x-2", children: [_jsx(RadioGroupItem, { value: "light", id: "r2" }), _jsxs("div", { className: "grid gap-1.5 leading-none", children: [_jsx("label", { htmlFor: "r2", className: "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled", children: "Light" }), _jsx("p", { className: "text-muted-foreground text-sm", children: "Use the light theme." })] })] }), _jsxs("div", { className: "flex items-start space-x-2", children: [_jsx(RadioGroupItem, { value: "dark", id: "r3" }), _jsxs("div", { className: "grid gap-1.5 leading-none", children: [_jsx("label", { htmlFor: "r3", className: "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled", children: "Dark" }), _jsx("p", { className: "text-muted-foreground text-sm", children: "Use the dark theme." })] })] })] })),
};
export const Disabled = {
    render: () => (_jsxs(RadioGroup, { defaultValue: "option-one", disabled: true, children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "option-one", id: "disabled-option-one" }), _jsx("label", { htmlFor: "disabled-option-one", className: "text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled", children: "Option One (Selected & Disabled)" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "option-two", id: "disabled-option-two" }), _jsx("label", { htmlFor: "disabled-option-two", className: "text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled", children: "Option Two (Disabled)" })] })] })),
};
export const Horizontal = {
    render: () => (_jsxs(RadioGroup, { defaultValue: "option-one", className: "flex flex-row space-x-4", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "option-one", id: "horizontal-one" }), _jsx("label", { htmlFor: "horizontal-one", className: "text-sm font-medium", children: "Yes" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "option-two", id: "horizontal-two" }), _jsx("label", { htmlFor: "horizontal-two", className: "text-sm font-medium", children: "No" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "option-three", id: "horizontal-three" }), _jsx("label", { htmlFor: "horizontal-three", className: "text-sm font-medium", children: "Maybe" })] })] })),
};
