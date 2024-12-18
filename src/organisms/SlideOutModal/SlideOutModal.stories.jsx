import { SlideOutModal } from ".";

export default {
  title: "Organisms/slide out modal",
};

const SlideoutArgs = {};

const SlideoutModalComponent = (args) => <SlideOutModal {...args} />;

export const Model = SlideoutModalComponent.bind({});
Model.args = SlideoutArgs;
