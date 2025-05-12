import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { cn } from "@/lib/utils"; // Assuming cn utility is available (e.g., from shadcn/ui)
// Internal helper component for rendering the overlay to reduce complexity
const ImageOverlay = ({ title, copyrightText, link, position }) => {
    // Don't render the overlay div if there's no content for it
    if (!title && !copyrightText) {
        return null;
    }
    const TitleElement = link ? "a" : "span";
    const titleLinkProps = link ? { href: link, "data-mainlink": "true" } : {};
    return (_jsxs("div", { className: cn("absolute inset-0 flex flex-col p-6 text-white [text-shadow:1px_1px_4px_rgba(0,0,0,0.4)]", position === "bottom" ? "justify-end" : "justify-start"), children: [title && (_jsx(TitleElement, { className: "text-lg leading-tight font-bold hover:underline md:text-2xl" // Corresponds to 'title' within overlay
                , ...titleLinkProps, children: title })), copyrightText && (_jsx("p", { className: cn("absolute text-xs text-white/40", // Corresponds to 'image__copyright' within overlay
                position === "bottom" ? "top-1 right-2" : "right-2 bottom-1"), children: copyrightText }))] }));
};
/**
 * A component for displaying images with optional overlays, captions, and copyright information,
 * styled using Tailwind CSS, following a structure similar to the provided example.
 */
const Image = React.forwardRef(({ className, src, alt, caption, copyright, overlayTitle, overlayCopyright, overlayLink, overlayPosition = "center", darkenImage = false, imgClassName, ...props }, ref) => {
    return (_jsxs("div", { className: cn("relative mb-3 block", className), ref: ref, ...props, children: [_jsx("div", { className: cn("mb-1", darkenImage && "brightness-60 filter"), children: _jsx("img", { src: src, alt: alt, className: cn("block h-auto w-full", imgClassName) }) }), _jsx(ImageOverlay, { title: overlayTitle, copyrightText: overlayCopyright, link: overlayLink, position: overlayPosition }), caption && (_jsxs("p", { className: "mb-1 block text-sm leading-tight font-normal break-words text-black", children: [" ", caption] })), copyright && (_jsxs("p", { className: "mb-1 block text-[11px] leading-tight break-words text-gray-600", children: [" ", copyright] }))] }));
});
Image.displayName = "Image";
export { Image as Image };
