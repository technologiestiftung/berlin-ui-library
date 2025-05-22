import type { Meta, StoryObj } from "@storybook/react";
import { DownloadItem, DownloadGroup } from "./index";

const meta: Meta<typeof DownloadItem> = {
	title: "Modules/Download",
	component: DownloadItem,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
};

export default meta;
type Story = StoryObj<typeof DownloadItem>;

export const Default: Story = {
	args: {
		title: "Download title 1",
		description: "Philosophy is considered a science",
		fileType: "JPG-Dokument (169,5 kB)",
		date: "03/1974",
		downloadUrl: "#",
		buttonText: "Download",
	},
};

export const WithoutDescription: Story = {
	args: {
		title: "Download title 1",
		fileType: "JPG-Dokument (169,5 kB)",
		date: "03/1974",
		downloadUrl: "#",
	},
};

export const WithoutDateAndType: Story = {
	args: {
		title: "Download title 1",
		description: "Philosophy is considered a science",
		downloadUrl: "#",
	},
};

export const DownloadGroupStory: StoryObj<typeof DownloadGroup> = {
	render: () => (
		<DownloadGroup title="Downloads">
			<DownloadItem
				title="Download title 1"
				description="Philosophy is considered a science"
				fileType="JPG-Dokument (169,5 kB)"
				date="03/1974"
				downloadUrl="#"
			/>
			<DownloadItem
				title="Download title 2"
				description="Philosophy is considered a science but it is difficult to say, when one has to compare with an ordinary science, for example biology, or chemistry."
				fileType="PDF-Dokument (39,6 kB)"
				date="03/1974"
				downloadUrl="#"
			/>
			<DownloadItem
				title="Download title 3"
				description="Das ist eine zusätzliche Beschreibung"
				fileType="TXT-Dokument (12,3 kB)"
				date="03/1974"
				downloadUrl="#"
			/>
		</DownloadGroup>
	),
};

export const DownloadGroupAsDivStory: StoryObj<typeof DownloadGroup> = {
	render: () => (
		<DownloadGroup title="Downloads" asList={false}>
			<DownloadItem
				title="Download title 1"
				description="Philosophy is considered a science"
				fileType="JPG-Dokument (169,5 kB)"
				date="03/1974"
				downloadUrl="#"
			/>
			<DownloadItem
				title="Download title 2"
				description="Philosophy is considered a science but it is difficult to say, when one has to compare with an ordinary science, for example biology, or chemistry."
				fileType="PDF-Dokument (39,6 kB)"
				date="03/1974"
				downloadUrl="#"
			/>
			<DownloadItem
				title="Download title 3"
				description="Das ist eine zusätzliche Beschreibung"
				fileType="TXT-Dokument (12,3 kB)"
				date="03/1974"
				downloadUrl="#"
			/>
		</DownloadGroup>
	),
};
