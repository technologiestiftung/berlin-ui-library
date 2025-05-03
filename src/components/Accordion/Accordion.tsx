"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

// Define variants for the accordion
const accordionVariants = {
	default: {
		item: "border-t border-b border-gray-200",
		header: "flex",
		trigger:
			"flex flex-1 [&>svg]:text-red items-center px-4 justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
		content:
			"data-[state=closed]:animate-accordion-up px-4 data-[state=open]:animate-accordion-down overflow-hidden duration-500 text-sm transition-all",
	},
	footer: {
		item: "border-b",
		header: "flex [&[data-state=open]]:shadow-[0_4px_4px_rgba(144,144,144,.5)]",
		trigger:
			"flex flex-1 px-2 items-center justify-between p-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
		content:
			"data-[state=closed]:animate-accordion-up px-7 py-5  data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all duration-1000",
	},
};

// Define variant prop type
type AccordionVariant = keyof typeof accordionVariants;

// Root component with variant prop
type AccordionProps = React.ComponentPropsWithoutRef<
	typeof AccordionPrimitive.Root
> & {
	variant?: AccordionVariant;
};

const Accordion = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Root>,
	AccordionProps
>(({ className, variant: _variant, ...props }, ref) => (
	<AccordionPrimitive.Root ref={ref} className={cn(className)} {...props} />
));
Accordion.displayName = "Accordion";

// Item component with variant prop
interface AccordionItemProps
	extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
	variant?: AccordionVariant;
}

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	AccordionItemProps
>(({ className, variant = "footer", ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn(accordionVariants[variant].item, className)}
		{...props}
	/>
));
AccordionItem.displayName = "AccordionItem";

// Trigger component with variant prop
interface AccordionTriggerProps
	extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
	variant?: AccordionVariant;
}

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	AccordionTriggerProps
>(({ className, children, variant = "footer", ...props }, ref) => (
	<AccordionPrimitive.Header className={accordionVariants[variant].header}>
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(accordionVariants[variant].trigger, className)}
			{...props}
		>
			<div className="font-bold">{children}</div>
			<ChevronDown className="h-8 w-8 shrink-0 transition-transform duration-200" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// Content component with variant prop
interface AccordionContentProps
	extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
	variant?: AccordionVariant;
}

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	AccordionContentProps
>(({ className, children, variant = "footer", ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn(accordionVariants[variant].content, className)}
		{...props}
	>
		<div className={cn("pt-0 pb-4", className)}>{children}</div>
	</AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
