import { RenderHeroCarouselItems } from ".";
import { setHeroCarouselItemsArgs } from "./HeroCarouselItems";
import { SearchBar } from "../../molecules/SearchBar";

export default {
  title: "Components/Hero Carousel",
};

const cards = [
  {
    title: "title1",
    description: "description1",
    ctaLabel: "ctaLabel1",
    target: "target1",
  },
  {
    title: "title2",
    description: "description2",
    ctaLabel: "ctaLabel2",
    target: "target2",
  },
  {
    title: "title3",
    description: "description3",
    ctaLabel: "ctaLabel3",
    target: "target3",
  },
  {
    title: "title4",
    description: "description4",
    ctaLabel: "ctaLabel4",
    target: "target4",
  },
];

const Template = (args) => {
  const id = "90";
  setHeroCarouselItemsArgs(id, args);
  return (
    <section className="hero-items-carousel">
      <div className="hero-items-carousel__search">
        <SearchBar />
      </div>
      <RenderHeroCarouselItems args={args} id="90" />
    </section>
  );
};
export const Default = Template.bind({});
Default.args = {
  disableAnimation: false,
  cards: cards.slice(0, 3),
  cardSize: "large",
};
