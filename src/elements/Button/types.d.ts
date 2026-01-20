import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./Button";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	link?: string;
	booking?: boolean;
	price?: string;
	loading?: boolean;
}
