import { InfoCard } from ".";

export default {
  component: InfoCard,
  title: "Organisms/Cards/Info Card",
};

const Template = (args) => <InfoCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: "#",
  eyebrow: "2.22",
  title: "Card Title",
  description: "Lorem ipsum",
  ctaLabel: "See Locations",
};
