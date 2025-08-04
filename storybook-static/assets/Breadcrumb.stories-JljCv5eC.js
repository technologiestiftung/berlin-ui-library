import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{B as t}from"./Breadcrumb-CtvxTe0_.js";import"./index-BCtMShv3.js";import"./index-BcXugKMQ.js";import"./utils-15tqT33e.js";import"./createLucideIcon-DOlFIQMa.js";const f={title:"Elements/Breadcrumb",component:t,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{items:[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Current Page",href:"/category/current"}]}},r={args:{items:[{label:"Current Page",href:"/current"}]}},s={render:()=>{const o=({href:c,children:l})=>a.jsx("a",{href:c,style:{color:"#e40422"},children:l});return a.jsx(t,{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Accessories",href:"/products/accessories"}],LinkComponent:o})}},n={args:{items:[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Web Development",href:"/services/web-development"}],className:"bg-gray-100 p-4 rounded"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Category",
      href: "/category"
    }, {
      label: "Current Page",
      href: "/category/current"
    }]
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Current Page",
      href: "/current"
    }]
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Example of a custom link component
    const CustomLink = ({
      href,
      children
    }: {
      href: string;
      children: React.ReactNode;
    }) => <a href={href} style={{
      color: "#e40422"
    }}>
                {children}
            </a>;
    return <Breadcrumbs items={[{
      label: "Home",
      href: "/"
    }, {
      label: "Products",
      href: "/products"
    }, {
      label: "Accessories",
      href: "/products/accessories"
    }]} LinkComponent={CustomLink} />;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Services",
      href: "/services"
    }, {
      label: "Web Development",
      href: "/services/web-development"
    }],
    className: "bg-gray-100 p-4 rounded"
  }
}`,...n.parameters?.docs?.source}}};const b=["Default","SingleItem","WithCustomLink","WithCustomClass"];export{e as Default,r as SingleItem,n as WithCustomClass,s as WithCustomLink,b as __namedExportsOrder,f as default};
