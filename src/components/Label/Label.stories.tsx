import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
	title: "Components/Label",
	component: Label,
	args: {
		htmlFor: "example-input",
		children: "Example Label",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Error: Story = {
	args: {
		className: "text-destructive",
		children: "Error Label",
	},
};
