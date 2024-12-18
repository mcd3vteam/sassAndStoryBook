import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-CqrSl2Gl.js";import{r as v}from"./index-FqUYIDda.js";import{o as f,K as g,D as o}from"./index-aBVyMkog.js";import"./index-729qusIZ.js";const x=s=>{const{date:t,title:a,description:i,link:n,ctaLabel:b,target:h}=s;return e.jsxs("div",{className:"card-item",children:[e.jsx("span",{className:"card-item__date",children:t}),e.jsx("h3",{className:"card-item__heading",children:a}),e.jsx("p",{className:"card-item__desc",children:i}),n&&e.jsxs("a",{href:n,className:"btn",target:h,children:[e.jsx("span",{className:"btn-label",children:b}),e.jsx("span",{className:"fas fa-arrow-right"})]})]})},N=s=>s<5?{classes:o,draggable:!0,indicators:!0,responsive:[{breakpoint:1200,options:{slidesToShow:4,indicators:!1,draggable:!1}},{breakpoint:768,options:{slidesToShow:3}}],slidesToShow:1.25}:{classes:o,draggable:!0,indicators:!0,responsive:[{breakpoint:1200,options:{slidesToShow:4,buttons:!0}},{breakpoint:768,options:{slidesToShow:4}}],slidesToScroll:1,slidesToShow:1.25},m=({cards:s,disableAnimation:t})=>{if(!(s!=null&&s.length))return null;const a=N(s.length);return(s==null?void 0:s.length)&&e.jsx(g,{animationDisabled:t,...a,children:s.map((i,n)=>u.createElement(x,{...i,key:n}))})},p=({id:s})=>(u.useEffect(()=>{f('[data-component="featuredevents"]',{add(t){const{dataset:a}=t,{propsId:i}=a,n=window.ucsdh[`featuredevents_${i}`];v.render(e.jsx(m,{...n}),t)}})},[]),e.jsx("div",{"data-component":"featuredevents","data-props-id":s}));m.__docgenInfo={description:"",methods:[],displayName:"FeaturedEvents"};p.__docgenInfo={description:"",methods:[],displayName:"RenderFeaturedEvents"};const E=(s,{cards:t,disableAnimation:a})=>{window.ucsdh[`featuredevents_${s}`]={disableAnimation:a,cards:t}},q={title:"Organisms/Featured Classes and Events"},_=[{date:"08.20",title:"Family Support Groups and Classes",description:"Elit vestibulum lobortis fames elementum amet id sed consequat.",link:"#",ctaLabel:"Details"},{date:"08.20",title:"Childbirth Classes and Tours",description:"Elit vestibulum lobortis fames elementum amet id sed consequat.",link:"#",ctaLabel:"Details"},{date:"08.20",title:"Support Groups at UC San Diego Health",description:"Elit vestibulum lobortis fames elementum amet id sed consequat.",link:"#",ctaLabel:"Details"},{date:"08.20",title:"Head and Neck Support Group",description:"Elit vestibulum lobortis fames elementum amet id sed consequat.",link:"#",ctaLabel:"Details"},{date:"08.20",title:"Support Groups at UC San Diego Health",description:"Elit vestibulum lobortis fames elementum amet id sed consequat.",link:"#",ctaLabel:"Details"},{date:"08.20",title:"Head and Neck Support Group",description:"Elit vestibulum lobortis fames elementum amet id sed consequat.",link:"#",ctaLabel:"Details"}],j={title:"Featured Classes & Events",description:"Venenatis pellentesque tristique consectetur ultrices elementum nulla dictum.",disableAnimation:!0},C=s=>{const{title:t,description:a,disableAnimation:i}=s,n="54";return E(n,{cards:_,disableAnimation:i}),e.jsxs("section",{className:"featured-classes-events",children:[e.jsxs("div",{className:"featured-classes-events__header",children:[e.jsx("h2",{children:t}),e.jsx("p",{children:a})]}),e.jsx("div",{className:"featured-classes-events__cards",children:e.jsx(p,{id:n})}),e.jsxs("a",{href:"#",className:"btn",children:[e.jsx("span",{className:"btn-label",children:"View Full Calender"}),e.jsx("span",{className:"btn-round btn-primary btn-responsive",children:e.jsx("span",{className:"fas fa-arrow-right"})})]})]})},r=C.bind({});r.args=j;var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const {
    title,
    description,
    disableAnimation
  } = args;
  const id = "54";
  setFeaturedEventsArgs(id, {
    cards,
    disableAnimation
  });
  return <section className="featured-classes-events">
      <div className="featured-classes-events__header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {/* React Component Start */}
      <div className="featured-classes-events__cards">
        <RenderFeaturedEvents id={id} />
      </div>
      {/* React Component End */}

      <a href="#" className="btn">
        <span className="btn-label">View Full Calender</span>
        <span className="btn-round btn-primary btn-responsive">
          <span className="fas fa-arrow-right"></span>
        </span>
      </a>
    </section>;
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const T=["Model"];export{r as Model,T as __namedExportsOrder,q as default};
