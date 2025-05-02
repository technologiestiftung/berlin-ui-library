import React, { useState } from "react";
import { Input } from "../Input/Input";
import { useLanguage, t } from "./LanguageProvider";

export interface SearchBarProps {
	/**
	 * Function called when search is submitted
	 */
	onSearch?: (searchTerm: string) => void;
	/**
	 * Additional CSS classes
	 */
	className?: string;
}

export function SearchBar({ onSearch, className = "" }: SearchBarProps) {
	const [searchTerm, setSearchTerm] = useState("");
	const { translations } = useLanguage();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (onSearch && searchTerm.trim()) {
			onSearch(searchTerm);
		}
	};

	return (
		<form onSubmit={handleSubmit} className={`w-full ${className}`}>
			<div className="relative">
				<Input
					type="search"
					placeholder={t("search.placeholder", translations) || "Suche..."}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full"
					aria-label={t("search.ariaLabel", translations) || "Search"}
				/>
				<button
					type="submit"
					className="absolute top-1/2 right-4 -translate-y-1/2 bg-black px-4 py-1 text-sm text-white"
					disabled={!searchTerm.trim()}
				>
					{t("search.button", translations) || "Suchen"}
				</button>
			</div>
		</form>
	);
}
