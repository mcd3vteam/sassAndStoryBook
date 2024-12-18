import { LocationCard } from ".";

export default {
  component: LocationCard,
  title: "Organisms/Cards/Location Card",
};

const Template = (args) => <LocationCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: "/resources/images/image.png",
  eyebrow: "La Jolla",
  name: "Moores Cancer Center",
  addressLine1: "200 W. Arbor Drive",
  addressLine2: "San Diego, CA 92103",
  phonenumber: "6195436222",
  phonenumberLabel: "(619) 543-6222",
};
