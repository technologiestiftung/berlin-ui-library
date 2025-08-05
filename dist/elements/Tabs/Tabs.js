"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const Tabs = TabsPrimitive.Root;
const tabsListVariants = cva("flex w-auto items-center justify-start", {
    variants: {
        variant: {
            default: "h-12 gap-1",
            module: "margin-0 mb-[30px] border-b border-grey-dark p-0",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const tabsTriggerVariants = cva("ring-offset-background focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center text-base whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "data-[state=active]:text-foreground h-full bg-grey-dark px-3 py-1.5 data-[state=active]:bg-block-heavy data-[state=active]:shadow-[inset_0_4px_0_0_var(--color-red)]",
            module: "mr-[20px] mb-0 border-b-4 border-transparent p-2 text-text-lightest last:mr-0 data-[state=active]:border-red data-[state=active]:font-bold data-[state=active]:text-black data-[state=active]:no-underline",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const TabsList = React.forwardRef(({ className, variant, ...props }, ref) => (_jsx(TabsPrimitive.List, { ref: ref, className: cn(tabsListVariants({ variant, className })), ...props })));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, variant, children, ...props }, ref) => {
    // For module variant, we create a special wrapper to prevent text "jumping"
    if (variant === "module") {
        return (_jsx(TabsPrimitive.Trigger, { ref: ref, className: cn(tabsTriggerVariants({ variant, className })), ...props, children: _jsxs("span", { className: "relative", children: [_jsx("span", { className: "invisible absolute left-0 font-bold", "aria-hidden": "true", children: children }), _jsx("span", { className: "relative", children: children })] }) }));
    }
    return (_jsx(TabsPrimitive.Trigger, { ref: ref, className: cn(tabsTriggerVariants({ variant, className })), ...props, children: children }));
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const tabsContentVariants = cva("ring-offset-background focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none", {
    variants: {
        variant: {
            default: "bg-block-heavy p-6",
            module: "clear-left",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const TabsContent = React.forwardRef(({ className, variant, ...props }, ref) => (_jsx(TabsPrimitive.Content, { ref: ref, className: cn(tabsContentVariants({ variant, className })), ...props })));
TabsContent.displayName = TabsPrimitive.Content.displayName;
export { Tabs, TabsList, TabsTrigger, TabsContent };
