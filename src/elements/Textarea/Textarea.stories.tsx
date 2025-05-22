import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

// @ts-expect-error TS6133 - Required for Storybook setup despite react-jsx transform
import * as React from "react";

const meta: Meta<typeof Textarea> = {
	title: "Elements/Textarea",
	component: Textarea,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
	render: () => (
		<Textarea placeholder="Type your message here" className="w-[300px]" />
	),
};

export const WithValue: Story = {
	render: () => (
		<Textarea
			className="w-[300px]"
			value="This is some sample text that's already in the textarea when it loads."
			readOnly
		/>
	),
};

export const Disabled: Story = {
	render: () => (
		<Textarea
			placeholder="You cannot type here"
			className="w-[300px]"
			disabled
		/>
	),
};

export const WithLabel: Story = {
	render: () => (
		<div className="grid w-[300px] gap-1.5">
			<label htmlFor="message" className="text-sm font-medium">
				Your message
			</label>
			<Textarea id="message" placeholder="Type your message here" />
			<p className="text-muted-foreground text-sm">
				Your message will be sent to our team.
			</p>
		</div>
	),
};

export const Large: Story = {
	render: () => (
		<Textarea
			placeholder="Type your detailed description here"
			className="h-[200px] w-[400px]"
		/>
	),
};
