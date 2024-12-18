import { OverlayContent } from ".";
export default {
  title: "Components/Overlay Content Section",
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["blue", "green", "yellow", "teal", "white"],
      },
    },
  },
};

const OverlayContentArgs = {
  animationDisabled: false,
  reverse: false,
};

const OverlayContentComponent = (args) => (
  <OverlayContent {...args}></OverlayContent>
);

export const WithOverlayContent = OverlayContentComponent.bind({});
WithOverlayContent.args = OverlayContentArgs;
