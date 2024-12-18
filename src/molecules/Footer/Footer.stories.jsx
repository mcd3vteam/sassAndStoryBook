import { Footer } from ".";

export default {
  title: "Components/Footer",
};

const FooterArgs = {};

const FooterComponent = (args) => <Footer {...args} />;

export const WithFooter = FooterComponent.bind({});
WithFooter.args = FooterArgs;
