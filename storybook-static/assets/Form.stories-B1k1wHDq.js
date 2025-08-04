import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as o,u as m,a as s,b as a,c as t,d as l,e as x,f as d}from"./Form-DXKTftsj.js";import{I as i}from"./Input-CWWsW1Ai.js";import{B as j}from"./Button-DnUOgk5f.js";import"./index-BCtMShv3.js";import"./index-BcXugKMQ.js";import"./index-B-xwPz7g.js";import"./utils-15tqT33e.js";import"./Label-yUWueOTO.js";import"./index-LATptceI.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";import"./search_icon-B9zcZCjA.js";import"./close_icon-KSt-Uk_u.js";const Y={title:"Elements/Form",component:o,tags:["autodocs"]},c={render:()=>{const r=m({defaultValues:{name:""}});return e.jsx(o,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n=>console.warn(n)),className:"space-y-4",children:[e.jsx(s,{name:"name",control:r.control,render:({field:n})=>e.jsxs(a,{children:[e.jsx(t,{children:"Name"}),e.jsx(l,{children:e.jsx(i,{...n,placeholder:"Your name"})}),e.jsx(x,{children:"Enter your full name."}),e.jsx(d,{})]})}),e.jsx(j,{type:"submit",children:"Submit"})]})})}},u={render:()=>{const r=m({defaultValues:{name:""},mode:"onSubmit",resolver:async n=>({values:n,errors:n.name?{}:{name:{type:"required",message:"Name is required"}}})});return e.jsx(o,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(()=>{}),className:"space-y-4",children:[e.jsx(s,{name:"name",control:r.control,render:({field:n})=>e.jsxs(a,{children:[e.jsx(t,{children:"Name"}),e.jsx(l,{children:e.jsx(i,{...n,placeholder:"Your name"})}),e.jsx(x,{children:"Enter your full name."}),e.jsx(d,{})]})}),e.jsx(j,{type:"submit",children:"Submit"})]})})}},F={render:()=>{const r=m({defaultValues:{name:"John Doe"}});return e.jsx(o,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(s,{name:"name",control:r.control,render:({field:n})=>e.jsxs(a,{layout:"vertical",children:[e.jsx(t,{children:"Name"}),e.jsx(l,{children:e.jsx(i,{...n,disabled:!0})}),e.jsx(x,{children:"Disabled input"}),e.jsx(d,{})]})})})})}},p={render:()=>{const r=m({defaultValues:{name:""}});return e.jsx(o,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n=>console.warn(n)),className:"space-y-4",children:[e.jsx(s,{name:"name",control:r.control,render:({field:n})=>e.jsxs(a,{layout:"horizontal",children:[e.jsx(t,{children:"Name"}),e.jsx(l,{children:e.jsx(i,{...n,placeholder:"Your name"})}),e.jsx(x,{children:"Enter your full name."}),e.jsx(d,{})]})}),e.jsx(j,{type:"submit",children:"Submit"})]})})}},h={render:()=>{const r=m({defaultValues:{name:""}});return e.jsx(o,{...r,children:e.jsx("form",{className:"space-y-4",children:e.jsx(s,{name:"name",control:r.control,rules:{required:!0},render:({field:n})=>e.jsxs(a,{children:[e.jsx(t,{children:"Name"}),e.jsx(l,{children:e.jsx(i,{...n,placeholder:"Your name"})}),e.jsx(d,{})]})})})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const v=["Simple","WithError","Disabled","Horizontal","Required"];export{F as Disabled,p as Horizontal,h as Required,c as Simple,u as WithError,v as __namedExportsOrder,Y as default};
