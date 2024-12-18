import { AlertBanner } from ".";

export default {
  title: "Molecules/Alerts",
  argTypes: {
    backgroundColor: {
      options: ["blue", "yellow", "red"],
      control: { type: "select" },
    },
  },
};

const AlertBannerComponent = (args) => <AlertBanner {...args} />;
export const Default = AlertBannerComponent.bind({});
Default.args = {
  animationDisabled: false,
  backgroundColor: "blue",
  hasLink: true,
  icon: "far fa-exclamation-circle",
  dismissed: false,
};
