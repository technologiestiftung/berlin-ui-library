import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "./Accordion";
const meta = {
    title: "Modules/Accordion",
    component: Accordion,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "radio",
            options: ["default", "footer"],
            description: "The visual style variant of the accordion",
            defaultValue: "footer",
        },
    },
};
export default meta;
export const DefaultVariant = {
    render: () => (_jsxs(Accordion, { type: "single", collapsible: true, className: "w-[400px]", variant: "default", children: [_jsxs(AccordionItem, { value: "item-1", variant: "default", children: [_jsx(AccordionTrigger, { variant: "default", children: "Is it accessible?" }), _jsx(AccordionContent, { variant: "default", children: "Yes. It adheres to the WAI-ARIA design pattern." })] }), _jsxs(AccordionItem, { value: "item-2", variant: "default", children: [_jsx(AccordionTrigger, { variant: "default", children: "Is it styled?" }), _jsx(AccordionContent, { variant: "default", children: "Yes. It comes with default styling that matches the Berlin design system." })] }), _jsxs(AccordionItem, { value: "item-3", variant: "default", children: [_jsx(AccordionTrigger, { variant: "default", children: "Is it animated?" }), _jsx(AccordionContent, { variant: "default", children: "Yes. It's animated by default, but you can disable it if needed." })] })] })),
};
export const FooterVariant = {
    render: () => (_jsxs(Accordion, { type: "single", collapsible: true, className: "w-[400px]", variant: "footer", children: [_jsxs(AccordionItem, { value: "item-1", variant: "footer", children: [_jsx(AccordionTrigger, { variant: "footer", children: "Is it accessible?" }), _jsx(AccordionContent, { variant: "footer", children: "Yes. It adheres to the WAI-ARIA design pattern." })] }), _jsxs(AccordionItem, { value: "item-2", variant: "footer", children: [_jsx(AccordionTrigger, { variant: "footer", children: "Is it styled?" }), _jsx(AccordionContent, { variant: "footer", children: "Yes. It comes with default styling that matches the Berlin design system." })] }), _jsxs(AccordionItem, { value: "item-3", variant: "footer", children: [_jsx(AccordionTrigger, { variant: "footer", children: "Is it animated?" }), _jsx(AccordionContent, { variant: "footer", children: "Yes. It's animated by default, but you can disable it if needed." })] })] })),
};
export const Multiple = {
    render: () => (_jsxs(Accordion, { type: "multiple", className: "w-[400px]", variant: "default", children: [_jsxs(AccordionItem, { value: "item-1", variant: "default", children: [_jsx(AccordionTrigger, { variant: "default", children: "First item" }), _jsx(AccordionContent, { variant: "default", children: "This is the first item's content. You can open multiple items at once." })] }), _jsxs(AccordionItem, { value: "item-2", variant: "default", children: [_jsx(AccordionTrigger, { variant: "default", children: "Second item" }), _jsx(AccordionContent, { variant: "default", children: "This is the second item's content." })] }), _jsxs(AccordionItem, { value: "item-3", variant: "default", children: [_jsx(AccordionTrigger, { variant: "default", children: "Third item" }), _jsx(AccordionContent, { variant: "default", children: "This is the third item's content." })] })] })),
};
