import { jsx as l, jsxs as i } from "react/jsx-runtime";
import { FormField as p, FormItem as g, FormLabel as F, FormControl as C, FormDescription as N, FormMessage as $ } from "../Form/Form.client.mjs";
import { Input as v } from "../Input/Input.mjs";
import { Textarea as f } from "../Textarea/Textarea.mjs";
import { Select as w, SelectTrigger as S, SelectValue as T, SelectContent as k, SelectGroup as D, SelectItem as V } from "../Select/Select.mjs";
import { Checkbox as x } from "../Checkbox/Checkbox.mjs";
import { RadioGroup as I, RadioGroupItem as A } from "../RadioGroup/RadioGroup.mjs";
import { Info as G } from "lucide-react";
import { TooltipProvider as R, Tooltip as j, TooltipTrigger as E, TooltipContent as z } from "../Tooltip/Tooltip.mjs";
import { Label as u } from "../Label/Label.mjs";
const L = (a, e) => {
  const { name: n, description: c, placeholder: t, isDisabled: r } = a, d = e.value !== void 0 ? e.value : "";
  return /* @__PURE__ */ l(
    v,
    {
      ...e,
      type: "number",
      min: a.min,
      max: a.max,
      step: a.step || 1,
      placeholder: t || `Enter ${c || n}`,
      disabled: r,
      onChange: (s) => {
        const m = s.target.value;
        m === "" ? e.onChange("") : e.onChange(Number(m));
      },
      value: d
    }
  );
}, q = (a, e) => {
  const { name: n, description: c, placeholder: t, isDisabled: r } = a;
  return /* @__PURE__ */ l(
    v,
    {
      ...e,
      type: a.type,
      placeholder: t || `Enter ${c || n}`,
      disabled: r
    }
  );
}, y = (a, e) => {
  const { name: n, description: c, placeholder: t, isDisabled: r } = a;
  return /* @__PURE__ */ l(
    f,
    {
      ...e,
      placeholder: t || `Enter ${c || n}`,
      disabled: r
    }
  );
}, M = (a, e) => {
  const { name: n, description: c, options: t, isDisabled: r } = a, d = e.value !== void 0 ? e.value : "";
  return /* @__PURE__ */ i(
    w,
    {
      disabled: r,
      onValueChange: e.onChange,
      value: d,
      defaultValue: d,
      children: [
        /* @__PURE__ */ l(S, { className: "w-full", children: /* @__PURE__ */ l(T, { placeholder: `Select ${c || n}` }) }),
        /* @__PURE__ */ l(k, { children: /* @__PURE__ */ l(D, { children: t?.map((s) => /* @__PURE__ */ l(V, { value: s.value, children: s.label || s.value }, s.value)) }) })
      ]
    }
  );
}, O = (a, e) => {
  const { name: n, isDisabled: c, options: t, direction: r } = a;
  if (t && Array.isArray(t) && t.length > 0) {
    let d = [];
    return Array.isArray(e.value) ? d = e.value : e.value && (d = [e.value]), /* @__PURE__ */ l(
      "div",
      {
        className: `flex ${r === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-2"}`,
        children: t.map((s) => {
          const m = d.includes(s.value);
          return /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ l(
              x,
              {
                id: `${e.name}-${s.value}`,
                disabled: c,
                checked: m,
                onCheckedChange: (b) => {
                  const o = [...d];
                  if (b)
                    o.includes(s.value) || o.push(s.value);
                  else {
                    const h = o.indexOf(s.value);
                    h > -1 && o.splice(h, 1);
                  }
                  e.onChange(o);
                }
              }
            ),
            /* @__PURE__ */ l(
              u,
              {
                htmlFor: `${e.name}-${s.value}`,
                className: "text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
                children: s.label || s.value
              }
            )
          ] }, s.value);
        })
      }
    );
  }
  return /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ l(
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
    /* @__PURE__ */ l(
      u,
      {
        htmlFor: e.name,
        className: "text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
        children: n
      }
    )
  ] });
}, W = (a, e) => {
  const { options: n, isDisabled: c, direction: t } = a;
  return /* @__PURE__ */ l(
    I,
    {
      ...e,
      disabled: c,
      className: `flex ${t === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-1"}`,
      children: n?.map((r) => /* @__PURE__ */ i("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ l(
          A,
          {
            id: `${e.name}-${r.value}`,
            value: r.value
          }
        ),
        /* @__PURE__ */ l(
          u,
          {
            htmlFor: `${e.name}-${r.value}`,
            className: "leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
            children: r.label || r.value
          }
        )
      ] }, r.value))
    }
  );
}, B = (a, e) => {
  const { type: n } = a;
  switch (n) {
    case "text":
    case "email":
    case "password":
    case "url":
    case "tel":
    case "date":
    case "datetime-local":
      return q(a, e);
    case "textarea":
      return y(a, e);
    case "number":
      return L(a, e);
    case "checkbox":
      return O(a, e);
    case "radio":
      return W(a, e);
    case "select":
      return M(a, e);
    default:
      return null;
  }
}, H = (a) => /* @__PURE__ */ l(R, { children: /* @__PURE__ */ i(j, { children: [
  /* @__PURE__ */ l(E, { asChild: !0, children: /* @__PURE__ */ l(G, { className: "text-muted-foreground h-4 w-4" }) }),
  /* @__PURE__ */ l(z, { children: /* @__PURE__ */ l("p", { children: a }) })
] }) });
function ae({
  formProperty: a,
  form: e
}) {
  const { id: n, name: c, description: t, isRequired: r, helperText: d } = a;
  return /* @__PURE__ */ l(
    p,
    {
      control: e.control,
      name: n,
      render: ({ field: s }) => /* @__PURE__ */ i(g, { children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ i(F, { className: "font-bold", children: [
            c,
            r && /* @__PURE__ */ l("span", { className: "ml-1 text-decorative-destructive", children: "*" })
          ] }),
          d && H(d)
        ] }),
        /* @__PURE__ */ l(C, { children: B(a, s) }),
        /* @__PURE__ */ l(N, { className: "text-sm text-text-lightest", children: t }),
        /* @__PURE__ */ l($, {})
      ] })
    },
    n
  );
}
export {
  ae as FormFieldWrapper
};
//# sourceMappingURL=FormFieldWrapper.mjs.map
