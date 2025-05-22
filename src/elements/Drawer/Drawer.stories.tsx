import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerTitle,
	DrawerDescription,
	SimpleDrawer,
} from "./Drawer";
import { Button } from "../Button/Button";

const meta: Meta<typeof Drawer> = {
	title: "Elements/Drawer",
	component: Drawer,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

// Standard usage with Drawer components
export const Standard: Story = {
	render: () => {
		return (
			<Drawer>
				<DrawerTrigger asChild>
					<Button variant="default">Open Drawer</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Menü</DrawerTitle>
						<DrawerDescription>
							This is a drawer component that slides in from the side.
						</DrawerDescription>
					</DrawerHeader>
					<div className="py-4">
						<p>This is the main content of the drawer.</p>
					</div>
					<DrawerFooter>
						<Button variant="default">Save Changes</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		);
	},
};

// Left side drawer example
export const LeftSide: Story = {
	render: () => {
		return (
			<Drawer>
				<DrawerTrigger asChild>
					<Button variant="default">Open Left Drawer</Button>
				</DrawerTrigger>
				<DrawerContent side="left">
					<DrawerHeader>
						<DrawerTitle>Left Drawer</DrawerTitle>
						<DrawerDescription>
							This drawer slides in from the left side.
						</DrawerDescription>
					</DrawerHeader>
					<div className="py-4">
						<p>Left drawer content example.</p>
					</div>
				</DrawerContent>
			</Drawer>
		);
	},
};

// Right side drawer example
export const RightSide: Story = {
	render: () => {
		return (
			<Drawer>
				<DrawerTrigger asChild>
					<Button variant="default">Open Right Drawer</Button>
				</DrawerTrigger>
				<DrawerContent side="right">
					<DrawerHeader>
						<DrawerTitle>Right Drawer</DrawerTitle>
						<DrawerDescription>
							This drawer slides in from the right side.
						</DrawerDescription>
					</DrawerHeader>
					<div className="py-4">
						<p>Right drawer content example.</p>
					</div>
				</DrawerContent>
			</Drawer>
		);
	},
};

// SimpleDrawer example with isOpen/close pattern
export const SimpleDrawerExample: Story = {
	render: () => {
		// Using React hooks in Storybook component
		const SimpleDrawerDemo = () => {
			const [isOpen, setIsOpen] = useState(false);

			return (
				<>
					<Button variant="default" onClick={() => setIsOpen(true)}>
						Open Simple Drawer
					</Button>

					<SimpleDrawer
						isOpen={isOpen}
						close={() => setIsOpen(false)}
						side="right"
					>
						<DrawerHeader>
							<DrawerTitle>Simple Drawer</DrawerTitle>
							<DrawerDescription>
								This uses the SimpleDrawer API with isOpen/close pattern.
							</DrawerDescription>
						</DrawerHeader>
						<div className="py-4">
							<p>
								This provides an easier-to-use API that matches the original
								drawer components.
							</p>
						</div>
						<DrawerFooter>
							<Button variant="default" onClick={() => setIsOpen(false)}>
								Close
							</Button>
						</DrawerFooter>
					</SimpleDrawer>
				</>
			);
		};

		return <SimpleDrawerDemo />;
	},
};

// Large size drawer example
export const LargeDrawer: Story = {
	render: () => {
		return (
			<Drawer>
				<DrawerTrigger asChild>
					<Button variant="default">Open Large Drawer</Button>
				</DrawerTrigger>
				<DrawerContent side="right" size="large">
					<DrawerHeader>
						<DrawerTitle>Large Drawer</DrawerTitle>
						<DrawerDescription>
							This is a large drawer that uses 90% of the viewport width.
						</DrawerDescription>
					</DrawerHeader>
					<div className="py-4">
						<p>
							This drawer uses the large size variant (w-90vw) instead of the
							default size (w-35rem).
						</p>
					</div>
					<DrawerFooter>
						<Button variant="default">Close</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		);
	},
};

// Large SimpleDrawer example
export const LargeSimpleDrawer: Story = {
	render: () => {
		// Using React hooks in Storybook component
		const LargeSimpleDrawerDemo = () => {
			const [isOpen, setIsOpen] = useState(false);

			return (
				<>
					<Button variant="default" onClick={() => setIsOpen(true)}>
						Open Large Simple Drawer
					</Button>

					<SimpleDrawer
						isOpen={isOpen}
						close={() => setIsOpen(false)}
						side="right"
						size="large"
					>
						<DrawerHeader>
							<DrawerTitle>Large Simple Drawer</DrawerTitle>
							<DrawerDescription>
								This uses the SimpleDrawer API with the large size variant.
							</DrawerDescription>
						</DrawerHeader>
						<div className="py-4">
							<p>
								This drawer uses the large size variant (w-90vw) for when you
								need more horizontal space.
							</p>
						</div>
						<DrawerFooter>
							<Button variant="default" onClick={() => setIsOpen(false)}>
								Close
							</Button>
						</DrawerFooter>
					</SimpleDrawer>
				</>
			);
		};

		return <LargeSimpleDrawerDemo />;
	},
};
