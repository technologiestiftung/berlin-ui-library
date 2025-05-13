import { j as e } from "./index.es4.js";
import f from "./index.es28.js";
import { Accordion as m, AccordionItem as h, AccordionTrigger as j, AccordionContent as u } from "./index.es16.js";
import { LanguageProvider as p, useLanguage as w, t as g } from "./index.es5.js";
function v({
  footerColumns: a = [],
  berlinFooter: d,
  LinkComponent: t = ({ href: x, children: r, ...n }) => /* @__PURE__ */ e.jsx("a", { href: x, ...n, children: r }),
  className: o = "",
  showScrollToTop: c = !0
}) {
  const { translations: x } = w(), r = (l) => g(l, x), n = () => /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: "flex w-48 cursor-pointer gap-x-2 p-2",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      children: [
        r("toTheTop"),
        " ",
        /* @__PURE__ */ e.jsx(f, { className: "bg-red" })
      ]
    }
  );
  return /* @__PURE__ */ e.jsxs("footer", { className: `w-full bg-block-colored ${o}`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex w-full items-start justify-between md:p-6", children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-full flex-wrap justify-between md:items-start md:pl-[5%]", children: [
      c && /* @__PURE__ */ e.jsx("div", { className: "mb-4 flex w-full justify-end md:hidden", children: /* @__PURE__ */ e.jsx(n, {}) }),
      /* @__PURE__ */ e.jsx("div", { className: "flex w-full flex-col md:hidden md:w-auto md:flex-row md:flex-wrap", children: /* @__PURE__ */ e.jsx(m, { collapsible: !0, type: "single", variant: "footer", children: a.map((l, s) => /* @__PURE__ */ e.jsxs(h, { value: l.title, children: [
        /* @__PURE__ */ e.jsx(j, { children: l.title }),
        /* @__PURE__ */ e.jsx(u, { children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("ul", { className: "flex flex-col gap-6", children: l.links.map((i) => /* @__PURE__ */ e.jsx("li", { children: /* @__PURE__ */ e.jsxs(
          t,
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
      /* @__PURE__ */ e.jsx("div", { className: "flex w-full flex-col md:w-auto md:flex-row md:flex-wrap", children: a.map((l) => /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "mb-6 ml-[3svw] hidden min-w-[12svw] flex-col gap-3.5 md:flex",
          children: [
            /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between font-bold", children: /* @__PURE__ */ e.jsx("span", { children: r(l.title) }) }),
            /* @__PURE__ */ e.jsx("ul", { className: "flex flex-col gap-2.5 bg-inherit", children: l.links.map((s) => /* @__PURE__ */ e.jsx("li", { children: /* @__PURE__ */ e.jsxs(
              t,
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
      c && /* @__PURE__ */ e.jsx("div", { className: "hidden self-start md:block", children: /* @__PURE__ */ e.jsx(n, {}) })
    ] }) }),
    d && /* @__PURE__ */ e.jsx(
      "div",
      {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: { __html: d }
      }
    )
  ] });
}
function T({
  language: a = "de",
  languages: d = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" }
  ],
  translations: t,
  onLanguageChange: o = () => {
  },
  ...c
}) {
  return /* @__PURE__ */ e.jsx(
    p,
    {
      initialLanguage: a,
      languages: d,
      translations: t,
      onLanguageChange: o,
      children: /* @__PURE__ */ e.jsx(v, { ...c })
    }
  );
}
export {
  T as Footer
};
//# sourceMappingURL=index.es9.js.map
