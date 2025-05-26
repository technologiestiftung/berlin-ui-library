import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DownloadItem, DownloadGroup } from "./index";
const meta = {
    title: "Modules/Download",
    component: DownloadItem,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
};
export default meta;
export const Default = {
    args: {
        title: "Download title 1",
        description: "Philosophy is considered a science",
        fileType: "JPG-Dokument (169,5 kB)",
        date: "03/1974",
        downloadUrl: "#",
        buttonText: "Download",
    },
};
export const WithoutDescription = {
    args: {
        title: "Download title 1",
        fileType: "JPG-Dokument (169,5 kB)",
        date: "03/1974",
        downloadUrl: "#",
    },
};
export const WithoutDateAndType = {
    args: {
        title: "Download title 1",
        description: "Philosophy is considered a science",
        downloadUrl: "#",
    },
};
export const DownloadGroupStory = {
    render: () => (_jsxs(DownloadGroup, { title: "Downloads", children: [_jsx(DownloadItem, { title: "Download title 1", description: "Philosophy is considered a science", fileType: "JPG-Dokument (169,5 kB)", date: "03/1974", downloadUrl: "#" }), _jsx(DownloadItem, { title: "Download title 2", description: "Philosophy is considered a science but it is difficult to say, when one has to compare with an ordinary science, for example biology, or chemistry.", fileType: "PDF-Dokument (39,6 kB)", date: "03/1974", downloadUrl: "#" }), _jsx(DownloadItem, { title: "Download title 3", description: "Das ist eine zus\u00E4tzliche Beschreibung", fileType: "TXT-Dokument (12,3 kB)", date: "03/1974", downloadUrl: "#" })] })),
};
export const DownloadGroupAsDivStory = {
    render: () => (_jsxs(DownloadGroup, { title: "Downloads", asList: false, children: [_jsx(DownloadItem, { title: "Download title 1", description: "Philosophy is considered a science", fileType: "JPG-Dokument (169,5 kB)", date: "03/1974", downloadUrl: "#" }), _jsx(DownloadItem, { title: "Download title 2", description: "Philosophy is considered a science but it is difficult to say, when one has to compare with an ordinary science, for example biology, or chemistry.", fileType: "PDF-Dokument (39,6 kB)", date: "03/1974", downloadUrl: "#" }), _jsx(DownloadItem, { title: "Download title 3", description: "Das ist eine zus\u00E4tzliche Beschreibung", fileType: "TXT-Dokument (12,3 kB)", date: "03/1974", downloadUrl: "#" })] })),
};
