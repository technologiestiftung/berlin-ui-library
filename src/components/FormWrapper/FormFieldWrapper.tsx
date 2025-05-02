/* eslint-disable complexity */
import { JSX } from "react";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../Form";
import { Input } from "../Input/Input";
import {
	ControllerRenderProps,
	FieldValues,
	UseFormReturn,
} from "react-hook-form";
import { Textarea } from "../Textarea";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../Select";
import { Checkbox } from "../Checkbox";
import { Info } from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../Tooltip";

/**
 * FormProperty interface defines the structure of a form field property
 * that will be used to render a form field with the FormFieldWrapper component.
 *
 * | Property    | Type               | Description                                   |
 * | ----------- | ------------------ | --------------------------------------------- |
 * | id          | string             | Unique identifier for the form field          |
 * | name        | string             | Display name for the form field label         |
 * | type        | string             | Type of the input field                       |
 * | description | string (optional)  | Description text shown below the input        |
 * | placeholder | string (optional)  | Placeholder text for the input                |
 * | helperText  | string (optional)  | Helper text to provide additional information |
 * | options     | Array (optional)   | Options for select fields                     |
 * | isRequired  | boolean (optional) | Whether the field is required                 |
 * | isDisabled  | boolean (optional) | Whether the field is disabled                 |
 * | min         | number (optional)  | Minimum value (for number inputs)             |
 * | max         | number (optional)  | Maximum value (for number inputs)             |
 * | step        | number (optional)  | Step increment (for number inputs)            |
 */
export interface FormProperty {
	/**
	 * Unique identifier for the form field. Used as the field name in the form state.
	 */
	id: string;

	/**
	 * Display name for the form field label
	 */
	name: string;

	/**
	 * Type of the input field. Supported types:
	 * - text, email, password, url, tel, date, datetime-local (rendered as Input)
	 * - textarea (rendered as Textarea)
	 * - number (rendered as Input with number type and validation)
	 * - checkbox (rendered as Checkbox)
	 * - select (rendered as Select dropdown)
	 */
	type: string;

	/**
	 * Optional description text shown below the input
	 */
	description?: string;

	/**
	 * Optional placeholder text for the input
	 */
	placeholder?: string;

	/**
	 * Optional helper text (tooltip) to provide additional information
	 */
	helperText?: string;

	/**
	 * Options for select fields, with label and value pairs
	 */
	options?: {
		label?: string;
		value: string;
	}[];

	/**
	 * Whether the field is required. Displays a red asterisk if true.
	 */
	isRequired?: boolean;

	/**
	 * Whether the field is disabled
	 */
	isDisabled?: boolean;

	/**
	 * Optional display order for organizing fields
	 */
	order?: number;

	/**
	 * Optional default value for the field
	 */
	defaultValue?: string;

	/**
	 * Minimum value (for number inputs)
	 */
	min?: number;

	/**
	 * Maximum value (for number inputs)
	 */
	max?: number;

	/**
	 * Step increment (for number inputs)
	 */
	step?: number;
}

// Render a number field
const renderNumberField = (
	property: FormProperty,
	field: ControllerRenderProps<FieldValues, string>,
) => {
	const { name, description, placeholder, isDisabled } = property;

	const displayValue = field.value !== undefined ? field.value : "";

	return (
		<Input
			{...field}
			type="number"
			min={property.min}
			max={property.max}
			step={property.step || 1}
			placeholder={placeholder || `Enter ${description || name}`}
			disabled={isDisabled}
			onChange={(e) => {
				const value = e.target.value;
				if (value === "") {
					field.onChange(""); // Use empty string for clearing
				} else {
					field.onChange(Number(value));
				}
			}}
			value={displayValue}
		/>
	);
};

const renderSimpleField = (
	property: FormProperty,
	field: ControllerRenderProps<FieldValues, string>,
) => {
	const { name, description, placeholder, isDisabled } = property;
	return (
		<Input
			{...field}
			type={property.type}
			placeholder={placeholder || `Enter ${description || name}`}
			disabled={isDisabled}
		/>
	);
};

const renderTextareaField = (
	property: FormProperty,
	field: ControllerRenderProps<FieldValues, string>,
) => {
	const { name, description, placeholder, isDisabled } = property;
	return (
		<Textarea
			{...field}
			placeholder={placeholder || `Enter ${description || name}`}
			disabled={isDisabled}
		/>
	);
};

