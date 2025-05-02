import { j as e } from "./index.es4.js";
import * as n from "react";
import * as o from "@radix-ui/react-accordion";
import { ChevronDown as d } from "lucide-react";
import { cn as i } from "./index.es15.js";
const N = o.Root, c = n.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e.jsx(
  o.Item,
  {
    ref: r,
    className: i("border-b", a),
    ...t
  }
));
c.displayName = "AccordionItem";
const m = n.forwardRef(({ className: a, children: t, ...r }, s) => /* @__PURE__ */ e.jsx(o.Header, { className: "flex [&[data-state=open]]:shadow-[0_4px_4px_rgba(144,144,144,.5)]", children: /* @__PURE__ */ e.jsxs(
  o.Trigger,
  {
    ref: s,
    className: i(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      a
    ),
    ...r,
    children: [
      /* @__PURE__ */ e.jsx("div", { className: "px-4 font-bold", children: t }),
      /* @__PURE__ */ e.jsx(d, { className: "h-8 w-8 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
m.displayName = o.Trigger.displayName;
const l = n.forwardRef(({ className: a, children: t, ...r }, s) => /* @__PURE__ */ e.jsx(
  o.Content,
  {
    ref: s,
    className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all duration-1000",
    ...r,
    children: /* @__PURE__ */ e.jsx("div", { className: i("pt-0 pb-4", a), children: t })
  }
));
l.displayName = o.Content.displayName;
export {
  N as Accordion,
  l as AccordionContent,
  c as AccordionItem,
  m as AccordionTrigger
};
//# sourceMappingURL=index.es17.js.map
