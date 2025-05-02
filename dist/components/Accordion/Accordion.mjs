import { jsx as o, jsxs as d } from "react/jsx-runtime";
import * as i from "react";
import * as e from "@radix-ui/react-accordion";
import { ChevronDown as c } from "lucide-react";
import { cn as s } from "../../lib/utils.mjs";
const h = e.Root, m = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ o(
  e.Item,
  {
    ref: r,
    className: s("border-b", a),
    ...t
  }
));
m.displayName = "AccordionItem";
const l = i.forwardRef(({ className: a, children: t, ...r }, n) => /* @__PURE__ */ o(e.Header, { className: "flex [&[data-state=open]]:shadow-[0_4px_4px_rgba(144,144,144,.5)]", children: /* @__PURE__ */ d(
  e.Trigger,
  {
    ref: n,
    className: s(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      a
    ),
    ...r,
    children: [
      /* @__PURE__ */ o("div", { className: "px-4 font-bold", children: t }),
      /* @__PURE__ */ o(c, { className: "h-8 w-8 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
l.displayName = e.Trigger.displayName;
const p = i.forwardRef(({ className: a, children: t, ...r }, n) => /* @__PURE__ */ o(
  e.Content,
  {
    ref: n,
    className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all duration-1000",
    ...r,
    children: /* @__PURE__ */ o("div", { className: s("pt-0 pb-4", a), children: t })
  }
));
p.displayName = e.Content.displayName;
export {
  h as Accordion,
  p as AccordionContent,
  m as AccordionItem,
  l as AccordionTrigger
};
//# sourceMappingURL=Accordion.mjs.map
