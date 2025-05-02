import { j as e } from "./index.es4.js";
import * as a from "react";
import * as t from "@radix-ui/react-checkbox";
import { Check as c } from "lucide-react";
import { cn as o } from "./index.es15.js";
const d = a.forwardRef(({ className: s, ...i }, r) => /* @__PURE__ */ e.jsx(
  t.Root,
  {
    ref: r,
    className: o(
      "peer ring-offset-background focus-visible:ring-ring h-4 w-4 shrink-0 rounded-xs border border-black bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-tabfocus data-[state=checked]:bg-tabfocus data-[state=checked]:!text-white",
      s
    ),
    ...i,
    children: /* @__PURE__ */ e.jsx(
      t.Indicator,
      {
        className: o("flex items-center justify-center text-white"),
        children: /* @__PURE__ */ e.jsx(c, { className: "h-4 w-4" })
      }
    )
  }
));
d.displayName = t.Root.displayName;
export {
  d as Checkbox
};
//# sourceMappingURL=index.es30.js.map
