import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from "./List";

const meta: Meta<typeof List> = {
	title: "Elements/List",
	component: List,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "radio" },
			options: ["unordered", "ordered"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Unordered: Story = {
	args: {
		variant: "unordered",
	},
	render: (args) => (
		<div className="w-96">
			<List {...args}>
				<ListItem>First list item with some longer text to demonstrate word breaking</ListItem>
				<ListItem>Second list item</ListItem>
				<ListItem>
					Third list item with nested list:
					<List variant="unordered">
						<ListItem>Nested item 1</ListItem>
						<ListItem>Nested item 2</ListItem>
					</List>
				</ListItem>
				<ListItem>Fourth list item</ListItem>
			</List>
		</div>
	),
};

export const Ordered: Story = {
	args: {
		variant: "ordered",
	},
	render: (args) => (
		<div className="w-96">
			<List {...args}>
				<ListItem>First numbered item with some longer text to demonstrate word breaking</ListItem>
				<ListItem>Second numbered item</ListItem>
				<ListItem>
					Third numbered item with nested list:
					<List variant="ordered">
						<ListItem>Nested numbered item 1</ListItem>
						<ListItem>Nested numbered item 2</ListItem>
					</List>
				</ListItem>
				<ListItem>Fourth numbered item</ListItem>
			</List>
		</div>
	),
};

export const Mixed: Story = {
	render: () => (
		<div className="w-96">
			<h3 className="mb-4 text-lg font-bold">Mixed Lists Example</h3>
			<List variant="unordered">
				<ListItem>Unordered item 1</ListItem>
				<ListItem>
					Unordered item 2 with nested ordered list:
					<List variant="ordered">
						<ListItem>Ordered nested item 1</ListItem>
						<ListItem>Ordered nested item 2</ListItem>
					</List>
				</ListItem>
				<ListItem>Unordered item 3</ListItem>
			</List>
			
			<List variant="ordered">
				<ListItem>Ordered item 1</ListItem>
				<ListItem>
					Ordered item 2 with nested unordered list:
					<List variant="unordered">
						<ListItem>Unordered nested item 1</ListItem>
						<ListItem>Unordered nested item 2</ListItem>
					</List>
				</ListItem>
				<ListItem>Ordered item 3</ListItem>
			</List>
		</div>
	),
};