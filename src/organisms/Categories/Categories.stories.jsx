import { Categories } from ".";

export default {
  title: "Organisms/Categories",
};

const CategoryArgs = {
  categories: [
    "All",
    "CDC FAQ",
    "How to Switch Your Care",
    "Billing",
    "Specialties",
    "Locations",
  ],
  title: "Filter",
  action: "Clear",
};

const Cat = (args) => <Categories {...args} />;
export const Default = Cat.bind({});
Default.args = CategoryArgs;
