/* eslint-disable complexity */
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils"; // Assuming cn utility is available (e.g., from shadcn/ui)
import MaximizeIcon from "@/assets/icons/maximize.svg?react";
import TimesIcon from "@/assets/icons/times.svg?react";

interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The source URL of the image.
	 */
	src: string;
	/**
	 * The alternative text for the image.
	 */
	alt: string;
	/**
	 * Optional caption text displayed below the image.
	 */
	caption?: string;
	/**
	 * Optional URL for the image, making it a link.
	 */
	href?: string;
	/**
	 * Optional copyright text displayed below the image (and caption, if present).
	 */
	copyright?: string;
	/**
	 * Optional title text displayed within the overlay.
	 */
	overlayTitle?: string;
	/**
	 * Optional copyright text displayed within the overlay.
	 */
	overlayCopyright?: string;
	/**
	 * Optional URL for the overlay title, making it a link.
	 */
	overlayLink?: string;
	/**
	 * Controls the vertical alignment of content within the overlay.
	 * 'center' (default): Content starts from the top.
	 * 'bottom': Content is aligned to the bottom of the overlay.
	 */
	overlayPosition?: "center" | "bottom";
	/**
	 * If true, applies a darkening filter to the image, useful when overlay text needs more contrast.
	 */
	darkenImage?: boolean;
	/**
	 * Optional additional class names for the `img` element itself.
	 */
	imgClassName?: string;
	/**
	 * Optional add the zoom/enlarge icon to onClick open the image full screen
	 */
	withZoomBox?: boolean;
}

type OpenImage = {
	src: string;
	caption?: string;
	alt: string;
	height: number;
	width: number;
};

// Internal helper component for rendering the overlay to reduce complexity
const ImageOverlay: React.FC<{
	title?: string;
	copyrightText?: string;
	link?: string;
	position: "center" | "bottom";
}> = ({ title, copyrightText, link, position }) => {
	// Don't render the overlay div if there's no content for it
	if (!title && !copyrightText) {
		return null;
	}

	const TitleElement = link ? "a" : "span";
	const titleLinkProps = link ? { href: link, "data-mainlink": "true" } : {};

	return (
		<div
			className={cn(
				"absolute inset-0 flex flex-col p-6 text-white [text-shadow:1px_1px_4px_rgba(0,0,0,0.4)]",
				position === "bottom" ? "justify-end" : "justify-start", // Content alignment
			)}
		>
			{/* Overlay Title */}
			{title && (
				<TitleElement
					className="text-lg leading-tight font-bold hover:underline lg:text-2xl" // Corresponds to 'title' within overlay
					{...titleLinkProps}
				>
					{title}
				</TitleElement>
			)}

			{/* Overlay Copyright - Position adjusts based on overlayPosition */}
			{copyrightText && (
				<p
					className={cn(
						"absolute text-xs text-white/40", // Corresponds to 'image__copyright' within overlay
						position === "bottom" ? "top-1 right-2" : "right-2 bottom-1", // Position depends on main content alignment
					)}
				>
					{copyrightText}
				</p>
			)}
		</div>
	);
};

/**
 * A component for displaying images with optional overlays, captions, and copyright information,
 * styled using Tailwind CSS, following a structure similar to the provided example.
 */
