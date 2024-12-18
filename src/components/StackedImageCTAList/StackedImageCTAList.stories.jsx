import { StackedImageContainerWithCtaList } from ".";

export default {
  title: "Components/Content With Cta List",
  component: StackedImageContainerWithCtaList,
};

const StackedImageContainerComponent = (args) => (
  <StackedImageContainerWithCtaList {...args} />
);

export const StackedImageContainer = StackedImageContainerComponent.bind({});
StackedImageContainer.args = {
  animationDisabled: false,
  imageSrc: "/resources/images/community.png",
  title: "Benefits to the",
  subtitle: "Community",
  description:
    "UC San Diego Health touches the lives of those in San Diego and beyond through programs and services that promote health care access, health education, and physical and mental wellness. Faucibus fames quam erat neque mi. Ac hendrerit metus massa orci. Integer nibh felis, sit elit, adipiscing.",
  cta: {
    label: "Button",
    link: "#",
  },
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
  ],
};
