"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
// Define variants for the accordion
const accordionVariants = {
    default: {
        item: "border-t border-b border-gray-200",
        header: "flex",
        trigger: "flex flex-1 text-start [&>svg]:text-red items-center pr-4 justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        content: "data-[state=closed]:animate-accordion-up pr-4 data-[state=open]:animate-accordion-down overflow-hidden duration-500 text-sm transition-all",
    },
    footer: {
        item: "border-b",
        header: "flex [&[data-state=open]]:shadow-[0_4px_4px_rgba(144,144,144,.5)]",
        trigger: "flex flex-1 px-2 items-center justify-between p-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        content: "data-[state=closed]:animate-accordion-up px-7 py-5  data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all duration-1000",
    },
};
const Accordion = React.forwardRef(({ className, variant: _variant, ...props }, ref) => (_jsx(AccordionPrimitive.Root, { ref: ref, className: cn(className), ...props })));
Accordion.displayName = "Accordion";
const AccordionItem = React.forwardRef(({ className, variant = "footer", ...props }, ref) => (_jsx(AccordionPrimitive.Item, { ref: ref, className: cn(accordionVariants[variant].item, className), ...props })));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, variant = "footer", ...props }, ref) => (_jsx(AccordionPrimitive.Header, { className: accordionVariants[variant].header, children: _jsxs(AccordionPrimitive.Trigger, { ref: ref, className: cn(accordionVariants[variant].trigger, className), ...props, children: [_jsx("div", { className: "font-bold", children: children }), _jsx(ChevronDown, { className: "h-8 w-8 shrink-0 transition-transform duration-200" })] }) })));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, variant = "footer", ...props }, ref) => (_jsx(AccordionPrimitive.Content, { ref: ref, className: cn(accordionVariants[variant].content, className), ...props, children: _jsx("div", { className: cn("pt-0 pb-4", className), children: children }) })));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
