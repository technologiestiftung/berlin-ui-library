import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
	HTMLElement,
	React.ComponentPropsWithoutRef<"nav"> & {
		separator?: React.ReactNode;
	}
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
	HTMLOListElement,
	React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
	<ol
		ref={ref}
		className={cn(
			"flex flex-wrap items-center gap-[0.3em] text-sm break-words text-muted-foreground sm:gap-[0.3em]",
			className,
		)}
		{...props}
	/>
));
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
	<li
		ref={ref}
		className={cn("inline-flex items-center gap-[0.3em]", className)}
		{...props}
	/>
));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentPropsWithoutRef<"a"> & {
		asChild?: boolean;
	}
>(({ asChild, className, ...props }, ref) => {
	const Comp = asChild ? Slot : "a";

	return (
		<Comp
			ref={ref}
			className={cn("transition-colors hover:text-foreground", className)}
			{...props}
		/>
	);
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<
	HTMLSpanElement,
	React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		role="link"
		aria-disabled="true"
		aria-current="page"
		className={cn("font-normal text-foreground", className)}
		{...props}
	/>
));
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
	children,
	className,
	...props
}: React.ComponentProps<"li">) => (
	<li
		role="presentation"
		aria-hidden="true"
		className={cn("[&>svg]:h-3.5 [&>svg]:w-3.5", className)}
		{...props}
	>
		{children ?? <ChevronRight />}
	</li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({
	className,
	...props
}: React.ComponentProps<"span">) => (
	<span
		role="presentation"
		aria-hidden="true"
		className={cn("flex h-9 w-9 items-center justify-center", className)}
		{...props}
	>
		<MoreHorizontal className="h-4 w-4" />
		<span className="sr-only">More</span>
	</span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

// Simple API for Breadcrumbs
export interface BreadcrumbItemProps {
	label: string;
	href: string;
}

export interface BreadcrumbsProps {
	/**
	 * The items to display in the breadcrumbs
	 */
	items: BreadcrumbItemProps[];
	/**
	 * Optional custom link component that accepts href and children props
	 * Useful for integrating with framework-specific routing like Next.js Link or React Router Link
	 */
	LinkComponent?: React.ComponentType<{
		href: string;
		children: React.ReactNode;
	}>;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

const Breadcrumbs = ({
	items,
	LinkComponent,
	className = "",
}: BreadcrumbsProps) => {
	if (!items.length) {
		return null;
	}

	return (
		<Breadcrumb className={cn(`py-2 text-sm`, className)}>
			<BreadcrumbList className="flex flex-wrap items-center">
				{items.map((item, index) => {
					const isLast = index === items.length - 1;

					return (
						<React.Fragment key={`${item.href}-${index}`}>
							<BreadcrumbItem>
								{isLast ? (
									<BreadcrumbPage>{item.label}</BreadcrumbPage>
								) : (
									<BreadcrumbLink
										href={item.href}
										asChild={!!LinkComponent}
										className="hover:underline"
									>
										{LinkComponent ? (
											<LinkComponent href={item.href}>
												{item.label}
											</LinkComponent>
										) : (
											item.label
										)}
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>
							{!isLast && (
								<BreadcrumbSeparator className="text-gray-400">
									<ChevronRight
										className={
											isLast ? "text-black" : "text-berlin-grey-darker"
										}
									/>
								</BreadcrumbSeparator>
							)}
						</React.Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
	Breadcrumbs,
};
