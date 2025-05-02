"use client";

import "./style.css";

// Re-export client-specific components and hooks
// Header client component
export { HeaderClient } from "./components/Header";
export type { HeaderClientProps } from "./components/Header";

// Form components (all client-specific)
export {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	useFormField,
} from "./components/Form/Form.client";

// Form field wrappers
export { FormFieldWrapper, FormWrapper } from "./components/FormWrapper";

// Re-export other client-side components
export {
	Drawer,
	DrawerContent,
	DrawerTrigger,
	DrawerClose,
} from "./components/Drawer";
export { Button, buttonVariants } from "./components/Button";
export { Select, SelectContent, SelectTrigger } from "./components/Select";
export { Input } from "./components/Input/Input";
export { Label } from "./components/Label/Label";
export { RadioGroup, RadioGroupItem } from "./components/RadioGroup";
export { Checkbox } from "./components/Checkbox";
export { Textarea } from "./components/Textarea";

// Utils
export { cn } from "./lib/utils";
