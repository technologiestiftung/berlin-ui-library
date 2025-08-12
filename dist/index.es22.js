import { j as s } from "./index.es4.js";
import * as m from "react";
import { cva as h } from "class-variance-authority";
import w from "./index.es61.js";
import g from "./index.es62.js";
import N from "./index.es63.js";
import y from "./index.es64.js";
import { cn as i } from "./index.es26.js";
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
), p = m.forwardRef(
  // eslint-disable-next-line complexity
  ({
    className: f,
    variant: r,
    inverted: a,
    size: e,
    active: o,
    onToggle: u,
    showIcon: l = !0,
    value: x,
    children: c,
    ...t
  }, n) => {
    const d = (r === "filter" || r === "filter-outline") && u !== void 0, b = (v) => {
      d && u?.(), t.onClick?.(v);
    };
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: n,
        className: i(
          j({ variant: r, inverted: a, size: e, className: f }),
          o && "data-[state=active]",
          d && "cursor-pointer"
        ),
        "data-state": o ? "active" : "inactive",
        onClick: b,
        tabIndex: d ? 0 : void 0,
        ...t,
        children: [
          l && r === "info" && /* @__PURE__ */ s.jsx(
            g,
            {
              className: i(
                a ? "fill-white" : "fill-blue",
                e === "md" || e === "lg" || e === "xl" ? "size-4" : "size-3"
              )
            }
          ),
          l && r === "message" && /* @__PURE__ */ s.jsx(
            g,
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
            y,
            {
              className: i(
                a ? "fill-white" : "fill-text-success",
                e === "md" || e === "lg" || e === "xl" ? "size-4" : "size-3"
              )
            }
          ),
          c,
          l && (r === "filter" || r === "filter-outline") && o && /* @__PURE__ */ s.jsx(
            w,
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
p.displayName = "Pill";
const k = m.forwardRef(
  ({
    className: f,
    activeValues: r,
    onValueToggle: a,
    size: e = "default",
    showIcon: o = !0,
    children: u,
    ...l
  }, x) => {
    const c = m.Children.map(u, (t) => {
      if (m.isValidElement(t) && t.type === p && (t.props.variant === "filter" || t.props.variant === "filter-outline")) {
        const n = t.props.value || (typeof t.props.children == "string" ? t.props.children : ""), d = r.includes(n);
        return m.cloneElement(t, {
          active: d,
          size: e,
          showIcon: o,
          onToggle: () => a(n),
          value: n
        });
      }
      return t;
    });
    return /* @__PURE__ */ s.jsx(
      "div",
      {
        ref: x,
        className: i("flex flex-wrap gap-2", f),
        ...l,
        children: c
      }
    );
  }
);
k.displayName = "FilterPillGroup";
export {
  k as FilterPillGroup,
  p as Pill,
  j as pillVariants
};
//# sourceMappingURL=index.es22.js.map
