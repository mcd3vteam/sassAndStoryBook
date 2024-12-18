import { LocationLinks } from ".";
export default {
  title: "Organisms/Location Links Block",
};

const LocationLinksArgs = {
  title: "Find care in",
  subtitle: "your community",
  description:
    "With over 40 regional clinics, we re everywhere San Diegans seek care.",
  imageSrc: "/resources/images/image.png",
  ctaLabel: "Browse All Locations",
  animationDisabled: false,
  links: [
    { label: "Hospitals and Emergency Rooms", href: "#" },
    { label: "Express and Urgent care", href: "#" },
    { label: "Express and Urgent care", href: "#" },
    { label: "Clinic Locations", href: "#" },
    { label: "Clinic Locations", href: "#" },
    { label: "Clinic Locations", href: "#" },
  ],
};

const LocationLinksComponent = (args) => (
  <LocationLinks {...args}></LocationLinks>
);

export const WithLocationLinks = LocationLinksComponent.bind({});
WithLocationLinks.args = LocationLinksArgs;
