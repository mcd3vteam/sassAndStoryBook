import { QuickActionCard, QuickActionCards } from ".";

export default {
  component: QuickActionCard,
  title: "Organisms/Cards/Quick Action Card",
};

const Template = () => <QuickActionCard />;
const Component = () => <QuickActionCards />;
export const Default = Template.bind({});
export const Composition = Component.bind({});
