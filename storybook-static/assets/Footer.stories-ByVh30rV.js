import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as x}from"./arrow-up-BJL4UcfY.js";import{A as T,a as y,b as v,c as j}from"./Accordion-BG_OLkkX.js";import{L as A,u as C,t as F}from"./LanguageProvider-C3S-s7zJ.js";import"./index-0yr9KlQE.js";import"./index-DzS6v96A.js";import"./index-Dd6ISl9I.js";import"./index-C8N0VHNy.js";import"./index-cqJIykFo.js";import"./index-C99ZZYO_.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DJkRsNY1.js";import"./index-HTFOMs3O.js";import"./utils-CBfrqCZ4.js";import"./chevron-down-DDsJDduF.js";import"./createLucideIcon-CIIyP9qp.js";function S({footerColumns:s=[],berlinFooter:n,LinkComponent:l=({href:h,children:o,...c})=>e.jsx("a",{href:h,...c,children:o}),className:g="",showScrollToTop:i=!0}){const{translations:h}=C(),o=t=>F(t,h),c=()=>e.jsxs("button",{className:"flex w-48 cursor-pointer gap-x-2 p-2",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[o("toTheTop"),e.jsx(x,{className:"size-6 bg-red p-1 text-white"})]});return e.jsxs("footer",{className:`w-full bg-block-colored ${g}`,children:[e.jsx("div",{className:"flex w-full items-start justify-between lg:p-6",children:e.jsxs("div",{className:"flex w-full flex-wrap justify-between lg:items-start lg:pl-[5%]",children:[i&&e.jsx("div",{className:"mb-4 flex w-full justify-end lg:hidden",children:e.jsx(c,{})}),e.jsx("div",{className:"flex w-full flex-col lg:hidden lg:w-auto lg:flex-row lg:flex-wrap",children:e.jsx(T,{collapsible:!0,type:"single",variant:"footer",children:s.map((t,r)=>e.jsxs(y,{value:t.title,children:[e.jsx(v,{children:t.title}),e.jsx(j,{children:e.jsx("div",{className:"flex flex-col",children:e.jsx("ul",{className:"flex flex-col gap-6",children:t.links.map(a=>e.jsx("li",{children:e.jsxs(l,{href:a.href,className:`flex gap-x-1.5 hover:underline ${t.title.includes("socialMedia")?"flex-row":"flex-row-reverse justify-end"}`,children:[o(a.label),a.icon&&a.icon]})},a.href))})})})]},r))})}),e.jsx("div",{className:"flex w-full flex-col lg:w-auto lg:flex-row lg:flex-wrap",children:s.map(t=>e.jsxs("div",{className:"mb-6 ml-[3svw] hidden min-w-[12svw] flex-col gap-3.5 lg:flex",children:[e.jsx("div",{className:"flex items-center justify-between font-bold",children:e.jsx("span",{children:o(t.title)})}),e.jsx("ul",{className:"flex flex-col gap-2.5 bg-inherit",children:t.links.map(r=>e.jsx("li",{children:e.jsxs(l,{href:r.href,className:`flex gap-1.5 hover:underline ${t.title.includes("socialMedia")?"flex-row":"flex-row-reverse justify-end"}`,children:[o(r.label),r.icon&&r.icon]})},r.href))})]},t.title))}),i&&e.jsx("div",{className:"hidden self-start lg:block",children:e.jsx(c,{})})]})}),n&&e.jsx("div",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:n}})]})}function b({language:s="de",languages:n=[{code:"de",label:"Deutsch"},{code:"en",label:"English"}],translations:l,onLanguageChange:g=()=>{},...i}){return e.jsx(A,{initialLanguage:s,languages:n,translations:l,onLanguageChange:g,children:e.jsx(S,{...i})})}b.__docgenInfo={description:`Footer component for Berlin design system

The Footer component includes:
- Navigation links organized in columns
- Responsive design for mobile (accordion) and md views
- Optional Berlin footer content section
- Scroll to top button`,methods:[],displayName:"Footer",props:{footerColumns:{required:!1,tsType:{name:"Array",elements:[{name:"FooterColumn"}],raw:"FooterColumn[]"},description:"Footer columns data for links and navigation"},berlinFooter:{required:!1,tsType:{name:"string"},description:"HTML content for the Berlin official footer (will be rendered with dangerouslySetInnerHTML)"},LinkComponent:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<
	React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
>`,elements:[{name:"intersection",raw:"React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }",elements:[{name:"ReactAnchorHTMLAttributes",raw:"React.AnchorHTMLAttributes<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},{name:"signature",type:"object",raw:"{ href: string }",signature:{properties:[{key:"href",value:{name:"string",required:!0}}]}}]}]},description:"Component to use for links in the footer"},language:{required:!1,tsType:{name:"string"},description:"Current language code",defaultValue:{value:'"de"',computed:!1}},languages:{required:!1,tsType:{name:"Array",elements:[{name:"Language"}],raw:"Language[]"},description:"Available languages",defaultValue:{value:`[
	{ code: "de", label: "Deutsch" },
	{ code: "en", label: "English" },
]`,computed:!1}},translations:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"}],raw:"Record<string, Record<string, string>>"},description:"JSON translation files keyed by language code"},onLanguageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(code: string) => void",signature:{arguments:[{type:{name:"string"},name:"code"}],return:{name:"void"}}},description:"Callback when language changes",defaultValue:{value:"() => {}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},i18nTexts:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"Texts for i18n (if not using translations system)"},showScrollToTop:{required:!1,tsType:{name:"boolean"},description:"Whether to show the scroll-to-top button"}}};const W={title:"Elements/Footer",component:b,parameters:{layout:"fullscreen"},tags:["autodocs"]},f=[{title:"About",links:[{label:"About the Project",href:"/about-project/"},{label:"Imprint",href:"/imprint/"},{label:"Privacy Policy",href:"/privacy-note/"},{label:"Accessibility Statement",href:"/accessibility-statement/"}]},{title:"Content Categories",links:[{label:"All Offers",href:"/all-offers/"},{label:"Culture",href:"/all-offers/?category=kultur"},{label:"Sports",href:"/all-offers/?category=sport"},{label:"Education",href:"/all-offers/?category=bildung_beratung"},{label:"Leisure",href:"/all-offers/?category=freizeit"},{label:"Map",href:"/map/"}]},{title:"Social Media",links:[{label:"Facebook",href:"https://www.facebook.com/BerlinDE/"},{label:"Instagram",href:"https://www.instagram.com/berlinde/"}],isDefaultOpen:!0}],w={de:{About:"Über uns","About the Project":"Über das Projekt",Imprint:"Impressum","Privacy Policy":"Datenschutz","Accessibility Statement":"Barrierefreiheit","Content Categories":"Inhaltskategorien","All Offers":"Alle Angebote",Culture:"Kultur",Sports:"Sport",Education:"Bildung & Beratung",Leisure:"Freizeit",Map:"Karte","Social Media":"Soziale Medien",Facebook:"Facebook",Instagram:"Instagram",toTheTop:"Zum Seitenanfang"},en:{toTheTop:"Back to top"}},p={args:{footerColumns:f,showScrollToTop:!0,language:"de",translations:w},parameters:{viewport:{defaultViewport:"desktop"}}},d={args:{footerColumns:f,showScrollToTop:!0,language:"en",translations:w},parameters:{viewport:{defaultViewport:"desktop"}}},u={args:{footerColumns:f,berlinFooter:`<div class="berlin-footer p-4 text-center text-sm text-gray-600">
      <p>© ${new Date().getFullYear()} - Das offizielle Hauptstadtportal</p>
    </div>`,showScrollToTop:!0},parameters:{viewport:{defaultViewport:"desktop"}}},m={args:{footerColumns:f,showScrollToTop:!0,translations:w},parameters:{viewport:{defaultViewport:"mobile1"}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    footerColumns: sampleFooterColumns,
    showScrollToTop: true,
    language: "de",
    translations: translations
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop"
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    footerColumns: sampleFooterColumns,
    showScrollToTop: true,
    language: "en",
    translations: translations
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop"
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    footerColumns: sampleFooterColumns,
    berlinFooter: \`<div class="berlin-footer p-4 text-center text-sm text-gray-600">
      <p>© \${new Date().getFullYear()} - Das offizielle Hauptstadtportal</p>
    </div>\`,
    showScrollToTop: true
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop"
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    footerColumns: sampleFooterColumns,
    showScrollToTop: true,
    translations: translations
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...m.parameters?.docs?.source}}};const K=["DefaultFooter","EnglishFooter","WithBerlinFooter","MobileFooter"];export{p as DefaultFooter,d as EnglishFooter,m as MobileFooter,u as WithBerlinFooter,K as __namedExportsOrder,W as default};
