import FilterButton from "./FilterButton";
const meta = {
    title: "Components/FilterButton",
    component: FilterButton,
    argTypes: { onClick: { action: "clicked" } },
};
export default meta;
export const Default = { args: { numActiveFilters: 0 } };
export const WithCount = { args: { numActiveFilters: 3 } };
