import { j as t } from "./index.es4.js";
import { Drawer as u, DrawerContent as b } from "./index.es7.js";
import { useLanguage as f, t as i } from "./index.es5.js";
function m({
  isOpen: l,
  close: r,
  accessibilityItems: s = []
}) {
  const { translations: n } = f(), a = [
    {
      question: i("accessibilityMenu.barrierefreiheit.question", n),
      label: i("accessibilityMenu.barrierefreiheit", n),
      href: "/accessibility-statement/"
    },
    {
      question: i("accessibilityMenu.contact.question", n),
      label: i("accessibilityMenu.contact", n),
      href: "/accessibility-statement/#accessibility-contact"
    },
    {
      question: i("accessibilityMenu.additionalInfo.question", n),
      label: i("accessibilityMenu.additionalInfo", n),
      href: "https://www.berlin.de/moderne-verwaltung/barrierefreie-it/anlaufstellen/kompetenzstelle/artikel.988002.php",
      external: !0
    }
  ], o = s && s.length > 0 ? s : a;
  return /* @__PURE__ */ t.jsx(u, { open: l, onOpenChange: (e) => !e && r(), children: /* @__PURE__ */ t.jsxs(b, { className: "flex flex-col gap-4 px-6 py-4 text-base", children: [
    /* @__PURE__ */ t.jsx("div", { className: "mt-4 mb-6 flex flex-row items-center justify-between", children: /* @__PURE__ */ t.jsx("p", { className: "text-2xl font-bold", children: i("accessibilityMenu.title", n) }) }),
    o.map((e, c) => /* @__PURE__ */ t.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ t.jsx("p", { className: "mb-1 font-bold", children: e.question }),
      e.external ? /* @__PURE__ */ t.jsx(
        "a",
        {
          className: "text-link-blue transition-colors duration-200 hover:underline",
          href: e.href,
          target: "_blank",
          rel: "noreferrer",
          children: e.label
        }
      ) : /* @__PURE__ */ t.jsx(
        "a",
        {
          href: e.href,
          className: "text-link-blue transition-colors duration-200 hover:underline",
          children: e.label
        }
      )
    ] }, c))
  ] }) });
}
export {
  m as AccessibilityMenu
};
//# sourceMappingURL=index.es35.js.map
