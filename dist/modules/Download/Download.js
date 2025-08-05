import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../../elements/Button";
export const DownloadItem = React.forwardRef(({ className, title, description, fileType, date, downloadUrl, buttonText = "Download", ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn("flex flex-col border-b border-grey-dark py-5 md:flex-row md:items-center md:justify-between", className), ...props, children: [_jsxs("div", { className: "md:flex-grow md:border-r md:border-grey-dark md:pr-[18px]", children: [_jsx("h3", { className: "mb-[0.4em] text-[17px] leading-[1.353em] font-bold text-black", children: title }), description && (_jsx("p", { className: "mr-2 mb-2 break-words", children: description })), (fileType || date) && (_jsxs("div", { className: "mb-0 text-[14px] text-text-lightest md:mb-0", children: [fileType && _jsx("span", { children: fileType }), fileType && date && _jsx("span", { children: " \u2013 " }), date && _jsxs("span", { children: ["Stand: ", date] })] }))] }), _jsx("div", { className: "mt-4 md:mt-0 md:flex-shrink-0 md:pl-[18px]", children: _jsx("a", { href: downloadUrl, className: "inline-block", children: _jsx(Button, { variant: "download", className: "min-h-[43px] w-auto text-base", children: buttonText }) }) })] }));
});
DownloadItem.displayName = "DownloadItem";
export const DownloadGroup = React.forwardRef(({ className, title, asList = true, children, ...props }, ref) => {
    const wrappedChildren = React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
            return child;
        }
        if (asList) {
            return (_jsx("li", { className: "m-0 before:hidden before:content-none after:hidden after:content-none", children: child }));
        }
        return child;
    });
    return (_jsxs("div", { ref: ref, className: cn("modul-download-multi", className), ...props, children: [title && _jsx("h2", { className: "mb-0 text-xl font-bold", children: title }), asList ? (_jsx("ul", { className: "list-none p-0", children: wrappedChildren })) : (_jsx("div", { className: "border-grey-dark", children: wrappedChildren }))] }));
});
DownloadGroup.displayName = "DownloadGroup";
