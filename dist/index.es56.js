import { j as e } from "./index.es4.js";
import { useState as s } from "react";
import { MenuButton as C } from "./index.es61.js";
import { SearchButton as N } from "./index.es63.js";
import { AccessibilityButton as v } from "./index.es65.js";
import { SearchMenu as B } from "./index.es66.js";
import { MenuDrawer as F } from "./index.es67.js";
import { AccessibilityMenu as I } from "./index.es68.js";
function J({
  header: l,
  caption: i,
  url: o,
  showSearchButton: a,
  onSearch: m,
  showMenuButton: p,
  menuItems: x,
  onOpenMenu: h,
  doBerlinSearch: d,
  accessibilityItems: n
}) {
  const [f, t] = s(!1), [u, r] = s(!1), [j, c] = s(!1), b = () => {
    t(!0), m();
  }, O = () => {
    t(!1);
  }, y = (w) => {
    console.warn("Search term:", w);
  }, S = () => {
    r(!0), h();
  }, g = () => {
    r(!1);
  }, M = () => {
    c(!0);
  }, A = () => {
    c(!1);
  };
  return console.log("accessibilityItems :>> ", n), /* @__PURE__ */ e.jsxs("div", { className: "relative z-11 flex items-center justify-between bg-white px-4 py-[0rem] shadow-md lg:px-6 lg:py-[0.7rem]", children: [
    /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: o,
        className: "flex flex-col justify-center p-0 text-[15px] leading-[1.2] break-words md:text-base lg:p-[3px] lg:text-xl",
        children: [
          /* @__PURE__ */ e.jsx("span", { children: l }),
          /* @__PURE__ */ e.jsx("span", { className: "block font-bold", children: i })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "mx-[0.65rem] flex h-full flex-0 items-end space-x-[0.65rem] pt-[0.59rem] pb-[0.20rem] md:space-x-[1.05rem] md:pt-[0.69rem] md:pb-[0.22rem]", children: [
      /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(v, { onOpenAccessibility: M }),
        /* @__PURE__ */ e.jsx(
          I,
          {
            isOpen: j,
            close: A,
            accessibilityItems: n
          }
        )
      ] }),
      a && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(N, { onOpenSearch: b }),
        /* @__PURE__ */ e.jsx(
          B,
          {
            isOpen: f,
            close: O,
            onSearch: y,
            doBerlinSearch: d
          }
        )
      ] }),
      p && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(C, { onOpenMenu: S }),
        /* @__PURE__ */ e.jsx(
          F,
          {
            isOpen: u,
            close: g,
            menuItems: x
          }
        )
      ] })
    ] })
  ] });
}
export {
  J as MainHeaderContent
};
//# sourceMappingURL=index.es56.js.map
