import { cn } from "@/lib/utils";

interface SpinnerProps {
	/**
	 * Size of the spinner: "small" = 25px, "mid" = 50px, "large" = 75px
	 */
	size?: "small" | "mid" | "large";
	/**
	 * Whether to show text alongside the spinner
	 */
	withText?: boolean;
	/**
	 * Set the individual Text
	 */
	text?: string;
	/**
	 * Whether to show text underneath or left to the spinner
	 */
	position?: "under" | "right";
	/**
	 * Sets color of the loading Text
	 */
	textColor?: "black" | "red";
}

const sizeMap = {
	small: "h-8 w-8",
	mid: "h-16 w-16",
	large: "h-20 w-20",
};

const sizeInnerCircle = {
	small: "h-6 w-6 top-1 left-1 border-[4px]",
	mid: "h-12 w-12 top-2 left-2 border-[5px]",
	large: "h-16 w-16 top-2 left-2 border-[6px]",
};

const sizeFontSize = {
	small: "text-base",
	mid: "text-xl",
	large: "text-2xl",
};

const sizeGap = {
	small: "gap-2",
	mid: "gap-4",
	large: "gap-6",
};

/* eslint-disable-next-line complexity */
export function Spinner({
	withText,
	size = "mid",
	text,
	position,
	textColor = "red",
}: SpinnerProps) {
	const isThereText = withText || text;

	const wrapperClass =
		position === "right" && isThereText
			? cn("flex items-center justify-center", sizeGap[size])
			: "text-center";

	const spinnerClass = cn(
		"animate-spin-outer relative inline-block rounded-full bg-red",
		sizeMap[size],
	);

	const innerCircleClass = cn(
		"animate-spin-inner absolute z-10 rounded-full border-white/80 border-t-transparent",
		sizeInnerCircle[size],
	);

	const textClass = cn(
		"font-bold",
		textColor === "red" ? "text-red" : "text-black",
		position === "under" || !position ? "my-2" : "",
		sizeFontSize[size],
	);

	return (
		<div className={wrapperClass}>
			<div className={spinnerClass}>
				<div className={innerCircleClass} />
			</div>
			{isThereText && (
				<p className={textClass}>{text || "Der Inhalt wird geladen"}</p>
			)}
		</div>
	);
}