const Image = React.forwardRef<HTMLDivElement, ImageProps>(
	(
		{
			className,
			src,
			alt,
			caption,
			href,
			copyright,
			overlayTitle,
			overlayCopyright,
			overlayLink,
			overlayPosition = "center",
			darkenImage = false,
			imgClassName,
			withZoomBox,
			...props
		},
		ref,
	) => {
		const imgRef = useRef<HTMLImageElement | null>(null);
		const closeButtonRef = useRef<HTMLButtonElement | null>(null);
		const [openImage, setOpenImage] = useState<OpenImage | null>(null);
		const isPortrait = (img?: { width?: number; height?: number }) =>
			(img?.height ?? 0) >= (img?.width ?? 0);
		const open = () =>
			setOpenImage({
				src,
				alt,
				caption,
				width: imgRef?.current?.clientWidth ?? 0,
				height: imgRef?.current?.clientHeight ?? 0,
			});
		useEffect(() => {
			const handleKeyDown = (event: KeyboardEvent) => {
				if (event.key === "Escape") {
					setOpenImage(null);
				}
			};
			if (openImage) {
				closeButtonRef.current?.focus();
				document.addEventListener("keydown", handleKeyDown);
			}
			return () => document.removeEventListener("keydown", handleKeyDown);
		}, [openImage]);

		const imageElement = (
			<img
				ref={imgRef}
				src={src}
				alt={alt}
				className={cn("block h-auto w-full", imgClassName)}
			/>
		);

		return (
			<>
				<div
					className={cn("relative mb-3 block", className)} // Corresponds to 'image'
					ref={ref}
					{...props}
				>
					{/* Image container */}
					<div
						className={cn(
							(caption || copyright) && "mb-1", // Only add mb-1 if caption or copyright exists
							darkenImage && "brightness-60 filter",
							"relative",
						)}
					>
						{href ? (
							<a href={href} target="_blank" rel="noopener noreferrer">
								{imageElement}
							</a>
						) : (
							imageElement
						)}
						{withZoomBox && (
							<button
								type="button"
								className="absolute right-1.5 bottom-1.5 flex size-11 cursor-pointer items-center justify-center border border-black bg-white p-1.5 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
								aria-label="Bild vergrößern"
								onClick={open}
							>
								<MaximizeIcon className="size-6 text-white" />
							</button>
						)}
					</div>

					{/* Render Overlay using the helper component */}
					<ImageOverlay
						title={overlayTitle}
						copyrightText={overlayCopyright}
						link={overlayLink}
						position={overlayPosition}
					/>

					{/* Optional Caption */}
					{caption && (
						<p className="mb-1 block px-4 text-sm leading-tight font-normal break-words text-black lg:px-0">
							{" "}
							{/* Corresponds to 'image__caption' */}
							{caption}
						</p>
					)}

					{/* Optional Copyright (below image) */}
					{copyright && (
						<p className="mb-1 block px-4 text-[11px] leading-tight break-words text-gray-600 lg:px-0">
							{" "}
							{/* Corresponds to 'image__copyright' below image */}
							{copyright}
						</p>
					)}
				</div>
				{/* Optional FullScreen */}
				{openImage?.src && (
					<div
						id="overlay"
						className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80"
						role="dialog"
						aria-modal="true"
						aria-label="Bildvergrößerung"
						onClick={(e) => {
							if ((e.target as HTMLElement).id === "overlay") {
								setOpenImage(null);
							}
						}}
					>
						<div
							className="relative inline-block h-fit w-fit"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Close Button */}
							<button
								ref={closeButtonRef}
								type="button"
								className="absolute top-0 right-0 z-10 cursor-pointer bg-white p-2 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
								aria-label="Bildvergrößerung schließen"
								onClick={() => setOpenImage(null)}
							>
								<TimesIcon className="size-6" />
							</button>

							{/* Image Container */}
							<div
								className={cn(
									"relative flex items-center justify-center bg-white",
									isPortrait(openImage)
										? "h-[min(980px,80vh)] w-auto max-w-[min(980px,90vw)] lg:max-w-[min(980px,90vh)]"
										: "h-auto max-h-[min(980px,90vh)] w-[min(980px,95vw)] lg:w-[min(980px,90vh)]",
								)}
							>
								<img
									src={openImage.src}
									alt={openImage.alt || ""}
									className={cn(
										"object-contain select-none",
										isPortrait(openImage) ? "h-full w-auto" : "h-auto w-full",
									)}
									draggable={false}
								/>
							</div>

							{/* Caption */}
							{openImage.caption && (
								<div className="absolute bottom-0 left-0 z-10 w-full translate-y-[100%] bg-white px-1 py-0.5 text-xs lg:w-auto lg:translate-y-0 lg:px-2 lg:py-1 lg:text-base">
									{openImage.caption}
								</div>
							)}
						</div>
					</div>
				)}
			</>
		);
	},
);

Image.displayName = "Image";

export { Image as Image };
