import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../../elements/Button";

export interface DownloadItemProps
	extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Title of the download item
	 */
	title: string;
	/**
	 * Description or additional information about the file
	 */
	description?: string;
	/**
	 * Type of file (e.g., "PDF-Dokument (39,6 kB)", "JPG-Dokument (169,5 kB)")
	 */
	fileType?: string;
	/**
	 * Creation or modification date of the file
	 */
	date?: string;
	/**
	 * URL or path for downloading the file
	 */
	downloadUrl: string;
	/**
	 * Function to call when the download button is clicked
	 */
	onClickDownloadItem?: () => void;
	/**
	 * Text to display on the download button
	 */
	buttonText?: string;
}

export const DownloadItem = React.forwardRef<HTMLDivElement, DownloadItemProps>(
	(
		{
			className,
			title,
			description,
			fileType,
			date,
			downloadUrl,
			buttonText = "Download",
			onClickDownloadItem,
			...props
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={cn(
					"flex flex-col border-b border-grey-dark py-5 md:flex-row md:items-center md:justify-between",
					className,
				)}
				{...props}
			>
				<div className="md:flex-grow md:border-r md:border-grey-dark md:pr-[18px]">
					<h3 className="mb-[0.4em] text-[17px] leading-[1.353em] font-bold text-black">
						{title}
					</h3>
					{description && (
						<p className="mr-2 mb-2 break-words">{description}</p>
					)}
					{(fileType || date) && (
						<div className="mb-0 text-[14px] text-text-lightest md:mb-0">
							{fileType && <span>{fileType}</span>}
							{fileType && date && <span> – </span>}
							{date && <span>Stand: {date}</span>}
						</div>
					)}
				</div>
				<div className="mt-4 md:mt-0 md:flex-shrink-0 md:pl-[18px]">
					{downloadUrl ? (
						<a href={downloadUrl} className="inline-block">
							<Button
								variant="download"
								className="min-h-[43px] w-auto text-base"
							>
								{buttonText}
							</Button>
						</a>
					) : (
						<Button
							variant="download"
							className="min-h-[43px] w-auto text-base"
							onClick={(e) => {
								e.preventDefault();
								if (onClickDownloadItem) {
									onClickDownloadItem();
								}
							}}
						>
							{buttonText}
						</Button>
					)}
				</div>
			</div>
		);
	},
);

DownloadItem.displayName = "DownloadItem";

export interface DownloadGroupProps
	extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Title for the group of downloads
	 */
	title?: string;
	/**
	 * Whether to render as a list
	 */
	asList?: boolean;
	/**
	 * Download items to include
	 */
	children: React.ReactNode;
}

export const DownloadGroup = React.forwardRef<
	HTMLDivElement,
	DownloadGroupProps
>(({ className, title, asList = true, children, ...props }, ref) => {
	const wrappedChildren = React.Children.map(children, (child) => {
		if (!React.isValidElement(child)) {
			return child;
		}

		if (asList) {
			return (
				<li className="m-0 before:hidden before:content-none after:hidden after:content-none">
					{child}
				</li>
			);
		}

		return child;
	});

	return (
		<div ref={ref} className={cn("modul-download-multi", className)} {...props}>
			{title && <h2 className="mb-0 text-xl font-bold">{title}</h2>}
			{asList ? (
				<ul className="list-none p-0">{wrappedChildren}</ul>
			) : (
				<div className="border-grey-dark">{wrappedChildren}</div>
			)}
		</div>
	);
});

DownloadGroup.displayName = "DownloadGroup";
