import { j as a } from "./index.es4.js";
import * as l from "react";
import { Slot as h } from "@radix-ui/react-slot";
import { ChevronRight as p } from "lucide-react";
import { cn as c } from "./index.es21.js";
const n = l.forwardRef(({ ...e }, r) => /* @__PURE__ */ a.jsx("nav", { ref: r, "aria-label": "breadcrumb", ...e }));
n.displayName = "Breadcrumb";
const d = l.forwardRef(({ className: e, ...r }, s) => /* @__PURE__ */ a.jsx(
  "ol",
  {
    ref: s,
    className: c(
      "text-muted-foreground flex flex-wrap items-center gap-[0.3em] text-sm break-words lg:gap-[0.3em]",
      e
    ),
    ...r
  }
));
d.displayName = "BreadcrumbList";
const i = l.forwardRef(({ className: e, ...r }, s) => /* @__PURE__ */ a.jsx(
  "li",
  {
    ref: s,
    className: c("inline-flex items-center gap-[0.3em]", e),
    ...r
  }
));
i.displayName = "BreadcrumbItem";
const x = l.forwardRef(({ asChild: e, className: r, ...s }, t) => {
  const m = e ? h : "a";
  return /* @__PURE__ */ a.jsx(
    m,
    {
      ref: t,
      className: c("hover:text-foreground transition-colors", r),
      ...s
    }
  );
});
x.displayName = "BreadcrumbLink";
const f = l.forwardRef(({ className: e, ...r }, s) => /* @__PURE__ */ a.jsx(
  "span",
  {
    ref: s,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: c("text-foreground font-normal", e),
    ...r
  }
));
f.displayName = "BreadcrumbPage";
const u = ({
  children: e,
  className: r,
  ...s
}) => /* @__PURE__ */ a.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: c("[&>svg]:h-3.5 [&>svg]:w-3.5", r),
    ...s,
    children: e ?? /* @__PURE__ */ a.jsx(p, {})
  }
);
u.displayName = "BreadcrumbSeparator";
const B = ({
  items: e,
  LinkComponent: r,
  className: s = ""
}) => e.length ? /* @__PURE__ */ a.jsx(n, { className: c("py-2 text-sm", s), children: /* @__PURE__ */ a.jsx(d, { className: "flex flex-wrap items-center", children: e.map((t, m) => {
  const o = m === e.length - 1;
  return /* @__PURE__ */ a.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ a.jsx(i, { children: o ? /* @__PURE__ */ a.jsx(f, { children: t.label }) : /* @__PURE__ */ a.jsx(
      x,
      {
        href: t.href,
        asChild: !!r,
        className: "font-base text-text-lightest hover:underline",
        children: r ? /* @__PURE__ */ a.jsx(r, { href: t.href, children: t.label }) : t.label
      }
    ) }),
    !o && /* @__PURE__ */ a.jsx(
      u,
      {
        className: o ? "text-black" : "text-text-lightest"
      }
    )
  ] }, `${t.href}-${m}`);
}) }) }) : null;
export {
  n as Breadcrumb,
  i as BreadcrumbItem,
  x as BreadcrumbLink,
  d as BreadcrumbList,
  f as BreadcrumbPage,
  u as BreadcrumbSeparator,
  B as Breadcrumbs
};
//# sourceMappingURL=index.es8.js.map
