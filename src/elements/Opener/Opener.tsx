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
}

export function Opener({ src, copyright, title, description }: OpenerProps) {
	return (
		<div className="relative pb-[500px] max-lg:pb-[450px] lg:pb-[500px]">
			<div className="absolute h-[500px] w-screen bg-grey-darkest max-lg:h-[450px] lg:translate-x-[calc((100vw-61.25rem)/-2)]">
				<div className="flex max-h-[70vh] w-full overflow-hidden brightness-75 max-lg:min-h-[450px] lg:h-[500px]">
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
