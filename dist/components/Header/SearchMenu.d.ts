export interface SearchMenuProps {
    /**
     * Whether the search drawer is open
     */
    isOpen: boolean;
    /**
     * Function to close the search drawer
     */
    close: () => void;
    /**
     * Function called when search is submitted
     */
    onSearch?: (searchTerm: string) => void;
}
export declare function SearchMenu({ isOpen, close, onSearch }: SearchMenuProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SearchMenu.d.ts.map