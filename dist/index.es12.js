import * as e from "react";
import { Slot as b } from "@radix-ui/react-slot";
import { ChevronRight as n, MoreHorizontal as E } from "lucide-react";
import { cn as s } from "./index.es13.js";
const o = e.forwardRef(({ ...r }, a) => /* @__PURE__ */ e.createElement("nav", { ref: a, "aria-label": "breadcrumb", ...r }));
o.displayName = "Breadcrumb";
const d = e.forwardRef(({ className: r, ...a }, t) => /* @__PURE__ */ e.createElement(
  "ol",
  {
    ref: t,
    className: s(
      "flex flex-wrap items-center gap-[0.3em] text-sm break-words text-muted-foreground sm:gap-[0.3em]",
      r
    ),
    ...a
  }
));
d.displayName = "BreadcrumbList";
const i = e.forwardRef(({ className: r, ...a }, t) => /* @__PURE__ */ e.createElement(
  "li",
  {
    ref: t,
    className: s("inline-flex items-center gap-[0.3em]", r),
    ...a
  }
));
i.displayName = "BreadcrumbItem";
const u = e.forwardRef(({ asChild: r, className: a, ...t }, l) => {
  const m = r ? b : "a";
  return /* @__PURE__ */ e.createElement(
    m,
    {
      ref: l,
      className: s("transition-colors hover:text-foreground", a),
      ...t
    }
  );
});
u.displayName = "BreadcrumbLink";
const f = e.forwardRef(({ className: r, ...a }, t) => /* @__PURE__ */ e.createElement(
  "span",
  {
    ref: t,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: s("font-normal text-foreground", r),
    ...a
  }
));
f.displayName = "BreadcrumbPage";
const p = ({
  children: r,
  className: a,
  ...t
}) => /* @__PURE__ */ e.createElement(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: s("[&>svg]:h-3.5 [&>svg]:w-3.5", a),
    ...t
  },
  r ?? /* @__PURE__ */ e.createElement(n, null)
);
p.displayName = "BreadcrumbSeparator";
const N = ({
  className: r,
  ...a
}) => /* @__PURE__ */ e.createElement(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: s("flex h-9 w-9 items-center justify-center", r),
    ...a
  },
  /* @__PURE__ */ e.createElement(E, { className: "h-4 w-4" }),
  /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, "More")
);
N.displayName = "BreadcrumbElipssis";
const x = ({
  items: r,
  LinkComponent: a,
  className: t = ""
}) => r.length ? /* @__PURE__ */ e.createElement(o, { className: s("py-2 text-sm", t) }, /* @__PURE__ */ e.createElement(d, { className: "flex flex-wrap items-center" }, r.map((l, m) => {
  const c = m === r.length - 1;
  return /* @__PURE__ */ e.createElement(e.Fragment, { key: `${l.href}-${m}` }, /* @__PURE__ */ e.createElement(i, null, c ? /* @__PURE__ */ e.createElement(f, null, l.label) : /* @__PURE__ */ e.createElement(
    u,
    {
      href: l.href,
      asChild: !!a,
      className: "hover:underline"
    },
    a ? /* @__PURE__ */ e.createElement(a, { href: l.href }, l.label) : l.label
  )), !c && /* @__PURE__ */ e.createElement(p, { className: "text-gray-400" }, /* @__PURE__ */ e.createElement(
    n,
    {
      className: c ? "text-black" : "text-berlin-grey-darker"
    }
  )));
}))) : null;
export {
  o as Breadcrumb,
  N as BreadcrumbEllipsis,
  i as BreadcrumbItem,
  u as BreadcrumbLink,
  d as BreadcrumbList,
  f as BreadcrumbPage,
  p as BreadcrumbSeparator,
  x as Breadcrumbs
};
//# sourceMappingURL=index.es12.js.map
