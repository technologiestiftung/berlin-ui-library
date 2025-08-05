import { j as s } from "./index.es4.js";
import * as d from "react";
import { cva as h } from "class-variance-authority";
import w from "./index.es41.js";
import g from "./index.es42.js";
import N from "./index.es43.js";
import y from "./index.es44.js";
import { cn as i } from "./index.es24.js";
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
), p = d.forwardRef(
  // eslint-disable-next-line complexity
  ({
    className: u,
    variant: r,
    inverted: a,
    size: e,
    active: o,
    onToggle: c,
    showIcon: l = !0,
    value: x,
    children: f,
    ...t
  }, n) => {
    const m = (r === "filter" || r === "filter-outline") && c !== void 0, b = (v) => {
      m && c?.(), t.onClick?.(v);
    };
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: n,
        className: i(
          j({ variant: r, inverted: a, size: e, className: u }),
          o && "data-[state=active]",
          m && "cursor-pointer"
        ),
        "data-state": o ? "active" : "inactive",
        onClick: b,
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
          f,
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
const k = d.forwardRef(
  ({
    className: u,
    activeValues: r,
    onValueToggle: a,
    size: e = "default",
    showIcon: o = !0,
    children: c,
    ...l
  }, x) => {
    const f = d.Children.map(c, (t) => {
      if (d.isValidElement(t) && t.type === p && (t.props.variant === "filter" || t.props.variant === "filter-outline")) {
        const n = t.props.value || (typeof t.props.children == "string" ? t.props.children : ""), m = r.includes(n);
        return d.cloneElement(t, {
          active: m,
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
        className: i("flex flex-wrap gap-2", u),
        ...l,
        children: f
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
