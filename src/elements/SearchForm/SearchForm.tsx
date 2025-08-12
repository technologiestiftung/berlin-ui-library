"use client";

import React, { useState, FormEvent } from "react";
import { SearchFormProps } from "./types";
import { cn } from "@/lib/utils";
import SearchIcon from "@/assets/icons/search.svg?react";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg?react";

/**
 * SearchForm component for Berlin UI Library
 *
 * A search form with an input field and submit button styled according to Berlin design.
 */
export function SearchForm({
	placeholder = "Suchbegriff",
	onSubmit,
	defaultValue = "",
	label = "Suchbegriff",
	submitLabel = "Suchen",
	className = "",
	value,
	onChange,
}: SearchFormProps) {
	const [searchTerm, setSearchTerm] = useState(defaultValue);

	// Determine if component is controlled or uncontrolled
	const isControlled = value !== undefined;
	const currentValue = isControlled ? value : searchTerm;

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (isControlled) {
			onChange?.(e.target.value);
		} else {
			setSearchTerm(e.target.value);
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit?.(currentValue || "");
	};

	return (
		<form onSubmit={handleSubmit} className={cn("text-left", className)}>
			<div className="searchform-slot">
				<div className="form-group">
					<label className="sr-only" htmlFor="searchInput">
						{label}
					</label>
					<div className="relative inline-flex w-full bg-white">
						<div className="relative flex w-full items-center border border-black">
							<SearchIcon
								className="absolute left-3 h-5 w-5 fill-text-lightest"
								aria-hidden="true"
							/>
							<input
								type="search"
								id="searchInput"
								className="h-[47px] w-full border-0 bg-transparent py-2 pr-14 pl-10 outline-none focus-visible:border-tabfocus focus-visible:ring-0 focus-visible:ring-offset-0"
								placeholder={placeholder}
								value={currentValue}
								onChange={handleInputChange}
							/>
						</div>
						<button
							className="absolute top-0 right-0 flex h-full w-[47px] cursor-pointer items-center justify-center text-red"
							type="submit"
							aria-label={submitLabel}
						>
							<ArrowRightIcon className="h-7 w-7" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>
		</form>
	);
}
