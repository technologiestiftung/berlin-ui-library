import { Input } from "./Input";
const meta = {
    title: "Elements/Input",
    component: Input,
    argTypes: {
        onChange: { action: "changed" },
        variant: { control: { type: "radio" }, options: ["default", "outline"] },
        size: { control: { type: "radio" }, options: ["sm", "default", "lg"] },
    },
    args: {
        placeholder: "Enter text",
        type: "text",
        variant: "default",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
export const WithValue = {
    args: {
        value: "Hello World",
    },
};
export const Disabled = {
    args: {
        disabled: true,
        placeholder: "Disabled input",
    },
};
export const Password = {
    args: {
        type: "number",
        placeholder: "Enter password",
    },
};
export const Outline = {
    args: {
        variant: "outline",
    },
};
