import "./style.css";

// Header components
export { Header, HeaderClient } from "./components/Header";
export type { HeaderProps, HeaderClientProps } from "./components/Header";

// Footer components
export { Footer } from "./components/Footer";

// Drawer components
export {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "./components/Drawer";

// Breadcrumb components
export {
	Breadcrumbs,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "./components/Breadcrumb";

// Button components
export { Button, buttonVariants } from "./components/Button";

// Form components - will be imported in client components
export {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	useFormField,
} from "./components/Form";

// Form field wrapper components
export { FormFieldWrapper, FormWrapper } from "./components/FormWrapper";

// Input component
export { Input } from "./components/Input/Input";

// Label component
export { Label } from "./components/Label/Label";

// For convenience, re-export utility used by other components
export { cn } from "./lib/utils";

// Main entry point - re-exports server components
// For client components, users should import from 'berlin-ui-library/client'

// Re-export everything from the server entry point
export * from "./index.server";
