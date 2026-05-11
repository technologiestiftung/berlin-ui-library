import { j as e } from "./index.es4.js";
import { Drawer as x, DrawerContent as f } from "./index.es6.js";
import { useLanguage as u, t as i } from "./index.es5.js";
import { ExternalLinkIcon as b } from "lucide-react";
function j({
  isOpen: l,
  close: r,
  accessibilityItems: s = []
}) {
  const { translations: n } = u(), a = [
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
  return /* @__PURE__ */ e.jsx(x, { open: l, onOpenChange: (t) => !t && r(), children: /* @__PURE__ */ e.jsxs(f, { className: "flex flex-col gap-4 px-6 py-4 text-base", children: [
    /* @__PURE__ */ e.jsx("div", { className: "mt-4 mb-6 flex flex-row items-center justify-between", children: /* @__PURE__ */ e.jsx("p", { className: "text-2xl font-bold", children: i("accessibilityMenu.title", n) }) }),
    o.map((t, c) => /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ e.jsx("p", { className: "mb-1 font-bold", children: t.question }),
      t.external ? /* @__PURE__ */ e.jsxs(
        "a",
        {
          className: "flex text-text-link transition-colors duration-200 hover:underline",
          href: t.href,
          target: "_blank",
          rel: "noreferrer",
          children: [
            t.label,
            /* @__PURE__ */ e.jsx(b, { className: "ml-2 size-4 flex-shrink-0 text-text-link" })
          ]
        }
      ) : /* @__PURE__ */ e.jsx(
        "a",
        {
          href: t.href,
          className: "text-text-link transition-colors duration-200 hover:underline",
          children: t.label
        }
      )
    ] }, c))
  ] }) });
}
export {
  j as AccessibilityMenu
};
//# sourceMappingURL=index.es68.js.map
