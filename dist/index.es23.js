import { j as e } from "./index.es4.js";
import * as m from "react";
import { cn as i } from "./index.es27.js";
import { Button as c } from "./index.es10.js";
const h = m.forwardRef(
  ({
    className: o,
    title: a,
    description: d,
    fileType: r,
    date: s,
    downloadUrl: t,
    buttonText: l = "Download",
    ...n
  }, x) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: x,
      className: i(
        "flex flex-col border-b border-grey-dark py-5 md:flex-row md:items-center md:justify-between",
        o
      ),
      ...n,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "md:flex-grow md:border-r md:border-grey-dark md:pr-[18px]", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "mb-[0.4em] text-[17px] leading-[1.353em] font-bold text-black", children: a }),
          d && /* @__PURE__ */ e.jsx("p", { className: "mr-2 mb-2 break-words", children: d }),
          (r || s) && /* @__PURE__ */ e.jsxs("div", { className: "mb-0 text-[14px] text-text-lightest md:mb-0", children: [
            r && /* @__PURE__ */ e.jsx("span", { children: r }),
            r && s && /* @__PURE__ */ e.jsx("span", { children: " – " }),
            s && /* @__PURE__ */ e.jsxs("span", { children: [
              "Stand: ",
              s
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "mt-4 md:mt-0 md:flex-shrink-0 md:pl-[18px]", children: /* @__PURE__ */ e.jsx("a", { href: t, className: "inline-block", children: /* @__PURE__ */ e.jsx(
          c,
          {
            variant: "download",
            className: "min-h-[43px] w-auto text-base",
            children: l
          }
        ) }) })
      ]
    }
  )
);
h.displayName = "DownloadItem";
const p = m.forwardRef(({ className: o, title: a, asList: d = !0, children: r, ...s }, t) => {
  const l = m.Children.map(r, (n) => m.isValidElement(n) && d ? /* @__PURE__ */ e.jsx("li", { className: "m-0 before:hidden before:content-none after:hidden after:content-none", children: n }) : n);
  return /* @__PURE__ */ e.jsxs("div", { ref: t, className: i("modul-download-multi", o), ...s, children: [
    a && /* @__PURE__ */ e.jsx("h2", { className: "mb-0 text-xl font-bold", children: a }),
    d ? /* @__PURE__ */ e.jsx("ul", { className: "list-none p-0", children: l }) : /* @__PURE__ */ e.jsx("div", { className: "border-grey-dark", children: l })
  ] });
});
p.displayName = "DownloadGroup";
export {
  p as DownloadGroup,
  h as DownloadItem
};
//# sourceMappingURL=index.es23.js.map
