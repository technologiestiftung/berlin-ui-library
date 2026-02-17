/* eslint-disable complexity */
import { Info } from "lucide-react";
import { JSX, useState } from "react";
import {
	ControllerRenderProps,
	FieldValues,
	UseFormReturn,
} from "react-hook-form";
import { Checkbox } from "../Checkbox";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../Form";
import { Input } from "../Input/Input";
import { Label } from "../Label";
import { RadioGroup, RadioGroupItem } from "../RadioGroup/RadioGroup";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../Select";
import { Textarea } from "../Textarea";
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

	/**
	 * Direction for displaying option groups (radio, checkbox)
	 * 'horizontal' or 'vertical', defaults to 'vertical'
	 */
	direction?: "horizontal" | "vertical";
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

const RichText = ({ children }: { children: React.ReactNode }) => {
	if (typeof children !== "string") return <>{children}</>;

	const parse = (text: string): React.ReactNode[] => {
		const regex = /<(b|i|u)>(.*?)<\/\1>/i;
		const match = regex.exec(text);

		if (!match || match.index === undefined) {
			return [text];
		}

		const [fullMatch, tag, inner] = match;
		const before = text.slice(0, match.index);
		const after = text.slice(match.index + fullMatch.length);

		const Tag = tag as keyof JSX.IntrinsicElements;

		return [
			...(before ? parse(before) : []),
			<Tag key={match.index}>{parse(inner)}</Tag>,
			...(after ? parse(after) : []),
		];
	};

	return <>{parse(children)}</>;
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
	const { name, isDisabled, options, direction } = property;

	// If options are provided, render multiple checkboxes (checkbox group)
	if (options && Array.isArray(options) && options.length > 0) {
		// Initialize the field value as an array if it doesn't exist
		let selectedValues: string[] = [];
		if (Array.isArray(field.value)) {
			selectedValues = field.value;
		} else if (field.value) {
			selectedValues = [field.value];
		}

		return (
			<div
				className={`flex ${direction === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-2"}`}
			>
				{options.map((option) => {
					// Check if this option is selected
					const isSelected = selectedValues.includes(option.value);

					return (
						<div key={option.value} className="flex items-center space-x-2">
							<Checkbox
								id={`${field.name}-${option.value}`}
								disabled={isDisabled}
								checked={isSelected}
								onCheckedChange={(checked) => {
									const newValue = [...selectedValues];

									if (checked) {
										// Add the value if it's not already included
										if (!newValue.includes(option.value)) {
											newValue.push(option.value);
										}
									} else {
										// Remove the value
										const index = newValue.indexOf(option.value);
										if (index > -1) {
											newValue.splice(index, 1);
										}
									}

									field.onChange(newValue);
								}}
							/>
							<Label
								htmlFor={`${field.name}-${option.value}`}
								className="leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
							>
								<RichText>{option.label || option.value}</RichText>
							</Label>
						</div>
					);
				})}
			</div>
		);
	}

	// If no options are provided, render a single checkbox
	return (
		<div className="flex items-center space-x-2">
			<Checkbox
				{...field}
				id={field.name}
				disabled={isDisabled}
				checked={field.value}
				onCheckedChange={(checked) => {
					field.onChange(checked);
				}}
			/>
			<Label
				htmlFor={field.name}
				className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
			>
				{name}
			</Label>
		</div>
	);
};

const renderRadioGroup = (
	property: FormProperty,
	field: ControllerRenderProps<FieldValues, string>,
) => {
	const { options, isDisabled, direction } = property;

	return (
		<RadioGroup
			value={field.value}
			onValueChange={field.onChange}
			disabled={isDisabled}
			className={`flex ${direction === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-1"}`}
		>
			{options?.map((option) => (
				<div key={option.value} className="flex items-center space-x-2">
					<RadioGroupItem
						id={`${field.name}-${option.value}`}
						value={option.value}
					/>
					<Label
						htmlFor={`${field.name}-${option.value}`}
						className="leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled"
					>
						<RichText>{option.label || option.value}</RichText>
					</Label>
				</div>
			))}
		</RadioGroup>
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
		case "radio":
			return renderRadioGroup(property, field);
		case "select":
			return renderSelectField(property, field);
		default:
			return null;
	}
};

const renderTooltip = (content: string) => {
	const TooltipWrapper = () => {
		const [open, setOpen] = useState(false);

		return (
			<TooltipProvider>
				<Tooltip open={open} onOpenChange={setOpen}>
					<TooltipTrigger asChild>
						<Info
							className="text-muted-foreground h-4 w-4 cursor-pointer"
							onClick={() => setOpen(!open)}
						/>
					</TooltipTrigger>
					<TooltipContent>
						<p>{content}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		);
	};

	return <TooltipWrapper />;
};

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
						<FormLabel className="font-bold">
							{name}
							{isRequired && (
								<span className="ml-1 align-top text-[1.75em] leading-none text-decorative-destructive">
									*
								</span>
							)}
						</FormLabel>
						{helperText && renderTooltip(helperText)}
					</div>
					<FormControl>{renderField(formProperty, field)}</FormControl>
					{description && (
						<FormDescription className="text-sm text-text-lightest">
							{description}
						</FormDescription>
					)}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}

export { FormFieldWrapper };
