import { FeaturedItems, RenderFeaturedItems } from ".";
import { setFeaturedItemsArgs } from "./FeaturedItems";

export default {
  component: FeaturedItems,
  title: "Organisms/Cards/Featured Item/Carousels",
};

const cards = [
  {
    url: "#",
    category: "News",
    date: "07/01/2021",
    title: "Creating a Safe Space for Children with Burns to Heal",
    imageSrc: "/resources/images/image.png",
  },
  {
    url: "#",
    category: "News",
    date: "07/01/2021",
    title: "Creating a Safe Space for Children with Burns to Heal",
    imageSrc: "/resources/images/image.png",
  },
  {
    url: "#",
    category: "News",
    date: "07/01/2021",
    title: "Creating a Safe Space for Children with Burns to Heal",
    imageSrc: "/resources/images/image.png",
  },
  {
    url: "#",
    category: "News",
    date: "07/01/2021",
    title: "Creating a Safe Space for Children with Burns to Heal",
    imageSrc: "/resources/images/image.png",
  },
  {
    url: "#",
    category: "News",
    date: "07/01/2021",
    title: "Creating a Safe Space for Children with Burns to Heal",
    imageSrc: "/resources/images/image.png",
  },
];

const Template = (args) => {
  const id = "54";
  setFeaturedItemsArgs(id, args);
  return (
    <section className="featured-items-carousel">
      <div className="featured-items-carousel__intro">
        <h2>Latest News</h2>
        <p>The latest news, releases and features from UC San Diego Health</p>
      </div>
      <RenderFeaturedItems args={args} id="54" />
      <div
        className={`featured-items-carousel__cta ${
          args?.cards?.length > 2 ? "with-indicators" : ""
        }`}
      >
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

const Description = () => (
  <div className="container">
    <div className="row">
      <ul
        className="col-xs-5 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2"
        style={{ listStyle: "initial", margin: "16px" }}
      >
        <li>
          .cshtml JavaScript: src\organisms\Cards\FeaturedItems\FeaturedItems.js
        </li>
        <li>React Component: src\organisms\Cards\FeaturedItems\index.tsx</li>
      </ul>
    </div>
  </div>
);
export const Default = Template.bind({});
Default.args = {
  disableAnimation: false,
  cards: cards.slice(0, 3),
};

export const TechDetails = Description.bind({});
TechDetails.parameters = {
  controls: { hideNoControlsWarning: true, exclude: ["karouselOptions"] },
};
