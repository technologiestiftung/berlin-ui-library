import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumbs> = {
	title: "Components/Breadcrumb",
	component: Breadcrumbs,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
	args: {
		items: [
			{ label: "Home", href: "/" },
			{ label: "Category", href: "/category" },
			{ label: "Current Page", href: "/category/current" },
		],
	},
};

export const SingleItem: Story = {
	args: {
		items: [{ label: "Current Page", href: "/current" }],
	},
};

export const WithCustomLink: Story = {
	render: () => {
		// Example of a custom link component
		const CustomLink = ({
			href,
			children,
		}: {
			href: string;
			children: React.ReactNode;
		}) => (
			<a href={href} style={{ color: "#e40422" }}>
				{children}
			</a>
		);

		return (
			<Breadcrumbs
				items={[
					{ label: "Home", href: "/" },
					{ label: "Products", href: "/products" },
					{ label: "Accessories", href: "/products/accessories" },
				]}
				LinkComponent={CustomLink}
			/>
		);
	},
};

export const WithCustomClass: Story = {
	args: {
		items: [
			{ label: "Home", href: "/" },
			{ label: "Services", href: "/services" },
			{ label: "Web Development", href: "/services/web-development" },
		],
		className: "bg-gray-100 p-4 rounded",
	},
};
