import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{C as p}from"./Checkbox-SoCtSyYv.js";import{a as f,b as F,c as v,d as g,e as j,f as y}from"./Form-CtJWb_pU.js";import{I as h}from"./Input-BUasPCec.js";import{L as u}from"./Label-D_mx1kC8.js";import{R as S,a as C}from"./RadioGroup-B1U0Jhbw.js";import{S as N,a as k,b as w,c as R,d as $,e as T}from"./Select-NfWchPvj.js";import{T as I}from"./Textarea-CHEQbwQn.js";import{c as V}from"./utils-CBfrqCZ4.js";const q=(r,e)=>{const{name:t,description:i,placeholder:s,isDisabled:n}=r,o=e.value!==void 0?e.value:"";return a.jsx(h,{...e,type:"number",min:r.min,max:r.max,step:r.step||1,placeholder:s||`Enter ${i||t}`,disabled:n,onChange:l=>{const c=l.target.value;c===""?e.onChange(""):e.onChange(Number(c))},value:o})},D=(r,e)=>{const{name:t,description:i,placeholder:s,isDisabled:n}=r;return a.jsx(h,{...e,type:r.type,placeholder:s||`Enter ${i||t}`,disabled:n})},b=({children:r})=>{if(typeof r!="string")return a.jsx(a.Fragment,{children:r});const e=t=>{const s=/<(b|i|u)>(.*?)<\/\1>/i.exec(t);if(!s||s.index===void 0)return[t];const[n,o,l]=s,c=t.slice(0,s.index),d=t.slice(s.index+n.length),m=o;return[...c?e(c):[],a.jsx(m,{children:e(l)},s.index),...d?e(d):[]]};return a.jsx(a.Fragment,{children:e(r)})},W=(r,e)=>{const{name:t,description:i,placeholder:s,isDisabled:n}=r;return a.jsx(I,{...e,placeholder:s||`Enter ${i||t}`,disabled:n})},A=(r,e)=>{const{name:t,description:i,options:s,isDisabled:n}=r,o=e.value!==void 0?e.value:"";return a.jsxs(N,{disabled:n,onValueChange:e.onChange,value:o,defaultValue:o,children:[a.jsx(k,{className:"w-full",children:a.jsx(w,{placeholder:`Select ${i||t}`})}),a.jsx(R,{children:a.jsx($,{children:s?.map(l=>a.jsx(T,{value:l.value,children:l.label||l.value},l.value))})})]})},E=(r,e)=>{const{name:t,isDisabled:i,options:s,direction:n}=r;if(s&&Array.isArray(s)&&s.length>0){let o=[];return Array.isArray(e.value)?o=e.value:e.value&&(o=[e.value]),a.jsx("div",{className:`flex ${n==="horizontal"?"flex-row space-x-4":"flex-col space-y-2"}`,children:s.map(l=>{const c=o.includes(l.value);return a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(p,{id:`${e.name}-${l.value}`,disabled:i,checked:c,onCheckedChange:d=>{const m=[...o];if(d)m.includes(l.value)||m.push(l.value);else{const x=m.indexOf(l.value);x>-1&&m.splice(x,1)}e.onChange(m)}}),a.jsx(u,{htmlFor:`${e.name}-${l.value}`,className:"leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",children:a.jsx(b,{children:l.label||l.value})})]},l.value)})})}return a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(p,{...e,id:e.name,disabled:i,checked:e.value,onCheckedChange:o=>{e.onChange(o)}}),a.jsx(u,{htmlFor:e.name,className:"text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",children:t})]})},G=(r,e)=>{const{options:t,isDisabled:i,direction:s}=r;return a.jsx(S,{value:e.value,onValueChange:e.onChange,disabled:i,className:`flex ${s==="horizontal"?"flex-row space-x-4":"flex-col space-y-1"}`,children:t?.map(n=>a.jsxs("div",{className:"flex items-start space-x-2",children:[a.jsx(C,{id:`${e.name}-${n.value}`,value:n.value}),a.jsx(u,{htmlFor:`${e.name}-${n.value}`,className:"leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",children:a.jsx(b,{children:n.label||n.value})})]},n.value))})},M=(r,e)=>{const{type:t}=r;switch(t){case"text":case"email":case"password":case"url":case"tel":case"date":case"datetime-local":return D(r,e);case"textarea":return W(r,e);case"number":return q(r,e);case"checkbox":return E(r,e);case"radio":return G(r,e);case"select":return A(r,e);default:return null}};function L({formProperty:r,form:e}){const{id:t,name:i,description:s,isRequired:n,helperText:o}=r;return a.jsx(f,{control:e.control,name:t,render:({field:l})=>a.jsxs(F,{children:[a.jsx("div",{className:V("flex items-center justify-between",o&&"mb-0"),children:a.jsxs(v,{className:"font-bold",children:[i,n&&a.jsx("span",{className:"ml-1 align-top text-[1.75em] leading-none text-decorative-destructive",children:"*"})]})}),o&&a.jsx("p",{className:"text-[0.875rem] text-text-lightest",children:o}),a.jsx(g,{children:M(r,l)}),s&&a.jsx(j,{className:"text-sm text-text-lightest",children:s}),a.jsx(y,{})]})},t)}L.__docgenInfo={description:`FormFieldWrapper - A flexible component for rendering different types of form fields

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
Must be a UseFormReturn<any> instance from react-hook-form`}}};export{L as F};
