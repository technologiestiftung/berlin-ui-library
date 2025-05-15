import { j as t } from "./index.es4.js";
import { useState as k, useRef as H, useEffect as L } from "react";
import { LogoBar as R } from "./index.es41.js";
import { MainHeaderContent as z } from "./index.es42.js";
import { SubHeaderBar as C } from "./index.es43.js";
import { LanguageProvider as D } from "./index.es5.js";
function A({
  header: o = "Design System",
  caption: i = "Berlin.de",
  url: l = "/",
  logoUrl: a = "https://www.berlin.de",
  logoComponent: d,
  LinkComponent: c,
  breadcrumbs: m = [],
  showBreadcrumbs: u = !0,
  showLanguageSelect: f = !0,
  language: p = "de",
  languages: h = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" }
  ],
  translations: b,
  onLanguageChange: g = () => {
  },
  showSearchButton: x = !0,
  onSearch: y = () => {
  },
  showMenuButton: E = !0,
  menuItems: j = [],
  onOpenMenu: v = () => {
  },
  className: w = ""
}) {
  const [S, B] = k(!1), n = H(null);
  return L(() => {
    const r = n.current;
    if (r) {
      const e = document.createElement("div");
      e.style.height = "1px", e.style.width = "100%", e.style.position = "absolute", e.style.top = "0", e.style.left = "0", e.style.zIndex = "-1", r.parentElement?.insertBefore(e, r);
      const s = new IntersectionObserver(
        ([I]) => {
          B(!I.isIntersecting);
        },
        { threshold: [0] }
      );
      return s.observe(e), () => {
        s.disconnect(), e.parentElement && e.parentElement.removeChild(e);
      };
    }
  }, []), /* @__PURE__ */ t.jsx(
    D,
    {
      initialLanguage: p,
      languages: h,
      translations: b,
      onLanguageChange: g,
      children: /* @__PURE__ */ t.jsxs(
        "header",
        {
          ref: n,
          className: `sticky top-0 z-[20] box-border bg-white leading-[1.22rem] ${w}`,
          children: [
            /* @__PURE__ */ t.jsx(
              R,
              {
                logoUrl: a,
                logoComponent: d,
                isSticky: S
              }
            ),
            /* @__PURE__ */ t.jsx(
              z,
              {
                header: o,
                caption: i,
                url: l,
                showSearchButton: x,
                onSearch: y,
                showMenuButton: E,
                menuItems: j,
                onOpenMenu: v
              }
            ),
            /* @__PURE__ */ t.jsx(
              C,
              {
                showBreadcrumbs: u,
                breadcrumbs: m,
                showLanguageSelect: f,
                LinkComponent: c
              }
            )
          ]
        }
      )
    }
  );
}
export {
  A as Header
};
//# sourceMappingURL=index.es3.js.map
