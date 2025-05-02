"use client";

import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import CloseIcon from "@/assets/icons/close_icon.svg?react";

const Drawer = DrawerPrimitive.Root;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerClose = DrawerPrimitive.Close;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerOverlay = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Overlay
		className={cn(
			"fixed inset-0 z-50 bg-black/40 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
			className,
		)}
		{...props}
		ref={ref}
	/>
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerVariants = cva(
	"fixed z-50 gap-4 bg-white pt-[0.7em] shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=closed]:animate-out data-[state=open]:duration-500 data-[state=open]:animate-in",
	{
		variants: {
			side: {
				top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
				bottom:
					"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
				left: "inset-y-0 left-0 h-full w-[35rem] border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
				right:
					"inset-y-0 right-0 h-full w-[35rem] border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
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
	},
);

interface DrawerContentProps
	extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
		VariantProps<typeof drawerVariants> {}

const DrawerContent = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Content>,
	DrawerContentProps
>(
	(
		{ side = "right", size = "default", className, children, ...props },
		ref,
	) => {
		return (
			<DrawerPortal>
				<DrawerOverlay />
				<DrawerPrimitive.Content
					ref={ref}
					className={cn(
						drawerVariants({ side, size }),
						"overflow-y-auto",
						className,
					)}
					{...props}
				>
					{children}
					<DrawerPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-1 right-4 cursor-pointer rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
						<CloseIcon className="m-2 text-black" />
						<span className="sr-only">Close</span>
					</DrawerPrimitive.Close>
				</DrawerPrimitive.Content>
			</DrawerPortal>
		);
	},
);
DrawerContent.displayName = DrawerPrimitive.Content.displayName;

const DrawerHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col space-y-2 text-center sm:text-left",
			className,
		)}
		{...props}
	/>
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
			className,
		)}
		{...props}
	/>
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Title
		ref={ref}
		className={cn("text-foreground px-[0.8rem] text-xl font-bold", className)}
		{...props}
	/>
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Description
		ref={ref}
		className={cn("text-muted-foreground text-sm", className)}
		{...props}
	/>
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

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

const SimpleDrawer = ({
	isOpen,
	close,
	children,
	side = "right",
	size = "default",
	className,
}: SimpleDrawerProps) => {
	return (
		<Drawer open={isOpen} onOpenChange={(open) => !open && close()}>
			<DrawerContent side={side} size={size} className={className}>
				{children}
			</DrawerContent>
		</Drawer>
	);
};
SimpleDrawer.displayName = "SimpleDrawer";

export {
	Drawer,
	DrawerPortal,
	DrawerOverlay,
	DrawerTrigger,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerTitle,
	DrawerDescription,
	SimpleDrawer,
	type SimpleDrawerProps,
};
