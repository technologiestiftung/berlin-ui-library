import { j as e } from "./index.es4.js";
import i from "./index.es57.js";
function n({
  logoUrl: t = "https://www.berlin.de",
  logoComponent: a,
  isSticky: r = !1
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `sticky top-0 z-10 flex items-center justify-start border-b transition-[height,background-color,opacity,padding] duration-200 ease-in-out ${r ? "h-[3px] border-none bg-grey-darkest px-4 py-0 lg:px-6" : "h-11 border-gray-300 bg-white px-4 py-[0.25em] lg:px-6"}`,
      children: /* @__PURE__ */ e.jsx(
        "a",
        {
          href: t,
          "aria-label": "Berlin.de zur Startseite",
          className: `transition-opacity duration-200 ease-in-out ${r ? "opacity-0" : "opacity-100"}`,
          children: a || /* @__PURE__ */ e.jsx("img", { src: i, alt: "", className: "object-fill" })
        }
      )
    }
  );
}
export {
  n as LogoBar
};
//# sourceMappingURL=index.es48.js.map
