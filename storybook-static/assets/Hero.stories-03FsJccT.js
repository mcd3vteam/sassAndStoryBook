import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{H as b}from"./index-BNHKxcEg.js";import{Q as H}from"./index-DEL6xtET.js";import"./index-C3L7_Ni2.js";import"./index-CqrSl2Gl.js";const R={title:"Components/Hero/With Cards",argTypes:{textColor:{options:["dark","light"],control:{type:"select"}}}},t=[{url:"#",title:"Call Us",description:"855-8273633 9a.m. to 6p.m. weekdays",iconClasses:"fal fa-user-plus"},{url:"#",title:"Request an Appointment",description:"855-8273633 9a.m. to 6p.m. weekdays",iconClasses:"fal fa-user-plus"},{url:"#",title:"Card Title",description:"Lörem ipsum pertyp ",iconClasses:"fal fa-user-plus"},{url:"#",title:"For Referring Physicians",description:"Lörem ipsum pertyp aska",iconClasses:"fal fa-user-plus"},{url:"#",title:"Accepted Insurance Plans",description:"Lörem ipsum pertyp aska.",iconClasses:"fal fa-user-plus"},{url:"#",title:"Covid-19",description:"Lörem ipsum pertyp aska.",iconClasses:"fal fa-user-plus"},{url:"#",title:"Card Title",description:"Lörem ipsum pertyp aska. Biolig dining tidirtad. Disegisk bida: jak. Fagede homofask behet agt or. ",iconClasses:"fal fa-user-plus"}],n=v=>{const{heroArgs:x,cardsArgs:k,textColor:y}=v;return o.jsx("div",{className:"main",children:o.jsxs("div",{className:"hero-content",children:[o.jsx(b,{...x,textColor:y}),o.jsx(H,{...k})]})})},e=n.bind({});e.args={heroArgs:{title:"About UC San Diego Health",imageSrc:"/resources/images/jobs.png"},cardsArgs:{cards:t.slice(4)}};const r=n.bind({});r.args={heroArgs:{title:"Head & Neck Cancers",description:"If you have a cancer of the head or neck, it’s important to receive the highest quality of care. Trust us to treat your cancer with the most advanced treatments.",ctaLabel:"Make an Appointment"},cardsArgs:{cards:t.slice(0,3)}};const s=n.bind({});s.args={heroArgs:{title:"Medical Records",minimal:!0},cardsArgs:{cards:t.slice(4,6)}};const a=n.bind({});a.args={heroArgs:{title:"Patient & Families",subtitle:"lorem ipsum dolor",description:"Welcome to UC San Diego Health — offering comprehensive, compassionate and customized care for every member of your family.",imageSrc:"/resources/images/jobs.png"},cardsArgs:{cards:t.slice(0,1)}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const {
    heroArgs,
    cardsArgs,
    textColor
  } = args;
  return <div className="main">
      <div className="hero-content">
        <Hero {...heroArgs} textColor={textColor} />
        <QuickActionCards {...cardsArgs} />
      </div>
    </div>;
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const {
    heroArgs,
    cardsArgs,
    textColor
  } = args;
  return <div className="main">
      <div className="hero-content">
        <Hero {...heroArgs} textColor={textColor} />
        <QuickActionCards {...cardsArgs} />
      </div>
    </div>;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,C;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const {
    heroArgs,
    cardsArgs,
    textColor
  } = args;
  return <div className="main">
      <div className="hero-content">
        <Hero {...heroArgs} textColor={textColor} />
        <QuickActionCards {...cardsArgs} />
      </div>
    </div>;
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var A,h,f;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const {
    heroArgs,
    cardsArgs,
    textColor
  } = args;
  return <div className="main">
      <div className="hero-content">
        <Hero {...heroArgs} textColor={textColor} />
        <QuickActionCards {...cardsArgs} />
      </div>
    </div>;
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const F=["AboutUs","HeadNeckCancer","MedicalRecords","PatientFamilyInfo"];export{e as AboutUs,r as HeadNeckCancer,s as MedicalRecords,a as PatientFamilyInfo,F as __namedExportsOrder,R as default};
