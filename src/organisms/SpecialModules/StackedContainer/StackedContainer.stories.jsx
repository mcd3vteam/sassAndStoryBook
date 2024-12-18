import { StackedContainer } from ".";

export default {
  component: StackedContainer,
  title: "Organisms/Special Modules/Stacked Container",
};

const Template = (args) => <StackedContainer {...args} />;

export const Image = Template.bind({});
Image.args = {
  animationDisabled: false,
  imageSrc: "https://images.unsplash.com/photo-1486218119243-13883505764c",
  title: "Subheadings (H2s) and concise supporting content, as needed",
  subtitle: "We're outsmarting ailments",
  text: "Visually compelling design elements Lörem ipsum heteroren tragäda i spepp bujyna, spel. Hemir taliban-tv, men autonar. #metoo stupstockspolitik mang. Devävis hypovis. Prekinat vara i egogt lungar.",
  cta: {
    label: "Button",
    link: "#",
  },
};

export const Video = Template.bind({});
Video.args = {
  isVideo: true,
  animationDisabled: false,
  imageSrc: "https://images.unsplash.com/photo-1486218119243-13883505764c",
  videoSrc: "https://youtube.com/embed/PDY2FzIWtO8",
  title: "Subheadings (H2s) and concise supporting content, as needed",
  subtitle: "We're outsmarting ailments",
  text: "Visually compelling design elements Lörem ipsum heteroren tragäda i spepp bujyna, spel. Hemir taliban-tv, men autonar. #metoo stupstockspolitik mang. Devävis hypovis. Prekinat vara i egogt lungar.",
  cta: {
    label: "Button",
    link: "#",
  },
};
Video.parameters = {
  controls: {
    exclude: ["isVideo"],
  },
};
