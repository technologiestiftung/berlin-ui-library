import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CdGsxv5d.js";import{c as s,C as l,e as o}from"./index-vw2MtMuo.js";import{F as p,T as n,N as a,a as c,S as x,C as h,b as m,R as u,c as j,d as b,D as f,M as y}from"./FormFieldWrapper.stories-zyCOcch_.js";import"./index-BCtMShv3.js";import"./iframe-DNxedu5f.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";import"./index-CFeRKNTJ.js";import"./index-DrFu-skq.js";import"./Form-H9gd3w_p.js";import"./index-BcXugKMQ.js";import"./index-B-xwPz7g.js";import"./utils-15tqT33e.js";import"./Label-yUWueOTO.js";import"./index-LATptceI.js";import"./FormFieldWrapper-Cp-9a0IT.js";import"./Input-CWWsW1Ai.js";import"./Textarea-98_AdlF2.js";import"./Select-D_GGFChV.js";import"./index-DkX7lMs-.js";import"./index-DkEUhnR6.js";import"./index-SpqsU_53.js";import"./index-BM8igCfQ.js";import"./index-D7FI_znS.js";import"./index-9SeOqIlT.js";import"./index-U0nZxCKZ.js";import"./chevron-down-DWDojfxa.js";import"./createLucideIcon-DOlFIQMa.js";import"./check-L6z-JRMr.js";import"./Checkbox-CjUE4-Ry.js";import"./index-BMmUsUVr.js";import"./RadioGroup-BgtLJsvm.js";import"./index-KcdeYDNn.js";import"./Button-DnUOgk5f.js";import"./search_icon-B9zcZCjA.js";import"./close_icon-KSt-Uk_u.js";const{deprecate:g}=__STORYBOOK_MODULE_CLIENT_LOGGER__;g("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");function d(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:p}),`
`,t.jsx(e.h1,{id:"formfieldwrapper",children:"FormFieldWrapper"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"FormFieldWrapper"})," component is a versatile form field renderer that works with react-hook-form to simplify form creation in the Berlin UI Library."]}),`
`,t.jsx(e.h2,{id:"features",children:"Features"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Renders different input types based on configuration"}),`
`,t.jsx(e.li,{children:"Works seamlessly with react-hook-form"}),`
`,t.jsx(e.li,{children:"Supports text inputs, textareas, number inputs, checkboxes, radio groups, and select dropdowns"}),`
`,t.jsx(e.li,{children:"Handles field validation and error messages"}),`
`,t.jsx(e.li,{children:"Consistent styling with Berlin UI Library components"}),`
`,t.jsx(e.li,{children:"Flexible layout options for checkbox groups and radio groups"}),`
`]}),`
`,t.jsx(e.h2,{id:"important-form-context-requirements",children:"Important: Form Context Requirements"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"FormFieldWrapper"})," component ",t.jsx(e.strong,{children:"must"})," be used within a React Hook Form context. Always wrap your FormFieldWrapper components with both:"]}),`
`,t.jsxs(e.ol,{children:[`
`,t.jsxs(e.li,{children:["The ",t.jsx(e.code,{children:"Form"})," component (which is a wrapper around FormProvider)"]}),`
`,t.jsxs(e.li,{children:["A ",t.jsx(e.code,{children:"form"})," HTML element"]}),`
`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`// Correct usage:
<Form {...methods}>
  <form onSubmit={methods.handleSubmit(onSubmit)}>
    <FormFieldWrapper formProperty={field} form={methods} />
  </form>
</Form>

