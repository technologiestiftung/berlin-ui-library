 
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import LinkIcon from "@/assets/icons/link.svg?react";
import { cn } from "@/lib/utils";

import { LinkProps } from "./types";

const linkVariants = cva(
	"inline-block text-text-link transition-colors duration-200 ease-out hover:underline focus:underline",
	{
		variants: {
			variant: {
				default: "",
				extern:
					"m-0 inline-flex h-auto cursor-pointer items-center border-0 bg-transparent p-0 text-left",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
	(
		{
			className,
			variant = "default",
			children,
			...props
		},
		ref,
	) => {
		const isExternal = variant === "extern";
		const externalProps = isExternal
			? {
					target: "_blank",
					rel: "noopener noreferrer",
				}
			: {};

		return (
			<a
				ref={ref}
				className={cn(linkVariants({ variant, className }))}
				{...externalProps}
				{...props}
			>
				{children}
				{variant === "extern" && (
          <LinkIcon
            className="mb-2 ml-1 inline-block size-[16px] align-text-top leading-none text-[#0047d3]"
            aria-hidden="true" />
				)}
			</a>
		);
	},
);

Link.displayName = "Link";

export { Link, linkVariants };
