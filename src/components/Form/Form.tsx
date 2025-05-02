// We can't directly use client components or hooks in server components,
// so we just re-export them for use in client components.

// This file exists to provide a proper entry point for React Server Components
// while ensuring all client-only functionality is properly marked.

export {
	// Re-export everything from Form.client.tsx
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	FormField,
	useFormField,
} from "./Form.client";
