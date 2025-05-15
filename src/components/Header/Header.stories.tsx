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
	accessibility: "Barrierefrei",
	menu: "Menü",
	search: "Suche",
	expand: "Erweitern",
	collapse: "Einklappen",
	"search.title": "Suche",
	"search.placeholder": "Suchbegriff",
	"search.ariaLabel": "Suche",
	"search.button": "Suchen",
	"search.submit": "Suchen",
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
	"search.title": "Search",
	"search.placeholder": "Search term",
	"search.ariaLabel": "Search",
	"search.button": "Search",
	"search.submit": "Search",
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
		header: "Senatsverwaltung für",
		caption: "Mobilität, Verkehr, Klimaschutz und Umwelt",
		breadcrumbs: [
			{ label: "Home", href: "/" },
			{ label: "Components", href: "/components" },
			{ label: "Header", href: "/components/header" },
		],
		languages: [
			{ code: "de", label: "Deutsch" },
			{ code: "en", label: "English" },
		],
		menuItems: [
			{ label: "Item 1", href: "/item1" },
			{ label: "Item 2", href: "/item2" },
			{
				label: "Item 3",
				href: "/item3",
				children: [
					{ label: "Subitem 1", href: "/item3/subitem1" },
					{ label: "Subitem 2", href: "/item3/subitem2" },
					{
						label: "Subitem 3",
						href: "/item3/subitem3",
						children: [
							{ label: "Subitem 1", href: "/item3/subitem1" },
							{ label: "Subitem 2", href: "/item3/subitem2" },
							{ label: "Subitem 1", href: "/item3/subitem1" },
							{ label: "Subitem 2", href: "/item3/subitem2" },
						],
					},
					{ label: "Item 4", href: "/item4" },
				],
			},
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
		onLanguageChange: (code: string) => {
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

export const ScrollableContent: Story = {
	args: {
		...Default.args,
	},
	render: (args) => (
		<div className="h-full">
			<Header {...args} />
			<div className="p-4">
				<h2 className="text-2xl font-bold mb-4">
					Scroll Test for Sticky LogoBar
				</h2>
				<p className="mb-4">
					Scroll down to see the LogoBar collapse to a thin line (3px height)
					with a dark gray background. The logo will fade out as you scroll.
				</p>
				<div className="bg-gray-100 p-4 mb-4">
					<p>
						<strong>Expected Behavior:</strong>
					</p>
					<ul className="list-disc pl-8">
						<li>Initial state: LogoBar is 44px tall with white background</li>
						<li>When scrolling: LogoBar collapses to 3px height</li>
						<li>Background color changes to dark gray</li>
						<li>Logo fades out with a smooth transition</li>
					</ul>
				</div>
				{Array.from({ length: 30 }, (_, i) => (
					<p
						key={i}
						className={`mb-4 p-2 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
					>
						This is scrollable content (row {i + 1}). Continue scrolling to test
						the sticky behavior of the LogoBar.
					</p>
				))}
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"This story provides scrollable content to test the sticky behavior of the LogoBar component. As you scroll down, the LogoBar will collapse to a thin line and change its background color. The logo will fade out during this transition.",
			},
		},
	},
};
