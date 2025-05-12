import { j as e } from "./index.es4.js";
import { useState as s } from "react";
import { MenuButton as g } from "./index.es27.js";
import { SearchButton as C } from "./index.es29.js";
import { AccessibilityButton as I } from "./index.es32.js";
import { SearchMenu as N } from "./index.es33.js";
import { MenuDrawer as w } from "./index.es34.js";
import { AccessibilityMenu as B } from "./index.es35.js";
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
  const [h, n] = s(!1), [f, t] = s(!1), [d, c] = s(!1), u = () => {
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
        className: "flex h-[86px] flex-col justify-center text-base leading-[1.2em] md:text-[20px]",
        children: [
          /* @__PURE__ */ e.jsx("span", { children: i }),
          /* @__PURE__ */ e.jsx("span", { className: "font-bold", children: r })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "mx-4 flex items-center space-x-3", children: [
      /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(I, { onOpenAccessibility: S }),
        /* @__PURE__ */ e.jsx(
          B,
          {
            isOpen: d,
            close: M,
            accessibilityItems: []
          }
        )
      ] }),
      a && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(C, { onOpenSearch: u }),
        /* @__PURE__ */ e.jsx(
          N,
          {
            isOpen: h,
            close: j,
            onSearch: O
          }
        )
      ] }),
      p && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(g, { onOpenMenu: b }),
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
//# sourceMappingURL=index.es22.js.map
