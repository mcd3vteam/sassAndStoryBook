import { RenderFeaturedEvents } from ".";
import { setFeaturedEventsArgs } from "./featuredEvents";

export default {
  title: "Organisms/Featured Classes and Events",
};

const cards = [
  {
    date: "08.20",
    title: "Family Support Groups and Classes",
    description:
      "Elit vestibulum lobortis fames elementum amet id sed consequat.",
    link: "#",
    ctaLabel: "Details",
  },
  {
    date: "08.20",
    title: "Childbirth Classes and Tours",
    description:
      "Elit vestibulum lobortis fames elementum amet id sed consequat.",
    link: "#",
    ctaLabel: "Details",
  },
  {
    date: "08.20",
    title: "Support Groups at UC San Diego Health",
    description:
      "Elit vestibulum lobortis fames elementum amet id sed consequat.",
    link: "#",
    ctaLabel: "Details",
  },
  {
    date: "08.20",
    title: "Head and Neck Support Group",
    description:
      "Elit vestibulum lobortis fames elementum amet id sed consequat.",
    link: "#",
    ctaLabel: "Details",
  },
  {
    date: "08.20",
    title: "Support Groups at UC San Diego Health",
    description:
      "Elit vestibulum lobortis fames elementum amet id sed consequat.",
    link: "#",
    ctaLabel: "Details",
  },
  {
    date: "08.20",
    title: "Head and Neck Support Group",
    description:
      "Elit vestibulum lobortis fames elementum amet id sed consequat.",
    link: "#",
    ctaLabel: "Details",
  },
];

const FeaturedClassesArgs = {
  title: "Featured Classes & Events",
  description:
    "Venenatis pellentesque tristique consectetur ultrices elementum nulla dictum.",
  disableAnimation: true,
};

const FeaturedClassesComponent = (args) => {
  const { title, description, disableAnimation } = args;
  const id = "54";
  setFeaturedEventsArgs(id, { cards, disableAnimation });

  return (
    <section className="featured-classes-events">
      <div className="featured-classes-events__header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {/* React Component Start */}
      <div className="featured-classes-events__cards">
        <RenderFeaturedEvents id={id} />
      </div>
      {/* React Component End */}

      <a href="#" className="btn">
        <span className="btn-label">View Full Calender</span>
        <span className="btn-round btn-primary btn-responsive">
          <span className="fas fa-arrow-right"></span>
        </span>
      </a>
    </section>
  );
};

export const Model = FeaturedClassesComponent.bind({});
Model.args = FeaturedClassesArgs;
