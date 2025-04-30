import { useState as e } from "react";
import { MenuButton as M } from "./index.es5.js";
import { SearchButton as A } from "./index.es6.js";
import { AccessibilityButton as g } from "./index.es18.js";
import { SearchMenu as C } from "./index.es19.js";
import { MenuDrawer as I } from "./index.es20.js";
import { AccessibilityMenu as N } from "./index.es21.js";
function k({
  header: a,
  caption: s,
  url: l,
  showSearchButton: r,
  onSearch: i,
  showMenuButton: o,
  menuItems: m,
  onOpenMenu: p
}) {
  const [u, t] = e(!1), [f, n] = e(!1), [h, c] = e(!1), R = () => {
    t(!0), i();
  }, O = () => {
    t(!1);
  }, x = (S) => {
    console.warn("Search term:", S);
  }, E = () => {
    n(!0), p();
  }, d = () => {
    n(!1);
  }, b = () => {
    c(!0);
  }, y = () => {
    c(!1);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between px-4 py-2 md:px-6" }, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: l,
      className: "flex h-[86px] flex-col justify-center px-4 text-base sm:text-[20px]"
    },
    /* @__PURE__ */ React.createElement("span", null, a),
    /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, s)
  ), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-x-[30px]" }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(g, { onOpenAccessibility: b }), /* @__PURE__ */ React.createElement(
    N,
    {
      isOpen: h,
      close: y,
      accessibilityItems: []
    }
  )), r && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(A, { onOpenSearch: R }), /* @__PURE__ */ React.createElement(
    C,
    {
      isOpen: u,
      close: O,
      onSearch: x
    }
  )), o && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(M, { onOpenMenu: E }), /* @__PURE__ */ React.createElement(
    I,
    {
      isOpen: f,
      close: d,
      menuItems: m
    }
  ))));
}
export {
  k as MainHeaderContent
};
//# sourceMappingURL=index.es8.js.map
