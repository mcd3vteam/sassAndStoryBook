import { InsuranceSearchCard } from ".";

export default {
  title: "Molecules/InsuranceSearchCard",
};

const InsuranceSearchCardArgs = {
  list: {
    insurance: "Aetna",
    details: "Employer Group Plans",
    options: [
      "Aetna Open Choice PPO",
      "Aetna Managed Choice HMO/POS",
      "Aetna QPOS",
      "Aetna through employer groups",
    ],
  },
};
const InsuranceSearchCardComponent = (args) => (
  <InsuranceSearchCard {...args} />
);

export const Model = InsuranceSearchCardComponent.bind({});
Model.args = InsuranceSearchCardArgs;
