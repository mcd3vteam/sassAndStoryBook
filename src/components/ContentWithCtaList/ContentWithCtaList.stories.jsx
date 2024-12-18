import { ContentWithCtaList } from ".";

export default {
  title: "Components/Content With Cta List",
  component: ContentWithCtaList,
};

const TitleBodyCTAComponent = (args) => <ContentWithCtaList {...args} />;
const SubtitleBodyCTAComponent = (args) => <ContentWithCtaList {...args} />;
const TitleBodyNoCTAComponent = (args) => <ContentWithCtaList {...args} />;

export const Default = TitleBodyCTAComponent.bind({});
Default.args = {
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
    {
      title: "Behavioral and Mental Health Plans",
      description: "",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Transplant Plans",
      description: "",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Vision Plans",
      description: "",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "International Plans",
      description: "",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
  ],
};
Default.parameters = {
  controls: {
    exclude: ["links", "variation"],
  },
};

export const InsideTabbedComponent = SubtitleBodyCTAComponent.bind({});
InsideTabbedComponent.args = {
  title: "",
  subtitle: "Urgent Care and Express Care",
  description:
    "Options for children and adults. It's ideal for common health care needs, including sore throats, ear infections and minor injuries.",
  cta: {
    url: "#",
    label: "View All Walk-in Locations",
  },
  variation: "tabbed",
  links: [
    {
      title: "Learn about Express Care",
      description: "",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Learn about Urgent Care",
      description: "",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Learn about Express Care Video Visits",
      description: "",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Where Should I Go?",
      description: "",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
  ],
};
InsideTabbedComponent.parameters = {
  controls: {
    exclude: ["links", "variation", "title"],
  },
};

export const Stacked = TitleBodyNoCTAComponent.bind({});
Stacked.args = {
  title: "Get more information",
  subtitle: "lorem sit",
  description:
    "Faucibus fames quam erat neque mi. Ac hendrerit metus massa orci. Integer nibh felis, sit elit, adipiscing.",
  cta: {},
  variation: "stacked",
  links: [
    {
      title: "Caregiver Resources",
      description: "Sit justo, lobortis lacinia nisl",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Chaplain Services & Spiritual Care",
      description: "Sit justo, lobortis lacinia nisl",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Child Life Services",
      description: "Sit justo, lobortis lacinia nisl, purus.",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Ethics Consultations",
      description: "Sit justo, lobortis lacinia nisl, purus.",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Hospital Gift Shops",
      description: "Sit justo, lobortis lacinia nisl, purus.",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Ethics Consultations",
      description: "Sit justo, lobortis lacinia nisl, purus.",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Hospital Visitor Policies",
      description: "Sit justo, lobortis lacinia nisl.",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Interpreter Services",
      description: "Sit justo, lobortis lacinia nisl.",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Patient Rights & Responsibilities",
      description: "Sit justo, lobortis lacinia nisl.",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Transportation Services",
      description: "Sit justo, lobortis lacinia nisl, purus.",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
    {
      title: "Your Hospital Stay",
      description: "Sit justo, lobortis lacinia nisl, purus.",
      url: "#",
      iconClass: "fas fa-arrow-right",
    },
  ],
};
