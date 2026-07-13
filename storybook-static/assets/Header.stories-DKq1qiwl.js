import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b,R as ae}from"./index-0yr9KlQE.js";import{S as re,a as ie,b as oe,c as le}from"./chevron-up-CTv6aLnT.js";import{u as y,t as o,L as ce}from"./LanguageProvider-C3S-s7zJ.js";import{a as ue}from"./search-CvexitPb.js";import{D as F,b as U}from"./Drawer-enDv_yXm.js";import{S as de}from"./SearchForm-D49cBIg8.js";import{C as me}from"./chevron-down-DDsJDduF.js";import{c as pe}from"./createLucideIcon-CIIyP9qp.js";import{B as he}from"./Breadcrumb-CexfwuS6.js";import"./index-cqJIykFo.js";import"./index-C8N0VHNy.js";import"./index-DzS6v96A.js";import"./index-HTFOMs3O.js";import"./index-BiVIZ00j.js";import"./index-C99ZZYO_.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-HsyR4iiU.js";import"./index-DJkRsNY1.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";import"./close-CxP9Zg7y.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ge=pe("ExternalLink",fe),be=""+new URL("logo_berlin_m_srgb-D14p6fXV.svg",import.meta.url).href;function Y({logoUrl:a="https://www.berlin.de",logoComponent:n,isSticky:t=!1}){return e.jsx("div",{className:`sticky top-0 z-10 flex items-center justify-start border-b transition-[height,background-color,opacity,padding] duration-200 ease-in-out ${t?"h-[3px] border-none bg-grey-darkest px-4 py-0 lg:px-6":"h-11 border-gray-300 bg-white px-4 py-[0.25em] lg:px-6"}`,children:e.jsx("a",{href:a,"aria-label":"Homepage Berlin.de",className:`transition-opacity duration-200 ease-in-out ${t?"opacity-0":"opacity-100"}`,children:n||e.jsx("img",{src:be,alt:"Berlin.de Logo",className:"object-fill"})})})}Y.__docgenInfo={description:"",methods:[],displayName:"LogoBar",props:{logoUrl:{required:!1,tsType:{name:"string"},description:"URL for the logo link",defaultValue:{value:'"https://www.berlin.de"',computed:!1}},logoComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom logo component (will be used instead of default Berlin logo if provided)"},isSticky:{required:!1,tsType:{name:"boolean"},description:"Whether the LogoBar is in sticky state",defaultValue:{value:"false",computed:!1}}}};function P({onOpenMenu:a,className:n=""}){const{translations:t}=y(),s=o("menu",t);return e.jsxs("button",{className:`-mt-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] text-[11px] leading-normal ${n}`,onClick:a,"aria-label":s,children:[e.jsx(re,{className:"h-8"}),e.jsx("span",{className:"-mr-[0.05rem] whitespace-nowrap",children:s})]})}P.__docgenInfo={description:"",methods:[],displayName:"MenuButton",props:{onOpenMenu:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to open the menu"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};function G({onOpenSearch:a,className:n=""}){const{translations:t}=y(),s=o("search",t);return e.jsxs("button",{className:`-mt-[0.05rem] -ml-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] pr-[0.05rem] text-[11px] leading-normal ${n}`,onClick:a,"aria-label":s,children:[e.jsx(ue,{className:"size-8"}),e.jsx("span",{className:"text-[11px] whitespace-nowrap",children:s})]})}G.__docgenInfo={description:"",methods:[],displayName:"SearchButton",props:{onOpenSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to handle search button click"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};function J({onOpenAccessibility:a,className:n=""}){const{translations:t}=y(),s=o("accessibility",t);return e.jsxs("button",{className:`-mt-[0.05rem] flex cursor-pointer flex-col items-center justify-between gap-[0.06rem] text-[11px] leading-normal ${n}`,onClick:a,"aria-label":s,children:[e.jsx(ie,{className:"size-8"}),e.jsx("span",{className:"whitespace-nowrap",children:s})]})}J.__docgenInfo={description:"",methods:[],displayName:"AccessibilityButton",props:{onOpenAccessibility:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to handle accessibility button click"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};function X({isOpen:a,close:n,onSearch:t,doBerlinSearch:s}){const{translations:l}=y(),d=r=>{if(s)return n(),window.open(`https://www.berlin.de/suche/?q=${encodeURIComponent(r)}`,"_blank");t&&t(r),n()};return e.jsx(F,{open:a,onOpenChange:r=>!r&&n(),children:e.jsx(U,{size:"large",className:"flex flex-col gap-4",onOpenAutoFocus:r=>{r.preventDefault(),window.setTimeout(()=>{document.querySelector("#searchInput")?.focus()})},children:e.jsx("div",{className:"flex flex-row justify-center",children:e.jsxs("div",{className:"mt-[10vh] flex w-full flex-col gap-2 px-4 lg:mt-[30vh] lg:w-[50%]",children:[e.jsx("h1",{className:"font-bold",children:o("search.title",l)}),e.jsx(de,{placeholder:o("search.placeholder",l),onSubmit:d,className:"w-full",label:o("search.ariaLabel",l),submitLabel:o("search.submit",l)}),s&&e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:o("search.berlinSearchInfo",l)})]})})})})}X.__docgenInfo={description:"",methods:[],displayName:"SearchMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the search drawer is open"},close:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to close the search drawer"},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchTerm: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchTerm"}],return:{name:"void"}}},description:"Function called when search is submitted"},doBerlinSearch:{required:!0,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Whether to perform a search on berlin.de instead of using the onSearch callback"}}};function Q({isOpen:a,close:n,menuItems:t}){const{translations:s}=y(),[l,d]=b.useState({}),r=c=>{d(f=>({...f,[c]:!f[c]}))},h=c=>c%2===0&&c>0?"bg-menu-background-dark pl-4":c%2===1?"bg-menu-background pl-4":"border-t border-border-light",m=(c,f=0,x="")=>c.map((i,w)=>{const g=`${x}${i.label}-${w}`,p=!!l[g],S=h(f),v=["flex h-[55px] items-center"].join(" ").trim(),j=[S,p?"shadow-[0_7px_7px_rgba(150,150,150,0.1)] relative z-10":""].join(" ").trim();return e.jsxs("div",{className:j,children:[" ",e.jsxs("div",{className:v,children:[i.icon&&e.jsx("span",{className:"mr-2",children:i.icon}),e.jsx("a",{href:i.href,className:"m-[3px] flex w-full items-center px-[24px] py-[0.1rem] text-lg transition-colors duration-200 hover:underline",onClick:k=>{i.href==="#"||i.href===""?(k.preventDefault(),i.children&&i.children.length>0&&r(g)):i.children&&i.children.length>0},children:i.label}),i.children&&i.children.length>0&&e.jsx("button",{type:"button",className:"mx-[3px] my-[0.5rem] cursor-pointer border-l border-black px-[0.7rem] pt-[0.3rem] pb-[0.4rem]",onClick:()=>r(g),"aria-expanded":p,"aria-label":`${i.label} Untermenü ${p?"schließen":"öffnen"}`,children:e.jsx(me,{className:`transform transition-transform duration-200 ${p?"rotate-180":""}`})})]}),p&&i.children&&i.children.length>0&&e.jsxs("div",{className:"flex flex-col",children:[" ",m(i.children,f+1,`${g}-`)]})]},g)});return e.jsx(F,{open:a,onOpenChange:c=>!c&&n(),children:e.jsx(U,{className:"flex flex-col gap-2",onOpenAutoFocus:c=>{c.preventDefault(),window.setTimeout(()=>{document.querySelector("[role='dialog'] a[href]")?.focus()})},children:e.jsxs("div",{className:"text-base",children:[e.jsx("div",{className:"mb-5 flex flex-row items-center justify-between",children:e.jsx("h2",{className:"px-6 text-2xl font-bold",children:o("menu.title",s)||"Menu"})}),e.jsx("div",{className:"flex flex-col gap-2",children:t.length>0?m(t):e.jsx("p",{children:o("menu.noItems",s)||"No menu items available."})})]})})})}Q.__docgenInfo={description:"",methods:[],displayName:"MenuDrawer",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the menu drawer is open"},close:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to close the menu drawer"},menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:"Menu items to display"}}};function Z({isOpen:a,close:n,accessibilityItems:t=[]}){const{translations:s}=y(),l=[{question:o("accessibilityMenu.barrierefreiheit.question",s),label:o("accessibilityMenu.barrierefreiheit",s),href:"/accessibility-statement/"},{question:o("accessibilityMenu.contact.question",s),label:o("accessibilityMenu.contact",s),href:"/accessibility-statement/#accessibility-contact"},{question:o("accessibilityMenu.additionalInfo.question",s),label:o("accessibilityMenu.additionalInfo",s),href:"https://www.berlin.de/moderne-verwaltung/barrierefreie-it/anlaufstellen/kompetenzstelle/artikel.988002.php",external:!0}],d=t&&t.length>0?t:l;return e.jsx(F,{open:a,onOpenChange:r=>!r&&n(),children:e.jsxs(U,{className:"flex flex-col gap-4 px-6 py-4 text-base",onOpenAutoFocus:r=>{r.preventDefault(),window.setTimeout(()=>{document.querySelector("[role='dialog'] a[href]")?.focus()})},children:[e.jsx("div",{className:"mt-4 mb-6 flex flex-row items-center justify-between",children:e.jsx("h2",{className:"text-2xl font-bold",children:o("accessibilityMenu.title",s)})}),d.map((r,h)=>e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"mb-1 font-bold",children:r.question}),r.external?e.jsxs("a",{className:"flex text-text-link transition-colors duration-200 hover:underline",href:r.href,target:"_blank",rel:"noreferrer",children:[r.label,e.jsx(ge,{className:"ml-2 size-4 flex-shrink-0 text-text-link"})]}):e.jsx("a",{href:r.href,className:"text-text-link transition-colors duration-200 hover:underline",children:r.label})]},h))]})})}Z.__docgenInfo={description:"",methods:[],displayName:"AccessibilityMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the accessibility drawer is open"},close:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function to close the accessibility drawer"},accessibilityItems:{required:!1,tsType:{name:"Array",elements:[{name:"AccessibilityItem"}],raw:"AccessibilityItem[]"},description:"Accessibility items to display",defaultValue:{value:"[]",computed:!1}}}};function ee({header:a,caption:n,url:t,showSearchButton:s,onSearch:l,showMenuButton:d,menuItems:r,onOpenMenu:h,doBerlinSearch:m,accessibilityItems:c}){const[f,x]=b.useState(!1),[i,w]=b.useState(!1),[g,p]=b.useState(!1),S=()=>{x(!0),l()},v=()=>{x(!1)},j=B=>{console.warn("Search term:",B)},k=()=>{w(!0),h()},V=()=>{w(!1)},N=()=>{p(!0)},R=()=>{p(!1)};return e.jsxs("div",{className:"relative z-11 flex items-center justify-between bg-white px-4 py-[0rem] shadow-md lg:px-6 lg:py-[0.7rem]",children:[e.jsxs("a",{href:t,className:"flex flex-col justify-center p-0 text-[15px] leading-[1.2] break-words md:text-base lg:p-[3px] lg:text-xl",children:[e.jsx("span",{children:a}),e.jsx("span",{className:"block font-bold",children:n})]}),e.jsxs("div",{className:"mx-[0.65rem] flex h-full flex-0 items-end space-x-[0.65rem] pt-[0.59rem] pb-[0.20rem] md:space-x-[1.05rem] md:pt-[0.69rem] md:pb-[0.22rem]",children:[e.jsxs(e.Fragment,{children:[e.jsx(J,{onOpenAccessibility:N}),e.jsx(Z,{isOpen:g,close:R,accessibilityItems:c})]}),s&&e.jsxs(e.Fragment,{children:[e.jsx(G,{onOpenSearch:S}),e.jsx(X,{isOpen:f,close:v,onSearch:j,doBerlinSearch:m})]}),d&&e.jsxs(e.Fragment,{children:[e.jsx(P,{onOpenMenu:k}),e.jsx(Q,{isOpen:i,close:V,menuItems:r})]})]})]})}ee.__docgenInfo={description:"",methods:[],displayName:"MainHeaderContent",props:{header:{required:!0,tsType:{name:"string"},description:""},caption:{required:!0,tsType:{name:"string"},description:""},url:{required:!0,tsType:{name:"string"},description:""},showSearchButton:{required:!0,tsType:{name:"boolean"},description:""},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},doBerlinSearch:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},showMenuButton:{required:!0,tsType:{name:"boolean"},description:""},menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:""},onOpenMenu:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},accessibilityItems:{required:!1,tsType:{name:"Array",elements:[{name:"AccessibilityItem"}],raw:"AccessibilityItem[]"},description:""}}};function ye(a,n){ae.useEffect(()=>{const t=s=>{a.current&&!a.current.contains(s.target)&&n(!1)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[a,n])}function te({className:a=""}){const[n,t]=b.useState(!1),s=b.useRef(null),{currentLanguage:l,languages:d,translations:r,setLanguage:h}=y();return ye(s,t),e.jsxs("div",{className:`relative z-[10] text-black ${a}`,ref:s,children:[e.jsxs("button",{className:"flex h-full items-center gap-2",onClick:()=>t(!n),"aria-label":o(n?"collapse":"expand",r),"aria-expanded":n,children:[e.jsx("span",{className:"font-bolder flex size-5 items-center justify-center bg-black text-[11px] text-white",children:l.toLowerCase()}),e.jsx("span",{className:"pointer-events-none flex size-3 items-center justify-center text-red",children:n?e.jsx(oe,{className:"text-berlin-green"}):e.jsx(le,{className:"text-berlin-green"})})]}),e.jsx("div",{className:`${n?"block":"hidden"} absolute top-8 right-0 bg-white shadow-lg`,children:e.jsx("ul",{children:d.map(m=>e.jsx("li",{children:e.jsxs("button",{className:"block flex w-full gap-2 px-2 py-1 text-base hover:bg-gray-100",onClick:()=>{h(m.code),t(!1)},children:[e.jsx("span",{className:"flex size-6 items-center justify-center bg-black text-[11px] font-bold text-white",children:m.code.toLowerCase()}),m.label]})},m.code))})})]})}te.__docgenInfo={description:"",methods:[],displayName:"LanguageSelect",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};function ne({showBreadcrumbs:a,breadcrumbs:n,showLanguageSelect:t,LinkComponent:s,isSticky:l=!1}){return!a&&!t?null:e.jsx("div",{className:`relative z-10 bg-block-colored px-4 lg:px-0 ${l?"-translate-y-64 opacity-0":"translate-y-0 opacity-100"} motion-safe:transition-all motion-safe:duration-100 motion-safe:ease-in-out`,children:e.jsxs("div",{className:"mx-auto flex max-w-[61.25rem] justify-between",children:[a&&e.jsx(he,{items:n,LinkComponent:s}),t&&e.jsx(te,{})]})})}ne.__docgenInfo={description:"",methods:[],displayName:"SubHeaderBar",props:{showBreadcrumbs:{required:!0,tsType:{name:"boolean"},description:""},breadcrumbs:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},showLanguageSelect:{required:!0,tsType:{name:"boolean"},description:""},isSticky:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["LinkComponentProps"]};function K({header:a="Design System",caption:n="Berlin.de",url:t="/",logoUrl:s="https://www.berlin.de",logoComponent:l,LinkComponent:d,breadcrumbs:r=[],showBreadcrumbs:h=!0,showLanguageSelect:m=!0,language:c="de",languages:f=[{code:"de",label:"Deutsch"},{code:"en",label:"English"}],translations:x,onLanguageChange:i=()=>{},showSearchButton:w=!0,onSearch:g=()=>{},doBerlinSearch:p,showMenuButton:S=!0,menuItems:v=[],onOpenMenu:j=()=>{},className:k="",accessibilityItems:V=[]}){const[N,R]=b.useState(!1),B=b.useRef(null);return b.useEffect(()=>{if(B.current){let T=null;const se=50;let z=!1;const H=()=>{const $=(window.scrollY||window.pageYOffset)>(z?0:2);$!==z&&(z=$,T&&clearTimeout(T),T=setTimeout(()=>{R($)},se))};return H(),window.addEventListener("scroll",H,{passive:!0}),()=>{T&&clearTimeout(T),window.removeEventListener("scroll",H)}}},[]),e.jsx(ce,{initialLanguage:c,languages:f,translations:x,onLanguageChange:i,children:e.jsxs("header",{ref:B,className:`sticky top-0 z-20 box-border leading-[1.22rem] ${k}`,children:[e.jsx(Y,{logoUrl:s,logoComponent:l,isSticky:N}),e.jsx(ee,{header:a,caption:n,url:t,showSearchButton:w,onSearch:g,doBerlinSearch:p,showMenuButton:S,menuItems:v,onOpenMenu:j,accessibilityItems:V}),!N&&e.jsx(ne,{showBreadcrumbs:h,breadcrumbs:r,showLanguageSelect:m,LinkComponent:d,isSticky:N})]})})}K.__docgenInfo={description:`Header component with integrated accessibility menu

