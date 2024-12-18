import { MultipleImages } from ".";

export default {
  title: "Organisms/Multiple Images Block",
};

const MultipleImagesArgs = {
  title: "Make a financial gift",
  description: "here is the description",
  imageSrc: "/resources/images/image.png",
  ctaLabel: "Give now",
  animationDisabled: false,
};

const MultipleImagesComponent = (args) => <MultipleImages {...args} />;

export const WithMultipleImages = MultipleImagesComponent.bind({});
WithMultipleImages.args = MultipleImagesArgs;
