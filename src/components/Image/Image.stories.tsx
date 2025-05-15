import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";

const meta: Meta<typeof Image> = {
	title: "Components/Image",
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
