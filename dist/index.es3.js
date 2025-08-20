import { j as r } from "./index.es4.js";
import { useState as L, useRef as B, useEffect as Y } from "react";
import { LogoBar as D } from "./index.es53.js";
import { MainHeaderContent as H } from "./index.es54.js";
import { SubHeaderBar as R } from "./index.es55.js";
import { LanguageProvider as C } from "./index.es5.js";
function A({
  header: i = "Design System",
  caption: c = "Berlin.de",
  url: a = "/",
  logoUrl: d = "https://www.berlin.de",
  logoComponent: u,
  LinkComponent: m,
  breadcrumbs: f = [],
  showBreadcrumbs: h = !0,
  showLanguageSelect: p = !0,
  language: w = "de",
  languages: E = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" }
  ],
  translations: g,
  onLanguageChange: x = () => {
  },
  showSearchButton: S = !0,
  onSearch: j = () => {
  },
  showMenuButton: b = !0,
  menuItems: v = [],
  onOpenMenu: y = () => {
  },
  className: T = ""
}) {
  const [n, k] = L(!1), l = B(null);
  return Y(() => {
    if (l.current) {
      let e = null;
      const I = 50;
      let t = !1;
      const o = () => {
        const s = (window.scrollY || window.pageYOffset) > (t ? 0 : 2);
        s !== t && (t = s, e && clearTimeout(e), e = setTimeout(() => {
          k(s);
        }, I));
      };
      return o(), window.addEventListener("scroll", o, { passive: !0 }), () => {
        e && clearTimeout(e), window.removeEventListener("scroll", o);
      };
    }
  }, []), /* @__PURE__ */ r.jsx(
    C,
    {
      initialLanguage: w,
      languages: E,
      translations: g,
      onLanguageChange: x,
      children: /* @__PURE__ */ r.jsxs(
        "header",
        {
          ref: l,
          className: `sticky top-0 z-20 box-border leading-[1.22rem] ${T}`,
          children: [
            /* @__PURE__ */ r.jsx(
              D,
              {
                logoUrl: d,
                logoComponent: u,
                isSticky: n
              }
            ),
            /* @__PURE__ */ r.jsx(
              H,
              {
                header: i,
                caption: c,
                url: a,
                showSearchButton: S,
                onSearch: j,
                showMenuButton: b,
                menuItems: v,
                onOpenMenu: y
              }
            ),
            /* @__PURE__ */ r.jsx(
              R,
              {
                showBreadcrumbs: h,
                breadcrumbs: f,
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
