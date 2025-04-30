"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext, } from "react-hook-form";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Label } from "./Label";
const Form = FormProvider;
const FormFieldContext = React.createContext({});
const FormField = (props) => {
    const { name, rules, ...rest } = props;
    const isRequired = Boolean(rules?.required);
    return (_jsx(FormFieldContext.Provider, { value: { name, required: isRequired }, children: _jsx(Controller, { name, rules, ...rest }) }));
};
const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        required: fieldContext.required,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};
const FormItemContext = React.createContext({});
const formItemVariants = cva("space-y-2", {
    variants: {
        layout: {
            vertical: "flex flex-col space-y-2 bg-white",
            horizontal: "flex items-center space-x-4",
        },
    },
    defaultVariants: {
        layout: "vertical",
    },
});
const FormItem = React.forwardRef(({ className, layout, ...props }, ref) => {
    const id = React.useId();
    return (_jsx(FormItemContext.Provider, { value: { id }, children: _jsx("div", { ref: ref, className: cn(formItemVariants({ layout, className })), ...props }) }));
});
FormItem.displayName = "FormItem";
const FormLabel = React.forwardRef(({ className, children, ...props }, ref) => {
    const { error, formItemId, required } = useFormField();
    return (_jsxs(Label, { ref: ref, className: cn(error && "font-bold text-destructive", className), htmlFor: formItemId, ...props, children: [children, required && _jsx("span", { className: "ml-1 text-destructive", children: "*" })] }));
});
FormLabel.displayName = "FormLabel";
const FormControl = React.forwardRef(({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return (_jsx(Slot, { ref: ref, id: formItemId, className: "border-2 border-black bg-white p-2", "aria-describedby": !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`, "aria-invalid": !!error, ...props }));
});
FormControl.displayName = "FormControl";
const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    return (_jsx("p", { ref: ref, id: formDescriptionId, className: cn("text-sm text-muted-foreground", className), ...props }));
});
FormDescription.displayName = "FormDescription";
const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message ?? "") : children;
    if (!body) {
        return null;
    }
    return (_jsx("p", { ref: ref, id: formMessageId, className: cn("text-sm font-medium text-destructive", className), ...props, children: body }));
});
FormMessage.displayName = "FormMessage";
export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField, };
