import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { FormFieldWrapper, FormProperty } from "./FormFieldWrapper";
import { Form } from "../Form";
import { Button } from "../Button/Button";

// @ts-expect-error TS6133 - Required for Storybook setup despite react-jsx transform
import * as React from "react";

const meta: Meta<typeof FormFieldWrapper> = {
	title: "Elements/FormWrapper/FormFieldWrapper",
	component: FormFieldWrapper,
	parameters: {
		layout: "centered",
		// Remove the dynamic import to avoid the fetch error
		// docs: {
		//   page: () => import('./FormFieldWrapper.mdx'),
		// },
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormFieldWrapper>;

export const TextInput: Story = {
	render: () => {
		const methods = useForm({
			defaultValues: {
				name: "",
			},
		});
		const property: FormProperty = {
			id: "name",
			name: "Name",
			type: "text",
			description: "Enter your full name",
			placeholder: "John Doe",
			helperText: "This name will be used on your certificate",
			isRequired: true,
		};

		return (
			<Form {...methods}>
				<form>
					<FormFieldWrapper formProperty={property} form={methods} />
				</form>
			</Form>
		);
	},
};

export const NumberInput: Story = {
	render: () => {
		const methods = useForm({
			defaultValues: {
				age: "",
			},
		});
		const property: FormProperty = {
			id: "age",
			name: "Age",
			type: "number",
			description: "Enter your age",
			placeholder: "30",
			helperText: "You must be at least 18 years old to register",
			isRequired: true,
			min: 0,
			max: 120,
		};

		return (
			<Form {...methods}>
				<form>
					<FormFieldWrapper formProperty={property} form={methods} />
				</form>
			</Form>
		);
	},
};

export const TextareaInput: Story = {
	render: () => {
		const methods = useForm({
			defaultValues: {
				bio: "",
			},
		});
		const property: FormProperty = {
			id: "bio",
			name: "Biography",
			type: "textarea",
			description: "Tell us about yourself",
			placeholder: "I am...",
			helperText: "Keep it brief and focused on your professional experience",
			isRequired: false,
		};

		return (
			<Form {...methods}>
				<form>
					<FormFieldWrapper formProperty={property} form={methods} />
				</form>
			</Form>
		);
	},
};

export const SelectInput: Story = {
	render: () => {
		const methods = useForm({
			defaultValues: {
				country: "",
			},
		});
		const property: FormProperty = {
			id: "country",
			name: "Country",
			type: "select",
			description: "Select your country",
			helperText: "This determines which regional office will contact you",
			isRequired: true,
			options: [
				{ value: "de", label: "Germany" },
				{ value: "fr", label: "France" },
				{ value: "uk", label: "United Kingdom" },
				{ value: "us", label: "United States" },
			],
		};

		return (
			<Form {...methods}>
				<form>
					<FormFieldWrapper formProperty={property} form={methods} />
				</form>
			</Form>
		);
	},
};

export const CheckboxInput: Story = {
	render: () => {
		const methods = useForm({
			defaultValues: {
				accept: false,
			},
		});
		const property: FormProperty = {
			id: "accept",
			name: "Accept Terms",
			type: "checkbox",
			description: "I agree to the terms and conditions",
			helperText: "You must accept our terms to continue",
			isRequired: true,
		};

		return (
			<Form {...methods}>
				<form>
					<FormFieldWrapper formProperty={property} form={methods} />
				</form>
			</Form>
		);
	},
};

export const DisabledInput: Story = {
	render: () => {
		const methods = useForm({
			defaultValues: {
				disabledField: "This value cannot be changed",
			},
		});
		const property: FormProperty = {
			id: "disabledField",
			name: "Disabled Field",
			type: "text",
			description: "This field is disabled",
			helperText: "Contact support to modify this value",
			isRequired: false,
			isDisabled: true,
		};

		return (
			<Form {...methods}>
				<form>
					<FormFieldWrapper formProperty={property} form={methods} />
				</form>
			</Form>
		);
	},
};

export const MultipleInputsForm: Story = {
	render: () => {
		const methods = useForm({
			defaultValues: {
				fullName: "",
				email: "",
				age: "",
				bio: "",
				country: "",
				newsletter: false,
				terms: false,
			},
		});

		const formFields: FormProperty[] = [
			{
				id: "fullName",
				name: "Full Name",
				type: "text",
				description: "Your first and last name",
				placeholder: "John Doe",
				helperText: "As it appears on your government ID",
				isRequired: true,
			},
			{
				id: "email",
				name: "Email Address",
				type: "email",
				description: "We will only use this for important notifications",
				placeholder: "john.doe@example.com",
				helperText: "You'll receive a verification email",
				isRequired: true,
			},
			{
				id: "age",
				name: "Age",
				type: "number",
				description: "Must be 18 or older",
				helperText: "We verify age for legal compliance",
				min: 18,
				max: 120,
				isRequired: false,
			},
			{
				id: "bio",
				name: "Biography",
				type: "textarea",
				description: "Tell us a bit about yourself",
				placeholder: "I'm a...",
				helperText: "This will be visible on your public profile",
				isRequired: false,
			},
			{
				id: "country",
				name: "Country",
				type: "select",
				description: "Where are you from?",
				helperText: "Used to customize your experience",
				isRequired: true,
				options: [
					{ value: "de", label: "Germany" },
					{ value: "fr", label: "France" },
					{ value: "uk", label: "United Kingdom" },
					{ value: "us", label: "United States" },
					{ value: "ca", label: "Canada" },
					{ value: "au", label: "Australia" },
				],
			},
			{
				id: "newsletter",
				name: "Subscribe to newsletter",
				type: "checkbox",
				description: "Receive updates about our services",
				helperText: "We send about one email per month",
				isRequired: false,
			},
			{
				id: "terms",
				name: "Terms and Conditions",
				type: "checkbox",
				description: "I agree to the terms and conditions",
				helperText: "Required to create your account",
				isRequired: true,
			},
		];

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const onSubmit = (data: any) => {
			alert(JSON.stringify(data, null, 2));
		};

		return (
			<div style={{ width: "500px", maxWidth: "100%" }}>
				<Form {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
						<div className="space-y-4">
							{formFields.map((property) => (
								<FormFieldWrapper
									key={property.id}
									formProperty={property}
									form={methods}
								/>
							))}
						</div>
						<Button type="submit">Submit Form</Button>
					</form>
				</Form>
			</div>
		);
	},
};

export const CheckboxGroupInput: Story = {
	render: () => {
		const methods = useForm({
			defaultValues: {
				interests: [],
			},
		});
		const property: FormProperty = {
			id: "interests",
			name: "Interests",
			type: "checkbox",
			description: "Select your areas of interest",
			helperText: "Choose all that apply",
			isRequired: false,
			options: [
				{ value: "technology", label: "Technology" },
				{ value: "arts", label: "Arts & Culture" },
				{ value: "sports", label: "<i>Sports</i> & Recreation" },
				{ value: "science", label: "Science & Education" },
			],
		};

		return (
			<Form {...methods}>
				<form>
					<FormFieldWrapper formProperty={property} form={methods} />
					<div className="mt-4">
						<p className="text-muted-foreground text-xs">
							Selected value: {JSON.stringify(methods.watch("interests"))}
						</p>
					</div>
				</form>
			</Form>
		);
	},
};

export const RadioGroupInput: Story = {
	render: () => {
		const methods = useForm({
			defaultValues: {
				theme: "light",
			},
		});
		const property: FormProperty = {
			id: "theme",
			name: "Theme Preference",
			type: "radio",
			description: "Choose your preferred theme",
			helperText: "This can be changed later in settings",
			isRequired: true,
			options: [
				{ value: "light", label: "Light Theme" },
				{ value: "dark", label: "Dark Theme" },
				{ value: "system", label: "<b>System Default</b>" },
			],
		};

		const watchedValue = methods.watch("theme");

		return (
			<Form {...methods}>
				<form>
					<FormFieldWrapper formProperty={property} form={methods} />
					<div className="mt-4 rounded-md bg-gray-50 p-3">
						<p className="text-sm text-gray-600">
							<strong>Selected Value:</strong> {watchedValue}
						</p>
						<p className="mt-1 text-xs text-gray-500">
							This updates in real-time when you select an option
						</p>
					</div>
				</form>
			</Form>
		);
	},
};

export const RadioGroupInputHorizontal: Story = {
	render: () => {
		const methods = useForm({
			defaultValues: {
				subscription: "",
			},
		});
		const property: FormProperty = {
			id: "subscription",
			name: "Subscription Plan",
			type: "radio",
			description: "Select your subscription tier",
			helperText: "You can upgrade or downgrade anytime",
			isRequired: true,
			direction: "horizontal",
			options: [
				{ value: "free", label: "Free" },
				{ value: "pro", label: "Pro" },
				{ value: "enterprise", label: "Enterprise" },
			],
		};

		const watchedValue = methods.watch("subscription");

		return (
			<Form {...methods}>
				<form>
					<FormFieldWrapper formProperty={property} form={methods} />
					<div className="mt-4 rounded-md bg-blue-50 p-3">
						<p className="text-sm text-blue-800">
							<strong>Selected Plan:</strong> {watchedValue || "None selected"}
						</p>
						<p className="mt-1 text-xs text-blue-600">
							Watch the value change as you select different options
						</p>
					</div>
				</form>
			</Form>
		);
	},
};

export const CheckboxGroupInputHorizontal: Story = {
	render: () => {
		const methods = useForm({
			defaultValues: {
				notifications: [],
			},
		});
		const property: FormProperty = {
			id: "notifications",
			name: "Notification Preferences",
			type: "checkbox",
			description: "Choose notification methods",
			helperText: "Select all that apply",
			isRequired: false,
			direction: "horizontal",
			options: [
				{ value: "email", label: "Email" },
				{ value: "sms", label: "SMS" },
				{ value: "push", label: "Push" },
				{ value: "inapp", label: "In-app" },
			],
		};

		return (
			<Form {...methods}>
				<form>
					<FormFieldWrapper formProperty={property} form={methods} />
					<div className="mt-4">
						<p className="text-muted-foreground text-xs">
							Selected options: {JSON.stringify(methods.watch("notifications"))}
						</p>
					</div>
				</form>
			</Form>
		);
	},
};
