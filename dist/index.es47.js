import { j as t } from "./index.es4.js";
import * as l from "react";
import * as e from "@radix-ui/react-select";
import { ChevronDown as n, ChevronUp as p, Check as f } from "lucide-react";
import { cn as o } from "./index.es26.js";
const j = e.Root, S = e.Group, v = e.Value, u = l.forwardRef(({ className: s, children: r, ...a }, i) => /* @__PURE__ */ t.jsxs(
  e.Trigger,
  {
    ref: i,
    className: o(
      "border-input ring-offset-background focus:ring-ring data-[placeholder]:text-muted-foreground flex h-10 w-full items-center justify-between border border-black bg-white py-2 pr-1 pl-2 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      s
    ),
    ...a,
    children: [
      r,
      /* @__PURE__ */ t.jsx(e.Icon, { asChild: !0, children: /* @__PURE__ */ t.jsx(n, { className: "h-6 w-6" }) })
    ]
  }
));
u.displayName = e.Trigger.displayName;
const d = l.forwardRef(({ className: s, ...r }, a) => /* @__PURE__ */ t.jsx(
  e.ScrollUpButton,
  {
    ref: a,
    className: o(
      "flex cursor-default items-center justify-center py-1",
      s
    ),
    ...r,
    children: /* @__PURE__ */ t.jsx(p, { className: "h-6 w-6" })
  }
));
d.displayName = e.ScrollUpButton.displayName;
const c = l.forwardRef(({ className: s, ...r }, a) => /* @__PURE__ */ t.jsx(
  e.ScrollDownButton,
  {
    ref: a,
    className: o(
      "flex cursor-default items-center justify-center py-1",
      s
    ),
    ...r,
    children: /* @__PURE__ */ t.jsx(n, { className: "h-4 w-4" })
  }
));
c.displayName = e.ScrollDownButton.displayName;
const x = l.forwardRef(({ className: s, children: r, position: a = "popper", ...i }, m) => /* @__PURE__ */ t.jsx(e.Portal, { children: /* @__PURE__ */ t.jsxs(
  e.Content,
  {
    ref: m,
    className: o(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] origin-[--radix-select-content-transform-origin] overflow-x-hidden overflow-y-auto border border-black bg-white text-black shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
      a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      s
    ),
    position: a,
    ...i,
    children: [
      /* @__PURE__ */ t.jsx(d, {}),
      /* @__PURE__ */ t.jsx(
        e.Viewport,
        {
          className: o(
            "p-1",
            a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: r
        }
      ),
      /* @__PURE__ */ t.jsx(c, {})
    ]
  }
) }));
x.displayName = e.Content.displayName;
const h = l.forwardRef(({ className: s, ...r }, a) => /* @__PURE__ */ t.jsx(
  e.Label,
  {
    ref: a,
    className: o("py-1.5 pr-2 pl-8 text-sm font-semibold", s),
    ...r
  }
));
h.displayName = e.Label.displayName;
const w = l.forwardRef(({ className: s, children: r, ...a }, i) => /* @__PURE__ */ t.jsxs(
  e.Item,
  {
    ref: i,
    className: o(
      "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center py-1.5 pr-2 pl-8 outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      s
    ),
    ...a,
    children: [
      /* @__PURE__ */ t.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ t.jsx(e.ItemIndicator, { children: /* @__PURE__ */ t.jsx(f, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ t.jsx(e.ItemText, { children: r })
    ]
  }
));
w.displayName = e.Item.displayName;
const g = l.forwardRef(({ className: s, ...r }, a) => /* @__PURE__ */ t.jsx(
  e.Separator,
  {
    ref: a,
    className: o("bg-muted -mx-1 my-1 h-px", s),
    ...r
  }
));
g.displayName = e.Separator.displayName;
export {
  j as Select,
  x as SelectContent,
  S as SelectGroup,
  w as SelectItem,
  h as SelectLabel,
  c as SelectScrollDownButton,
  d as SelectScrollUpButton,
  g as SelectSeparator,
  u as SelectTrigger,
  v as SelectValue
};
//# sourceMappingURL=index.es47.js.map
