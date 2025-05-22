import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
	title: "Elements/Checkbox",
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
				className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
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
				className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
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
				className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
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
				className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
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
					className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
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

// Styled variant examples
export const StyledVariant: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex items-center space-x-2">
				<Checkbox id="styled-unchecked" variant="styled" />
				<label htmlFor="styled-unchecked" className="text-sm font-medium">
					Styled variant (unchecked)
				</label>
			</div>
			<div className="flex items-center space-x-2">
				<Checkbox id="styled-checked" variant="styled" defaultChecked />
				<label htmlFor="styled-checked" className="text-sm font-medium">
					Styled variant (checked)
				</label>
			</div>
		</div>
	),
};

// Styled  box example similar to the image
export const StyledBoxes: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			{/* Starkregen styled box */}
			<div className="flex w-[240px] border-2 border-black">
				<div className="flex h-12 w-12 items-center justify-center border-r-2 border-black bg-white">
					<Checkbox
						id="starkregen"
						variant="styled"
						className="h-5 w-5"
						defaultChecked
					/>
				</div>
				<div className="flex h-12 flex-1 items-center bg-red px-4 font-bold text-white">
					Starkregen
				</div>
			</div>

			{/* Flusshochwasser styled box */}
			<div className="flex w-[240px] border-2 border-black">
				<div className="flex h-12 w-12 items-center justify-center border-r-2 border-black bg-white">
					<Checkbox id="flusshochwasser" variant="styled" className="h-5 w-5" />
				</div>
				<div className="flex h-12 flex-1 items-center bg-red px-4 font-bold text-white">
					Flusshochwasser
				</div>
			</div>
		</div>
	),
};
