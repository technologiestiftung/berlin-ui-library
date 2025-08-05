import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{a as X,b as K,c as J,d as Q,e as Z,f as ee}from"./Form-H9gd3w_p.js";import{I as M}from"./Input-CWWsW1Ai.js";import{T as te}from"./Textarea-98_AdlF2.js";import{h as $,R as re,A as oe,C as ne,i as se,j as ae,S as ie,a as le,b as ce,c as ue,d as de,e as me}from"./Select-D_GGFChV.js";import{C as L}from"./Checkbox-CjUE4-Ry.js";import{R as pe,a as fe}from"./RadioGroup-BgtLJsvm.js";import{r as l}from"./index-BCtMShv3.js";import{u as he,c as C}from"./index-DkX7lMs-.js";import{u as H,a as xe}from"./index-BcXugKMQ.js";import{c as ve}from"./index-SpqsU_53.js";import{D as be}from"./index-BM8igCfQ.js";import{u as ge}from"./index-9SeOqIlT.js";import{P as ye}from"./index-BMmUsUVr.js";import{P as Ce}from"./index-LATptceI.js";import{c as Te}from"./utils-15tqT33e.js";import{L as N}from"./Label-yUWueOTO.js";import{c as we}from"./createLucideIcon-DOlFIQMa.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Fe=we("Info",je);var[E,Ct]=ve("Tooltip",[$]),P=$(),G="TooltipProvider",Re=700,S="tooltip.open",[Ee,D]=E(G),V=e=>{const{__scopeTooltip:t,delayDuration:r=Re,skipDelayDuration:o=300,disableHoverableContent:n=!1,children:a}=e,i=l.useRef(!0),u=l.useRef(!1),c=l.useRef(0);return l.useEffect(()=>{const p=c.current;return()=>window.clearTimeout(p)},[]),s.jsx(Ee,{scope:t,isOpenDelayedRef:i,delayDuration:r,onOpen:l.useCallback(()=>{window.clearTimeout(c.current),i.current=!1},[]),onClose:l.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>i.current=!0,o)},[o]),isPointerInTransitRef:u,onPointerInTransitChange:l.useCallback(p=>{u.current=p},[]),disableHoverableContent:n,children:a})};V.displayName=G;var R="Tooltip",[Pe,k]=E(R),q=e=>{const{__scopeTooltip:t,children:r,open:o,defaultOpen:n,onOpenChange:a,disableHoverableContent:i,delayDuration:u}=e,c=D(R,e.__scopeTooltip),p=P(t),[d,m]=l.useState(null),h=ge(),f=l.useRef(0),x=i??c.disableHoverableContent,b=u??c.delayDuration,v=l.useRef(!1),[y,g]=he({prop:o,defaultProp:n??!1,onChange:I=>{I?(c.onOpen(),document.dispatchEvent(new CustomEvent(S))):c.onClose(),a?.(I)},caller:R}),w=l.useMemo(()=>y?v.current?"delayed-open":"instant-open":"closed",[y]),j=l.useCallback(()=>{window.clearTimeout(f.current),f.current=0,v.current=!1,g(!0)},[g]),F=l.useCallback(()=>{window.clearTimeout(f.current),f.current=0,g(!1)},[g]),A=l.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{v.current=!0,g(!0),f.current=0},b)},[b,g]);return l.useEffect(()=>()=>{f.current&&(window.clearTimeout(f.current),f.current=0)},[]),s.jsx(re,{...p,children:s.jsx(Pe,{scope:t,contentId:h,open:y,stateAttribute:w,trigger:d,onTriggerChange:m,onTriggerEnter:l.useCallback(()=>{c.isOpenDelayedRef.current?A():j()},[c.isOpenDelayedRef,A,j]),onTriggerLeave:l.useCallback(()=>{x?F():(window.clearTimeout(f.current),f.current=0)},[F,x]),onOpen:j,onClose:F,disableHoverableContent:x,children:r})})};q.displayName=R;var _="TooltipTrigger",W=l.forwardRef((e,t)=>{const{__scopeTooltip:r,...o}=e,n=k(_,r),a=D(_,r),i=P(r),u=l.useRef(null),c=H(t,u,n.onTriggerChange),p=l.useRef(!1),d=l.useRef(!1),m=l.useCallback(()=>p.current=!1,[]);return l.useEffect(()=>()=>document.removeEventListener("pointerup",m),[m]),s.jsx(oe,{asChild:!0,...i,children:s.jsx(Ce.button,{"aria-describedby":n.open?n.contentId:void 0,"data-state":n.stateAttribute,...o,ref:c,onPointerMove:C(e.onPointerMove,h=>{h.pointerType!=="touch"&&!d.current&&!a.isPointerInTransitRef.current&&(n.onTriggerEnter(),d.current=!0)}),onPointerLeave:C(e.onPointerLeave,()=>{n.onTriggerLeave(),d.current=!1}),onPointerDown:C(e.onPointerDown,()=>{n.open&&n.onClose(),p.current=!0,document.addEventListener("pointerup",m,{once:!0})}),onFocus:C(e.onFocus,()=>{p.current||n.onOpen()}),onBlur:C(e.onBlur,n.onClose),onClick:C(e.onClick,n.onClose)})})});W.displayName=_;var ke="TooltipPortal",[Tt,Ne]=E(ke,{forceMount:void 0}),T="TooltipContent",U=l.forwardRef((e,t)=>{const r=Ne(T,e.__scopeTooltip),{forceMount:o=r.forceMount,side:n="top",...a}=e,i=k(T,e.__scopeTooltip);return s.jsx(ye,{present:o||i.open,children:i.disableHoverableContent?s.jsx(z,{side:n,...a,ref:t}):s.jsx(Se,{side:n,...a,ref:t})})}),Se=l.forwardRef((e,t)=>{const r=k(T,e.__scopeTooltip),o=D(T,e.__scopeTooltip),n=l.useRef(null),a=H(t,n),[i,u]=l.useState(null),{trigger:c,onClose:p}=r,d=n.current,{onPointerInTransitChange:m}=o,h=l.useCallback(()=>{u(null),m(!1)},[m]),f=l.useCallback((x,b)=>{const v=x.currentTarget,y={x:x.clientX,y:x.clientY},g=Ie(y,v.getBoundingClientRect()),w=Le(y,g),j=Me(b.getBoundingClientRect()),F=He([...w,...j]);u(F),m(!0)},[m]);return l.useEffect(()=>()=>h(),[h]),l.useEffect(()=>{if(c&&d){const x=v=>f(v,d),b=v=>f(v,c);return c.addEventListener("pointerleave",x),d.addEventListener("pointerleave",b),()=>{c.removeEventListener("pointerleave",x),d.removeEventListener("pointerleave",b)}}},[c,d,f,h]),l.useEffect(()=>{if(i){const x=b=>{const v=b.target,y={x:b.clientX,y:b.clientY},g=c?.contains(v)||d?.contains(v),w=!$e(y,i);g?h():w&&(h(),p())};return document.addEventListener("pointermove",x),()=>document.removeEventListener("pointermove",x)}},[c,d,i,p,h]),s.jsx(z,{...e,ref:a})}),[_e,De]=E(R,{isInside:!1}),Oe=xe("TooltipContent"),z=l.forwardRef((e,t)=>{const{__scopeTooltip:r,children:o,"aria-label":n,onEscapeKeyDown:a,onPointerDownOutside:i,...u}=e,c=k(T,r),p=P(r),{onClose:d}=c;return l.useEffect(()=>(document.addEventListener(S,d),()=>document.removeEventListener(S,d)),[d]),l.useEffect(()=>{if(c.trigger){const m=h=>{h.target?.contains(c.trigger)&&d()};return window.addEventListener("scroll",m,{capture:!0}),()=>window.removeEventListener("scroll",m,{capture:!0})}},[c.trigger,d]),s.jsx(be,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:i,onFocusOutside:m=>m.preventDefault(),onDismiss:d,children:s.jsxs(ne,{"data-state":c.stateAttribute,...p,...u,ref:t,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[s.jsx(Oe,{children:o}),s.jsx(_e,{scope:r,isInside:!0,children:s.jsx(se,{id:c.contentId,role:"tooltip",children:n||o})})]})})});U.displayName=T;var B="TooltipArrow",Ae=l.forwardRef((e,t)=>{const{__scopeTooltip:r,...o}=e,n=P(r);return De(B,r).isInside?null:s.jsx(ae,{...n,...o,ref:t})});Ae.displayName=B;function Ie(e,t){const r=Math.abs(t.top-e.y),o=Math.abs(t.bottom-e.y),n=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(r,o,n,a)){case a:return"left";case n:return"right";case r:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function Le(e,t,r=5){const o=[];switch(t){case"top":o.push({x:e.x-r,y:e.y+r},{x:e.x+r,y:e.y+r});break;case"bottom":o.push({x:e.x-r,y:e.y-r},{x:e.x+r,y:e.y-r});break;case"left":o.push({x:e.x+r,y:e.y-r},{x:e.x+r,y:e.y+r});break;case"right":o.push({x:e.x-r,y:e.y-r},{x:e.x-r,y:e.y+r});break}return o}function Me(e){const{top:t,right:r,bottom:o,left:n}=e;return[{x:n,y:t},{x:r,y:t},{x:r,y:o},{x:n,y:o}]}function $e(e,t){const{x:r,y:o}=e;let n=!1;for(let a=0,i=t.length-1;a<t.length;i=a++){const u=t[a],c=t[i],p=u.x,d=u.y,m=c.x,h=c.y;d>o!=h>o&&r<(m-p)*(o-d)/(h-d)+p&&(n=!n)}return n}function He(e){const t=e.slice();return t.sort((r,o)=>r.x<o.x?-1:r.x>o.x?1:r.y<o.y?-1:r.y>o.y?1:0),Ge(t)}function Ge(e){if(e.length<=1)return e.slice();const t=[];for(let o=0;o<e.length;o++){const n=e[o];for(;t.length>=2;){const a=t[t.length-1],i=t[t.length-2];if((a.x-i.x)*(n.y-i.y)>=(a.y-i.y)*(n.x-i.x))t.pop();else break}t.push(n)}t.pop();const r=[];for(let o=e.length-1;o>=0;o--){const n=e[o];for(;r.length>=2;){const a=r[r.length-1],i=r[r.length-2];if((a.x-i.x)*(n.y-i.y)>=(a.y-i.y)*(n.x-i.x))r.pop();else break}r.push(n)}return r.pop(),t.length===1&&r.length===1&&t[0].x===r[0].x&&t[0].y===r[0].y?t:t.concat(r)}var Ve=V,qe=q,We=W,Y=U;const Ue=Ve,ze=qe,Be=We,O=l.forwardRef(({className:e,sideOffset:t=4,...r},o)=>s.jsx(Y,{ref:o,sideOffset:t,className:Te("bg-popover text-popover-foreground z-50 origin-[--radix-tooltip-content-transform-origin] overflow-hidden border px-3 py-1.5 text-sm shadow-md animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",e),...r}));O.displayName=Y.displayName;O.__docgenInfo={description:"",methods:[],props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const Ye=(e,t)=>{const{name:r,description:o,placeholder:n,isDisabled:a}=e,i=t.value!==void 0?t.value:"";return s.jsx(M,{...t,type:"number",min:e.min,max:e.max,step:e.step||1,placeholder:n||`Enter ${o||r}`,disabled:a,onChange:u=>{const c=u.target.value;c===""?t.onChange(""):t.onChange(Number(c))},value:i})},Xe=(e,t)=>{const{name:r,description:o,placeholder:n,isDisabled:a}=e;return s.jsx(M,{...t,type:e.type,placeholder:n||`Enter ${o||r}`,disabled:a})},Ke=(e,t)=>{const{name:r,description:o,placeholder:n,isDisabled:a}=e;return s.jsx(te,{...t,placeholder:n||`Enter ${o||r}`,disabled:a})},Je=(e,t)=>{const{name:r,description:o,options:n,isDisabled:a}=e,i=t.value!==void 0?t.value:"";return s.jsxs(ie,{disabled:a,onValueChange:t.onChange,value:i,defaultValue:i,children:[s.jsx(le,{className:"w-full",children:s.jsx(ce,{placeholder:`Select ${o||r}`})}),s.jsx(ue,{children:s.jsx(de,{children:n?.map(u=>s.jsx(me,{value:u.value,children:u.label||u.value},u.value))})})]})},Qe=(e,t)=>{const{name:r,isDisabled:o,options:n,direction:a}=e;if(n&&Array.isArray(n)&&n.length>0){let i=[];return Array.isArray(t.value)?i=t.value:t.value&&(i=[t.value]),s.jsx("div",{className:`flex ${a==="horizontal"?"flex-row space-x-4":"flex-col space-y-2"}`,children:n.map(u=>{const c=i.includes(u.value);return s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(L,{id:`${t.name}-${u.value}`,disabled:o,checked:c,onCheckedChange:p=>{const d=[...i];if(p)d.includes(u.value)||d.push(u.value);else{const m=d.indexOf(u.value);m>-1&&d.splice(m,1)}t.onChange(d)}}),s.jsx(N,{htmlFor:`${t.name}-${u.value}`,className:"leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",children:u.label||u.value})]},u.value)})})}return s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(L,{...t,id:t.name,disabled:o,checked:t.value,onCheckedChange:i=>{t.onChange(i)}}),s.jsx(N,{htmlFor:t.name,className:"text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",children:r})]})},Ze=(e,t)=>{const{options:r,isDisabled:o,direction:n}=e;return s.jsx(pe,{value:t.value,onValueChange:t.onChange,disabled:o,className:`flex ${n==="horizontal"?"flex-row space-x-4":"flex-col space-y-1"}`,children:r?.map(a=>s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(fe,{id:`${t.name}-${a.value}`,value:a.value}),s.jsx(N,{htmlFor:`${t.name}-${a.value}`,className:"leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",children:a.label||a.value})]},a.value))})},et=(e,t)=>{const{type:r}=e;switch(r){case"text":case"email":case"password":case"url":case"tel":case"date":case"datetime-local":return Xe(e,t);case"textarea":return Ke(e,t);case"number":return Ye(e,t);case"checkbox":return Qe(e,t);case"radio":return Ze(e,t);case"select":return Je(e,t);default:return null}},tt=e=>s.jsx(Ue,{children:s.jsxs(ze,{children:[s.jsx(Be,{asChild:!0,children:s.jsx(Fe,{className:"text-muted-foreground h-4 w-4"})}),s.jsx(O,{children:s.jsx("p",{children:e})})]})});function rt({formProperty:e,form:t}){const{id:r,name:o,description:n,isRequired:a,helperText:i}=e;return s.jsx(X,{control:t.control,name:r,render:({field:u})=>s.jsxs(K,{children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs(J,{className:"font-bold",children:[o,a&&s.jsx("span",{className:"ml-1 text-[1.75em] text-decorative-destructive align-top leading-none",children:"*"})]}),i&&tt(i)]}),s.jsx(Q,{children:et(e,u)}),s.jsx(Z,{className:"text-sm text-text-lightest",children:n}),s.jsx(ee,{})]})},r)}rt.__docgenInfo={description:`FormFieldWrapper - A flexible component for rendering different types of form fields

