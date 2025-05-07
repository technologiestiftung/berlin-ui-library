import { j as e } from "./index.es4.js";
import { useState as s } from "react";
import { MenuButton as C } from "./index.es43.js";
import { SearchButton as I } from "./index.es45.js";
import { AccessibilityButton as N } from "./index.es47.js";
import { SearchMenu as g } from "./index.es48.js";
import { MenuDrawer as w } from "./index.es49.js";
import { AccessibilityMenu as B } from "./index.es50.js";
function z({
  header: i,
  caption: r,
  url: o,
  showSearchButton: a,
  onSearch: l,
  showMenuButton: p,
  menuItems: m,
  onOpenMenu: x
}) {
  const [h, n] = s(!1), [f, t] = s(!1), [u, c] = s(!1), d = () => {
    n(!0), l();
  }, j = () => {
    n(!1);
  }, O = (A) => {
    console.warn("Search term:", A);
  }, b = () => {
    t(!0), x();
  }, y = () => {
    t(!1);
  }, S = () => {
    c(!0);
  }, M = () => {
    c(!1);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-4 py-1 md:px-6", children: [
    /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: o,
        className: "flex h-[86px] flex-col justify-center text-base sm:text-[20px]",
        children: [
          /* @__PURE__ */ e.jsx("span", { children: i }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold", children: r })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "mx-4 flex items-center space-x-3", children: [
      /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(N, { onOpenAccessibility: S }),
        /* @__PURE__ */ e.jsx(
          B,
          {
            isOpen: u,
            close: M,
            accessibilityItems: []
          }
        )
      ] }),
      a && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(I, { onOpenSearch: d }),
        /* @__PURE__ */ e.jsx(
          g,
          {
            isOpen: h,
            close: j,
            onSearch: O
          }
        )
      ] }),
      p && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(C, { onOpenMenu: b }),
        /* @__PURE__ */ e.jsx(
          w,
          {
            isOpen: f,
            close: y,
            menuItems: m
          }
        )
      ] })
    ] })
  ] });
}
export {
  z as MainHeaderContent
};
//# sourceMappingURL=index.es38.js.map
