import { FeaturedStories } from ".";
export default {
  title: "Components/Featured Stories",
};

const FeaturedArgs = {
  title: "Latest Releases",
  Story1Title:
    "With $10 Million Gift, Darlene Shiley Builds Upon Her Husband’s Legacy",
  Story2Title:
    "Faculty Mentor Training Program Strengthens University’s Institutional Climate",
  Story3Title:
    "Computer Model of Blood Enzyme May Lead to New Drugs for Cardiovascular Disease",
  Story1Desc:
    "Gift will target expansion of the clinical space at Shiley Eye Institute, which opened 30 years ago with foundational support from the couple;" +
    "it is part of a $27 million renovation and improvement project being undertaken by UC San Diego",
  Story2Desc:
    "A pioneering mentorship program at UC San Diego Health Sciences improved faculty satisfaction, especially among underrepresented faculty.",
  Story3Desc:
    "A pioneering mentorship program at UC San Diego Health Sciences improved faculty satisfaction, especially among underrepresented faculty.",
};

const FeaturedStoriesComponent = (args) => (
  <FeaturedStories {...args}></FeaturedStories>
);

export const Model = FeaturedStoriesComponent.bind({});
Model.args = FeaturedArgs;
