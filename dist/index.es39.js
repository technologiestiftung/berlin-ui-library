import { j as t } from "./index.es4.js";
import { useState as m } from "react";
import { Input as n } from "./index.es6.js";
import { useLanguage as u, t as s } from "./index.es5.js";
function x({ onSearch: l, className: c = "" }) {
  const [e, i] = m(""), { translations: a } = u(), o = (r) => {
    r.preventDefault(), l && e.trim() && l(e);
  };
  return /* @__PURE__ */ t.jsx("form", { onSubmit: o, className: `w-full ${c}`, children: /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ t.jsx(
      n,
      {
        type: "search",
        placeholder: s("search.placeholder", a) || "Suche...",
        value: e,
        onChange: (r) => i(r.target.value),
        className: "w-full",
        "aria-label": s("search.ariaLabel", a) || "Search"
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "submit",
        className: "absolute top-1/2 right-4 -translate-y-1/2 bg-black px-4 py-1 text-sm text-white",
        disabled: !e.trim(),
        children: s("search.button", a) || "Suchen"
      }
    )
  ] }) });
}
export {
  x as SearchBar
};
//# sourceMappingURL=index.es39.js.map
