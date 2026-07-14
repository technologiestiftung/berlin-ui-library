import type { Meta, StoryObj } from "@storybook/react";
import type { Resolver, ResolverResult } from "react-hook-form";
import { useForm } from "react-hook-form";

import { Input } from "../Input/Input";

import { Button } from "../Button/Button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./Form";

const meta: Meta<typeof Form> = {
	title: "Elements/Form",
	component: Form,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Form>;
type FormValues = { name: string };

const requiredNameResolver: Resolver<FormValues> = async (values) => {
	if (values.name) {
		const result: ResolverResult<FormValues> = { values, errors: {} };
		return result;
	}

	const result: ResolverResult<FormValues> = {
		values: {},
		errors: {
			name: { type: "required", message: "Name is required" },
		},
	};
	return result;
};

export const Simple: Story = {
	render: () => {
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
		const methods = useForm<FormValues>({
			defaultValues: { name: "" },
			mode: "onSubmit",
			resolver: requiredNameResolver,
		});
		return (
			<Form {...methods}>
				<form onSubmit={methods.handleSubmit(() => {})} className="space-y-4">
					<FormField<{ name: string }>
						name="name"
						rules={{ required: true }}
						control={methods.control}
						render={({ field, fieldState }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Your name"
										invalid={!!fieldState.error}
									/>
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
