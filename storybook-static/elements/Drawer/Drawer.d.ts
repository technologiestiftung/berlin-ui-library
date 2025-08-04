import { VariantProps } from 'class-variance-authority';
import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
declare const Drawer: React.FC<DrawerPrimitive.DialogProps>;
declare const DrawerTrigger: React.ForwardRefExoticComponent<DrawerPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DrawerClose: React.ForwardRefExoticComponent<DrawerPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const DrawerPortal: React.FC<DrawerPrimitive.DialogPortalProps>;
declare const DrawerOverlay: React.ForwardRefExoticComponent<Omit<DrawerPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const drawerVariants: (props?: ({
    side?: "top" | "bottom" | "left" | "right" | null | undefined;
    size?: "default" | "large" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>, VariantProps<typeof drawerVariants> {
}
declare const DrawerContent: React.ForwardRefExoticComponent<DrawerContentProps & React.RefAttributes<HTMLDivElement>>;
declare const DrawerHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DrawerFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DrawerTitle: React.ForwardRefExoticComponent<Omit<DrawerPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DrawerDescription: React.ForwardRefExoticComponent<Omit<DrawerPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
/**
 * SimpleDrawer is an alternative implementation that follows the `isOpen` and `close` pattern
 * from the original drawer implementation, providing an easier-to-use API.
 */
interface SimpleDrawerProps {
    isOpen: boolean;
    close: () => void;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    size?: "default" | "large";
    className?: string;
}
declare const SimpleDrawer: {
    ({ isOpen, close, children, side, size, className, }: SimpleDrawerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, SimpleDrawer, type SimpleDrawerProps, };
//# sourceMappingURL=Drawer.d.ts.map