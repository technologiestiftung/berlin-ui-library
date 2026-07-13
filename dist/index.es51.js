import { j as e } from "./index.es4.js";
import d, { useState as u, useRef as x } from "react";
import m from "./index.es52.js";
import f from "./index.es53.js";
import { useLanguage as p, t as g } from "./index.es5.js";
function h(n, t) {
  d.useEffect(() => {
    const s = (a) => {
      n.current && !n.current.contains(a.target) && t(!1);
    };
    return document.addEventListener("mousedown", s), () => {
      document.removeEventListener("mousedown", s);
    };
  }, [n, t]);
}
function C({ className: n = "" }) {
  const [t, s] = u(!1), a = x(null), { currentLanguage: r, languages: o, translations: c, setLanguage: i } = p();
  return h(
    a,
    s
  ), /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `relative z-[10] text-black ${n}`,
      ref: a,
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            className: "flex h-full items-center gap-2",
            onClick: () => s(!t),
            "aria-label": g(t ? "collapse" : "expand", c),
            "aria-expanded": t,
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "font-bolder flex size-5 items-center justify-center bg-black text-[11px] text-white", children: r.toLowerCase() }),
              /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none flex size-3 items-center justify-center text-red", children: t ? /* @__PURE__ */ e.jsx(f, { className: "text-berlin-green" }) : /* @__PURE__ */ e.jsx(m, { className: "text-berlin-green" }) })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `${t ? "block" : "hidden"} absolute top-8 right-0 bg-white shadow-lg`,
            children: /* @__PURE__ */ e.jsx("ul", { children: o.map((l) => /* @__PURE__ */ e.jsx("li", { children: /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "block flex w-full gap-2 px-2 py-1 text-base hover:bg-gray-100",
                onClick: () => {
                  i(l.code), s(!1);
                },
                children: [
                  /* @__PURE__ */ e.jsx("span", { className: "flex size-6 items-center justify-center bg-black text-[11px] font-bold text-white", children: l.code.toLowerCase() }),
                  l.label
                ]
              }
            ) }, l.code)) })
          }
        )
      ]
    }
  );
}
export {
  C as LanguageSelect
};
//# sourceMappingURL=index.es51.js.map
