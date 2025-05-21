import { j as e } from "./index.es4.js";
import g from "react";
import { cn as n } from "./index.es23.js";
const u = ({ title: l, copyrightText: s, link: a, position: t }) => {
  if (!l && !s)
    return null;
  const r = a ? "a" : "span", o = a ? { href: a, "data-mainlink": "true" } : {};
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: n(
        "absolute inset-0 flex flex-col p-6 text-white [text-shadow:1px_1px_4px_rgba(0,0,0,0.4)]",
        t === "bottom" ? "justify-end" : "justify-start"
        // Content alignment
      ),
      children: [
        l && /* @__PURE__ */ e.jsx(
          r,
          {
            className: "text-lg leading-tight font-bold hover:underline lg:text-2xl",
            ...o,
            children: l
          }
        ),
        s && /* @__PURE__ */ e.jsx(
          "p",
          {
            className: n(
              "absolute text-xs text-white/40",
              // Corresponds to 'image__copyright' within overlay
              t === "bottom" ? "top-1 right-2" : "right-2 bottom-1"
              // Position depends on main content alignment
            ),
            children: s
          }
        )
      ]
    }
  );
}, j = g.forwardRef(
  ({
    className: l,
    src: s,
    alt: a,
    caption: t,
    copyright: r,
    overlayTitle: o,
    overlayCopyright: x,
    overlayLink: m,
    overlayPosition: c = "center",
    darkenImage: d = !1,
    imgClassName: f,
    ...i
  }, b) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: n("relative mb-3 block", l),
      ref: b,
      ...i,
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: n(
              (t || r) && "mb-1",
              // Only add mb-1 if caption or copyright exists
              d && "brightness-60 filter",
              i.href && "cursor-pointer"
            ),
            children: /* @__PURE__ */ e.jsx(
              "img",
              {
                onClick: (h) => {
                  i.href && (h.preventDefault(), window.open(i.href, "_blank"));
                },
                src: s,
                alt: a,
                className: n("block h-auto w-full", f)
              }
            )
          }
        ),
        /* @__PURE__ */ e.jsx(
          u,
          {
            title: o,
            copyrightText: x,
            link: m,
            position: c
          }
        ),
        t && /* @__PURE__ */ e.jsxs("p", { className: "mb-1 block px-4 text-sm leading-tight font-normal break-words text-black lg:px-0", children: [
          " ",
          t
        ] }),
        r && /* @__PURE__ */ e.jsxs("p", { className: "mb-1 block px-4 text-[11px] leading-tight break-words text-gray-600 lg:px-0", children: [
          " ",
          r
        ] })
      ]
    }
  )
);
j.displayName = "Image";
export {
  j as Image
};
//# sourceMappingURL=index.es19.js.map
