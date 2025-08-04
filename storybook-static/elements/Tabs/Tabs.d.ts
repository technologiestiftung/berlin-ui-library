import { VariantProps } from 'class-variance-authority';
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
declare const Tabs: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const tabsListVariants: (props?: ({
    variant?: "default" | "module" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const tabsTriggerVariants: (props?: ({
    variant?: "default" | "module" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>, VariantProps<typeof tabsListVariants> {
}
declare const TabsList: React.ForwardRefExoticComponent<TabsListProps & React.RefAttributes<HTMLDivElement>>;
interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>, VariantProps<typeof tabsTriggerVariants> {
}
declare const TabsTrigger: React.ForwardRefExoticComponent<TabsTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const tabsContentVariants: (props?: ({
    variant?: "default" | "module" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>, VariantProps<typeof tabsContentVariants> {
}
declare const TabsContent: React.ForwardRefExoticComponent<TabsContentProps & React.RefAttributes<HTMLDivElement>>;
export { Tabs, TabsList, TabsTrigger, TabsContent };
//# sourceMappingURL=Tabs.d.ts.map