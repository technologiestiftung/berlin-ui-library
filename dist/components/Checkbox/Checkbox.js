"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import XIcon from "@/assets/icons/x_icon.svg?react";
import { cn } from "@/lib/utils";
const Checkbox = React.forwardRef(({ className, variant = "default", ...props }, ref) => (_jsx(CheckboxPrimitive.Root, { ref: ref, className: cn("peer ring-offset-background focus-visible:ring-ring h-4 w-4 shrink-0 cursor-pointer rounded-xs border border-black bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", variant === "default" &&
        "data-[state=checked]:border-tabfocus data-[state=checked]:bg-tabfocus data-[state=checked]:!text-white", variant === "styled" && "h-6 w-6 cursor-pointer border-2 border-none", className), ...props, children: _jsxs(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center"), children: [variant === "styled" && _jsx(XIcon, { className: "h-6 w-6 text-black" }), variant !== "styled" && _jsx(Check, { className: "h-4 w-4 text-white" })] }) })));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox };
