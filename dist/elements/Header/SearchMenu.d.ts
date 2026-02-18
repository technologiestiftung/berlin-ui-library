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
    /**
     * Whether to perform a search on berlin.de instead of using the onSearch callback
     */
    doBerlinSearch: boolean | undefined;
}
export declare function SearchMenu({ isOpen, close, onSearch, doBerlinSearch, }: SearchMenuProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SearchMenu.d.ts.map