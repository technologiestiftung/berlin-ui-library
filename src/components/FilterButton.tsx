import React from "react";
import { SlotProps } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface FilterButtonProps {
	onClick: () => void;
	numActiveFilters: number;
	isOpen: boolean;
	closeMenu: () => void;
}

const filterButtonVariants = cva(
	"relative flex h-[43px] items-center justify-center border-2 border-black px-3 py-1 text-black opacity-100 hover:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-white",
			},
			size: {
				default: "h-[43px] w-fit",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

const FilterButton: React.FC<FilterButtonProps> = ({
	onClick,
	numActiveFilters,
}) => {
	const Comp:
		| "button"
		| React.ForwardRefExoticComponent<
				SlotProps & React.RefAttributes<HTMLElement>
		  > = "button";

	return (
		<>
			<Comp className={cn(filterButtonVariants())} onClick={onClick}>
				<div className="flex flex-row items-center gap-2">
					<div>Filter</div>
				</div>
				{numActiveFilters > 0 && (
					<div className="absolute -top-3 -right-3 flex h-6 w-6 flex-row items-center justify-center rounded-full bg-berlin-green font-bold text-white">
						{numActiveFilters}
					</div>
				)}
			</Comp>
		</>
	);
};

export default FilterButton;
