import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Panel } from "./index";
const meta = {
    title: "Elements/Panel",
    component: Panel,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: [
                "heavy",
                "dark",
                "light",
                "clean",
                "bordered",
                "colored",
                "boxed",
                "white",
                "hint",
            ],
            description: "The visual style variant of the panel",
        },
        removeInnerPanels: {
            control: "boolean",
            description: "Controls whether nested panels should have their styling removed",
        },
        footer: {
            control: "text",
            description: "Content to display in the panel footer",
        },
    },
};
export default meta;
export const Default = {
    args: {
        variant: "light",
        children: _jsx("p", { children: "This is a default panel with light styling." }),
    },
};
export const Heavy = {
    args: {
        variant: "heavy",
        children: _jsx("p", { children: "This is a panel with heavy styling." }),
    },
};
export const Dark = {
    args: {
        variant: "dark",
        children: (_jsxs(_Fragment, { children: [_jsx("h3", { children: "Dark Panel" }), _jsx("p", { children: "This is a panel with dark styling." }), _jsx("a", { href: "#", children: "This is a link" })] })),
    },
};
export const Light = {
    args: {
        variant: "light",
        children: _jsx("p", { children: "This is a panel with light styling." }),
    },
};
export const Clean = {
    args: {
        variant: "clean",
        children: (_jsx("p", { children: "This is a panel with clean styling (no background or border)." })),
    },
};
export const Bordered = {
    args: {
        variant: "bordered",
        children: _jsx("p", { children: "This panel has borders on the top and bottom only." }),
    },
};
export const Colored = {
    args: {
        variant: "colored",
        children: (_jsxs(_Fragment, { children: [_jsx("h3", { children: "Colored Panel" }), _jsx("p", { children: "This is a panel with colored styling." })] })),
    },
};
export const Boxed = {
    args: {
        variant: "boxed",
        children: _jsx("p", { children: "This is a panel with boxed styling (black border)." }),
    },
};
export const White = {
    args: {
        variant: "white",
        children: _jsx("p", { children: "This is a panel with white styling." }),
    },
};
export const Hint = {
    args: {
        variant: "hint",
        children: _jsx("p", { children: "This is a hint panel with an arrow indicator." }),
    },
};
export const WithFooter = {
    args: {
        variant: "heavy",
        children: _jsx("p", { children: "This panel has a footer section." }),
        footer: _jsx("div", { className: "p-[18px]", children: "Footer content goes here" }),
    },
};
export const NestedPanels = {
    args: {
        variant: "heavy",
        children: (_jsxs(_Fragment, { children: [_jsx("p", { children: "This is the outer panel." }), _jsx(Panel, { variant: "heavy", children: _jsx("p", { children: "This is a nested panel." }) })] })),
    },
};
export const NestedPanelsRemoved = {
    args: {
        variant: "heavy",
        removeInnerPanels: true,
        children: (_jsxs(_Fragment, { children: [_jsx("p", { children: "This is the outer panel with nested panel styling removed." }), _jsx(Panel, { variant: "heavy", children: _jsx("p", { children: "This nested panel has its styling removed." }) })] })),
    },
};
