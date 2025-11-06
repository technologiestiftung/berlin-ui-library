import { j as s } from "./index.es4.js";
import * as m from "react";
import { cva as h } from "class-variance-authority";
import y from "./index.es48.js";
import p from "./index.es49.js";
import N from "./index.es50.js";
import k from "./index.es51.js";
import { cn as i } from "./index.es27.js";
const j = h(
  "pill text-3.5 inline-flex w-auto min-w-[unset] items-center gap-[0.4em] rounded-full border border-transparent px-1.75 py-0.25 leading-[1.2] transition-colors",
  {
    variants: {
      variant: {
        default: "bg-black text-white",
        error: "bg-message-error text-text-error",
        success: "bg-message-success text-text-success",
        info: "bg-message-info text-blue",
        message: "bg-message-default text-text-base",
        filter: "bg-grey-dark text-black hover:bg-border-light data-[state=active]:bg-red data-[state=active]:text-white data-[state=active]:hover:bg-red",
        "filter-outline": "hover:bg-grey-light border-2 border-grey-dark bg-white text-black data-[state=active]:border-red data-[state=active]:bg-red data-[state=active]:text-white data-[state=active]:hover:bg-red"
      },
      inverted: {
        true: ""
      },
      size: {
        default: "",
        md: "text-3.5 rounded-full px-3.5 py-1.5 font-normal",
        lg: "text-4 rounded-full px-4 py-2 font-medium",
        xl: "text-4.5 rounded-full px-5 py-2.5 font-medium"
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
), b = m.forwardRef(
  // eslint-disable-next-line complexity
  ({
    className: c,
    variant: r,
    inverted: a,
    size: e,
    active: d,
    onToggle: f,
    showIcon: l = !0,
    value: g,
    children: x,
    ...t
  }, u) => {
    const o = (r === "filter" || r === "filter-outline") && f !== void 0, v = (n) => {
      o && f?.(), t.onClick?.(n);
    }, w = (n) => {
      o && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), f?.()), t.onKeyDown?.(n);
    };
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: u,
        className: i(
          j({ variant: r, inverted: a, size: e, className: c }),
          d && "data-[state=active]",
          o && "cursor-pointer"
        ),
        "data-state": d ? "active" : "inactive",
        onClick: v,
        onKeyDown: w,
        tabIndex: o ? 0 : void 0,
        ...t,
        children: [
          l && r === "info" && /* @__PURE__ */ s.jsx(
            p,
            {
              className: i(
                a ? "fill-white" : "fill-blue",
                e === "md" || e === "lg" || e === "xl" ? "size-4" : "size-3"
              )
            }
          ),
          l && r === "message" && /* @__PURE__ */ s.jsx(
            p,
            {
              className: i(
                a ? "fill-white" : "fill-text-base",
                e === "md" || e === "lg" || e === "xl" ? "size-4" : "size-3"
              )
            }
          ),
          l && r === "error" && /* @__PURE__ */ s.jsx(
            N,
            {
              className: i(
                a ? "fill-white" : "fill-text-error",
                e === "md" || e === "lg" || e === "xl" ? "size-4" : "size-3"
              )
            }
          ),
          l && r === "success" && /* @__PURE__ */ s.jsx(
            k,
            {
              className: i(
                a ? "fill-white" : "fill-text-success",
                e === "md" || e === "lg" || e === "xl" ? "size-4" : "size-3"
              )
            }
          ),
          x,
          l && (r === "filter" || r === "filter-outline") && d && /* @__PURE__ */ s.jsx(
            y,
            {
              className: i(
                "fill-white",
                e === "md" || e === "lg" || e === "xl" ? "size-4" : "size-3"
              )
            }
          )
        ]
      }
    );
  }
);
b.displayName = "Pill";
const C = m.forwardRef(
  ({
    className: c,
    activeValues: r,
    onValueToggle: a,
    size: e = "default",
    showIcon: d = !0,
    children: f,
    ...l
  }, g) => {
    const x = m.Children.map(f, (t) => {
      if (m.isValidElement(t) && t.type === b && (t.props.variant === "filter" || t.props.variant === "filter-outline")) {
        const u = t.props.value || (typeof t.props.children == "string" ? t.props.children : ""), o = r.includes(u);
        return m.cloneElement(t, {
          active: o,
          size: e,
          showIcon: d,
          onToggle: () => a(u),
          value: u
        });
      }
      return t;
    });
    return /* @__PURE__ */ s.jsx(
      "div",
      {
        ref: g,
        className: i("flex flex-wrap gap-2", c),
        ...l,
        children: x
      }
    );
  }
);
C.displayName = "FilterPillGroup";
export {
  C as FilterPillGroup,
  b as Pill,
  j as pillVariants
};
//# sourceMappingURL=index.es22.js.map
