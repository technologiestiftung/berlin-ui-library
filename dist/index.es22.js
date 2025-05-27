import { j as a } from "./index.es4.js";
import * as n from "react";
import { cva as b } from "class-variance-authority";
import v from "./index.es32.js";
import d from "./index.es33.js";
import w from "./index.es34.js";
import h from "./index.es35.js";
import { cn as i } from "./index.es24.js";
const N = b(
  "pill text-3.5 inline-flex w-auto min-w-[unset] items-center gap-[0.4em] rounded-full border border-transparent px-1.75 py-0.25 leading-[1.2] transition-colors",
  {
    variants: {
      variant: {
        default: "bg-black text-white",
        error: "bg-message-error text-text-error",
        success: "bg-message-success text-text-success",
        info: "bg-message-info text-blue",
        message: "bg-message-default text-text-base",
        filter: "bg-grey-dark text-black hover:bg-border-light data-[state=active]:bg-red data-[state=active]:text-white data-[state=active]:hover:bg-red"
      },
      inverted: {
        true: ""
      },
      size: {
        default: "",
        big: "text-3.5 rounded-full px-3.5 py-1.5 font-normal"
      }
    },
    compoundVariants: [
      {
        variant: "default",
        inverted: !0,
        className: "bg-black text-white"
      },
      {
        variant: "error",
        inverted: !0,
        className: "bg-text-error text-white"
      },
      {
        variant: "success",
        inverted: !0,
        className: "bg-text-success text-white"
      },
      {
        variant: "info",
        inverted: !0,
        className: "bg-blue text-white"
      },
      {
        variant: "message",
        inverted: !0,
        className: "bg-text-base text-white"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      inverted: !1
    }
  }
), x = n.forwardRef(
  // eslint-disable-next-line complexity
  ({
    className: m,
    variant: t,
    inverted: r,
    size: s,
    active: o,
    onToggle: c,
    children: u,
    ...f
  }, e) => {
    const l = t === "filter" && c !== void 0, g = (p) => {
      l && c?.(), f.onClick?.(p);
    };
    return /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: e,
        className: i(
          N({ variant: t, inverted: r, size: s, className: m }),
          o && "data-[state=active]",
          l && "cursor-pointer"
        ),
        "data-state": o ? "active" : "inactive",
        onClick: g,
        ...f,
        children: [
          t === "info" && /* @__PURE__ */ a.jsx(
            d,
            {
              className: i(
                r ? "fill-white" : "fill-blue",
                s === "big" ? "size-4" : "size-3"
              )
            }
          ),
          t === "message" && /* @__PURE__ */ a.jsx(
            d,
            {
              className: i(
                r ? "fill-white" : "fill-text-base",
                s === "big" ? "size-4" : "size-3"
              )
            }
          ),
          t === "error" && /* @__PURE__ */ a.jsx(
            w,
            {
              className: i(
                r ? "fill-white" : "fill-text-error",
                s === "big" ? "size-4" : "size-3"
              )
            }
          ),
          t === "success" && /* @__PURE__ */ a.jsx(
            h,
            {
              className: i(
                r ? "fill-white" : "fill-text-success",
                s === "big" ? "size-4" : "size-3"
              )
            }
          ),
          u,
          t === "filter" && o && /* @__PURE__ */ a.jsx(
            v,
            {
              className: i("fill-white", s === "big" ? "size-4" : "size-3")
            }
          )
        ]
      }
    );
  }
);
x.displayName = "Pill";
const j = n.forwardRef(
  ({
    className: m,
    activeValues: t,
    onValueToggle: r,
    size: s = "default",
    children: o,
    ...c
  }, u) => {
    const f = n.Children.map(o, (e) => {
      if (n.isValidElement(e) && e.type === x && e.props.variant === "filter") {
        const l = e.props.value || (typeof e.props.children == "string" ? e.props.children : ""), g = t.includes(l);
        return n.cloneElement(e, {
          active: g,
          size: s,
          onToggle: () => r(l),
          value: l
        });
      }
      return e;
    });
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        ref: u,
        className: i("flex flex-wrap gap-2", m),
        ...c,
        children: f
      }
    );
  }
);
j.displayName = "FilterPillGroup";
export {
  j as FilterPillGroup,
  x as Pill,
  N as pillVariants
};
//# sourceMappingURL=index.es22.js.map
