import { Tout } from ".";

export default {
  title: "Molecules/Tout",
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["blue", "green", "yellow", "teal", "white"],
      },
    },
  },
};

const shortArgs = {
  title: "Have additional questions?",
  description:
    "Our customer service team is here to help — Monday through Friday from 9 a.m. to 6 p.m.",
  ctaLabel: "Call us",
  url: "#",
  variation: "add-on",
  color: "",
};

const longArgs = {
  title: "Palingar bemurtad sassa diktiga kör. Promengen lans spes.",
  description: "Palingar bemurtad sassa diktiga kör. Promengen lans spes.",
  ctaLabel: "Call us",
  url: "#",
  variation: "",
  color: "",
};

const StandAloneComponent = (args) => <Tout {...args} />;
const NegativeMarginComponent = (args) => (
  <>
    <div
      className="mock-hero"
      style={{ backgroundColor: "#13294B", height: "100px" }}
    />
    <Tout {...args} />
  </>
);

export const StandAlone = StandAloneComponent.bind({});
StandAlone.args = longArgs;
export const NegativeMargin = NegativeMarginComponent.bind({});
NegativeMargin.args = shortArgs;
