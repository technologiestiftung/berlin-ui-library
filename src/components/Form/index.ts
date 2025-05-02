/**
 * Form Components
 *
 * This module exports Form components that are compatible with React Server Components (RSC).
 *
 * Important usage notes:
 *
 * 1. In Server Components:
 *    - You cannot directly use Form components that rely on React hooks or browser APIs
 *    - Form components must be used within client components with "use client" directive
 *
 * 2. In Client Components:
 *    - Add "use client" at the top of your file
 *    - Import and use Form components normally
 *
 * Example usage in a Next.js app:
 *
 * ```tsx
 * // app/form-page.tsx - Server Component
 * import { MyClientForm } from './my-client-form';
 *
 * export default function FormPage() {
 *   return (
 *     <div>
 *       <h1>Form</h1>
 *       <MyClientForm />
 *     </div>
 *   );
 * }
 *
 * // my-client-form.tsx - Client Component
 * "use client";
 *
 * import { useForm } from "react-hook-form";
 * import {
 *   Form, FormField, FormItem,
 *   FormLabel, FormControl, FormMessage
 * } from "berlin-ui-library";
 *
 * export function MyClientForm() {
 *   const form = useForm();
 *   return (
 *     <Form {...form}>
 *       <form>
 *         <FormField
 *           control={form.control}
 *           name="example"
 *           render={({ field }) => (
 *             <FormItem>
 *               <FormLabel>Example</FormLabel>
 *               <FormControl>
 *                 <input {...field} />
 *               </FormControl>
 *               <FormMessage />
 *             </FormItem>
 *           )}
 *         />
 *       </form>
 *     </Form>
 *   );
 * }
 * ```
 */

export {
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	FormField,
	useFormField,
} from "./Form";
