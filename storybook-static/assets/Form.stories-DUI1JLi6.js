import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as o,u as m,a as s,b as a,c as t,d as l,e as x,f as d}from"./Form-CtJWb_pU.js";import{I as i}from"./Input-BUasPCec.js";import{B as f}from"./Button-B2x80CPy.js";import"./index-0yr9KlQE.js";import"./index-C8N0VHNy.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";import"./Label-D_mx1kC8.js";import"./index-C99ZZYO_.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./search-CvexitPb.js";import"./cart-M0lHtz2Y.js";import"./close-CxP9Zg7y.js";import"./link-UKbIWM5B.js";import"./Spinner-CgX6Pswx.js";const z={title:"Elements/Form",component:o,tags:["autodocs"]},u={render:()=>{const r=m({defaultValues:{name:""}});return e.jsx(o,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n=>console.warn(n)),className:"space-y-4",children:[e.jsx(s,{name:"name",control:r.control,render:({field:n})=>e.jsxs(a,{children:[e.jsx(t,{children:"Name"}),e.jsx(l,{children:e.jsx(i,{...n,placeholder:"Your name"})}),e.jsx(x,{children:"Enter your full name."}),e.jsx(d,{})]})}),e.jsx(f,{type:"submit",children:"Submit"})]})})}},c={render:()=>{const r=m({defaultValues:{name:""},mode:"onSubmit",resolver:async n=>({values:n,errors:n.name?{}:{name:{type:"required",message:"Name is required"}}})});return e.jsx(o,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(()=>{}),className:"space-y-4",children:[e.jsx(s,{name:"name",rules:{required:!0},control:r.control,render:({field:n,fieldState:j})=>e.jsxs(a,{children:[e.jsx(t,{children:"Name"}),e.jsx(l,{children:e.jsx(i,{...n,placeholder:"Your name",invalid:!!j.error})}),e.jsx(x,{children:"Enter your full name."}),e.jsx(d,{})]})}),e.jsx(f,{type:"submit",children:"Submit"})]})})}},p={render:()=>{const r=m({defaultValues:{name:"John Doe"}});return e.jsx(o,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(s,{name:"name",control:r.control,render:({field:n})=>e.jsxs(a,{layout:"vertical",children:[e.jsx(t,{children:"Name"}),e.jsx(l,{children:e.jsx(i,{...n,disabled:!0})}),e.jsx(x,{children:"Disabled input"}),e.jsx(d,{})]})})})})}},F={render:()=>{const r=m({defaultValues:{name:""}});return e.jsx(o,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n=>console.warn(n)),className:"space-y-4",children:[e.jsx(s,{name:"name",control:r.control,render:({field:n})=>e.jsxs(a,{layout:"horizontal",children:[e.jsx(t,{children:"Name"}),e.jsx(l,{children:e.jsx(i,{...n,placeholder:"Your name"})}),e.jsx(x,{children:"Enter your full name."}),e.jsx(d,{})]})}),e.jsx(f,{type:"submit",children:"Submit"})]})})}},h={render:()=>{const r=m({defaultValues:{name:""}});return e.jsx(o,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(s,{name:"name",control:r.control,rules:{required:!0},render:({field:n})=>e.jsxs(a,{children:[e.jsx(t,{children:"Name"}),e.jsx(l,{children:e.jsx(i,{...n,placeholder:"Your name"})}),e.jsx(d,{})]})})})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    type FormValues = {
      name: string;
    };
    const methods = useForm<FormValues>({
      defaultValues: {
        name: ""
      }
    });
    return <Form {...methods}>
                <form onSubmit={methods.handleSubmit(data => console.warn(data))} className="space-y-4">
                    <FormField<{
          name: string;
        }> name="name" control={methods.control} render={({
          field
        }) => <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Your name" />
                                </FormControl>
                                <FormDescription>Enter your full name.</FormDescription>
                                <FormMessage />
                            </FormItem>} />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: {
        name: ""
      },
      mode: "onSubmit",
      resolver: async values => ({
        values: values,
        errors: values.name ? {} : {
          name: {
            type: "required",
            message: "Name is required"
          }
        }
      })
    });
    return <Form {...methods}>
                <form onSubmit={methods.handleSubmit(() => {})} className="space-y-4">
                    <FormField<{
          name: string;
        }> name="name" rules={{
          required: true
        }} control={methods.control} render={({
          field,
          fieldState
        }) => <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Your name" invalid={!!fieldState.error} />
                                </FormControl>
                                <FormDescription>Enter your full name.</FormDescription>
                                <FormMessage />
                            </FormItem>} />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    type FormValues = {
      name: string;
    };
    const methods = useForm<FormValues>({
      defaultValues: {
        name: "John Doe"
      }
    });
    return <Form {...methods}>
                <form className="space-y-4">
                    <FormField<FormValues> name="name" control={methods.control} render={({
          field
        }) => <FormItem layout="vertical">
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} disabled />
                                </FormControl>
                                <FormDescription>Disabled input</FormDescription>
                                <FormMessage />
                            </FormItem>} />
                </form>
            </Form>;
  }
}`,...p.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    type FormValues = {
      name: string;
    };
    const methods = useForm<FormValues>({
      defaultValues: {
        name: ""
      }
    });
    return <Form {...methods}>
                <form onSubmit={methods.handleSubmit(data => console.warn(data))} className="space-y-4">
                    <FormField<FormValues> name="name" control={methods.control} render={({
          field
        }) => <FormItem layout="horizontal">
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Your name" />
                                </FormControl>
                                <FormDescription>Enter your full name.</FormDescription>
                                <FormMessage />
                            </FormItem>} />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>;
  }
}`,...F.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    type FormValues = {
      name: string;
    };
    const methods = useForm<FormValues>({
      defaultValues: {
        name: ""
      }
    });
    return <Form {...methods}>
                <form className="space-y-4">
                    <FormField<FormValues> name="name" control={methods.control} rules={{
          required: true
        }} render={({
          field
        }) => <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Your name" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>} />
                </form>
            </Form>;
  }
}`,...h.parameters?.docs?.source}}};const R=["Simple","WithError","Disabled","Horizontal","Required"];export{p as Disabled,F as Horizontal,h as Required,u as Simple,c as WithError,R as __namedExportsOrder,z as default};
