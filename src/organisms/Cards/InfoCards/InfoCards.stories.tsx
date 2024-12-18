import React from "react";
import { RenderInfoCards } from ".";
import { setInfoCardsArgs } from "./InfoCards";

export default {
  title: "Organisms/Cards/Info Card/Carousels",
  layout: "fullscreen",
  argTypes: {
    karouselOptions: {
      control: false,
    },
  },
};

const cards = [
  {
    url: "#",
    eyebrow: "2.22",
    title: "Card/Service Title 1",
    description:
      "Lörem ipsum kosk digt planera. Trelöde tining en byvösk. Tridygon vibyligen. Ultrartad bipasa sefåpp. Vatirade nejede kode i dyren.",
    ctaLabel: "See Locations",
    target: "_blank",
  },
  {
    url: "#",
    eyebrow: "2.22",
    title: "Card/Service Title 2",
    description:
      "Lörem ipsum kosk digt planera. Trelöde tining en byvösk. Tridygon vibyligen. Ultrartad bipasa sefåpp. Vatirade nejede kode i dyren.",
    ctaLabel: "See Locations",
    target: "_blank",
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

const Description = () => (
  <div className="container tech-details">
    <div className="row">
      <ul
        className="col-xs-5 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2"
        style={{ listStyle: "initial", margin: "16px" }}
      >
        <li>.cshtml JavaScript: src\organisms\Cards\InfoCards\InfoCards.js</li>
        <li>React Component: src\organisms\Cards\InfoCards\index.tsx</li>
      </ul>
    </div>
  </div>
);
const Template = (args) => {
  const id = "54";
  setInfoCardsArgs(id, args);
  return (
    <section className="info-cards">
      <div className="info-cards__intro">
        <h2>
          Specialties and Programs
          <em>lorem ipsum</em>
        </h2>
        <p>Care for complex conditions that’s ranked among the nation’s best</p>
      </div>

      {/* React component start */}
      <RenderInfoCards id={id} />
      {/* React component end */}

      <div className="info-cards__cta">
        <a href="#" className="btn">
          <span className="btn-label">Browse all specialties</span>
          <span className="btn-round btn-primary btn-responsive">
            <span className="fas fa-arrow-right" />
          </span>
        </a>
      </div>
    </section>
  );
};

export const SmallCards3 = Template.bind({});
SmallCards3.args = {
  disableAnimation: false,
  cards: cards.slice(0, 3),
  cardSize: "small",
};

export const SmallCards4 = Template.bind({});
SmallCards4.args = {
  disableAnimation: false,
  cards: cards.slice(0, 4),
  cardSize: "small",
};

export const SmallCards5 = Template.bind({});
SmallCards5.args = {
  disableAnimation: false,
  cards: cards.slice(0, 5),
  cardSize: "small",
};

export const LargeCards3 = Template.bind({});
LargeCards3.args = {
  disableAnimation: false,
  cards: cards.slice(0, 3),
  cardSize: "large",
};

export const LargeCards4 = Template.bind({});
LargeCards4.args = {
  disableAnimation: false,
  cards: cards.slice(0, 4),
  cardSize: "large",
};

export const TechDetails = Description.bind({});
TechDetails.parameters = {
  controls: { hideNoControlsWarning: true, exclude: ["karouselOptions"] },
};
