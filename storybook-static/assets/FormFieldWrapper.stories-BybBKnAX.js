import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as n,F as s}from"./Form-DXKTftsj.js";import{F as o}from"./FormFieldWrapper-KGMtUQkH.js";import{B as F}from"./Button-DnUOgk5f.js";const v={title:"Elements/FormWrapper/FormFieldWrapper",component:o,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>{const r=n({defaultValues:{name:""}}),t={id:"name",name:"Name",type:"text",description:"Enter your full name",placeholder:"John Doe",helperText:"This name will be used on your certificate",isRequired:!0};return e.jsx(s,{...r,children:e.jsx("form",{children:e.jsx(o,{formProperty:t,form:r})})})}},i={render:()=>{const r=n({defaultValues:{age:""}}),t={id:"age",name:"Age",type:"number",description:"Enter your age",placeholder:"30",helperText:"You must be at least 18 years old to register",isRequired:!0,min:0,max:120};return e.jsx(s,{...r,children:e.jsx("form",{children:e.jsx(o,{formProperty:t,form:r})})})}},l={render:()=>{const r=n({defaultValues:{bio:""}}),t={id:"bio",name:"Biography",type:"textarea",description:"Tell us about yourself",placeholder:"I am...",helperText:"Keep it brief and focused on your professional experience",isRequired:!1};return e.jsx(s,{...r,children:e.jsx("form",{children:e.jsx(o,{formProperty:t,form:r})})})}},d={render:()=>{const r=n({defaultValues:{country:""}}),t={id:"country",name:"Country",type:"select",description:"Select your country",helperText:"This determines which regional office will contact you",isRequired:!0,options:[{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"uk",label:"United Kingdom"},{value:"us",label:"United States"}]};return e.jsx(s,{...r,children:e.jsx("form",{children:e.jsx(o,{formProperty:t,form:r})})})}},p={render:()=>{const r=n({defaultValues:{accept:!1}}),t={id:"accept",name:"Accept Terms",type:"checkbox",description:"I agree to the terms and conditions",helperText:"You must accept our terms to continue",isRequired:!0};return e.jsx(s,{...r,children:e.jsx("form",{children:e.jsx(o,{formProperty:t,form:r})})})}},m={render:()=>{const r=n({defaultValues:{disabledField:"This value cannot be changed"}}),t={id:"disabledField",name:"Disabled Field",type:"text",description:"This field is disabled",helperText:"Contact support to modify this value",isRequired:!1,isDisabled:!0};return e.jsx(s,{...r,children:e.jsx("form",{children:e.jsx(o,{formProperty:t,form:r})})})}},u={render:()=>{const r=n({defaultValues:{fullName:"",email:"",age:"",bio:"",country:"",newsletter:!1,terms:!1}}),t=[{id:"fullName",name:"Full Name",type:"text",description:"Your first and last name",placeholder:"John Doe",helperText:"As it appears on your government ID",isRequired:!0},{id:"email",name:"Email Address",type:"email",description:"We will only use this for important notifications",placeholder:"john.doe@example.com",helperText:"You'll receive a verification email",isRequired:!0},{id:"age",name:"Age",type:"number",description:"Must be 18 or older",helperText:"We verify age for legal compliance",min:18,max:120,isRequired:!1},{id:"bio",name:"Biography",type:"textarea",description:"Tell us a bit about yourself",placeholder:"I'm a...",helperText:"This will be visible on your public profile",isRequired:!1},{id:"country",name:"Country",type:"select",description:"Where are you from?",helperText:"Used to customize your experience",isRequired:!0,options:[{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"uk",label:"United Kingdom"},{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"}]},{id:"newsletter",name:"Subscribe to newsletter",type:"checkbox",description:"Receive updates about our services",helperText:"We send about one email per month",isRequired:!1},{id:"terms",name:"Terms and Conditions",type:"checkbox",description:"I agree to the terms and conditions",helperText:"Required to create your account",isRequired:!0}],x=b=>{alert(JSON.stringify(b,null,2))};return e.jsx("div",{style:{width:"500px",maxWidth:"100%"},children:e.jsx(s,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(x),className:"space-y-6",children:[e.jsx("div",{className:"space-y-4",children:t.map(b=>e.jsx(o,{formProperty:b,form:r},b.id))}),e.jsx(F,{type:"submit",children:"Submit Form"})]})})})}},c={render:()=>{const r=n({defaultValues:{interests:[]}}),t={id:"interests",name:"Interests",type:"checkbox",description:"Select your areas of interest",helperText:"Choose all that apply",isRequired:!1,options:[{value:"technology",label:"Technology"},{value:"arts",label:"Arts & Culture"},{value:"sports",label:"Sports & Recreation"},{value:"science",label:"Science & Education"}]};return e.jsx(s,{...r,children:e.jsxs("form",{children:[e.jsx(o,{formProperty:t,form:r}),e.jsx("div",{className:"mt-4",children:e.jsxs("p",{className:"text-muted-foreground text-xs",children:["Selected value: ",JSON.stringify(r.watch("interests"))]})})]})})}},h={render:()=>{const r=n({defaultValues:{theme:"light"}}),t={id:"theme",name:"Theme Preference",type:"radio",description:"Choose your preferred theme",helperText:"This can be changed later in settings",isRequired:!0,options:[{value:"light",label:"Light Theme"},{value:"dark",label:"Dark Theme"},{value:"system",label:"System Default"}]};return e.jsx(s,{...r,children:e.jsx("form",{children:e.jsx(o,{formProperty:t,form:r})})})}},f={render:()=>{const r=n({defaultValues:{subscription:""}}),t={id:"subscription",name:"Subscription Plan",type:"radio",description:"Select your subscription tier",helperText:"You can upgrade or downgrade anytime",isRequired:!0,direction:"horizontal",options:[{value:"free",label:"Free"},{value:"pro",label:"Pro"},{value:"enterprise",label:"Enterprise"}]};return e.jsx(s,{...r,children:e.jsx("form",{children:e.jsx(o,{formProperty:t,form:r})})})}},y={render:()=>{const r=n({defaultValues:{notifications:[]}}),t={id:"notifications",name:"Notification Preferences",type:"checkbox",description:"Choose notification methods",helperText:"Select all that apply",isRequired:!1,direction:"horizontal",options:[{value:"email",label:"Email"},{value:"sms",label:"SMS"},{value:"push",label:"Push"},{value:"inapp",label:"In-app"}]};return e.jsx(s,{...r,children:e.jsxs("form",{children:[e.jsx(o,{formProperty:t,form:r}),e.jsx("div",{className:"mt-4",children:e.jsxs("p",{className:"text-muted-foreground text-xs",children:["Selected options: ",JSON.stringify(r.watch("notifications"))]})})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: {
        interests: []
      }
    });
    const property: FormProperty = {
      id: "interests",
      name: "Interests",
      type: "checkbox",
      description: "Select your areas of interest",
      helperText: "Choose all that apply",
      isRequired: false,
      options: [{
        value: "technology",
        label: "Technology"
      }, {
        value: "arts",
        label: "Arts & Culture"
      }, {
        value: "sports",
        label: "Sports & Recreation"
      }, {
        value: "science",
        label: "Science & Education"
      }]
    };
    return <Form {...methods}>
                <form>
                    <FormFieldWrapper formProperty={property} form={methods} />
                    <div className="mt-4">
                        <p className="text-muted-foreground text-xs">
                            Selected value: {JSON.stringify(methods.watch("interests"))}
                        </p>
                    </div>
                </form>
            </Form>;
  }
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: {
        theme: "light"
      }
    });
    const property: FormProperty = {
      id: "theme",
      name: "Theme Preference",
      type: "radio",
      description: "Choose your preferred theme",
      helperText: "This can be changed later in settings",
      isRequired: true,
      options: [{
        value: "light",
        label: "Light Theme"
      }, {
        value: "dark",
        label: "Dark Theme"
      }, {
        value: "system",
        label: "System Default"
      }]
    };
    return <Form {...methods}>
                <form>
                    <FormFieldWrapper formProperty={property} form={methods} />
                </form>
            </Form>;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: {
        subscription: ""
      }
    });
    const property: FormProperty = {
      id: "subscription",
      name: "Subscription Plan",
      type: "radio",
      description: "Select your subscription tier",
      helperText: "You can upgrade or downgrade anytime",
      isRequired: true,
      direction: "horizontal",
      options: [{
        value: "free",
        label: "Free"
      }, {
        value: "pro",
        label: "Pro"
      }, {
        value: "enterprise",
        label: "Enterprise"
      }]
    };
    return <Form {...methods}>
                <form>
                    <FormFieldWrapper formProperty={property} form={methods} />
                </form>
            </Form>;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: {
        notifications: []
      }
    });
    const property: FormProperty = {
      id: "notifications",
      name: "Notification Preferences",
      type: "checkbox",
      description: "Choose notification methods",
      helperText: "Select all that apply",
      isRequired: false,
      direction: "horizontal",
      options: [{
        value: "email",
        label: "Email"
      }, {
        value: "sms",
        label: "SMS"
      }, {
        value: "push",
        label: "Push"
      }, {
        value: "inapp",
        label: "In-app"
      }]
    };
    return <Form {...methods}>
                <form>
                    <FormFieldWrapper formProperty={property} form={methods} />
                    <div className="mt-4">
                        <p className="text-muted-foreground text-xs">
                            Selected options: {JSON.stringify(methods.watch("notifications"))}
                        </p>
                    </div>
                </form>
            </Form>;
  }
}`,...y.parameters?.docs?.source}}};const g=["TextInput","NumberInput","TextareaInput","SelectInput","CheckboxInput","DisabledInput","MultipleInputsForm","CheckboxGroupInput","RadioGroupInput","RadioGroupInputHorizontal","CheckboxGroupInputHorizontal"],P=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroupInput:c,CheckboxGroupInputHorizontal:y,CheckboxInput:p,DisabledInput:m,MultipleInputsForm:u,NumberInput:i,RadioGroupInput:h,RadioGroupInputHorizontal:f,SelectInput:d,TextInput:a,TextareaInput:l,__namedExportsOrder:g,default:v},Symbol.toStringTag,{value:"Module"}));export{p as C,m as D,P as F,u as M,i as N,h as R,d as S,a as T,l as a,c as b,f as c,y as d};
