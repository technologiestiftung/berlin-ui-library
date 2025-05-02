import { j as i } from "./index.es4.js";
import * as m from "react";
import { Slot as u } from "@radix-ui/react-slot";
import { useFormContext as x, FormProvider as p, Controller as F } from "react-hook-form";
import { cva as I } from "class-variance-authority";
import { cn as d } from "./index.es16.js";
import { Label as g } from "./index.es15.js";
const M = p, l = m.createContext(
  {}
), S = (e) => {
  const { name: t, rules: r, ...o } = e, s = !!r?.required;
  return /* @__PURE__ */ i.jsx(l.Provider, { value: { name: t, required: s }, children: /* @__PURE__ */ i.jsx(F, { name: t, rules: r, ...o }) });
}, c = () => {
  const e = m.useContext(l), t = m.useContext(f), { getFieldState: r, formState: o } = x(), s = r(e.name, o);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: n } = t;
  return {
    id: n,
    name: e.name,
    required: e.required,
    formItemId: `${n}-form-item`,
    formDescriptionId: `${n}-form-item-description`,
    formMessageId: `${n}-form-item-message`,
    ...s
  };
}, f = m.createContext(
  {}
), b = I("space-y-1", {
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
}), v = m.forwardRef(({ className: e, layout: t, background: r, ...o }, s) => {
  const n = m.useId();
  return /* @__PURE__ */ i.jsx(f.Provider, { value: { id: n }, children: /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: s,
      className: d(b({ layout: t, background: r, className: e })),
      ...o
    }
  ) });
});
v.displayName = "FormItem";
const h = m.forwardRef(({ className: e, children: t, ...r }, o) => {
  const { error: s, formItemId: n, required: a } = c();
  return /* @__PURE__ */ i.jsxs(
    g,
    {
      ref: o,
      className: d(s && "text-destructive font-bold", e),
      htmlFor: n,
      ...r,
      children: [
        t,
        a && /* @__PURE__ */ i.jsx("span", { className: "text-destructive ml-1", children: "*" })
      ]
    }
  );
});
h.displayName = "FormLabel";
const y = m.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: o, formDescriptionId: s, formMessageId: n } = c();
  return /* @__PURE__ */ i.jsx(
    u,
    {
      ref: t,
      id: o,
      className: "p-2",
      "aria-describedby": r ? `${s} ${n}` : `${s}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
y.displayName = "FormControl";
const C = m.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: o } = c();
  return /* @__PURE__ */ i.jsx(
    "p",
    {
      ref: r,
      id: o,
      className: d("text-sm text-text-lightest", e),
      ...t
    }
  );
});
C.displayName = "FormDescription";
const j = m.forwardRef(({ className: e, children: t, ...r }, o) => {
  const { error: s, formMessageId: n } = c(), a = s ? String(s?.message ?? "") : t;
  return a ? /* @__PURE__ */ i.jsx(
    "p",
    {
      ref: o,
      id: n,
      className: d("text-destructive text-sm font-medium", e),
      ...r,
      children: a
    }
  ) : null;
});
j.displayName = "FormMessage";
export {
  M as Form,
  y as FormControl,
  C as FormDescription,
  S as FormField,
  v as FormItem,
  h as FormLabel,
  j as FormMessage,
  c as useFormField
};
//# sourceMappingURL=index.es11.js.map
