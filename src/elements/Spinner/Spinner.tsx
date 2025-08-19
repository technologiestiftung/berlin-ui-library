import { cn } from "@/lib/utils";
import "./Spinner.css";

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
	small: "h-[25px] w-[25px]",
	mid: "h-[50px] w-[50px]",
	large: "h-[75px] w-[75px]",
};
const sizeInnerCircle = {
	small: "h-[19px] w-[19px] top-[3px] left-[3px] border-[3px]",
	mid: "h-[40px] w-[40px] top-[5px] left-[5px] border-[5px]",
	large: "h-[59px] w-[59px] top-[8px] left-[8px] border-[8px]",
};
const sizeFontSize = {
	small: "text-[16px]",
	mid: "text-[20px]",
	large: "text-[26px]",
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
			? cn("gap flex items-center justify-center", sizeGap[size])
			: "text-center";

	const spinnerClass = cn(
		"spinner relative inline-block rounded-full bg-red",
		sizeMap[size],
	);

	const innerCircleClass = cn(
		"absolute z-2 rounded-full border-white/80 border-t-transparent",
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
