import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-BCtMShv3.js";import{u as S,c as z}from"./index-DkX7lMs-.js";import{P as C}from"./index-LATptceI.js";import{c as P}from"./index-B-xwPz7g.js";import{c as B}from"./utils-15tqT33e.js";import{c as r}from"./createLucideIcon-DOlFIQMa.js";import{C as D}from"./check-L6z-JRMr.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";import"./index-BcXugKMQ.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]],w=r("BellRing",I);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],h=r("Bold",L);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],T=r("Italic",R);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],j=r("Menu",E);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],f=r("Underline",O);var y="Toggle",k=v.forwardRef((n,p)=>{const{pressed:m,defaultPressed:u,onPressedChange:x,..._}=n,[b,M]=S({prop:m,onChange:x,defaultProp:u??!1,caller:y});return e.jsx(C.button,{type:"button","aria-pressed":b,"data-state":b?"on":"off","data-disabled":n.disabled?"":void 0,..._,ref:p,onClick:z(n.onClick,()=>{n.disabled||M(!b)})})});k.displayName=y;var N=k;const U=P("ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors hover:bg-block-heavy hover:font-bold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-block-heavy data-[state=on]:font-bold [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-transparent",outline:"border-input hover:bg-accent hover:text-accent-foreground cursor-pointer border-2 border-black bg-transparent"},size:{default:"h-10 min-w-10 px-3",md:"h-9 min-w-9 px-2.5",lg:"h-11 min-w-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),a=v.forwardRef(({className:n,variant:p,size:m,...u},x)=>e.jsx(N,{ref:x,className:B(U({variant:p,size:m,className:n})),...u}));a.displayName=N.displayName;a.__docgenInfo={description:"",methods:[]};const X={title:"Elements/Toggle",component:a,tags:["autodocs"],parameters:{layout:"centered"}},s={args:{"aria-label":"Toggle bold",children:e.jsx(h,{})}},l={args:{"aria-label":"Toggle menu",children:e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx("span",{children:"Menu"})]})}},i={args:{variant:"outline","aria-label":"Toggle italic",children:e.jsx("span",{children:"Italic"})}},o={args:{size:"md","aria-label":"Toggle underline",children:e.jsx(f,{})}},t={args:{size:"lg","aria-label":"Toggle notifications",children:e.jsxs(e.Fragment,{children:[e.jsx(w,{}),e.jsx("span",{children:"Notifications"})]})}},d={args:{pressed:!0,"aria-label":"Toggle checked",children:e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx("span",{children:"Checked"})]})}},c={args:{disabled:!0,"aria-label":"Toggle disabled",children:e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx("span",{children:"Disabled"})]})}},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx("p",{className:"text-muted-foreground text-sm",children:"Text formatting example:"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{"aria-label":"Toggle bold",children:e.jsx(h,{})}),e.jsx(a,{"aria-label":"Toggle italic",children:e.jsx(T,{})}),e.jsx(a,{"aria-label":"Toggle underline",children:e.jsx(f,{})})]}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Outline variant:"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{variant:"outline","aria-label":"Toggle bold",children:e.jsx(h,{})}),e.jsx(a,{variant:"outline","aria-label":"Toggle italic",children:e.jsx(T,{})}),e.jsx(a,{variant:"outline","aria-label":"Toggle underline",children:e.jsx(f,{})})]}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"With different sizes:"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{size:"md","aria-label":"Small toggle",children:e.jsx("span",{children:"S"})}),e.jsx(a,{"aria-label":"Default toggle",children:e.jsx("span",{children:"M"})}),e.jsx(a,{size:"lg","aria-label":"Large toggle",children:e.jsx("span",{children:"L"})})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Toggle bold",
    children: <Bold />
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Toggle menu",
    children: <>
                <Menu />
                <span>Menu</span>
            </>
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    "aria-label": "Toggle italic",
    children: <span>Italic</span>
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    "aria-label": "Toggle underline",
    children: <Underline />
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    "aria-label": "Toggle notifications",
    children: <>
                <BellRing />
                <span>Notifications</span>
            </>
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    pressed: true,
    "aria-label": "Toggle checked",
    children: <>
                <Check />
                <span>Checked</span>
            </>
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    "aria-label": "Toggle disabled",
    children: <>
                <Menu />
                <span>Disabled</span>
            </>
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-5">
            <p className="text-muted-foreground text-sm">Text formatting example:</p>
            <div className="flex items-center gap-2">
                <Toggle aria-label="Toggle bold">
                    <Bold />
                </Toggle>
                <Toggle aria-label="Toggle italic">
                    <Italic />
                </Toggle>
                <Toggle aria-label="Toggle underline">
                    <Underline />
                </Toggle>
            </div>

            <p className="text-muted-foreground text-sm">Outline variant:</p>
            <div className="flex items-center gap-2">
                <Toggle variant="outline" aria-label="Toggle bold">
                    <Bold />
                </Toggle>
                <Toggle variant="outline" aria-label="Toggle italic">
                    <Italic />
                </Toggle>
                <Toggle variant="outline" aria-label="Toggle underline">
                    <Underline />
                </Toggle>
            </div>

            <p className="text-muted-foreground text-sm">With different sizes:</p>
            <div className="flex items-center gap-2">
                <Toggle size="md" aria-label="Small toggle">
                    <span>S</span>
                </Toggle>
                <Toggle aria-label="Default toggle">
                    <span>M</span>
                </Toggle>
                <Toggle size="lg" aria-label="Large toggle">
                    <span>L</span>
                </Toggle>
            </div>
        </div>
}`,...g.parameters?.docs?.source}}};const Y=["Default","WithText","Outline","Small","Large","Pressed","Disabled","ToggleGroup"];export{s as Default,c as Disabled,t as Large,i as Outline,d as Pressed,o as Small,g as ToggleGroup,l as WithText,Y as __namedExportsOrder,X as default};
