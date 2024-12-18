import { RichText } from ".";

export default {
  title: "Components/Rich Text",
};

const richTextArgs = {
  animationDisabled: false,
  centered: true,
};

const RichTextComponent = (args) => <RichText {...args} />;
export const Default = RichTextComponent.bind({});
Default.args = richTextArgs;
