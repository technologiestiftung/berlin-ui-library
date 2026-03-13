import { j as a } from "./index.es4.js";
import { Checkbox as h } from "./index.es17.js";
import { FormField as j, FormItem as g, FormLabel as p, FormControl as F, FormDescription as C, FormMessage as N } from "./index.es11.js";
import { Input as v } from "./index.es14.js";
import { Label as m } from "./index.es15.js";
import { RadioGroup as $, RadioGroupItem as f } from "./index.es38.js";
import { Select as w, SelectTrigger as S, SelectValue as k, SelectContent as D, SelectGroup as V, SelectItem as R } from "./index.es39.js";
import { Textarea as T } from "./index.es40.js";
import { cn as A } from "./index.es28.js";
const E = (s, e) => {
  const { name: r, description: i, placeholder: l, isDisabled: n } = s, c = e.value !== void 0 ? e.value : "";
  return /* @__PURE__ */ a.jsx(
    v,
    {
      ...e,
      type: "number",
      min: s.min,
      max: s.max,
      step: s.step || 1,
      placeholder: l || `Enter ${i || r}`,
      disabled: n,
      onChange: (t) => {
        const d = t.target.value;
        d === "" ? e.onChange("") : e.onChange(Number(d));
      },
      value: c
    }
  );
}, G = (s, e) => {
  const { name: r, description: i, placeholder: l, isDisabled: n } = s;
  return /* @__PURE__ */ a.jsx(
    v,
    {
      ...e,
      type: s.type,
      placeholder: l || `Enter ${i || r}`,
      disabled: n
    }
  );
}, b = ({ children: s }) => {
  if (typeof s != "string") return /* @__PURE__ */ a.jsx(a.Fragment, { children: s });
  const e = (r) => {
    const l = /<(b|i|u)>(.*?)<\/\1>/i.exec(r);
    if (!l || l.index === void 0)
      return [r];
    const [n, c, t] = l, d = r.slice(0, l.index), u = r.slice(l.index + n.length), o = c;
    return [
      ...d ? e(d) : [],
      /* @__PURE__ */ a.jsx(o, { children: e(t) }, l.index),
      ...u ? e(u) : []
    ];
  };
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: e(s) });
}, I = (s, e) => {
  const { name: r, description: i, placeholder: l, isDisabled: n } = s;
  return /* @__PURE__ */ a.jsx(
    T,
    {
      ...e,
      placeholder: l || `Enter ${i || r}`,
      disabled: n
    }
  );
}, y = (s, e) => {
  const { name: r, description: i, options: l, isDisabled: n } = s, c = e.value !== void 0 ? e.value : "";
  return /* @__PURE__ */ a.jsxs(
    w,
    {
      disabled: n,
      onValueChange: e.onChange,
      value: c,
      defaultValue: c,
      children: [
        /* @__PURE__ */ a.jsx(S, { className: "w-full", children: /* @__PURE__ */ a.jsx(k, { placeholder: `Select ${i || r}` }) }),
        /* @__PURE__ */ a.jsx(D, { children: /* @__PURE__ */ a.jsx(V, { children: l?.map((t) => /* @__PURE__ */ a.jsx(R, { value: t.value, children: t.label || t.value }, t.value)) }) })
      ]
    }
  );
}, z = (s, e) => {
  const { name: r, isDisabled: i, options: l, direction: n } = s;
  if (l && Array.isArray(l) && l.length > 0) {
    let c = [];
    return Array.isArray(e.value) ? c = e.value : e.value && (c = [e.value]), /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `flex ${n === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-2"}`,
        children: l.map((t) => {
          const d = c.includes(t.value);
          return /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ a.jsx(
              h,
              {
                id: `${e.name}-${t.value}`,
                disabled: i,
                checked: d,
                onCheckedChange: (u) => {
                  const o = [...c];
                  if (u)
                    o.includes(t.value) || o.push(t.value);
                  else {
                    const x = o.indexOf(t.value);
                    x > -1 && o.splice(x, 1);
                  }
                  e.onChange(o);
                }
              }
            ),
            /* @__PURE__ */ a.jsx(
              m,
              {
                htmlFor: `${e.name}-${t.value}`,
                className: "leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
                children: /* @__PURE__ */ a.jsx(b, { children: t.label || t.value })
              }
            )
          ] }, t.value);
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
        disabled: i,
        checked: e.value,
        onCheckedChange: (c) => {
          e.onChange(c);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(
      m,
      {
        htmlFor: e.name,
        className: "text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
        children: r
      }
    )
  ] });
}, L = (s, e) => {
  const { options: r, isDisabled: i, direction: l } = s;
  return /* @__PURE__ */ a.jsx(
    $,
    {
      value: e.value,
      onValueChange: e.onChange,
      disabled: i,
      className: `flex ${l === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-1"}`,
      children: r?.map((n) => /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ a.jsx(
          f,
          {
            id: `${e.name}-${n.value}`,
            value: n.value
          }
        ),
        /* @__PURE__ */ a.jsx(
          m,
          {
            htmlFor: `${e.name}-${n.value}`,
            className: "leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
            children: /* @__PURE__ */ a.jsx(b, { children: n.label || n.value })
          }
        )
      ] }, n.value))
    }
  );
}, M = (s, e) => {
  const { type: r } = s;
  switch (r) {
    case "text":
    case "email":
    case "password":
    case "url":
    case "tel":
    case "date":
    case "datetime-local":
      return G(s, e);
    case "textarea":
      return I(s, e);
    case "number":
      return E(s, e);
    case "checkbox":
      return z(s, e);
    case "radio":
      return L(s, e);
    case "select":
      return y(s, e);
    default:
      return null;
  }
};
function X({
  formProperty: s,
  form: e
}) {
  const { id: r, name: i, description: l, isRequired: n, helperText: c } = s;
  return /* @__PURE__ */ a.jsx(
    j,
    {
      control: e.control,
      name: r,
      render: ({ field: t }) => /* @__PURE__ */ a.jsxs(g, { children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: A(
              "flex items-center justify-between",
              c && "mb-0"
            ),
            children: /* @__PURE__ */ a.jsxs(p, { className: "font-bold", children: [
              i,
              n && /* @__PURE__ */ a.jsx("span", { className: "ml-1 align-top text-[1.75em] leading-none text-decorative-destructive", children: "*" })
            ] })
          }
        ),
        c && /* @__PURE__ */ a.jsx("p", { className: "text-[0.875rem] text-text-lightest", children: c }),
        /* @__PURE__ */ a.jsx(F, { children: M(s, t) }),
        l && /* @__PURE__ */ a.jsx(C, { className: "text-sm text-text-lightest", children: l }),
        /* @__PURE__ */ a.jsx(N, {})
      ] })
    },
    r
  );
}
export {
  X as FormFieldWrapper
};
//# sourceMappingURL=index.es12.js.map
