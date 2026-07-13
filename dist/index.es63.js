import { j as r } from "./index.es4.js";
import { Drawer as w, DrawerContent as D } from "./index.es6.js";
import { useLanguage as C, t as d } from "./index.es5.js";
import { ChevronDown as $ } from "lucide-react";
import { useState as k } from "react";
function _({ isOpen: x, close: h, menuItems: o }) {
  const { translations: a } = C(), [m, u] = k({}), c = (n) => {
    u((s) => ({
      ...s,
      [n]: !s[n]
    }));
  }, f = (n) => n % 2 === 0 && n > 0 ? "bg-menu-background-dark pl-4" : n % 2 === 1 ? "bg-menu-background pl-4" : "border-t border-border-light", i = (n, s = 0, p = "") => n.map((e, b) => {
    const l = `${p}${e.label}-${b}`, t = !!m[l], g = f(s), j = [
      "flex h-[55px] items-center"
      // Shadow class removed from here
    ].join(" ").trim(), N = [
      g,
      t ? "shadow-[0_7px_7px_rgba(150,150,150,0.1)] relative z-10" : ""
    ].join(" ").trim();
    return /* @__PURE__ */ r.jsxs("div", { className: N, children: [
      " ",
      /* @__PURE__ */ r.jsxs("div", { className: j, children: [
        e.icon && /* @__PURE__ */ r.jsx("span", { className: "mr-2", children: e.icon }),
        /* @__PURE__ */ r.jsx(
          "a",
          {
            href: e.href,
            className: "m-[3px] flex w-full items-center px-[24px] py-[0.1rem] text-lg transition-colors duration-200 hover:underline",
            onClick: (v) => {
              e.href === "#" || e.href === "" ? (v.preventDefault(), e.children && e.children.length > 0 && c(l)) : e.children && e.children.length > 0;
            },
            children: e.label
          }
        ),
        e.children && e.children.length > 0 && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "mx-[3px] my-[0.5rem] cursor-pointer border-l border-black px-[0.7rem] pt-[0.3rem] pb-[0.4rem]",
            onClick: () => c(l),
            "aria-expanded": t,
            "aria-label": `${e.label} Untermenü ${t ? "schließen" : "öffnen"}`,
            children: /* @__PURE__ */ r.jsx(
              $,
              {
                className: `transform transition-transform duration-200 ${t ? "rotate-180" : ""}`
              }
            )
          }
        )
      ] }),
      t && e.children && e.children.length > 0 && /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col", children: [
        " ",
        i(e.children, s + 1, `${l}-`)
      ] })
    ] }, l);
  });
  return /* @__PURE__ */ r.jsx(w, { open: x, onOpenChange: (n) => !n && h(), children: /* @__PURE__ */ r.jsx(
    D,
    {
      className: "flex flex-col gap-2",
      onOpenAutoFocus: (n) => {
        n.preventDefault(), window.setTimeout(() => {
          document.querySelector("[role='dialog'] a[href]")?.focus();
        });
      },
      children: /* @__PURE__ */ r.jsxs("div", { className: "text-base", children: [
        /* @__PURE__ */ r.jsx("div", { className: "mb-5 flex flex-row items-center justify-between", children: /* @__PURE__ */ r.jsx("h2", { className: "px-6 text-2xl font-bold", children: d("menu.title", a) || "Menu" }) }),
        /* @__PURE__ */ r.jsx("div", { className: "flex flex-col gap-2", children: o.length > 0 ? i(o) : /* @__PURE__ */ r.jsx("p", { children: d("menu.noItems", a) || "No menu items available." }) })
      ] })
    }
  ) });
}
export {
  _ as MenuDrawer
};
//# sourceMappingURL=index.es63.js.map
