import { jsx as e } from "react/jsx-runtime";
import * as a from "react";
import * as o from "@radix-ui/react-checkbox";
import { Check as c } from "lucide-react";
import { cn as t } from "../../lib/utils.mjs";
const d = a.forwardRef(({ className: i, ...r }, s) => /* @__PURE__ */ e(
  o.Root,
  {
    ref: s,
    className: t(
      "peer ring-offset-background focus-visible:ring-ring h-4 w-4 shrink-0 rounded-xs border border-black bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-tabfocus data-[state=checked]:bg-tabfocus data-[state=checked]:!text-white",
      i
    ),
    ...r,
    children: /* @__PURE__ */ e(
      o.Indicator,
      {
        className: t("flex items-center justify-center text-white"),
        children: /* @__PURE__ */ e(c, { className: "h-4 w-4" })
      }
    )
  }
));
d.displayName = o.Root.displayName;
export {
  d as Checkbox
};
//# sourceMappingURL=Checkbox.mjs.map
