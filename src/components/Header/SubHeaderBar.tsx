// src/components/Header/SubHeaderBar.tsx
import { LanguageSelect } from "./LanguageSelect";
import { BreadcrumbItem, LinkComponentProps } from "./types";
import { Breadcrumbs } from "../Breadcrumb/Breadcrumb";

interface SubHeaderBarProps extends LinkComponentProps {
	showBreadcrumbs: boolean;
	breadcrumbs: BreadcrumbItem[];
	showLanguageSelect: boolean;
}

export function SubHeaderBar({
	showBreadcrumbs,
	breadcrumbs,
	showLanguageSelect,
	LinkComponent,
}: SubHeaderBarProps) {
	// Render only if at least one section is shown
	if (!showBreadcrumbs && !showLanguageSelect) {
		return null;
	}

	return (
		<div className="bg-block-colored px-4 shadow-inner lg:px-0">
			<div className="mx-auto flex max-w-[61.25rem] justify-between">
				{showBreadcrumbs && (
					<Breadcrumbs items={breadcrumbs} LinkComponent={LinkComponent} />
				)}
				{showLanguageSelect && <LanguageSelect />}
			</div>
		</div>
	);
}
