import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { ChevronRight } from "~/components/icons/chevron-right.tsx";
import { useUpdateBreadcrumbsWithCategory } from "~/hooks/use-update-breadcrumbs-with-category.tsx";
import { LocalizedTrackedAnchorLink } from "~/components/anchor-link/localized-tracked-anchor-link.tsx";
export function Breadcrumbs() {
    /**
     * If a single category is selected, the breadcrumbs needs to show the category name instead of "Alle Angebote".
     * And categories are read from the URL query parameter "category", which is only available in the client-side.
     * So we use an effect hook to update the breadcrumbs with the category name when the component is mounted.
     */
    const [updatedBreadcrumbs] = useUpdateBreadcrumbsWithCategory();
    return (_jsx("div", { className: "text-sm items-center gap-x-3 flex flex-row", children: updatedBreadcrumbs?.map(({ label, href }, index) => {
            const isLast = index === updatedBreadcrumbs.length - 1;
            return (_jsxs(React.Fragment, { children: [index > 0 && (_jsx(ChevronRight, { className: isLast ? "text-black" : "text-berlin-grey-darker" })), _jsx(LocalizedTrackedAnchorLink, { href: href, className: `
						whitespace-nowrap overflow-hidden text-ellipsis max-w-[20vw] sm:max-w-[30vw] md:max-w-[40vw]
						${isLast ? "text-black" : "text-berlin-grey-darker"}
						`, additionalTrackingContext: "(breadcrumbs)", children: label })] }, label));
        }) }));
}
