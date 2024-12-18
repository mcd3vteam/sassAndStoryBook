import { AnimatedTextBlock } from ".";

export default {
  title: "Molecules/Animated Text Block",
};

const Template = (args) => <AnimatedTextBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  secondary: "world-class",
  primary: "care",
  emphasis: "here for you",
};
