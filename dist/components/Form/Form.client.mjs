import { jsx as i, jsxs as u } from "react/jsx-runtime";
import * as m from "react";
import { Slot as p } from "@radix-ui/react-slot";
import { useFormContext as F, FormProvider as x, Controller as I } from "react-hook-form";
import { cva as g } from "class-variance-authority";
import { cn as d } from "../../lib/utils.mjs";
import { Label as b } from "../Label/Label.mjs";
const k = x, l = m.createContext(
  {}
), L = (e) => {
  const { name: t, rules: r, ...o } = e, s = !!r?.required;
  return /* @__PURE__ */ i(l.Provider, { value: { name: t, required: s }, children: /* @__PURE__ */ i(I, { name: t, rules: r, ...o }) });
}, c = () => {
  const e = m.useContext(l), t = m.useContext(f), { getFieldState: r, formState: o } = F(), s = r(e.name, o);
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
), v = g("space-y-1", {
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
}), h = m.forwardRef(({ className: e, layout: t, background: r, ...o }, s) => {
  const n = m.useId();
  return /* @__PURE__ */ i(f.Provider, { value: { id: n }, children: /* @__PURE__ */ i(
    "div",
    {
      ref: s,
      className: d(v({ layout: t, background: r, className: e })),
      ...o
    }
  ) });
});
h.displayName = "FormItem";
const y = m.forwardRef(({ className: e, children: t, ...r }, o) => {
  const { error: s, formItemId: n, required: a } = c();
  return /* @__PURE__ */ u(
    b,
    {
      ref: o,
      className: d(s && "text-destructive font-bold", e),
      htmlFor: n,
      ...r,
      children: [
        t,
        a && /* @__PURE__ */ i("span", { className: "text-destructive ml-1", children: "*" })
      ]
    }
  );
});
y.displayName = "FormLabel";
const C = m.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: o, formDescriptionId: s, formMessageId: n } = c();
  return /* @__PURE__ */ i(
    p,
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
C.displayName = "FormControl";
const N = m.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: o } = c();
  return /* @__PURE__ */ i(
    "p",
    {
      ref: r,
      id: o,
      className: d("text-sm text-text-lightest", e),
      ...t
    }
  );
});
N.displayName = "FormDescription";
const w = m.forwardRef(({ className: e, children: t, ...r }, o) => {
  const { error: s, formMessageId: n } = c(), a = s ? String(s?.message ?? "") : t;
  return a ? /* @__PURE__ */ i(
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
w.displayName = "FormMessage";
export {
  k as Form,
  C as FormControl,
  N as FormDescription,
  L as FormField,
  h as FormItem,
  y as FormLabel,
  w as FormMessage,
  c as useFormField
};
//# sourceMappingURL=Form.client.mjs.map
