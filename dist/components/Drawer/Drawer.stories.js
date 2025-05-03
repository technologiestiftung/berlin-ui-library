import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, SimpleDrawer, } from "./Drawer";
import { Button } from "../Button/Button";
const meta = {
    title: "Components/Drawer",
    component: Drawer,
    tags: ["autodocs"],
};
export default meta;
// Standard usage with Drawer components
export const Standard = {
    render: () => {
        return (_jsxs(Drawer, { children: [_jsx(DrawerTrigger, { asChild: true, children: _jsx(Button, { variant: "default", children: "Open Drawer" }) }), _jsxs(DrawerContent, { children: [_jsxs(DrawerHeader, { children: [_jsx(DrawerTitle, { children: "Men\u00FC" }), _jsx(DrawerDescription, { children: "This is a drawer component that slides in from the side." })] }), _jsx("div", { className: "py-4", children: _jsx("p", { children: "This is the main content of the drawer." }) }), _jsx(DrawerFooter, { children: _jsx(Button, { variant: "default", children: "Save Changes" }) })] })] }));
    },
};
// Left side drawer example
export const LeftSide = {
    render: () => {
        return (_jsxs(Drawer, { children: [_jsx(DrawerTrigger, { asChild: true, children: _jsx(Button, { variant: "default", children: "Open Left Drawer" }) }), _jsxs(DrawerContent, { side: "left", children: [_jsxs(DrawerHeader, { children: [_jsx(DrawerTitle, { children: "Left Drawer" }), _jsx(DrawerDescription, { children: "This drawer slides in from the left side." })] }), _jsx("div", { className: "py-4", children: _jsx("p", { children: "Left drawer content example." }) })] })] }));
    },
};
// Right side drawer example
export const RightSide = {
    render: () => {
        return (_jsxs(Drawer, { children: [_jsx(DrawerTrigger, { asChild: true, children: _jsx(Button, { variant: "default", children: "Open Right Drawer" }) }), _jsxs(DrawerContent, { side: "right", children: [_jsxs(DrawerHeader, { children: [_jsx(DrawerTitle, { children: "Right Drawer" }), _jsx(DrawerDescription, { children: "This drawer slides in from the right side." })] }), _jsx("div", { className: "py-4", children: _jsx("p", { children: "Right drawer content example." }) })] })] }));
    },
};
// SimpleDrawer example with isOpen/close pattern
export const SimpleDrawerExample = {
    render: () => {
        // Using React hooks in Storybook component
        const SimpleDrawerDemo = () => {
            const [isOpen, setIsOpen] = useState(false);
            return (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "default", onClick: () => setIsOpen(true), children: "Open Simple Drawer" }), _jsxs(SimpleDrawer, { isOpen: isOpen, close: () => setIsOpen(false), side: "right", children: [_jsxs(DrawerHeader, { children: [_jsx(DrawerTitle, { children: "Simple Drawer" }), _jsx(DrawerDescription, { children: "This uses the SimpleDrawer API with isOpen/close pattern." })] }), _jsx("div", { className: "py-4", children: _jsx("p", { children: "This provides an easier-to-use API that matches the original drawer components." }) }), _jsx(DrawerFooter, { children: _jsx(Button, { variant: "default", onClick: () => setIsOpen(false), children: "Close" }) })] })] }));
        };
        return _jsx(SimpleDrawerDemo, {});
    },
};
// Large size drawer example
export const LargeDrawer = {
    render: () => {
        return (_jsxs(Drawer, { children: [_jsx(DrawerTrigger, { asChild: true, children: _jsx(Button, { variant: "default", children: "Open Large Drawer" }) }), _jsxs(DrawerContent, { side: "right", size: "large", children: [_jsxs(DrawerHeader, { children: [_jsx(DrawerTitle, { children: "Large Drawer" }), _jsx(DrawerDescription, { children: "This is a large drawer that uses 90% of the viewport width." })] }), _jsx("div", { className: "py-4", children: _jsx("p", { children: "This drawer uses the large size variant (w-90vw) instead of the default size (w-35rem)." }) }), _jsx(DrawerFooter, { children: _jsx(Button, { variant: "default", children: "Close" }) })] })] }));
    },
};
// Large SimpleDrawer example
export const LargeSimpleDrawer = {
    render: () => {
        // Using React hooks in Storybook component
        const LargeSimpleDrawerDemo = () => {
            const [isOpen, setIsOpen] = useState(false);
            return (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "default", onClick: () => setIsOpen(true), children: "Open Large Simple Drawer" }), _jsxs(SimpleDrawer, { isOpen: isOpen, close: () => setIsOpen(false), side: "right", size: "large", children: [_jsxs(DrawerHeader, { children: [_jsx(DrawerTitle, { children: "Large Simple Drawer" }), _jsx(DrawerDescription, { children: "This uses the SimpleDrawer API with the large size variant." })] }), _jsx("div", { className: "py-4", children: _jsx("p", { children: "This drawer uses the large size variant (w-90vw) for when you need more horizontal space." }) }), _jsx(DrawerFooter, { children: _jsx(Button, { variant: "default", onClick: () => setIsOpen(false), children: "Close" }) })] })] }));
        };
        return _jsx(LargeSimpleDrawerDemo, {});
    },
};
