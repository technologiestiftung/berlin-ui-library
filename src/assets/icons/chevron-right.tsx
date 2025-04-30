export function ChevronRight({ className }: { className?: string }) {
	return (
		<svg
			width="6"
			height="10"
			viewBox="0 0 6 10"
			fill="none"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 8.5L5 5L1 1.5"
				stroke="currentColor"
				strokeWidth="1.25"
				strokeLinecap="round"
			/>
		</svg>
	);
}
