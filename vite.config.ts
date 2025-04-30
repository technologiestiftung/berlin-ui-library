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
		react({ jsxRuntime: "classic" }),
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
			},
		},

		target: "esnext",
		sourcemap: true,
		cssCodeSplit: false,
	},
});
