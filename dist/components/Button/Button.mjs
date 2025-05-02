import { jsxs as o, Fragment as i, jsx as r } from "react/jsx-runtime";
import { Slot as h } from "@radix-ui/react-slot";
import { cva as x } from "class-variance-authority";
import { cn as u } from "../../lib/utils.mjs";
import m from "../../assets/icons/arrow_right_icon.svg.mjs";
import b from "../../assets/icons/arrow_left_icon.svg.mjs";
import y from "../../assets/icons/search_icon.svg.mjs";
import w from "../../assets/icons/close_icon.svg.mjs";
import k from "../../assets/icons/filter_icon.svg.mjs";
import v from "../../assets/icons/link_icon.svg.mjs";
const N = (e, t) => {
  if (e === "light" || e === "white" || e === "clean" || e === "link")
    return null;
  if (e === "close")
    return /* @__PURE__ */ r("span", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ r(
      w,
      {
        className: `${t ? "text-gray-500" : "text-black"}`
      }
    ) });
  if (e === "back")
    return /* @__PURE__ */ r("span", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ r(
      b,
      {
        className: `${t ? "text-gray-500" : "text-black"}`,
        width: "24",
        height: "24"
      }
    ) });
  if (e === "back-link")
    return /* @__PURE__ */ r(
      b,
      {
        className: `mr-1 ${t ? "text-gray-500" : "text-[#0047d3]"}`,
        width: "16",
        height: "16"
      }
    );
  const a = t ? "bg-gray-400" : "bg-red";
  return /* @__PURE__ */ o(i, { children: [
    /* @__PURE__ */ r(
      "span",
      {
        className: `absolute top-0 right-0 flex h-full w-[39px] items-center justify-center ${e.includes("fulltone") ? "" : "border-l-2"} ${t ? "border-gray-400" : "border-black"} ${a}`
      }
    ),
    /* @__PURE__ */ r("span", { className: "pointer-events-none absolute top-0 right-0 flex h-full w-[39px] items-center justify-center", children: e === "default" || e === "colored" || e === "fulltone" || e === "light-fulltone" ? /* @__PURE__ */ r(m, { className: "text-white" }) : e === "search" ? /* @__PURE__ */ r(y, { className: "fill-white" }) : e === "filter" ? /* @__PURE__ */ r(k, { className: "fill-white" }) : e === "extern" ? /* @__PURE__ */ r(v, { className: "text-white" }) : null })
  ] });
}, j = x(
  // base styles for all buttons
  "relative inline-block min-h-[43px] w-auto cursor-pointer justify-center overflow-visible rounded-none border-2 border-black bg-white px-4 py-[10px] text-center font-sans text-base leading-[1.2] text-black no-underline transition-colors duration-200 ease-out disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "hover:bg-hover focus:bg-hover pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        light: "hover:bg-hover focus:bg-hover px-4 disabled:border-gray-400 disabled:text-gray-500",
        white: "disabled:bg-gray-200focus:bg-hover hover:bg-hover border-0 border-white bg-white px-4 text-black disabled:text-gray-500",
        fulltone: "border-0 bg-red px-4 text-white hover:bg-[#fb203d] focus:bg-[#fb203d] disabled:bg-gray-400 disabled:text-white",
        negative: "border-2 border-white bg-transparent text-white hover:bg-transparent focus:bg-transparent disabled:border-gray-500 disabled:bg-transparent disabled:text-gray-500",
        colored: "hover:bg-hover focus:bg-hover border-red pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        clean: "border border-transparent px-4 disabled:text-gray-500",
        play: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        download: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        search: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        filter: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        addtocart: "flex pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        close: "h-[39px] min-h-0 w-[39px] border-0 border-transparent bg-transparent p-0 disabled:opacity-50",
        back: "flex h-[39px] min-h-0 w-[39px] items-center justify-center border-0 border-transparent bg-transparent p-0 disabled:opacity-50",
        "back-link": "flex h-auto min-h-0 flex-row-reverse items-center justify-start border-0 border-transparent bg-transparent p-0 text-[#0047d3] hover:underline disabled:text-gray-500 disabled:no-underline",
        extern: "pr-[59px] disabled:border-gray-400 disabled:text-gray-500",
        link: "m-0 h-auto cursor-pointer border-0 bg-transparent p-0 text-left text-[#0047d3] hover:underline disabled:text-gray-500 disabled:no-underline",
        "light-fulltone": "border-0 bg-red px-4 text-white hover:bg-[#fb203d] focus:bg-[#fb203d] disabled:bg-gray-400 disabled:text-white",
        "negative-light": "border-2 border-white bg-transparent text-white hover:bg-transparent focus:bg-transparent disabled:border-gray-500 disabled:bg-transparent disabled:text-gray-500"
      },
      size: {
        default: "",
        fullwidth: "w-full",
        "fullwidth-palm": "md:w-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function R({
  className: e,
  variant: t = "default",
  size: a,
  asChild: g = !1,
  booking: l = !1,
  price: d,
  children: n,
  disabled: s = !1,
  ...c
}) {
  const p = g ? h : "button", f = l && d ? /* @__PURE__ */ o(i, { children: [
    /* @__PURE__ */ r("span", { className: "price mr-[0.7em] border-r border-black/60 pr-[0.7em]", children: d }),
    /* @__PURE__ */ r("span", { children: n })
  ] }) : n;
  return /* @__PURE__ */ o(
    p,
    {
      "data-slot": "button",
      className: u(
        j({ variant: t, size: a, className: e }),
        l ? "button--booking flex" : ""
      ),
      disabled: s,
      ...c,
      children: [
        f,
        N(t, s)
      ]
    }
  );
}
export {
  R as Button,
  j as buttonVariants
};
//# sourceMappingURL=Button.mjs.map
