import { j as a } from "./index.es4.js";
import * as o from "react";
import * as e from "@radix-ui/react-tabs";
import { cn as r } from "./index.es21.js";
const b = e.Root, n = o.forwardRef(({ className: s, ...i }, t) => /* @__PURE__ */ a.jsx(
  e.List,
  {
    ref: t,
    className: r(
      "flex h-12 w-full items-center justify-center gap-1",
      s
    ),
    ...i
  }
));
n.displayName = e.List.displayName;
const f = o.forwardRef(({ className: s, ...i }, t) => /* @__PURE__ */ a.jsx(
  e.Trigger,
  {
    ref: t,
    className: r(
      "ring-offset-background focus-visible:ring-ring data-[state=active]:text-foreground inline-flex h-full flex-grow items-center justify-center bg-grey-dark px-3 py-1.5 text-base whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-block-heavy data-[state=active]:shadow-[inset_0_4px_0_0_var(--color-red)]",
      s
    ),
    ...i
  }
));
f.displayName = e.Trigger.displayName;
const l = o.forwardRef(({ className: s, ...i }, t) => /* @__PURE__ */ a.jsx(
  e.Content,
  {
    ref: t,
    className: r(
      "ring-offset-background focus-visible:ring-ring bg-block-heavy p-6 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
      s
    ),
    ...i
  }
));
l.displayName = e.Content.displayName;
export {
  b as Tabs,
  l as TabsContent,
  n as TabsList,
  f as TabsTrigger
};
//# sourceMappingURL=index.es18.js.map
