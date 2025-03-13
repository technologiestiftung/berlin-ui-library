import { Slot as r } from "@radix-ui/react-slot";
import { cva as o } from "class-variance-authority";
import { cn as i } from "./index.es6.js";
import * as t from "react";
const n = o(
  "ts:px-4 ts:py-2 ts:border-black ts:w-fit ts:border-2 ts:opacity-100 ts:hover:opacity-50 ts:flex ts:justify-center ts:items-center ts:text-black ts:h-[43px]",
  {
    variants: {
      variant: {
        default: "ts:bg-primary ts:text-white"
      },
      size: {
        default: "ts:h-[43px] ts:w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function u({
  className: c,
  variant: l,
  size: p,
  asChild: s = !1,
  ...e
}) {
  const a = s ? r : "button";
  return /* @__PURE__ */ t.createElement(
    a,
    {
      className: i(n()),
      onClick: e.onClick
    },
    /* @__PURE__ */ t.createElement("span", { className: "ts:flex ts:flex-row ts:gap-1 ts:items-center" }, "Copy Address")
  );
}
export {
  u as CopyToClipboardButton,
  n as copyToClipboardButtonVariants
};
//# sourceMappingURL=index.es5.js.map
