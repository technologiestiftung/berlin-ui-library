import { j as o } from "./index.es4.js";
import * as d from "react";
import * as r from "@radix-ui/react-accordion";
import { ChevronDown as m } from "lucide-react";
import { cn as i } from "./index.es23.js";
const s = {
  default: {
    item: "border-t border-b border-gray-200",
    header: "flex",
    trigger: "flex flex-1 text-start [&>svg]:text-red items-center pr-4 justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
    content: "data-[state=closed]:animate-accordion-up pr-4 data-[state=open]:animate-accordion-down overflow-hidden duration-500 text-sm transition-all"
  },
  footer: {
    item: "border-b",
    header: "flex [&[data-state=open]]:shadow-[0_4px_4px_rgba(144,144,144,.5)]",
    trigger: "flex flex-1 px-2 items-center justify-between p-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
    content: "data-[state=closed]:animate-accordion-up px-7 py-5  data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all duration-1000"
  }
}, l = d.forwardRef(({ className: e, variant: n, ...t }, a) => /* @__PURE__ */ o.jsx(r.Root, { ref: a, className: i(e), ...t }));
l.displayName = "Accordion";
const f = d.forwardRef(({ className: e, variant: n = "footer", ...t }, a) => /* @__PURE__ */ o.jsx(
  r.Item,
  {
    ref: a,
    className: i(s[n].item, e),
    ...t
  }
));
f.displayName = "AccordionItem";
const p = d.forwardRef(({ className: e, children: n, variant: t = "footer", ...a }, c) => /* @__PURE__ */ o.jsx(r.Header, { className: s[t].header, children: /* @__PURE__ */ o.jsxs(
  r.Trigger,
  {
    ref: c,
    className: i(s[t].trigger, e),
    ...a,
    children: [
      /* @__PURE__ */ o.jsx("div", { className: "font-bold", children: n }),
      /* @__PURE__ */ o.jsx(m, { className: "h-8 w-8 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
p.displayName = r.Trigger.displayName;
const x = d.forwardRef(({ className: e, children: n, variant: t = "footer", ...a }, c) => /* @__PURE__ */ o.jsx(
  r.Content,
  {
    ref: c,
    className: i(s[t].content, e),
    ...a,
    children: /* @__PURE__ */ o.jsx("div", { className: i("pt-0 pb-4", e), children: n })
  }
));
x.displayName = r.Content.displayName;
export {
  l as Accordion,
  x as AccordionContent,
  f as AccordionItem,
  p as AccordionTrigger
};
//# sourceMappingURL=index.es16.js.map
