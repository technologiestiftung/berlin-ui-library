import React, { RefObject, useRef, useState } from "react";
import ChevronDown from "@/assets/icons/chevron_down.svg?react";
import ChevronUp from "@/assets/icons/chevron_up.svg?react";
import { useLanguage, t } from "./LanguageProvider";

/**
 * Hook for closing dropdown when clicking outside
 */
function useCloseOnClickOutside(
	ref: React.RefObject<HTMLElement>,
	setIsOpen: (isOpen: boolean) => void,
) {
	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, setIsOpen]);
}

export interface LanguageSelectProps {
	className?: string;
}

export function LanguageSelect({ className = "" }: LanguageSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const languageSelectRef = useRef<HTMLDivElement>(null);
	const { currentLanguage, languages, translations, setLanguage } =
		useLanguage();

	useCloseOnClickOutside(
		languageSelectRef as RefObject<HTMLElement>,
		setIsOpen,
	);

	return (
		<div
			className={`relative z-[10] text-black ${className}`}
			ref={languageSelectRef}
		>
			<button
				className="flex h-full items-center gap-2"
				onClick={() => setIsOpen(!isOpen)}
				aria-label={t(isOpen ? "collapse" : "expand", translations)}
				aria-expanded={isOpen}
			>
				<span className="font-bolder flex size-5 items-center justify-center bg-black text-[11px] text-white">
					{currentLanguage.toLowerCase()}
				</span>
				<span className="pointer-events-none flex size-3 items-center justify-center text-red">
					{isOpen ? (
						<ChevronUp className="text-berlin-green" />
					) : (
						<ChevronDown className="text-berlin-green" />
					)}
				</span>
			</button>

			<div
				className={`${isOpen ? "block" : "hidden"} absolute top-8 right-0 bg-white shadow-lg`}
			>
				<ul>
					{languages.map((language) => (
						<li key={language.code}>
							<button
								className="block flex w-full gap-2 px-2 py-1 text-base hover:bg-gray-100"
								onClick={() => {
									setLanguage(language.code);
									setIsOpen(false);
								}}
							>
								<span className="flex size-6 items-center justify-center bg-black text-[11px] font-bold text-white">
									{language.code.toLowerCase()}
								</span>
								{language.label}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
