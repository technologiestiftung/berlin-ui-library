import { j as e } from "./index.es4.js";
import f from "./index.es27.js";
import { Accordion as h, AccordionItem as j, AccordionTrigger as g, AccordionContent as u } from "./index.es16.js";
import { LanguageProvider as m, useLanguage as p, t as w } from "./index.es5.js";
function v({
  footerColumns: t = [],
  berlinFooter: a,
  LinkComponent: c = ({ href: x, children: r, ...o }) => /* @__PURE__ */ e.jsx("a", { href: x, ...o, children: r }),
  className: d = "",
  showScrollToTop: n = !0
}) {
  const { translations: x } = p(), r = (l) => w(l, x), o = () => /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: "flex w-48 cursor-pointer gap-x-2 p-2",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      children: [
        r("toTheTop"),
        /* @__PURE__ */ e.jsx(f, { className: "size-6 bg-red p-1 text-white" })
      ]
    }
  );
  return /* @__PURE__ */ e.jsxs("footer", { className: `w-full bg-block-colored ${d}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex w-full items-start justify-between lg:p-6", children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-full flex-wrap justify-between lg:items-start lg:pl-[5%]", children: [
      n && /* @__PURE__ */ e.jsx("div", { className: "mb-4 flex w-full justify-end lg:hidden", children: /* @__PURE__ */ e.jsx(o, {}) }),
      /* @__PURE__ */ e.jsx("div", { className: "flex w-full flex-col lg:hidden lg:w-auto lg:flex-row lg:flex-wrap", children: /* @__PURE__ */ e.jsx(h, { collapsible: !0, type: "single", variant: "footer", children: t.map((l, s) => /* @__PURE__ */ e.jsxs(j, { value: l.title, children: [
        /* @__PURE__ */ e.jsx(g, { children: l.title }),
        /* @__PURE__ */ e.jsx(u, { children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("ul", { className: "flex flex-col gap-6", children: l.links.map((i) => /* @__PURE__ */ e.jsx("li", { children: /* @__PURE__ */ e.jsxs(
          c,
          {
            href: i.href,
            className: `flex gap-x-1.5 hover:underline ${l.title.includes("socialMedia") ? "flex-row" : "flex-row-reverse justify-end"}`,
            children: [
              r(i.label),
              i.icon && i.icon
            ]
          }
        ) }, i.href)) }) }) })
      ] }, s)) }) }),
      /* @__PURE__ */ e.jsx("div", { className: "flex w-full flex-col lg:w-auto lg:flex-row lg:flex-wrap", children: t.map((l) => /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "mb-6 ml-[3svw] hidden min-w-[12svw] flex-col gap-3.5 lg:flex",
          children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between font-bold", children: /* @__PURE__ */ e.jsx("span", { children: r(l.title) }) }),
            /* @__PURE__ */ e.jsx("ul", { className: "flex flex-col gap-2.5 bg-inherit", children: l.links.map((s) => /* @__PURE__ */ e.jsx("li", { children: /* @__PURE__ */ e.jsxs(
              c,
              {
                href: s.href,
                className: `flex gap-1.5 hover:underline ${l.title.includes("socialMedia") ? "flex-row" : "flex-row-reverse justify-end"}`,
                children: [
                  r(s.label),
                  s.icon && s.icon
                ]
              }
            ) }, s.href)) })
          ]
        },
        l.title
      )) }),
      n && /* @__PURE__ */ e.jsx("div", { className: "hidden self-start lg:block", children: /* @__PURE__ */ e.jsx(o, {}) })
    ] }) }),
    a && /* @__PURE__ */ e.jsx(
      "div",
      {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: { __html: a }
      }
    )
  ] });
}
function T({
  language: t = "de",
  languages: a = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" }
  ],
  translations: c,
  onLanguageChange: d = () => {
  },
  ...n
}) {
  return /* @__PURE__ */ e.jsx(
    m,
    {
      initialLanguage: t,
      languages: a,
      translations: c,
      onLanguageChange: d,
      children: /* @__PURE__ */ e.jsx(v, { ...n })
    }
  );
}
export {
  T as Footer
};
//# sourceMappingURL=index.es9.js.map
