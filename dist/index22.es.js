import { j as o } from "./index4.es.js";
import * as d from "react";
import { cva as k } from "class-variance-authority";
import N from "./index32.es.js";
import p from "./index45.es.js";
import j from "./index46.es.js";
import I from "./index47.es.js";
import { cn as m } from "./index29.es.js";
const S = {
  info: p,
  message: p,
  error: j,
  success: I
}, C = {
  info: "fill-blue",
  message: "fill-text-base",
  error: "fill-text-error",
  success: "fill-text-success"
}, P = k(
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
), v = (e) => e === "md" || e === "lg" || e === "xl", b = (e) => e === "filter" || e === "filter-outline", E = ({
  active: e,
  size: s
}) => e ? /* @__PURE__ */ o.jsx(
  N,
  {
    className: m("fill-white", v(s) ? "size-4" : "size-3")
  }
) : null, V = ({
  inverted: e,
  size: s,
  variant: r
}) => {
  if (r !== "info" && r !== "message" && r !== "error" && r !== "success")
    return null;
  const a = S[r];
  return /* @__PURE__ */ o.jsx(
    a,
    {
      className: m(
        e ? "fill-white" : C[r],
        v(s) ? "size-4" : "size-3"
      )
    }
  );
}, w = d.forwardRef(
  ({
    className: e,
    variant: s,
    inverted: r,
    size: a,
    active: n,
    onToggle: c,
    showIcon: f = !0,
    value: g,
    children: x,
    ...t
  }, u) => {
    const i = b(s) && c !== void 0, h = (l) => {
      i && c?.(), t.onClick?.(l);
    }, y = (l) => {
      i && (l.key === "Enter" || l.key === " ") && (l.preventDefault(), c?.()), t.onKeyDown?.(l);
    };
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: u,
        className: m(
          P({ variant: s, inverted: r, size: a, className: e }),
          n && "data-[state=active]",
          i && "cursor-pointer"
        ),
        "data-state": n ? "active" : "inactive",
        onClick: h,
        onKeyDown: y,
        tabIndex: i ? 0 : void 0,
        ...t,
        children: [
          f && /* @__PURE__ */ o.jsx(V, { inverted: r, size: a, variant: s }),
          x,
          f && b(s) && /* @__PURE__ */ o.jsx(E, { active: n, size: a })
        ]
      }
    );
  }
);
w.displayName = "Pill";
const D = d.forwardRef(
  ({
    className: e,
    activeValues: s,
    onValueToggle: r,
    size: a = "default",
    showIcon: n = !0,
    children: c,
    ...f
  }, g) => {
    const x = d.Children.map(c, (t) => {
      if (d.isValidElement(t) && t.type === w && (t.props.variant === "filter" || t.props.variant === "filter-outline")) {
        const u = t.props.value || (typeof t.props.children == "string" ? t.props.children : ""), i = s.includes(u);
        return d.cloneElement(t, {
          active: i,
          size: a,
          showIcon: n,
          onToggle: () => r(u),
          value: u
        });
      }
      return t;
    });
    return /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: g,
        className: m("flex flex-wrap gap-2", e),
        ...f,
        children: x
      }
    );
  }
);
D.displayName = "FilterPillGroup";
export {
  D as FilterPillGroup,
  w as Pill,
  P as pillVariants
};
//# sourceMappingURL=index22.es.js.map
