import { j as e } from "./index.es4.js";
import d, { useState as u, useRef as m } from "react";
import x from "./index.es25.js";
import f from "./index.es26.js";
import { useLanguage as p, t as b } from "./index.es5.js";
function g(n, t) {
  d.useEffect(() => {
    const s = (a) => {
      n.current && !n.current.contains(a.target) && t(!1);
    };
    return document.addEventListener("mousedown", s), () => {
      document.removeEventListener("mousedown", s);
    };
  }, [n, t]);
}
function N({ className: n = "" }) {
  const [t, s] = u(!1), a = m(null), { currentLanguage: r, languages: i, translations: o, setLanguage: c } = p();
  return g(
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
            className: "flex items-center",
            onClick: () => s(!t),
            "aria-label": b(t ? "collapse" : "expand", o),
            "aria-expanded": t,
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "flex size-6 items-center justify-center bg-berlin-pink text-[11px] font-bold", children: r.toLowerCase() }),
              /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none flex size-8 items-center justify-center", children: t ? /* @__PURE__ */ e.jsx(f, { className: "text-berlin-green" }) : /* @__PURE__ */ e.jsx(x, { className: "text-berlin-green" }) })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `${t ? "block" : "hidden"} absolute top-8 right-0 bg-white shadow-lg`,
            children: /* @__PURE__ */ e.jsx("ul", { children: i.map((l) => /* @__PURE__ */ e.jsx("li", { children: /* @__PURE__ */ e.jsxs(
              "button",
              {
                className: "block flex w-full gap-2 px-2 py-1 text-base hover:bg-gray-100",
                onClick: () => {
                  c(l.code), s(!1);
                },
                children: [
                  /* @__PURE__ */ e.jsx("span", { className: "flex size-6 items-center justify-center bg-berlin-pink text-[11px] font-bold", children: l.code.toLowerCase() }),
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
  N as LanguageSelect
};
//# sourceMappingURL=index.es24.js.map
