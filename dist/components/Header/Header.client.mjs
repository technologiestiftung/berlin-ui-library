import { jsx as e, jsxs as B } from "react/jsx-runtime";
import { LogoBar as C } from "./LogoBar.mjs";
import { MainHeaderContentClient as H } from "./MainHeaderContent.client.mjs";
import { SubHeaderBar as L } from "./SubHeaderBar.mjs";
import { LanguageProvider as j } from "./LanguageProvider.mjs";
function z({
  header: r = "Design System",
  caption: t = "Berlin.de",
  url: i = "/",
  logoUrl: n = "https://www.berlin.de",
  logoComponent: o,
  LinkComponent: a,
  breadcrumbs: l = [],
  showBreadcrumbs: d = !0,
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
    j,
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
            /* @__PURE__ */ e(C, { logoUrl: n, logoComponent: o }),
            /* @__PURE__ */ e(
              H,
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
              L,
              {
                showBreadcrumbs: d,
                breadcrumbs: l,
                showLanguageSelect: m,
                LinkComponent: a
              }
            )
          ]
        }
      )
    }
  );
}
export {
  z as HeaderClient
};
//# sourceMappingURL=Header.client.mjs.map
