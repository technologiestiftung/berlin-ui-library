import { jsx as a, jsxs as h } from "react/jsx-runtime";
import * as t from "react";
import { Slot as g } from "@radix-ui/react-slot";
import { ChevronRight as n } from "lucide-react";
import { cn as c } from "../../lib/utils.mjs";
const o = t.forwardRef(({ ...r }, e) => /* @__PURE__ */ a("nav", { ref: e, "aria-label": "breadcrumb", ...r }));
o.displayName = "Breadcrumb";
const i = t.forwardRef(({ className: r, ...e }, l) => /* @__PURE__ */ a(
  "ol",
  {
    ref: l,
    className: c(
      "flex flex-wrap items-center gap-[0.3em] text-sm break-words text-muted-foreground sm:gap-[0.3em]",
      r
    ),
    ...e
  }
));
i.displayName = "BreadcrumbList";
const f = t.forwardRef(({ className: r, ...e }, l) => /* @__PURE__ */ a(
  "li",
  {
    ref: l,
    className: c("inline-flex items-center gap-[0.3em]", r),
    ...e
  }
));
f.displayName = "BreadcrumbItem";
const u = t.forwardRef(({ asChild: r, className: e, ...l }, s) => /* @__PURE__ */ a(
  r ? g : "a",
  {
    ref: s,
    className: c("transition-colors hover:text-foreground", e),
    ...l
  }
));
u.displayName = "BreadcrumbLink";
const p = t.forwardRef(({ className: r, ...e }, l) => /* @__PURE__ */ a(
  "span",
  {
    ref: l,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: c("font-normal text-foreground", r),
    ...e
  }
));
p.displayName = "BreadcrumbPage";
const b = ({
  children: r,
  className: e,
  ...l
}) => /* @__PURE__ */ a(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: c("[&>svg]:h-3.5 [&>svg]:w-3.5", e),
    ...l,
    children: r ?? /* @__PURE__ */ a(n, {})
  }
);
b.displayName = "BreadcrumbSeparator";
const y = ({
  items: r,
  LinkComponent: e,
  className: l = ""
}) => r.length ? /* @__PURE__ */ a(o, { className: c("py-2 text-sm", l), children: /* @__PURE__ */ a(i, { className: "flex flex-wrap items-center", children: r.map((s, m) => {
  const d = m === r.length - 1;
  return /* @__PURE__ */ h(t.Fragment, { children: [
    /* @__PURE__ */ a(f, { children: d ? /* @__PURE__ */ a(p, { children: s.label }) : /* @__PURE__ */ a(
      u,
      {
        href: s.href,
        asChild: !!e,
        className: "hover:underline",
        children: e ? /* @__PURE__ */ a(e, { href: s.href, children: s.label }) : s.label
      }
    ) }),
    !d && /* @__PURE__ */ a(b, { className: "text-gray-400", children: /* @__PURE__ */ a(
      n,
      {
        className: d ? "text-black" : "text-berlin-grey-darker"
      }
    ) })
  ] }, `${s.href}-${m}`);
}) }) }) : null;
export {
  o as Breadcrumb,
  f as BreadcrumbItem,
  u as BreadcrumbLink,
  i as BreadcrumbList,
  p as BreadcrumbPage,
  b as BreadcrumbSeparator,
  y as Breadcrumbs
};
//# sourceMappingURL=Breadcrumb.mjs.map
