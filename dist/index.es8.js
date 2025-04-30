import { j as r } from "./index.es4.js";
import * as t from "react";
import { Slot as b } from "@radix-ui/react-slot";
import { ChevronRight as d } from "lucide-react";
import { cn as c } from "./index.es12.js";
const o = t.forwardRef(({ ...e }, a) => /* @__PURE__ */ r.jsx("nav", { ref: a, "aria-label": "breadcrumb", ...e }));
o.displayName = "Breadcrumb";
const i = t.forwardRef(({ className: e, ...a }, s) => /* @__PURE__ */ r.jsx(
  "ol",
  {
    ref: s,
    className: c(
      "flex flex-wrap items-center gap-[0.3em] text-sm break-words text-muted-foreground sm:gap-[0.3em]",
      e
    ),
    ...a
  }
));
i.displayName = "BreadcrumbList";
const x = t.forwardRef(({ className: e, ...a }, s) => /* @__PURE__ */ r.jsx(
  "li",
  {
    ref: s,
    className: c("inline-flex items-center gap-[0.3em]", e),
    ...a
  }
));
x.displayName = "BreadcrumbItem";
const f = t.forwardRef(({ asChild: e, className: a, ...s }, l) => {
  const m = e ? b : "a";
  return /* @__PURE__ */ r.jsx(
    m,
    {
      ref: l,
      className: c("transition-colors hover:text-foreground", a),
      ...s
    }
  );
});
f.displayName = "BreadcrumbLink";
const u = t.forwardRef(({ className: e, ...a }, s) => /* @__PURE__ */ r.jsx(
  "span",
  {
    ref: s,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: c("font-normal text-foreground", e),
    ...a
  }
));
u.displayName = "BreadcrumbPage";
const p = ({
  children: e,
  className: a,
  ...s
}) => /* @__PURE__ */ r.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: c("[&>svg]:h-3.5 [&>svg]:w-3.5", a),
    ...s,
    children: e ?? /* @__PURE__ */ r.jsx(d, {})
  }
);
p.displayName = "BreadcrumbSeparator";
const B = ({
  items: e,
  LinkComponent: a,
  className: s = ""
}) => e.length ? /* @__PURE__ */ r.jsx(o, { className: c("py-2 text-sm", s), children: /* @__PURE__ */ r.jsx(i, { className: "flex flex-wrap items-center", children: e.map((l, m) => {
  const n = m === e.length - 1;
  return /* @__PURE__ */ r.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ r.jsx(x, { children: n ? /* @__PURE__ */ r.jsx(u, { children: l.label }) : /* @__PURE__ */ r.jsx(
      f,
      {
        href: l.href,
        asChild: !!a,
        className: "hover:underline",
        children: a ? /* @__PURE__ */ r.jsx(a, { href: l.href, children: l.label }) : l.label
      }
    ) }),
    !n && /* @__PURE__ */ r.jsx(p, { className: "text-gray-400", children: /* @__PURE__ */ r.jsx(
      d,
      {
        className: n ? "text-black" : "text-berlin-grey-darker"
      }
    ) })
  ] }, `${l.href}-${m}`);
}) }) }) : null;
export {
  o as Breadcrumb,
  x as BreadcrumbItem,
  f as BreadcrumbLink,
  i as BreadcrumbList,
  u as BreadcrumbPage,
  p as BreadcrumbSeparator,
  B as Breadcrumbs
};
//# sourceMappingURL=index.es8.js.map
