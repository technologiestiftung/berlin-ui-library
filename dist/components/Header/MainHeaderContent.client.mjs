import { jsxs as n, jsx as e, Fragment as s } from "react/jsx-runtime";
import { useState as c } from "react";
import { MenuButton as b } from "./MenuButton.mjs";
import { SearchButton as y } from "./SearchButton.mjs";
import { AccessibilityButton as M } from "./AccessibilityButton.mjs";
import { SearchMenu as A } from "./SearchMenu.mjs";
import { MenuDrawer as C } from "./MenuDrawer.mjs";
import { AccessibilityMenu as j } from "./AccessibilityMenu.mjs";
function K({
  header: a,
  caption: r,
  url: o,
  showSearchButton: h,
  onSearch: p,
  showMenuButton: d,
  menuItems: m,
  onOpenMenu: f
}) {
  const [u, t] = c(!1), [O, i] = c(!1), [x, l] = c(!1);
  return /* @__PURE__ */ n("div", { className: "flex items-center justify-between px-4 py-2 md:px-6", children: [
    /* @__PURE__ */ n(
      "a",
      {
        href: o,
        className: "flex h-[86px] flex-col justify-center px-4 text-base sm:text-[20px]",
        children: [
          /* @__PURE__ */ e("span", { children: a }),
          /* @__PURE__ */ e("span", { className: "font-bold", children: r })
        ]
      }
    ),
    /* @__PURE__ */ n("div", { className: "flex items-center gap-x-[30px]", children: [
      /* @__PURE__ */ n(s, { children: [
        /* @__PURE__ */ e(M, { onOpenAccessibility: () => {
          l(!0);
        } }),
        /* @__PURE__ */ e(
          j,
          {
            isOpen: x,
            close: () => {
              l(!1);
            },
            accessibilityItems: []
          }
        )
      ] }),
      h && /* @__PURE__ */ n(s, { children: [
        /* @__PURE__ */ e(y, { onOpenSearch: () => {
          t(!0), p();
        } }),
        /* @__PURE__ */ e(
          A,
          {
            isOpen: u,
            close: () => {
              t(!1);
            },
            onSearch: (S) => {
              console.warn("Search term:", S);
            }
          }
        )
      ] }),
      d && /* @__PURE__ */ n(s, { children: [
        /* @__PURE__ */ e(b, { onOpenMenu: () => {
          i(!0), f();
        } }),
        /* @__PURE__ */ e(
          C,
          {
            isOpen: O,
            close: () => {
              i(!1);
            },
            menuItems: m
          }
        )
      ] })
    ] })
  ] });
}
export {
  K as MainHeaderContentClient
};
//# sourceMappingURL=MainHeaderContent.client.mjs.map
