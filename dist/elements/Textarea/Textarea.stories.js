import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Textarea } from "./Textarea";
const meta = {
    title: "Elements/Textarea",
    component: Textarea,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsx(Textarea, { placeholder: "Type your message here", className: "w-[300px]" })),
};
export const WithValue = {
    render: () => (_jsx(Textarea, { className: "w-[300px]", value: "This is some sample text that's already in the textarea when it loads.", readOnly: true })),
};
export const Disabled = {
    render: () => (_jsx(Textarea, { placeholder: "You cannot type here", className: "w-[300px]", disabled: true })),
};
export const WithLabel = {
    render: () => (_jsxs("div", { className: "grid w-[300px] gap-1.5", children: [_jsx("label", { htmlFor: "message", className: "text-sm font-medium", children: "Your message" }), _jsx(Textarea, { id: "message", placeholder: "Type your message here" }), _jsx("p", { className: "text-muted-foreground text-sm", children: "Your message will be sent to our team." })] })),
};
export const Large = {
    render: () => (_jsx(Textarea, { placeholder: "Type your detailed description here", className: "h-[200px] w-[400px]" })),
};
