import { j as t } from "./index.es4.js";
import h from "react";
import { cn as r } from "./index.es21.js";
const g = ({ title: e, copyrightText: s, link: a, position: l }) => {
  if (!e && !s)
    return null;
  const i = a ? "a" : "span", o = a ? { href: a, "data-mainlink": "true" } : {};
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: r(
        "absolute inset-0 flex flex-col p-6 text-white [text-shadow:1px_1px_4px_rgba(0,0,0,0.4)]",
        l === "bottom" ? "justify-end" : "justify-start"
        // Content alignment
      ),
      children: [
        e && /* @__PURE__ */ t.jsx(
          i,
          {
            className: "text-lg leading-tight font-bold hover:underline md:text-2xl",
            ...o,
            children: e
          }
        ),
        s && /* @__PURE__ */ t.jsx(
          "p",
          {
            className: r(
              "absolute text-xs text-white/40",
              // Corresponds to 'image__copyright' within overlay
              l === "bottom" ? "top-1 right-2" : "right-2 bottom-1"
              // Position depends on main content alignment
            ),
            children: s
          }
        )
      ]
    }
  );
}, p = h.forwardRef(
  ({
    className: e,
    src: s,
    alt: a,
    caption: l,
    copyright: i,
    overlayTitle: o,
    overlayCopyright: m,
    overlayLink: n,
    overlayPosition: x = "center",
    darkenImage: c = !1,
    imgClassName: d,
    ...b
  }, f) => /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: r("relative mb-3 block", e),
      ref: f,
      ...b,
      children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: r("mb-1", c && "brightness-60 filter"),
            children: /* @__PURE__ */ t.jsx(
              "img",
              {
                src: s,
                alt: a,
                className: r("block h-auto w-full", d)
              }
            )
          }
        ),
        /* @__PURE__ */ t.jsx(
          g,
          {
            title: o,
            copyrightText: m,
            link: n,
            position: x
          }
        ),
        l && /* @__PURE__ */ t.jsxs("p", { className: "mb-1 block text-sm leading-tight font-normal break-words text-black", children: [
          " ",
          l
        ] }),
        i && /* @__PURE__ */ t.jsxs("p", { className: "mb-1 block text-[11px] leading-tight break-words text-gray-600", children: [
          " ",
          i
        ] })
      ]
    }
  )
);
p.displayName = "Image";
export {
  p as Image
};
//# sourceMappingURL=index.es19.js.map
