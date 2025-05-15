import { j as e } from "./index.es4.js";
import { useState as b } from "react";
import { cn as x } from "./index.es21.js";
import g from "./index.es27.js";
import v from "./index.es25.js";
function I({
  placeholder: a = "Suchbegriff",
  onSubmit: i,
  defaultValue: o = "",
  label: n = "Suchbegriff",
  submitLabel: c = "Suchen",
  className: u = "",
  value: t,
  onChange: h
}) {
  const [m, f] = b(o), s = t !== void 0, l = s ? t : m, d = (r) => {
    s ? h?.(r.target.value) : f(r.target.value);
  }, p = (r) => {
    r.preventDefault(), i?.(l || "");
  };
  return /* @__PURE__ */ e.jsx("form", { onSubmit: p, className: x("text-left", u), children: /* @__PURE__ */ e.jsx("div", { className: "searchform-slot", children: /* @__PURE__ */ e.jsxs("div", { className: "form-group", children: [
    /* @__PURE__ */ e.jsx("label", { className: "sr-only", htmlFor: "searchInput", children: n }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative inline-flex w-full bg-white", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative flex w-full items-center border border-black", children: [
        /* @__PURE__ */ e.jsx(
          g,
          {
            className: "absolute left-3 h-5 w-5 fill-text-lightest",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "search",
            id: "searchInput",
            className: "h-[47px] w-full border-0 bg-transparent py-2 pr-14 pl-10 outline-none focus-visible:border-tabfocus focus-visible:ring-0 focus-visible:ring-offset-0",
            placeholder: a,
            value: l,
            onChange: d
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "absolute top-0 right-0 flex h-full w-[47px] cursor-pointer items-center justify-center text-red",
          type: "submit",
          "aria-label": c,
          children: /* @__PURE__ */ e.jsx(v, { className: "h-7 w-7", "aria-hidden": "true" })
        }
      )
    ] })
  ] }) }) });
}
export {
  I as SearchForm
};
//# sourceMappingURL=index.es7.js.map
