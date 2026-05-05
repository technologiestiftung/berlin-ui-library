import { j as e } from "./index.es4.js";
import { cn as c } from "./index.es29.js";
function x({
  src: t,
  copyright: s,
  title: r,
  description: l,
  height: i = 500,
  className: a
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "relative pb-[var(--height)]",
      style: { "--height": `${i}px` },
      children: /* @__PURE__ */ e.jsxs("div", { className: c("absolute h-[var(--height)] w-screen", a), children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "flex h-[var(--height)] w-full overflow-hidden [background-image:var(--src)] bg-cover bg-center",
            style: { "--src": `url(${t})` }
          }
        ),
        s && /* @__PURE__ */ e.jsx("p", { className: "absolute bottom-1 left-1 text-sm text-white lg:left-3", children: s }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center justify-center px-4", children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-[61.25rem] bg-white px-8 py-10 text-center", children: [
          /* @__PURE__ */ e.jsx("h1", { className: "mb-2 font-bold", children: r }),
          /* @__PURE__ */ e.jsx("p", { children: l })
        ] }) })
      ] })
    }
  );
}
export {
  x as Opener
};
//# sourceMappingURL=index.es27.js.map
