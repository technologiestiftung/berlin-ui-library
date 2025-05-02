/**
 * Header Components
 *
 * This module exports both server and client versions of the Header component.
 *
 * For React Server Components (RSC) applications:
 * - Use `Header` (default) for server-side rendering with client hydration where needed
 * - The server Header will automatically use client components for interactive parts
 *
 * For traditional React applications or when you need full client-side reactivity:
 * - Use `HeaderClient` when you need the entire header to be a client component
 */

// Server Components (default) - use these in RSC applications
export { Header } from "./Header";
export type { HeaderProps } from "./Header";

// Client Components - use these when you need client-side behavior throughout
export { HeaderClient } from "./Header.client";
export type { HeaderClientProps } from "./Header.client";

// Types
export * from "./types";

export { LanguageSelect } from "./LanguageSelect";
export type { LanguageSelectProps } from "./LanguageSelect";

export { MenuButton } from "./MenuButton";
export type { MenuButtonProps } from "./MenuButton";

export { SearchButton } from "./SearchButton";
export type { SearchButtonProps } from "./SearchButton";

export { LogoBar } from "./LogoBar";
export { MainHeaderContent } from "./MainHeaderContent";
export { SubHeaderBar } from "./SubHeaderBar";

// Export language provider for easier access
export { LanguageProvider, useLanguage, t } from "./LanguageProvider";
export type {
	Language,
	Translations,
	LanguageProviderProps,
} from "./LanguageProvider";
