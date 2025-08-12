/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { iconNames } from "./iconRegistry";

const meta: Meta<typeof Icon> = {
	title: "Elements/Icon",
	component: Icon,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		name: {
			control: "select",
			options: iconNames, // Automatically populated from file system
		},
		className: {
			control: "text",
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: "search",
	},
};

export const WithCustomSize: Story = {
	args: {
		name: "star",
		className: "w-8 h-8 text-yellow-500",
	},
};

export const TrafficIcon: Story = {
	args: {
		name: "traffic-ubahn",
		className: "size-12",
	},
};

export const IconGallery: Story = {
	render: () => {
		const trafficIcons = iconNames.filter((name) =>
			name.startsWith("traffic-"),
		);
		const regularIcons = iconNames.filter(
			(name) => !name.startsWith("traffic-"),
		);

		return (
			<div className="max-w-6xl space-y-8 p-4">
				{/* Regular icons (with currentColor) */}
				<div>
					<h3 className="mb-4 text-lg font-semibold text-gray-800">
						Regular Icons
					</h3>
					<div className="grid grid-cols-8 gap-4">
						{regularIcons.map((iconName) => (
							<div
								key={iconName}
								className="flex flex-col items-center gap-2 p-2"
							>
								<Icon name={iconName as any} className="size-6 text-gray-700" />
								<span className="text-center text-xs break-words text-gray-600">
									{iconName}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Traffic icons (preserve original colors) */}
				{trafficIcons.length > 0 && (
					<div>
						<h3 className="mb-4 text-lg font-semibold text-gray-800">
							Traffic Icons{" "}
							<span className="text-sm font-normal">
								(preserve original colors)
							</span>
						</h3>
						<div className="grid grid-cols-8 gap-4">
							{trafficIcons.map((iconName) => (
								<div
									key={iconName}
									className="flex flex-col items-center gap-2 p-2"
								>
									<Icon name={iconName as any} className="size-8" />
									<span className="text-center text-xs break-words text-gray-600">
										{iconName.replace("traffic-", "")}
									</span>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		);
	},
};
