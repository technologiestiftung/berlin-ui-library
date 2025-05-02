// Server-side entry point - components safe to use in React Server Components

import "./style.css";

// Header server component
export { Header } from "./components/Header";
export type { HeaderProps } from "./components/Header";

// Export server-safe static components
export { Footer } from "./components/Footer";

// Breadcrumb components (static, no client interactivity)
export {
	Breadcrumbs,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "./components/Breadcrumb";

// Re-export types but not implementations for components that need client directive
// This allows for proper type checking in server components that pass props to client components
export type { ButtonProps } from "./components/Button/types";

// Utils that are safe for server components
export { cn } from "./lib/utils";
