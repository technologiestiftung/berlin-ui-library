import { j as a } from "./index.es4.js";
import { Checkbox as h } from "./index.es17.js";
import { FormField as p, FormItem as j, FormLabel as g, FormControl as F, FormDescription as v, FormMessage as $ } from "./index.es11.js";
import { Input as b } from "./index.es14.js";
import { Label as x } from "./index.es15.js";
import { RadioGroup as C, RadioGroupItem as N } from "./index.es50.js";
import { Select as w, SelectTrigger as S, SelectValue as I, SelectContent as T, SelectGroup as k, SelectItem as D } from "./index.es51.js";
import { Textarea as V } from "./index.es52.js";
const f = (s, e) => {
  const { name: c, description: d, placeholder: t, isDisabled: r, helperText: n, id: l } = s, o = e.value !== void 0 ? e.value : "", u = n ? `${l}Help` : void 0;
  return /* @__PURE__ */ a.jsx(
    b,
    {
      ...e,
      type: "number",
      min: s.min,
      max: s.max,
      step: s.step || 1,
      placeholder: t || `Enter ${d || c}`,
      disabled: r,
      "aria-describedby": u,
      onChange: (i) => {
        const m = i.target.value;
        m === "" ? e.onChange("") : e.onChange(Number(m));
      },
      value: o
    }
  );
}, y = (s, e) => {
  const { name: c, description: d, placeholder: t, isDisabled: r, helperText: n, id: l } = s, o = n ? `${l}Help` : void 0;
  return /* @__PURE__ */ a.jsx(
    b,
    {
      ...e,
      type: s.type,
      placeholder: t || `Enter ${d || c}`,
      disabled: r,
      "aria-describedby": o
    }
  );
}, R = (s, e) => {
  const { name: c, description: d, placeholder: t, isDisabled: r, helperText: n, id: l } = s, o = n ? `${l}Help` : void 0;
  return /* @__PURE__ */ a.jsx(
    V,
    {
      ...e,
      placeholder: t || `Enter ${d || c}`,
      disabled: r,
      "aria-describedby": o
    }
  );
}, A = (s, e) => {
  const { name: c, description: d, options: t, isDisabled: r, helperText: n, id: l } = s, o = e.value !== void 0 ? e.value : "", u = n ? `${l}Help` : void 0;
  return /* @__PURE__ */ a.jsxs(
    w,
    {
      disabled: r,
      onValueChange: e.onChange,
      value: o,
      defaultValue: o,
      children: [
        /* @__PURE__ */ a.jsx(S, { className: "w-full", "aria-describedby": u, children: /* @__PURE__ */ a.jsx(I, { placeholder: `Select ${d || c}` }) }),
        /* @__PURE__ */ a.jsx(T, { children: /* @__PURE__ */ a.jsx(k, { children: t?.map((i) => /* @__PURE__ */ a.jsx(D, { value: i.value, children: i.label || i.value }, i.value)) }) })
      ]
    }
  );
}, E = (s, e) => {
  const { name: c, isDisabled: d, options: t, direction: r } = s;
  if (t && Array.isArray(t) && t.length > 0) {
    let n = [];
    return Array.isArray(e.value) ? n = e.value : e.value && (n = [e.value]), /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `flex ${r === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-2"}`,
        children: t.map((l) => {
          const o = n.includes(l.value);
          return /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ a.jsx(
              h,
              {
                id: `${e.name}-${l.value}`,
                disabled: d,
                checked: o,
                onCheckedChange: (u) => {
                  const i = [...n];
                  if (u)
                    i.includes(l.value) || i.push(l.value);
                  else {
                    const m = i.indexOf(l.value);
                    m > -1 && i.splice(m, 1);
                  }
                  e.onChange(i);
                }
              }
            ),
            /* @__PURE__ */ a.jsx(
              x,
              {
                htmlFor: `${e.name}-${l.value}`,
                className: "leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
                children: l.label || l.value
              }
            )
          ] }, l.value);
        })
      }
    );
  }
  return /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ a.jsx(
      h,
      {
        ...e,
        id: e.name,
        disabled: d,
        checked: e.value,
        onCheckedChange: (n) => {
          e.onChange(n);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(
      x,
      {
        htmlFor: e.name,
        className: "text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
        children: c
      }
    )
  ] });
}, G = (s, e) => {
  const { options: c, isDisabled: d, direction: t } = s;
  return /* @__PURE__ */ a.jsx(
    C,
    {
      value: e.value,
      onValueChange: e.onChange,
      disabled: d,
      className: `flex ${t === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-1"}`,
      children: c?.map((r) => /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ a.jsx(
          N,
          {
            id: `${e.name}-${r.value}`,
            value: r.value
          }
        ),
        /* @__PURE__ */ a.jsx(
          x,
          {
            htmlFor: `${e.name}-${r.value}`,
            className: "leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
            children: r.label || r.value
          }
        )
      ] }, r.value))
    }
  );
}, H = (s, e) => {
  const { type: c } = s;
  switch (c) {
    case "text":
    case "email":
    case "password":
    case "url":
    case "tel":
    case "date":
    case "datetime-local":
      return y(s, e);
    case "textarea":
      return R(s, e);
    case "number":
      return f(s, e);
    case "checkbox":
      return E(s, e);
    case "radio":
      return G(s, e);
    case "select":
      return A(s, e);
    default:
      return null;
  }
};
function K({
  formProperty: s,
  form: e
}) {
  const { id: c, name: d, description: t, isRequired: r, helperText: n } = s;
  return /* @__PURE__ */ a.jsx(
    p,
    {
      control: e.control,
      name: c,
      render: ({ field: l }) => /* @__PURE__ */ a.jsxs(j, { children: [
        /* @__PURE__ */ a.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ a.jsxs(g, { className: "font-bold", children: [
          d,
          r && /* @__PURE__ */ a.jsx("span", { className: "ml-1 align-top text-[1.75em] leading-none text-decorative-destructive", children: "*" })
        ] }) }),
        /* @__PURE__ */ a.jsx(F, { children: H(s, l) }),
        n && /* @__PURE__ */ a.jsx(v, { className: "text-sm text-text-lightest", children: n }),
        t && /* @__PURE__ */ a.jsx(v, { className: "text-sm text-text-lightest", children: t }),
        /* @__PURE__ */ a.jsx($, {})
      ] })
    },
    c
  );
}
export {
  K as FormFieldWrapper
};
//# sourceMappingURL=index.es12.js.map
