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
	"ts:relative ts:px-3 ts:py-1 ts:border-black ts:border-2 ts:opacity-100 ts:hover:opacity-50 ts:flex ts:justify-center ts:items-center ts:text-black ts:h-[43px]",
	{
		variants: {
			variant: {
				default: "ts:bg-primary ts:text-white",
			},
			size: {
				default: "ts:h-[43px] ts:w-fit",
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
				<div className="ts:flex ts:flex-row ts:gap-2 ts:items-center">
					<div>Filter</div>
				</div>
				{numActiveFilters > 0 && (
					<div className="ts:absolute ts:-top-3 ts:-right-3 ts:w-6 ts:h-6 ts:rounded-full ts:bg-berlin-green ts:flex ts:flex-row ts:items-center ts:justify-center ts:text-white ts:font-bold">
						{numActiveFilters}
					</div>
				)}
			</Comp>
		</>
	);
};

export default FilterButton;
