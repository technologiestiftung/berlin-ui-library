import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";
import { peerDependencies, dependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
	plugins: [
		react({ jsxRuntime: "automatic" }),
		tailwindcss(),
		dts({
			include: ["src/**/*"],
		}),
		svgr({
			svgrOptions: {
				// svgr options
			},
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src", "index.ts"),
			formats: ["es", "cjs"],
			fileName: (ext) => `index.${ext}.js`,
		},
		rollupOptions: {
			external: [
				...Object.keys(peerDependencies),
				...Object.keys(dependencies),
			],
			output: {
				preserveModules: true,
				exports: "named",
				dir: "dist",
				preserveModulesRoot: "src",
				assetFileNames: (assetInfo) => {
					// Place fonts in a dedicated directory
					if (
						assetInfo?.name?.endsWith(".woff") ||
						assetInfo?.name?.endsWith(".woff2") ||
						assetInfo?.name?.endsWith(".eot")
					) {
						return "fonts/[name][extname]";
					}
					// Place other assets in an assets directory
					return "assets/[name][extname]";
				},
			},
		},
		target: "esnext",
		sourcemap: true,
		cssCodeSplit: true, // Enable CSS code splitting for tree shaking
	},
});
