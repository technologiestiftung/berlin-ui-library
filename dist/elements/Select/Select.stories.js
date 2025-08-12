import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectSeparator, } from "./Select";
const meta = {
    title: "Elements/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsxs(Select, { children: [_jsx(SelectTrigger, { className: "w-[180px]", children: _jsx(SelectValue, { placeholder: "Select a fruit" }) }), _jsx(SelectContent, { children: _jsxs(SelectGroup, { children: [_jsx(SelectItem, { value: "apple", children: "Apple" }), _jsx(SelectItem, { value: "banana", children: "Banana" }), _jsx(SelectItem, { value: "blueberry", children: "Blueberry" }), _jsx(SelectItem, { value: "orange", children: "Orange" }), _jsx(SelectItem, { value: "strawberry", children: "Strawberry" })] }) })] })),
};
export const WithGroups = {
    render: () => (_jsxs(Select, { children: [_jsx(SelectTrigger, { className: "w-[200px]", children: _jsx(SelectValue, { placeholder: "Select a location" }) }), _jsxs(SelectContent, { children: [_jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Europe" }), _jsx(SelectItem, { value: "berlin", children: "Berlin" }), _jsx(SelectItem, { value: "paris", children: "Paris" }), _jsx(SelectItem, { value: "london", children: "London" })] }), _jsx(SelectSeparator, {}), _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "North America" }), _jsx(SelectItem, { value: "new-york", children: "New York" }), _jsx(SelectItem, { value: "san-francisco", children: "San Francisco" }), _jsx(SelectItem, { value: "toronto", children: "Toronto" })] })] })] })),
};
export const Disabled = {
    render: () => (_jsxs(Select, { disabled: true, children: [_jsx(SelectTrigger, { className: "w-[180px]", children: _jsx(SelectValue, { placeholder: "Disabled" }) }), _jsx(SelectContent, { children: _jsx(SelectGroup, { children: _jsx(SelectItem, { value: "not-selectable", children: "Not selectable" }) }) })] })),
};
export const WithDefaultValue = {
    render: () => (_jsxs(Select, { defaultValue: "cat", children: [_jsx(SelectTrigger, { className: "w-[180px]", children: _jsx(SelectValue, { placeholder: "Select a pet" }) }), _jsx(SelectContent, { children: _jsxs(SelectGroup, { children: [_jsx(SelectItem, { value: "dog", children: "Dog" }), _jsx(SelectItem, { value: "cat", children: "Cat" }), _jsx(SelectItem, { value: "fish", children: "Fish" }), _jsx(SelectItem, { value: "rabbit", children: "Rabbit" })] }) })] })),
};
export const WithLabel = {
    render: () => (_jsxs("div", { className: "grid w-[200px] gap-1.5", children: [_jsx("label", { htmlFor: "country", className: "text-sm font-medium", children: "Country" }), _jsxs(Select, { children: [_jsx(SelectTrigger, { id: "country", children: _jsx(SelectValue, { placeholder: "Select a country" }) }), _jsx(SelectContent, { children: _jsxs(SelectGroup, { children: [_jsx(SelectItem, { value: "germany", children: "Germany" }), _jsx(SelectItem, { value: "france", children: "France" }), _jsx(SelectItem, { value: "spain", children: "Spain" }), _jsx(SelectItem, { value: "italy", children: "Italy" })] }) })] }), _jsx("p", { className: "text-muted-foreground text-sm", children: "Select the country you're from." })] })),
};
