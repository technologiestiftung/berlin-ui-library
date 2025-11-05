import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";

const meta: Meta<typeof Image> = {
	title: "Elements/Image",
	component: Image,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof Image>;

// Basic image example
export const Default: Story = {
	args: {
		src: "https://placehold.co/600x400",
		alt: "Sample placeholder image",
	},
};

// Image with caption
export const WithCaption: Story = {
	args: {
		src: "https://placehold.co/600x400",
		alt: "Sample image with caption",
		caption: "This is a caption for the image above.",
	},
};

// Image with copyright
export const WithCopyright: Story = {
	args: {
		src: "https://placehold.co/600x400",
		alt: "Sample image with copyright",
		copyright: "© 2025 Berlin Design System",
	},
};

// Image with caption and copyright
export const WithCaptionAndCopyright: Story = {
	args: {
		src: "https://placehold.co/600x400",
		alt: "Sample image with caption and copyright",
		caption: "This is a caption for the image above.",
		copyright: "© 2025 Berlin Design System",
	},
};

// Image with overlay title
export const WithOverlayTitle: Story = {
	args: {
		src: "https://placehold.co/600x400",
		alt: "Sample image with overlay title",
		overlayTitle: "Image with overlay title",
		darkenImage: true,
	},
};

// Image with overlay copyright
export const WithOverlayCopyright: Story = {
	args: {
		src: "https://placehold.co/600x400",
		alt: "Sample image with overlay copyright",
		overlayCopyright: "© 2025 Berlin Design System",
		darkenImage: true,
	},
};

// Image with overlay link
export const WithOverlayLink: Story = {
	args: {
		src: "https://placehold.co/600x400",
		alt: "Sample image with overlay link",
		overlayTitle: "Click this overlay title",
		overlayLink: "https://berlin.de",
		darkenImage: true,
	},
};

// Image as a link
export const WithLink: Story = {
	args: {
		src: "https://placehold.co/600x400",
		alt: "Sample image that is a link",
		href: "https://berlin.de",
	},
};

// Image with overlay position bottom
export const OverlayPositionBottom: Story = {
	args: {
		src: "https://placehold.co/600x400",
		alt: "Sample image with bottom overlay",
		overlayTitle: "Bottom positioned overlay",
		overlayCopyright: "© 2025 Berlin Design System",
		overlayPosition: "bottom",
		darkenImage: true,
	},
};

// Image with custom styles
export const CustomStyles: Story = {
	args: {
		src: "https://placehold.co/600x400",
		alt: "Sample image with custom styles",
		className: "border-4 border-blue-500 rounded-xl overflow-hidden",
		imgClassName: "filter sepia",
	},
};

// Images with zoom box
export const WithZoomBoxVertical: Story = {
	args: {
		src: "https://media.istockphoto.com/id/500601834/photo/lake-moraine-and-canoe-dock-in-banff-national-park.jpg?s=612x612&w=0&k=20&c=TRuwRNk0hMinV-XA0pyvaZHKIhHEtdpGqzmcGy-VAlo=",
		alt: "Sample placeholder image",
		caption: "Vertical Sample Image with ZoomBox",
		withZoomBox: true,
	},
};

export const WithZoomBoxHorizontal: Story = {
	args: {
		src: "https://media.istockphoto.com/id/534037450/photo/red-autumn-and-fishing-pier.jpg?s=612x612&w=0&k=20&c=RNaPpiYq6-Zu8f6xdXZfI8AakcgjL8zP5ifdf4phlQs=",
		alt: "Sample placeholder image",
		caption: "Horizontal Sample Image with ZoomBox",
		withZoomBox: true,
	},
};

export const WithZoomBoxQuadrant: Story = {
	args: {
		src: "/Wahrscheinlichkeiten.png",
		alt: "Sample placeholder image",
		caption: "Quadrant Sample Image with ZoomBox",
		withZoomBox: true,
	},
};
