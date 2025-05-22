import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";
import { Check, Menu, BellRing, Italic, Bold, Underline } from "lucide-react";

const meta: Meta<typeof Toggle> = {
	title: "Elements/Toggle",
	component: Toggle,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
	args: {
		"aria-label": "Toggle bold",
		children: <Bold />,
	},
};

export const WithText: Story = {
	args: {
		"aria-label": "Toggle menu",
		children: (
			<>
				<Menu />
				<span>Menu</span>
			</>
		),
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		"aria-label": "Toggle italic",
		children: <span>Italic</span>,
	},
};

export const Small: Story = {
	args: {
		size: "md",
		"aria-label": "Toggle underline",
		children: <Underline />,
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		"aria-label": "Toggle notifications",
		children: (
			<>
				<BellRing />
				<span>Notifications</span>
			</>
		),
	},
};

// Pressed state example
export const Pressed: Story = {
	args: {
		pressed: true,
		"aria-label": "Toggle checked",
		children: (
			<>
				<Check />
				<span>Checked</span>
			</>
		),
	},
};

// Disabled state example
export const Disabled: Story = {
	args: {
		disabled: true,
		"aria-label": "Toggle disabled",
		children: (
			<>
				<Menu />
				<span>Disabled</span>
			</>
		),
	},
};

// Various toggle button examples in a group
export const ToggleGroup: Story = {
	render: () => (
		<div className="flex flex-col gap-5">
			<p className="text-muted-foreground text-sm">Text formatting example:</p>
			<div className="flex items-center gap-2">
				<Toggle aria-label="Toggle bold">
					<Bold />
				</Toggle>
				<Toggle aria-label="Toggle italic">
					<Italic />
				</Toggle>
				<Toggle aria-label="Toggle underline">
					<Underline />
				</Toggle>
			</div>

			<p className="text-muted-foreground text-sm">Outline variant:</p>
			<div className="flex items-center gap-2">
				<Toggle variant="outline" aria-label="Toggle bold">
					<Bold />
				</Toggle>
				<Toggle variant="outline" aria-label="Toggle italic">
					<Italic />
				</Toggle>
				<Toggle variant="outline" aria-label="Toggle underline">
					<Underline />
				</Toggle>
			</div>

			<p className="text-muted-foreground text-sm">With different sizes:</p>
			<div className="flex items-center gap-2">
				<Toggle size="md" aria-label="Small toggle">
					<span>S</span>
				</Toggle>
				<Toggle aria-label="Default toggle">
					<span>M</span>
				</Toggle>
				<Toggle size="lg" aria-label="Large toggle">
					<span>L</span>
				</Toggle>
			</div>
		</div>
	),
};
