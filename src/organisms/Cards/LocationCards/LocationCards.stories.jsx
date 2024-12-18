import { RenderLocationCards } from ".";
import { setLocationCardsArgs } from "./LocationCards";

export default {
  title: "Organisms/Cards/Location Card/Carousels",
  layout: "fullscreen",
  argTypes: {
    karouselOptions: {
      control: false,
    },
  },
};
const cards2 = [
  {
    imageSrc:
      "https://qa.health.ucsd.edu/globalassets/gettyimages-1187745189-1.png?width=437&height=437&rsampler=bicubic&compand=true",
    imageAlt: null,
    eyebrow: "",
    name: "RP office Boston",
    addressLine1: "50 Milk st",
    addressLine2: "Boston MA",
    ctaLink: "/",
    ctaLabel: "View More",
    ctaTarget: "",
  },
  {
    imageSrc:
      "https://qa.health.ucsd.edu/globalassets/hp_hero.jpg?width=437&height=437&rsampler=bicubic&compand=true",
    imageAlt: null,
    eyebrow: "subtitle",
    name: "Location2",
    addressLine1: "42 Ladd St",
    addressLine2: "East Greenwich RI",
    ctaLink: "",
    ctaLabel: "View More",
    ctaTarget: "",
  },
  {
    imageSrc:
      "https://qa.health.ucsd.edu/globalassets/image-2-2.png?width=437&height=437&rsampler=bicubic&compand=true",
    imageAlt: null,
    eyebrow: "Subtitle",
    name: "Location3",
    addressLine1: "100 Main St",
    addressLine2: "Hopkinton MA",
    ctaLink: "/general-page/",
    ctaLabel: "View More",
    ctaTarget: "",
  },
  {
    imageSrc:
      "https://qa.health.ucsd.edu/globalassets/image-2-1.png?width=437&height=437&rsampler=bicubic&compand=true",
    imageAlt: null,
    eyebrow: "",
    name: "Location4",
    addressLine1: "1225 Washington St",
    addressLine2: "Norwood MA",
    ctaLink: "",
    ctaLabel: "View More",
    ctaTarget: "",
  },
  {
    imageSrc:
      "https://qa.health.ucsd.edu/globalassets/image-21.png?width=437&height=437&rsampler=bicubic&compand=true",
    imageAlt: null,
    eyebrow: "",
    name: "Location5",
    addressLine1: "100 Main St",
    addressLine2: "Troy MI",
    ctaLink: "/",
    ctaLabel: "View More",
    ctaTarget: "",
  },
];
const cards = [
  {
    imageSrc: "/resources/images/image.png",
    eyebrow: "La Jolla",
    name: "UC San Diego Medical Center Building",
    addressLine1: "200 W. Arbor Drive",
    addressLine2: "San Diego, CA 92103",
    link: "tel:6195436222",
    linkLabel: "Office: (619) 543-6222",
    target: "_blank",
  },
  {
    imageSrc: "/resources/images/image.png",
    eyebrow: "La Jolla",
    name: "Jacobs Cancer Center",
    addressLine1: "200 W. Arbor Drive",
    addressLine2: "San Diego, CA 92103",
    link: "tel:6195436222",
    linkLabel: "Office: (619) 543-6222",
    target: "_blank",
  },
  {
    imageSrc: "/resources/images/image.png",
    eyebrow: "La Jolla",
    name: "Moores Cancer Center",
    addressLine1: "200 W. Arbor Drive",
    addressLine2: "San Diego, CA 92103",
    link: "tel:6195436222",
    linkLabel: "Office: (619) 543-6222",
  },
  {
    imageSrc: "/resources/images/image.png",
    eyebrow: "La Jolla",
    name: "Moores Cancer Center",
    addressLine1: "200 W. Arbor Drive",
    addressLine2: "San Diego, CA 92103",
    link: "tel:6195436222",
    linkLabel: "Office: (619) 543-6222",
  },
  {
    imageSrc: "/resources/images/image.png",
    eyebrow: "La Jolla",
    name: "Moores Cancer Center",
    addressLine1: "200 W. Arbor Drive",
    addressLine2: "San Diego, CA 92103",
    link: "tel:6195436222",
    linkLabel: "Office: (619) 543-6222",
  },
];

const Description = () => (
  <div className="container">
    <div className="row">
      <ul
        className="col-xs-5 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2"
        style={{ listStyle: "initial", margin: "16px" }}
      >
        <li>
          .cshtml JavaScript: src\organisms\Cards\LocationCards\LocationCards.js
        </li>
        <li>React Component: src\organisms\Cards\LocationCards\index.tsx</li>
      </ul>
    </div>
  </div>
);
const Template = (args) => {
  const id = "54";
  const { ctaLink, ctaLabel } = args;
  setLocationCardsArgs(id, args);
  return (
    <section className="location-cards">
      <div className="container">
        <h3 className="location-cards__title">
          Specialties and Programs
          <em>lorem ipsum</em>
        </h3>
        <p className="location-cardsl__description">
          Care for complex conditions that’s ranked among the nation’s best
        </p>
      </div>
      <RenderLocationCards id={id} />
      <div className="container location-cards__cta">
        <a href={ctaLink} className="btn" target="_self">
          <span className="btn-label">{ctaLabel}</span>
          <span className="btn-round btn-sm btn-primary">
            <span className="fas fa-arrow-right" />
          </span>
        </a>
      </div>
    </section>
  );
};

export const Default = Template.bind({});
Default.args = {
  disableAnimation: false,
  cards,
  ctaLink: "#",
  ctaLabel: "Directions & Wait Times",
};

export const withCTAs = Template.bind({});
withCTAs.args = {
  disableAnimation: false,
  cards: cards2,
  ctaLink: "#",
  ctaLabel: "Directions & Wait Times",
};

export const TechDetails = Description.bind({});
// TechDetails.parameters = {
//   controls: { hideNoControlsWarning: true, exclude: ["karouselOptions"] },
// };
