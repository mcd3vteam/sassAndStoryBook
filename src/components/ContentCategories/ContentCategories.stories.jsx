import { ContentCategories } from ".";
export default {
  title: "Components/Content Categories CTAs",
};

const ContentCategoriesArgs = {
  title: "H3 intro headline content to  to connect to child pages ",
  description:
    "We treat all types of head and neck cancers, benign tumors and other disorders of the head and neck with the most advanced treatments, including:",
  animationDisabled: false,
};

const ContentCategoriesComponents = (args) => (
  <ContentCategories {...args}></ContentCategories>
);

export const ContentCateogriesCTA = ContentCategoriesComponents.bind({});
ContentCateogriesCTA.args = ContentCategoriesArgs;
