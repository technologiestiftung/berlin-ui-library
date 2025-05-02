import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{a as oe,b as ne,c as se,d as ae,e as ie,f as le,u as F,F as C}from"./Form-CRhJaKmf.js";import{I as Y}from"./Input-CNPTp5sg.js";import{T as ce}from"./Textarea-DXI1RkBh.js";import{h as $,R as de,A as ue,C as me,i as pe,j as fe,S as he,a as ye,b as xe,c as be,d as ve,e as ge}from"./Select-Dvnjq5I7.js";import{C as Te}from"./Checkbox-DBgdhggK.js";import{r as l}from"./index-CFahbR6w.js";import{c as Fe,a as Ce,b as w}from"./index-fFXgbEt_.js";import{u as K,a as we}from"./index-CmtHiJK_.js";import{D as Re}from"./index-Btk-NVQ6.js";import{u as je}from"./index-D9hrn0-u.js";import{P as Pe}from"./index-BsSnUN43.js";import{P as Se}from"./index-KTNLvksQ.js";import{c as Ee}from"./utils-15tqT33e.js";import{c as Ie}from"./createLucideIcon-DWaKWC9b.js";import{B as ke}from"./Button-lPW3mpyF.js";import"./index-B-xwPz7g.js";import"./Label-CTfZ0s5f.js";import"./index-CHC4nfYS.js";import"./index-chp1rBSu.js";import"./index-GKcSamc8.js";import"./index-C_A5rLc3.js";import"./index-CTWW28yj.js";import"./chevron-down-CIrWunyT.js";import"./check-MFvInxwV.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],De=Ie("Info",Ne);var[O,qr]=Fe("Tooltip",[$]),L=$(),J="TooltipProvider",qe=700,W="tooltip.open",[Ae,H]=O(J),z=e=>{const{__scopeTooltip:r,delayDuration:t=qe,skipDelayDuration:n=300,disableHoverableContent:s=!1,children:a}=e,i=l.useRef(!0),d=l.useRef(!1),c=l.useRef(0);return l.useEffect(()=>{const p=c.current;return()=>window.clearTimeout(p)},[]),o.jsx(Ae,{scope:r,isOpenDelayedRef:i,delayDuration:t,onOpen:l.useCallback(()=>{window.clearTimeout(c.current),i.current=!1},[]),onClose:l.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>i.current=!0,n)},[n]),isPointerInTransitRef:d,onPointerInTransitChange:l.useCallback(p=>{d.current=p},[]),disableHoverableContent:s,children:a})};z.displayName=J;var E="Tooltip",[_e,M]=O(E),X=e=>{const{__scopeTooltip:r,children:t,open:n,defaultOpen:s,onOpenChange:a,disableHoverableContent:i,delayDuration:d}=e,c=H(E,e.__scopeTooltip),p=L(r),[u,f]=l.useState(null),h=je(),m=l.useRef(0),y=i??c.disableHoverableContent,b=d??c.delayDuration,x=l.useRef(!1),[T,v]=Ce({prop:n,defaultProp:s??!1,onChange:U=>{U?(c.onOpen(),document.dispatchEvent(new CustomEvent(W))):c.onClose(),a?.(U)},caller:E}),j=l.useMemo(()=>T?x.current?"delayed-open":"instant-open":"closed",[T]),P=l.useCallback(()=>{window.clearTimeout(m.current),m.current=0,x.current=!1,v(!0)},[v]),S=l.useCallback(()=>{window.clearTimeout(m.current),m.current=0,v(!1)},[v]),B=l.useCallback(()=>{window.clearTimeout(m.current),m.current=window.setTimeout(()=>{x.current=!0,v(!0),m.current=0},b)},[b,v]);return l.useEffect(()=>()=>{m.current&&(window.clearTimeout(m.current),m.current=0)},[]),o.jsx(de,{...p,children:o.jsx(_e,{scope:r,contentId:h,open:T,stateAttribute:j,trigger:u,onTriggerChange:f,onTriggerEnter:l.useCallback(()=>{c.isOpenDelayedRef.current?B():P()},[c.isOpenDelayedRef,B,P]),onTriggerLeave:l.useCallback(()=>{y?S():(window.clearTimeout(m.current),m.current=0)},[S,y]),onOpen:P,onClose:S,disableHoverableContent:y,children:t})})};X.displayName=E;var V="TooltipTrigger",Q=l.forwardRef((e,r)=>{const{__scopeTooltip:t,...n}=e,s=M(V,t),a=H(V,t),i=L(t),d=l.useRef(null),c=K(r,d,s.onTriggerChange),p=l.useRef(!1),u=l.useRef(!1),f=l.useCallback(()=>p.current=!1,[]);return l.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),o.jsx(ue,{asChild:!0,...i,children:o.jsx(Se.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...n,ref:c,onPointerMove:w(e.onPointerMove,h=>{h.pointerType!=="touch"&&!u.current&&!a.isPointerInTransitRef.current&&(s.onTriggerEnter(),u.current=!0)}),onPointerLeave:w(e.onPointerLeave,()=>{s.onTriggerLeave(),u.current=!1}),onPointerDown:w(e.onPointerDown,()=>{s.open&&s.onClose(),p.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:w(e.onFocus,()=>{p.current||s.onOpen()}),onBlur:w(e.onBlur,s.onClose),onClick:w(e.onClick,s.onClose)})})});Q.displayName=V;var Oe="TooltipPortal",[Ar,Le]=O(Oe,{forceMount:void 0}),R="TooltipContent",Z=l.forwardRef((e,r)=>{const t=Le(R,e.__scopeTooltip),{forceMount:n=t.forceMount,side:s="top",...a}=e,i=M(R,e.__scopeTooltip);return o.jsx(Pe,{present:n||i.open,children:i.disableHoverableContent?o.jsx(ee,{side:s,...a,ref:r}):o.jsx(Me,{side:s,...a,ref:r})})}),Me=l.forwardRef((e,r)=>{const t=M(R,e.__scopeTooltip),n=H(R,e.__scopeTooltip),s=l.useRef(null),a=K(r,s),[i,d]=l.useState(null),{trigger:c,onClose:p}=t,u=s.current,{onPointerInTransitChange:f}=n,h=l.useCallback(()=>{d(null),f(!1)},[f]),m=l.useCallback((y,b)=>{const x=y.currentTarget,T={x:y.clientX,y:y.clientY},v=Be(T,x.getBoundingClientRect()),j=Ue(T,v),P=Ye(b.getBoundingClientRect()),S=Ke([...j,...P]);d(S),f(!0)},[f]);return l.useEffect(()=>()=>h(),[h]),l.useEffect(()=>{if(c&&u){const y=x=>m(x,u),b=x=>m(x,c);return c.addEventListener("pointerleave",y),u.addEventListener("pointerleave",b),()=>{c.removeEventListener("pointerleave",y),u.removeEventListener("pointerleave",b)}}},[c,u,m,h]),l.useEffect(()=>{if(i){const y=b=>{const x=b.target,T={x:b.clientX,y:b.clientY},v=c?.contains(x)||u?.contains(x),j=!$e(T,i);v?h():j&&(h(),p())};return document.addEventListener("pointermove",y),()=>document.removeEventListener("pointermove",y)}},[c,u,i,p,h]),o.jsx(ee,{...e,ref:a})}),[We,Ve]=O(E,{isInside:!1}),He=we("TooltipContent"),ee=l.forwardRef((e,r)=>{const{__scopeTooltip:t,children:n,"aria-label":s,onEscapeKeyDown:a,onPointerDownOutside:i,...d}=e,c=M(R,t),p=L(t),{onClose:u}=c;return l.useEffect(()=>(document.addEventListener(W,u),()=>document.removeEventListener(W,u)),[u]),l.useEffect(()=>{if(c.trigger){const f=h=>{h.target?.contains(c.trigger)&&u()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[c.trigger,u]),o.jsx(Re,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:i,onFocusOutside:f=>f.preventDefault(),onDismiss:u,children:o.jsxs(me,{"data-state":c.stateAttribute,...p,...d,ref:r,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[o.jsx(He,{children:n}),o.jsx(We,{scope:t,isInside:!0,children:o.jsx(pe,{id:c.contentId,role:"tooltip",children:s||n})})]})})});Z.displayName=R;var re="TooltipArrow",Ge=l.forwardRef((e,r)=>{const{__scopeTooltip:t,...n}=e,s=L(t);return Ve(re,t).isInside?null:o.jsx(fe,{...s,...n,ref:r})});Ge.displayName=re;function Be(e,r){const t=Math.abs(r.top-e.y),n=Math.abs(r.bottom-e.y),s=Math.abs(r.right-e.x),a=Math.abs(r.left-e.x);switch(Math.min(t,n,s,a)){case a:return"left";case s:return"right";case t:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function Ue(e,r,t=5){const n=[];switch(r){case"top":n.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":n.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":n.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":n.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return n}function Ye(e){const{top:r,right:t,bottom:n,left:s}=e;return[{x:s,y:r},{x:t,y:r},{x:t,y:n},{x:s,y:n}]}function $e(e,r){const{x:t,y:n}=e;let s=!1;for(let a=0,i=r.length-1;a<r.length;i=a++){const d=r[a],c=r[i],p=d.x,u=d.y,f=c.x,h=c.y;u>n!=h>n&&t<(f-p)*(n-u)/(h-u)+p&&(s=!s)}return s}function Ke(e){const r=e.slice();return r.sort((t,n)=>t.x<n.x?-1:t.x>n.x?1:t.y<n.y?-1:t.y>n.y?1:0),Je(r)}function Je(e){if(e.length<=1)return e.slice();const r=[];for(let n=0;n<e.length;n++){const s=e[n];for(;r.length>=2;){const a=r[r.length-1],i=r[r.length-2];if((a.x-i.x)*(s.y-i.y)>=(a.y-i.y)*(s.x-i.x))r.pop();else break}r.push(s)}r.pop();const t=[];for(let n=e.length-1;n>=0;n--){const s=e[n];for(;t.length>=2;){const a=t[t.length-1],i=t[t.length-2];if((a.x-i.x)*(s.y-i.y)>=(a.y-i.y)*(s.x-i.x))t.pop();else break}t.push(s)}return t.pop(),r.length===1&&t.length===1&&r[0].x===t[0].x&&r[0].y===t[0].y?r:r.concat(t)}var ze=z,Xe=X,Qe=Q,te=Z;const Ze=ze,er=Xe,rr=Qe,G=l.forwardRef(({className:e,sideOffset:r=4,...t},n)=>o.jsx(te,{ref:n,sideOffset:r,className:Ee("z-50 origin-[--radix-tooltip-content-transform-origin] overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",e),...t}));G.displayName=te.displayName;G.__docgenInfo={description:"",methods:[],props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const tr=(e,r)=>{const{name:t,description:n,placeholder:s,isDisabled:a}=e,i=r.value!==void 0?r.value:"";return o.jsx(Y,{...r,type:"number",min:e.min,max:e.max,step:e.step||1,placeholder:s||`Enter ${n||t}`,disabled:a,onChange:d=>{const c=d.target.value;c===""?r.onChange(""):r.onChange(Number(c))},value:i})},or=(e,r)=>{const{name:t,description:n,placeholder:s,isDisabled:a}=e;return o.jsx(Y,{...r,type:e.type,placeholder:s||`Enter ${n||t}`,disabled:a})},nr=(e,r)=>{const{name:t,description:n,placeholder:s,isDisabled:a}=e;return o.jsx(ce,{...r,placeholder:s||`Enter ${n||t}`,disabled:a})},sr=(e,r)=>{const{name:t,description:n,options:s,isDisabled:a}=e,i=r.value!==void 0?r.value:"";return o.jsxs(he,{disabled:a,onValueChange:r.onChange,value:i,defaultValue:i,children:[o.jsx(ye,{className:"w-full",children:o.jsx(xe,{placeholder:`Select ${n||t}`})}),o.jsx(be,{children:o.jsx(ve,{children:s?.map(d=>o.jsx(ge,{value:d.value,children:d.label||d.value},d.value))})})]})},ar=(e,r)=>{const{name:t,description:n,isDisabled:s}=e;return o.jsx(Te,{...r,disabled:s,checked:r.value,onCheckedChange:a=>{r.onChange(a)},children:n||t})},ir=(e,r)=>{const{type:t}=e;switch(t){case"text":case"email":case"password":case"url":case"tel":case"date":case"datetime-local":return or(e,r);case"textarea":return nr(e,r);case"number":return tr(e,r);case"checkbox":return ar(e,r);case"select":return sr(e,r);default:return null}},lr=e=>o.jsx(Ze,{children:o.jsxs(er,{children:[o.jsx(rr,{asChild:!0,children:o.jsx(De,{className:"h-4 w-4 text-muted-foreground"})}),o.jsx(G,{children:o.jsx("p",{children:e})})]})});function g({formProperty:e,form:r}){const{id:t,name:n,description:s,isRequired:a,helperText:i}=e;return o.jsx(oe,{control:r.control,name:t,render:({field:d})=>o.jsxs(ne,{children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs(se,{className:"text-sm",children:[n,a&&o.jsx("span",{className:"ml-1 text-destructive",children:"*"})]}),i&&lr(i)]}),o.jsx(ae,{children:ir(e,d)}),o.jsx(ie,{className:"text-sm text-muted-foreground",children:s}),o.jsx(le,{})]})},t)}g.__docgenInfo={description:`FormFieldWrapper - A flexible component for rendering different types of form fields

This component is designed to simplify form creation by rendering various input types
based on a configuration object. It supports text inputs, textareas, number inputs,
checkboxes, and select dropdowns.

@example
// Basic usage with react-hook-form
import { useForm } from 'react-hook-form';
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
</Form>`,methods:[],displayName:"FormFieldWrapper",props:{formProperty:{required:!0,tsType:{name:"FormProperty"},description:"Object that defines the properties of the form field"},form:{required:!0,tsType:{name:"any"},description:"React Hook Form methods object (from useForm())"}}};const _r={title:"Components/FormFieldWrapper",component:g,parameters:{layout:"centered"},tags:["autodocs"]},I={render:()=>{const e=F({defaultValues:{name:""}}),r={id:"name",name:"Name",type:"text",description:"Enter your full name",placeholder:"John Doe",helperText:"This name will be used on your certificate",isRequired:!0};return o.jsx(C,{...e,children:o.jsx("form",{children:o.jsx(g,{formProperty:r,form:e})})})}},k={render:()=>{const e=F({defaultValues:{age:""}}),r={id:"age",name:"Age",type:"number",description:"Enter your age",placeholder:"30",helperText:"You must be at least 18 years old to register",isRequired:!0,min:0,max:120};return o.jsx(C,{...e,children:o.jsx("form",{children:o.jsx(g,{formProperty:r,form:e})})})}},N={render:()=>{const e=F({defaultValues:{bio:""}}),r={id:"bio",name:"Biography",type:"textarea",description:"Tell us about yourself",placeholder:"I am...",helperText:"Keep it brief and focused on your professional experience",isRequired:!1};return o.jsx(C,{...e,children:o.jsx("form",{children:o.jsx(g,{formProperty:r,form:e})})})}},D={render:()=>{const e=F({defaultValues:{country:""}}),r={id:"country",name:"Country",type:"select",description:"Select your country",helperText:"This determines which regional office will contact you",isRequired:!0,options:[{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"uk",label:"United Kingdom"},{value:"us",label:"United States"}]};return o.jsx(C,{...e,children:o.jsx("form",{children:o.jsx(g,{formProperty:r,form:e})})})}},q={render:()=>{const e=F({defaultValues:{accept:!1}}),r={id:"accept",name:"Accept Terms",type:"checkbox",description:"I agree to the terms and conditions",helperText:"You must accept our terms to continue",isRequired:!0};return o.jsx(C,{...e,children:o.jsx("form",{children:o.jsx(g,{formProperty:r,form:e})})})}},A={render:()=>{const e=F({defaultValues:{disabledField:"This value cannot be changed"}}),r={id:"disabledField",name:"Disabled Field",type:"text",description:"This field is disabled",helperText:"Contact support to modify this value",isRequired:!1,isDisabled:!0};return o.jsx(C,{...e,children:o.jsx("form",{children:o.jsx(g,{formProperty:r,form:e})})})}},_={render:()=>{const e=F({defaultValues:{fullName:"",email:"",age:"",bio:"",country:"",newsletter:!1,terms:!1}}),r=[{id:"fullName",name:"Full Name",type:"text",description:"Your first and last name",placeholder:"John Doe",helperText:"As it appears on your government ID",isRequired:!0},{id:"email",name:"Email Address",type:"email",description:"We will only use this for important notifications",placeholder:"john.doe@example.com",helperText:"You'll receive a verification email",isRequired:!0},{id:"age",name:"Age",type:"number",description:"Must be 18 or older",helperText:"We verify age for legal compliance",min:18,max:120,isRequired:!1},{id:"bio",name:"Biography",type:"textarea",description:"Tell us a bit about yourself",placeholder:"I'm a...",helperText:"This will be visible on your public profile",isRequired:!1},{id:"country",name:"Country",type:"select",description:"Where are you from?",helperText:"Used to customize your experience",isRequired:!0,options:[{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"uk",label:"United Kingdom"},{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"}]},{id:"newsletter",name:"Subscribe to newsletter",type:"checkbox",description:"Receive updates about our services",helperText:"We send about one email per month",isRequired:!1},{id:"terms",name:"Terms and Conditions",type:"checkbox",description:"I agree to the terms and conditions",helperText:"Required to create your account",isRequired:!0}],t=n=>{alert(JSON.stringify(n,null,2))};return o.jsx("div",{style:{width:"500px",maxWidth:"100%"},children:o.jsx(C,{...e,children:o.jsxs("form",{onSubmit:e.handleSubmit(t),className:"space-y-6",children:[o.jsx("div",{className:"space-y-4",children:r.map(n=>o.jsx(g,{formProperty:n,form:e},n.id))}),o.jsx(ke,{type:"submit",children:"Submit Form"})]})})})}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: {
        name: ""
      }
    });
    const property: FormProperty = {
      id: "name",
      name: "Name",
      type: "text",
      description: "Enter your full name",
      placeholder: "John Doe",
      helperText: "This name will be used on your certificate",
      isRequired: true
    };
    return <Form {...methods}>
                <form>
                    <FormFieldWrapper formProperty={property} form={methods} />
                </form>
            </Form>;
  }
}`,...I.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: {
        age: ""
      }
    });
    const property: FormProperty = {
      id: "age",
      name: "Age",
      type: "number",
      description: "Enter your age",
      placeholder: "30",
      helperText: "You must be at least 18 years old to register",
      isRequired: true,
      min: 0,
      max: 120
    };
    return <Form {...methods}>
                <form>
                    <FormFieldWrapper formProperty={property} form={methods} />
                </form>
            </Form>;
  }
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: {
        bio: ""
      }
    });
    const property: FormProperty = {
      id: "bio",
      name: "Biography",
      type: "textarea",
      description: "Tell us about yourself",
      placeholder: "I am...",
      helperText: "Keep it brief and focused on your professional experience",
      isRequired: false
    };
    return <Form {...methods}>
                <form>
                    <FormFieldWrapper formProperty={property} form={methods} />
                </form>
            </Form>;
  }
}`,...N.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: {
        country: ""
      }
    });
    const property: FormProperty = {
      id: "country",
      name: "Country",
      type: "select",
      description: "Select your country",
      helperText: "This determines which regional office will contact you",
      isRequired: true,
      options: [{
        value: "de",
        label: "Germany"
      }, {
        value: "fr",
        label: "France"
      }, {
        value: "uk",
        label: "United Kingdom"
      }, {
        value: "us",
        label: "United States"
      }]
    };
    return <Form {...methods}>
                <form>
                    <FormFieldWrapper formProperty={property} form={methods} />
                </form>
            </Form>;
  }
}`,...D.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: {
        accept: false
      }
    });
    const property: FormProperty = {
      id: "accept",
      name: "Accept Terms",
      type: "checkbox",
      description: "I agree to the terms and conditions",
      helperText: "You must accept our terms to continue",
      isRequired: true
    };
    return <Form {...methods}>
                <form>
                    <FormFieldWrapper formProperty={property} form={methods} />
                </form>
            </Form>;
  }
}`,...q.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: {
        disabledField: "This value cannot be changed"
      }
    });
    const property: FormProperty = {
      id: "disabledField",
      name: "Disabled Field",
      type: "text",
      description: "This field is disabled",
      helperText: "Contact support to modify this value",
      isRequired: false,
      isDisabled: true
    };
    return <Form {...methods}>
                <form>
                    <FormFieldWrapper formProperty={property} form={methods} />
                </form>
            </Form>;
  }
}`,...A.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: {
        fullName: "",
        email: "",
        age: "",
        bio: "",
        country: "",
        newsletter: false,
        terms: false
      }
    });
    const formFields: FormProperty[] = [{
      id: "fullName",
      name: "Full Name",
      type: "text",
      description: "Your first and last name",
      placeholder: "John Doe",
      helperText: "As it appears on your government ID",
      isRequired: true
    }, {
      id: "email",
      name: "Email Address",
      type: "email",
      description: "We will only use this for important notifications",
      placeholder: "john.doe@example.com",
      helperText: "You'll receive a verification email",
      isRequired: true
    }, {
      id: "age",
      name: "Age",
      type: "number",
      description: "Must be 18 or older",
      helperText: "We verify age for legal compliance",
      min: 18,
      max: 120,
      isRequired: false
    }, {
      id: "bio",
      name: "Biography",
      type: "textarea",
      description: "Tell us a bit about yourself",
      placeholder: "I'm a...",
      helperText: "This will be visible on your public profile",
      isRequired: false
    }, {
      id: "country",
      name: "Country",
      type: "select",
      description: "Where are you from?",
      helperText: "Used to customize your experience",
      isRequired: true,
      options: [{
        value: "de",
        label: "Germany"
      }, {
        value: "fr",
        label: "France"
      }, {
        value: "uk",
        label: "United Kingdom"
      }, {
        value: "us",
        label: "United States"
      }, {
        value: "ca",
        label: "Canada"
      }, {
        value: "au",
        label: "Australia"
      }]
    }, {
      id: "newsletter",
      name: "Subscribe to newsletter",
      type: "checkbox",
      description: "Receive updates about our services",
      helperText: "We send about one email per month",
      isRequired: false
    }, {
      id: "terms",
      name: "Terms and Conditions",
      type: "checkbox",
      description: "I agree to the terms and conditions",
      helperText: "Required to create your account",
      isRequired: true
    }];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: any) => {
      alert(JSON.stringify(data, null, 2));
    };
    return <div style={{
      width: "500px",
      maxWidth: "100%"
    }}>
                <Form {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                            {formFields.map(property => <FormFieldWrapper key={property.id} formProperty={property} form={methods} />)}
                        </div>
                        <Button type="submit">Submit Form</Button>
                    </form>
                </Form>
            </div>;
  }
}`,..._.parameters?.docs?.source}}};const Or=["TextInput","NumberInput","TextareaInput","SelectInput","CheckboxInput","DisabledInput","MultipleInputsForm"];export{q as CheckboxInput,A as DisabledInput,_ as MultipleInputsForm,k as NumberInput,D as SelectInput,I as TextInput,N as TextareaInput,Or as __namedExportsOrder,_r as default};
