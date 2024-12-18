import { IntroTextBlock } from ".";

export default {
  title: "Organisms/Intro Block",
  argTypes: {
    h2Class: { control: { type: "select", options: ["reg", "semibold"] } },
  },
};

const IntroTB = (args) => <IntroTextBlock {...args} />;
const SemiBoldTB = (args) => <IntroTextBlock {...args} />;
export const Default = IntroTB.bind({});
Default.args = {
  title:
    "Quick intro Lörem ipsum kontralog soreren, mikrodänade respektive sarade depp. Benar epinyssa, som olurade att dosade. Supraskade tekining bidesk eftersom nynas.",
  h2Class: "reg",
};

export const SemiBold = SemiBoldTB.bind({});
SemiBold.args = {
  title:
    "Quick intro Lörem ipsum kontralog soreren, mikrodänade respektive sarade depp. Benar epinyssa, som olurade att dosade. Supraskade tekining bidesk eftersom nynas.",
  h2Class: "semibold",
};
