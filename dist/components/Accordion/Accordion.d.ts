import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
declare const accordionVariants: {
    default: {
        item: string;
        header: string;
        trigger: string;
        content: string;
    };
    footer: {
        item: string;
        header: string;
        trigger: string;
        content: string;
    };
};
type AccordionVariant = keyof typeof accordionVariants;
type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    variant?: AccordionVariant;
};
declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
    variant?: AccordionVariant;
}
declare const AccordionItem: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLDivElement>>;
interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
    variant?: AccordionVariant;
}
declare const AccordionTrigger: React.ForwardRefExoticComponent<AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
    variant?: AccordionVariant;
}
declare const AccordionContent: React.ForwardRefExoticComponent<AccordionContentProps & React.RefAttributes<HTMLDivElement>>;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
//# sourceMappingURL=Accordion.d.ts.map