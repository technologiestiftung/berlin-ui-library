import type { Meta, StoryObj } from "@storybook/react";
import { Pill, FilterPillGroup } from "./index";
import { useState } from "react";

const meta: Meta<typeof Pill> = {
	title: "Elements/Pill",
	component: Pill,
	tags: ["autodocs"],
	args: {
		children: "Pill",
	},
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = {
	args: {
		children: "Default Pill",
		variant: "default",
	},
};

export const Error: Story = {
	args: {
		children: "Error Pill",
		variant: "error",
	},
};

export const Success: Story = {
	args: {
		children: "Success Pill",
		variant: "success",
	},
};

export const Info: Story = {
	args: {
		children: "Info Pill",
		variant: "info",
	},
};

export const Message: Story = {
	args: {
		children: "Message Pill",
		variant: "message",
	},
};

export const Filter: Story = {
	args: {
		children: "Filter Pill",
		variant: "filter",
	},
};

export const FilterActive: Story = {
	args: {
		children: "Active Filter Pill",
		variant: "filter",
		active: true,
	},
};

export const FilterToggle: Story = {
	render: () => {
		// Using React hooks in Storybook render function
		const [active, setActive] = React.useState(false);

		return (
			<Pill
				variant="filter"
				active={active}
				onToggle={() => setActive(!active)}
			>
				{active ? "Active Filter" : "Inactive Filter"}
			</Pill>
		);
	},
};

export const Inverted: Story = {
	args: {
		children: "Inverted Pill",
		variant: "default",
		inverted: true,
	},
};

export const ErrorInverted: Story = {
	args: {
		children: "Error Inverted Pill",
		variant: "error",
		inverted: true,
	},
};

export const BigPill: Story = {
	args: {
		children: "Big Pill",
		variant: "default",
		size: "big",
	},
};

export const WithIcon: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Pill variant="default">
				<span>With Icon</span>
				<i className="fa fa-check" aria-hidden="true">
					✓
				</i>
			</Pill>
			<Pill variant="error">
				<i className="fa fa-exclamation-circle" aria-hidden="true">
					!
				</i>
				<span>Error with Icon</span>
			</Pill>
			<Pill variant="success">
				<span>Success</span>
				<i className="fa fa-check" aria-hidden="true">
					✓
				</i>
			</Pill>
		</div>
	),
};

export const BuiltInIcons: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<h3 className="text-lg font-bold">Default Size</h3>
			<div className="flex flex-wrap gap-2">
				<Pill variant="info">Info with Icon</Pill>
				<Pill variant="message">Message with Icon</Pill>
				<Pill variant="error">Error with Icon</Pill>
				<Pill variant="success">Success with Icon</Pill>
			</div>

			<h3 className="text-lg font-bold">Inverted Variants</h3>
			<div className="flex flex-wrap gap-2">
				<Pill variant="info" inverted>
					Info Inverted
				</Pill>
				<Pill variant="message" inverted>
					Message Inverted
				</Pill>
				<Pill variant="error" inverted>
					Error Inverted
				</Pill>
				<Pill variant="success" inverted>
					Success Inverted
				</Pill>
			</div>

			<h3 className="text-lg font-bold">Big Size</h3>
			<div className="flex flex-wrap gap-2">
				<Pill variant="info" size="big">
					Big Info
				</Pill>
				<Pill variant="message" size="big">
					Big Message
				</Pill>
				<Pill variant="error" size="big">
					Big Error
				</Pill>
				<Pill variant="success" size="big">
					Big Success
				</Pill>
			</div>
		</div>
	),
};

export const WithButton: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Pill variant="default">
				<span>Closable</span>
				<button onClick={() => alert("Close clicked")}>×</button>
			</Pill>
			{/* This example uses a custom button instead of the built-in InfoIcon */}
			<Pill variant="info" className="!gap-1">
				<span>Custom Info Button</span>
				<button onClick={() => alert("Info action clicked")}>ⓘ</button>
			</Pill>
		</div>
	),
};

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex flex-wrap gap-2">
				<Pill variant="default">Default</Pill>
				<Pill variant="error">Error</Pill>
				<Pill variant="success">Success</Pill>
				<Pill variant="info">Info</Pill>
				<Pill variant="message">Message</Pill>
				<Pill variant="filter">Filter</Pill>
				<Pill variant="filter" active>
					Active Filter
				</Pill>
			</div>

			<div className="flex flex-wrap gap-2">
				<Pill variant="default" inverted>
					Default Inverted
				</Pill>
				<Pill variant="error" inverted>
					Error Inverted
				</Pill>
				<Pill variant="success" inverted>
					Success Inverted
				</Pill>
				<Pill variant="info" inverted>
					Info Inverted
				</Pill>
				<Pill variant="message" inverted>
					Message Inverted
				</Pill>
			</div>

			<div className="flex flex-wrap gap-2">
				<Pill variant="default" size="big">
					Big Default
				</Pill>
				<Pill variant="error" size="big">
					Big Error
				</Pill>
				<Pill variant="success" size="big">
					Big Success
				</Pill>
			</div>
		</div>
	),
};

export const FilterPillGroupExample: StoryObj<typeof FilterPillGroup> = {
	render: () => {
		const [activeFilters, setActiveFilters] = useState<string[]>([]);

		const handleFilterToggle = (value: string) => {
			setActiveFilters((prev) =>
				prev.includes(value)
					? prev.filter((v) => v !== value)
					: [...prev, value],
			);
		};

		return (
			<div className="flex flex-col gap-4">
				<div>
					<h3 className="mb-2 text-lg font-bold">
						Active filters: {activeFilters.join(", ") || "None"}
					</h3>
					<FilterPillGroup
						activeValues={activeFilters}
						onValueToggle={handleFilterToggle}
					>
						<Pill variant="filter" value="Red">
							Red
						</Pill>
						<Pill variant="filter" value="Green">
							Green
						</Pill>
						<Pill variant="filter" value="Blue">
							Blue
						</Pill>
						<Pill variant="filter" value="Yellow">
							Yellow
						</Pill>
						<Pill variant="filter" value="Purple">
							Purple
						</Pill>
					</FilterPillGroup>
				</div>

				<div className="mt-4">
					<h3 className="mb-2 text-lg font-bold">Big Filter Pills</h3>
					<FilterPillGroup
						activeValues={activeFilters}
						onValueToggle={handleFilterToggle}
						size="big"
					>
						<Pill variant="filter" value="Category 1">
							Category 1
						</Pill>
						<Pill variant="filter" value="Category 2">
							Category 2
						</Pill>
						<Pill variant="filter" value="Category 3">
							Category 3
						</Pill>
					</FilterPillGroup>
				</div>
			</div>
		);
	},
};
