import { jsx as e, jsxs as i } from "react/jsx-runtime";
import h from "../../assets/icons/arrow_up_icon.svg.mjs";
import { Accordion as x, AccordionItem as u, AccordionTrigger as p, AccordionContent as w } from "../Accordion/Accordion.mjs";
import { LanguageProvider as g, useLanguage as v, t as b } from "../Header/LanguageProvider.mjs";
function N({
  footerColumns: s = [],
  berlinFooter: c,
  LinkComponent: n = ({ href: m, children: d, ...o }) => /* @__PURE__ */ e("a", { href: m, ...o, children: d }),
  className: f = "",
  showScrollToTop: t = !0
}) {
  const { translations: m } = v(), d = (l) => b(l, m), o = () => /* @__PURE__ */ i(
    "button",
    {
      className: "flex w-48 gap-x-2 p-2",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      children: [
        d("toTheTop"),
        " ",
        /* @__PURE__ */ e(h, { className: "bg-berlin-green" })
      ]
    }
  );
  return /* @__PURE__ */ i("footer", { className: `bg-block-colored w-full ${f}`, children: [
    /* @__PURE__ */ e("div", { className: "flex w-full items-start justify-between md:p-6", children: /* @__PURE__ */ i("div", { className: "flex w-full flex-wrap justify-between md:items-start md:pl-[5%]", children: [
      t && /* @__PURE__ */ e("div", { className: "mb-4 flex w-full justify-end md:hidden", children: /* @__PURE__ */ e(o, {}) }),
      /* @__PURE__ */ e("div", { className: "flex w-full flex-col md:hidden md:w-auto md:flex-row md:flex-wrap", children: /* @__PURE__ */ e(x, { collapsible: !0, type: "single", children: s.map((l, r) => /* @__PURE__ */ i(u, { value: l.title, children: [
        /* @__PURE__ */ e(p, { children: l.title }),
        /* @__PURE__ */ e(w, { children: /* @__PURE__ */ e("div", { className: "flex flex-col", children: /* @__PURE__ */ e("ul", { className: "flex flex-col", children: l.links.map((a) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ i(
          n,
          {
            href: a.href,
            className: `flex gap-x-1.5 py-4 pl-7 hover:underline ${l.title.includes("socialMedia") ? "flex-row" : "flex-row-reverse justify-end"}`,
            children: [
              d(a.label),
              a.icon && a.icon
            ]
          }
        ) }, a.href)) }) }) })
      ] }, r)) }) }),
      /* @__PURE__ */ e("div", { className: "flex w-full flex-col md:w-auto md:flex-row md:flex-wrap", children: s.map((l) => /* @__PURE__ */ i("div", { className: "mb-6 ml-[3svw] hidden min-w-[12svw] flex-col gap-3.5 md:flex", children: [
        /* @__PURE__ */ e("div", { className: "flex items-center justify-between font-bold", children: /* @__PURE__ */ e("span", { children: d(l.title) }) }),
        /* @__PURE__ */ e("ul", { className: "flex flex-col gap-2.5 bg-inherit", children: l.links.map((r) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ i(
          n,
          {
            href: r.href,
            className: `flex gap-1.5 hover:underline ${l.title.includes("socialMedia") ? "flex-row" : "flex-row-reverse justify-end"}`,
            children: [
              d(r.label),
              r.icon && r.icon
            ]
          }
        ) }, r.href)) })
      ] })) }),
      t && /* @__PURE__ */ e("div", { className: "hidden self-start md:block", children: /* @__PURE__ */ e(o, {}) })
    ] }) }),
    c && /* @__PURE__ */ e(
      "div",
      {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: { __html: c }
      }
    )
  ] });
}
function I({
  language: s = "de",
  languages: c = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" }
  ],
  translations: n,
  onLanguageChange: f = () => {
  },
  ...t
}) {
  return /* @__PURE__ */ e(
    g,
    {
      initialLanguage: s,
      languages: c,
      translations: n,
      onLanguageChange: f,
      children: /* @__PURE__ */ e(N, { ...t })
    }
  );
}
export {
  I as Footer
};
//# sourceMappingURL=Footer.mjs.map
