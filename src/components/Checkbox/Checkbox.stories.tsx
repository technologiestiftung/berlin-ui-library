import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
	title: "Components/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	render: () => (
		<div className="flex items-center space-x-2">
			<Checkbox id="terms" />
			<label
				htmlFor="terms"
				className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
			>
				Accept terms and conditions
			</label>
		</div>
	),
};

export const Checked: Story = {
	render: () => (
		<div className="flex items-center space-x-2">
			<Checkbox id="checked" defaultChecked />
			<label
				htmlFor="checked"
				className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
			>
				This option is checked by default
			</label>
		</div>
	),
};

export const Disabled: Story = {
	render: () => (
		<div className="flex items-center space-x-2">
			<Checkbox id="disabled" disabled />
			<label
				htmlFor="disabled"
				className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
			>
				This option is disabled
			</label>
		</div>
	),
};

export const DisabledChecked: Story = {
	render: () => (
		<div className="flex items-center space-x-2">
			<Checkbox id="disabled-checked" disabled defaultChecked />
			<label
				htmlFor="disabled-checked"
				className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
			>
				This option is disabled and checked
			</label>
		</div>
	),
};

export const WithDescription: Story = {
	render: () => (
		<div className="items-top flex space-x-2">
			<Checkbox id="terms-with-description" />
			<div className="grid gap-1.5 leading-none">
				<label
					htmlFor="terms-with-description"
					className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
				>
					Accept terms and conditions
				</label>
				<p className="text-muted-foreground text-sm">
					You agree to our Terms of Service and Privacy Policy.
				</p>
			</div>
		</div>
	),
};
