import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { FormFieldWrapper } from "./FormFieldWrapper";
import { Form } from "../Form";
import { Button } from "../Button/Button";
const meta = {
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
export const TextInput = {
    render: () => {
        const methods = useForm({
            defaultValues: {
                name: "",
            },
        });
        const property = {
            id: "name",
            name: "Name",
            type: "text",
            description: "Enter your full name",
            placeholder: "John Doe",
            helperText: "This name will be used on your certificate",
            isRequired: true,
        };
        return (_jsx(Form, { ...methods, children: _jsx("form", { children: _jsx(FormFieldWrapper, { formProperty: property, form: methods }) }) }));
    },
};
export const NumberInput = {
    render: () => {
        const methods = useForm({
            defaultValues: {
                age: "",
            },
        });
        const property = {
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
        return (_jsx(Form, { ...methods, children: _jsx("form", { children: _jsx(FormFieldWrapper, { formProperty: property, form: methods }) }) }));
    },
};
export const TextareaInput = {
    render: () => {
        const methods = useForm({
            defaultValues: {
                bio: "",
            },
        });
        const property = {
            id: "bio",
            name: "Biography",
            type: "textarea",
            description: "Tell us about yourself",
            placeholder: "I am...",
            helperText: "Keep it brief and focused on your professional experience",
            isRequired: false,
        };
        return (_jsx(Form, { ...methods, children: _jsx("form", { children: _jsx(FormFieldWrapper, { formProperty: property, form: methods }) }) }));
    },
};
export const SelectInput = {
    render: () => {
        const methods = useForm({
            defaultValues: {
                country: "",
            },
        });
        const property = {
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
        return (_jsx(Form, { ...methods, children: _jsx("form", { children: _jsx(FormFieldWrapper, { formProperty: property, form: methods }) }) }));
    },
};
export const CheckboxInput = {
    render: () => {
        const methods = useForm({
            defaultValues: {
                accept: false,
            },
        });
        const property = {
            id: "accept",
            name: "Accept Terms",
            type: "checkbox",
            description: "I agree to the terms and conditions",
            helperText: "You must accept our terms to continue",
            isRequired: true,
        };
        return (_jsx(Form, { ...methods, children: _jsx("form", { children: _jsx(FormFieldWrapper, { formProperty: property, form: methods }) }) }));
    },
};
export const DisabledInput = {
    render: () => {
        const methods = useForm({
            defaultValues: {
                disabledField: "This value cannot be changed",
            },
        });
        const property = {
            id: "disabledField",
            name: "Disabled Field",
            type: "text",
            description: "This field is disabled",
            helperText: "Contact support to modify this value",
            isRequired: false,
            isDisabled: true,
        };
        return (_jsx(Form, { ...methods, children: _jsx("form", { children: _jsx(FormFieldWrapper, { formProperty: property, form: methods }) }) }));
    },
};
export const MultipleInputsForm = {
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
        const formFields = [
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
        const onSubmit = (data) => {
            alert(JSON.stringify(data, null, 2));
        };
        return (_jsx("div", { style: { width: "500px", maxWidth: "100%" }, children: _jsx(Form, { ...methods, children: _jsxs("form", { onSubmit: methods.handleSubmit(onSubmit), className: "space-y-6", children: [_jsx("div", { className: "space-y-4", children: formFields.map((property) => (_jsx(FormFieldWrapper, { formProperty: property, form: methods }, property.id))) }), _jsx(Button, { type: "submit", children: "Submit Form" })] }) }) }));
    },
};
export const CheckboxGroupInput = {
    render: () => {
        const methods = useForm({
            defaultValues: {
                interests: [],
            },
        });
        const property = {
            id: "interests",
            name: "Interests",
            type: "checkbox",
            description: "Select your areas of interest",
            helperText: "Choose all that apply",
            isRequired: false,
            options: [
                { value: "technology", label: "Technology" },
                { value: "arts", label: "Arts & Culture" },
                { value: "sports", label: "Sports & Recreation" },
                { value: "science", label: "Science & Education" },
            ],
        };
        return (_jsx(Form, { ...methods, children: _jsxs("form", { children: [_jsx(FormFieldWrapper, { formProperty: property, form: methods }), _jsx("div", { className: "mt-4", children: _jsxs("p", { className: "text-muted-foreground text-xs", children: ["Selected value: ", JSON.stringify(methods.watch("interests"))] }) })] }) }));
    },
};
export const RadioGroupInput = {
    render: () => {
        const methods = useForm({
            defaultValues: {
                theme: "light",
            },
        });
        const property = {
            id: "theme",
            name: "Theme Preference",
            type: "radio",
            description: "Choose your preferred theme",
            helperText: "This can be changed later in settings",
            isRequired: true,
            options: [
                { value: "light", label: "Light Theme" },
                { value: "dark", label: "Dark Theme" },
                { value: "system", label: "System Default" },
            ],
        };
        return (_jsx(Form, { ...methods, children: _jsx("form", { children: _jsx(FormFieldWrapper, { formProperty: property, form: methods }) }) }));
    },
};
export const RadioGroupInputHorizontal = {
    render: () => {
        const methods = useForm({
            defaultValues: {
                subscription: "",
            },
        });
        const property = {
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
        return (_jsx(Form, { ...methods, children: _jsx("form", { children: _jsx(FormFieldWrapper, { formProperty: property, form: methods }) }) }));
    },
};
export const CheckboxGroupInputHorizontal = {
    render: () => {
        const methods = useForm({
            defaultValues: {
                notifications: [],
            },
        });
        const property = {
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
        return (_jsx(Form, { ...methods, children: _jsxs("form", { children: [_jsx(FormFieldWrapper, { formProperty: property, form: methods }), _jsx("div", { className: "mt-4", children: _jsxs("p", { className: "text-muted-foreground text-xs", children: ["Selected options: ", JSON.stringify(methods.watch("notifications"))] }) })] }) }));
    },
};
