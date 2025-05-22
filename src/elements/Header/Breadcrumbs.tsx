import React from "react";

export interface BreadcrumbItem {
	label: string;
	href: string;
}

export interface BreadcrumbsProps {
	/**
	 * The items to display in the breadcrumbs
	 */
	items: BreadcrumbItem[];
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

export function Breadcrumbs({
	items,
	LinkComponent,
	className = "",
}: BreadcrumbsProps) {
	if (!items.length) {
		return null;
	}

	// Default link component is a regular anchor
	const Link =
		LinkComponent || (({ href, children }) => <a href={href}>{children}</a>);

	return (
		<nav aria-label="Breadcrumb" className={`py-2 ${className} text-sm`}>
			<ol className="flex flex-wrap items-center">
				{items.map((item, index) => {
					const isLast = index === items.length - 1;

					return (
						<li key={`${item.href}-${index}`} className="flex items-center">
							{index > 0 && (
								<span className="mx-2 text-gray-400" aria-hidden="true">
									/
								</span>
							)}

							{isLast ? (
								<span aria-current="page" className="font-semibold">
									{item.label}
								</span>
							) : (
								<Link href={item.href}>
									<span className="hover:underline">{item.label}</span>
								</Link>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
