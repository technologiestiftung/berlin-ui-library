import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-CFahbR6w.js";import{c as L,a as B,b as w}from"./index-fFXgbEt_.js";import{u as T}from"./index-CmtHiJK_.js";import{P as C}from"./index-KTNLvksQ.js";import{c as be,u as q}from"./index-GKcSamc8.js";import{u as Re}from"./index-D9hrn0-u.js";import{u as ge}from"./index-C_A5rLc3.js";import{u as Ne,a as we}from"./index-CTWW28yj.js";import{P as Ie}from"./index-BsSnUN43.js";import{c as Y}from"./utils-15tqT33e.js";import{c as ye}from"./createLucideIcon-DWaKWC9b.js";import"./index-CHC4nfYS.js";import"./index-chp1rBSu.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Fe=ye("Circle",je);var M="rovingFocusGroup.onEntryFocus",Ce={bubbles:!1,cancelable:!0},E="RovingFocusGroup",[U,H,Ee]=be(E),[Ge,W]=L(E,[Ee]),[Se,_e]=Ge(E),$=s.forwardRef((o,r)=>e.jsx(U.Provider,{scope:o.__scopeRovingFocusGroup,children:e.jsx(U.Slot,{scope:o.__scopeRovingFocusGroup,children:e.jsx(De,{...o,ref:r})})}));$.displayName=E;var De=s.forwardRef((o,r)=>{const{__scopeRovingFocusGroup:t,orientation:a,loop:n=!1,dir:d,currentTabStopId:c,defaultCurrentTabStopId:x,onCurrentTabStopIdChange:v,onEntryFocus:m,preventScrollOnEntryFocus:l=!1,...f}=o,h=s.useRef(null),u=T(r,h),p=q(d),[g,i]=B({prop:c,defaultProp:x??null,onChange:v,caller:E}),[I,A]=s.useState(!1),N=ge(m),y=H(t),P=s.useRef(!1),[pe,K]=s.useState(0);return s.useEffect(()=>{const b=h.current;if(b)return b.addEventListener(M,N),()=>b.removeEventListener(M,N)},[N]),e.jsx(Se,{scope:t,orientation:a,dir:p,loop:n,currentTabStopId:g,onItemFocus:s.useCallback(b=>i(b),[i]),onItemShiftTab:s.useCallback(()=>A(!0),[]),onFocusableItemAdd:s.useCallback(()=>K(b=>b+1),[]),onFocusableItemRemove:s.useCallback(()=>K(b=>b-1),[]),children:e.jsx(C.div,{tabIndex:I||pe===0?-1:0,"data-orientation":a,...f,ref:u,style:{outline:"none",...o.style},onMouseDown:w(o.onMouseDown,()=>{P.current=!0}),onFocus:w(o.onFocus,b=>{const fe=!P.current;if(b.target===b.currentTarget&&fe&&!I){const V=new CustomEvent(M,Ce);if(b.currentTarget.dispatchEvent(V),!V.defaultPrevented){const O=y().filter(j=>j.focusable),xe=O.find(j=>j.active),ve=O.find(j=>j.id===g),he=[xe,ve,...O].filter(Boolean).map(j=>j.ref.current);Q(he,l)}}P.current=!1}),onBlur:w(o.onBlur,()=>A(!1))})})}),X="RovingFocusGroupItem",J=s.forwardRef((o,r)=>{const{__scopeRovingFocusGroup:t,focusable:a=!0,active:n=!1,tabStopId:d,children:c,...x}=o,v=Re(),m=d||v,l=_e(X,t),f=l.currentTabStopId===m,h=H(t),{onFocusableItemAdd:u,onFocusableItemRemove:p,currentTabStopId:g}=l;return s.useEffect(()=>{if(a)return u(),()=>p()},[a,u,p]),e.jsx(U.ItemSlot,{scope:t,id:m,focusable:a,active:n,children:e.jsx(C.span,{tabIndex:f?0:-1,"data-orientation":l.orientation,...x,ref:r,onMouseDown:w(o.onMouseDown,i=>{a?l.onItemFocus(m):i.preventDefault()}),onFocus:w(o.onFocus,()=>l.onItemFocus(m)),onKeyDown:w(o.onKeyDown,i=>{if(i.key==="Tab"&&i.shiftKey){l.onItemShiftTab();return}if(i.target!==i.currentTarget)return;const I=Ae(i,l.orientation,l.dir);if(I!==void 0){if(i.metaKey||i.ctrlKey||i.altKey||i.shiftKey)return;i.preventDefault();let N=h().filter(y=>y.focusable).map(y=>y.ref.current);if(I==="last")N.reverse();else if(I==="prev"||I==="next"){I==="prev"&&N.reverse();const y=N.indexOf(i.currentTarget);N=l.loop?Pe(N,y+1):N.slice(y+1)}setTimeout(()=>Q(N))}}),children:typeof c=="function"?c({isCurrentTabStop:f,hasTabStop:g!=null}):c})})});J.displayName=X;var Te={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ke(o,r){return r!=="rtl"?o:o==="ArrowLeft"?"ArrowRight":o==="ArrowRight"?"ArrowLeft":o}function Ae(o,r,t){const a=ke(o.key,t);if(!(r==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(r==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return Te[a]}function Q(o,r=!1){const t=document.activeElement;for(const a of o)if(a===t||(a.focus({preventScroll:r}),document.activeElement!==t))return}function Pe(o,r){return o.map((t,a)=>o[(r+a)%o.length])}var Oe=$,Me=J,z="Radio",[Ue,Z]=L(z),[Le,ze]=Ue(z),ee=s.forwardRef((o,r)=>{const{__scopeRadio:t,name:a,checked:n=!1,required:d,disabled:c,value:x="on",onCheck:v,form:m,...l}=o,[f,h]=s.useState(null),u=T(r,i=>h(i)),p=s.useRef(!1),g=f?m||!!f.closest("form"):!0;return e.jsxs(Le,{scope:t,checked:n,disabled:c,children:[e.jsx(C.button,{type:"button",role:"radio","aria-checked":n,"data-state":ae(n),"data-disabled":c?"":void 0,disabled:c,value:x,...l,ref:u,onClick:w(o.onClick,i=>{n||v?.(),g&&(p.current=i.isPropagationStopped(),p.current||i.stopPropagation())})}),g&&e.jsx(re,{control:f,bubbles:!p.current,name:a,value:x,checked:n,required:d,disabled:c,form:m,style:{transform:"translateX(-100%)"}})]})});ee.displayName=z;var oe="RadioIndicator",te=s.forwardRef((o,r)=>{const{__scopeRadio:t,forceMount:a,...n}=o,d=ze(oe,t);return e.jsx(Ie,{present:a||d.checked,children:e.jsx(C.span,{"data-state":ae(d.checked),"data-disabled":d.disabled?"":void 0,...n,ref:r})})});te.displayName=oe;var Ke="RadioBubbleInput",re=s.forwardRef(({__scopeRadio:o,control:r,checked:t,bubbles:a=!0,...n},d)=>{const c=s.useRef(null),x=T(c,d),v=Ne(t),m=we(r);return s.useEffect(()=>{const l=c.current;if(!l)return;const f=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(f,"checked").set;if(v!==t&&u){const p=new Event("click",{bubbles:a});u.call(l,t),l.dispatchEvent(p)}},[v,t,a]),e.jsx(C.input,{type:"radio","aria-hidden":!0,defaultChecked:t,...n,tabIndex:-1,ref:x,style:{...n.style,...m,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});re.displayName=Ke;function ae(o){return o?"checked":"unchecked"}var Ve=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],k="RadioGroup",[Be,uo]=L(k,[W,Z]),se=W(),ne=Z(),[qe,Ye]=Be(k),ie=s.forwardRef((o,r)=>{const{__scopeRadioGroup:t,name:a,defaultValue:n,value:d,required:c=!1,disabled:x=!1,orientation:v,dir:m,loop:l=!0,onValueChange:f,...h}=o,u=se(t),p=q(m),[g,i]=B({prop:d,defaultProp:n??"",onChange:f,caller:k});return e.jsx(qe,{scope:t,name:a,required:c,disabled:x,value:g,onValueChange:i,children:e.jsx(Oe,{asChild:!0,...u,orientation:v,dir:p,loop:l,children:e.jsx(C.div,{role:"radiogroup","aria-required":c,"aria-orientation":v,"data-disabled":x?"":void 0,dir:p,...h,ref:r})})})});ie.displayName=k;var le="RadioGroupItem",de=s.forwardRef((o,r)=>{const{__scopeRadioGroup:t,disabled:a,...n}=o,d=Ye(le,t),c=d.disabled||a,x=se(t),v=ne(t),m=s.useRef(null),l=T(r,m),f=d.value===n.value,h=s.useRef(!1);return s.useEffect(()=>{const u=g=>{Ve.includes(g.key)&&(h.current=!0)},p=()=>h.current=!1;return document.addEventListener("keydown",u),document.addEventListener("keyup",p),()=>{document.removeEventListener("keydown",u),document.removeEventListener("keyup",p)}},[]),e.jsx(Me,{asChild:!0,...x,focusable:!c,active:f,children:e.jsx(ee,{disabled:c,required:d.required,checked:f,...v,...n,name:d.name,ref:l,onCheck:()=>d.onValueChange(n.value),onKeyDown:w(u=>{u.key==="Enter"&&u.preventDefault()}),onFocus:w(n.onFocus,()=>{h.current&&m.current?.click()})})})});de.displayName=le;var He="RadioGroupIndicator",ce=s.forwardRef((o,r)=>{const{__scopeRadioGroup:t,...a}=o,n=ne(t);return e.jsx(te,{...n,...a,ref:r})});ce.displayName=He;var ue=ie,me=de,We=ce;const F=s.forwardRef(({className:o,...r},t)=>e.jsx(ue,{className:Y("grid gap-2",o),...r,ref:t}));F.displayName=ue.displayName;const R=s.forwardRef(({className:o,...r},t)=>e.jsx(me,{ref:t,className:Y("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",o),...r,children:e.jsx(We,{className:"flex items-center justify-center",children:e.jsx(Fe,{className:"h-2.5 w-2.5 fill-current text-current"})})}));R.displayName=me.displayName;F.__docgenInfo={description:"",methods:[]};R.__docgenInfo={description:"",methods:[]};const mo={title:"Components/RadioGroup",component:F,parameters:{layout:"centered"},tags:["autodocs"]},G={render:()=>e.jsxs(F,{defaultValue:"option-one",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(R,{value:"option-one",id:"option-one"}),e.jsx("label",{htmlFor:"option-one",className:"text-sm font-medium",children:"Option One"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(R,{value:"option-two",id:"option-two"}),e.jsx("label",{htmlFor:"option-two",className:"text-sm font-medium",children:"Option Two"})]})]})},S={render:()=>e.jsxs(F,{defaultValue:"default",children:[e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(R,{value:"default",id:"r1"}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx("label",{htmlFor:"r1",className:"text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Default"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Use the system default theme."})]})]}),e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(R,{value:"light",id:"r2"}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx("label",{htmlFor:"r2",className:"text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Light"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Use the light theme."})]})]}),e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(R,{value:"dark",id:"r3"}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx("label",{htmlFor:"r3",className:"text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Dark"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Use the dark theme."})]})]})]})},_={render:()=>e.jsxs(F,{defaultValue:"option-one",disabled:!0,children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(R,{value:"option-one",id:"disabled-option-one"}),e.jsx("label",{htmlFor:"disabled-option-one",className:"text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Option One (Selected & Disabled)"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(R,{value:"option-two",id:"disabled-option-two"}),e.jsx("label",{htmlFor:"disabled-option-two",className:"text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Option Two (Disabled)"})]})]})},D={render:()=>e.jsxs(F,{defaultValue:"option-one",className:"flex flex-row space-x-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(R,{value:"option-one",id:"horizontal-one"}),e.jsx("label",{htmlFor:"horizontal-one",className:"text-sm font-medium",children:"Yes"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(R,{value:"option-two",id:"horizontal-two"}),e.jsx("label",{htmlFor:"horizontal-two",className:"text-sm font-medium",children:"No"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(R,{value:"option-three",id:"horizontal-three"}),e.jsx("label",{htmlFor:"horizontal-three",className:"text-sm font-medium",children:"Maybe"})]})]})};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <label htmlFor="option-one" className="text-sm font-medium">
                    Option One
                </label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <label htmlFor="option-two" className="text-sm font-medium">
                    Option Two
                </label>
            </div>
        </RadioGroup>
}`,...G.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="default">
            <div className="flex items-start space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <div className="grid gap-1.5 leading-none">
                    <label htmlFor="r1" className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Default
                    </label>
                    <p className="text-sm text-muted-foreground">
                        Use the system default theme.
                    </p>
                </div>
            </div>
            <div className="flex items-start space-x-2">
                <RadioGroupItem value="light" id="r2" />
                <div className="grid gap-1.5 leading-none">
                    <label htmlFor="r2" className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Light
                    </label>
                    <p className="text-sm text-muted-foreground">Use the light theme.</p>
                </div>
            </div>
            <div className="flex items-start space-x-2">
                <RadioGroupItem value="dark" id="r3" />
                <div className="grid gap-1.5 leading-none">
                    <label htmlFor="r3" className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Dark
                    </label>
                    <p className="text-sm text-muted-foreground">Use the dark theme.</p>
                </div>
            </div>
        </RadioGroup>
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-one" disabled>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="disabled-option-one" />
                <label htmlFor="disabled-option-one" className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Option One (Selected & Disabled)
                </label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="disabled-option-two" />
                <label htmlFor="disabled-option-two" className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Option Two (Disabled)
                </label>
            </div>
        </RadioGroup>
}`,..._.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-one" className="flex flex-row space-x-4">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="horizontal-one" />
                <label htmlFor="horizontal-one" className="text-sm font-medium">
                    Yes
                </label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="horizontal-two" />
                <label htmlFor="horizontal-two" className="text-sm font-medium">
                    No
                </label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="horizontal-three" />
                <label htmlFor="horizontal-three" className="text-sm font-medium">
                    Maybe
                </label>
            </div>
        </RadioGroup>
}`,...D.parameters?.docs?.source}}};const po=["Default","WithDescriptions","Disabled","Horizontal"];export{G as Default,_ as Disabled,D as Horizontal,S as WithDescriptions,po as __namedExportsOrder,mo as default};
