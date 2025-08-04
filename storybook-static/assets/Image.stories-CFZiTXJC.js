import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as O}from"./index-BCtMShv3.js";import{c as i}from"./utils-15tqT33e.js";const N=({title:a,copyrightText:r,link:o,position:t})=>{if(!a&&!r)return null;const s=o?"a":"span",v=o?{href:o,"data-mainlink":"true"}:{};return e.jsxs("div",{className:i("absolute inset-0 flex flex-col p-6 text-white [text-shadow:1px_1px_4px_rgba(0,0,0,0.4)]",t==="bottom"?"justify-end":"justify-start"),children:[a&&e.jsx(s,{className:"text-lg leading-tight font-bold hover:underline lg:text-2xl",...v,children:a}),r&&e.jsx("p",{className:i("absolute text-xs text-white/40",t==="bottom"?"top-1 right-2":"right-2 bottom-1"),children:r})]})},x=O.forwardRef(({className:a,src:r,alt:o,caption:t,copyright:s,overlayTitle:v,overlayCopyright:b,overlayLink:S,overlayPosition:w="center",darkenImage:k=!1,imgClassName:C,...l},T)=>e.jsxs("div",{className:i("relative mb-3 block",a),ref:T,...l,children:[e.jsx("div",{className:i((t||s)&&"mb-1",k&&"brightness-60 filter",l.href&&"cursor-pointer"),children:e.jsx("img",{onClick:I=>{l.href&&(I.preventDefault(),window.open(l.href,"_blank"))},src:r,alt:o,className:i("block h-auto w-full",C)})}),e.jsx(N,{title:v,copyrightText:b,link:S,position:w}),t&&e.jsxs("p",{className:"mb-1 block px-4 text-sm leading-tight font-normal break-words text-black lg:px-0",children:[" ",t]}),s&&e.jsxs("p",{className:"mb-1 block px-4 text-[11px] leading-tight break-words text-gray-600 lg:px-0",children:[" ",s]})]}));x.displayName="Image";x.__docgenInfo={description:`A component for displaying images with optional overlays, captions, and copyright information,
styled using Tailwind CSS, following a structure similar to the provided example.`,methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:"The source URL of the image."},alt:{required:!0,tsType:{name:"string"},description:"The alternative text for the image."},caption:{required:!1,tsType:{name:"string"},description:"Optional caption text displayed below the image."},href:{required:!1,tsType:{name:"string"},description:"Optional URL for the image, making it a link."},copyright:{required:!1,tsType:{name:"string"},description:"Optional copyright text displayed below the image (and caption, if present)."},overlayTitle:{required:!1,tsType:{name:"string"},description:"Optional title text displayed within the overlay."},overlayCopyright:{required:!1,tsType:{name:"string"},description:"Optional copyright text displayed within the overlay."},overlayLink:{required:!1,tsType:{name:"string"},description:"Optional URL for the overlay title, making it a link."},overlayPosition:{required:!1,tsType:{name:"union",raw:'"center" | "bottom"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"bottom"'}]},description:`Controls the vertical alignment of content within the overlay.
'center' (default): Content starts from the top.
'bottom': Content is aligned to the bottom of the overlay.`,defaultValue:{value:'"center"',computed:!1}},darkenImage:{required:!1,tsType:{name:"boolean"},description:"If true, applies a darkening filter to the image, useful when overlay text needs more contrast.",defaultValue:{value:"false",computed:!1}},imgClassName:{required:!1,tsType:{name:"string"},description:"Optional additional class names for the `img` element itself."}}};const q={title:"Elements/Image",component:x,tags:["autodocs"],parameters:{layout:"centered"}},n={args:{src:"https://placehold.co/600x400",alt:"Sample placeholder image"}},c={args:{src:"https://placehold.co/600x400",alt:"Sample image with caption",caption:"This is a caption for the image above."}},p={args:{src:"https://placehold.co/600x400",alt:"Sample image with copyright",copyright:"© 2025 Berlin Design System"}},m={args:{src:"https://placehold.co/600x400",alt:"Sample image with caption and copyright",caption:"This is a caption for the image above.",copyright:"© 2025 Berlin Design System"}},h={args:{src:"https://placehold.co/600x400",alt:"Sample image with overlay title",overlayTitle:"Image with overlay title",darkenImage:!0}},d={args:{src:"https://placehold.co/600x400",alt:"Sample image with overlay copyright",overlayCopyright:"© 2025 Berlin Design System",darkenImage:!0}},g={args:{src:"https://placehold.co/600x400",alt:"Sample image with overlay link",overlayTitle:"Click this overlay title",overlayLink:"https://berlin.de",darkenImage:!0}},y={args:{src:"https://placehold.co/600x400",alt:"Sample image that is a link",href:"https://berlin.de"}},u={args:{src:"https://placehold.co/600x400",alt:"Sample image with bottom overlay",overlayTitle:"Bottom positioned overlay",overlayCopyright:"© 2025 Berlin Design System",overlayPosition:"bottom",darkenImage:!0}},f={args:{src:"https://placehold.co/600x400",alt:"Sample image with custom styles",className:"border-4 border-blue-500 rounded-xl overflow-hidden",imgClassName:"filter sepia"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample placeholder image"
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with caption",
    caption: "This is a caption for the image above."
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with copyright",
    copyright: "© 2025 Berlin Design System"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with caption and copyright",
    caption: "This is a caption for the image above.",
    copyright: "© 2025 Berlin Design System"
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with overlay title",
    overlayTitle: "Image with overlay title",
    darkenImage: true
  }
}`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with overlay copyright",
    overlayCopyright: "© 2025 Berlin Design System",
    darkenImage: true
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with overlay link",
    overlayTitle: "Click this overlay title",
    overlayLink: "https://berlin.de",
    darkenImage: true
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image that is a link",
    href: "https://berlin.de"
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with bottom overlay",
    overlayTitle: "Bottom positioned overlay",
    overlayCopyright: "© 2025 Berlin Design System",
    overlayPosition: "bottom",
    darkenImage: true
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with custom styles",
    className: "border-4 border-blue-500 rounded-xl overflow-hidden",
    imgClassName: "filter sepia"
  }
}`,...f.parameters?.docs?.source}}};const D=["Default","WithCaption","WithCopyright","WithCaptionAndCopyright","WithOverlayTitle","WithOverlayCopyright","WithOverlayLink","WithLink","OverlayPositionBottom","CustomStyles"];export{f as CustomStyles,n as Default,u as OverlayPositionBottom,c as WithCaption,m as WithCaptionAndCopyright,p as WithCopyright,y as WithLink,d as WithOverlayCopyright,g as WithOverlayLink,h as WithOverlayTitle,D as __namedExportsOrder,q as default};
