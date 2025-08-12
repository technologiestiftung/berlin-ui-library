import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { List, ListItem } from "./List";
const meta = {
    title: "Elements/List",
    component: List,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: ["unordered", "ordered"],
        },
    },
};
export default meta;
export const Unordered = {
    args: {
        variant: "unordered",
    },
    render: (args) => (_jsx("div", { className: "w-96", children: _jsxs(List, { ...args, children: [_jsx(ListItem, { children: "First list item with some longer text to demonstrate word breaking" }), _jsx(ListItem, { children: "Second list item" }), _jsxs(ListItem, { children: ["Third list item with nested list:", _jsxs(List, { variant: "unordered", children: [_jsx(ListItem, { children: "Nested item 1" }), _jsx(ListItem, { children: "Nested item 2" })] })] }), _jsx(ListItem, { children: "Fourth list item" })] }) })),
};
export const Ordered = {
    args: {
        variant: "ordered",
    },
    render: (args) => (_jsx("div", { className: "w-96", children: _jsxs(List, { ...args, children: [_jsx(ListItem, { children: "First numbered item with some longer text to demonstrate word breaking" }), _jsx(ListItem, { children: "Second numbered item" }), _jsxs(ListItem, { children: ["Third numbered item with nested list:", _jsxs(List, { variant: "ordered", children: [_jsx(ListItem, { children: "Nested numbered item 1" }), _jsx(ListItem, { children: "Nested numbered item 2" })] })] }), _jsx(ListItem, { children: "Fourth numbered item" })] }) })),
};
export const Mixed = {
    render: () => (_jsxs("div", { className: "w-96", children: [_jsx("h3", { className: "mb-4 text-lg font-bold", children: "Mixed Lists Example" }), _jsxs(List, { variant: "unordered", children: [_jsx(ListItem, { children: "Unordered item 1" }), _jsxs(ListItem, { children: ["Unordered item 2 with nested ordered list:", _jsxs(List, { variant: "ordered", children: [_jsx(ListItem, { children: "Ordered nested item 1" }), _jsx(ListItem, { children: "Ordered nested item 2" })] })] }), _jsx(ListItem, { children: "Unordered item 3" })] }), _jsxs(List, { variant: "ordered", children: [_jsx(ListItem, { children: "Ordered item 1" }), _jsxs(ListItem, { children: ["Ordered item 2 with nested unordered list:", _jsxs(List, { variant: "unordered", children: [_jsx(ListItem, { children: "Unordered nested item 1" }), _jsx(ListItem, { children: "Unordered nested item 2" })] })] }), _jsx(ListItem, { children: "Ordered item 3" })] })] })),
};
