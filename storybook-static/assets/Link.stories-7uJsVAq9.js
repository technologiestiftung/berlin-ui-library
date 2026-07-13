import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as d}from"./index-CdJFUDDL.js";import{r as p}from"./index-0yr9KlQE.js";import{S as m}from"./link-UKbIWM5B.js";import{c as u}from"./utils-CBfrqCZ4.js";const f=d("inline-block text-text-link transition-colors duration-200 ease-out hover:underline focus:underline",{variants:{variant:{default:"",extern:"m-0 inline-flex h-auto cursor-pointer items-center border-0 bg-transparent p-0 text-left"}},defaultVariants:{variant:"default"}}),a=p.forwardRef(({className:s,variant:t="default",children:o,...i},l)=>{const c=t==="extern"?{target:"_blank",rel:"noopener noreferrer"}:{};return n.jsxs("a",{ref:l,className:u(f({variant:t,className:s})),...c,...i,children:[o,t==="extern"&&n.jsx(m,{className:"mb-2 ml-1 inline-block size-[16px] align-text-top leading-none text-[#0047d3]","aria-hidden":"true"})]})});a.displayName="Link";a.__docgenInfo={description:"",methods:[],displayName:"Link",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const L={title:"Elements/Link",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text",description:"The URL that the link points to"},variant:{control:"select",options:["default","extern"],description:"The visual variant of the link"}}},e={args:{children:"Default Link",href:"#"}},r={args:{children:"External Link",variant:"extern",href:"https://example.com"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Default Link",
    href: "#"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "External Link",
    variant: "extern",
    href: "https://example.com"
  }
}`,...r.parameters?.docs?.source}}};const b=["Default","External"];export{e as Default,r as External,b as __namedExportsOrder,L as default};
