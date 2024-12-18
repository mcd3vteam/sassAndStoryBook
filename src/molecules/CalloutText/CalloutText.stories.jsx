import { CalloutText } from ".";

export default {
  title: "Molecules/Callouts",
};

const calloutTextArgs = {
  description: [
    "Note about your privacy: In April 2003, a federal act called the Health Insurance Portability & Accountability Act (HIPAA) went into effect that protects patient information. The hospital cannot release ANY information concerning your medical record, including financial information, to anyone but you, a legal guardian for patients under 18 years of age, and/or a conservator without written permission unless specifically permitted by law.",
  ],
};

const Callout = (args) => {
  const { description } = args;
  return (
    <CalloutText>
      {description && description.map((des, i) => <p key={i}>{des}</p>)}
    </CalloutText>
  );
};

export const Text = Callout.bind({});
Text.args = calloutTextArgs;
