import { jsx as i, jsxs as r } from "react/jsx-runtime";
import { Drawer as b, DrawerContent as f } from "../Drawer/Drawer.mjs";
import { useLanguage as d, t as n } from "./LanguageProvider.mjs";
function p({
  isOpen: a,
  close: s,
  accessibilityItems: l = []
}) {
  const { translations: t } = d(), o = [
    {
      question: n("accessibilityMenu.barrierefreiheit.question", t),
      label: n("accessibilityMenu.barrierefreiheit", t),
      href: "/accessibility-statement/"
    },
    {
      question: n("accessibilityMenu.contact.question", t),
      label: n("accessibilityMenu.contact", t),
      href: "/accessibility-statement/#accessibility-contact"
    },
    {
      question: n("accessibilityMenu.additionalInfo.question", t),
      label: n("accessibilityMenu.additionalInfo", t),
      href: "https://www.berlin.de/moderne-verwaltung/barrierefreie-it/anlaufstellen/kompetenzstelle/artikel.988002.php",
      external: !0
    }
  ], c = l && l.length > 0 ? l : o;
  return /* @__PURE__ */ i(b, { open: a, onOpenChange: (e) => !e && s(), children: /* @__PURE__ */ r(f, { className: "flex flex-col gap-4 px-6 py-4 text-base", children: [
    /* @__PURE__ */ i("div", { className: "mt-4 mb-6 flex flex-row items-center justify-between", children: /* @__PURE__ */ i("p", { className: "text-2xl font-bold", children: n("accessibilityMenu.title", t) }) }),
    c.map((e, u) => /* @__PURE__ */ r("div", { className: "mb-4", children: [
      /* @__PURE__ */ i("p", { className: "mb-1 font-bold", children: e.question }),
      e.external ? /* @__PURE__ */ i(
        "a",
        {
          className: "text-text-link transition-colors duration-200 hover:underline",
          href: e.href,
          target: "_blank",
          rel: "noreferrer",
          children: e.label
        }
      ) : /* @__PURE__ */ i(
        "a",
        {
          href: e.href,
          className: "text-text-link transition-colors duration-200 hover:underline",
          children: e.label
        }
      )
    ] }, u))
  ] }) });
}
export {
  p as AccessibilityMenu
};
//# sourceMappingURL=AccessibilityMenu.mjs.map
