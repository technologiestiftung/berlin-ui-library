import * as e from "react";
import { Slot as p } from "@radix-ui/react-slot";
import { ChevronRight as s } from "lucide-react";
import { cn as m } from "./index.es11.js";
const o = e.forwardRef(({ ...r }, a) => /* @__PURE__ */ e.createElement("nav", { ref: a, "aria-label": "breadcrumb", ...r }));
o.displayName = "Breadcrumb";
const d = e.forwardRef(({ className: r, ...a }, t) => /* @__PURE__ */ e.createElement(
  "ol",
  {
    ref: t,
    className: m(
      "flex flex-wrap items-center gap-[0.3em] text-sm break-words text-muted-foreground sm:gap-[0.3em]",
      r
    ),
    ...a
  }
));
d.displayName = "BreadcrumbList";
const u = e.forwardRef(({ className: r, ...a }, t) => /* @__PURE__ */ e.createElement(
  "li",
  {
    ref: t,
    className: m("inline-flex items-center gap-[0.3em]", r),
    ...a
  }
));
u.displayName = "BreadcrumbItem";
const f = e.forwardRef(({ asChild: r, className: a, ...t }, l) => {
  const c = r ? p : "a";
  return /* @__PURE__ */ e.createElement(
    c,
    {
      ref: l,
      className: m("transition-colors hover:text-foreground", a),
      ...t
    }
  );
});
f.displayName = "BreadcrumbLink";
const i = e.forwardRef(({ className: r, ...a }, t) => /* @__PURE__ */ e.createElement(
  "span",
  {
    ref: t,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: m("font-normal text-foreground", r),
    ...a
  }
));
i.displayName = "BreadcrumbPage";
const b = ({
  children: r,
  className: a,
  ...t
}) => /* @__PURE__ */ e.createElement(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: m("[&>svg]:h-3.5 [&>svg]:w-3.5", a),
    ...t
  },
  r ?? /* @__PURE__ */ e.createElement(s, null)
);
b.displayName = "BreadcrumbSeparator";
const h = ({
  items: r,
  LinkComponent: a,
  className: t = ""
}) => r.length ? /* @__PURE__ */ e.createElement(o, { className: m("py-2 text-sm", t) }, /* @__PURE__ */ e.createElement(d, { className: "flex flex-wrap items-center" }, r.map((l, c) => {
  const n = c === r.length - 1;
  return /* @__PURE__ */ e.createElement(e.Fragment, { key: `${l.href}-${c}` }, /* @__PURE__ */ e.createElement(u, null, n ? /* @__PURE__ */ e.createElement(i, null, l.label) : /* @__PURE__ */ e.createElement(
    f,
    {
      href: l.href,
      asChild: !!a,
      className: "hover:underline"
    },
    a ? /* @__PURE__ */ e.createElement(a, { href: l.href }, l.label) : l.label
  )), !n && /* @__PURE__ */ e.createElement(b, { className: "text-gray-400" }, /* @__PURE__ */ e.createElement(
    s,
    {
      className: n ? "text-black" : "text-berlin-grey-darker"
    }
  )));
}))) : null;
export {
  o as Breadcrumb,
  u as BreadcrumbItem,
  f as BreadcrumbLink,
  d as BreadcrumbList,
  i as BreadcrumbPage,
  b as BreadcrumbSeparator,
  h as Breadcrumbs
};
//# sourceMappingURL=index.es7.js.map
