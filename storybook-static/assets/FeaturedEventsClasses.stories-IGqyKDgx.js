import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-CqrSl2Gl.js";import{r as v}from"./index-FqUYIDda.js";import{o as b,K as x,D as o}from"./index-aBVyMkog.js";import"./index-729qusIZ.js";const g=s=>{const{date:n,title:t,description:r,link:a,ctaLabel:h,target:f}=s;return e.jsxs("div",{className:"card-item",children:[e.jsx("span",{className:"card-item__date",children:n}),e.jsx("h3",{className:"card-item__heading",children:t}),e.jsx("p",{className:"card-item__desc",children:r}),a&&e.jsxs("a",{href:a,className:"btn",target:f,children:[e.jsx("span",{className:"btn-label",children:h}),e.jsx("span",{className:"fas fa-arrow-right"})]})]})},N=s=>s<5?{classes:o,draggable:!0,indicators:!0,responsive:[{breakpoint:1200,options:{slidesToShow:4,indicators:!1,draggable:!1}},{breakpoint:768,options:{slidesToShow:3}}],slidesToShow:1.25}:{classes:o,draggable:!0,indicators:!0,responsive:[{breakpoint:1200,options:{slidesToShow:4,buttons:!0}},{breakpoint:768,options:{slidesToShow:4}}],slidesToScroll:1,slidesToShow:1.25},m=({cards:s,disableAnimation:n})=>{if(!(s!=null&&s.length))return null;const t=N(s.length);return(s==null?void 0:s.length)&&e.jsx(x,{animationDisabled:n,...t,children:s.map((r,a)=>p.createElement(g,{...r,key:a}))})},u=({id:s})=>(p.useEffect(()=>{b('[data-component="featuredevents"]',{add(n){const{dataset:t}=n,{propsId:r}=t,a=window.ucsdh[`featuredevents_${r}`];v.render(e.jsx(m,{...a}),n)}})},[]),e.jsx("div",{"data-component":"featuredevents","data-props-id":s}));m.__docgenInfo={description:"",methods:[],displayName:"FeaturedEvents"};u.__docgenInfo={description:"",methods:[],displayName:"RenderFeaturedEvents"};const k={title:"Organisms/Featured Classes and Events"},j={title:"Featured Classes & Events",description:"Venenatis pellentesque tristique consectetur ultrices elementum nulla dictum.",disableAnimation:!0},_=s=>{const{title:n,description:t,disableAnimation:r}=s;return e.jsxs("section",{className:"featured-classes-events",children:[e.jsxs("div",{className:"featured-classes-events__header",children:[e.jsx("h2",{children:n}),e.jsx("p",{children:t})]}),e.jsx("div",{className:"featured-classes-events__cards",children:e.jsx(u,{id:"54"})}),e.jsxs("a",{href:"#",className:"btn",children:[e.jsx("span",{className:"btn-label",children:"View Full Calender"}),e.jsx("span",{className:"btn-round btn-primary btn-responsive",children:e.jsx("span",{className:"fas fa-arrow-right"})})]})]})},i=_.bind({});i.args=j;var d,l,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const T=["Model"];export{i as Model,T as __namedExportsOrder,k as default};
