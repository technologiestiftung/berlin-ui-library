#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, '../src/assets/icons');
const iconFile = path.join(__dirname, '../src/elements/Icon/Icon.tsx');
const storyFile = path.join(__dirname, '../src/elements/Icon/Icon.stories.tsx');

console.log('🔄 Generating icon library...');

// Read all SVG files
const svgFiles = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'));
const iconNames = svgFiles.map(file => file.replace('.svg', '')).sort();

console.log(`📦 Found ${iconNames.length} icons:`, iconNames.slice(0, 5).join(', '), iconNames.length > 5 ? '...' : '');

// Generate Icon component
const imports = [];
const registryEntries = [];

iconNames.forEach(iconName => {
  const pascalCaseName = iconName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Icon';
  
  imports.push(`import ${pascalCaseName} from "@/assets/icons/${iconName}.svg?react";`);
  registryEntries.push(`\t"${iconName}": ${pascalCaseName},`);
});

const iconComponent = `import { cn } from "@/lib/utils";
import { ComponentType, SVGProps } from "react";

// Auto-generated imports - do not edit manually
// Run 'npm run generate:icons' to regenerate this file
${imports.join('\n')}

// Icon registry - auto-generated from SVG files
const icons = {
${registryEntries.join('\n')}
} as const;

export type IconName = keyof typeof icons;

export interface IconProps {
\t/**
\t * The icon name
\t */
\tname: IconName;
\t/**
\t * Additional CSS classes for styling the icon (use size-* for dimensions, text-* for colors)
\t */
\tclassName?: string;
\t/**
\t * Accessible label for screen readers
\t */
\t"aria-label"?: string;
\t/**
\t * Whether to hide the icon from screen readers (default: true)
\t */
\t"aria-hidden"?: boolean;
}

export function Icon({
\tname,
\tclassName,
\t"aria-label": ariaLabel,
\t"aria-hidden": ariaHidden = true,
}: IconProps) {
\tconst IconComponent = icons[name] as ComponentType<SVGProps<SVGSVGElement>>;
\t
\tif (!IconComponent) {
\t\tconsole.warn(\`Icon "\${name}" not found\`);
\t\treturn null;
\t}

\treturn (
\t\t<IconComponent
\t\t\tclassName={cn("inline-block", className)}
\t\t\taria-label={ariaLabel}
\t\t\taria-hidden={ariaHidden}
\t\t/>
\t);
}
`;

fs.writeFileSync(iconFile, iconComponent);
console.log(`✅ Generated Icon.tsx with ${iconNames.length} icons`);

// Generate updated story
const selectOptions = iconNames.map(name => `\t\t\t\t"${name}",`).join('\n');
const galleryIcons = iconNames.map(name => `\t\t\t\t"${name}",`).join('\n');

const storyContent = `import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
\ttitle: "Elements/Icon",
\tcomponent: Icon,
\tparameters: {
\t\tlayout: "centered",
\t},
\ttags: ["autodocs"],
\targTypes: {
\t\tname: {
\t\t\tcontrol: "select",
\t\t\t// Auto-generated options - run 'npm run generate:icons' to update
\t\t\toptions: [
${selectOptions}
\t\t\t],
\t\t},
\t\tclassName: {
\t\t\tcontrol: "text",
\t\t},
\t},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
\targs: {
\t\tname: "search",
\t},
};

export const WithCustomSize: Story = {
\targs: {
\t\tname: "star",
\t\tclassName: "w-8 h-8 text-yellow-500",
\t},
};

export const IconGallery: Story = {
\trender: () => (
\t\t<div className="grid max-w-6xl grid-cols-8 gap-4 p-4">
\t\t\t{/* Auto-generated icon list - run 'npm run generate:icons' to update */}
\t\t\t{[
${galleryIcons}
\t\t\t].map((iconName) => (
\t\t\t\t<div key={iconName} className="flex flex-col items-center gap-2 p-2">
\t\t\t\t\t<Icon name={iconName as any} className="size-6 text-gray-700" />
\t\t\t\t\t<span className="text-center text-xs break-words text-gray-600">
\t\t\t\t\t\t{iconName}
\t\t\t\t\t</span>
\t\t\t\t</div>
\t\t\t))}
\t\t</div>
\t),
};
`;

fs.writeFileSync(storyFile, storyContent);
console.log(`✅ Updated Icon.stories.tsx with ${iconNames.length} icons`);

console.log('🎉 Icon library generation complete!');
console.log('💡 Tip: Add this script to your package.json and run "npm run generate:icons" after adding new SVG files');