// allow plain svg imports
declare module "*.svg" {
	const src: string;
	export default src;
}

// allow vite‑svgr react imports with ?react
declare module "*.svg?react" {
	import * as React from "react";
	const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	export default ReactComponent;
}

// allow url imports if needed
declare module "*.svg?url" {
	const src: string;
	export default src;
}

// Fix for React JSX transform without needing explicit React imports
declare namespace React {}
