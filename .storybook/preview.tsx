import React from "react";
import type { Preview } from "@storybook/react";
import "../src/style.css";

// Make React available globally for all stories
window.React = React;

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			toc: true, // Enables the table of contents
			source: {
				state: "open",
			},
			canvas: {
				sourceState: "shown",
			},
			story: {
				inline: true,
			},
		},
		options: {
			storySort: {
				order: ["Introduction", "Components"],
			},
		},
	},
};

export default preview;
