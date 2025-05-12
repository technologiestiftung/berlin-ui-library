import { Label } from "./Label";
const meta = {
    title: "Components/Label",
    component: Label,
    args: {
        htmlFor: "example-input",
        children: "Example Label",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
export const Error = {
    args: {
        className: "text-destructive",
        children: "Error Label",
    },
};
