import { JSX } from '../../../node_modules/react';
/**
 * FormProperty interface defines the structure of a form field property
 * that will be used to render a form field with the FormFieldWrapper component.
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
/**
 * Props for the FormFieldWrapper component
 */
interface FormFieldWrapperProps {
    /**
     * Object that defines the properties of the form field
     */
    formProperty: FormProperty;
    /**
     * React Hook Form methods object (from useForm())
     */
    form: any;
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
 * import { useForm } from 'react-hook-form';
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
declare function FormFieldWrapper({ formProperty, form, }: FormFieldWrapperProps): JSX.Element;
export { FormFieldWrapper };
//# sourceMappingURL=FormFieldWrapper.d.ts.map