import { j as a } from "./index.es4.js";
import * as n from "react";
import { Slot as u } from "@radix-ui/react-slot";
import { useFormContext as p, FormProvider as x, Controller as F } from "react-hook-form";
import { cva as b } from "class-variance-authority";
import { cn as m } from "./index.es24.js";
import { Label as g } from "./index.es15.js";
const M = x, l = n.createContext(
  {}
), S = (e) => {
  const { name: o, rules: t, ...r } = e, i = !!t?.required;
  return /* @__PURE__ */ a.jsx(l.Provider, { value: { name: o, required: i }, children: /* @__PURE__ */ a.jsx(F, { name: o, rules: t, ...r }) });
}, c = () => {
  const e = n.useContext(l), o = n.useContext(f), { getFieldState: t, formState: r } = p(), i = t(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: s } = o;
  return {
    id: s,
    name: e.name,
    required: e.required,
    formItemId: `${s}-form-item`,
    formDescriptionId: `${s}-form-item-description`,
    formMessageId: `${s}-form-item-message`,
    ...i
  };
}, f = n.createContext(
  {}
), I = b("space-y-1", {
  variants: {
    layout: {
      vertical: "flex flex-col space-y-1",
      horizontal: "flex items-center space-x-4"
    },
    background: {
      white: "bg-white",
      gray: "bg-block-colored",
      transparent: "bg-transparent",
      none: ""
    }
  },
  defaultVariants: {
    layout: "vertical",
    background: "none"
  }
}), v = n.forwardRef(({ className: e, layout: o, background: t, ...r }, i) => {
  const s = n.useId();
  return /* @__PURE__ */ a.jsx(f.Provider, { value: { id: s }, children: /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: i,
      className: m(I({ layout: o, background: t, className: e })),
      ...r
    }
  ) });
});
v.displayName = "FormItem";
const h = n.forwardRef(({ className: e, children: o, ...t }, r) => {
  const { formItemId: i, required: s } = c();
  return /* @__PURE__ */ a.jsxs(g, { ref: r, className: m(e), htmlFor: i, ...t, children: [
    o,
    s && /* @__PURE__ */ a.jsx("span", { className: "ml-1 text-[1.75em] text-decorative-destructive", children: "*" })
  ] });
});
h.displayName = "FormLabel";
const w = n.forwardRef(({ className: e, ...o }, t) => {
  const { error: r, formItemId: i, formDescriptionId: s, formMessageId: d } = c();
  return /* @__PURE__ */ a.jsx(
    u,
    {
      ref: t,
      id: i,
      className: m(
        "p-2",
        r && "border-2 border-l-[6px] border-decorative-destructive",
        e
      ),
      "aria-describedby": r ? `${s} ${d}` : `${s}`,
      "aria-invalid": !!r,
      ...o
    }
  );
});
w.displayName = "FormControl";
const y = n.forwardRef(({ className: e, ...o }, t) => {
  const { formDescriptionId: r } = c();
  return /* @__PURE__ */ a.jsx(
    "p",
    {
      ref: t,
      id: r,
      className: m("text-text-lightest", e),
      ...o
    }
  );
});
y.displayName = "FormDescription";
const C = n.forwardRef(({ className: e, children: o, ...t }, r) => {
  const { error: i, formMessageId: s } = c(), d = i ? String(i?.message ?? "") : o;
  return d ? /* @__PURE__ */ a.jsx(
    "p",
    {
      ref: r,
      id: s,
      className: m(
        "mb-6 block w-fit min-w-full border border-red-50 bg-red-50 p-[18px] text-red-800",
        e
      ),
      ...t,
      children: d
    }
  ) : null;
});
C.displayName = "FormMessage";
export {
  M as Form,
  w as FormControl,
  y as FormDescription,
  S as FormField,
  v as FormItem,
  h as FormLabel,
  C as FormMessage,
  c as useFormField
};
//# sourceMappingURL=index.es11.js.map
