import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "../Form";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "../Select";
import { Checkbox } from "../Checkbox";
import { RadioGroup, RadioGroupItem } from "../RadioGroup/RadioGroup";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "../Tooltip";
import { Label } from "../Label";
// Render a number field
const renderNumberField = (property, field) => {
    const { name, description, placeholder, isDisabled } = property;
    const displayValue = field.value !== undefined ? field.value : "";
    return (_jsx(Input, { ...field, type: "number", min: property.min, max: property.max, step: property.step || 1, placeholder: placeholder || `Enter ${description || name}`, disabled: isDisabled, onChange: (e) => {
            const value = e.target.value;
            if (value === "") {
                field.onChange(""); // Use empty string for clearing
            }
            else {
                field.onChange(Number(value));
            }
        }, value: displayValue }));
};
const renderSimpleField = (property, field) => {
    const { name, description, placeholder, isDisabled } = property;
    return (_jsx(Input, { ...field, type: property.type, placeholder: placeholder || `Enter ${description || name}`, disabled: isDisabled }));
};
const renderTextareaField = (property, field) => {
    const { name, description, placeholder, isDisabled } = property;
    return (_jsx(Textarea, { ...field, placeholder: placeholder || `Enter ${description || name}`, disabled: isDisabled }));
};
const renderSelectField = (property, field) => {
    const { name, description, options, isDisabled } = property;
    // Use field.value instead of property.defaultValue to ensure form state is used
    const value = field.value !== undefined ? field.value : "";
    return (_jsxs(Select, { disabled: isDisabled, onValueChange: field.onChange, value: value, defaultValue: value, children: [_jsx(SelectTrigger, { className: "w-full", children: _jsx(SelectValue, { placeholder: `Select ${description || name}` }) }), _jsx(SelectContent, { children: _jsx(SelectGroup, { children: options?.map((option) => (_jsx(SelectItem, { value: option.value, children: option.label || option.value }, option.value))) }) })] }));
};
const renderCheckboxField = (property, field) => {
    const { name, isDisabled, options, direction } = property;
    // If options are provided, render multiple checkboxes (checkbox group)
    if (options && Array.isArray(options) && options.length > 0) {
        // Initialize the field value as an array if it doesn't exist
        let selectedValues = [];
        if (Array.isArray(field.value)) {
            selectedValues = field.value;
        }
        else if (field.value) {
            selectedValues = [field.value];
        }
        return (_jsx("div", { className: `flex ${direction === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-2"}`, children: options.map((option) => {
                // Check if this option is selected
                const isSelected = selectedValues.includes(option.value);
                return (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: `${field.name}-${option.value}`, disabled: isDisabled, checked: isSelected, onCheckedChange: (checked) => {
                                const newValue = [...selectedValues];
                                if (checked) {
                                    // Add the value if it's not already included
                                    if (!newValue.includes(option.value)) {
                                        newValue.push(option.value);
                                    }
                                }
                                else {
                                    // Remove the value
                                    const index = newValue.indexOf(option.value);
                                    if (index > -1) {
                                        newValue.splice(index, 1);
                                    }
                                }
                                field.onChange(newValue);
                            } }), _jsx(Label, { htmlFor: `${field.name}-${option.value}`, className: "leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled", children: option.label || option.value })] }, option.value));
            }) }));
    }
    // If no options are provided, render a single checkbox
    return (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { ...field, id: field.name, disabled: isDisabled, checked: field.value, onCheckedChange: (checked) => {
                    field.onChange(checked);
                } }), _jsx(Label, { htmlFor: field.name, className: "text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled", children: name })] }));
};
const renderRadioGroup = (property, field) => {
    const { options, isDisabled, direction } = property;
    return (_jsx(RadioGroup, { ...field, disabled: isDisabled, className: `flex ${direction === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-1"}`, children: options?.map((option) => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { id: `${field.name}-${option.value}`, value: option.value }), _jsx(Label, { htmlFor: `${field.name}-${option.value}`, className: "leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled", children: option.label || option.value })] }, option.value))) }));
};
// Render a form field based on its type and isArray flag
const renderField = (property, field) => {
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
// Helper function to render a tooltip
const renderTooltip = (content) => (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Info, { className: "text-muted-foreground h-4 w-4" }) }), _jsx(TooltipContent, { children: _jsx("p", { children: content }) })] }) }));
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
function FormFieldWrapper({ formProperty, form, }) {
    const { id, name, description, isRequired, helperText } = formProperty;
    return (_jsx(FormField, { control: form.control, name: id, render: ({ field }) => (_jsxs(FormItem, { children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(FormLabel, { className: "relative font-bold", children: [name, isRequired && (_jsx("span", { className: "absolute -top-2 ml-1 text-[1.75em] text-decorative-destructive", children: "*" }))] }), helperText && renderTooltip(helperText)] }), _jsx(FormControl, { children: renderField(formProperty, field) }), _jsx(FormDescription, { className: "text-sm text-text-lightest", children: description }), _jsx(FormMessage, {})] })) }, id));
}
export { FormFieldWrapper };
