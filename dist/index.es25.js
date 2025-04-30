import t, { useState as o } from "react";
import { Input as u } from "./index.es30.js";
import { useLanguage as i, t as l } from "./index.es10.js";
function f({ onSearch: s, className: c = "" }) {
  const [e, m] = o(""), { translations: a } = i(), n = (r) => {
    r.preventDefault(), s && e.trim() && s(e);
  };
  return /* @__PURE__ */ t.createElement("form", { onSubmit: n, className: `w-full ${c}` }, /* @__PURE__ */ t.createElement("div", { className: "relative" }, /* @__PURE__ */ t.createElement(
    u,
    {
      type: "search",
      placeholder: l("search.placeholder", a) || "Suche...",
      value: e,
      onChange: (r) => m(r.target.value),
      className: "w-full",
      "aria-label": l("search.ariaLabel", a) || "Search"
    }
  ), /* @__PURE__ */ t.createElement(
    "button",
    {
      type: "submit",
      className: "absolute top-1/2 right-4 -translate-y-1/2 bg-black px-4 py-1 text-sm text-white",
      disabled: !e.trim()
    },
    l("search.button", a) || "Suchen"
  )));
}
export {
  f as SearchBar
};
//# sourceMappingURL=index.es25.js.map
