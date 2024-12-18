import { TopNav } from ".";

export default {
  title: "Components/Top Nav",
};

const Template = (args) => (
  <>
    <TopNav {...args} />
    <main id="main">
      <a href="">Main Content Link</a>
    </main>
  </>
);

export const Default = Template.bind({});
Default.args = { disableAnimation: false };
