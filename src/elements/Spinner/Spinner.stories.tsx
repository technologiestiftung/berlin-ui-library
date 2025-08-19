import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
	title: "Elements/Spinner",
	component: Spinner,
	tags: ["autodocs"],
	argTypes: {
		withText: {
			control: "boolean",
			defaultValue: false,
			description: "Whether to show loading text under the spinner",
		},
		size: {
			control: "select",
			options: ["small", "mid", "large"],
			description: "Controls the size of the spinner",
			defaultValue: "mid",
		},
		text: {
			control: "text",
			description: "Set the text under the spinner",
		},
		position: {
			control: "select",
			options: ["under", "right"],
			description: "Controls the position of the text relative to the spinner",
			defaultValue: "under",
		},
		textColor: {
			control: "select",
			options: ["black", "red"],
			description: "Controls the color of the text",
			defaultValue: "red",
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		withText: false,
	},
};

export const WithText: Story = {
	args: {
		withText: true,
	},
};
export const Small: Story = {
	args: {
		size: "small",
	},
};
export const SmallWithText: Story = {
	args: {
		withText: true,
		size: "small",
	},
};
export const LargeWithText: Story = {
	args: {
		withText: true,
		size: "large",
	},
};
export const IndividualText: Story = {
	args: {
		text: "Custom loading text",
	},
};
export const RightText: Story = {
	args: {
		withText: true,
		position: "right",
	},
};