const renderSelectField = (
	property: FormProperty,
	field: ControllerRenderProps<FieldValues, string>,
) => {
	const { name, description, options, isDisabled } = property;
	// Use field.value instead of property.defaultValue to ensure form state is used
	const value = field.value !== undefined ? field.value : "";

	return (
		<Select
			disabled={isDisabled}
			onValueChange={field.onChange}
			value={value}
			defaultValue={value}
		>
			<SelectTrigger className="w-full">
				<SelectValue placeholder={`Select ${description || name}`} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{options?.map((option: { label?: string; value: string }) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label || option.value}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

const renderCheckboxField = (
	property: FormProperty,
	field: ControllerRenderProps<FieldValues, string>,
) => {
	const { name, description, isDisabled } = property;
	return (
		<Checkbox
			{...field}
			disabled={isDisabled}
			checked={field.value}
			onCheckedChange={(checked) => {
				field.onChange(checked);
			}}
		>
			{description || name}
		</Checkbox>
	);
};

// Render a form field based on its type and isArray flag
const renderField = (
	property: FormProperty,
	field: ControllerRenderProps<FieldValues, string>,
) => {
	const { type } = property;
	// Handle regular types
	switch (type) {
		case "text":
		case "email":
		case "password":
		case "url":
		case "tel":
		case "date":
		case "datetime-local":
			return renderSimpleField(property, field);
		case "textarea":
			return renderTextareaField(property, field);
		case "number":
			return renderNumberField(property, field);
		case "checkbox":
			return renderCheckboxField(property, field);
		case "select":
			return renderSelectField(property, field);
		default:
			return null;
	}
};

// Helper function to render a tooltip
const renderTooltip = (content: string) => (
	<TooltipProvider>
		<Tooltip>
			<TooltipTrigger asChild>
				<Info className="h-4 w-4 text-muted-foreground" />
			</TooltipTrigger>
			<TooltipContent>
				<p>{content}</p>
			</TooltipContent>
		</Tooltip>
	</TooltipProvider>
);

/**
 * Props for the FormFieldWrapper component
 */
interface FormFieldWrapperProps {
	/**
	 * Object that defines the properties of the form field
	 */
	formProperty: FormProperty;

	/**
	 * React Hook Form methods object from useForm()
	 * Must be a UseFormReturn<any> instance from react-hook-form
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	form: UseFormReturn<any>;
}

/**
 * FormFieldWrapper - A flexible component for rendering different types of form fields
 *
 * This component is designed to simplify form creation by rendering various input types
 * based on a configuration object. It supports text inputs, textareas, number inputs,
 * checkboxes, and select dropdowns.
 *
 * @example
 * // Basic usage with react-hook-form
 * import { useForm, type FieldValues } from 'react-hook-form';
 * import { Form } from '../Form';
 * import { FormFieldWrapper } from './FormFieldWrapper';
 *
 * function MyForm() {
 *   const methods = useForm();
 *
 *   const textField = {
 *     id: "fullName",
 *     name: "Full Name",
 *     type: "text",
 *     description: "Your first and last name",
 *     isRequired: true
 *   };
 *
 *   return (
 *     <Form {...methods}>
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <FormFieldWrapper formProperty={textField} form={methods} />
 *         <button type="submit">Submit</button>
 *       </form>
 *     </Form>
 *   );
 * }
 *
 * @example
 * // Creating a form with multiple field types
 * const formFields = [
 *   {
 *     id: "name",
 *     name: "Name",
 *     type: "text",
 *     isRequired: true
 *   },
 *   {
 *     id: "email",
 *     name: "Email",
 *     type: "email",
 *     isRequired: true
 *   },
 *   {
 *     id: "message",
 *     name: "Message",
 *     type: "textarea",
 *     description: "Your message"
 *   },
 *   {
 *     id: "category",
 *     name: "Category",
 *     type: "select",
 *     options: [
 *       { value: "general", label: "General Inquiry" },
 *       { value: "support", label: "Technical Support" },
 *       { value: "feedback", label: "Feedback" }
 *     ]
 *   },
 *   {
 *     id: "subscribe",
 *     name: "Subscribe to newsletter",
 *     type: "checkbox"
 *   }
 * ];
 *
 * // Then in your component:
 * <Form {...methods}>
 *   <form onSubmit={methods.handleSubmit(onSubmit)}>
 *     {formFields.map(field => (
 *       <FormFieldWrapper
 *         key={field.id}
 *         formProperty={field}
 *         form={methods}
 *       />
 *     ))}
 *     <button type="submit">Submit</button>
 *   </form>
 * </Form>
 */
function FormFieldWrapper({
	formProperty,
	form,
}: FormFieldWrapperProps): JSX.Element {
	const { id, name, description, isRequired, helperText } = formProperty;

	return (
		<FormField
			key={id}
			control={form.control}
			name={id} // Use id instead of name for form field registration
			render={({ field }) => (
				<FormItem>
					<div className="flex items-center justify-between">
						<FormLabel className="text-sm">
							{name}
							{isRequired && <span className="ml-1 text-destructive">*</span>}
						</FormLabel>
						{helperText && renderTooltip(helperText)}
					</div>
					<FormControl>{renderField(formProperty, field)}</FormControl>
					<FormDescription className="text-sm text-muted-foreground">
						{description}
					</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}

export { FormFieldWrapper };
