import * as React from "react";
export interface DownloadItemProps extends React.HTMLAttributes<HTMLDivElement> {
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
    downloadUrl?: string;
    /**
     * Function to call when the download button is clicked
     */
    onClickDownloadItem?: () => void;
    /**
     * Text to display on the download button
     */
    buttonText?: string;
}
export declare const DownloadItem: React.ForwardRefExoticComponent<DownloadItemProps & React.RefAttributes<HTMLDivElement>>;
export interface DownloadGroupProps extends React.HTMLAttributes<HTMLDivElement> {
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
export declare const DownloadGroup: React.ForwardRefExoticComponent<DownloadGroupProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Download.d.ts.map