import { Meta, StoryObj } from "@storybook/react";
import { FormWrapper } from "./FormWrapper";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import {
	FormFieldWrapper,
	FormProperty,
} from "../FormWrapper/FormFieldWrapper";

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

// Basic form setup for stories that matches the example image
const ExampleForm = ({ withBackground = true }) => {
	const form = useForm({
		defaultValues: {
			input: "",
			select: "",
			checkboxGroup: [],
			radioGroup: "yes",
		},
	});

	const formFields: FormProperty[] = [
		{
			id: "input",
			name: "Input",
			type: "text",
			helperText: "Helptext",
			isRequired: true,
		},
		{
			id: "select",
			name: "Select",
			type: "select",
			helperText: "Helptext",
			isRequired: true,
			options: [
				{ value: "option1", label: "Option 1" },
				{ value: "option2", label: "Option 2" },
				{ value: "option3", label: "Option 3" },
			],
			placeholder: "Bitte wählen",
		},
		{
			id: "checkboxGroup",
			name: "Frage",
			type: "checkbox",
			options: [
				{ value: "answer1", label: "Antwort 1" },
				{ value: "answer2", label: "Antwort 2" },
			],
		},
		{
			id: "radioGroup",
			name: "Frage",
			type: "radio",
			options: [
				{ value: "yes", label: "Ja" },
				{ value: "no", label: "Nein" },
			],
		},
	];

	return (
		<FormWrapper
			withBackground={withBackground}
			className="w-full max-w-md"
			padding="p-8"
		>
			<h2 className="mb-6 text-xl font-bold">Example</h2>
			<Form {...form}>
				<form className="space-y-6">
					{formFields.map((field) => (
						<FormFieldWrapper key={field.id} formProperty={field} form={form} />
					))}

					<div className="mt-8 flex justify-between border-t border-gray-200 pt-4">
						<Button variant="back-link">
							<span className="flex items-center">Back</span>
						</Button>
						<Button type="submit">
							<span className="flex items-center">Action</span>
						</Button>
					</div>
				</form>
			</Form>
		</FormWrapper>
	);
};

export const Example: Story = {
	render: () => <ExampleForm />,
};

export const WithoutBackground: Story = {
	render: () => <ExampleForm withBackground={false} />,
};

export const CustomPadding: Story = {
	render: () => {
		const methods = useForm({
			defaultValues: {
				message: "",
			},
		});

		const messageField: FormProperty = {
			id: "message",
			name: "Message",
			type: "text",
			placeholder: "Enter a message",
		};

		return (
			<FormWrapper padding="p-10" className="max-w-md">
				<Form {...methods}>
					<form className="space-y-4">
						<FormFieldWrapper formProperty={messageField} form={methods} />
						<Button type="submit">Send</Button>
					</form>
				</Form>
			</FormWrapper>
		);
	},
};
