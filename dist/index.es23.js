import { Drawer as o, DrawerContent as u } from "./index.es11.js";
import { useLanguage as b, t as a } from "./index.es10.js";
function d({
  isOpen: l,
  close: i,
  accessibilityItems: n = []
}) {
  const { translations: t } = b(), r = [
    {
      question: a("accessibilityMenu.barrierefreiheit.question", t),
      label: a("accessibilityMenu.barrierefreiheit", t),
      href: "/accessibility-statement/"
    },
    {
      question: a("accessibilityMenu.contact.question", t),
      label: a("accessibilityMenu.contact", t),
      href: "/accessibility-statement/#accessibility-contact"
    },
    {
      question: a("accessibilityMenu.additionalInfo.question", t),
      label: a("accessibilityMenu.additionalInfo", t),
      href: "https://www.berlin.de/moderne-verwaltung/barrierefreie-it/anlaufstellen/kompetenzstelle/artikel.988002.php",
      external: !0
    }
  ], s = n && n.length > 0 ? n : r;
  return /* @__PURE__ */ React.createElement(o, { open: l, onOpenChange: (e) => !e && i() }, /* @__PURE__ */ React.createElement(u, { className: "flex flex-col gap-4 px-6 py-4 text-base" }, /* @__PURE__ */ React.createElement("div", { className: "mt-4 mb-6 flex flex-row items-center justify-between" }, /* @__PURE__ */ React.createElement("p", { className: "text-2xl font-bold" }, a("accessibilityMenu.title", t))), s.map((e, c) => /* @__PURE__ */ React.createElement("div", { key: c, className: "mb-4" }, /* @__PURE__ */ React.createElement("p", { className: "mb-1 font-bold" }, e.question), e.external ? /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "text-link-blue transition-colors duration-200 hover:underline",
      href: e.href,
      target: "_blank",
      rel: "noreferrer"
    },
    e.label
  ) : /* @__PURE__ */ React.createElement(
    "a",
    {
      href: e.href,
      className: "text-link-blue transition-colors duration-200 hover:underline"
    },
    e.label
  )))));
}
export {
  d as AccessibilityMenu
};
//# sourceMappingURL=index.es23.js.map