This component is designed to simplify form creation by rendering various input types
based on a configuration object. It supports text inputs, textareas, number inputs,
checkboxes, and select dropdowns.

@example
// Basic usage with react-hook-form
import { useForm, type FieldValues } from 'react-hook-form';
import { Form } from '../Form';
import { FormFieldWrapper } from './FormFieldWrapper';

function MyForm() {
  const methods = useForm();

  const textField = {
    id: "fullName",
    name: "Full Name",
    type: "text",
    description: "Your first and last name",
    isRequired: true
  };

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormFieldWrapper formProperty={textField} form={methods} />
        <button type="submit">Submit</button>
      </form>
    </Form>
  );
}

@example
// Creating a form with multiple field types
const formFields = [
  {
    id: "name",
    name: "Name",
    type: "text",
    isRequired: true
  },
  {
    id: "email",
    name: "Email",
    type: "email",
    isRequired: true
  },
  {
    id: "message",
    name: "Message",
    type: "textarea",
    description: "Your message"
  },
  {
    id: "category",
    name: "Category",
    type: "select",
    options: [
      { value: "general", label: "General Inquiry" },
      { value: "support", label: "Technical Support" },
      { value: "feedback", label: "Feedback" }
    ]
  },
  {
    id: "subscribe",
    name: "Subscribe to newsletter",
    type: "checkbox"
  }
];

// Then in your component:
<Form {...methods}>
  <form onSubmit={methods.handleSubmit(onSubmit)}>
    {formFields.map(field => (
      <FormFieldWrapper
        key={field.id}
        formProperty={field}
        form={methods}
      />
    ))}
    <button type="submit">Submit</button>
  </form>
</Form>`,methods:[],displayName:"FormFieldWrapper",props:{formProperty:{required:!0,tsType:{name:"FormProperty"},description:"Object that defines the properties of the form field"},form:{required:!0,tsType:{name:"UseFormReturn",elements:[{name:"any"}],raw:"UseFormReturn<any>"},description:`React Hook Form methods object from useForm()
Must be a UseFormReturn<any> instance from react-hook-form`}}};export{rt as F};
