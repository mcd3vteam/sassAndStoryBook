import { Karousel } from ".";
import { InfoCard } from "../../organisms/Cards/InfoCards";
import { DefaultClasses } from "./defaults";

export default {
  title: "Shared React/Carousel",
  layout: "fullscreen",
};

const cards = [
  {
    url: "#",
    eyebrow: "2.22",
    title: "Card/Service Title 1",
    description:
      "Lörem ipsum kosk digt planera. Trelöde tining en byvösk. Tridygon vibyligen. Ultrartad bipasa sefåpp. Vatirade nejede kode i dyren.",
    ctaLabel: "See Locations",
  },
  {
    url: "#",
    eyebrow: "2.22",
    title: "Card/Service Title 2",
    description:
      "Lörem ipsum kosk digt planera. Trelöde tining en byvösk. Tridygon vibyligen. Ultrartad bipasa sefåpp. Vatirade nejede kode i dyren.",
    ctaLabel: "See Locations",
  },
  {
    url: "#",
    eyebrow: "2.22",
    title: "Card/Service Title 3",
    description:
      "Lörem ipsum kosk digt planera. Trelöde tining en byvösk. Tridygon vibyligen. Ultrartad bipasa sefåpp. Vatirade nejede kode i dyren.",
    ctaLabel: "See Locations",
  },
  {
    url: "#",
    eyebrow: "2.22",
    title: "Card/Service Title 4",
    description:
      "Lörem ipsum kosk digt planera. Trelöde tining en byvösk. Tridygon vibyligen. Ultrartad bipasa sefåpp. Vatirade nejede kode i dyren.",
    ctaLabel: "See Locations",
  },
  {
    url: "#",
    eyebrow: "2.22",
    title: "Card/Service Title 5",
    description:
      "Lörem ipsum kosk digt planera. Trelöde tining en byvösk. Tridygon vibyligen. Ultrartad bipasa sefåpp. Vatirade nejede kode i dyren.",
    ctaLabel: "See Locations",
  },
];
const Template5 = (args) => (
  <Karousel {...args}>
    {cards.map((card, i) => (
      <InfoCard {...card} key={i} />
    ))}
  </Karousel>
);

export const Default = Template5.bind({});
Default.args = {
  autoplay: false,
  autoplaySpeed: 3000,
  buttons: true,
  classes: DefaultClasses,
  draggable: true,
  indicators: true,
  responsive: [
    {
      breakpoint: 1200,
      options: { slidesToShow: 3, buttons: true },
    },
    {
      breakpoint: 768,
      options: { slidesToShow: 3 },
    },
  ],
  slidesToScroll: 1,
  slidesToShow: 1.5,
  speed: 300,
};
