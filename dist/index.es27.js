import { j as t } from "./index.es4.js";
import { cva as s } from "class-variance-authority";
import { forwardRef as l } from "react";
import m from "./index.es45.js";
import { cn as x } from "./index.es28.js";
const c = s(
  "inline-block text-text-link transition-colors duration-200 ease-out hover:underline focus:underline",
  {
    variants: {
      variant: {
        default: "",
        extern: "m-0 inline-flex h-auto cursor-pointer items-center border-0 bg-transparent p-0 text-left"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), d = l(
  ({
    className: r,
    variant: e = "default",
    children: n,
    ...i
  }, o) => {
    const a = e === "extern" ? {
      target: "_blank",
      rel: "noopener noreferrer"
    } : {};
    return /* @__PURE__ */ t.jsxs(
      "a",
      {
        ref: o,
        className: x(c({ variant: e, className: r })),
        ...a,
        ...i,
        children: [
          n,
          e === "extern" && /* @__PURE__ */ t.jsx(
            m,
            {
              className: "mb-2 ml-1 inline-block size-[16px] align-text-top leading-none text-[#0047d3]",
              "aria-hidden": "true"
            }
          )
        ]
      }
    );
  }
);
d.displayName = "Link";
export {
  d as Link,
  c as linkVariants
};
//# sourceMappingURL=index.es27.js.map
