import { Button } from "./Button";
const meta = {
    title: "Components/Button",
    component: Button,
    argTypes: { onClick: { action: "clicked" } },
};
export default meta;
export const Default = {
    args: { variant: "default", size: "default", children: "Click Me" },
};
export const Link = {
    args: { variant: "link", size: "default", children: "Click Me" },
};
export const VerticalShop = {
    args: {
        variant: "vertical-shop",
        size: "default",
        children: "Vertical Shop Button",
    },
};
