import { Slot as c } from "@radix-ui/react-slot";
import { cva as l } from "class-variance-authority";
import { cn as p } from "./index.es6.js";
import * as e from "react";
const s = l(
  "flex h-[43px] w-fit items-center justify-center border-2 border-black px-4 py-2 text-black opacity-100 hover:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white"
      },
      size: {
        default: "h-[43px] w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function u({
  className: a,
  variant: o,
  size: r,
  asChild: i = !1,
  ...t
}) {
  const n = i ? c : "button";
  return /* @__PURE__ */ e.createElement(
    n,
    {
      className: p(
        s({ variant: o, size: r, className: a })
      ),
      ...t,
      onClick: t.onClick
    },
    /* @__PURE__ */ e.createElement("span", { className: "flex flex-row items-center gap-1" }, "Copy Address")
  );
}
export {
  u as CopyToClipboardButton,
  s as copyToClipboardButtonVariants
};
//# sourceMappingURL=index.es5.js.map
