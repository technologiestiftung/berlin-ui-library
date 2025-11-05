import { j as s } from "./index.es4.js";
import * as o from "react";
import * as a from "@radix-ui/react-tabs";
import { cva as l } from "class-variance-authority";
import { cn as n } from "./index.es27.js";
const j = a.Root, u = l("flex w-auto items-center justify-start", {
  variants: {
    variant: {
      default: "h-12 gap-1",
      module: "margin-0 mb-[30px] border-b border-grey-dark p-0"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), f = l(
  "ring-offset-background focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center text-base whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[state=active]:text-foreground h-full bg-grey-dark px-3 py-1.5 data-[state=active]:bg-block-heavy data-[state=active]:shadow-[inset_0_4px_0_0_var(--color-red)]",
        module: "mr-[20px] mb-0 border-b-4 border-transparent p-2 text-text-lightest last:mr-0 data-[state=active]:border-red data-[state=active]:font-bold data-[state=active]:text-black data-[state=active]:no-underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), m = o.forwardRef(({ className: i, variant: t, ...r }, e) => /* @__PURE__ */ s.jsx(
  a.List,
  {
    ref: e,
    className: n(u({ variant: t, className: i })),
    ...r
  }
));
m.displayName = a.List.displayName;
const v = o.forwardRef(({ className: i, variant: t, tabColor: r, children: e, ...d }, c) => {
  if (t === "module")
    return /* @__PURE__ */ s.jsx(
      a.Trigger,
      {
        ref: c,
        className: n(f({ variant: t, className: i })),
        ...d,
        children: /* @__PURE__ */ s.jsxs("span", { className: "relative", children: [
          /* @__PURE__ */ s.jsx(
            "span",
            {
              className: "invisible absolute left-0 font-bold",
              "aria-hidden": "true",
              children: e
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "relative", children: e })
        ] })
      }
    );
  const b = r ? { "--tab-color": r } : void 0;
  return /* @__PURE__ */ s.jsx(
    a.Trigger,
    {
      ref: c,
      style: b,
      className: n(
        f({ variant: t }),
        "data-[state=active]:shadow-[inset_0_4px_0_0_var(--tab-color)]",
        i
      ),
      ...d,
      children: e
    }
  );
});
v.displayName = a.Trigger.displayName;
const g = l(
  "ring-offset-background focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "bg-block-heavy p-6",
        module: "clear-left"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), p = o.forwardRef(({ className: i, variant: t, ...r }, e) => /* @__PURE__ */ s.jsx(
  a.Content,
  {
    ref: e,
    className: n(g({ variant: t, className: i })),
    ...r
  }
));
p.displayName = a.Content.displayName;
export {
  j as Tabs,
  p as TabsContent,
  m as TabsList,
  v as TabsTrigger
};
//# sourceMappingURL=index.es18.js.map
