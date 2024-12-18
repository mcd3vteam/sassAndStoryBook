import { TwoColumnContent } from ".";

export default {
  title: "Organisms/Two Column Content",
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["blue", "green", "yellow", "teal", "white"],
      },
    },
  },
};

const twoColArgs = {
  title: "MyUCSD Health App",
  descrp: "Faucibus fames quam erat neque miac hendrerit metus massa orci. ",
  imageSrc: "/resources/images/image.png",
  color: "blue",
  imageFirst: true,
};

const TwoColumnComponent = (args) => <TwoColumnContent {...args} />;

export const WithColContent = TwoColumnComponent.bind({});
WithColContent.args = twoColArgs;

export const WithColContentOppsite = TwoColumnComponent.bind({});
WithColContentOppsite.args = { ...twoColArgs, imageFirst: false };
