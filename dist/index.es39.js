import { j as r } from "./index.es4.js";
import * as i from "react";
import * as e from "@radix-ui/react-radio-group";
import { Circle as l } from "lucide-react";
import { cn as a } from "./index.es21.js";
const c = i.forwardRef(({ className: o, ...s }, t) => /* @__PURE__ */ r.jsx(
  e.Root,
  {
    className: a("grid gap-2", o),
    ...s,
    ref: t
  }
));
c.displayName = e.Root.displayName;
const d = i.forwardRef(({ className: o, ...s }, t) => /* @__PURE__ */ r.jsx(
  e.Item,
  {
    ref: t,
    className: a(
      "ring-offset-background focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border border-black bg-white text-tabfocus focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:text-text-disabled",
      o
    ),
    ...s,
    children: /* @__PURE__ */ r.jsx(e.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ r.jsx(l, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
d.displayName = e.Item.displayName;
export {
  c as RadioGroup,
  d as RadioGroupItem
};
//# sourceMappingURL=index.es39.js.map
