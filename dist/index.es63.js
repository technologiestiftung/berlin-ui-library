import { j as n } from "./index.es4.js";
import { Drawer as C, DrawerContent as $ } from "./index.es6.js";
import { useLanguage as k, t as o } from "./index.es5.js";
import { ChevronDown as y } from "lucide-react";
import { useState as I } from "react";
function q({ isOpen: u, close: h, menuItems: i }) {
  const { translations: l } = k(), [m, p] = I({}), c = o("menu.navigation", l), f = c === "menu.navigation" ? "Hauptnavigation" : c, d = (r) => {
    p((a) => ({
      ...a,
      [r]: !a[r]
    }));
  }, b = (r) => r % 2 === 0 && r > 0 ? "bg-menu-background-dark pl-4" : r % 2 === 1 ? "bg-menu-background pl-4" : "border-t border-border-light", x = (r, a = 0, g = "") => r.map((e, j) => {
    const s = `${g}${e.label}-${j}`, t = !!m[s], v = b(a), N = [
      "flex h-[55px] items-center"
      // Shadow class removed from here
    ].join(" ").trim(), w = [
      v,
      t ? "shadow-[0_7px_7px_rgba(150,150,150,0.1)] relative z-10" : ""
    ].join(" ").trim();
    return /* @__PURE__ */ n.jsxs("div", { className: w, children: [
      " ",
      /* @__PURE__ */ n.jsxs("div", { className: N, children: [
        e.icon && /* @__PURE__ */ n.jsx("span", { className: "mr-2", children: e.icon }),
        /* @__PURE__ */ n.jsx(
          "a",
          {
            href: e.href,
            className: "m-[3px] flex w-full items-center px-[24px] py-[0.1rem] text-lg transition-colors duration-200 hover:underline",
            onClick: (D) => {
              e.href === "#" || e.href === "" ? (D.preventDefault(), e.children && e.children.length > 0 && d(s)) : e.children && e.children.length > 0;
            },
            children: e.label
          }
        ),
        e.children && e.children.length > 0 && /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: "mx-[3px] my-[0.5rem] cursor-pointer border-l border-black px-[0.7rem] pt-[0.3rem] pb-[0.4rem]",
            onClick: () => d(s),
            "aria-expanded": t,
            "aria-label": `${e.label} Untermenü ${t ? "schließen" : "öffnen"}`,
            children: /* @__PURE__ */ n.jsx(
              y,
              {
                className: `transform transition-transform duration-200 ${t ? "rotate-180" : ""}`
              }
            )
          }
        )
      ] }),
      t && e.children && e.children.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col", children: [
        " ",
        x(e.children, a + 1, `${s}-`)
      ] })
    ] }, s);
  });
  return /* @__PURE__ */ n.jsx(C, { open: u, onOpenChange: (r) => !r && h(), children: /* @__PURE__ */ n.jsx(
    $,
    {
      className: "flex flex-col gap-2",
      onOpenAutoFocus: (r) => {
        r.preventDefault(), window.setTimeout(() => {
          document.querySelector("[role='dialog'] a[href]")?.focus();
        });
      },
      children: /* @__PURE__ */ n.jsxs("div", { className: "text-base", children: [
        /* @__PURE__ */ n.jsx("div", { className: "mb-5 flex flex-row items-center justify-between", children: /* @__PURE__ */ n.jsx("h2", { className: "px-6 text-2xl font-bold", children: o("menu.title", l) || "Menu" }) }),
        /* @__PURE__ */ n.jsx("div", { className: "flex flex-col gap-2", children: i.length > 0 ? /* @__PURE__ */ n.jsx("nav", { "aria-label": f, children: x(i) }) : /* @__PURE__ */ n.jsx("p", { children: o("menu.noItems", l) || "No menu items available." }) })
      ] })
    }
  ) });
}
export {
  q as MenuDrawer
};
//# sourceMappingURL=index.es63.js.map
