import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		disabled: {
			control: "boolean",
			description: "Whether the button is disabled",
			defaultValue: false,
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "Default Button",
	},
};

export const DefaultDisabled: Story = {
	args: {
		children: "Default Disabled",
		disabled: true,
	},
};

export const Light: Story = {
	args: {
		children: "Light Button",
		variant: "light",
	},
};

export const LightDisabled: Story = {
	args: {
		children: "Light Disabled",
		variant: "light",
		disabled: true,
	},
};

export const White: Story = {
	args: {
		children: "White Button",
		variant: "white",
	},
};

export const WhiteDisabled: Story = {
	args: {
		children: "White Disabled",
		variant: "white",
		disabled: true,
	},
};

export const Fulltone: Story = {
	args: {
		children: "Fulltone Button",
		variant: "fulltone",
	},
};

export const FulltoneDisabled: Story = {
	args: {
		children: "Fulltone Disabled",
		variant: "fulltone",
		disabled: true,
	},
};

export const LightFulltone: Story = {
	args: {
		children: "Light Fulltone Button",
		variant: "light-fulltone",
	},
};

export const LightFulltoneDisabled: Story = {
	args: {
		children: "Light Fulltone Disabled",
		variant: "light-fulltone",
		disabled: true,
	},
};

export const Negative: Story = {
	args: {
		children: "Negative Button",
		variant: "negative",
		className: "bg-gray-800",
	},
};

export const NegativeDisabled: Story = {
	args: {
		children: "Negative Disabled",
		variant: "negative",
		disabled: true,
		className: "bg-gray-800",
	},
};

export const NegativeLight: Story = {
	args: {
		children: "Negative Light Button",
		variant: "negative-light",
		className: "bg-gray-800",
	},
};

export const NegativeLightDisabled: Story = {
	args: {
		children: "Negative Light Disabled",
		variant: "negative-light",
		disabled: true,
		className: "bg-gray-800",
	},
};

export const Colored: Story = {
	args: {
		children: "Colored Button",
		variant: "colored",
	},
};

export const ColoredDisabled: Story = {
	args: {
		children: "Colored Button Disabled",
		variant: "colored",
		disabled: true,
	},
};

export const Clean: Story = {
	args: {
		children: "Clean Button",
		variant: "clean",
	},
};

export const CleanDisabled: Story = {
	args: {
		children: "Clean Button Disabled",
		variant: "clean",
		disabled: true,
	},
};

export const Play: Story = {
	args: {
		children: "Play Button",
		variant: "play",
	},
};

export const PlayDisabled: Story = {
	args: {
		children: "Play Button",
		variant: "play",
		disabled: true,
	},
};

export const Download: Story = {
	args: {
		children: "Download",
		variant: "download",
	},
};

export const DownloadDisabled: Story = {
	args: {
		children: "Download",
		variant: "download",
		disabled: true,
	},
};

export const Search: Story = {
	args: {
		children: "Search",
		variant: "search",
	},
};

export const SearchDisabled: Story = {
	args: {
		children: "Search",
		variant: "search",
		disabled: true,
	},
};

export const Filter: Story = {
	args: {
		children: "Filter",
		variant: "filter",
	},
};

export const FilterDisabled: Story = {
	args: {
		children: "Filter",
		variant: "filter",
		disabled: true,
	},
};

export const AddToCart: Story = {
	args: {
		children: "Add to Cart",
		variant: "addtocart",
	},
};

export const AddToCartDisabled: Story = {
	args: {
		children: "Add to Cart",
		variant: "addtocart",
		disabled: true,
	},
};

export const Close: Story = {
	args: {
		variant: "close",
		"aria-label": "Close",
	},
};

export const CloseDisabled: Story = {
	args: {
		variant: "close",
		"aria-label": "Close",
		disabled: true,
	},
};

export const Extern: Story = {
	args: {
		children: "External Link",
		variant: "extern",
	},
};

export const ExternDisabled: Story = {
	args: {
		children: "External Link",
		variant: "extern",
		disabled: true,
	},
};

export const Link: Story = {
	args: {
		children: "Link Button",
		variant: "link",
	},
};

export const LinkDisabled: Story = {
	args: {
		children: "Link Button",
		variant: "link",
		disabled: true,
	},
};

export const FullWidth: Story = {
	args: {
		children: "Full Width Button",
		size: "fullwidth",
	},
};

export const FullWidthDisabled: Story = {
	args: {
		children: "Full Width Button",
		size: "fullwidth",
		disabled: true,
	},
};

export const Booking: Story = {
	args: {
		children: "Book Now",
		booking: true,
		price: "€99",
	},
};

export const BookingDisabled: Story = {
	args: {
		children: "Book Now",
		booking: true,
		price: "€99",
		disabled: true,
	},
};

export const Back: Story = {
	args: {
		variant: "back",
		"aria-label": "Back",
	},
};

export const BackDisabled: Story = {
	args: {
		variant: "back",
		"aria-label": "Back",
		disabled: true,
	},
};

export const BackLink: Story = {
	args: {
		variant: "back-link",
		children: "Back button als Link",
	},
};

export const BackLinkDisabled: Story = {
	args: {
		variant: "back-link",
		children: "Back button als Link",
		disabled: true,
	},
};
