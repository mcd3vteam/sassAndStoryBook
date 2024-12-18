import { FeaturedContentCTA } from ".";

export default {
  title: "Components/Featured Content CTA",
};

const Component = (args) => <FeaturedContentCTA {...args} />;
export const Default = Component.bind({});
Default.args = {
  animationDisabled: false,
  title: "Jobs at UC San Diego Health",
  description:
    "Faucibus fames quam erat neque mi. Ac hendrerit metus massa orci. Integer nibh felis, sit elit, adipiscing sit. Et tellus, pulvinar purus odio ullamcorper.",
  ctaLabel: "Apply to Volunteer",
  videoSrc: "https://youtube.com/embed/PDY2FzIWtO8",
  isVideo: true,
  hasCTA: false,
};
