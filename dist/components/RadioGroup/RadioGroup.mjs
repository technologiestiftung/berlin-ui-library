import { jsx as r } from "react/jsx-runtime";
import * as a from "react";
import * as e from "@radix-ui/react-radio-group";
import { Circle as l } from "lucide-react";
import { cn as s } from "../../lib/utils.mjs";
const c = a.forwardRef(({ className: o, ...i }, t) => /* @__PURE__ */ r(
  e.Root,
  {
    className: s("grid gap-2", o),
    ...i,
    ref: t
  }
));
c.displayName = e.Root.displayName;
const d = a.forwardRef(({ className: o, ...i }, t) => /* @__PURE__ */ r(
  e.Item,
  {
    ref: t,
    className: s(
      "ring-offset-background focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border border-black bg-white text-tabfocus focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:text-text-disabled",
      o
    ),
    ...i,
    children: /* @__PURE__ */ r(e.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ r(l, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
d.displayName = e.Item.displayName;
export {
  c as RadioGroup,
  d as RadioGroupItem
};
//# sourceMappingURL=RadioGroup.mjs.map