// Incorrect usage (will cause errors):
<FormFieldWrapper formProperty={field} form={methods} />;
`})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"FormFieldWrapper"})," component accepts the following props:"]}),`
`,t.jsx(e.h3,{id:"formproperty-object",children:"FormProperty Object"}),`
`,t.jsx(l,{of:n}),`
`,t.jsx(e.h3,{id:"property-table",children:"Property Table"}),`
`,t.jsx("div",{className:"sb-unstyled",children:t.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:"20px"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{textAlign:"left",padding:"8px",borderBottom:"2px solid #ddd"},children:t.jsx(e.p,{children:"Property"})}),t.jsx("th",{style:{textAlign:"left",padding:"8px",borderBottom:"2px solid #ddd"},children:t.jsx(e.p,{children:"Type"})}),t.jsx("th",{style:{textAlign:"left",padding:"8px",borderBottom:"2px solid #ddd"},children:t.jsx(e.p,{children:"Description"})})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:"id"}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"string"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"Unique identifier for the form field"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:"name"}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"string"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"Display name for the form field label"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:"type"}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"string"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"Type of the input field"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"description"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"string (optional)"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"Description text shown below the input"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"placeholder"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"string (optional)"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"Placeholder text for the input"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"helperText"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"string (optional)"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"Helper text to provide additional information"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"options"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"Array (optional)"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"Options for select fields"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"isRequired"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"boolean (optional)"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"Whether the field is required"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"isDisabled"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"boolean (optional)"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"Whether the field is disabled"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:"min"}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"number (optional)"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"Minimum value (for number inputs)"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:"max"}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"number (optional)"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"Maximum value (for number inputs)"})})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:"step"}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"number (optional)"})}),t.jsx("td",{style:{padding:"8px",borderBottom:"1px solid #ddd"},children:t.jsx(e.p,{children:"Step increment (for number inputs)"})})]})]})]})}),`
`,t.jsx(e.h3,{id:"form",children:"Form"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"form"})," prop should be the methods object returned from react-hook-form's ",t.jsx(e.code,{children:"useForm()"})," hook."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-typescript",children:`form: UseFormReturn<any>;
`})}),`
`,t.jsxs(e.p,{children:["This type comes from the ",t.jsx(e.code,{children:"react-hook-form"})," library and represents the complete form control object with methods like ",t.jsx(e.code,{children:"control"}),", ",t.jsx(e.code,{children:"handleSubmit"}),", ",t.jsx(e.code,{children:"register"}),", etc."]}),`
`,t.jsx(e.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,t.jsx(e.h3,{id:"text-input",children:"Text Input"}),`
`,t.jsx(o,{of:n}),`
`,t.jsx(e.h3,{id:"number-input",children:"Number Input"}),`
`,t.jsx(o,{of:a}),`
`,t.jsx(e.h3,{id:"textarea-input",children:"Textarea Input"}),`
`,t.jsx(o,{of:c}),`
`,t.jsx(e.h3,{id:"select-input",children:"Select Input"}),`
`,t.jsx(o,{of:x}),`
`,t.jsx(e.h3,{id:"checkbox-input",children:"Checkbox Input"}),`
`,t.jsx(o,{of:h}),`
`,t.jsx(e.h3,{id:"checkbox-group-input",children:"Checkbox Group Input"}),`
`,t.jsx(o,{of:m}),`
`,t.jsxs(e.p,{children:["When you provide ",t.jsx(e.code,{children:"options"})," to a checkbox field, the FormFieldWrapper will render a group of checkboxes that allows multiple selections. The form value will be stored as an array of the selected option values."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`// Example of checkbox group configuration
const multiCheckboxField = {
	id: "interests",
	name: "Interests",
	type: "checkbox",
	description: "Select all that apply",
	options: [
		{ value: "technology", label: "Technology" },
		{ value: "arts", label: "Arts & Culture" },
		{ value: "sports", label: "Sports & Recreation" },
		{ value: "science", label: "Science & Education" },
	],
};
`})}),`
`,t.jsx(e.h3,{id:"radio-group-input",children:"Radio Group Input"}),`
`,t.jsx(o,{of:u}),`
`,t.jsx(e.p,{children:"Radio groups allow users to select one option from a set of mutually exclusive choices. The form value will be the selected option's value."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`// Example of radio group configuration
const radioGroupField = {
	id: "theme",
	name: "Theme Preference",
	type: "radio",
	description: "Choose your preferred theme",
	options: [
		{ value: "light", label: "Light Theme" },
		{ value: "dark", label: "Dark Theme" },
		{ value: "system", label: "System Default" },
	],
};
`})}),`
`,t.jsx(e.h3,{id:"horizontal-layout-options",children:"Horizontal Layout Options"}),`
`,t.jsx(o,{of:j}),`
`,t.jsx(o,{of:b}),`
`,t.jsxs(e.p,{children:["Both checkbox groups and radio groups support horizontal or vertical layouts using the ",t.jsx(e.code,{children:"direction"})," property:"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`// Example of horizontal radio group
const horizontalRadioGroup = {
	id: "subscription",
	name: "Subscription Plan",
	type: "radio",
	direction: "horizontal", // Can be "horizontal" or "vertical" (default)
	options: [
		{ value: "free", label: "Free" },
		{ value: "pro", label: "Pro" },
		{ value: "enterprise", label: "Enterprise" },
	],
};

// Example of horizontal checkbox group
const horizontalCheckboxGroup = {
	id: "notifications",
	name: "Notification Preferences",
	type: "checkbox",
	direction: "horizontal",
	options: [
		{ value: "email", label: "Email" },
		{ value: "sms", label: "SMS" },
		{ value: "push", label: "Push" },
	],
};
`})}),`
`,t.jsx(e.h3,{id:"disabled-input",children:"Disabled Input"}),`
`,t.jsx(o,{of:f}),`
`,t.jsx(e.h2,{id:"creating-forms-with-multiple-fields",children:"Creating Forms with Multiple Fields"}),`
`,t.jsx(e.p,{children:"You can easily create forms with multiple fields by defining an array of field properties and mapping through them:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { useForm } from "react-hook-form";
import { Form } from "../Form";
import { FormFieldWrapper, FormProperty } from "./FormFieldWrapper";
import { Button } from "../Button/Button";

function MyForm() {
	const methods = useForm({
		defaultValues: {
			fullName: "",
			email: "",
			age: "",
			country: "",
			terms: false,
		},
	});

	const formFields: FormProperty[] = [
		{
			id: "fullName",
			name: "Full Name",
			type: "text",
			description: "Your first and last name",
			placeholder: "John Doe",
			isRequired: true,
		},
		{
			id: "email",
			name: "Email Address",
			type: "email",
			description: "We'll never share your email",
			placeholder: "john@example.com",
			isRequired: true,
		},
		{
			id: "age",
			name: "Age",
			type: "number",
			min: 18,
			max: 100,
		},
		{
			id: "country",
			name: "Country",
			type: "select",
			options: [
				{ value: "de", label: "Germany" },
				{ value: "fr", label: "France" },
				{ value: "uk", label: "United Kingdom" },
			],
			isRequired: true,
		},
		{
			id: "terms",
			name: "Terms",
			type: "checkbox",
			description: "I agree to the terms and conditions",
			isRequired: true,
		},
	];

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Form {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
				{formFields.map((property) => (
					<FormFieldWrapper
						key={property.id}
						formProperty={property}
						form={methods}
					/>
				))}
				<Button type="submit">Submit Form</Button>
			</form>
		</Form>
	);
}
`})}),`
`,t.jsx(e.h2,{id:"complete-form-example",children:"Complete Form Example"}),`
`,t.jsx(o,{of:y})]})}function nt(r={}){const{wrapper:e}={...i(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(d,{...r})}):d(r)}export{nt as default};
