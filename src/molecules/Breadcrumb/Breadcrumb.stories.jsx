import { Breadcrumb } from ".";

export default {
  title: "Molecules/Breadcrumb",
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["blue", "white"],
      },
    },
  },
};

const bcArgs = {
  color: "blue",
  links: [{ label: "Home", href: "#" }, { label: "Doctors" }],
  overlay: false,
  extraMargin: false,
};
const BreadcrumbComponent = (args) => <Breadcrumb {...args} />;

export const Model = BreadcrumbComponent.bind({});
Model.args = bcArgs;
