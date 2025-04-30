import e, { useState as m, useRef as u } from "react";
import f from "./index.es20.js";
import d from "./index.es21.js";
import { useLanguage as p, t as b } from "./index.es4.js";
function g(a, t) {
  e.useEffect(() => {
    const n = (l) => {
      a.current && !a.current.contains(l.target) && t(!1);
    };
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, [a, t]);
}
function C({ className: a = "" }) {
  const [t, n] = m(!1), l = u(null), { currentLanguage: r, languages: c, translations: o, setLanguage: i } = p();
  return g(
    l,
    n
  ), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: `relative z-[10] text-black ${a}`,
      ref: l
    },
    /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "flex items-center",
        onClick: () => n(!t),
        "aria-label": b(t ? "collapse" : "expand", o),
        "aria-expanded": t
      },
      /* @__PURE__ */ e.createElement("span", { className: "flex size-6 items-center justify-center bg-berlin-pink text-[11px] font-bold" }, r.toLowerCase()),
      /* @__PURE__ */ e.createElement("span", { className: "pointer-events-none flex size-8 items-center justify-center" }, t ? /* @__PURE__ */ e.createElement(d, { className: "text-berlin-green" }) : /* @__PURE__ */ e.createElement(f, { className: "text-berlin-green" }))
    ),
    /* @__PURE__ */ e.createElement(
      "div",
      {
        className: `${t ? "block" : "hidden"} absolute top-8 right-0 bg-white shadow-lg`
      },
      /* @__PURE__ */ e.createElement("ul", null, c.map((s) => /* @__PURE__ */ e.createElement("li", { key: s.code }, /* @__PURE__ */ e.createElement(
        "button",
        {
          className: "block flex w-full gap-2 px-2 py-1 text-base hover:bg-gray-100",
          onClick: () => {
            i(s.code), n(!1);
          }
        },
        /* @__PURE__ */ e.createElement("span", { className: "flex size-6 items-center justify-center bg-berlin-pink text-[11px] font-bold" }, s.code.toLowerCase()),
        s.label
      ))))
    )
  );
}
export {
  C as LanguageSelect
};
//# sourceMappingURL=index.es19.js.map
