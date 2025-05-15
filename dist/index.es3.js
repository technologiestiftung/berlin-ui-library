import { j as t } from "./index.es4.js";
import { useState as k, useRef as H, useEffect as L } from "react";
import { LogoBar as R } from "./index.es41.js";
import { MainHeaderContent as z } from "./index.es42.js";
import { SubHeaderBar as C } from "./index.es43.js";
import { LanguageProvider as D } from "./index.es5.js";
function A({
  header: i = "Design System",
  caption: l = "Berlin.de",
  url: a = "/",
  logoUrl: d = "https://www.berlin.de",
  logoComponent: c,
  LinkComponent: m,
  breadcrumbs: u = [],
  showBreadcrumbs: f = !0,
  showLanguageSelect: p = !0,
  language: h = "de",
  languages: x = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" }
  ],
  translations: b,
  onLanguageChange: g = () => {
  },
  showSearchButton: y = !0,
  onSearch: E = () => {
  },
  showMenuButton: j = !0,
  menuItems: v = [],
  onOpenMenu: w = () => {
  },
  className: S = ""
}) {
  const [n, B] = k(!1), s = H(null);
  return L(() => {
    const r = s.current;
    if (r) {
      const e = document.createElement("div");
      e.style.height = "1px", e.style.width = "100%", e.style.position = "absolute", e.style.top = "0", e.style.left = "0", e.style.zIndex = "-1", r.parentElement?.insertBefore(e, r);
      const o = new IntersectionObserver(
        ([I]) => {
          B(!I.isIntersecting);
        },
        { threshold: [0] }
      );
      return o.observe(e), () => {
        o.disconnect(), e.parentElement && e.parentElement.removeChild(e);
      };
    }
  }, []), /* @__PURE__ */ t.jsx(
    D,
    {
      initialLanguage: h,
      languages: x,
      translations: b,
      onLanguageChange: g,
      children: /* @__PURE__ */ t.jsxs(
        "header",
        {
          ref: s,
          className: `sticky top-0 z-20 box-border leading-[1.22rem] ${S}`,
          children: [
            /* @__PURE__ */ t.jsx(
              R,
              {
                logoUrl: d,
                logoComponent: c,
                isSticky: n
              }
            ),
            /* @__PURE__ */ t.jsx(
              z,
              {
                header: i,
                caption: l,
                url: a,
                showSearchButton: y,
                onSearch: E,
                showMenuButton: j,
                menuItems: v,
                onOpenMenu: w
              }
            ),
            /* @__PURE__ */ t.jsx(
              C,
              {
                showBreadcrumbs: f,
                breadcrumbs: u,
                showLanguageSelect: p,
                LinkComponent: m,
                isSticky: n
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
