import { Homepage as HomepageComponent } from ".";
import { DefaultClasses } from "../../sharedReact/Carousels/defaults";

export default {
  title: "Templates/Homepage",
};

const Template = (args) => <HomepageComponent {...args} />;

export const Homepage = Template.bind({});
Homepage.args = {
  infoCards: {
    infoCards: [
      {
        url: "#",
        eyebrow: "2.22",
        title: "Cancer Care",
        description:
          "Lörem ipsum kosk digt planera. Trelöde tining en byvösk. Tridygon vibyligen. Ultrartad bipasa sefåpp. Vatirade nejede kode i dyren.",
        ctaLabel: "See Locations",
      },
      {
        url: "#",
        eyebrow: "2.22",
        title: "Heart & Vascular Care",
        description:
          "Lörem ipsum kosk digt planera. Trelöde tining en byvösk. Tridygon vibyligen. Ultrartad bipasa sefåpp. Vatirade nejede kode i dyren.",
        ctaLabel: "See Locations",
      },
      {
        url: "#",
        eyebrow: "2.22",
        title: "Neurological Care",
        description:
          "Lörem ipsum kosk digt planera. Trelöde tining en byvösk. Tridygon vibyligen. Ultrartad bipasa sefåpp. Vatirade nejede kode i dyren.",
        ctaLabel: "See Locations",
      },
      {
        url: "#",
        eyebrow: "2.22",
        title: "Pregnancy & Birth Care",
        description:
          "Lörem ipsum kosk digt planera. Trelöde tining en byvösk. Tridygon vibyligen. Ultrartad bipasa sefåpp. Vatirade nejede kode i dyren.",
        ctaLabel: "See Locations",
      },
    ],
    karouselOptions: {
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
      slidesToShow: 1.25,
      speed: 300,
    },
  },
};
