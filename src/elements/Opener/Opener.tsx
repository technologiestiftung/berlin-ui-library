import { CSSProperties } from "react";

interface OpenerProps {
	/**
	 * Set the background image for the opener
	 */
	src: string;
	/**
	 * Set the copyright for the opener image
	 */
	copyright: string;
	/**
	 * Set the title for the opener
	 */
	title: string;
	/**
	 * Set the description for the opener
	 */
	description: string;
	/**
	 * Set the height for the opener
	 */
	height?: number;
}

export function Opener({
	src,
	copyright,
	title,
	description,
	height,
}: OpenerProps) {
	return (
		<div
			className="relative pb-[var(--height)]"
			style={{ "--height": `${height}px` } as CSSProperties}
		>
			<div className="absolute h-[var(--height)] w-screen bg-grey-darkest lg:translate-x-[calc((100vw-61.25rem)/-2)]">
				<div className="flex h-[var(--height)] max-h-[70vh] w-full overflow-hidden brightness-75">
					<img
						src={src}
						alt={title}
						className="h-full w-full object-cover object-center"
					/>
				</div>
				{copyright && (
					<p className="absolute bottom-1 left-3 text-sm text-white">
						{copyright}
					</p>
				)}
				<div className="absolute inset-0 flex items-center justify-center px-4">
					<div className="max-w-[61.25rem] bg-white px-8 py-10 text-center">
						<h1 className="mb-2 text-[27px] leading-[31px] font-bold">
							{title}
						</h1>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
