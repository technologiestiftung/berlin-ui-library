import type { Meta, StoryObj } from "@storybook/react";
import { Opener } from "./Opener";

const meta: Meta<typeof Opener> = {
	title: "Elements/Opener",
	component: Opener,
	tags: ["autodocs"],
	argTypes: {
		titleImage: {
			control: "text",
			description: "Set the background image for the opener",
		},
		title: {
			control: "text",
			description: "Set the title for the opener",
		},
		description: {
			control: "text",
			description: "Set the description for the opener",
		},
		copyright: {
			control: "text",
			description: "Set the copyright for the opener image",
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		titleImage:
			"https://media.istockphoto.com/id/500601834/photo/lake-moraine-and-canoe-dock-in-banff-national-park.jpg?s=612x612&w=0&k=20&c=TRuwRNk0hMinV-XA0pyvaZHKIhHEtdpGqzmcGy-VAlo=",
		title: "Opener Title",
		description: "This is the description for the opener.",
		copyright: "© 2024 Your Company",
	},
};
