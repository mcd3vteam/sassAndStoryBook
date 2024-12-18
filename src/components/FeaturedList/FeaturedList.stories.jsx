import { FeaturedList } from ".";

export default {
  title: "Components/Featured List",
};

const featuredListArgs = {
  title: "Verify Your Coverage",
  url: "#",
  description:
    "To verify your coverage, call your insurance company and provide these tax ID numbres:",
  list: [
    {
      title: "UC San Diego Medical Group (physicians)",
      description: "23-7064656",
    },
    {
      title: "UC San Diego Medical Center (hospitals)",
      description: "33-0599494",
    },
  ],
  withHero: false,
};

const FeatList = (args) => (
  <div className={args.withHero && "hero-content"}>
    <div
      className="mock-hero"
      style={{ backgroundColor: "#13294B", height: "75px" }}
    />
    <FeaturedList {...args} />
  </div>
);
export const Default = FeatList.bind({});
Default.args = featuredListArgs;
