import { RichText } from ".";
export default {
  title: "Atoms/Rich Text",
};

const Template = (args) => (
  <div style={{ padding: "3em" }}>
    <RichText {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
