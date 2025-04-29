import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
	title: "Components/Input",
	component: Input,
	argTypes: {
		onChange: { action: "changed" },
		variant: { control: { type: "radio" }, options: ["default", "outline"] },
		size: { control: { type: "radio" }, options: ["sm", "default", "lg"] },
	},
	args: {
		placeholder: "Enter text",
		type: "text",
		variant: "default",
	},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithValue: Story = {
	args: {
		value: "Hello World",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: "Disabled input",
	},
};

export const Password: Story = {
	args: {
		type: "password",
		placeholder: "Enter password",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
	},
};
