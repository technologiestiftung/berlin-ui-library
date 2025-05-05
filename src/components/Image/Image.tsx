import React from "react";
import { cn } from "@/lib/utils"; // Assuming cn utility is available (e.g., from shadcn/ui)

interface ImageComponentProps extends React.HTMLAttributes<HTMLDivElement> {
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
}

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
					className="text-lg leading-tight font-bold hover:underline md:text-2xl" // Corresponds to 'title' within overlay
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
const ImageComponent = React.forwardRef<HTMLDivElement, ImageComponentProps>(
	(
		{
			className,
			src,
			alt,
			caption,
			copyright,
			overlayTitle,
			overlayCopyright,
			overlayLink,
			overlayPosition = "center",
			darkenImage = false,
			imgClassName,
			...props
		},
		ref,
	) => {
		return (
			<div
				className={cn("relative mb-3 block", className)} // Corresponds to 'image'
				ref={ref}
				{...props}
			>
				{/* Image container */}
				<div
					className={cn("mb-1", darkenImage && "brightness-60 filter")} // Conditionally darken
				>
					<img
						src={src}
						alt={alt}
						className={cn("block h-auto w-full", imgClassName)} // Basic image styling
					/>
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
					<p className="mb-1 block text-sm leading-tight font-normal break-words text-black">
						{" "}
						{/* Corresponds to 'image__caption' */}
						{caption}
					</p>
				)}

				{/* Optional Copyright (below image) */}
				{copyright && (
					<p className="mb-1 block text-[11px] leading-tight break-words text-gray-600">
						{" "}
						{/* Corresponds to 'image__copyright' below image */}
						{copyright}
					</p>
				)}
			</div>
		);
	},
);

ImageComponent.displayName = "ImageComponent";

export { ImageComponent };
