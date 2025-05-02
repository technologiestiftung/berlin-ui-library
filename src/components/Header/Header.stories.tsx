import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
const meta: Meta<typeof Header> = {
	title: "Components/Header",
	component: Header,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Header>;

// Example translations as JSON objects
const deTranslations = {
	accessibility: "Barrierefreiheit",
	menu: "Menü",
	search: "Suche",
	expand: "Erweitern",
	collapse: "Einklappen",
	"accessibilityMenu.title": "Barrierefreiheit",
	"button.name.close": "Schließen",
	"accessibilityMenu.barrierefreiheit.question":
		"Wie barrierefrei ist diese Webseite?",
	"accessibilityMenu.barrierefreiheit": "Erklärung zur Barrierefreiheit",
	"accessibilityMenu.contact.question":
		"Haben Sie Anmerkungen oder Fragen zur Barrierefreiheit dieser Webseite?",
	"accessibilityMenu.contact": "Kontakt zur Ansprechperson",
	"accessibilityMenu.additionalInfo.question":
		"Wo gibt es zusätzliche Informationen zur Barrierefreiheit im Land Berlin?",
	"accessibilityMenu.additionalInfo":
		"Barrierefreie Informations- und Kommunikationstechnik (IKT)",
};

const enTranslations = {
	accessibility: "Accessibility",
	menu: "Menu",
	search: "Search",
	expand: "Expand",
	collapse: "Collapse",
	"accessibilityMenu.title": "Accessibility",
	"button.name.close": "Close",
	"accessibilityMenu.barrierefreiheit.question": "Accessibility information:",
	"accessibilityMenu.barrierefreiheit": "Accessibility statement",
	"accessibilityMenu.contact.question": "Report accessibility issue:",
	"accessibilityMenu.contact": "Contact",
	"accessibilityMenu.additionalInfo.question": "Additional information:",
	"accessibilityMenu.additionalInfo": "Competence center for accessibility",
};

export const Default: Story = {
	args: {
		header: "Design System",
		caption: "Berlin.de",
		breadcrumbs: [
			{ label: "Home", href: "/" },
			{ label: "Components", href: "/components" },
			{ label: "Header", href: "/components/header" },
		],
		languages: [
			{ code: "de", label: "Deutsch" },
			{ code: "en", label: "English" },
		],
		language: "de",
		translations: {
			de: deTranslations,
			en: enTranslations,
		},
		onOpenMenu: () => {
			console.warn("Menu opened");
		},
		onSearch: () => {
			console.warn("Search opened");
		},
		onLanguageChange: (code) => {
			console.warn(`Language changed to: ${code}`);
		},
	},
};

export const EnglishLanguage: Story = {
	args: {
		...Default.args,
		language: "en",
	},
};

export const TurkishLanguage: Story = {
	args: {
		...Default.args,
		language: "tr",
	},
};

export const CustomLogoAndLinks: Story = {
	args: {
		...Default.args,
		header: "With Custom Logo",
		logoComponent: (
			<div className="flex h-8 items-center font-bold text-red-500">
				CUSTOM LOGO
			</div>
		),
		LinkComponent: ({ href, children }) => (
			<a href={href} className="text-blue-500 hover:underline">
				{children}
			</a>
		),
	},
};

export const WithoutLanguageSelector: Story = {
	args: {
		...Default.args,
		showLanguageSelect: false,
	},
};

export const WithoutBreadcrumbs: Story = {
	args: {
		...Default.args,
		showBreadcrumbs: false,
	},
};

export const WithoutSearch: Story = {
	args: {
		...Default.args,
		showSearchButton: false,
	},
};

export const WithoutMenu: Story = {
	args: {
		...Default.args,
		showMenuButton: false,
	},
};

export const MinimalHeader: Story = {
	args: {
		header: "Minimal Header",
		caption: "Berlin.de",
		showBreadcrumbs: false,
		showLanguageSelect: false,
		showSearchButton: false,
		showMenuButton: false,
	},
};

export const WithCustomAccessibilityItems: Story = {
	args: {
		...Default.args,
	},
	parameters: {
		docs: {
			description: {
				story:
					"This example shows how to customize the accessibility menu items. The menu opens when clicking the accessibility button in the header.",
			},
		},
	},
};
