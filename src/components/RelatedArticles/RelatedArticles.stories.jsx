import { RelatedArticles } from ".";
export default {
  title: "Components/Related Articles Section",
};

const RelatedArticlesArgs = {
  title: "Related Articles",
  description:
    "A pioneering mentorship program at UC San Diego Health Sciences improved faculty satisfaction, especially among underrepresented faculty.",
  imageSrc: "/resources/images/image.png",
  animationDisabled: false,
};

const RelatedArticlesComponent = (args) => (
  <RelatedArticles {...args}></RelatedArticles>
);

export const WithRelatedArticles = RelatedArticlesComponent.bind({});
WithRelatedArticles.args = RelatedArticlesArgs;
