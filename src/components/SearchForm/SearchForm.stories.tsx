import type { Meta, StoryObj } from "@storybook/react";
import { SearchForm } from "./SearchForm";

const meta: Meta<typeof SearchForm> = {
	title: "Components/SearchForm",
	component: SearchForm,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		onSubmit: { action: "submitted" },
		onChange: { action: "changed" },
	},
};

export default meta;
type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {
	args: {
		placeholder: "Suchbegriff",
		label: "Suchbegriff",
		submitLabel: "Suchen",
	},
};

export const WithDefaultValue: Story = {
	args: {
		placeholder: "Suchbegriff",
		defaultValue: "Berlin",
		label: "Suchbegriff",
		submitLabel: "Suchen",
	},
};

export const CustomPlaceholder: Story = {
	args: {
		placeholder: "Seiten durchsuchen...",
		label: "Websuche",
		submitLabel: "Suchen",
	},
};

export const ControlledExample: Story = {
	render: () => {
		return (
			<div className="flex flex-col gap-4">
				<h3 className="text-lg font-bold">Controlled Search Form Example</h3>
				<p className="max-w-md text-sm">
					This example shows how the SearchForm can be used as a controlled
					component where the parent manages the state. In a real application,
					you would maintain the state and handle the onChange and onSubmit
					events.
				</p>
				<SearchForm
					value="Berlin"
					onChange={(value) => console.warn("Value changed:", value)}
					onSubmit={(value) => console.warn("Form submitted with:", value)}
				/>
			</div>
		);
	},
};

export const InAForm: Story = {
	render: () => {
		return (
			<div className="w-full max-w-2xl border border-gray-300 p-6">
				<h2 className="mb-4 text-2xl font-bold">Beispiel Website</h2>
				<div className="mb-8">
					<p className="mb-4">
						Dies ist ein Beispiel für die Verwendung der Suchkomponente auf
						einer Website.
					</p>
					<SearchForm
						placeholder="Website durchsuchen"
						onSubmit={(value) => console.warn("Searching for:", value)}
					/>
				</div>
			</div>
		);
	},
};
