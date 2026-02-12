import { VariantProps } from "class-variance-authority";
import { linkVariants } from "./Link";

export interface LinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		VariantProps<typeof linkVariants> {}