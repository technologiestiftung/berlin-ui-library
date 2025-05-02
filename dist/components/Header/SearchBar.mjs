import { jsx as r, jsxs as m } from "react/jsx-runtime";
import { useState as n } from "react";
import { Input as o } from "../Input/Input.mjs";
import { useLanguage as u, t as l } from "./LanguageProvider.mjs";
function S({ onSearch: s, className: c = "" }) {
  const [e, i] = n(""), { translations: t } = u();
  return /* @__PURE__ */ r("form", { onSubmit: (a) => {
    a.preventDefault(), s && e.trim() && s(e);
  }, className: `w-full ${c}`, children: /* @__PURE__ */ m("div", { className: "relative", children: [
    /* @__PURE__ */ r(
      o,
      {
        type: "search",
        placeholder: l("search.placeholder", t) || "Suche...",
        value: e,
        onChange: (a) => i(a.target.value),
        className: "w-full",
        "aria-label": l("search.ariaLabel", t) || "Search"
      }
    ),
    /* @__PURE__ */ r(
      "button",
      {
        type: "submit",
        className: "absolute top-1/2 right-4 -translate-y-1/2 bg-black px-4 py-1 text-sm text-white",
        disabled: !e.trim(),
        children: l("search.button", t) || "Suchen"
      }
    )
  ] }) });
}
export {
  S as SearchBar
};
//# sourceMappingURL=SearchBar.mjs.map
