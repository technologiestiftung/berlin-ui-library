import React from "react";
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
}
/**
 * A component for displaying images with optional overlays, captions, and copyright information,
 * styled using Tailwind CSS, following a structure similar to the provided example.
 */
declare const Image: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLDivElement>>;
export { Image as Image };
//# sourceMappingURL=Image.d.ts.map