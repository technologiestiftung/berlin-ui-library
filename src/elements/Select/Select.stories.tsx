import type { Meta, StoryObj } from "@storybook/react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
	SelectSeparator,
} from "./Select";

// @ts-expect-error TS6133 - Required for Storybook setup despite react-jsx transform
import * as React from "react";

const meta: Meta<typeof Select> = {
	title: "Elements/Select",
	component: Select,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="blueberry">Blueberry</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
					<SelectItem value="strawberry">Strawberry</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

export const WithGroups: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[200px]">
				<SelectValue placeholder="Select a location" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Europe</SelectLabel>
					<SelectItem value="berlin">Berlin</SelectItem>
					<SelectItem value="paris">Paris</SelectItem>
					<SelectItem value="london">London</SelectItem>
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectLabel>North America</SelectLabel>
					<SelectItem value="new-york">New York</SelectItem>
					<SelectItem value="san-francisco">San Francisco</SelectItem>
					<SelectItem value="toronto">Toronto</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

export const Disabled: Story = {
	render: () => (
		<Select disabled>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Disabled" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value="not-selectable">Not selectable</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

export const WithDefaultValue: Story = {
	render: () => (
		<Select defaultValue="cat">
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a pet" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value="dog">Dog</SelectItem>
					<SelectItem value="cat">Cat</SelectItem>
					<SelectItem value="fish">Fish</SelectItem>
					<SelectItem value="rabbit">Rabbit</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

export const WithLabel: Story = {
	render: () => (
		<div className="grid w-[200px] gap-1.5">
			<label htmlFor="country" className="text-sm font-medium">
				Country
			</label>
			<Select>
				<SelectTrigger id="country">
					<SelectValue placeholder="Select a country" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="germany">Germany</SelectItem>
						<SelectItem value="france">France</SelectItem>
						<SelectItem value="spain">Spain</SelectItem>
						<SelectItem value="italy">Italy</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			<p className="text-muted-foreground text-sm">
				Select the country you're from.
			</p>
		</div>
	),
};
