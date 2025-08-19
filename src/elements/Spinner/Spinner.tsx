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
	small: "h-[2rem] w-[2rem]",
	mid: "h-[4rem] w-[4rem]",
	large: "h-[5rem] w-[5rem]",
};

const sizeInnerCircle = {
	small: "h-[1.5rem] w-[1.5rem] top-[0.25rem] left-[0.25rem] border-[0.25rem]",
	mid: "h-[3rem] w-[3rem] top-[0.5rem] left-[0.5rem] border-[0.5rem]",
	large: "h-[4rem] w-[4rem] top-[0.5rem] left-[0.5rem] border-[0.5rem]",
};
const sizeFontSize = {
	small: "text-[1rem]",
	mid: "text-[1.25rem]",
	large: "text-[1.625rem]",
};
const sizeGap = {
	small: "gap-[0.5rem]",
	mid: "gap-[1rem]",
	large: "gap-[1.5rem]",
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
			? cn("gap flex items-center justify-center", sizeGap[size])
			: "text-center";

	const spinnerClass = cn(
		"animate-spin-outer relative inline-block rounded-full bg-red",
		sizeMap[size],
	);

	const innerCircleClass = cn(
		"animate-spin-inner absolute z-2 rounded-full border-white/80 border-t-transparent",
		sizeInnerCircle[size],
	);

	const textClass = cn(
		"spinner--text font-bold",
		textColor === "red" ? "text-red" : "text-black",
		position === "under" || !position ? "my-[0.8em]" : "",
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
