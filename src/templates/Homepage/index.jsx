import { AnimatedTextBlock } from "../../molecules/AnimatedTextBlock";
import {
  FeatureCard,
  FeatureCardGrid,
} from "../../organisms/Cards/FeatureCard";
import { StackedContainer } from "../../organisms/SpecialModules/StackedContainer";
import { Karousel } from "../../sharedReact/Carousels";
import { InfoCard } from "../../organisms/Cards/InfoCards";
import { TopNav } from "../../molecules/TopNav";
import { Footer } from "../../molecules/Footer";

export const Homepage = (props) => {
  const { infoCards } = props;
  return (
    <>
      <TopNav animationDisabled={false} />
      <main className="main" id="main">
        <AnimatedTextBlock
          secondary="world-class"
          primary="care"
          emphasis="here for you"
        />
        <FeatureCardGrid
          title="Lorem Ipsum"
          emphasis="lorem ipsum"
          text="lorem ipsum dolor sit amet"
        >
          <FeatureCard
            imageSrc="https://images.unsplash.com/photo-1576766125468-a5d48274c5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2008&q=80"
            title="Primary Care"
            text="We\'ll help you find the right provider for your family"
            cta="See Locations"
          />
          <FeatureCard
            imageSrc="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            title="Express Care"
            text="Three locations for minor health needs or wellness services, with video visits available"
            cta="See Locations"
          />
          <FeatureCard
            imageSrc="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            title="Urgent Care"
            text="Locations in La Jolla or Rancho Bernardo "
            cta="See Locations"
          />
        </FeatureCardGrid>

        {/* Info Card Carousel */}
        <section className="info-cards">
          <div className="info-cards__intro">
            <h3>
              Specialties and Programs
              <em>lorem ipsum</em>
            </h3>
            <p className="body">
              Care for complex conditions that’s ranked among the nation’s best
            </p>
          </div>
          <Karousel {...infoCards.karouselOptions} animationDisabled={false}>
            {infoCards.infoCards.map((card, i) => (
              <InfoCard {...card} key={i} />
            ))}
          </Karousel>
          <div className="info-cards__cta">
            <a href="#" className="btn">
              <span className="btn-label">Browse all specialties</span>
              <span className="btn-round btn-primary btn-responsive">
                <span className="fas fa-arrow-right" />
              </span>
            </a>
          </div>
        </section>

        <StackedContainer
          imageSrc="https://images.unsplash.com/photo-1486218119243-13883505764c"
          title="Subheadings (H2s) and concise supporting content, as needed"
          text="Visually compelling design elements Lörem ipsum heteroren tragäda i spepp bujyna, spel. Hemir taliban-tv, men autonar. #metoo stupstockspolitik mang. Devävis hypovis. Prekinat vara i egogt lungar."
          cta={{ label: "Button", link: "#" }}
        />
        <StackedContainer
          isVideo
          imageSrc="https://images.unsplash.com/photo-1486218119243-13883505764c"
          videoSrc="https://youtube.com/embed/PDY2FzIWtO8"
          title="Subheadings (H2s) and concise supporting content, as needed"
          text="Visually compelling design elements Lörem ipsum heteroren tragäda i spepp bujyna, spel. Hemir taliban-tv, men autonar. #metoo stupstockspolitik mang. Devävis hypovis. Prekinat vara i egogt lungar."
          cta={{ label: "Button", link: "#" }}
        />
      </main>
      <Footer />
    </>
  );
};
