import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l,R as H}from"./index-0yr9KlQE.js";import{c as i}from"./utils-CBfrqCZ4.js";import{S as A}from"./times-BhbnEWYI.js";const _=o=>l.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 448",...o},l.createElement("path",{d:"M168,0H24C10.7,0,0,10.7,0,24v144c0,9.7,5.8,18.5,14.8,22.2,9,3.7,19.3,1.6,26.2-5.2l40-40,79,79-79,79-40-40c-6.9-6.9-17.2-8.9-26.2-5.2-9,3.7-14.8,12.5-14.8,22.2v144c0,13.3,10.7,24,24,24h144c9.7,0,18.5-5.8,22.2-14.8,3.7-9,1.7-19.3-5.2-26.2l-40-40,79-79,79,79-40,40c-6.9,6.9-8.9,17.2-5.2,26.2,3.7,9,12.5,14.8,22.2,14.8h144c13.3,0,24-10.7,24-24v-144c0-9.7-5.8-18.5-14.8-22.2-9-3.7-19.3-1.7-26.2,5.2l-40,40-79-79,79-79,40,40c6.9,6.9,17.2,8.9,26.2,5.2,9-3.7,14.8-12.5,14.8-22.2V24c0-13.3-10.7-24-24-24h-144c-9.7,0-18.5,5.8-22.2,14.8-3.7,9-1.6,19.3,5.2,26.2l40,40-79,79-79-79,40-40c6.9-6.9,8.9-17.2,5.2-26.2-3.7-9-12.5-14.8-22.2-14.8Z"})),Q=({title:o,copyrightText:s,link:n,position:r})=>{if(!o&&!s)return null;const p=n?"a":"span",c=n?{href:n,"data-mainlink":"true"}:{};return e.jsxs("div",{className:i("absolute inset-0 flex flex-col p-6 text-white [text-shadow:1px_1px_4px_rgba(0,0,0,0.4)]",r==="bottom"?"justify-end":"justify-start"),children:[o&&e.jsx(p,{className:"text-lg leading-tight font-bold hover:underline lg:text-2xl",...c,children:o}),s&&e.jsx("p",{className:i("absolute text-xs text-white/40",r==="bottom"?"top-1 right-2":"right-2 bottom-1"),children:s})]})},C=H.forwardRef(({className:o,src:s,alt:n,caption:r,href:p,copyright:c,overlayTitle:Z,overlayCopyright:W,overlayLink:O,overlayPosition:R="center",darkenImage:q=!1,imgClassName:z,withZoomBox:L,...E},P)=>{const j=l.useRef(null),T=l.useRef(null),[t,m]=l.useState(null),I=a=>(a?.height??0)>=(a?.width??0),D=()=>m({src:s,alt:n,caption:r,width:j?.current?.clientWidth??0,height:j?.current?.clientHeight??0});l.useEffect(()=>{if(!t)return;T.current?.focus();const a=V=>{V.key==="Escape"&&m(null)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[t]);const N=e.jsx("img",{ref:j,src:s,alt:n,className:i("block h-auto w-full",z)});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:i("relative mb-3 block",o),ref:P,...E,children:[e.jsxs("div",{className:i((r||c)&&"mb-1",q&&"brightness-60 filter","relative"),children:[p?e.jsx("a",{href:p,target:"_blank",rel:"noopener noreferrer",children:N}):N,L&&e.jsx("button",{type:"button",className:"absolute right-1.5 bottom-1.5 flex size-11 cursor-pointer items-center justify-center border border-black bg-white p-1.5 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none","aria-label":"Bild vergrößern",onClick:D,children:e.jsx(_,{className:"size-6 text-white"})})]}),e.jsx(Q,{title:Z,copyrightText:W,link:O,position:R}),r&&e.jsxs("p",{className:"mb-1 block px-4 text-sm leading-tight font-normal break-words text-black lg:px-0",children:[" ",r]}),c&&e.jsxs("p",{className:"mb-1 block px-4 text-[11px] leading-tight break-words text-gray-600 lg:px-0",children:[" ",c]})]}),t?.src&&e.jsx("div",{id:"overlay",className:"fixed inset-0 z-[10000] flex items-center justify-center bg-black/80",role:"dialog","aria-modal":"true","aria-label":"Bildvergrößerung",onClick:a=>{a.target.id==="overlay"&&m(null)},children:e.jsxs("div",{className:"relative inline-block h-fit w-fit",onClick:a=>a.stopPropagation(),children:[e.jsx("button",{ref:T,type:"button",className:"absolute top-0 right-0 z-10 cursor-pointer bg-white p-2 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none","aria-label":"Bildvergrößerung schließen",onClick:()=>m(null),children:e.jsx(A,{className:"size-6"})}),e.jsx("div",{className:i("relative flex items-center justify-center bg-white",I(t)?"h-[min(980px,80vh)] w-auto max-w-[min(980px,90vw)] lg:max-w-[min(980px,90vh)]":"h-auto max-h-[min(980px,90vh)] w-[min(980px,95vw)] lg:w-[min(980px,90vh)]"),children:e.jsx("img",{src:t.src,alt:t.alt||"",className:i("object-contain select-none",I(t)?"h-full w-auto":"h-auto w-full"),draggable:!1})}),t.caption&&e.jsx("div",{className:"absolute bottom-0 left-0 z-10 w-full translate-y-[100%] bg-white px-1 py-0.5 text-xs lg:w-auto lg:translate-y-0 lg:px-2 lg:py-1 lg:text-base",children:t.caption})]})})]})});C.displayName="Image";C.__docgenInfo={description:`A component for displaying images with optional overlays, captions, and copyright information,
styled using Tailwind CSS, following a structure similar to the provided example.`,methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:"The source URL of the image."},alt:{required:!0,tsType:{name:"string"},description:"The alternative text for the image."},caption:{required:!1,tsType:{name:"string"},description:"Optional caption text displayed below the image."},href:{required:!1,tsType:{name:"string"},description:"Optional URL for the image, making it a link."},copyright:{required:!1,tsType:{name:"string"},description:"Optional copyright text displayed below the image (and caption, if present)."},overlayTitle:{required:!1,tsType:{name:"string"},description:"Optional title text displayed within the overlay."},overlayCopyright:{required:!1,tsType:{name:"string"},description:"Optional copyright text displayed within the overlay."},overlayLink:{required:!1,tsType:{name:"string"},description:"Optional URL for the overlay title, making it a link."},overlayPosition:{required:!1,tsType:{name:"union",raw:'"center" | "bottom"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"bottom"'}]},description:`Controls the vertical alignment of content within the overlay.
'center' (default): Content starts from the top.
'bottom': Content is aligned to the bottom of the overlay.`,defaultValue:{value:'"center"',computed:!1}},darkenImage:{required:!1,tsType:{name:"boolean"},description:"If true, applies a darkening filter to the image, useful when overlay text needs more contrast.",defaultValue:{value:"false",computed:!1}},imgClassName:{required:!1,tsType:{name:"string"},description:"Optional additional class names for the `img` element itself."},withZoomBox:{required:!1,tsType:{name:"boolean"},description:"Optional add the zoom/enlarge icon to onClick open the image full screen"}}};const U={title:"Elements/Image",component:C,tags:["autodocs"],parameters:{layout:"centered"}},h={args:{src:"https://placehold.co/600x400",alt:"Sample placeholder image"}},d={args:{src:"https://placehold.co/600x400",alt:"Sample image with caption",caption:"This is a caption for the image above."}},g={args:{src:"https://placehold.co/600x400",alt:"Sample image with copyright",copyright:"© 2025 Berlin Design System"}},u={args:{src:"https://placehold.co/600x400",alt:"Sample image with caption and copyright",caption:"This is a caption for the image above.",copyright:"© 2025 Berlin Design System"}},y={args:{src:"https://placehold.co/600x400",alt:"Sample image with overlay title",overlayTitle:"Image with overlay title",darkenImage:!0}},x={args:{src:"https://placehold.co/600x400",alt:"Sample image with overlay copyright",overlayCopyright:"© 2025 Berlin Design System",darkenImage:!0}},f={args:{src:"https://placehold.co/600x400",alt:"Sample image with overlay link",overlayTitle:"Click this overlay title",overlayLink:"https://berlin.de",darkenImage:!0}},v={args:{src:"https://placehold.co/600x400",alt:"Sample image that is a link",href:"https://berlin.de"}},w={args:{src:"https://placehold.co/600x400",alt:"Sample image with bottom overlay",overlayTitle:"Bottom positioned overlay",overlayCopyright:"© 2025 Berlin Design System",overlayPosition:"bottom",darkenImage:!0}},b={args:{src:"https://placehold.co/600x400",alt:"Sample image with custom styles",className:"border-4 border-blue-500 rounded-xl overflow-hidden",imgClassName:"filter sepia"}},k={args:{src:"https://media.istockphoto.com/id/500601834/photo/lake-moraine-and-canoe-dock-in-banff-national-park.jpg?s=612x612&w=0&k=20&c=TRuwRNk0hMinV-XA0pyvaZHKIhHEtdpGqzmcGy-VAlo=",alt:"Sample placeholder image",caption:"Vertical Sample Image with ZoomBox",withZoomBox:!0}},S={args:{src:"https://media.istockphoto.com/id/534037450/photo/red-autumn-and-fishing-pier.jpg?s=612x612&w=0&k=20&c=RNaPpiYq6-Zu8f6xdXZfI8AakcgjL8zP5ifdf4phlQs=",alt:"Sample placeholder image",caption:"Horizontal Sample Image with ZoomBox",withZoomBox:!0}},B={args:{src:"/Wahrscheinlichkeiten.png",alt:"Sample placeholder image",caption:"Quadrant Sample Image with ZoomBox",withZoomBox:!0}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample placeholder image"
  }
}`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with caption",
    caption: "This is a caption for the image above."
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with copyright",
    copyright: "© 2025 Berlin Design System"
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with caption and copyright",
    caption: "This is a caption for the image above.",
    copyright: "© 2025 Berlin Design System"
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with overlay title",
    overlayTitle: "Image with overlay title",
    darkenImage: true
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with overlay copyright",
    overlayCopyright: "© 2025 Berlin Design System",
    darkenImage: true
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with overlay link",
    overlayTitle: "Click this overlay title",
    overlayLink: "https://berlin.de",
    darkenImage: true
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image that is a link",
    href: "https://berlin.de"
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with bottom overlay",
    overlayTitle: "Bottom positioned overlay",
    overlayCopyright: "© 2025 Berlin Design System",
    overlayPosition: "bottom",
    darkenImage: true
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/600x400",
    alt: "Sample image with custom styles",
    className: "border-4 border-blue-500 rounded-xl overflow-hidden",
    imgClassName: "filter sepia"
  }
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://media.istockphoto.com/id/500601834/photo/lake-moraine-and-canoe-dock-in-banff-national-park.jpg?s=612x612&w=0&k=20&c=TRuwRNk0hMinV-XA0pyvaZHKIhHEtdpGqzmcGy-VAlo=",
    alt: "Sample placeholder image",
    caption: "Vertical Sample Image with ZoomBox",
    withZoomBox: true
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://media.istockphoto.com/id/534037450/photo/red-autumn-and-fishing-pier.jpg?s=612x612&w=0&k=20&c=RNaPpiYq6-Zu8f6xdXZfI8AakcgjL8zP5ifdf4phlQs=",
    alt: "Sample placeholder image",
    caption: "Horizontal Sample Image with ZoomBox",
    withZoomBox: true
  }
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    src: "/Wahrscheinlichkeiten.png",
    alt: "Sample placeholder image",
    caption: "Quadrant Sample Image with ZoomBox",
    withZoomBox: true
  }
}`,...B.parameters?.docs?.source}}};const Y=["Default","WithCaption","WithCopyright","WithCaptionAndCopyright","WithOverlayTitle","WithOverlayCopyright","WithOverlayLink","WithLink","OverlayPositionBottom","CustomStyles","WithZoomBoxVertical","WithZoomBoxHorizontal","WithZoomBoxQuadrant"];export{b as CustomStyles,h as Default,w as OverlayPositionBottom,d as WithCaption,u as WithCaptionAndCopyright,g as WithCopyright,v as WithLink,x as WithOverlayCopyright,f as WithOverlayLink,y as WithOverlayTitle,S as WithZoomBoxHorizontal,B as WithZoomBoxQuadrant,k as WithZoomBoxVertical,Y as __namedExportsOrder,U as default};
