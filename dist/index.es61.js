import { j as t } from "./index.es4.js";
import { Drawer as u, DrawerContent as f } from "./index.es6.js";
import { useLanguage as x, t as i } from "./index.es5.js";
import { ExternalLinkIcon as b } from "lucide-react";
function j({
  isOpen: l,
  close: r,
  accessibilityItems: s = []
}) {
  const { translations: n } = x(), a = [
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
  return /* @__PURE__ */ t.jsx(u, { open: l, onOpenChange: (e) => !e && r(), children: /* @__PURE__ */ t.jsxs(
    f,
    {
      className: "flex flex-col gap-4 px-6 py-4 text-base",
      onOpenAutoFocus: (e) => {
        e.preventDefault(), window.setTimeout(() => {
          document.querySelector("[role='dialog'] a[href]")?.focus();
        });
      },
      children: [
        /* @__PURE__ */ t.jsx("div", { className: "mt-4 mb-6 flex flex-row items-center justify-between", children: /* @__PURE__ */ t.jsx("h2", { className: "text-2xl font-bold", children: i("accessibilityMenu.title", n) }) }),
        o.map((e, c) => /* @__PURE__ */ t.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ t.jsx("p", { className: "mb-1 font-bold", children: e.question }),
          e.external ? /* @__PURE__ */ t.jsxs(
            "a",
            {
              className: "flex text-text-link transition-colors duration-200 hover:underline",
              href: e.href,
              target: "_blank",
              rel: "noreferrer",
              children: [
                e.label,
                /* @__PURE__ */ t.jsx(b, { className: "ml-2 size-4 flex-shrink-0 text-text-link" })
              ]
            }
          ) : /* @__PURE__ */ t.jsx(
            "a",
            {
              href: e.href,
              className: "text-text-link transition-colors duration-200 hover:underline",
              children: e.label
            }
          )
        ] }, c))
      ]
    }
  ) });
}
export {
  j as AccessibilityMenu
};
//# sourceMappingURL=index.es61.js.map
