import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "./Form";
const meta = {
    title: "Components/Form",
    component: Form,
    tags: ["autodocs"],
};
export default meta;
export const Simple = {
    render: () => {
        const methods = useForm({ defaultValues: { name: "" } });
        return (_jsx(Form, { ...methods, children: _jsxs("form", { onSubmit: methods.handleSubmit((data) => console.warn(data)), className: "space-y-4", children: [_jsx(FormField, { name: "name", control: methods.control, render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Name" }), _jsx(FormControl, { children: _jsx(Input, { ...field, placeholder: "Your name" }) }), _jsx(FormDescription, { children: "Enter your full name." }), _jsx(FormMessage, {})] })) }), _jsx(Button, { type: "submit", children: "Submit" })] }) }));
    },
};
export const WithError = {
    render: () => {
        const methods = useForm({
            defaultValues: { name: "" },
            mode: "onSubmit",
            resolver: async (values) => ({
                values: values,
                errors: values.name
                    ? {}
                    : { name: { type: "required", message: "Name is required" } },
            }),
        });
        return (_jsx(Form, { ...methods, children: _jsxs("form", { onSubmit: methods.handleSubmit(() => { }), className: "space-y-4", children: [_jsx(FormField, { name: "name", control: methods.control, render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Name" }), _jsx(FormControl, { children: _jsx(Input, { ...field, placeholder: "Your name" }) }), _jsx(FormDescription, { children: "Enter your full name." }), _jsx(FormMessage, {})] })) }), _jsx(Button, { type: "submit", children: "Submit" })] }) }));
    },
};
export const Disabled = {
    render: () => {
        const methods = useForm({
            defaultValues: { name: "John Doe" },
        });
        return (_jsx(Form, { ...methods, children: _jsx("form", { className: "space-y-4", children: _jsx(FormField, { name: "name", control: methods.control, render: ({ field }) => (_jsxs(FormItem, { layout: "vertical", children: [_jsx(FormLabel, { children: "Name" }), _jsx(FormControl, { children: _jsx(Input, { ...field, disabled: true }) }), _jsx(FormDescription, { children: "Disabled input" }), _jsx(FormMessage, {})] })) }) }) }));
    },
};
export const Horizontal = {
    render: () => {
        const methods = useForm({ defaultValues: { name: "" } });
        return (_jsx(Form, { ...methods, children: _jsxs("form", { onSubmit: methods.handleSubmit((data) => console.warn(data)), className: "space-y-4", children: [_jsx(FormField, { name: "name", control: methods.control, render: ({ field }) => (_jsxs(FormItem, { layout: "horizontal", children: [_jsx(FormLabel, { children: "Name" }), _jsx(FormControl, { children: _jsx(Input, { ...field, placeholder: "Your name" }) }), _jsx(FormDescription, { children: "Enter your full name." }), _jsx(FormMessage, {})] })) }), _jsx(Button, { type: "submit", children: "Submit" })] }) }));
    },
};
export const Required = {
    render: () => {
        const methods = useForm({ defaultValues: { name: "" } });
        return (_jsx(Form, { ...methods, children: _jsx("form", { className: "space-y-4", children: _jsx(FormField, { name: "name", control: methods.control, rules: { required: true }, render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Name" }), _jsx(FormControl, { children: _jsx(Input, { ...field, placeholder: "Your name" }) }), _jsx(FormMessage, {})] })) }) }) }));
    },
};
