import { j as s } from "./index.es4.js";
import * as i from "react";
import * as e from "@radix-ui/react-dialog";
import { cva as c } from "class-variance-authority";
import { cn as r } from "./index.es20.js";
import f from "./index.es27.js";
const v = e.Root, C = e.Trigger, R = e.Close, p = e.Portal, n = i.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ s.jsx(
  e.Overlay,
  {
    className: r(
      "fixed inset-0 z-50 bg-black/40 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
      t
    ),
    ...a,
    ref: o
  }
));
n.displayName = e.Overlay.displayName;
const x = c(
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
), u = i.forwardRef(
  ({ side: t = "right", size: a = "default", className: o, children: d, ...l }, m) => /* @__PURE__ */ s.jsxs(p, { children: [
    /* @__PURE__ */ s.jsx(n, {}),
    /* @__PURE__ */ s.jsxs(
      e.Content,
      {
        ref: m,
        className: r(
          x({ side: t, size: a }),
          "overflow-y-auto",
          o
        ),
        ...l,
        children: [
          d,
          /* @__PURE__ */ s.jsxs(e.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-1 right-4 cursor-pointer rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none", children: [
            /* @__PURE__ */ s.jsx(f, { className: "m-2 text-black" }),
            /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] })
);
u.displayName = e.Content.displayName;
const g = ({
  className: t,
  ...a
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: r(
      "flex flex-col space-y-2 text-center sm:text-left",
      t
    ),
    ...a
  }
);
g.displayName = "DrawerHeader";
const w = ({
  className: t,
  ...a
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: r(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...a
  }
);
w.displayName = "DrawerFooter";
const y = i.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ s.jsx(
  e.Title,
  {
    ref: o,
    className: r("text-foreground px-[0.8rem] text-xl font-bold", t),
    ...a
  }
));
y.displayName = e.Title.displayName;
const N = i.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ s.jsx(
  e.Description,
  {
    ref: o,
    className: r("text-muted-foreground text-sm", t),
    ...a
  }
));
N.displayName = e.Description.displayName;
export {
  v as Drawer,
  R as DrawerClose,
  u as DrawerContent,
  N as DrawerDescription,
  w as DrawerFooter,
  g as DrawerHeader,
  n as DrawerOverlay,
  p as DrawerPortal,
  y as DrawerTitle,
  C as DrawerTrigger
};
//# sourceMappingURL=index.es6.js.map
