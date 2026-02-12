import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
	title: "Elements/Link",
	component: Link,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		href: {
			control: "text",
			description: "The URL that the link points to",
		},
		variant: {
			control: "select",
			options: ["default", "extern"],
			description: "The visual variant of the link",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Link>;

// Default Link
export const Default: Story = {
	args: {
		children: "Default Link",
		href: "#",
	},
};

// External Link
export const External: Story = {
	args: {
		children: "External Link",
		variant: "extern",
		href: "https://example.com",
	},
};