import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "./Icon";
import { iconNames } from "./iconRegistry";
const meta = {
    title: "Elements/Icon",
    component: Icon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        name: {
            control: "select",
            options: iconNames, // Automatically populated from file system
        },
        className: {
            control: "text",
        },
    },
};
export default meta;
export const Default = {
    args: {
        name: "search",
    },
};
export const WithCustomSize = {
    args: {
        name: "star",
        className: "w-8 h-8 text-yellow-500",
    },
};
export const TrafficIcon = {
    args: {
        name: "traffic-ubahn",
        className: "size-12",
    },
};
export const IconGallery = {
    render: () => {
        const trafficIcons = iconNames.filter((name) => name.startsWith("traffic-"));
        const regularIcons = iconNames.filter((name) => !name.startsWith("traffic-"));
        return (_jsxs("div", { className: "max-w-6xl space-y-8 p-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-4 text-lg font-semibold text-gray-800", children: "Regular Icons" }), _jsx("div", { className: "grid grid-cols-8 gap-4", children: regularIcons.map((iconName) => (_jsxs("div", { className: "flex flex-col items-center gap-2 p-2", children: [_jsx(Icon, { name: iconName, className: "size-6 text-gray-700" }), _jsx("span", { className: "text-center text-xs break-words text-gray-600", children: iconName })] }, iconName))) })] }), trafficIcons.length > 0 && (_jsxs("div", { children: [_jsxs("h3", { className: "mb-4 text-lg font-semibold text-gray-800", children: ["Traffic Icons", " ", _jsx("span", { className: "text-sm font-normal", children: "(preserve original colors)" })] }), _jsx("div", { className: "grid grid-cols-8 gap-4", children: trafficIcons.map((iconName) => (_jsxs("div", { className: "flex flex-col items-center gap-2 p-2", children: [_jsx(Icon, { name: iconName, className: "size-8" }), _jsx("span", { className: "text-center text-xs break-words text-gray-600", children: iconName.replace("traffic-", "") })] }, iconName))) })] }))] }));
    },
};
