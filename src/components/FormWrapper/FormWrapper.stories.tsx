import { Meta, StoryObj } from "@storybook/react";
import { FormWrapper } from "./FormWrapper";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "../Form/Form";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";

const meta: Meta<typeof FormWrapper> = {
	title: "Components/FormWrapper",
	component: FormWrapper,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FormWrapper>;

// Basic form setup for stories
const SimpleForm = ({ withBackground = true }) => {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
		},
	});

	return (
		<FormWrapper withBackground={withBackground} className="max-w-md">
			<Form {...form}>
				<form className="space-y-4">
					<FormField
						control={form.control}
						name="name"
						rules={{ required: "Name is required" }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Enter your name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						rules={{
							required: "Email is required",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address",
							},
						}}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="Enter your email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</FormWrapper>
	);
};

export const WithBackground: Story = {
	render: () => <SimpleForm />,
};

export const WithoutBackground: Story = {
	render: () => <SimpleForm withBackground={false} />,
};

export const CustomPadding: Story = {
	render: () => (
		<FormWrapper padding="p-10" className="max-w-md">
			<Form {...useForm()}>
				<form className="space-y-4">
					<FormField
						control={useForm().control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Input placeholder="Enter a message" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<Button type="submit">Send</Button>
				</form>
			</Form>
		</FormWrapper>
	),
};
