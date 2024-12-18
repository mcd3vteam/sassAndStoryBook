import { FeatureProviderCard } from ".";

export default {
  title: "Organisms/Cards/Feature Provider Card",
};

const ProviderArgs = {
  name: "Jeremy Hirst, MD",
  title: "Psychiatrist",
  details:
    "Associate Director, Patient and Family Support Services, Moores Cancer Center",
  shape: "circle",
};

const FeatureProviderCardComponent = (args) => (
  <FeatureProviderCard {...args} />
);

export const Default = FeatureProviderCardComponent.bind({});
Default.args = ProviderArgs;
