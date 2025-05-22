export interface SearchFormProps {
    /**
     * Placeholder text for search input
     */
    placeholder?: string;
    /**
     * Function called when form is submitted
     */
    onSubmit?: (searchTerm: string) => void;
    /**
     * Default value for search input
     */
    defaultValue?: string;
    /**
     * Label for the search input (for accessibility)
     */
    label?: string;
    /**
     * Submit button label (for accessibility)
     */
    submitLabel?: string;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Controlled value for the search input
     */
    value?: string;
    /**
     * Function called when input value changes
     */
    onChange?: (value: string) => void;
}
//# sourceMappingURL=types.d.ts.map