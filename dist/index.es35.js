import { j as e } from "./index.es4.js";
import { useState as s } from "react";
import { MenuButton as g } from "./index.es40.js";
import { SearchButton as w } from "./index.es42.js";
import { AccessibilityButton as C } from "./index.es44.js";
import { SearchMenu as I } from "./index.es45.js";
import { MenuDrawer as N } from "./index.es46.js";
import { AccessibilityMenu as B } from "./index.es47.js";
function z({
  header: c,
  caption: i,
  url: l,
  showSearchButton: o,
  onSearch: a,
  showMenuButton: m,
  menuItems: p,
  onOpenMenu: x
}) {
  const [h, n] = s(!1), [f, t] = s(!1), [d, r] = s(!1), u = () => {
    n(!0), a();
  }, j = () => {
    n(!1);
  }, O = (A) => {
    console.warn("Search term:", A);
  }, b = () => {
    t(!0), x();
  }, y = () => {
    t(!1);
  }, S = () => {
    r(!0);
  }, M = () => {
    r(!1);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-[24px] py-[1rem] md:py-[0.7rem]", children: [
    /* @__PURE__ */ e.jsxs(
      "a",
      {
        href: l,
        className: "flex flex-col justify-center p-[3px] text-base leading-[1.2] break-words md:text-xl",
        children: [
          /* @__PURE__ */ e.jsx("span", { children: c }),
          /* @__PURE__ */ e.jsx("span", { className: "block font-bold", children: i })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "mx-[0.65rem] flex h-full flex-0 items-end space-x-[1.05rem] pt-[0.65rem] pb-[0.2rem]", children: [
      /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(C, { onOpenAccessibility: S }),
        /* @__PURE__ */ e.jsx(
          B,
          {
            isOpen: d,
            close: M,
            accessibilityItems: []
          }
        )
      ] }),
      o && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(w, { onOpenSearch: u }),
        /* @__PURE__ */ e.jsx(
          I,
          {
            isOpen: h,
            close: j,
            onSearch: O
          }
        )
      ] }),
      m && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(g, { onOpenMenu: b }),
        /* @__PURE__ */ e.jsx(
          N,
          {
            isOpen: f,
            close: y,
            menuItems: p
          }
        )
      ] })
    ] })
  ] });
}
export {
  z as MainHeaderContent
};
//# sourceMappingURL=index.es35.js.map
