import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
	title: "Components/Footer",
	component: Footer,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Footer>;

// Sample footer columns data
const sampleFooterColumns = [
	{
		title: "About",
		links: [
			{ label: "About the Project", href: "/about-project/" },
			{ label: "Imprint", href: "/imprint/" },
			{ label: "Privacy Policy", href: "/privacy-note/" },
			{ label: "Accessibility Statement", href: "/accessibility-statement/" },
		],
	},
	{
		title: "Content Categories",
		links: [
			{ label: "All Offers", href: "/all-offers/" },
			{ label: "Culture", href: "/all-offers/?category=kultur" },
			{ label: "Sports", href: "/all-offers/?category=sport" },
			{ label: "Education", href: "/all-offers/?category=bildung_beratung" },
			{ label: "Leisure", href: "/all-offers/?category=freizeit" },
			{ label: "Map", href: "/map/" },
		],
	},
	{
		title: "Social Media",
		links: [
			{
				label: "Facebook",
				href: "https://www.facebook.com/BerlinDE/",
			},
			{
				label: "Instagram",
				href: "https://www.instagram.com/berlinde/",
			},
		],
		isDefaultOpen: true,
	},
];

// Simple translations for demo purposes
const translations = {
	de: {
		About: "Über uns",
		"About the Project": "Über das Projekt",
		Imprint: "Impressum",
		"Privacy Policy": "Datenschutz",
		"Accessibility Statement": "Barrierefreiheit",
		"Content Categories": "Inhaltskategorien",
		"All Offers": "Alle Angebote",
		Culture: "Kultur",
		Sports: "Sport",
		Education: "Bildung & Beratung",
		Leisure: "Freizeit",
		Map: "Karte",
		"Social Media": "Soziale Medien",
		Facebook: "Facebook",
		Instagram: "Instagram",
		toTheTop: "Zum Seitenanfang",
	},
	en: {
		toTheTop: "Back to top",
	},
};

export const DefaultFooter: Story = {
	args: {
		footerColumns: sampleFooterColumns,
		showScrollToTop: true,
		language: "de",
		translations: translations,
	},
	parameters: {
		viewport: {
			defaultViewport: "desktop",
		},
	},
};

export const EnglishFooter: Story = {
	args: {
		footerColumns: sampleFooterColumns,
		showScrollToTop: true,
		language: "en",
		translations: translations,
	},
	parameters: {
		viewport: {
			defaultViewport: "desktop",
		},
	},
};

export const WithBerlinFooter: Story = {
	args: {
		footerColumns: sampleFooterColumns,
		berlinFooter: `<div class="berlin-footer p-4 text-center text-sm text-gray-600">
      <p>© ${new Date().getFullYear()} - Das offizielle Hauptstadtportal</p>
    </div>`,
		showScrollToTop: true,
	},
	parameters: {
		viewport: {
			defaultViewport: "desktop",
		},
	},
};

export const MobileFooter: Story = {
	args: {
		footerColumns: sampleFooterColumns,
		showScrollToTop: true,
		translations: translations,
	},
	parameters: {
		viewport: {
			defaultViewport: "mobile1",
		},
	},
};
