import type { Meta, StoryObj } from "@storybook/react";
import { Opener } from "./Opener";

const meta: Meta<typeof Opener> = {
	title: "Elements/Opener",
	component: Opener,
	tags: ["autodocs"],
	argTypes: {
		src: {
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
		src: "https://media.istockphoto.com/id/1280015859/de/foto/blauer-see-mit-baumgrenze-in-herbstfarbe-an-einem-sonnigen-nachmittag-im-norden-minnesotas.jpg?s=612x612&w=0&k=20&c=vVbPA8_Q1CiOfFHRYinI2jr11604RGb59PPIbA2ekFc=",
		title: "Opener Title",
		description: "This is the description for the opener.",
		copyright: "© 2024 Your Company",
	},
};
