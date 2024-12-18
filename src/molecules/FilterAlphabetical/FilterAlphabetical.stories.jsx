import { FilterAlphabetical } from ".";

export default {
  title: "Molecules/Filter Alphabetical",
};

const FilterAlphabeticalArgs = {
  title: "Sort Alphabetically",
  options: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
};
const FilterAlphabeticalComponent = (args) => <FilterAlphabetical {...args} />;

export const Model = FilterAlphabeticalComponent.bind({});
Model.args = FilterAlphabeticalArgs;
