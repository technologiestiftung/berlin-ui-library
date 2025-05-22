import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "./index";

const meta: Meta<typeof Panel> = {
	title: "Elements/Panel",
	component: Panel,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: [
				"heavy",
				"dark",
				"light",
				"clean",
				"bordered",
				"colored",
				"boxed",
				"white",
				"hint",
			],
			description: "The visual style variant of the panel",
		},
		removeInnerPanels: {
			control: "boolean",
			description:
				"Controls whether nested panels should have their styling removed",
		},
		footer: {
			control: "text",
			description: "Content to display in the panel footer",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Default: Story = {
	args: {
		variant: "light",
		children: <p>This is a default panel with light styling.</p>,
	},
};

export const Heavy: Story = {
	args: {
		variant: "heavy",
		children: <p>This is a panel with heavy styling.</p>,
	},
};

export const Dark: Story = {
	args: {
		variant: "dark",
		children: (
			<>
				<h3>Dark Panel</h3>
				<p>This is a panel with dark styling.</p>
				<a href="#">This is a link</a>
			</>
		),
	},
};

export const Light: Story = {
	args: {
		variant: "light",
		children: <p>This is a panel with light styling.</p>,
	},
};

export const Clean: Story = {
	args: {
		variant: "clean",
		children: (
			<p>This is a panel with clean styling (no background or border).</p>
		),
	},
};

export const Bordered: Story = {
	args: {
		variant: "bordered",
		children: <p>This panel has borders on the top and bottom only.</p>,
	},
};

export const Colored: Story = {
	args: {
		variant: "colored",
		children: (
			<>
				<h3>Colored Panel</h3>
				<p>This is a panel with colored styling.</p>
			</>
		),
	},
};

export const Boxed: Story = {
	args: {
		variant: "boxed",
		children: <p>This is a panel with boxed styling (black border).</p>,
	},
};

export const White: Story = {
	args: {
		variant: "white",
		children: <p>This is a panel with white styling.</p>,
	},
};

export const Hint: Story = {
	args: {
		variant: "hint",
		children: <p>This is a hint panel with an arrow indicator.</p>,
	},
};

export const WithFooter: Story = {
	args: {
		variant: "heavy",
		children: <p>This panel has a footer section.</p>,
		footer: <div className="p-[18px]">Footer content goes here</div>,
	},
};

export const NestedPanels: Story = {
	args: {
		variant: "heavy",
		children: (
			<>
				<p>This is the outer panel.</p>
				<Panel variant="heavy">
					<p>This is a nested panel.</p>
				</Panel>
			</>
		),
	},
};

export const NestedPanelsRemoved: Story = {
	args: {
		variant: "heavy",
		removeInnerPanels: true,
		children: (
			<>
				<p>This is the outer panel with nested panel styling removed.</p>
				<Panel variant="heavy">
					<p>This nested panel has its styling removed.</p>
				</Panel>
			</>
		),
	},
};
