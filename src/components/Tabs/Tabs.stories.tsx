import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
	title: "Components/Tabs",
	component: Tabs,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
	render: () => (
		<Tabs defaultValue="account" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="password">Password</TabsTrigger>
			</TabsList>
			<TabsContent value="account">
				<div className="">
					<h3 className="mb-2 font-medium">Account Settings</h3>
					<p className="text-sm text-gray-600">
						Manage your account settings and email preferences.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="password">
				<div className="">
					<h3 className="mb-2 font-medium">Password Settings</h3>
					<p className="text-sm text-gray-600">
						Change your password and security settings.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
};

export const WithDisabledTab: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="analytics">Analytics</TabsTrigger>
				<TabsTrigger value="reports" disabled>
					Reports
				</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<div className="mt-4 rounded-md border bg-white p-4">
					<h3 className="mb-2 font-medium">Overview</h3>
					<p className="text-sm text-gray-600">
						View a summary of your account activity.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="analytics">
				<div className="mt-4 rounded-md border bg-white p-4">
					<h3 className="mb-2 font-medium">Analytics</h3>
					<p className="text-sm text-gray-600">
						View detailed analytics for your account.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="reports">
				<div className="mt-4 rounded-md border bg-white p-4">
					<h3 className="mb-2 font-medium">Reports</h3>
					<p className="text-sm text-gray-600">
						View and download reports (currently unavailable).
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
};

export const WithIcons: Story = {
	render: () => (
		<Tabs defaultValue="profile" className="w-[400px]">
			<TabsList className="grid w-full grid-cols-3">
				<TabsTrigger value="profile">
					<span className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-user"
						>
							<circle cx="12" cy="8" r="5" />
							<path d="M20 21a8 8 0 0 0-16 0" />
						</svg>
						Profile
					</span>
				</TabsTrigger>
				<TabsTrigger value="settings">
					<span className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-settings"
						>
							<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
							<circle cx="12" cy="12" r="3" />
						</svg>
						Settings
					</span>
				</TabsTrigger>
				<TabsTrigger value="notifications">
					<span className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-bell"
						>
							<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
							<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
						</svg>
						Alerts
					</span>
				</TabsTrigger>
			</TabsList>
			<TabsContent value="profile">
				<div className="mt-4 rounded-md border bg-white p-4">
					<h3 className="mb-2 font-medium">Profile</h3>
					<p className="text-sm text-gray-600">
						Update your personal information and profile details.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="mt-4 rounded-md border bg-white p-4">
					<h3 className="mb-2 font-medium">Settings</h3>
					<p className="text-sm text-gray-600">
						Customize your application settings and preferences.
					</p>
				</div>
			</TabsContent>
			<TabsContent value="notifications">
				<div className="mt-4 rounded-md border bg-white p-4">
					<h3 className="mb-2 font-medium">Notifications</h3>
					<p className="text-sm text-gray-600">
						Configure your notification preferences.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
};

export const CustomStyling: Story = {
	render: () => (
		<Tabs defaultValue="tab1" className="w-[400px]">
			<TabsList className="rounded-xl bg-blue-100 p-1.5">
				<TabsTrigger
					value="tab1"
					className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"
				>
					Information
				</TabsTrigger>
				<TabsTrigger
					value="tab2"
					className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"
				>
					Details
				</TabsTrigger>
			</TabsList>
			<TabsContent
				value="tab1"
				className="mt-2 rounded-md border border-blue-200 bg-blue-50 p-4"
			>
				<h3 className="mb-2 font-medium">Tab Content 1</h3>
				<p className="text-sm">
					This tab demonstrates custom styling for the Berlin Design System.
				</p>
			</TabsContent>
			<TabsContent
				value="tab2"
				className="mt-2 rounded-md border border-blue-200 bg-blue-50 p-4"
			>
				<h3 className="mb-2 font-medium">Tab Content 2</h3>
				<p className="text-sm">
					Custom styles can be applied to match your project's branding.
				</p>
			</TabsContent>
		</Tabs>
	),
};

export const Vertical: Story = {
	render: () => (
		<Tabs defaultValue="tab1" orientation="vertical" className="flex w-[600px]">
			<TabsList className="mr-4 h-auto flex-col border-r p-0">
				<TabsTrigger
					value="tab1"
					className="justify-start rounded-none border-r-4 border-transparent px-4 py-3 data-[state=active]:border-gray-800"
				>
					General Information
				</TabsTrigger>
				<TabsTrigger
					value="tab2"
					className="justify-start rounded-none border-r-4 border-transparent px-4 py-3 data-[state=active]:border-gray-800"
				>
					Contact Details
				</TabsTrigger>
				<TabsTrigger
					value="tab3"
					className="justify-start rounded-none border-r-4 border-transparent px-4 py-3 data-[state=active]:border-gray-800"
				>
					About
				</TabsTrigger>
			</TabsList>
			<div className="flex-grow">
				<TabsContent value="tab1" className="mt-0 rounded-md border p-4">
					<h3 className="mb-2 font-medium">General Information</h3>
					<p className="text-sm text-gray-600">
						Vertical tab layout provides a different UI experience, ideal for
						forms with multiple sections or content organization.
					</p>
				</TabsContent>
				<TabsContent value="tab2" className="mt-0 rounded-md border p-4">
					<h3 className="mb-2 font-medium">Contact Details</h3>
					<p className="text-sm text-gray-600">
						This tab would typically contain contact information or form fields.
					</p>
				</TabsContent>
				<TabsContent value="tab3" className="mt-0 rounded-md border p-4">
					<h3 className="mb-2 font-medium">About</h3>
					<p className="text-sm text-gray-600">
						Information about this component, project, or company would go here.
					</p>
				</TabsContent>
			</div>
		</Tabs>
	),
};

export const ModuleVariant: Story = {
	render: () => (
		<Tabs defaultValue="tab1" className="w-[600px]">
			<TabsList variant="module">
				<TabsTrigger variant="module" value="tab1">
					Information
				</TabsTrigger>
				<TabsTrigger variant="module" value="tab2">
					Details
				</TabsTrigger>
				<TabsTrigger variant="module" value="tab3">
					Resources
				</TabsTrigger>
			</TabsList>
			<TabsContent variant="module" value="tab1">
				<div className="bg-white p-4">
					<h3 className="mb-2 font-medium">Module Tab Content 1</h3>
					<p className="text-sm text-gray-600">
						The module variant is ideal for content sections where a lighter
						styling is desired.
					</p>
				</div>
			</TabsContent>
			<TabsContent variant="module" value="tab2">
				<div className="bg-white p-4">
					<h3 className="mb-2 font-medium">Module Tab Content 2</h3>
					<p className="text-sm text-gray-600">
						The module variant is ideal for content sections where a lighter
						styling is desired.
					</p>
				</div>
			</TabsContent>
			<TabsContent variant="module" value="tab3">
				<div className="bg-white p-4">
					<h3 className="mb-2 font-medium">Module Tab Content 3</h3>
					<p className="text-sm text-gray-600">
						This variant follows the styling of the modul-tabs CSS from the
						reference design.
					</p>
				</div>
			</TabsContent>
		</Tabs>
	),
};
