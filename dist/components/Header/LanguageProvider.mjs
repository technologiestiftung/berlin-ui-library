import { jsx as b } from "react/jsx-runtime";
import { createContext as d, useState as f, useContext as y } from "react";
const M = [
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" }
], m = {
  de: {
    accessibility: "Barrierefreiheit",
    menu: "Menü",
    search: "Suche",
    expand: "Erweitern",
    collapse: "Einklappen",
    closeMenu: "Menü schließen",
    accessibilityMenu: "Barrierefreiheit-Menü",
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
    search: "Search",
    expand: "Expand",
    collapse: "Collapse",
    closeMenu: "Close menu",
    accessibilityMenu: "Accessibility menu",
    "accessibilityMenu.title": "Accessibility",
    "button.name.close": "Close",
    "accessibilityMenu.barrierefreiheit.question": "Accessibility information:",
    "accessibilityMenu.barrierefreiheit": "Accessibility statement",
    "accessibilityMenu.contact.question": "Report an accessibility issue:",
    "accessibilityMenu.contact": "Contact",
    "accessibilityMenu.additionalInfo.question": "Additional information:",
    "accessibilityMenu.additionalInfo": "Competence center for accessibility"
  }
}, a = d(
  void 0
), p = () => {
  const e = y(a);
  if (!e)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return e;
}, x = ({
  children: e,
  initialLanguage: i = "de",
  languages: c = M,
  translations: t = m,
  onLanguageChange: n
}) => {
  const [s, o] = f(i), l = () => t[s] || t.de || {}, u = (r) => {
    o(r), n && n(r);
  };
  return /* @__PURE__ */ b(
    a.Provider,
    {
      value: {
        currentLanguage: s,
        languages: c,
        translations: l(),
        setLanguage: u
      },
      children: e
    }
  );
}, C = (e, i) => i[e] || e;
export {
  x as LanguageProvider,
  C as t,
  p as useLanguage
};
//# sourceMappingURL=LanguageProvider.mjs.map
