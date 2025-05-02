import { jsxs as r, jsx as t } from "react/jsx-runtime";
import u, { useState as m, useRef as f } from "react";
import p from "../../assets/icons/chevron_down.svg.mjs";
import b from "../../assets/icons/chevron_up.svg.mjs";
import { useLanguage as g, t as x } from "./LanguageProvider.mjs";
function h(s, e) {
  u.useEffect(() => {
    const n = (l) => {
      s.current && !s.current.contains(l.target) && e(!1);
    };
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, [s, e]);
}
function L({ className: s = "" }) {
  const [e, n] = m(!1), l = f(null), { currentLanguage: i, languages: o, translations: c, setLanguage: d } = g();
  return h(
    l,
    n
  ), /* @__PURE__ */ r(
    "div",
    {
      className: `relative z-[10] text-black ${s}`,
      ref: l,
      children: [
        /* @__PURE__ */ r(
          "button",
          {
            className: "flex items-center",
            onClick: () => n(!e),
            "aria-label": x(e ? "collapse" : "expand", c),
            "aria-expanded": e,
            children: [
              /* @__PURE__ */ t("span", { className: "bg-berlin-pink flex size-6 items-center justify-center text-[11px] font-bold", children: i.toLowerCase() }),
              /* @__PURE__ */ t("span", { className: "pointer-events-none flex size-8 items-center justify-center", children: e ? /* @__PURE__ */ t(b, { className: "text-berlin-green" }) : /* @__PURE__ */ t(p, { className: "text-berlin-green" }) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: `${e ? "block" : "hidden"} absolute top-8 right-0 bg-white shadow-lg`,
            children: /* @__PURE__ */ t("ul", { children: o.map((a) => /* @__PURE__ */ t("li", { children: /* @__PURE__ */ r(
              "button",
              {
                className: "block flex w-full gap-2 px-2 py-1 text-base hover:bg-gray-100",
                onClick: () => {
                  d(a.code), n(!1);
                },
                children: [
                  /* @__PURE__ */ t("span", { className: "bg-berlin-pink flex size-6 items-center justify-center text-[11px] font-bold", children: a.code.toLowerCase() }),
                  a.label
                ]
              }
            ) }, a.code)) })
          }
        )
      ]
    }
  );
}
export {
  L as LanguageSelect
};
//# sourceMappingURL=LanguageSelect.mjs.map
