import * as e from "react";
import * as t from "@radix-ui/react-dialog";
import { cva as m } from "class-variance-authority";
import { cn as s } from "./index.es11.js";
import { Button as c } from "./index.es8.js";
const v = t.Root, h = t.Trigger, E = t.Close, f = t.Portal, n = e.forwardRef(({ className: a, ...o }, r) => /* @__PURE__ */ e.createElement(
  t.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-black/40 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
      a
    ),
    ...o,
    ref: r
  }
));
n.displayName = t.Overlay.displayName;
const p = m(
  "fixed z-50 gap-4 bg-background pt-[0.7em] shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=closed]:animate-out data-[state=open]:duration-500 data-[state=open]:animate-in",
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
), u = e.forwardRef(
  ({ side: a = "right", size: o = "default", className: r, children: l, ...i }, d) => /* @__PURE__ */ e.createElement(f, null, /* @__PURE__ */ e.createElement(n, null), /* @__PURE__ */ e.createElement(
    t.Content,
    {
      ref: d,
      className: s(
        p({ side: a, size: o }),
        "overflow-y-auto",
        r
      ),
      ...i
    },
    l,
    /* @__PURE__ */ e.createElement(t.Close, { className: "absolute top-1 right-4 cursor-pointer rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary" }, /* @__PURE__ */ e.createElement(c, { variant: "close" }), /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, "Close"))
  ))
);
u.displayName = t.Content.displayName;
const g = ({
  className: a,
  ...o
}) => /* @__PURE__ */ e.createElement(
  "div",
  {
    className: s(
      "flex flex-col space-y-2 text-center sm:text-left",
      a
    ),
    ...o
  }
);
g.displayName = "DrawerHeader";
const w = ({
  className: a,
  ...o
}) => /* @__PURE__ */ e.createElement(
  "div",
  {
    className: s(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      a
    ),
    ...o
  }
);
w.displayName = "DrawerFooter";
const y = e.forwardRef(({ className: a, ...o }, r) => /* @__PURE__ */ e.createElement(
  t.Title,
  {
    ref: r,
    className: s("px-[0.8rem] text-xl font-bold text-foreground", a),
    ...o
  }
));
y.displayName = t.Title.displayName;
const x = e.forwardRef(({ className: a, ...o }, r) => /* @__PURE__ */ e.createElement(
  t.Description,
  {
    ref: r,
    className: s("text-sm text-muted-foreground", a),
    ...o
  }
));
x.displayName = t.Description.displayName;
export {
  v as Drawer,
  E as DrawerClose,
  u as DrawerContent,
  x as DrawerDescription,
  w as DrawerFooter,
  g as DrawerHeader,
  n as DrawerOverlay,
  f as DrawerPortal,
  y as DrawerTitle,
  h as DrawerTrigger
};
//# sourceMappingURL=index.es6.js.map
