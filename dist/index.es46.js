import { j as e } from "./index.es4.js";
import { useState as s } from "react";
import { MenuButton as A } from "./index.es51.js";
import { SearchButton as w } from "./index.es53.js";
import { AccessibilityButton as C } from "./index.es55.js";
import { SearchMenu as I } from "./index.es56.js";
import { MenuDrawer as N } from "./index.es57.js";
import { AccessibilityMenu as v } from "./index.es58.js";
function q({
  header: c,
  caption: i,
  url: l,
  showSearchButton: a,
  onSearch: o,
  showMenuButton: m,
  menuItems: p,
  onOpenMenu: x
}) {
  const [h, n] = s(!1), [d, t] = s(!1), [f, r] = s(!1), u = () => {
    n(!0), o();
  }, j = () => {
    n(!1);
  }, b = (g) => {
    console.warn("Search term:", g);
  }, O = () => {
    t(!0), x();
  }, y = () => {
    t(!1);
  }, S = () => {
    r(!0);
  }, M = () => {
    r(!1);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "relative z-11 flex items-center justify-between bg-white px-4 py-[0rem] shadow-md lg:px-6 lg:py-[0.7rem]", children: [
    /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: l,
        className: "flex flex-col justify-center p-0 text-[15px] leading-[1.2] break-words md:text-base lg:p-[3px] lg:text-xl",
        children: [
          /* @__PURE__ */ e.jsx("span", { children: c }),
          /* @__PURE__ */ e.jsx("span", { className: "block font-bold", children: i })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "mx-[0.65rem] flex h-full flex-0 items-end space-x-[0.65rem] pt-[0.59rem] pb-[0.20rem] md:space-x-[1.05rem] md:pt-[0.69rem] md:pb-[0.22rem]", children: [
      /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(C, { onOpenAccessibility: S }),
        /* @__PURE__ */ e.jsx(
          v,
          {
            isOpen: f,
            close: M,
            accessibilityItems: []
          }
        )
      ] }),
      a && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(w, { onOpenSearch: u }),
        /* @__PURE__ */ e.jsx(
          I,
          {
            isOpen: h,
            close: j,
            onSearch: b
          }
        )
      ] }),
      m && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(A, { onOpenMenu: O }),
        /* @__PURE__ */ e.jsx(
          N,
          {
            isOpen: d,
            close: y,
            menuItems: p
          }
        )
      ] })
    ] })
  ] });
}
export {
  q as MainHeaderContent
};
//# sourceMappingURL=index.es46.js.map
