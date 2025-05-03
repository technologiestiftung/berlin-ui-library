"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
const Checkbox = React.forwardRef(({ className, ...props }, ref) => (_jsx(CheckboxPrimitive.Root, { ref: ref, className: cn("peer ring-offset-background focus-visible:ring-ring h-4 w-4 shrink-0 rounded-xs border border-black bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-tabfocus data-[state=checked]:bg-tabfocus data-[state=checked]:!text-white", className), ...props, children: _jsx(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-white"), children: _jsx(Check, { className: "h-4 w-4" }) }) })));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox };
