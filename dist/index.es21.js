import { j as r } from "./index.es4.js";
import { forwardRef as n } from "react";
import { cn as o } from "./index.es24.js";
import i from "./index.es25.js";
const m = {
  heavy: "p-[18px] bg-grey border border-grey",
  dark: "p-[18px] bg-black border-0 text-white",
  light: "p-[1.125em] bg-white border border-grey-dark",
  clean: "p-[1.125em] px-0 bg-transparent border border-transparent",
  bordered: "py-[1.125em] px-0 border border-grey-dark border-x-0 bg-transparent",
  colored: "p-[18px] bg-grey border border-grey text-black",
  boxed: "p-[1.125em] bg-white border border-black",
  white: "p-[1.125em] bg-white border border-white",
  hint: "mt-4 mb-4 ml-[18px] pl-3 relative font-bold"
}, s = n(
  ({
    children: b,
    variant: e = "light",
    removeInnerPanels: p = !1,
    footer: t,
    className: a,
    ...d
  }, l) => /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: l,
      className: o(
        "panel",
        m[e],
        p && e === "heavy" ? "panel--remove-inner-panels" : "",
        e === "heavy" && "has-inner-panels",
        a
      ),
      "data-variant": e,
      ...d,
      children: [
        e === "hint" && /* @__PURE__ */ r.jsx(
          "img",
          {
            src: i,
            alt: "Hint icon",
            className: "absolute top-0 left-[-18px] h-[22px] w-[22px] text-black"
          }
        ),
        b,
        t && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: o(
              "panel__footer relative bottom-[-18px] -mx-[18px] mt-0 border-x-0 border-t border-b-0 p-[18px]",
              e === "dark" && "text-white"
            ),
            children: t
          }
        )
      ]
    }
  )
);
s.displayName = "Panel";
export {
  s as Panel
};
//# sourceMappingURL=index.es21.js.map
