import { Hero } from ".";
import { FeaturedList } from "../FeaturedList";
import { SearchBar } from "../../molecules/SearchBar";
import { ContentWithCtaList } from "../ContentWithCtaList";
import { Tabs } from "../../molecules/Tabs";

export default {
  title: "Components/Hero/Overlapping",
  argTypes: {
    textColor: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

const defaultArgs = {
  animationDisabled: false,
  title: "For Healthcare Professionals",
  subtitle: "lorwm ipsum",
  description:
    "Faucibus fames quam erat neque mi. Ac hendrerit metus massa orci. Integer nibh felis, sit elit, adipiscing sit. Et tellus, pulvinar purus odio ullamcorper.",
  ctaLabel: "Apply to Volunteer",
  imageSrc: "/resources/images/jobs.png",
};

const Component = (args) => <Hero {...args} />;

export const Default = Component.bind({});
Default.args = {
  ...defaultArgs,
  subtitle: "",
  description: "",
  ctaLabel: "",
};

export const CancerServices = Component.bind({});
CancerServices.args = {
  ...defaultArgs,
  title: "Cancer care as",
  subtitle: "unique as you are",
  description: "",
  ctaLabel: "Learn More",
};

const Component2 = (args) => {
  return (
    <div className="main">
      <div className="hero-content overlapping-block">
        <Hero {...args} />
        <SearchBar />
      </div>
    </div>
  );
};

//  image, title, subtile, description, overlay component: search
export const FindAProvider = Component2.bind({});
FindAProvider.args = {
  ...defaultArgs,
  title: "Find a Provider",
  ctaLabel: "",
};

//  title, description, overlay component: search
export const FAQs = Component2.bind({});
FAQs.args = {
  ...defaultArgs,
  title: "FAQs to help you understand lorem ipsum your care",
  description:
    "Faucibus fames quam erat neque mi.\nhendrerit metus massa orci.",
  ctaLabel: "",
  imageSrc: "",
};

const featuredListArgs = {
  title: "Verify Your Coverage",
  url: "#",
  description:
    "To verify your coverage, call your insurance company and provide these tax ID numbres:",
  list: [
    {
      title: "UC San Diego Medical Group (physicians)",
      description: "23-7064656",
    },
    {
      title: "UC San Diego Medical Center (hospitals)",
      description: "33-0599494",
    },
  ],
};

const contentWithCtaListArgs = {
  title: "Health insurance plans accepted",
  subtitle: "Subtitle field text here",
  description:
    "Magna massa orci, vulputate urna. Nunc enim id condimentum mattis turpis elementum consectetur in.",
  cta: {
    url: "#",
    label: "Explore All Plans Accepted",
  },
  links: [
    {
      title: "Medicare Plans",
      description: "",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Medi-Cal and MediConnect Plans",
      description: "",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Covered California Plans",
      description: "",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
  ],
};

const tabsArgs = {
  selectedIndex: 0,
  tabs: [
    {
      title: "Walk-in Care",
      content: <ContentWithCtaList {...contentWithCtaListArgs} />,
    },
    {
      title: "Primary Care",
      content: <FeaturedList {...featuredListArgs} />,
    },
  ],
};

const Component3 = (args) => (
  <div className="main">
    <div className="hero-content  overlapping-block">
      <Hero {...args} />
      <FeaturedList {...featuredListArgs} />
    </div>
  </div>
);

//  title, description, overlay component: featured list
export const PlansAccepted = Component3.bind({});
PlansAccepted.args = {
  ...defaultArgs,
  title: "Plans Accepted by UC San Diego Health",
  subtitle: "",
  description:
    "UC San Diego Health accepts most major health insurance plans, but it is the patient's responsibility to call the health plans and verify that UC San Diego is an in-network provider for your particular plan.",
  ctaLabel: "",
  imageSrc: "",
};

const Component4 = (args) => (
  <div className="main">
    <div className="hero-content  overlapping-block">
      <Hero {...args} />
      <Tabs {...tabsArgs} />
    </div>
  </div>
);

//  image, title, subtile, description, overlay component: tabbed content
export const SpecialtyCare = Component4.bind({});
SpecialtyCare.args = {
  ...defaultArgs,
  title: "Primary & Specialty Care",
  description:
    "Faucibus fames quam erat neque mi. Ac hendrerit metus massa orci.",
  ctaLabel: "",
  imageSrc: "/resources/images/IMG_GettyImages-1266645414.jpg",
};
