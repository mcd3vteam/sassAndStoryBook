import { ChildCTAButton } from ".";

export default {
  title: "Molecules/Child CTA Button",
};

const ChildCTABtnArgs = {
  specialty: "Primary Care",
};

const ChildCTABtn = (args) => (
  <>
    <ChildCTAButton {...args} />
  </>
);
export const Default = ChildCTABtn.bind({});
Default.args = ChildCTABtnArgs;
