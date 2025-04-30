import { SubmitButton } from "./SubmitButton";
const meta = {
    title: "Components/SubmitButton",
    component: SubmitButton,
    argTypes: { onClick: { action: "clicked" } },
    args: {
        children: "Submit",
    },
};
export default meta;
export const Default = {};
export const Disabled = {
    args: {
        disabled: true,
        children: "Submitting...",
    },
};
