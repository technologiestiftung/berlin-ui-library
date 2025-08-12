import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SearchForm } from "./SearchForm";
const meta = {
    title: "Elements/SearchForm",
    component: SearchForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        onSubmit: { action: "submitted" },
        onChange: { action: "changed" },
    },
};
export default meta;
export const Default = {
    args: {
        placeholder: "Suchbegriff",
        label: "Suchbegriff",
        submitLabel: "Suchen",
    },
};
export const WithDefaultValue = {
    args: {
        placeholder: "Suchbegriff",
        defaultValue: "Berlin",
        label: "Suchbegriff",
        submitLabel: "Suchen",
    },
};
export const CustomPlaceholder = {
    args: {
        placeholder: "Seiten durchsuchen...",
        label: "Websuche",
        submitLabel: "Suchen",
    },
};
export const ControlledExample = {
    render: () => {
        return (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx("h3", { className: "text-lg font-bold", children: "Controlled Search Form Example" }), _jsx("p", { className: "max-w-md text-sm", children: "This example shows how the SearchForm can be used as a controlled component where the parent manages the state. In a real application, you would maintain the state and handle the onChange and onSubmit events." }), _jsx(SearchForm, { value: "Berlin", onChange: (value) => console.warn("Value changed:", value), onSubmit: (value) => console.warn("Form submitted with:", value) })] }));
    },
};
export const InAForm = {
    render: () => {
        return (_jsxs("div", { className: "w-full max-w-2xl border border-gray-300 p-6", children: [_jsx("h2", { className: "mb-4 text-2xl font-bold", children: "Beispiel Website" }), _jsxs("div", { className: "mb-8", children: [_jsx("p", { className: "mb-4", children: "Dies ist ein Beispiel f\u00FCr die Verwendung der Suchkomponente auf einer Website." }), _jsx(SearchForm, { placeholder: "Website durchsuchen", onSubmit: (value) => console.warn("Searching for:", value) })] })] }));
    },
};
