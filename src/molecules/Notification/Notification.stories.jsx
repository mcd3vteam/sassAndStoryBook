import { Notification } from ".";

export default {
  title: "Molecules/Notification",
  argTypes: {
    color: { control: { type: "select", options: ["yellow", "blue", "red"] } },
  },
};

const notificationArgs = {
  title: "Risk Factors",
  description:
    "Risk factors for salivary gland cancers are not well understood, but there are some correlations with a history of smoking or exposure to radiation or heavy metals. About two-thirds of these cancers occur in people age 55 and over.",
  ctaLabel: "Call us",
  icon: "fas fa-circle-info",
};

const Component = (args) => <Notification {...args} />;

export const Default = Component.bind({});
Default.args = notificationArgs;
