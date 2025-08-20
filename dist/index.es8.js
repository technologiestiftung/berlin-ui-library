import { j as a } from "./index.es4.js";
import * as o from "react";
import { Slot as h } from "@radix-ui/react-slot";
import { ChevronRight as b } from "lucide-react";
import { cn as l } from "./index.es27.js";
const m = o.forwardRef(({ ...r }, e) => /* @__PURE__ */ a.jsx("nav", { ref: e, "aria-label": "breadcrumb", ...r }));
m.displayName = "Breadcrumb";
const n = o.forwardRef(({ className: r, ...e }, s) => /* @__PURE__ */ a.jsx(
  "ol",
  {
    ref: s,
    className: l(
      "text-muted-foreground flex flex-wrap items-center gap-[0.3em] text-sm break-words lg:gap-[0.3em]",
      r
    ),
    ...e
  }
));
n.displayName = "BreadcrumbList";
const d = o.forwardRef(({ className: r, ...e }, s) => /* @__PURE__ */ a.jsx(
  "li",
  {
    ref: s,
    className: l("inline-flex items-center gap-[0.3em]", r),
    ...e
  }
));
d.displayName = "BreadcrumbItem";
const i = o.forwardRef(({ asChild: r, className: e, ...s }, t) => {
  const c = r ? h : "a";
  return /* @__PURE__ */ a.jsx(
    c,
    {
      ref: t,
      className: l("hover:text-foreground transition-colors", e),
      ...s
    }
  );
});
i.displayName = "BreadcrumbLink";
const f = o.forwardRef(({ className: r, ...e }, s) => /* @__PURE__ */ a.jsx(
  "span",
  {
    ref: s,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: l("text-foreground font-normal", r),
    ...e
  }
));
f.displayName = "BreadcrumbPage";
const x = ({
  children: r,
  className: e,
  ...s
}) => /* @__PURE__ */ a.jsx(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: l("[&>svg]:h-3.5 [&>svg]:w-3.5", e),
    ...s,
    children: r ?? /* @__PURE__ */ a.jsx(b, {})
  }
);
x.displayName = "BreadcrumbSeparator";
const w = ({
  items: r,
  LinkComponent: e,
  className: s = ""
}) => r.length ? /* @__PURE__ */ a.jsx(m, { className: l("py-2 text-sm", s), children: /* @__PURE__ */ a.jsx(n, { className: "flex flex-wrap items-center", children: r.map((t, c) => {
  const u = c === r.length - 1, p = c === 0;
  return /* @__PURE__ */ a.jsxs(d, { children: [
    !p && /* @__PURE__ */ a.jsx(x, { className: "text-text-lightest" }),
    u ? /* @__PURE__ */ a.jsx(f, { children: t.label }) : /* @__PURE__ */ a.jsx(
      i,
      {
        href: t.href,
        asChild: !!e,
        className: "font-base text-text-lightest hover:underline",
        children: e ? /* @__PURE__ */ a.jsx(e, { href: t.href, children: t.label }) : t.label
      }
    )
  ] }, `${t.href}-${c}`);
}) }) }) : null;
export {
  m as Breadcrumb,
  d as BreadcrumbItem,
  i as BreadcrumbLink,
  n as BreadcrumbList,
  f as BreadcrumbPage,
  x as BreadcrumbSeparator,
  w as Breadcrumbs
};
//# sourceMappingURL=index.es8.js.map
