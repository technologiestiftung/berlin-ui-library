import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useForm } from "react-hook-form";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
} from "./Form";
import { Input } from "./Input";
import { Button } from "./Button";

const meta: Meta<typeof Form> = {
	title: "Components/Form",
	component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Simple: Story = {
	render: () => {
		type FormValues = { name: string };
		const methods = useForm<FormValues>({ defaultValues: { name: "" } });
		return (
			<Form {...methods}>
				<form
					onSubmit={methods.handleSubmit((data) => console.warn(data))}
					className="space-y-4"
				>
					<FormField<{ name: string }>
						name="name"
						control={methods.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Your name" />
								</FormControl>
								<FormDescription>Enter your full name.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		);
	},
};

export const WithError: Story = {
	render: () => {
		const methods = useForm({
			defaultValues: { name: "" },
			mode: "onSubmit",
			resolver: async (values) => ({
				values: values,
				errors: values.name
					? {}
					: { name: { type: "required", message: "Name is required" } },
			}),
		});
		return (
			<Form {...methods}>
				<form onSubmit={methods.handleSubmit(() => {})} className="space-y-4">
					<FormField<{ name: string }>
						name="name"
						control={methods.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Your name" />
								</FormControl>
								<FormDescription>Enter your full name.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		);
	},
};

export const Disabled: Story = {
	render: () => {
		type FormValues = { name: string };
		const methods = useForm<FormValues>({
			defaultValues: { name: "John Doe" },
		});
		return (
			<Form {...methods}>
				<form className="space-y-4">
					<FormField<FormValues>
						name="name"
						control={methods.control}
						render={({ field }) => (
							<FormItem layout="vertical">
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input {...field} disabled />
								</FormControl>
								<FormDescription>Disabled input</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</form>
			</Form>
		);
	},
};
export const Horizontal: Story = {
	render: () => {
		type FormValues = { name: string };
		const methods = useForm<FormValues>({ defaultValues: { name: "" } });
		return (
			<Form {...methods}>
				<form
					onSubmit={methods.handleSubmit((data) => console.warn(data))}
					className="space-y-4"
				>
					<FormField<FormValues>
						name="name"
						control={methods.control}
						render={({ field }) => (
							<FormItem layout="horizontal">
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Your name" />
								</FormControl>
								<FormDescription>Enter your full name.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		);
	},
};
export const Required: Story = {
	render: () => {
		type FormValues = { name: string };
		const methods = useForm<FormValues>({ defaultValues: { name: "" } });
		return (
			<Form {...methods}>
				<form className="space-y-4">
					<FormField<FormValues>
						name="name"
						control={methods.control}
						rules={{ required: true }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Your name" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</form>
			</Form>
		);
	},
};
