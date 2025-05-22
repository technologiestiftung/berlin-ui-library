import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

// @ts-expect-error TS6133 - Required for Storybook setup despite react-jsx transform
import * as React from "react";

const meta: Meta<typeof RadioGroup> = {
	title: "Elements/RadioGroup",
	component: RadioGroup,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
	render: () => (
		<RadioGroup defaultValue="option-one">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-one" id="option-one" />
				<label htmlFor="option-one" className="text-sm font-medium">
					Option One
				</label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-two" id="option-two" />
				<label htmlFor="option-two" className="text-sm font-medium">
					Option Two
				</label>
			</div>
		</RadioGroup>
	),
};

export const WithDescriptions: Story = {
	render: () => (
		<RadioGroup defaultValue="default">
			<div className="flex items-start space-x-2">
				<RadioGroupItem value="default" id="r1" />
				<div className="grid gap-1.5 leading-none">
					<label
						htmlFor="r1"
						className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
					>
						Default
					</label>
					<p className="text-muted-foreground text-sm">
						Use the system default theme.
					</p>
				</div>
			</div>
			<div className="flex items-start space-x-2">
				<RadioGroupItem value="light" id="r2" />
				<div className="grid gap-1.5 leading-none">
					<label
						htmlFor="r2"
						className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
					>
						Light
					</label>
					<p className="text-muted-foreground text-sm">Use the light theme.</p>
				</div>
			</div>
			<div className="flex items-start space-x-2">
				<RadioGroupItem value="dark" id="r3" />
				<div className="grid gap-1.5 leading-none">
					<label
						htmlFor="r3"
						className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
					>
						Dark
					</label>
					<p className="text-muted-foreground text-sm">Use the dark theme.</p>
				</div>
			</div>
		</RadioGroup>
	),
};

export const Disabled: Story = {
	render: () => (
		<RadioGroup defaultValue="option-one" disabled>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-one" id="disabled-option-one" />
				<label
					htmlFor="disabled-option-one"
					className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
				>
					Option One (Selected & Disabled)
				</label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-two" id="disabled-option-two" />
				<label
					htmlFor="disabled-option-two"
					className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
				>
					Option Two (Disabled)
				</label>
			</div>
		</RadioGroup>
	),
};

export const Horizontal: Story = {
	render: () => (
		<RadioGroup defaultValue="option-one" className="flex flex-row space-x-4">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-one" id="horizontal-one" />
				<label htmlFor="horizontal-one" className="text-sm font-medium">
					Yes
				</label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-two" id="horizontal-two" />
				<label htmlFor="horizontal-two" className="text-sm font-medium">
					No
				</label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-three" id="horizontal-three" />
				<label htmlFor="horizontal-three" className="text-sm font-medium">
					Maybe
				</label>
			</div>
		</RadioGroup>
	),
};
