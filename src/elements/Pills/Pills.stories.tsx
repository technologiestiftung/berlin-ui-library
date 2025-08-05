import type { Meta, StoryObj } from "@storybook/react";
import { Pill, FilterPillGroup } from "./index";
import { useState } from "react";
import React from "react";

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

export const FilterOutline: Story = {
	args: {
		children: "Outline Filter Pill",
		variant: "filter-outline",
	},
};

export const FilterOutlineActive: Story = {
	args: {
		children: "Active Outline Filter Pill",
		variant: "filter-outline",
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

export const SizeVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<h3 className="text-lg font-bold">Size Variants</h3>
			<div className="flex flex-wrap items-center gap-2">
				<Pill variant="default" size="default">
					Default Size
				</Pill>
				<Pill variant="default" size="md">
					Medium Size
				</Pill>
				<Pill variant="default" size="lg">
					Large Size
				</Pill>
				<Pill variant="default" size="xl">
					Extra Large Size
				</Pill>
			</div>
		</div>
	),
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

			<h3 className="text-lg font-bold">Medium Size</h3>
			<div className="flex flex-wrap gap-2">
				<Pill variant="info" size="md">
					Medium Info
				</Pill>
				<Pill variant="message" size="md">
					Medium Message
				</Pill>
				<Pill variant="error" size="md">
					Medium Error
				</Pill>
				<Pill variant="success" size="md">
					Medium Success
				</Pill>
			</div>

			<h3 className="text-lg font-bold">Large Size</h3>
			<div className="flex flex-wrap gap-2">
				<Pill variant="info" size="lg">
					Large Info
				</Pill>
				<Pill variant="message" size="lg">
					Large Message
				</Pill>
				<Pill variant="error" size="lg">
					Large Error
				</Pill>
				<Pill variant="success" size="lg">
					Large Success
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
				<Pill variant="filter-outline">Filter Outline</Pill>
				<Pill variant="filter-outline" active>
					Active Filter Outline
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
				<Pill variant="default" size="md">
					Medium Default
				</Pill>
				<Pill variant="error" size="lg">
					Large Error
				</Pill>
				<Pill variant="success" size="xl">
					XL Success
				</Pill>
			</div>
		</div>
	),
};

export const OptionalIcons: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<h3 className="text-lg font-bold">With Icons (Default)</h3>
			<div className="flex flex-wrap gap-2">
				<Pill variant="info">Info with Icon</Pill>
				<Pill variant="error">Error with Icon</Pill>
				<Pill variant="success">Success with Icon</Pill>
				<Pill variant="message">Message with Icon</Pill>
				<Pill variant="filter" active>
					Active Filter with Icon
				</Pill>
			</div>

			<h3 className="text-lg font-bold">Without Icons (showIcon=false)</h3>
			<div className="flex flex-wrap gap-2">
				<Pill variant="info" showIcon={false}>
					Info without Icon
				</Pill>
				<Pill variant="error" showIcon={false}>
					Error without Icon
				</Pill>
				<Pill variant="success" showIcon={false}>
					Success without Icon
				</Pill>
				<Pill variant="message" showIcon={false}>
					Message without Icon
				</Pill>
				<Pill variant="filter" active showIcon={false}>
					Active Filter without Icon
				</Pill>
			</div>

			<h3 className="text-lg font-bold">Large Size Comparison</h3>
			<div className="flex flex-wrap items-center gap-2">
				<Pill variant="info" size="lg">
					Large with Icon
				</Pill>
				<Pill variant="info" size="lg" showIcon={false}>
					Large without Icon
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
					<h3 className="mb-2 text-lg font-bold">Medium Filter Pills</h3>
					<FilterPillGroup
						activeValues={activeFilters}
						onValueToggle={handleFilterToggle}
						size="md"
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

				<div className="mt-4">
					<h3 className="mb-2 text-lg font-bold">Large Filter Pills</h3>
					<FilterPillGroup
						activeValues={activeFilters}
						onValueToggle={handleFilterToggle}
						size="lg"
					>
						<Pill variant="filter" value="Large 1">
							Large 1
						</Pill>
						<Pill variant="filter" value="Large 2">
							Large 2
						</Pill>
					</FilterPillGroup>
				</div>

				<div className="mt-4">
					<h3 className="mb-2 text-lg font-bold">Extra Large Filter Pills</h3>
					<FilterPillGroup
						activeValues={activeFilters}
						onValueToggle={handleFilterToggle}
						size="xl"
					>
						<Pill variant="filter" value="Extra Large 1">
							Extra Large 1
						</Pill>
						<Pill variant="filter" value="Extra Large 2">
							Extra Large 2
						</Pill>
					</FilterPillGroup>
				</div>

				<div className="mt-4">
					<h3 className="mb-2 text-lg font-bold">Filter Pills Without Icons</h3>
					<FilterPillGroup
						activeValues={activeFilters}
						onValueToggle={handleFilterToggle}
						size="md"
						showIcon={false}
					>
						<Pill variant="filter" value="No Icon 1">
							No Icon 1
						</Pill>
						<Pill variant="filter" value="No Icon 2">
							No Icon 2
						</Pill>
						<Pill variant="filter" value="No Icon 3">
							No Icon 3
						</Pill>
					</FilterPillGroup>
				</div>
			</div>
		);
	},
};
