import React from "react";

interface ArrowRightIconProps {
	color: string;
}

const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({ color }) => {
	return (
		<svg
			width="20"
			height="19"
			viewBox="0 0 20 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={color}
		>
			<path
				d="M0 9.49989H17.1666M9.04529 17.874L17.45 9.49955L9.04529 1.12598"
				stroke="currentColor"
				strokeWidth="3"
			/>
		</svg>
	);
};

export default ArrowRightIcon;
