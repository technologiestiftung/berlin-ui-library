"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import CloseIcon from "@/assets/icons/close.svg?react";
const Drawer = DrawerPrimitive.Root;
const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerClose = DrawerPrimitive.Close;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => (_jsx(DrawerPrimitive.Overlay, { className: cn("fixed inset-0 z-50 bg-black/40 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", className), ...props, ref: ref })));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;
const drawerVariants = cva("fixed z-50 gap-4 bg-white pt-[0.7em] shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=closed]:animate-out data-[state=open]:duration-500 data-[state=open]:animate-in", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-[35rem] border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
            right: "inset-y-0 right-0 h-full w-[35rem] border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        },
        size: {
            default: "",
            large: "w-[90vw]",
        },
    },
    defaultVariants: {
        side: "right",
        size: "default",
    },
});
const DrawerContent = React.forwardRef(({ side = "right", size = "default", className, children, ...props }, ref) => {
    return (_jsxs(DrawerPortal, { children: [_jsx(DrawerOverlay, {}), _jsxs(DrawerPrimitive.Content, { ref: ref, className: cn(drawerVariants({ side, size }), "overflow-y-auto", className), ...props, children: [_jsx(DrawerTitle, { className: "px-[0.8rem] text-xl font-bold", children: props.title }), children, _jsx(DrawerPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-5.5 right-5.5 cursor-pointer rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none", children: _jsx(CloseIcon, { className: "text-black" }) })] })] }));
});
DrawerContent.displayName = DrawerPrimitive.Content.displayName;
const DrawerHeader = ({ className, ...props }) => (_jsx("div", { className: cn("flex flex-col space-y-2 text-center lg:text-left", className), ...props }));
DrawerHeader.displayName = "DrawerHeader";
const DrawerFooter = ({ className, ...props }) => (_jsx("div", { className: cn("flex flex-col-reverse lg:flex-row lg:justify-end lg:space-x-2", className), ...props }));
DrawerFooter.displayName = "DrawerFooter";
const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (_jsx(DrawerPrimitive.Title, { ref: ref, className: cn("text-foreground px-[0.8rem] text-xl font-bold", className), ...props })));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;
const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => (_jsx(DrawerPrimitive.Description, { ref: ref, className: cn("text-muted-foreground text-sm", className), ...props })));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
const SimpleDrawer = ({ isOpen, close, children, side = "right", size = "default", className, }) => {
    return (_jsx(Drawer, { open: isOpen, onOpenChange: (open) => !open && close(), children: _jsx(DrawerContent, { side: side, size: size, className: className, children: children }) }));
};
SimpleDrawer.displayName = "SimpleDrawer";
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, SimpleDrawer, };
