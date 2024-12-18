import { FeatureCard, FeatureCardGrid } from ".";

export default {
  component: FeatureCard,
  title: "Organisms/Cards/Feature Card",
};

const TemplateThird = (args) => (
  <div className="container">
    <div className="row">
      <FeatureCard {...args} variant="third" />
    </div>
  </div>
);

const TemplateHalf = (args) => (
  <div className="container">
    <div className="row">
      <FeatureCard {...args} variant="half" />
    </div>
  </div>
);

const TemplateThirdComposition = (args) => {
  const { featureCards } = args;
  return (
    <FeatureCardGrid {...args}>
      <FeatureCard {...featureCards[0]} variant="third" />
      <FeatureCard {...featureCards[1]} variant="third" />
      <FeatureCard {...featureCards[2]} variant="third" />
    </FeatureCardGrid>
  );
};

const TemplateHalfComposition = (args) => {
  const { featureCards } = args;
  return (
    <FeatureCardGrid {...args}>
      <FeatureCard {...featureCards[0]} variant="half" />
      <FeatureCard {...featureCards[1]} variant="half" />
    </FeatureCardGrid>
  );
};

const img = "http://fpoimg.com/440x592?text=IMG";
export const BaseThird = TemplateThird.bind({});
BaseThird.args = {
  link: "#",
  imageSrc: img,
  title: "Primary Care",
  text: "This is my text",
  cta: "See Locations",
};
BaseThird.storyName = "Base 1/3 Card";

export const BaseHalf = TemplateHalf.bind({});
BaseHalf.args = {
  link: "",
  imageSrc: img,
  title: "Primary Care",
  text: "This is my text",
  cta: "See Locations",
};
BaseHalf.storyName = "Base 1/2 Card";

export const CompositionThird = TemplateThirdComposition.bind({});
CompositionThird.storyName = "Composition 3 Column";
CompositionThird.args = {
  title: "Lorem Ipsum",
  emphasis: "lorem ipsum",
  text: "Lorem ipsum dolor sit amet",
  featureCards: [
    {
      link: "",
      imageSrc: img,
      title: "Primary Care",
      text: "We'll help you find the right provider for your family",
      cta: "See Locations",
    },
    {
      link: "",
      imageSrc: img,
      title: "Express Care",
      text: "Three locations for minor health needs or wellness services, with video visits available",
      cta: "See Locations",
    },
    {
      link: "",
      imageSrc: img,
      title: "Urgent Care",
      text: "Locations in La Jolla or Rancho Bernardo ",
      cta: "See Locations",
    },
  ],
};

export const CompositionHalf = TemplateHalfComposition.bind({});
CompositionHalf.storyName = "Composition 2 Column";
CompositionHalf.args = {
  title: "Lorem Ipsum",
  emphasis: "lorem ipsum",
  text: "Lorem ipsum dolor sit amet",
  featureCards: [
    {
      link: "",
      imageSrc:
        "https://images.unsplash.com/photo-1576766125468-a5d48274c5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2008&q=80",
      title: "Primary Care",
      text: "We'll help you find the right provider for your family",
      cta: "See Locations",
    },
    {
      link: "",
      imageSrc:
        "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      title: "Express Care",
      text: "Three locations for minor health needs or wellness services, with video visits available",
      cta: "See Locations",
    },
    {
      link: "",
      imageSrc:
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      title: "Urgent Care",
      text: "Locations in La Jolla or Rancho Bernardo ",
      cta: "See Locations",
    },
  ],
};
