import { j as e } from "./index.es4.js";
import { cn as n } from "./index.es29.js";
function m({
  src: t,
  alt: s,
  copyright: r,
  title: i,
  description: l,
  height: a = 500,
  className: c
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "relative pb-[var(--height)]",
      style: { "--height": `${a}px` },
      children: /* @__PURE__ */ e.jsxs("div", { className: n("absolute h-[var(--height)] w-screen", c), children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "flex h-[var(--height)] w-full overflow-hidden [background-image:var(--src)] bg-cover bg-center",
            role: s ? "img" : void 0,
            "aria-label": s,
            "aria-hidden": s ? void 0 : !0,
            style: { "--src": `url(${t})` }
          }
        ),
        r && /* @__PURE__ */ e.jsx("p", { className: "absolute bottom-1 left-1 text-sm text-white lg:left-3", children: r }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center justify-center px-4", children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-[61.25rem] bg-white px-8 py-10 text-center", children: [
          /* @__PURE__ */ e.jsx("h1", { className: "mb-2 font-bold", children: i }),
          /* @__PURE__ */ e.jsx("p", { children: l })
        ] }) })
      ] })
    }
  );
}
export {
  m as Opener
};
//# sourceMappingURL=index.es27.js.map
