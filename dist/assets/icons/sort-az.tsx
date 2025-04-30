import React from "react";

interface SortIconProps {
	ascending: boolean;
}

const SortIcon: React.FC<SortIconProps> = ({ ascending }) => {
	if (ascending) {
		return (
			<>
				<svg
					width="33"
					height="31"
					viewBox="0 0 33 31"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.00011 1L8.00011 25.7166M1.62602 19.5953L8.00045 26L14.374 19.5953"
						stroke="black"
						strokeWidth="3"
					/>
					<path
						d="M30.8662 12.4531H28.3506L27.3506 9.85156H22.7725L21.8271 12.4531H19.374L23.835 1H26.2803L30.8662 12.4531ZM26.6084 7.92188L25.0303 3.67188L23.4834 7.92188H26.6084Z"
						fill="black"
					/>
					<path
						d="M19.374 27.9531V25.8672L25.3896 18.4375H20.0537V16.5H28.4365V18.2969L22.1631 26.0234H28.6787V27.9531H19.374Z"
						fill="black"
					/>
				</svg>
			</>
		);
	}
	return (
		<svg
			width="33"
			height="32"
			viewBox="0 0 33 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.99989 28L7.99989 3.28335M14.374 9.40471L7.99955 3L1.62598 9.40471"
				stroke="black"
				strokeWidth="3"
			/>
			<path
				d="M19.374 13.4531V11.3672L25.3896 3.9375H20.0537V2H28.4365V3.79688L22.1631 11.5234H28.6787V13.4531H19.374Z"
				fill="black"
			/>
			<path
				d="M30.8662 29.0059H28.3506L27.3506 26.4043H22.7725L21.8271 29.0059H19.374L23.835 17.5527H26.2803L30.8662 29.0059ZM26.6084 24.4746L25.0303 20.2246L23.4834 24.4746H26.6084Z"
				fill="black"
			/>
		</svg>
	);
};

export default SortIcon;
