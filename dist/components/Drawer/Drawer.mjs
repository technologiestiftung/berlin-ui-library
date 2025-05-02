import { jsx as o, jsxs as n } from "react/jsx-runtime";
import * as i from "react";
import * as e from "@radix-ui/react-dialog";
import { cva as f } from "class-variance-authority";
import { cn as s } from "../../lib/utils.mjs";
import { Button as p } from "../Button/Button.mjs";
const R = e.Root, T = e.Trigger, z = e.Close, u = e.Portal, d = i.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ o(
  e.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-black/40 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
      t
    ),
    ...a,
    ref: r
  }
));
d.displayName = e.Overlay.displayName;
const w = f(
  "fixed z-50 gap-4 bg-white pt-[0.7em] shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=closed]:animate-out data-[state=open]:duration-500 data-[state=open]:animate-in",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-[35rem] border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        right: "inset-y-0 right-0 h-full w-[35rem] border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
      },
      size: {
        default: "",
        large: "w-[90vw]"
      }
    },
    defaultVariants: {
      side: "right",
      size: "default"
    }
  }
), g = i.forwardRef(
  ({ side: t = "right", size: a = "default", className: r, children: l, ...c }, m) => /* @__PURE__ */ n(u, { children: [
    /* @__PURE__ */ o(d, {}),
    /* @__PURE__ */ n(
      e.Content,
      {
        ref: m,
        className: s(
          w({ side: t, size: a }),
          "overflow-y-auto",
          r
        ),
        ...c,
        children: [
          l,
          /* @__PURE__ */ n(e.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-1 right-4 cursor-pointer rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none", children: [
            /* @__PURE__ */ o(p, { variant: "close" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] })
);
g.displayName = e.Content.displayName;
const y = ({
  className: t,
  ...a
}) => /* @__PURE__ */ o(
  "div",
  {
    className: s(
      "flex flex-col space-y-2 text-center sm:text-left",
      t
    ),
    ...a
  }
);
y.displayName = "DrawerHeader";
const x = ({
  className: t,
  ...a
}) => /* @__PURE__ */ o(
  "div",
  {
    className: s(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...a
  }
);
x.displayName = "DrawerFooter";
const N = i.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ o(
  e.Title,
  {
    ref: r,
    className: s("text-foreground px-[0.8rem] text-xl font-bold", t),
    ...a
  }
));
N.displayName = e.Title.displayName;
const b = i.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ o(
  e.Description,
  {
    ref: r,
    className: s("text-muted-foreground text-sm", t),
    ...a
  }
));
b.displayName = e.Description.displayName;
export {
  R as Drawer,
  z as DrawerClose,
  g as DrawerContent,
  b as DrawerDescription,
  x as DrawerFooter,
  y as DrawerHeader,
  d as DrawerOverlay,
  u as DrawerPortal,
  N as DrawerTitle,
  T as DrawerTrigger
};
//# sourceMappingURL=Drawer.mjs.map
