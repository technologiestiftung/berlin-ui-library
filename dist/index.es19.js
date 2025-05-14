import { j as t } from "./index.es4.js";
import f from "react";
import { cn as r } from "./index.es21.js";
const g = ({ title: e, copyrightText: s, link: l, position: a }) => {
  if (!e && !s)
    return null;
  const i = l ? "a" : "span", o = l ? { href: l, "data-mainlink": "true" } : {};
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: r(
        "absolute inset-0 flex flex-col p-6 text-white [text-shadow:1px_1px_4px_rgba(0,0,0,0.4)]",
        a === "bottom" ? "justify-end" : "justify-start"
        // Content alignment
      ),
      children: [
        e && /* @__PURE__ */ t.jsx(
          i,
          {
            className: "text-lg leading-tight font-bold hover:underline lg:text-2xl",
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
              a === "bottom" ? "top-1 right-2" : "right-2 bottom-1"
              // Position depends on main content alignment
            ),
            children: s
          }
        )
      ]
    }
  );
}, h = f.forwardRef(
  ({
    className: e,
    src: s,
    alt: l,
    caption: a,
    copyright: i,
    overlayTitle: o,
    overlayCopyright: x,
    overlayLink: n,
    overlayPosition: m = "center",
    darkenImage: c = !1,
    imgClassName: d,
    ...b
  }, p) => /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: r("relative mb-3 block", e),
      ref: p,
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
                alt: l,
                className: r("block h-auto w-full", d)
              }
            )
          }
        ),
        /* @__PURE__ */ t.jsx(
          g,
          {
            title: o,
            copyrightText: x,
            link: n,
            position: m
          }
        ),
        a && /* @__PURE__ */ t.jsxs("p", { className: "mb-1 block px-4 text-sm leading-tight font-normal break-words text-black lg:px-0", children: [
          " ",
          a
        ] }),
        i && /* @__PURE__ */ t.jsxs("p", { className: "mb-1 block px-4 text-[11px] leading-tight break-words text-gray-600 lg:px-0", children: [
          " ",
          i
        ] })
      ]
    }
  )
);
h.displayName = "Image";
export {
  h as Image
};
//# sourceMappingURL=index.es19.js.map
