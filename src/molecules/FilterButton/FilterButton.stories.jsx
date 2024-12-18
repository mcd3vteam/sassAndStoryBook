import { FilterButton } from ".";

export default {
  title: "Molecules/FilterButton",
};

const FilterArgs = {
  title: "Filter",
  action: "Clear",
};

const FilterBtn = (args) => (
  <>
    <FilterButton {...args} />
  </>
);
export const Default = FilterBtn.bind({});
Default.args = FilterArgs;
