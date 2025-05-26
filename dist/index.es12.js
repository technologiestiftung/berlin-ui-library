import { j as s } from "./index.es4.js";
import { FormField as b, FormItem as j, FormLabel as p, FormControl as g, FormDescription as F, FormMessage as C } from "./index.es11.js";
import { Input as h } from "./index.es14.js";
import { Textarea as N } from "./index.es26.js";
import { Select as $, SelectTrigger as f, SelectValue as w, SelectContent as S, SelectGroup as T, SelectItem as k } from "./index.es27.js";
import { Checkbox as x } from "./index.es17.js";
import { RadioGroup as D, RadioGroupItem as V } from "./index.es28.js";
import { Info as I } from "lucide-react";
import { TooltipProvider as R, Tooltip as A, TooltipTrigger as E, TooltipContent as G } from "./index.es29.js";
import { Label as m } from "./index.es15.js";
const z = (a, e) => {
  const { name: t, description: c, placeholder: n, isDisabled: l } = a, d = e.value !== void 0 ? e.value : "";
  return /* @__PURE__ */ s.jsx(
    h,
    {
      ...e,
      type: "number",
      min: a.min,
      max: a.max,
      step: a.step || 1,
      placeholder: n || `Enter ${c || t}`,
      disabled: l,
      onChange: (r) => {
        const o = r.target.value;
        o === "" ? e.onChange("") : e.onChange(Number(o));
      },
      value: d
    }
  );
}, L = (a, e) => {
  const { name: t, description: c, placeholder: n, isDisabled: l } = a;
  return /* @__PURE__ */ s.jsx(
    h,
    {
      ...e,
      type: a.type,
      placeholder: n || `Enter ${c || t}`,
      disabled: l
    }
  );
}, q = (a, e) => {
  const { name: t, description: c, placeholder: n, isDisabled: l } = a;
  return /* @__PURE__ */ s.jsx(
    N,
    {
      ...e,
      placeholder: n || `Enter ${c || t}`,
      disabled: l
    }
  );
}, y = (a, e) => {
  const { name: t, description: c, options: n, isDisabled: l } = a, d = e.value !== void 0 ? e.value : "";
  return /* @__PURE__ */ s.jsxs(
    $,
    {
      disabled: l,
      onValueChange: e.onChange,
      value: d,
      defaultValue: d,
      children: [
        /* @__PURE__ */ s.jsx(f, { className: "w-full", children: /* @__PURE__ */ s.jsx(w, { placeholder: `Select ${c || t}` }) }),
        /* @__PURE__ */ s.jsx(S, { children: /* @__PURE__ */ s.jsx(T, { children: n?.map((r) => /* @__PURE__ */ s.jsx(k, { value: r.value, children: r.label || r.value }, r.value)) }) })
      ]
    }
  );
}, M = (a, e) => {
  const { name: t, isDisabled: c, options: n, direction: l } = a;
  if (n && Array.isArray(n) && n.length > 0) {
    let d = [];
    return Array.isArray(e.value) ? d = e.value : e.value && (d = [e.value]), /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `flex ${l === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-2"}`,
        children: n.map((r) => {
          const o = d.includes(r.value);
          return /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ s.jsx(
              x,
              {
                id: `${e.name}-${r.value}`,
                disabled: c,
                checked: o,
                onCheckedChange: (v) => {
                  const i = [...d];
                  if (v)
                    i.includes(r.value) || i.push(r.value);
                  else {
                    const u = i.indexOf(r.value);
                    u > -1 && i.splice(u, 1);
                  }
                  e.onChange(i);
                }
              }
            ),
            /* @__PURE__ */ s.jsx(
              m,
              {
                htmlFor: `${e.name}-${r.value}`,
                className: "leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
                children: r.label || r.value
              }
            )
          ] }, r.value);
        })
      }
    );
  }
  return /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ s.jsx(
      x,
      {
        ...e,
        id: e.name,
        disabled: c,
        checked: e.value,
        onCheckedChange: (d) => {
          e.onChange(d);
        }
      }
    ),
    /* @__PURE__ */ s.jsx(
      m,
      {
        htmlFor: e.name,
        className: "text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
        children: t
      }
    )
  ] });
}, O = (a, e) => {
  const { options: t, isDisabled: c, direction: n } = a;
  return /* @__PURE__ */ s.jsx(
    D,
    {
      ...e,
      disabled: c,
      className: `flex ${n === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-1"}`,
      children: t?.map((l) => /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ s.jsx(
          V,
          {
            id: `${e.name}-${l.value}`,
            value: l.value
          }
        ),
        /* @__PURE__ */ s.jsx(
          m,
          {
            htmlFor: `${e.name}-${l.value}`,
            className: "leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
            children: l.label || l.value
          }
        )
      ] }, l.value))
    }
  );
}, W = (a, e) => {
  const { type: t } = a;
  switch (t) {
    case "text":
    case "email":
    case "password":
    case "url":
    case "tel":
    case "date":
    case "datetime-local":
      return L(a, e);
    case "textarea":
      return q(a, e);
    case "number":
      return z(a, e);
    case "checkbox":
      return M(a, e);
    case "radio":
      return O(a, e);
    case "select":
      return y(a, e);
    default:
      return null;
  }
}, B = (a) => /* @__PURE__ */ s.jsx(R, { children: /* @__PURE__ */ s.jsxs(A, { children: [
  /* @__PURE__ */ s.jsx(E, { asChild: !0, children: /* @__PURE__ */ s.jsx(I, { className: "text-muted-foreground h-4 w-4" }) }),
  /* @__PURE__ */ s.jsx(G, { children: /* @__PURE__ */ s.jsx("p", { children: a }) })
] }) });
function ee({
  formProperty: a,
  form: e
}) {
  const { id: t, name: c, description: n, isRequired: l, helperText: d } = a;
  return /* @__PURE__ */ s.jsx(
    b,
    {
      control: e.control,
      name: t,
      render: ({ field: r }) => /* @__PURE__ */ s.jsxs(j, { children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ s.jsxs(p, { className: "relative font-bold", children: [
            c,
            l && /* @__PURE__ */ s.jsx("span", { className: "absolute -top-2 ml-1 text-[1.75em] text-decorative-destructive", children: "*" })
          ] }),
          d && B(d)
        ] }),
        /* @__PURE__ */ s.jsx(g, { children: W(a, r) }),
        /* @__PURE__ */ s.jsx(F, { className: "text-sm text-text-lightest", children: n }),
        /* @__PURE__ */ s.jsx(C, {})
      ] })
    },
    t
  );
}
export {
  ee as FormFieldWrapper
};
//# sourceMappingURL=index.es12.js.map
