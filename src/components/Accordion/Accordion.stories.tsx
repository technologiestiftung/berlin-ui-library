import type { Meta, StoryObj } from "@storybook/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./Accordion";

// @ts-expect-error TS6133 - Required for Storybook setup despite react-jsx transform
import * as React from "react";

const meta: Meta<typeof Accordion> = {
	title: "Components/Accordion",
	component: Accordion,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
	render: () => (
		<Accordion type="single" collapsible className="w-[400px]">
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Is it styled?</AccordionTrigger>
				<AccordionContent>
					Yes. It comes with default styling that matches the Berlin design
					system.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. It's animated by default, but you can disable it if needed.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};

export const Multiple: Story = {
	render: () => (
		<Accordion type="multiple" className="w-[400px]">
			<AccordionItem value="item-1">
				<AccordionTrigger>First item</AccordionTrigger>
				<AccordionContent>
					This is the first item's content. You can open multiple items at once.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Second item</AccordionTrigger>
				<AccordionContent>This is the second item's content.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Third item</AccordionTrigger>
				<AccordionContent>This is the third item's content.</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};