The Header component includes:
- Logo section
- Title and action buttons (search, menu, accessibility)
- Optional breadcrumbs and language selector
- Built-in accessibility menu drawer`,methods:[],displayName:"Header",props:{header:{required:!1,tsType:{name:"string"},description:"Header title text",defaultValue:{value:'"Design System"',computed:!1}},caption:{required:!1,tsType:{name:"string"},description:"Header subtitle text",defaultValue:{value:'"Berlin.de"',computed:!1}},url:{required:!1,tsType:{name:"string"},description:"URL for the header link",defaultValue:{value:'"/"',computed:!1}},logoUrl:{required:!1,tsType:{name:"string"},description:"URL for the logo link",defaultValue:{value:'"https://www.berlin.de"',computed:!1}},logoComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom logo component (will be used instead of default Berlin logo if provided)"},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Breadcrumb items to display",defaultValue:{value:"[]",computed:!1}},showBreadcrumbs:{required:!1,tsType:{name:"boolean"},description:"Whether to show the breadcrumbs section",defaultValue:{value:"true",computed:!1}},showLanguageSelect:{required:!1,tsType:{name:"boolean"},description:"Whether to show the language selector",defaultValue:{value:"true",computed:!1}},language:{required:!1,tsType:{name:"string"},description:"Current language code",defaultValue:{value:'"de"',computed:!1}},languages:{required:!1,tsType:{name:"Array",elements:[{name:"Language"}],raw:"Language[]"},description:"Available languages",defaultValue:{value:`[
	{ code: "de", label: "Deutsch" },
	{ code: "en", label: "English" },
]`,computed:!1}},translations:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"}],raw:"Record<string, Record<string, string>>"},description:"JSON translation files keyed by language code"},onLanguageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(code: string) => void",signature:{arguments:[{type:{name:"string"},name:"code"}],return:{name:"void"}}},description:"Callback when language changes",defaultValue:{value:"() => {}",computed:!1}},showSearchButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the search button",defaultValue:{value:"true",computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when search button is clicked",defaultValue:{value:"() => {}",computed:!1}},doBerlinSearch:{required:!1,tsType:{name:"boolean"},description:"Whether to use the Berlin search functionality"},showMenuButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the menu button",defaultValue:{value:"true",computed:!1}},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:"Menu items for the main menu",defaultValue:{value:"[]",computed:!1}},onOpenMenu:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when menu button is clicked",defaultValue:{value:"() => {}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},accessibilityItems:{required:!1,tsType:{name:"Array",elements:[{name:"AccessibilityItem"}],raw:"AccessibilityItem[]"},description:"Accessibility items for the accessibility menu",defaultValue:{value:"[]",computed:!1}}},composes:["LinkComponentProps"]};const Ye={title:"Elements/Header",component:K,parameters:{layout:"fullscreen"},tags:["autodocs"]},xe={accessibility:"Barrierefrei",menu:"Menü",search:"Suche",expand:"Erweitern",collapse:"Einklappen","search.title":"Suche","search.placeholder":"Suchbegriff","search.berlinSearchInfo":"Die Suche wird auf berlin.de durchgeführt.","search.ariaLabel":"Suche","search.button":"Suchen","search.submit":"Suchen","accessibilityMenu.title":"Barrierefreiheit","button.name.close":"Schließen","accessibilityMenu.barrierefreiheit.question":"Wie barrierefrei ist diese Webseite?","accessibilityMenu.barrierefreiheit":"Erklärung zur Barrierefreiheit","accessibilityMenu.contact.question":"Haben Sie Anmerkungen oder Fragen zur Barrierefreiheit dieser Webseite?","accessibilityMenu.contact":"Kontakt zur Ansprechperson","accessibilityMenu.additionalInfo.question":"Wo gibt es zusätzliche Informationen zur Barrierefreiheit im Land Berlin?","accessibilityMenu.additionalInfo":"Barrierefreie Informations- und Kommunikationstechnik (IKT)"},we={accessibility:"Accessibility",menu:"Menu",search:"Search",expand:"Expand",collapse:"Collapse","search.title":"Search","search.placeholder":"Search term","search.ariaLabel":"Search","search.button":"Search","search.submit":"Search","accessibilityMenu.title":"Accessibility","button.name.close":"Close","accessibilityMenu.barrierefreiheit.question":"Accessibility information:","accessibilityMenu.barrierefreiheit":"Accessibility statement","accessibilityMenu.contact.question":"Report accessibility issue:","accessibilityMenu.contact":"Contact","accessibilityMenu.additionalInfo.question":"Additional information:","accessibilityMenu.additionalInfo":"Competence center for accessibility"},u={args:{header:"Senatsverwaltung für",caption:"Mobilität, Verkehr, Klimaschutz und Umwelt",breadcrumbs:[{label:"Home",href:"/"},{label:"Components",href:"/components"},{label:"Header",href:"/components/header"}],languages:[{code:"de",label:"Deutsch"},{code:"en",label:"English"}],menuItems:[{label:"Item 1",href:"/item1"},{label:"Item 2",href:"/item2"},{label:"Item 3",href:"/item3",children:[{label:"Subitem 1",href:"/item3/subitem1"},{label:"Subitem 2",href:"/item3/subitem2"},{label:"Subitem 3",href:"/item3/subitem3",children:[{label:"Subitem 1",href:"/item3/subitem1"},{label:"Subitem 2",href:"/item3/subitem2"},{label:"Subitem 1",href:"/item3/subitem1"},{label:"Subitem 2",href:"/item3/subitem2"}]},{label:"Item 4",href:"/item4"}]}],language:"de",translations:{de:xe,en:we},onOpenMenu:()=>{console.warn("Menu opened")},onSearch:()=>{console.warn("Search opened")},onLanguageChange:a=>{console.warn(`Language changed to: ${a}`)}}},q={args:{...u.args,language:"en"}},L={args:{...u.args,language:"tr"}},I={args:{...u.args,header:"With Custom Logo",logoComponent:e.jsx("div",{className:"flex h-8 items-center font-bold text-red-500",children:"CUSTOM LOGO"}),LinkComponent:({href:a,children:n})=>e.jsx("a",{href:a,className:"text-blue-500 hover:underline",children:n})}},M={args:{...u.args,showLanguageSelect:!1}},C={args:{...u.args,showBreadcrumbs:!1}},A={args:{...u.args,showSearchButton:!1}},O={args:{...u.args,doBerlinSearch:!0}},_={args:{...u.args,showMenuButton:!1}},D={args:{header:"Minimal Header",caption:"Berlin.de",showBreadcrumbs:!1,showLanguageSelect:!1,showSearchButton:!1,showMenuButton:!1}},W={args:{...u.args,accessibilityItems:[{question:"How accessible is this website?",label:"Accessibility statement",href:"/accessibility-statement/"},{question:"Report an accessibility issue:",label:"Contact",href:"/accessibility-statement/#accessibility-contact"},{question:"Additional information:",label:"Competence center for accessibility",href:"https://www.berlin.de/moderne-verwaltung/barrierefreie-it/anlaufstellen/kompetenzstelle/artikel.988002.php",external:!0}]},parameters:{docs:{description:{story:"This example shows how to customize the accessibility menu items. The menu opens when clicking the accessibility button in the header."}}}},E={args:{...u.args},render:a=>e.jsxs("div",{className:"h-full",children:[e.jsx(K,{...a}),e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{className:"mb-4 text-2xl font-bold",children:"Scroll Test for Sticky LogoBar"}),e.jsx("p",{className:"mb-4",children:"Scroll down to see the LogoBar collapse to a thin line (3px height) with a dark gray background. The logo will fade out as you scroll."}),e.jsxs("div",{className:"mb-4 bg-gray-100 p-4",children:[e.jsx("p",{children:e.jsx("strong",{children:"Expected Behavior:"})}),e.jsxs("ul",{className:"list-disc pl-8",children:[e.jsx("li",{children:"Initial state: LogoBar is 44px tall with white background"}),e.jsx("li",{children:"When scrolling: LogoBar collapses to 3px height"}),e.jsx("li",{children:"Background color changes to dark gray"}),e.jsx("li",{children:"Logo fades out with a smooth transition"})]})]}),Array.from({length:30},(n,t)=>e.jsxs("p",{className:`mb-4 p-2 ${t%2===0?"bg-gray-50":"bg-white"}`,children:["This is scrollable content (row ",t+1,"). Continue scrolling to test the sticky behavior of the LogoBar."]},t))]})]}),parameters:{docs:{description:{story:"This story provides scrollable content to test the sticky behavior of the LogoBar component. As you scroll down, the LogoBar will collapse to a thin line and change its background color. The logo will fade out during this transition."}}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    header: "Senatsverwaltung für",
    caption: "Mobilität, Verkehr, Klimaschutz und Umwelt",
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Components",
      href: "/components"
    }, {
      label: "Header",
      href: "/components/header"
    }],
    languages: [{
      code: "de",
      label: "Deutsch"
    }, {
      code: "en",
      label: "English"
    }],
    menuItems: [{
      label: "Item 1",
      href: "/item1"
    }, {
      label: "Item 2",
      href: "/item2"
    }, {
      label: "Item 3",
      href: "/item3",
      children: [{
        label: "Subitem 1",
        href: "/item3/subitem1"
      }, {
        label: "Subitem 2",
        href: "/item3/subitem2"
      }, {
        label: "Subitem 3",
        href: "/item3/subitem3",
        children: [{
          label: "Subitem 1",
          href: "/item3/subitem1"
        }, {
          label: "Subitem 2",
          href: "/item3/subitem2"
        }, {
          label: "Subitem 1",
          href: "/item3/subitem1"
        }, {
          label: "Subitem 2",
          href: "/item3/subitem2"
        }]
      }, {
        label: "Item 4",
        href: "/item4"
      }]
    }],
    language: "de",
    translations: {
      de: deTranslations,
      en: enTranslations
    },
    onOpenMenu: () => {
      console.warn("Menu opened");
    },
    onSearch: () => {
      console.warn("Search opened");
    },
    onLanguageChange: (code: string) => {
      console.warn(\`Language changed to: \${code}\`);
    }
  }
}`,...u.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    language: "en"
  }
}`,...q.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    language: "tr"
  }
}`,...L.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: "With Custom Logo",
    logoComponent: <div className="flex h-8 items-center font-bold text-red-500">
                CUSTOM LOGO
            </div>,
    LinkComponent: ({
      href,
      children
    }) => <a href={href} className="text-blue-500 hover:underline">
                {children}
            </a>
  }
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLanguageSelect: false
  }
}`,...M.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showBreadcrumbs: false
  }
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showSearchButton: false
  }
}`,...A.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    doBerlinSearch: true
  }
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showMenuButton: false
  }
}`,..._.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    header: "Minimal Header",
    caption: "Berlin.de",
    showBreadcrumbs: false,
    showLanguageSelect: false,
    showSearchButton: false,
    showMenuButton: false
  }
}`,...D.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    accessibilityItems: [{
      question: "How accessible is this website?",
      label: "Accessibility statement",
      href: "/accessibility-statement/"
    }, {
      question: "Report an accessibility issue:",
      label: "Contact",
      href: "/accessibility-statement/#accessibility-contact"
    }, {
      question: "Additional information:",
      label: "Competence center for accessibility",
      href: "https://www.berlin.de/moderne-verwaltung/barrierefreie-it/anlaufstellen/kompetenzstelle/artikel.988002.php",
      external: true
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "This example shows how to customize the accessibility menu items. The menu opens when clicking the accessibility button in the header."
      }
    }
  }
}`,...W.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <div className="h-full">
            <Header {...args} />
            <div className="p-4">
                <h2 className="mb-4 text-2xl font-bold">
                    Scroll Test for Sticky LogoBar
                </h2>
                <p className="mb-4">
                    Scroll down to see the LogoBar collapse to a thin line (3px height)
                    with a dark gray background. The logo will fade out as you scroll.
                </p>
                <div className="mb-4 bg-gray-100 p-4">
                    <p>
                        <strong>Expected Behavior:</strong>
                    </p>
                    <ul className="list-disc pl-8">
                        <li>Initial state: LogoBar is 44px tall with white background</li>
                        <li>When scrolling: LogoBar collapses to 3px height</li>
                        <li>Background color changes to dark gray</li>
                        <li>Logo fades out with a smooth transition</li>
                    </ul>
                </div>
                {Array.from({
        length: 30
      }, (_, i) => <p key={i} className={\`mb-4 p-2 \${i % 2 === 0 ? "bg-gray-50" : "bg-white"}\`}>
                        This is scrollable content (row {i + 1}). Continue scrolling to test
                        the sticky behavior of the LogoBar.
                    </p>)}
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: "This story provides scrollable content to test the sticky behavior of the LogoBar component. As you scroll down, the LogoBar will collapse to a thin line and change its background color. The logo will fade out during this transition."
      }
    }
  }
}`,...E.parameters?.docs?.source}}};const Pe=["Default","EnglishLanguage","TurkishLanguage","CustomLogoAndLinks","WithoutLanguageSelector","WithoutBreadcrumbs","WithoutSearch","WithBerlinSearch","WithoutMenu","MinimalHeader","WithCustomAccessibilityItems","ScrollableContent"];export{I as CustomLogoAndLinks,u as Default,q as EnglishLanguage,D as MinimalHeader,E as ScrollableContent,L as TurkishLanguage,O as WithBerlinSearch,W as WithCustomAccessibilityItems,C as WithoutBreadcrumbs,M as WithoutLanguageSelector,_ as WithoutMenu,A as WithoutSearch,Pe as __namedExportsOrder,Ye as default};
