import { RenderProviderCards } from ".";
import { setProviderCardsArgs } from "./ProviderCardCarousel";

export default {
  title: "Components/Provider Carousel",
  layout: "fullscreen",
};

const cards = [
  {
    name: "Jeremy Hirst, MD",
    title: "Psychiatrist",
    details:
      "Associate Director, Patient and Family Support Services, Moores Cancer Center",
    shape: "circle",
  },
  {
    name: "Jeremy Hirst, MD",
    title: "Psychiatrist",
    details:
      "Associate Director, Patient and Family Support Services, Moores Cancer Center",
    shape: "square",
  },
  {
    name: "Jeremy Hirst, MD",
    title: "Psychiatrist",
    details:
      "Associate Director, Patient and Family Support Services, Moores Cancer Center",
    shape: "square",
  },
  {
    name: "Jeremy Hirst, MD",
    title: "Psychiatrist",
    details:
      "Associate Director, Patient and Family Support Services, Moores Cancer Center",
    shape: "circle",
  },
  {
    name: "Jeremy Hirst, MD",
    title: "Psychiatrist",
    details:
      "Associate Director, Patient and Family Support Services, Moores Cancer Center",
    shape: "circle",
  },
  {
    name: "Jeremy Hirst, MD",
    title: "Psychiatrist",
    details:
      "Associate Director, Patient and Family Support Services, Moores Cancer Center",
    shape: "square",
  },
];

const ProviderKarousel = (args) => {
  setProviderCardsArgs("54", args);
  return (
    <section className="provider-carousel">
      <div className="container">
        <h3 className="provider-carousel__title">
          Specialties and Programs
          <em>lorem ipsum</em>
        </h3>
        <p className="provider-carousel__description">
          Care for complex conditions that’s ranked among the nation’s best
        </p>
      </div>
      <RenderProviderCards id="54"></RenderProviderCards>
      <div className="container">
        <a href="#" className="btn">
          <span className="btn-label">See All Providers</span>
          <span className="btn-round btn-primary btn-responsive">
            <span className="fas fa-arrow-right" />
          </span>
        </a>
      </div>
    </section>
  );
};
export const Default = ProviderKarousel.bind({});
Default.args = {
  disableAnimation: false,
  cards: cards,
};
