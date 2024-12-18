import { FeaturedItem } from ".";

export default {
  component: FeaturedItem,
  title: "Organisms/Cards/Featured Item",
};

const Template = (args) => <FeaturedItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: "#",
  category: "News",
  date: "07/01/2021",
  title: "Creating a Safe Space for Children with Burns to Heal",
  imageSrc: "/resources/images/image.png",
};
