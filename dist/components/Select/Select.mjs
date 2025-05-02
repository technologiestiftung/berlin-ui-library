import { jsxs as n, jsx as t } from "react/jsx-runtime";
import * as s from "react";
import * as e from "@radix-ui/react-select";
import { ChevronDown as d, ChevronUp as f, Check as u } from "lucide-react";
import { cn as l } from "../../lib/utils.mjs";
const v = e.Root, R = e.Group, C = e.Value, h = s.forwardRef(({ className: r, children: o, ...a }, i) => /* @__PURE__ */ n(
  e.Trigger,
  {
    ref: i,
    className: l(
      "border-input ring-offset-background focus:ring-ring data-[placeholder]:text-muted-foreground flex h-10 w-full items-center justify-between border border-black bg-white py-2 pr-1 pl-2 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      r
    ),
    ...a,
    children: [
      o,
      /* @__PURE__ */ t(e.Icon, { asChild: !0, children: /* @__PURE__ */ t(d, { className: "h-6 w-6" }) })
    ]
  }
));
h.displayName = e.Trigger.displayName;
const c = s.forwardRef(({ className: r, ...o }, a) => /* @__PURE__ */ t(
  e.ScrollUpButton,
  {
    ref: a,
    className: l(
      "flex cursor-default items-center justify-center py-1",
      r
    ),
    ...o,
    children: /* @__PURE__ */ t(f, { className: "h-6 w-6" })
  }
));
c.displayName = e.ScrollUpButton.displayName;
const m = s.forwardRef(({ className: r, ...o }, a) => /* @__PURE__ */ t(
  e.ScrollDownButton,
  {
    ref: a,
    className: l(
      "flex cursor-default items-center justify-center py-1",
      r
    ),
    ...o,
    children: /* @__PURE__ */ t(d, { className: "h-4 w-4" })
  }
));
m.displayName = e.ScrollDownButton.displayName;
const w = s.forwardRef(({ className: r, children: o, position: a = "popper", ...i }, p) => /* @__PURE__ */ t(e.Portal, { children: /* @__PURE__ */ n(
  e.Content,
  {
    ref: p,
    className: l(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] origin-[--radix-select-content-transform-origin] overflow-x-hidden overflow-y-auto border border-black bg-white text-black shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
      a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      r
    ),
    position: a,
    ...i,
    children: [
      /* @__PURE__ */ t(c, {}),
      /* @__PURE__ */ t(
        e.Viewport,
        {
          className: l(
            "p-1",
            a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: o
        }
      ),
      /* @__PURE__ */ t(m, {})
    ]
  }
) }));
w.displayName = e.Content.displayName;
const g = s.forwardRef(({ className: r, ...o }, a) => /* @__PURE__ */ t(
  e.Label,
  {
    ref: a,
    className: l("py-1.5 pr-2 pl-8 text-sm font-semibold", r),
    ...o
  }
));
g.displayName = e.Label.displayName;
const y = s.forwardRef(({ className: r, children: o, ...a }, i) => /* @__PURE__ */ n(
  e.Item,
  {
    ref: i,
    className: l(
      "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center py-1.5 pr-2 pl-8 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      r
    ),
    ...a,
    children: [
      /* @__PURE__ */ t("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ t(e.ItemIndicator, { children: /* @__PURE__ */ t(u, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ t(e.ItemText, { children: o })
    ]
  }
));
y.displayName = e.Item.displayName;
const b = s.forwardRef(({ className: r, ...o }, a) => /* @__PURE__ */ t(
  e.Separator,
  {
    ref: a,
    className: l("bg-muted -mx-1 my-1 h-px", r),
    ...o
  }
));
b.displayName = e.Separator.displayName;
export {
  v as Select,
  w as SelectContent,
  R as SelectGroup,
  y as SelectItem,
  g as SelectLabel,
  m as SelectScrollDownButton,
  c as SelectScrollUpButton,
  b as SelectSeparator,
  h as SelectTrigger,
  C as SelectValue
};
//# sourceMappingURL=Select.mjs.map
