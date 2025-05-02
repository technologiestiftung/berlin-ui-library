import { jsx as e, jsxs as B } from "react/jsx-runtime";
import { LogoBar as H } from "./LogoBar.mjs";
import { MainHeaderContent as L } from "./MainHeaderContent.mjs";
import { SubHeaderBar as j } from "./SubHeaderBar.mjs";
import { LanguageProvider as k } from "./LanguageProvider.mjs";
function C({
  header: r = "Design System",
  caption: t = "Berlin.de",
  url: i = "/",
  logoUrl: o = "https://www.berlin.de",
  logoComponent: a,
  LinkComponent: n,
  breadcrumbs: d = [],
  showBreadcrumbs: l = !0,
  showLanguageSelect: m = !0,
  language: s = "de",
  languages: g = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" }
  ],
  translations: u,
  onLanguageChange: c = () => {
  },
  showSearchButton: p = !0,
  onSearch: h = () => {
  },
  showMenuButton: f = !0,
  menuItems: x = [],
  onOpenMenu: b = () => {
  },
  className: w = ""
}) {
  return /* @__PURE__ */ e(
    k,
    {
      initialLanguage: s,
      languages: g,
      translations: u,
      onLanguageChange: c,
      children: /* @__PURE__ */ B(
        "header",
        {
          className: `sticky top-0 z-[20] bg-white text-xl leading-[122.2%] tracking-[0.3px] ${w}`,
          children: [
            /* @__PURE__ */ e(H, { logoUrl: o, logoComponent: a }),
            /* @__PURE__ */ e(
              L,
              {
                header: r,
                caption: t,
                url: i,
                showSearchButton: p,
                onSearch: h,
                showMenuButton: f,
                menuItems: x,
                onOpenMenu: b
              }
            ),
            /* @__PURE__ */ e(
              j,
              {
                showBreadcrumbs: l,
                breadcrumbs: d,
                showLanguageSelect: m,
                LinkComponent: n
              }
            )
          ]
        }
      )
    }
  );
}
export {
  C as Header
};
//# sourceMappingURL=Header.mjs.map
