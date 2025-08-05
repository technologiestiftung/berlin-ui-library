import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as x}from"./utils-15tqT33e.js";import{u as l,F as d}from"./Form-H9gd3w_p.js";import{B as i}from"./Button-DnUOgk5f.js";import{F as c}from"./FormFieldWrapper-Cp-9a0IT.js";import"./index-BCtMShv3.js";import"./index-BcXugKMQ.js";import"./index-B-xwPz7g.js";import"./Label-yUWueOTO.js";import"./index-LATptceI.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";import"./search_icon-B9zcZCjA.js";import"./close_icon-KSt-Uk_u.js";import"./Input-CWWsW1Ai.js";import"./Textarea-98_AdlF2.js";import"./Select-D_GGFChV.js";import"./index-DkX7lMs-.js";import"./index-DkEUhnR6.js";import"./index-SpqsU_53.js";import"./index-BM8igCfQ.js";import"./index-D7FI_znS.js";import"./index-9SeOqIlT.js";import"./index-U0nZxCKZ.js";import"./chevron-down-DWDojfxa.js";import"./createLucideIcon-DOlFIQMa.js";import"./check-L6z-JRMr.js";import"./Checkbox-CjUE4-Ry.js";import"./index-BMmUsUVr.js";import"./RadioGroup-BgtLJsvm.js";import"./index-KcdeYDNn.js";function m({children:r,withBackground:o=!0,padding:p="p-6",className:t}){return e.jsx("div",{className:x(o&&"bg-block-colored",p,"w-full",t),children:r})}m.__docgenInfo={description:"FormWrapper component for applying consistent styling to forms",methods:[],displayName:"FormWrapper",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"The form content"},withBackground:{required:!1,tsType:{name:"boolean"},description:"Whether the form should have a background color (bg-block-colored)",defaultValue:{value:"true",computed:!1}},padding:{required:!1,tsType:{name:"string"},description:"Padding for the form",defaultValue:{value:'"p-6"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const K={title:"Elements/FormWrapper",component:m,parameters:{layout:"centered"},tags:["autodocs"]},u=({withBackground:r=!0})=>{const o=l({defaultValues:{input:"",select:"",checkboxGroup:[],radioGroup:"yes"}}),p=[{id:"input",name:"Input",type:"text",helperText:"Helptext",isRequired:!0},{id:"select",name:"Select",type:"select",helperText:"Helptext",isRequired:!0,options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],placeholder:"Bitte wählen"},{id:"checkboxGroup",name:"Frage",type:"checkbox",options:[{value:"answer1",label:"Antwort 1"},{value:"answer2",label:"Antwort 2"}]},{id:"radioGroup",name:"Frage",type:"radio",options:[{value:"yes",label:"Ja"},{value:"no",label:"Nein"}]}];return e.jsxs(m,{withBackground:r,className:"w-full max-w-md",padding:"p-8",children:[e.jsx("h2",{className:"mb-6 text-xl font-bold",children:"Example"}),e.jsx(d,{...o,children:e.jsxs("form",{className:"space-y-6",children:[p.map(t=>e.jsx(c,{formProperty:t,form:o},t.id)),e.jsxs("div",{className:"mt-8 flex justify-between border-t border-gray-200 pt-4",children:[e.jsx(i,{variant:"back-link",children:e.jsx("span",{className:"flex items-center",children:"Back"})}),e.jsx(i,{type:"submit",children:e.jsx("span",{className:"flex items-center",children:"Action"})})]})]})})]})},s={render:()=>e.jsx(u,{})},a={render:()=>e.jsx(u,{withBackground:!1})},n={render:()=>{const r=l({defaultValues:{message:""}}),o={id:"message",name:"Message",type:"text",placeholder:"Enter a message"};return e.jsx(m,{padding:"p-10",className:"max-w-md",children:e.jsx(d,{...r,children:e.jsxs("form",{className:"space-y-4",children:[e.jsx(c,{formProperty:o,form:r}),e.jsx(i,{type:"submit",children:"Send"})]})})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ExampleForm />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <ExampleForm withBackground={false} />
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: {
        message: ""
      }
    });
    const messageField: FormProperty = {
      id: "message",
      name: "Message",
      type: "text",
      placeholder: "Enter a message"
    };
    return <FormWrapper padding="p-10" className="max-w-md">
                <Form {...methods}>
                    <form className="space-y-4">
                        <FormFieldWrapper formProperty={messageField} form={methods} />
                        <Button type="submit">Send</Button>
                    </form>
                </Form>
            </FormWrapper>;
  }
}`,...n.parameters?.docs?.source}}};const L=["Example","WithoutBackground","CustomPadding"];export{n as CustomPadding,s as Example,a as WithoutBackground,L as __namedExportsOrder,K as default};
