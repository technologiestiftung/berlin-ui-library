import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/*.mdx"],
	addons: [
		"@storybook/addon-docs",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: true,
	},
};
export default config;
