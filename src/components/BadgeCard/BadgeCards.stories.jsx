import { BadgeCard, BadgeCardGrid } from ".";

// name storybook tab
export default {
    component: BadgeCard,
    title: "Components/BadgeCard",
};

// component
const BadgeTemplateThird = (args) => (
    <div className="container">
    <div className="row">
      <BadgeCard {...args} instance="third" />
    </div>
  </div>
);

const BadgeTemplateHalf = (args) => (
    <div className="container">
      <div className="row">
        <BadgeCard {...args} instance="half" />
      </div>
    </div>
  );

const BadgeTemplateSingle = (args) => (
    <div className="container">
      <div className="row">
        <BadgeCard {...args} instance="single" />
      </div>
    </div>
)

const BadgeTemplateThirdComposition = (args) => {
    const { badgeCards } = args;
    return (
        <BadgeCardGrid {...args}>
            <BadgeCard {...badgeCards[0]} instance="third" />
            <BadgeCard {...badgeCards[1]} instance="third" />
            <BadgeCard {...badgeCards[2]} instance="third" />
        </BadgeCardGrid>
    );
};

const BadgeTemplateHalfComposition = (args) => {
    const { badgeCards } = args;
    return (
        <BadgeCardGrid {...args}>
            <BadgeCard {...badgeCards[0]} instance="half" />
            <BadgeCard {...badgeCards[1]} instance="half" />
        </BadgeCardGrid>
    );
};

const BadgeTemplateSingleComposition = (args) => {
    const { badgeCards } = args;
    return (
        <BadgeCardGrid {...args}>
            <BadgeCard {...badgeCards[0]} instance="single" />
        </BadgeCardGrid>
    );
};

const img = "https://health.ucsd.edu/PublishingImages/usnwr-uc-san-diego-top-ranked-in-10-specialties.png";
export const BadgeBaseThird = BadgeTemplateThird.bind({});
BadgeTemplateThird.args = {
    badgeUrl: "#",
    badgeImgSrc: img,
};
BadgeBaseThird.storyName = "Badge Base 1/3 card";

export const BadgeBaseHalf = BadgeTemplateHalf.bind({});
BadgeTemplateHalf.args = {
    badgeUrl: "#",
    badgeImgSrc: img,
};
BadgeBaseHalf.storyName = "Badge Base 1/2 card";

export const BadgeBaseSingle = BadgeTemplateSingle.bind({});
BadgeTemplateSingle.args = {
    badgeUrl: "#",
    badgeImgSrc: img,
};
BadgeBaseSingle.storyName = "Badge Base 1 card";

export const BadgeCompositionThird = BadgeTemplateThirdComposition.bind({});
BadgeCompositionThird.storyName = "Badge Composition 3 column";
BadgeCompositionThird.args = {
    badgeCards: [
        {
            badgeUrl: "",
            badgeImgSrc: img
        },
        {
            badgeUrl: "",
            badgeImgSrc: img
        },
        {
            badgeUrl: "",
            badgeImgSrc: img
        },
    ],
};

export const BadgeCompositionHalf = BadgeTemplateHalfComposition.bind({});
BadgeCompositionHalf.storyName = "Badge Composition 2 Column";
BadgeCompositionHalf.args = {
    badgeCards: [
        {
            badgeUrl: "",
            badgeImgSrc: img
        },
        {
            badgeUrl: "",
            badgeImgSrc: img
        },
    ],
};

export const BadgeCompositionSingle = BadgeTemplateSingleComposition.bind({});
BadgeCompositionSingle.storyName = "Badge Composition 1";
BadgeCompositionSingle.args = {
    badgeCards: [
        {
            badgeUrl: "",
            badgeImgSrc: img
        }
    ],
};