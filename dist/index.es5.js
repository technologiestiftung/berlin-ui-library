import { j as h } from "./index.es4.js";
import { createContext as b, useState as d, useContext as f } from "react";
const m = [
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" }
], g = {
  de: {
    accessibility: "Barrierefrei",
    menu: "Menü",
    "menu.navigation": "Hauptnavigation",
    search: "Suche",
    expand: "Erweitern",
    collapse: "Einklappen",
    closeMenu: "Menü schließen",
    accessibilityMenu: "Barrierefreiheit-Menü",
    "search.title": "Suche",
    "search.placeholder": "Suchbegriff",
    "search.ariaLabel": "Suche",
    "search.button": "Suchen",
    "search.submit": "Suchen",
    "search.results": "Suchergebnisse",
    "search.noResults": "Keine Ergebnisse gefunden",
    "accessibilityMenu.title": "Barrierefreiheit",
    "button.name.close": "Schließen",
    "accessibilityMenu.barrierefreiheit.question": "Informationen zur Barrierefreiheit:",
    "accessibilityMenu.barrierefreiheit": "Barrierefreiheitserklärung",
    "accessibilityMenu.contact.question": "Problem mit der Barrierefreiheit melden:",
    "accessibilityMenu.contact": "Kontakt",
    "accessibilityMenu.additionalInfo.question": "Weitere Informationen:",
    "accessibilityMenu.additionalInfo": "Kompetenzstelle für Barrierefreiheit"
  },
  en: {
    accessibility: "Accessibility",
    menu: "Menu",
    "menu.navigation": "Main navigation",
    search: "Search",
    expand: "Expand",
    collapse: "Collapse",
    closeMenu: "Close menu",
    accessibilityMenu: "Accessibility menu",
    "search.title": "Search",
    "search.placeholder": "Search term",
    "search.ariaLabel": "Search",
    "search.button": "Search",
    "search.submit": "Search",
    "search.results": "Search results",
    "search.noResults": "No results found",
    "accessibilityMenu.title": "Accessibility",
    "button.name.close": "Close",
    "accessibilityMenu.barrierefreiheit.question": "Accessibility information:",
    "accessibilityMenu.barrierefreiheit": "Accessibility statement",
    "accessibilityMenu.contact.question": "Report an accessibility issue:",
    "accessibilityMenu.contact": "Contact",
    "accessibilityMenu.additionalInfo.question": "Additional information:",
    "accessibilityMenu.additionalInfo": "Competence center for accessibility"
  }
}, r = b(
  void 0
), p = () => {
  const e = f(r);
  if (!e)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return e;
}, S = ({
  children: e,
  initialLanguage: i = "de",
  languages: c = m,
  translations: t = g,
  onLanguageChange: n
}) => {
  const [s, o] = d(i), u = () => t[s] || t.de || {}, l = (a) => {
    o(a), n && n(a);
  };
  return /* @__PURE__ */ h.jsx(
    r.Provider,
    {
      value: {
        currentLanguage: s,
        languages: c,
        translations: u(),
        setLanguage: l
      },
      children: e
    }
  );
}, x = (e, i) => i[e] || e;
export {
  S as LanguageProvider,
  x as t,
  p as useLanguage
};
//# sourceMappingURL=index.es5.js.map
