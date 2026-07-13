import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as x}from"./utils-CBfrqCZ4.js";import{u as l,F as d}from"./Form-CtJWb_pU.js";import{B as i}from"./Button-B2x80CPy.js";import{F as c}from"./FormFieldWrapper-C4BMSizB.js";import"./index-0yr9KlQE.js";import"./index-C8N0VHNy.js";import"./index-CdJFUDDL.js";import"./Label-D_mx1kC8.js";import"./index-C99ZZYO_.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./search-CvexitPb.js";import"./cart-M0lHtz2Y.js";import"./close-CxP9Zg7y.js";import"./link-UKbIWM5B.js";import"./Spinner-CgX6Pswx.js";import"./Checkbox-SoCtSyYv.js";import"./index-DzS6v96A.js";import"./index-cqJIykFo.js";import"./index-0rmrMql7.js";import"./index-DJkRsNY1.js";import"./x-DharmTi0.js";import"./check-AQBEbZa7.js";import"./createLucideIcon-CIIyP9qp.js";import"./Input-BUasPCec.js";import"./RadioGroup-B1U0Jhbw.js";import"./index-BP_afSKs.js";import"./index-Dd6ISl9I.js";import"./index-HTFOMs3O.js";import"./index-HsyR4iiU.js";import"./Select-NfWchPvj.js";import"./index-BiVIZ00j.js";import"./chevron-down-DDsJDduF.js";import"./Textarea-CHEQbwQn.js";function n({children:r,withBackground:o=!0,padding:p="p-6",className:t}){return e.jsx("div",{className:x(o&&"bg-block-colored",p,"w-full",t),children:r})}n.__docgenInfo={description:"FormWrapper component for applying consistent styling to forms",methods:[],displayName:"FormWrapper",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"The form content"},withBackground:{required:!1,tsType:{name:"boolean"},description:"Whether the form should have a background color (bg-block-colored)",defaultValue:{value:"true",computed:!1}},padding:{required:!1,tsType:{name:"string"},description:"Padding for the form",defaultValue:{value:'"p-6"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const X={title:"Elements/FormWrapper",component:n,parameters:{layout:"centered"},tags:["autodocs"]},u=({withBackground:r=!0})=>{const o=l({defaultValues:{input:"",select:"",checkboxGroup:[],radioGroup:"yes"}}),p=[{id:"input",name:"Input",type:"text",helperText:"Helptext",isRequired:!0},{id:"select",name:"Select",type:"select",helperText:"Helptext",isRequired:!0,options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],placeholder:"Bitte wählen"},{id:"checkboxGroup",name:"Frage",type:"checkbox",options:[{value:"answer1",label:"Antwort 1"},{value:"answer2",label:"Antwort 2"}]},{id:"radioGroup",name:"Frage",type:"radio",options:[{value:"yes",label:"Ja"},{value:"no",label:"Nein"}]}];return e.jsxs(n,{withBackground:r,className:"w-full max-w-md",padding:"p-8",children:[e.jsx("h2",{className:"mb-6 text-xl font-bold",children:"Example"}),e.jsx(d,{...o,children:e.jsxs("form",{className:"space-y-6",children:[p.map(t=>e.jsx(c,{formProperty:t,form:o},t.id)),e.jsxs("div",{className:"mt-8 flex justify-between border-t border-gray-200 pt-4",children:[e.jsx(i,{variant:"back-link",children:e.jsx("span",{className:"flex items-center",children:"Back"})}),e.jsx(i,{type:"submit",children:e.jsx("span",{className:"flex items-center",children:"Action"})})]})]})})]})},s={render:()=>e.jsx(u,{})},a={render:()=>e.jsx(u,{withBackground:!1})},m={render:()=>{const r=l({defaultValues:{message:""}}),o={id:"message",name:"Message",type:"text",placeholder:"Enter a message"};return e.jsx(n,{padding:"p-10",className:"max-w-md",children:e.jsx(d,{...r,children:e.jsxs("form",{className:"space-y-4",children:[e.jsx(c,{formProperty:o,form:r}),e.jsx(i,{type:"submit",children:"Send"})]})})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ExampleForm />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <ExampleForm withBackground={false} />
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Y=["Example","WithoutBackground","CustomPadding"];export{m as CustomPadding,s as Example,a as WithoutBackground,Y as __namedExportsOrder,X as default};
