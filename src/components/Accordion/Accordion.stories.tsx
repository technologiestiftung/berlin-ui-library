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
	argTypes: {
		variant: {
			control: "radio",
			options: ["default", "footer"],
			description: "The visual style variant of the accordion",
			defaultValue: "footer",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const DefaultVariant: Story = {
	render: () => (
		<Accordion
			type="single"
			collapsible
			className="w-[400px]"
			variant="default"
		>
			<AccordionItem value="item-1" variant="default">
				<AccordionTrigger variant="default">Is it accessible?</AccordionTrigger>
				<AccordionContent variant="default">
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2" variant="default">
				<AccordionTrigger variant="default">Is it styled?</AccordionTrigger>
				<AccordionContent variant="default">
					Yes. It comes with default styling that matches the Berlin design
					system.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3" variant="default">
				<AccordionTrigger variant="default">Is it animated?</AccordionTrigger>
				<AccordionContent variant="default">
					Yes. It's animated by default, but you can disable it if needed.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};

export const FooterVariant: Story = {
	render: () => (
		<Accordion type="single" collapsible className="w-[400px]" variant="footer">
			<AccordionItem value="item-1" variant="footer">
				<AccordionTrigger variant="footer">Is it accessible?</AccordionTrigger>
				<AccordionContent variant="footer">
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2" variant="footer">
				<AccordionTrigger variant="footer">Is it styled?</AccordionTrigger>
				<AccordionContent variant="footer">
					Yes. It comes with default styling that matches the Berlin design
					system.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3" variant="footer">
				<AccordionTrigger variant="footer">Is it animated?</AccordionTrigger>
				<AccordionContent variant="footer">
					Yes. It's animated by default, but you can disable it if needed.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};

export const Multiple: Story = {
	render: () => (
		<Accordion type="multiple" className="w-[400px]" variant="default">
			<AccordionItem value="item-1" variant="default">
				<AccordionTrigger variant="default">First item</AccordionTrigger>
				<AccordionContent variant="default">
					This is the first item's content. You can open multiple items at once.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2" variant="default">
				<AccordionTrigger variant="default">Second item</AccordionTrigger>
				<AccordionContent variant="default">
					This is the second item's content.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3" variant="default">
				<AccordionTrigger variant="default">Third item</AccordionTrigger>
				<AccordionContent variant="default">
					This is the third item's content.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};
