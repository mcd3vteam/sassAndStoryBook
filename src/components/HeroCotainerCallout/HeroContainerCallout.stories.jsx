import { HeroContainerCalloutV3 } from ".";

export default {
  title: "Components/Hero Container with Callout",
};

const hcArgs = { includeTout: false };

const HeroContainerComponent = (args) => <HeroContainerCalloutV3 {...args} />;
export const Model = HeroContainerComponent.bind({});
Model.args = hcArgs;
