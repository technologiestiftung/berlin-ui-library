import type { Meta, StoryObj } from "@storybook/react";
import { SubmitButton } from "./SubmitButton";

const meta: Meta<typeof SubmitButton> = {
	title: "Components/SubmitButton",
	component: SubmitButton,
	argTypes: { onClick: { action: "clicked" } },
	args: {
		children: "Submit",
	},
};
export default meta;

type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: "Submitting...",
	},
};
