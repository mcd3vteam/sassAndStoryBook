import { InsuranceCards } from ".";

export default {
  title: "Organisms/Insurance Cards",
};

const InsuranceCardsArgs = {
  list: [
    {
      insurance: "Aetna",
      details: "Employer Group Plans",
      options: [
        "Aetna Open Choice PPO",
        "Aetna Managed Choice HMO/POS",
        "Aetna QPOS",
        "Aetna through employer groups",
      ],
    },
    {
      insurance: "Aetna",
      details: "Employer Group Plans",
      options: [
        "Aetna Open Choice PPO",
        "Aetna Managed Choice HMO/POS",
        "Aetna QPOS",
        "Aetna through employer groups",
      ],
    },
    {
      insurance: "Aetna",
      details: "Employer Group Plans",
      options: [
        "Aetna Open Choice PPO",
        "Aetna Managed Choice HMO/POS",
        "Aetna QPOS",
        "Aetna through employer groups",
      ],
    },
    {
      insurance: "Aetna",
      details: "Employer Group Plans",
      options: [
        "Aetna Open Choice PPO",
        "Aetna Managed Choice HMO/POS",
        "Aetna QPOS",
        "Aetna through employer groups",
      ],
    },
    {
      insurance: "Aetna",
      details: "Employer Group Plans",
      options: [
        "Aetna Open Choice PPO",
        "Aetna Managed Choice HMO/POS",
        "Aetna QPOS",
        "Aetna through employer groups",
      ],
    },
    {
      insurance: "Aetna",
      details: "Employer Group Plans",
      options: [
        "Aetna Open Choice PPO",
        "Aetna Managed Choice HMO/POS",
        "Aetna QPOS",
        "Aetna through employer groups",
      ],
    },
    {
      insurance: "Aetna",
      details: "Employer Group Plans",
      options: [
        "Aetna Open Choice PPO",
        "Aetna Managed Choice HMO/POS",
        "Aetna QPOS",
        "Aetna through employer groups",
      ],
    },
    {
      insurance: "Aetna",
      details: "Employer Group Plans",
      options: [
        "Aetna Open Choice PPO",
        "Aetna Managed Choice HMO/POS",
        "Aetna QPOS",
        "Aetna through employer groups",
      ],
    },
  ],
};

const IC = (args) => <InsuranceCards {...args} />;
export const Default = IC.bind({});
Default.args = InsuranceCardsArgs;
