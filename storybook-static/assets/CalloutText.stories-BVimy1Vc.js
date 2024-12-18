import{j as n}from"./jsx-runtime-D_zvdyIk.js";const i=o=>{const{children:e}=o;return n.jsx("section",{className:"callout-text",children:e})};i.__docgenInfo={description:"",methods:[],displayName:"CalloutText"};const m={title:"Molecules/Callouts"},d={description:["Note about your privacy: In April 2003, a federal act called the Health Insurance Portability & Accountability Act (HIPAA) went into effect that protects patient information. The hospital cannot release ANY information concerning your medical record, including financial information, to anyone but you, a legal guardian for patients under 18 years of age, and/or a conservator without written permission unless specifically permitted by law."]},u=o=>{const{description:e}=o;return n.jsx(i,{children:e&&e.map((c,l)=>n.jsx("p",{children:c},l))})},t=u.bind({});t.args=d;var a,r,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const {
    description
  } = args;
  return <CalloutText>
      {description && description.map((des, i) => <p key={i}>{des}</p>)}
    </CalloutText>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const x=["Text"];export{t as Text,x as __namedExportsOrder,m as default};
