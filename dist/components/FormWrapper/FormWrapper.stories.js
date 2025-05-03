import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormWrapper } from "./FormWrapper";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import { FormFieldWrapper, } from "../FormWrapper/FormFieldWrapper";
const meta = {
    title: "Components/FormWrapper",
    component: FormWrapper,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
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
    const formFields = [
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
    return (_jsxs(FormWrapper, { withBackground: withBackground, className: "w-full max-w-md", padding: "p-8", children: [_jsx("h2", { className: "mb-6 text-xl font-bold", children: "Example" }), _jsx(Form, { ...form, children: _jsxs("form", { className: "space-y-6", children: [formFields.map((field) => (_jsx(FormFieldWrapper, { formProperty: field, form: form }, field.id))), _jsxs("div", { className: "mt-8 flex justify-between border-t border-gray-200 pt-4", children: [_jsx(Button, { variant: "back-link", children: _jsx("span", { className: "flex items-center", children: "Back" }) }), _jsx(Button, { type: "submit", children: _jsx("span", { className: "flex items-center", children: "Action" }) })] })] }) })] }));
};
export const Example = {
    render: () => _jsx(ExampleForm, {}),
};
export const WithoutBackground = {
    render: () => _jsx(ExampleForm, { withBackground: false }),
};
export const CustomPadding = {
    render: () => {
        const methods = useForm({
            defaultValues: {
                message: "",
            },
        });
        const messageField = {
            id: "message",
            name: "Message",
            type: "text",
            placeholder: "Enter a message",
        };
        return (_jsx(FormWrapper, { padding: "p-10", className: "max-w-md", children: _jsx(Form, { ...methods, children: _jsxs("form", { className: "space-y-4", children: [_jsx(FormFieldWrapper, { formProperty: messageField, form: methods }), _jsx(Button, { type: "submit", children: "Send" })] }) }) }));
    },
};
