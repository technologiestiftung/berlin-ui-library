import { j as o } from "./index.es4.js";
import * as a from "react";
import * as s from "@radix-ui/react-checkbox";
import { Check as d } from "lucide-react";
import l from "./index.es30.js";
import { cn as t } from "./index.es28.js";
const f = a.forwardRef(({ className: r, variant: e = "default", ...i }, c) => /* @__PURE__ */ o.jsx(
  s.Root,
  {
    ref: c,
    className: t(
      "peer ring-offset-background focus-visible:ring-ring h-4 w-4 shrink-0 cursor-pointer rounded-xs border border-black bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      e === "default" && "data-[state=checked]:border-tabfocus data-[state=checked]:bg-tabfocus data-[state=checked]:!text-white",
      e === "styled" && "h-6 w-6 cursor-pointer border-2 border-none",
      r
    ),
    ...i,
    children: /* @__PURE__ */ o.jsxs(
      s.Indicator,
      {
        className: t("flex items-center justify-center"),
        children: [
          e === "styled" && /* @__PURE__ */ o.jsx(l, { className: "h-6 w-6 text-black" }),
          e !== "styled" && /* @__PURE__ */ o.jsx(d, { className: "h-4 w-4 text-white" })
        ]
      }
    )
  }
));
f.displayName = s.Root.displayName;
export {
  f as Checkbox
};
//# sourceMappingURL=index.es17.js.map
